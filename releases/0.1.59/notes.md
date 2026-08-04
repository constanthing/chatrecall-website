Google AI Mode joins your library, and conversation cards now tell you at a glance where each conversation came from and what files it carries.

## Added

- Sync Google AI Mode searches into your library, including prompts, responses, and the Google account they belong to.
- Open a saved AI Mode search back at its original thread in the browser.
- Searches you delete on Google's side are reconciled into your library during sync.
- Conversation cards show attachment counts, split between files you attached and files the assistant generated.
- Each conversation card names its source in text next to the source icon.

> **Compatibility note:** Google AI Mode searches are captured during sync today. Automatic capture as you browse arrives with the next browser connector update.

## Improved

- The sidebar shows how many browser connectors are attached right now, and the count stays current on every page instead of only inside the Developer Center.
- Conversation cards are denser, with each source's color used as a subtle accent.

## Fixed

- Installing an update no longer stops with a file-in-use error when a browser is connected. The installer now closes the connector helper and waits for it to release before replacing it.

## Removed

- The Library list view and the list/grid switcher. Every conversation now appears in the card grid.
