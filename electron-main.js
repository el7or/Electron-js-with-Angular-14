const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
  })
  //win.webContents.openDevTools()

  win.loadFile('./dist/angular-build/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.on("send-to-electron", (event, args) => {
  console.log(args)
  event.returnValue = "Login Successfully!";
  //event.sender.send("get-from-electron",{...args, id: 1})
});

ipcMain.on("get-from-electron", (event, args) => {
  event.returnValue = { id: args, name: "Ahmed", description: "This is test" };
});
