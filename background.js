chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "copyNotionText",
    title: "Copy Notion comment to clipboard",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "copyNotionText") {
    chrome.tabs.sendMessage(tab.id, { action: "copyText" });
  }
});
