Blank conversations now fill in reliably, duplicate accounts are repaired,
and Claude Code sessions show their files.

## Added

- Claude Code sessions now capture file attachments: images pasted into a
  prompt and files the agent created or edited. File names and types only;
  file contents are never read. Sessions saved before this update gain their
  files automatically on an upcoming sync.
- A Select all / Unselect all button on the Sync page flips every source
  switch at once.
- A conversation whose transcript is not saved yet now explains itself in
  the Reader: still queued, tried a few times so far, or given up with the
  recorded reason, instead of a bare "No messages".

## Improved

- Sync runs now rotate which source goes first, so every source gets its
  fair share of long runs.
- Automatic transcript backfill focuses on your most recent 18 months.
  Older conversations stay in your library, and a Full Refresh sync fetches
  them on request.

## Fixed

- A few unsaveable conversations could silently freeze the entire transcript
  backlog behind them; large backlogs of blank conversations now fill in
  over successive syncs (most visible on Perplexity).
- A sign-in hiccup during sync could create a duplicate "default" account
  holding an empty copy of your library (seen with Wave meetings). This no
  longer happens, and existing duplicates are folded back into the real
  account automatically, keeping the newest content and any pins.
- Scrolling the library no longer occasionally shows the same conversation
  twice.
- The minimized browser window a sync uses is now closed reliably after the
  run ends.
