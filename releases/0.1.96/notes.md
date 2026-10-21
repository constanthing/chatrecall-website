A big update for anyone setting ChatsRecall up for the first time, and a new
  source for everyone.

## Highlights

- :search: **Search your own chats within a minute of setup** Setup asks which
  AI you use most, brings its newest conversations in first, and tells you the
  moment they are searchable, with three searches built from your own chats.
- :sparkles: **Meta AI joins your library** Conversations from meta.ai can
  now be synced from your signed-in browser; switch it on in the Sync page.
- :sync: **A Refresh never removes Gemini, Wave or Copilot chats** A slow or
  throttled page could make a Refresh delete conversations that still
  existed; it now keeps everything it has.

> search, links, assistants, installs at work, fixes

## Added

- Setup asks "Which AI do you use most?", picking out the AI sites open in
  your browser and the AI apps on this computer; its newest conversations come
  in first and the rest follow on their own.
- When your first conversations are searchable, a card says so and offers
  three searches built from your own chats, each checked to find its
  conversation near the top.
- Meta AI (meta.ai) as a source, off until you switch it on in the Sync page.
- chatsrecall:// links and `ChatsRecall --search "words"` open ChatsRecall on
  that search, even when it is already running.
- Assistants that use ChatsRecall over MCP can bring the window up on the same
  search they ran, so you see the conversation in the app.
- A ChatsRecall installed with a kit can come with AI included for up to 90
  days, so Ask archive works on day one; it ends when your own OpenAI key
  works, and only you can let it write session cards.

## Improved

- Search finds plural and past-tense forms of what you type: "budgets" finds
  "budget", "planned" finds "plan".
- For your first week, search results come best match first unless you pick
  an order; "Relevance" is now called "Best match".
- A sync that could not start now says why instead of doing nothing, and a
  sync where only the browser was missing says to connect it.
- Local Claude Code sessions are read newest first.

## Fixed

- The tour's Sources card now says whether to choose now or later, and its
  switches respond during the tour.
