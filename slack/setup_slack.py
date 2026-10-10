"""Create the 8 CleanScene Slack channels, set topic/purpose, and pin the rules message.

Usage:
    export SLACK_BOT_TOKEN=xoxb-...      # from the CleanScene Ops app (see manifest.yml)
    python3 setup_slack.py [--dry-run]

Safe to run more than once: existing channels are reused, topics are reset,
and the rules message is only posted and pinned if it is not already pinned.
Private channels (#leads, #management) are created with only the bot in them;
invite Adam and the manager by hand afterwards.
"""
import json
import os
import sys
import urllib.parse
import urllib.request
from pathlib import Path

API = "https://slack.com/api/"
DRY = "--dry-run" in sys.argv


def call(method, **params):
    if DRY:
        print(f"  [dry-run] {method} {params}")
        return {"ok": True, "channel": {"id": "DRY", "name": params.get("name", "")}}
    data = urllib.parse.urlencode(params).encode()
    req = urllib.request.Request(API + method, data=data, headers={
        "Authorization": "Bearer " + os.environ["SLACK_BOT_TOKEN"],
        "Content-Type": "application/x-www-form-urlencoded",
    })
    with urllib.request.urlopen(req) as resp:
        out = json.load(resp)
    if not out.get("ok"):
        raise RuntimeError(f"{method} failed: {out.get('error')}")
    return out


def existing_channels():
    found, cursor = {}, ""
    while True:
        out = call("conversations.list", types="public_channel,private_channel",
                   exclude_archived="true", limit=200, cursor=cursor)
        for ch in out["channels"]:
            found[ch["name"]] = ch
        cursor = out.get("response_metadata", {}).get("next_cursor", "")
        if not cursor:
            return found


def main():
    if not DRY and "SLACK_BOT_TOKEN" not in os.environ:
        sys.exit("Set SLACK_BOT_TOKEN first (see the docstring).")
    spec = json.loads((Path(__file__).parent / "channels.json").read_text())["channels"]
    have = {} if DRY else existing_channels()
    for ch in spec:
        name = ch["name"]
        if name in have:
            cid = have[name]["id"]
            print(f"#{name}: exists")
            if not have[name].get("is_private"):
                call("conversations.join", channel=cid)
        else:
            cid = call("conversations.create", name=name,
                       is_private=str(ch["private"]).lower())["channel"]["id"]
            print(f"#{name}: created")
        call("conversations.setTopic", channel=cid, topic=ch["topic"])
        call("conversations.setPurpose", channel=cid, purpose=ch["purpose"])
        pinned = [] if cid == "DRY" else call("pins.list", channel=cid).get("items", [])
        if not any(p.get("message", {}).get("text") == ch["pinned"] for p in pinned):
            ts = call("chat.postMessage", channel=cid, text=ch["pinned"]).get("ts", "")
            call("pins.add", channel=cid, timestamp=ts)
            print(f"#{name}: rules pinned")
    print("Done. Invite Adam and the manager to #leads and #management.")


if __name__ == "__main__":
    main()
