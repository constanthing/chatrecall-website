Start a chat straight from a project, and search stays fast while a sync runs.

## Added

- Inside a ChatsRecall project, a New Chat card leads the grid. The first
  conversation you start from it is saved to that project automatically, with
  a "Saved to <project>" confirmation.

## Improved

- Searching with Ladder no longer pauses to rebuild its indexes. New and
  changed conversations are indexed as they are saved, so a search stays quick
  even while a sync or backfill is running.
- New Chat opens the source in your primary connected browser and brings that
  window to the front. Google AI Mode picks the first browser allowed to run
  it.

## Fixed

- Clicking outside the search options popover only closes it; the sidebar row
  or conversation card under the pointer is no longer activated by that click.
