// Every page: the theme; and on Home, the visitor's own computer and the current version.
// From the approved mockup's site.js (docs#541), using the live site's theme setting (chatrecall-theme),
// so a choice made on one page carries over to the others. Each page loads this in <head>.
// The Download page's own script (desktop.html) puts the visitor's computer first there.

// Theme: follows the system until the visitor picks one. Runs in <head> so the page never flashes.
const THEME_KEY = 'chatrecall-theme';
function readSavedTheme() {
  try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
}
function systemTheme() {
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
document.documentElement.dataset.theme = readSavedTheme() || systemTheme();

matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (!readSavedTheme()) document.documentElement.dataset.theme = systemTheme();
});

function toggleTheme() {
  const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* private window: the choice lasts this visit */ }
}

const visitorOnWindows = /Windows/.test(navigator.userAgent);

// The download buttons name the visitor's computer and open its row on the Download page, where the
// release pipeline keeps the current installer links (and the Mac first-open steps are in view).
function nameDownloadButtons() {
  if (!visitorOnWindows) return;
  document.querySelectorAll('[data-download-label]').forEach((label) => { label.textContent = 'Download for Windows'; });
  document.querySelectorAll('[data-download-link]').forEach((link) => { link.href = 'desktop.html#windows-download'; });
  const other = document.getElementById('other-os');
  if (other) {
    other.textContent = 'Mac';
    other.href = 'desktop.html#mac-download';
  }
}

// The version line follows latest.json, which every release updates; the number in the page is the fallback.
function showCurrentVersion() {
  const slot = document.getElementById('home-version');
  if (!slot || !window.fetch) return;
  fetch('latest.json', { cache: 'no-cache' })
    .then((response) => (response.ok ? response.json() : null))
    .then((latest) => {
      if (latest && /^\d+\.\d+\.\d+$/.test(latest.version)) slot.textContent = latest.version;
    })
    .catch(() => { /* keep the number already in the page */ });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-theme-toggle]').forEach((button) => button.addEventListener('click', toggleTheme));
  nameDownloadButtons();
  showCurrentVersion();
});
