Search works again on installs where the Ladder engine had gone quiet.

## Fixed

- Ladder search returned zero results for every query on databases that skipped the search index build during an earlier upgrade. The missing indexes are now detected and rebuilt automatically on the next launch; the repair takes a few seconds on a large archive.
- Fireflies conversations were filtered out of the library pages. They now appear alongside every other source.
