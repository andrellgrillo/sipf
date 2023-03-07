import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { useState } from 'react'
import { Drawer } from '../../components/Drawer'
import { Sidebar } from '../../components/Sidebar'

export function DefaultLayout() {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  return (
    <div className="max-w-7xl h-[96vh] flex flex-col bg-slate-800">
      <Header setIsOpen={setIsOpen} title={title} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Sidebar setIsOpen={setIsOpen} setTitle={setTitle} />
      </Drawer>
      <Outlet />
    </div>
  )
}
