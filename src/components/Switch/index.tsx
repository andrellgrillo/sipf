import * as Switch from '@radix-ui/react-switch'
import { clsx } from 'clsx'

interface SwitchProps {
  status: boolean
}

export const Switchs = ({ status }: SwitchProps) => {
  return (
    <div className="flex items-center p-2">
      <Switch.Root
        checked={status}
        className="w-[42px] h-[25px] bg-radix-switch rounded-full relative shadow-switch-root data-[state=checked]:bg-cyan-800 transition-colors duration-500"
        id="airplane-mode"
      >
        <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-switch-thumb transition-all translate-x-[2px] will-change-transform data-[state=checked]:translate-x-[19px] data-[state=checked]:bg-cyan-500" />
      </Switch.Root>
    </div>
  )
}
