Won't install? Download it from chatsrecall.com and run it over your current
version; your library stays. A release that widens what syncs and leaves what
already syncs as it was.

## Highlights

- :srcZoom: **Zoom meeting summaries, with nothing to connect** Turn Zoom on
  in Sources and its AI Companion summaries come in from the zoom.us session
  already signed in to your browser, laid out the way Zoom lays them out.
- :srcFireflies: **Fireflies without an API key** Fireflies now syncs from
  your signed-in app.fireflies.ai session, like Read AI, and opens in the
  Reader on its own Notes, with the transcript one click away.
- :srcClaudeCowork: **Cowork tasks sit inside their Claude projects** A
  claude.ai project is one card holding its chats and its Cowork tasks
  together, with the project's description under its name.

> the Fireflies icon, Continue, Claude accounts, Zoom

## Added

- Zoom syncs AI Companion meeting summaries from the zoom.us session signed
  in to your browser, with no Zoom account to connect; regional Zoom domains
  work too. Each meeting with a summary becomes one conversation, titled with
  the meeting's topic and dated when it started, and reads as a single sheet:
  Quick recap, Next steps, then one titled section per topic. Times follow the
  timezone set in your Zoom profile. Transcripts are not included, since Zoom
  makes them only for cloud recordings. Zoom starts switched off; turn it on
  in Sources.
- Fireflies syncs without an API key, from the app.fireflies.ai session
  signed in to your browser. With a key configured it keeps using the
  Fireflies API, and moving between the two never duplicates a meeting.
  Fireflies still starts switched off; turn it on in Sources.
- Claude Cowork tasks are filed into the claude.ai project they belong to.
  The project stays a single card, and opening it lists its chats and its
  Cowork tasks together, each with its own source badge. Cowork spaces that
  live only on this computer appear as projects of their own under Claude
  Cowork.
- A Claude project card shows the project's description under its name, two
  lines at most, with the full text on hover. A description removed on
  claude.ai is cleared on the next sync.

## Improved

- A Fireflies meeting reads like a Wave session: a Notes | Transcript switch,
  Fireflies' own Notes with their headings and nested bullets intact, and the
  time into the recording above each turn. Meetings already stored are read
  again once on the next sync to gain the switch and, on the browser path,
  their Notes in place of the shorter Overview.
- Continue in another app is disabled on meeting recordings (Wave, Read AI,
  Fireflies, Zoom), with a tooltip saying why: a recording is not a chat
  another AI can pick up. The What's new walkthrough's "open any chat" step
  offers only chats that can be continued.
- Open Original on a Zoom meeting goes to its summary page on zoom.us.
- Fireflies has a new icon: a firefly seen from above, in place of the dot
  and spark that read as a stick at small sizes. Its color moves from orange
  to a pinkish purple, closer to the Fireflies app.

## Fixed

- A Claude account no longer looks empty when an API-only console
  organization is listed before the one you chat in. ChatsRecall now reads
  the first organization that can chat.
