A substantial compatibility update, with a round of reliability fixes.

## Highlights

- :srcCopilot: **Copilot works on its new site** ChatsRecall can sync, open,
  continue, and capture chats on copilot.com in Chrome and Edge, while still
  supporting accounts on the old Copilot site.
- :sparkles: **Ask archive explains what it needs** The Ask button now tells
  you when a key or consent is missing, and closing a search no longer leaves
  the sheet stuck on “Researching…”.

> Copilot permissions, history, handoff, updates

## Added

- ChatsRecall reads the new Copilot app at copilot.com, including its chat
  list, messages, pins, and account, while continuing to read the old app for
  accounts still served there.
- On Windows, an OpenAI or Anthropic key saved in the shared FollowThrough
  credential store can be used when no environment variable or ChatsRecall
  key is set. Existing key choices keep their priority.

## Improved

- When Copilot needs permission for copilot.com, the Sync page explains the
  steps and opens the extension’s Allow page in the right browser. If several
  browsers need permission, you can choose which one to open; an older
  extension gets update steps. The Library, Reader, and sidebar also show
  when Copilot needs attention.
- Copilot sync reads every page of the new app’s chat list and complete long
  conversations, even when its background window is minimized. A full sync
  can also remove local copies of chats deleted at Copilot after the list has
  been read completely.
- New prompts and finished replies in an open copilot.com chat are saved
  automatically, including follow-up prompts in the same conversation.
- Sidebar navigation and source rows are more compact, so more fit without
  scrolling.

## Fixed

- Continue in another app fills Copilot’s new message box after the redirect
  to copilot.com, and opening a Copilot conversation at a particular message
  highlights the right prompt or reply on the new page.
- Copilot rename, pin, and delete actions work from a collapsed sidebar and
  wait for the source to confirm the change. Rejected renames and pins no
  longer appear to succeed locally.
- Ask archive explains a missing key or unticked consent box instead of only
  disabling Ask. Closing or cancelling a running search leaves the sheet
  ready for another question, and pressing Ask cannot start a duplicate run.
- Renaming or pinning a conversation stored under multiple accounts updates
  only the right account’s copy; source errors from another signed-in browser
  no longer override the result.
- A failed desktop update now opens the website’s download page, where the
  installer can be run over the current version.
- The separator between dates on conversation cards displays correctly.
