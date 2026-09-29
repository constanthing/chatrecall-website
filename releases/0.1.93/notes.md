A feature update, with a few fixes alongside.

## Highlights

- :sparkles: **Cards say what came of each conversation** With an Anthropic or
  OpenAI key connected, each library card shows up to four short lines on the
  result and where things stand, and the Reader opens with a Status Summary.
  Both are searchable. Settings → Session cards sets a daily limit or turns it
  off.
- :srcClaudeCowork: **Claude cards name their project** Claude, Claude Code
  and Cowork cards show the Claude Project the session belongs to, or its
  repository or working folder, on the line above the title.

> Cowork history, Gemini actions, highlights, sidebar

## Added

- Session cards: up to four lines per card and a Status Summary in the
  Reader, written with your own API key after each sync, newest first, and
  only for conversations that changed. About 2 to 5 cents per conversation,
  capped at 50 conversations a day by default. With no key, nothing is sent.
- Claude sessions record their Claude Project and Cowork working folder; the
  Reader lists them, and searching for a project name finds its sessions.

## Improved

- Opening a message or a search match in your browser outlines the whole
  message on ChatGPT's redesigned page, not a piece of it, with browser
  extension 0.1.10. The app now tells the extension where each site keeps its
  messages, so when a site next changes its page, a ChatsRecall update puts
  the highlight right without waiting on the extension.
- Gemini rename, pin, and delete open the conversation directly, so older
  conversations are reached without scrolling through Gemini's history.
- The expanded sidebar is narrower, leaving more room for the library.

## Fixed

- Cowork sessions beyond the first page of Claude's list were never
  captured; the next sync brings in the older ones that were missed.
- Deleting a Gemini conversation that Gemini won't open (already deleted
  there, or signed into another Google account) now fails with that reason
  instead of counting as done.
- The list of changes in the update window no longer collapses by itself
  after a few seconds.
