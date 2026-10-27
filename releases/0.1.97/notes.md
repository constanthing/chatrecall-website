A big update, and the largest change so far to how ChatsRecall handles your
  accounts.

## Highlights

- :person: **You decide which accounts are saved** When ChatsRecall finds an
  account you haven't answered about, a popup asks on whatever page you're on,
  and the Sync page's new Accounts list lets you stop or start saving from any
  account. A chat you open in your browser follows the same answer.
- :srcClaude: **Every Claude organization, pinned chats included** If you chat
  in more than one Claude organization, such as a personal plan and a work
  Team plan, each one is now its own account, and pinned chats come in with
  every sync.
- :link: **Connect Claude Desktop, Claude Code or Cursor** Settings → Connect
  an agent makes a read-only access code with a ready-to-paste setup and a
  button to test it, so your assistant can search your archive.

> first sync, imports, Full sync, site changes, fixes

## Added

- Settings → Connect an agent: create an access code for Claude Desktop,
  Claude Code or Cursor (read-only unless you also let it organize your
  projects), copy the setup it shows, and test the connection in one click.
  The same screen lists your codes, when each was last used, and Revoke.
- A "New AI account discovered" popup when a sync, or a chat you open in your
  browser, finds an account you haven't answered about: Approve brings its
  conversations in, Don't add keeps them out. If ChatsRecall is behind another
  window, it comes to the front for the question. Close the popup to keep the
  question in a small card in the corner until you decide.
- Sync page → Accounts: every account ChatsRecall saves from or was told not
  to, with Start saving and Stop saving. Neither deletes anything.
- Sync page: one line per AI with how many conversations were found, how many
  have their text, how many are still waiting, and about how long the rest
  will take.
- Claude: each organization you can chat in is its own account, with its own
  question, conversation count and Sync History line.
- Settings → Import takes many files at once; each becomes its own
  conversation, titled from its file name and dated by the file's date.
  Importing the same files again adds nothing twice.

## Improved

- A chat you open or type in your browser now follows "Don't save" for every
  AI, not only Claude, and a chat from an account nobody has answered about
  waits for your answer instead of being saved.
- Claude's pinned chats come in with every sync, not only a Full sync, and a
  chat you unpin in Claude loses its pin here.
- Each Full sync picks up where the last one stopped, so repeated Full syncs
  reach every conversation, older ones included, instead of re-reading the
  newest each time.
- Setup's first sync is a quick start: the newest 15 conversations from each
  AI you pick, your main one first, so you can search within a minute or two.
  Everything older follows by itself over the next hours.
- Setup's extension step names the two buttons to click in the store ("Add to
  Chrome", then "Add extension"), and ChatsRecall comes back to the front once
  the extension connects.
- Restarting ChatsRecall no longer disconnects a connected assistant, and from
  0.1.97 on neither does an update. If you connected one on 0.1.96, restart it
  once after this update.
- When Google shows Gemini's "unusual traffic" check, the sync says so instead
  of failing without a reason.

## Fixed

- On a new install the first sync held every account for an OK and saved
  nothing. Accounts of the AIs you pick during setup are now saved without
  asking, and the ready card names them with a Not mine button.
- With two accounts for the same AI, a sync could remove the other account's
  projects (for ChatGPT with their chats) and add them back on the next run,
  so every sync reported new conversations while the library count stayed the
  same.
- Renaming, pinning, deleting and moving chats from ChatsRecall work again
  after recent changes to ChatGPT, Claude, Perplexity, Gemini and Grok.
- Moving a Claude chat out of a project no longer reports done while the chat
  stays in the project.
- A very long conversation no longer cuts ChatsRecall off from your browser
  partway through a sync.
- A Claude chat you start in your browser is no longer sometimes saved empty.
- Meta AI conversations are read again after meta.ai changed how it loads
  messages.
- A Claude account's name no longer changes to its organization's name after
  you open one of its chats in your browser.
- Includes security fixes.
