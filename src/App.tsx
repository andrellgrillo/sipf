import { checkUpdate, installUpdate } from '@tauri-apps/api/updater'
import { relaunch } from '@tauri-apps/api/process'

import { useState } from 'react'
import { Router } from './Router'

import './index.css'
import 'tw-elements'

async function Update() {
  // console.info('Entrou')
  try {
    const { shouldUpdate, manifest } = await checkUpdate()
    if (shouldUpdate) {
      // display dialog
      const install = await installUpdate()
      console.info(install)
      // instal complete, restart the app
      await relaunch()
      console.info(await checkUpdate())
    }
  } catch (error) {
    console.error(error)
  }
}

function App() {
  const [isOpen, setIsOpen] = useState(false)
  Update()
  return <Router />
}

export default App
