chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "copyText") {
    const selectedText = window.getSelection().toString();
    setTimeout(() => {
      navigator.clipboard
        .writeText(selectedText)
        .then(() => {
          console.log("Text successfully copied.");
        })
        .catch((err) => {
          console.error("Unable to write to clipboard:", err);
        });
    }, 200);
  }
});
