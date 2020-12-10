import { useState } from 'react'
import './App.css'
// import { fs } from './appRuntime'
import logo from './logo.svg'

// const fs = window.require('fs')

function App() {
  const [files, setFiles] = useState('')

  window.fs.readdir('.', (_: any, f: any[]) => {
    const names = f.join('\n')
    setFiles(names)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>files: {files}</div>
      </header>
    </div>
  )
}

export default App
