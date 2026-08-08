Search results can now open the original page at the exact message, a sync walks all your sources through one tab per browser, and the browser extension updates itself without a restart.

## Added

- Open a search result right at the message that matched. Choose "open in browser" on a result and the original page scrolls to that message, outlines it, and paints your search terms, even when the site loads older messages lazily or collapses long ones. Results from sessions that live only on this computer, such as Claude Code and Cowork, open in the reader as before.
- The Extensions page now shows the version each connected browser extension is running and points out when a newer one is available.

> **Early preview:** opening a conversation at the exact message is brand new and not finished yet. Some sites may scroll to the wrong spot, skip the highlight, or take a moment to settle; the conversation itself still opens normally. Support is being verified site by site, and highlighting works best with browser extension 0.1.6. Older extensions fall back to a simpler locator that can miss on some pages.

## Improved

- Sync now opens a single window per connected browser and moves through your sources in one tab, instead of piling up tabs as it goes.
- The library remembers your place. Coming back from a conversation returns you to the same spot in the list, per filter.
- The browser extension (0.1.6) applies Chrome Web Store updates on its own at the next quiet moment, instead of waiting for a full browser restart.

## Fixed

- The browser chooser for Google AI Mode only offers browsers that can actually open it, and when none of them can, the message names what is missing instead of failing with a generic error.

## Removed

- Google AI Mode in Chrome. AI Mode searches, sync, and New Chat now always use another connected browser, such as Edge, with extension 0.1.3 or newer.
