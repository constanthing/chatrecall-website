Read AI meetings now capture their full content, and scheduled syncs clean up after themselves instead of leaving a stray browser window open.

## Fixed

- Read AI meetings were coming through nearly empty: summaries were blank, the conversation itself was missing, and meetings with nothing captured kept being retried on every sync without ever finishing. Read AI sends its data in a different shape than ChatsRecall expected. ChatsRecall now reads what Read AI actually sends, so meeting summaries and everything that was said are captured again.
- Long sync runs could leave a minimized browser window behind when the browser briefly lost its connection to ChatsRecall partway through, and that window then stayed open forever. ChatsRecall now remembers any window it could not close and quietly closes it once the browser reconnects, after checking that the window is still only showing sync pages.

## Improved

- Sync history is clearer when Read AI cannot be reached: if the browser connector is too old for Read AI (0.1.5 or newer is needed), the sync now says exactly that instead of reporting an empty result, and when ChatsRecall cannot tell whether you are signed in to a source, the message now includes the reason.
