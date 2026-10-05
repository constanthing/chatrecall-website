A big update: a new source, a new way to organize projects, and a lot of
  groundwork for installs at work.

## Highlights

- :sparkles: **Littlebird joins your library** ChatsRecall now reads the
  Littlebird desktop app's own copy of your account: chats, routine runs and
  meetings, with no browser needed.
- :search: **Search finds more of what you meant** What Claude Code's tools
  printed is now searchable, and a glossary of your own names and misspellings
  finds a conversation whichever spelling you remember.
- :folder: **A conversation can sit in several projects** Projects now mix
  sources freely, each has a stable folder, and your assistants can manage them
  over MCP.

> new-account check, text size, Fireflies and Zoom, fixes

## Added

- Littlebird as a source: chats, routine runs and meetings, read from the
  Littlebird desktop app's local copy (ChatsRecall never changes it).
- A conversation can belong to several local projects; each project gets a
  stable identity and a folder, and the MCP and API can create, change, archive
  and delete projects and file conversations into them.
- A local glossary of your own names, former names and misspellings that feeds
  search, so one spelling finds conversations that used another.
- Search Claude Code tool output (Sync → Settings): what a local Claude Code
  session's tools printed becomes searchable; on by default, and the reader
  shows the conversation as before.
- Before the first save from an account it has not seen, sync asks on the Sync
  page whether to save from it; the answer is remembered per account.
- Ctrl and plus, minus or 0 enlarge, shrink and reset the app's text, like a
  browser; the size is remembered.
- Settings → Meeting sources: an API key field for Fireflies and a Connect Zoom
  button, so both can be set up without developer tools.
- Settings → Updates → Save report: one text file with what support needs to
  see why an update did not install, with no conversation text or account
  details.

## Improved

- The update log is kept on disk, and a failed update check or install now
  says why in plain words (web filter, untrusted certificate, proxy and so on).
- ChatsRecall now uses the proxy set in Windows and the Windows certificate
  store, so it works on company networks that require them.
- A source you were never signed in to shows a grey "Skipped" after a sync
  instead of a red failure.
- Grok says "not signed in" instead of "auth denied" when nobody is signed in.
- An installer can provide a setup file that skips the tour and narrows the
  first sync to the sources that person uses.

## Fixed

- On some PCs a "reg.exe - Application Error" dialog appeared at Windows logon
  and the browser connection was never registered.
- If Windows or antivirus blocked an update's installer, the app closed
  without saying why; the next launch now says the update did not complete.
