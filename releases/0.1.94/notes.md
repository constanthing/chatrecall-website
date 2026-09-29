A small feature update.

## Highlights

- :srcClaudeCode: **Scheduled task runs stay out of your library** Each run of a
  Claude Desktop scheduled task no longer adds its own card. Sync → Settings →
  Show scheduled task runs brings them back.
- :srcWave: **Delete and file Wave sessions** Delete a Wave session or move it
  into a folder from the Reader or the library's right-click menu.
- :srcPerplexity: **Move Perplexity threads between Spaces** Add a thread to a
  Space, swap it or take it out, from the same places.

> Perplexity pins, Wave favorites, fixes

## Added

- Wave: delete a session (it goes to Wave's Recently Deleted) and move it to a
  folder, from the Reader header or the library's right-click menu.
- Perplexity: Move to Space, to add a thread to a Space, swap it or remove it.
- Sync → Settings: a "Show scheduled task runs" switch, off by default; the
  change applies on the next sync.

## Improved

- Pins you make on Perplexity now come into ChatsRecall with each sync.
- Perplexity pin and delete work from the thread's own page, so older threads
  are reached too, and rename works on any thread, not only the newest 400.
- Wave rename and favorite go through Wave's own requests, with the page as a
  fallback, and each change shows once Wave confirms it.

## Fixed

- Favoriting a Wave session stopped working after Wave removed its Session
  tools dialog.
- A Perplexity or Wave conversation that no longer opens (deleted there, or in
  another account) now fails with that reason instead of counting as done.
