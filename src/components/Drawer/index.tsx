import { ReactNode } from 'react'

interface IDrawer {
  children: ReactNode
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function Drawer({ children, isOpen, setIsOpen }: IDrawer) {
  return (
    <main
      className={
        'fixed overflow-hidden z-10 bg-slate-800 inset-0  transform duration-500 ease-in-out' +
        (isOpen
          ? 'transition-all bg-opacity-30  translate-x-0'
          : 'transition-all bg-opacity-0  -translate-x-full')
      }
    >
      <section
        className={
          'w-screen max-w-xs left-0 absolute bg-slate-900 h-full shadow-xl duration-500 ease-in-out transition-all transform' +
          (isOpen ? 'translate-x-0' : 'delay-500 -translate-x-full')
        }
      >
        {children}
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false)
        }}
      ></section>
    </main>
  )
}
