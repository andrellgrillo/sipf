import { ReactNode } from 'react'
import { IconBaseProps } from 'react-icons'

interface ISection {
  title: string
  children: ReactNode
  icon?: IconBaseProps
}

export function Section({ title, children, icon }: ISection) {
  return (
    <div>
      <div className="flex items-center justify-start gap-2 pl-1 text-slate-500">
        <>{icon}</>
        <p className="font-bold text-lg ">{title}</p>
      </div>
      <div className="flex flex-col gap-1 my-2 items-stretch text-slate-200">
        {children}
      </div>
    </div>
  )
}
