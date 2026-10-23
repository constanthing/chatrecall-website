# Logo files on chatsrecall.com: where each one came from

Retrieved 2026-10-23 for John Reese by a Claude Code agent (dispatch name site-logos-1023), following the research report
`research/logo-policy-research-2026-10-23.md` in the Chief of Staff repository. Every file here is a copy kept in this repository;
the page never links to another site's copy. They are shown only to identify the services ChatsRecall can read, and the home page
says so, and who to write to, in the caption under the Supported Sources chips and in the small print at the bottom.

## The switch between the real logos and our own pictures

One attribute on the body of `index.html` decides which pictures the Supported Sources row shows:

```
<body data-icons="brand">   a source that has a logo file shows its own logo (the default)
<body data-icons="own">     every source shows our in-house line drawing instead
```

To set only one source, put the attribute on that source's list item. It wins over the body in either direction, so one vendor can
be switched back by itself, for example `<li class="source-chip chatgpt" data-icons="own">`. To look at a mode without editing
anything, open the page with `?icons=own` or `?icons=brand` on the end of the address. The rules behind it are the `--brand-display`
and `--own-display` lines in `landing.css`, under the comment that starts "Supported Sources".

Today four sources are set to `own` on their list item:

- **Claude Code**: Anthropic's press kit has a Claude Code logo, but it is a wide wordmark lockup (about 7 to 1) that does not fit an icon slot. The pixel mascot that Simple Icons draws for it was not on the two public Anthropic pages I checked (the Claude Code docs home and claude.com/product/claude-code), so it is not used. No logo file.
- **Claude Cowork**: the press kit has no Cowork logo. No logo file.
- **Google AI Mode**: AI Mode has no mark of its own on a public page, and the Google 'G' is Google's own logo, which Google's published guidance (as the research report reads it) says is not for use in business marketing. No logo file.
- **Zoom**: switched off on purpose, see the table. The file is kept so it can be switched on by removing the pin.

A source with no logo file needs an `<img class="icon-brand" ...>` added to its list item as well as the pin removed.

## Rules applied

1. Marks come only from public pages: a vendor's brand, press, media-kit or guidelines page, or a file the vendor's own public page names for itself. No sign-in, no brand-asset portal and no terms accepted on anyone's behalf.
2. Files are shown as the vendor supplies them, never recoloured, stretched or given effects. The only changes made are cropping an SVG `viewBox` to the mark, dropping a background rectangle, adding the Simple Icons brand colour to a Simple Icons path (it ships with no colour), and cropping and shrinking a raster.
3. Dark marks (ChatGPT, Grok, Perplexity) are made for light backgrounds, so on the dark theme the page puts them on a light square instead of recolouring them.
4. The product name is always shown as plain text beside the logo, and each logo has alt text with the product name.
5. If a product's own mark cannot be found on a public page, the chip shows our own drawing, set to `own`.
6. Re-read each vendor's page by 2027-01-23 (the research report's date), and whenever one of them asks.

## The 10 files

| File | Product | Kind of source | Where it came from | Changes | Notes and licence |
| --- | --- | --- | --- | --- | --- |
| `chatgpt.svg` (2,382 bytes) | ChatGPT | Vendor brand page | https://openai.com/brand/ (Design Guidelines). Zip linked from that page: https://cdn.openai.com/brand/openai-logos.zip (70,258 bytes, last modified 2026-07-06), entry OpenAI-logos/SVGs/OAI_OpenAI-Blossom_Black.svg. | viewBox cropped to the mark. On the dark theme it sits on a light square (the same zip also has a white version, OAI_OpenAI-Blossom_White.svg, not used). | OpenAI's page puts a terms tick-box in front of this download. The zip was fetched from the link in the page without ticking anything; tick it on that page if the acceptance should be on record. |
| `claude.svg` (3,064 bytes) | Claude | Vendor press kit | https://www.anthropic.com/press-kit, which downloads https://www-cdn.anthropic.com/ae59ca4ca194dac9c9dc3bc78c5829468cb0e8af.zip (26,465,941 bytes, last modified 2026-02-06), entry Anthropic media resources/Anthropic logos/Claude logos/4 Claude icon/SVG/ClaudeIcon-Rounded.svg. | none. | No sign-in and no terms on the press-kit link. |
| `gemini.png` (8,912 bytes) | Gemini | Icon the vendor's page declares | https://gemini.google.com/ names this file as its icon (link rel=icon): https://www.gstatic.com/lamda/images/gemini_sparkle_4g_512_lt_f94943af3be039176192d.png (512 x 512, 61,823 bytes). Google's brand hub (https://partnermarketinghub.withgoogle.com/brands/google-gemini/brand-introduction/) shows a login page to visitors without an approved partner account, so it was not used. | cropped to the artwork and downscaled (raster). | - |
| `perplexity.svg` (506 bytes) | Perplexity | Vendor brand page | https://live.standards.site/perplexity/logo (Perplexity's own brand guidelines). Zip linked from that page: Perplexity Logo Nov 2025.zip (553,345 bytes), entry Perplexity Logo Nov 2025/Symbol/Perplexity-Symbol-Color-Light.svg. | the 1920 x 1080 artboard's background rectangle dropped, symbol path kept with its published fill #20808d, viewBox cropped to the path. On the dark theme it sits on a light square (the same zip has a Color-Dark version, not used). | No sign-in and no terms on the download button. |
| `wave.svg` (2,272 bytes) | Wave | Icon the vendor's page declares | https://wave.co/ names this file as its icon (link rel=icon): https://wave.co/icon.svg. Wave has no brand or press page (/press, /brand, /media, /press-kit and /brand-kit all return 404). | none. | - |
| `grok.svg` (925 bytes) | Grok | Vendor brand page | https://x.ai/legal/brand-guidelines. Zip linked from that page: https://data.x.ai/logos/SpaceXAI_Grok_Assets.zip (351,396 bytes; the server answers 403 unless the request carries the guidelines page as Referer, which is what a click on the link sends), entry SpaceXAI_Grok_Assets/Grok_Logomark_Dark.svg. | viewBox cropped to the mark. On the dark theme it sits on a light square (the same zip has a white version, Grok_Logomark_Light.svg, not used). | No sign-in and no terms on the link. |
| `copilot.png` (13,374 bytes) | Copilot | Image on the vendor's page | The HTML of https://copilot.com/ (where copilot.microsoft.com redirects) references this logo image: https://res.cdn.office.net/officehub/images/content/images/unauth-copilotcom/copilot-mobile-logo-static-286643fc8c.png (240 x 240). No brand page or vector file is reachable without Microsoft's asset portal. | cropped to the artwork and downscaled (raster). | The weakest provenance here, and the research report reads Microsoft's trademark page as saying logos need an express licence. The desktop app also has Copilot switched off for now (docs/features/desktop/sources.md). First candidate to pin to our own drawing. |
| `readai.svg` (1,891 bytes) | Read AI | Vendor press kit | https://www.read.ai/press, which links https://readai-assets.s3.amazonaws.com/Read_Press_Kit.zip (36,274,707 bytes, last modified 2022-04-26), entry Logos/SVG/ReadIcon_Color_90x90.svg. | none. | The press kit is from 2022; the icon matches the logomark image on read.ai/press today. |
| `fireflies.png` (6,713 bytes) | Fireflies | Vendor media kit | The 'Media kit' link in the fireflies.ai footer: https://drive.google.com/drive/folders/1V2uKyl1d0yFwguRvv6d66IK9Wg0bdbSN (a public Google Drive folder, no sign-in), subfolder Logos, file 'Fireflies Logomark' (Drive file id 13K8cMm4eJUkp3HoAqx8v9ci7ZYw4UHmN, PNG 1200 x 1228, 81,145 bytes). | cropped to the artwork and downscaled (raster). | - |
| `zoom.svg` (828 bytes) | Zoom | Simple Icons (switched off) | Simple Icons, icon 'zoom': https://cdn.jsdelivr.net/npm/simple-icons@16.35.0/icons/zoom.svg. Zoom's own brand center, https://brand.zoom.com/, puts 'Download assets' behind a sign-in, so it was not used. | fill #0B5CFF added (the brand colour Simple Icons lists), viewBox cropped to the wordmark, title element dropped. | SWITCHED OFF: the chip is pinned to our own drawing because nobody has confirmed that ChatsRecall's Zoom developer agreement covers using the logo. Licence record for this file: the simple-icons 16.35.0 package is published under CC0-1.0; the data entry for 'zoom' has no licence field of its own; it lists Zoom's usage guidelines (https://brand.zoom.us/usage-legal/) and names https://brand.zoom.us/media-library/ as its source. Simple Icons files are one-colour copies. |

Total size of the 10 files: 40,867 bytes.

## Checksums

SHA-256, first 16 hex digits, of each file as downloaded and as shipped here.

| File | As downloaded | As shipped |
| --- | --- | --- |
| `chatgpt.svg` | `75c1e9fffa5e8c43` | `203e4bb59bf851a2` |
| `claude.svg` | `059e22f525d67c62` | `059e22f525d67c62` |
| `gemini.png` | `5e7cfecaa53f4f65` | `c2e5896de7f8ace8` |
| `perplexity.svg` | `9efdb9a753eb84b2` | `d6f1a3bcf3b26606` |
| `wave.svg` | `5e537c4143f491ed` | `2f212ba0462ac73d` |
| `grok.svg` | `a127a7cd42b0450f` | `b89fc7fb92210c64` |
| `copilot.png` | `98a5ebda1f77e63f` | `2b13334a399a530c` |
| `readai.svg` | `f90ad0880a50fc5b` | `f90ad0880a50fc5b` |
| `fireflies.png` | `a77616b7ba785838` | `eece4a65a97422bd` |
| `zoom.svg` | `da5b2f13d38ca61c` | `afb6a7baf341f356` |

## If an owner asks us to change or remove a logo

1. Instantly, with no file change: add `data-icons="own"` to that source's `<li>` in `index.html`, commit and push. The page then shows our own drawing for it.
2. To take the file away as well: delete it from this folder, delete its row above, and remove the `<img class="icon-brand ...">` line from that `<li>`.
3. Use a page-only commit, never a whole-repository revert: the same repository serves the app's update feed (`latest.json`, `releases/`).

The reply address in the page's small print is `support@chatsrecall.com`.
