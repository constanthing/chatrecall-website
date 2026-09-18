Quality-of-life work throughout: the app tells you when it is still looking,
files have one name everywhere, and leaving a page takes you back where you
came from.

## Added

- A back link at the top of New Chat and Continue in another app. It returns
  to the conversation you were handing off, or to the project you started the
  chat for, and falls back to Chats otherwise. Escape does the same thing.
- List view shows files. A row with files carries the same chip the cards do,
  and a row without them gives the space back to the title.

## Improved

- Files, generated and attached are now the only words the app uses for them.
  The file chip reads "10 files" and the breakdown moved to the hover
  ("Files: 3 generated, 7 attached"), the file filter says "Any file", and the
  Files page marks each row Generated or Attached.
- A list that is still reading never looks like one that has answered.
  Loading is a dashed panel with the page's pulsing icon; an answer, including
  "nothing here", is a solid card. Chats, Projects, Files and Extensions all
  follow it.
- The Projects page shows that indicator for every read, not just the first
  one after startup, so it no longer says "No projects yet" while it is still
  looking. Projects already on screen stay put while the list refreshes.
- The Extensions count stays blank until the check for connected browsers
  answers, instead of reading 0 first.
- Hover hints now name the chips whose text is a bare value: the file count,
  the prompt count, and the folder, project, repository and branch tags.
- The prompt count spells the word out in both views, since the speech bubble
  on its own reads as messages just as easily.
- Claude Code chats no longer show the same folder twice. The repository tag
  already names the working directory, so the footer's folder chip is left off
  for them. A ChatsRecall project still shows.
- The guided tour was rebuilt against the current app. It now covers filtering
  by source and the three source settings, Projects, and opening a chat, and
  every step that had gone stale was rewritten.
- Help explains how to take a source out of the sidebar, and what the
  difference is between hiding its row and hiding its chats.
- Concepts, Entities and Moments are drawn with the app's standard controls:
  the same segmented switch, search fields, buttons and selection styling as
  the rest of the app.
- Pinned has finished moving out of the sidebar. The row is gone from every
  page; use Pinned only in Filters next to the search box.

## Fixed

- Release notes read as they were written. Bullets in the update window, in
  Settings, and on the website no longer break mid-sentence and leave a word
  stranded on its own line.
- Searching no longer flashes "No matching conversations" for a second before
  the results arrive. The list says it is searching until there is an answer.
