chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "copyText") {
    const selectedText = window.getSelection().toString();
    navigator.clipboard.writeText(selectedText);
  }
});
