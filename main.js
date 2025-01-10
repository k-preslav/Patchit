const path = require("path")
const { app, BrowserWindow } = require("electron")

const isDev = process.env.NODE_ENV !== "production"

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "Patchit",
        width: 900,
        height: 575,
        autoHideMenuBar: true
    });

    // Open devtools if in dev mode
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.loadFile(
        path.join(__dirname, "./renderer/index.html")
    );
}

app.whenReady().then(() => {
    createMainWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    })
})