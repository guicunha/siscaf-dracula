let state = false;

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.scripting.insertCSS({
    target: {tabId: tabId},
    files: ['dark_mode.css'],
  });
});
