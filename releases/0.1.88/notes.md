Your meetings are now stored whole — Wave's summary and the words actually
said — and read as documents rather than chats, while long Gemini
conversations stop shrinking when you open them.

## Added

- Wave sessions now keep the full transcript, not just the summary. Where
  Wave separated the voices each turn is stored as who said it and what they
  said, with how far into the recording it was said; a session imported from
  a PDF or a YouTube video keeps the extracted document. Everything is
  searchable.
- A Summary | Transcript switch in the Reader on a Wave session. Summary
  opens first, each view scrolls from the top, and its copy button takes the
  whole of it. The switch appears only when the session actually holds both
  halves.
- A search result opens a Wave session on the half the match is in, instead
  of on the summary with the evidence off screen.
- The update window says where you stand under the new version's name —
  "You're on 0.1.85", and, when you skipped releases, that it also installs
  the ones in between.

## Improved

- A recorded session reads as a document. Summary and transcript are drawn
  as one sheet across a wider measure, without the chat bubbles and the
  source glyph beside every block, which made a meeting look like a
  conversation it never was. Find-in-conversation, the next-section button
  and search landing still move through it block by block.
- Wave summaries are kept as Wave wrote them: headings, bullets and bold
  intact, and nothing above the first heading dropped.
- Meeting sources no longer show a prompt count. A recording has no prompts;
  the number was only how the text had been cut up for search. Cards, rows
  and the Reader header leave the spot empty.
- Releases you skipped are now listed under "Also installed with this
  update", each as a collapsed row you can expand, with the new version's
  own notes always open. The footer states that ChatsRecall restarts to
  finish installing, and the window keeps keyboard focus inside it while
  Escape still closes it.
- Icons throughout the app are drawn with a heavier stroke, so they no
  longer read thin and washed out beside the text next to them.

## Fixed

- Re-opening a long Gemini conversation no longer shrinks it. Gemini only
  loads its most recent exchanges when you open a chat, and that shortened
  version was being stored over the full one; ChatsRecall now fetches the
  earlier exchanges itself, and a re-scrape can only ever add to what is
  stored. This applies to every source: a conversation already saved in full
  is never replaced by a shorter read of it.
- A Wave session no longer moves about between scrapes. A summary caught
  mid-render is recognized and ignored instead of overwriting the settled
  one, so the section count and the point where Summary ends and Transcript
  begins stay put. Sessions already stored from a half-rendered page are
  re-read once on the next sync; nothing has to be found by hand.
- An imported Wave session no longer stores its summary twice, once as the
  summary and again as the transcript.
