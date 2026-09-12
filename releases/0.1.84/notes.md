Delete a conversation once and it is gone from both places: its source and
ChatsRecall. When the source cannot be reached right then, ChatsRecall removes
it here and finishes the job at the source on a later sync.

## Added

- Delete at the source and here, together, so the two never disagree. The
  action is in the Library and in the Reader header, and the confirmation says
  which of the two it is about to do, because that depends on the source. Most
  sources delete at the source and the local copy goes with it. Wave, Read AI,
  Fireflies, Zoom, and Claude Code or Cowork sessions that live only on this
  computer have no delete ChatsRecall can reach, so the confirmation says so up
  front and offers to remove the conversation from ChatsRecall alone, leaving
  the original where it is.
- Delete now, remove at the source later. If the delete at the source fails,
  because nobody is signed into the right account, no browser is open, or the
  source itself is erroring, the status card offers to remove the conversation
  from ChatsRecall straight away and finish at the source on a later sync. That
  card waits for an answer instead of fading away.
- Syncs finish the deletes you queued. While that happens the source's row in
  the live view reads "Deleting" and names how many conversations are being
  removed at the source, counting through them when there is more than one. It
  returns to its normal finished state as soon as they are done, and a browser
  still working through them keeps its spinner until it has finished.
- A conversation you deleted never comes back. Syncing and live capture both
  check what you deleted before storing anything, so a chat that still exists
  at its source is not added again on the next sync. Wiping a source's local
  data from Settings clears that record too, so the source starts over
  completely.

## Improved

- Starting a new chat picks the right browser. With one compatible connector
  the tab opens immediately. With two or more, a dialog lists the connected
  browsers and you choose where the chat opens, rather than one being picked
  for you.
- Google AI Mode never offers a browser that cannot run it.
- The conversation you started opens by itself. Once its first message is
  captured and saved, ChatsRecall opens it in the Reader in the background. The
  browser keeps focus, so coming back to ChatsRecall shows the chat already
  open. If it belongs to a project it is filed there, with a "Saved to" toast
  when that project's list is on screen. This works with or without a project.
- A conversation you continue somewhere else comes back here on its own. Pick
  where to continue it, send when you are ready, and once the new conversation
  is captured ChatsRecall opens it in the Reader, again without taking the
  browser's focus. If the conversation you continued from belonged to a
  project, the continued chat is filed into the same project once it is sent,
  and both the page and the confirmation name that project. Nothing opens if
  you never send.
- The confirmation shown when a chat is launched explains what will happen:
  that you send when you are ready, and that the conversation will open here
  once it is saved. An empty tab or an unsent draft does not open anything, and
  Claude Code cloud says up front that it will not open here automatically.

## Fixed

- A queued delete that keeps failing is no longer retried forever. It is tried
  for ten syncs and then abandoned, and the Sync History row for that source
  says what succeeded and what was given up on.
