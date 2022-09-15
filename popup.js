let changeColor = document.getElementById("changeColor");

changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: makeDarkMode,
  });
});

function makeDarkMode() {
  const RULES = {
    "div.retool-grid": {
      backgroundColor: "#533483",
    },
    h2: {
      color: "white",
    },
    "div.retool-canvas-container": {
      backgroundColor: "#16213E",
    },
    '.user-select-none > :nth-child(1)': {
      backgroundColor: '#1B1616'
    },
    'rect.bg': {
      fill: "#1B1616"
    },
    '.gtitle': {
      fill: 'white',
    },
    '._retool-container-chart2 .user-select-none > :nth-child(1)': {
      backgroundColor: '#1B1616'
    },
    '._retool-container-chart2 .user-select-none': {
      fill: 'white'
    },
    '._retool-container-chart2 .user-select-none rect.bg': {
      fill: "#1B1616"
    },
    '._retool-container-chart2 .user-select-none .gtitle': {
      fill: "white"
    },
    '._retool-container-chart2 .user-select-none .g-gtitle': {
      fill: "white"
    },
    '#table-table1': {
      borderWidth: '0.5px'
    },
    '#table-table2': {
      borderWidth: '0.5px'
    },
    '.retool-fullscreen-container > :nth-child(2)': {
      display: 'none'
    },
    'main': {
      backgroundColor: "#16213E",
    },
  };

  setInterval(() => {
    Object.keys(RULES).forEach((key) => {
      const newStyling = RULES[key];
      Object.keys(newStyling).forEach((styleKey) => {
        document.querySelector(key).style[styleKey] = newStyling[styleKey];
        console.log(document.querySelector(key));
      });
    });
  }, 3000)
}
