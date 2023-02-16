import { ReactNode } from "react";

interface ISection {
  title: string;
  children: ReactNode;
}

export function Section({ title, children}: ISection) {
  return (
    <div>
      <p className="font-medium text-sm text-slate-400">{title}</p>
      <div className="flex flex-col gap-1 my-4 items-stretch text-slate-200">
        {children}
      </div>
    </div>
  )
}