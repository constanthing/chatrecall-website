Experimental search upgrades you can switch on, sync history that tells
your browsers apart, and an early access point for AI tools.

## Added

- An Experimental features switch in Settings. It gathers still-settling
  capabilities in one place: the new Ladder search engine lives behind it,
  and the agent search button, previously always visible, now lives there
  too. With the switch off, nothing about the app changes.
- Ladder search (experimental): a second search engine you can flip to
  right inside the search field. When an exact match comes up empty, it
  progressively loosens the query (all terms, word variants, related
  concepts, soundalikes, partial matches) and stops at the first rung that
  finds enough, labeling every result page with how it matched. A sort
  control picks newest first or best match. Classic stays the default and
  is unchanged.
- An early access point for connecting AI tools to your archive: a local,
  read-only interface (REST and MCP) that listens only on your own
  machine, with per-tool tokens, scopes, daily quotas, and an audit log
  that never records message content. For advanced users for now: tokens
  are created from the command line until a proper in-app page arrives.

## Improved

- Sync History now tells your browsers apart. When more than one browser
  syncs the same source, the run shows one row per source with a small
  status badge per browser; clicking the row expands each browser's own
  result. If one browser fails while another succeeds, the row shows an
  amber warning instead of a red failure.

## Fixed

- After a large database upgrade on first launch, the app could open to an
  empty library until restarted. It now reloads itself when the upgrade
  finishes instead of accepting emptiness as an answer.
