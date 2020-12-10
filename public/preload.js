const fs = require('fs')
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('appRuntime', {
  readdir: fs.readdir,
})
