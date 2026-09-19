Mostly repair work, finishing the meeting capture the last release started.

## Highlights

- :srcWave: **Wave meetings keep every word, and every voice** A recording
  could be stored missing a third of what was said, with its turns run
  together and unattributed. Both are fixed, and sessions already stored that
  way are re-read for you.
- :pencil: **Rename and pin without opening a conversation** Right-click any
  row or card in the Library. The new title now appears the moment you press
  Enter, instead of when the source gets round to confirming it.
- :chat: **Conversations open instantly** The Reader draws its real shape
  straight away and fills it in, rather than sitting blank and then telling
  you the conversation is not available while it is still looking.

> Wave summaries, lost titles, the update window

## Added

- **Rename** and **Pin** in the Library's right-click menu, in the list and
  the card view alike, above Add to Project and Delete. Rename turns the row's
  title, or the card's heading, into an editor in place. An action the source
  cannot take stays in the menu, disabled, with a tooltip saying why, and
  progress appears in the same corner cards a delete uses.

## Improved

- A rename shows its new title immediately, in the Library and in the Reader.
  It goes back to the old one only if the source refuses, with the status card
  saying why. Pushing a rename drives a browser in the background and takes
  around fifteen seconds on some sources, which read as the pencil having done
  nothing at all.
- Opening a conversation no longer means waiting on a blank window. The
  header, the toolbar and the message area are drawn before anything is
  requested, as placeholders the real content lands in without the page
  moving, and "Conversation not available" now appears only when the
  conversation really is gone.
- The update window reads in two tiers. The opening line and the release's two
  or three highlights come first, and everything else collapses into one row
  you can expand, labelled with what it covers. Releases you skipped read the
  same way, and Settings shows the same notes with the record already open. A
  release with no highlights shows its full record, as before.

## Fixed

- A Wave recording is stored with all of its words and with the speaker label
  Wave itself shows above each turn — a real name where its diarizer has one,
  Speaker 1 or Unknown Speaker where it does not. Turns are checked against
  the recording's own flat transcript before anything is stored, and where a
  passage cannot be put to a voice the words are kept without one rather than
  attributed to the wrong person.
- A Wave session no longer loses its transcript to a scrape that could read
  only the summary: it keeps the words it already had, and the Summary |
  Transcript switch stays where it was.
- Wave summaries are read from the session's own data rather than off the
  page, so a session cannot be caught mid-render or read out of the summary
  editor while it is open. A summary that comes back holding less than the one
  already stored is refused, and one holding more is always accepted, so a
  session stored short repairs itself the next time it is read.
- A scrape whose title read comes back empty leaves the stored title alone
  instead of erasing it. On every source: a conversation no longer goes
  untitled in the Library because one scrape missed a heading, and no longer
  drops out of search by name in the meantime.
- Speaker 1 and Unknown Speaker are no longer counted as people when the app
  works out who was in a meeting.
