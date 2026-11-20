Text files from another program can now come into ChatsRecall by themselves.

## Highlights

- :folder: **Watched folders** Point ChatsRecall at a folder once, and every
  new or changed .txt or .md file in it becomes a searchable conversation
  within a few seconds. Find it in Settings, under Watched folders.

> Watched folders, Fireflies sync fixes, security fixes

## Added

- Settings has a new Watched folders section. Paste a folder's full path,
  give it a name, and press Watch this folder. Each file becomes one
  conversation, titled from its file name, and the folder's name shows as a
  project on the Projects page and as a chip on each of its conversations.
- An edited file updates its own conversation instead of adding a second
  one. A file that disappears keeps its conversation, and a conversation you
  delete stays deleted, even if its file changes later.
- Files you already imported by hand from the same folder are taken over,
  not copied.
- Only .txt and .md files up to 2 MB are read. Hidden files, links and files
  kept online only (OneDrive) are skipped and listed, and one bad file never
  stops the rest.

## Fixed

- Fireflies no longer re-reads old meetings that never got a summary on
  every sync, which made each Fireflies sync take about five minutes. A
  meeting still without a summary three days on is left alone.
- A sync that ended while the database was busy no longer leaves a source
  stuck on "running" in the sync history; it now shows as failed, with the
  reason.
- Search results and AI answers given to connected assistants never show
  part of a saved password or access key. Before, a key that sat right next
  to the word you searched for could lose its start and come out partly
  unhidden.
- An assistant connected with a fixed port only sends its access code to
  that port when it is the one ChatsRecall is using right now. Otherwise it
  says the code was not sent; remove the fixed port so it follows
  ChatsRecall.
- An access code limited to some accounts no longer lists the other
  accounts' projects when it exports a project.
