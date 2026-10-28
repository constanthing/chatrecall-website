A small update for assistants connected to ChatsRecall.

## Improved

- An assistant you connected in Settings → Connect an agent (Claude Desktop,
  Claude Code or Cursor) now finds the conversation you mean far more often.
  Its searches look at whole conversations and titles instead of single
  messages, and they list your own chats ahead of automated Claude Code
  runs.
- Assistants now also find your archived conversations and can open them.
  Archived results are marked as archived.
- When nothing matches every word, the assistant gets a few close matches
  labeled as loose, plus a short note: whether its filters hid results, or
  whether fewer words would work better.
- If part of ChatsRecall's search index gets damaged, it now rebuilds that
  part by itself instead of leaving conversations out of search.
