Read AI meetings join your library, search results stop drowning in pasted code, and a sync with two browsers connected reads as one clean list of sources.

## Added

- Sync Read AI meetings into your library. Each meeting arrives with its summary, action items, key questions, and who said what. Read AI appears on the Sync page with its switch off until you opt in.
- The desktop app can now pair with more than one extension build at a time, so a beta or test copy of the browser extension can connect alongside the one from the Chrome Web Store.

> **Compatibility note:** Read AI sync needs browser extension 0.1.5. If you turn the switch on before your extension updates, sync reports a sign-in problem until the update arrives.

## Improved

- Search now focuses on what was said, not on pasted code. Long code blocks no longer flood results for a common identifier, while short snippets such as error messages and one-line commands, plus inline code, stay searchable.
- Updating to this version rebuilds the search index once. The rebuild is fast even on large libraries, and if it needs more than a moment the app shows a progress window with a time estimate instead of a blank screen.
- Extensions running an older version are described in plain language on the Extensions page and in the browser chooser: connected and fully working, with the browser name arriving once the extension updates. No more "Legacy connector" labels or raw connector codes.

## Fixed

- With more than one browser connected, a running sync no longer lists every source twice. Each source is now a single row that marks each browser's progress with its own check, spinner, or cross, and expands to show per-browser accounts, counts, and any errors.
