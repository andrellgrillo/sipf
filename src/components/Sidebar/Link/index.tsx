import { IconBaseProps } from 'react-icons'
import { NavLink } from 'react-router-dom'

interface INavLink {
  children: string
  href: string
  setIsOpen: (open: boolean) => void
  setTitle: (title: string) => void
  icon: IconBaseProps
}

export function NavL({ children, href, setIsOpen, setTitle, icon }: INavLink) {
  function handleClick() {
    setIsOpen(false)
    setTitle(children)
  }

  return (
    <NavLink to={href} onClick={handleClick}>
      <div className="flex items-center gap-2 font-bold text-sm hover:text-cyan-600">
        <>{icon}</>
        {children}
      </div>
    </NavLink>
  )
}
