chrome.commands.onCommand.addListener((command) => {
    if (command === "showPrompts") {
        chrome.action.openPopup();
    }
});
