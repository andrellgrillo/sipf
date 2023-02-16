import { FaBars } from 'react-icons/fa'

interface IHeader {
  setIsOpen: (open: boolean) => void
  title: string
}

export function Header({ setIsOpen, title }: IHeader) {
  return (
    <div className="p-4 flex justify-start items-center text-white bg-slate-800">
      <button
        className="flex items-center gap-2"
        onClick={() => setIsOpen(true)}
      >
        <FaBars size={20} />
        <h1>{title}</h1>
      </button>
    </div>
  )
}
