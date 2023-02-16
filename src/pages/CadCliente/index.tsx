import { useState } from 'react'
import { Switchs } from '../../components/Switch'

export function CadCliente() {
  const [stts, setStts] = useState(false)

  function handleToggleSwitch() {
    setStts((state) => !state)
  }
  console.log(stts)
  return (
    <div className="w-screen bg-slate-500 p-4">
      <button onClick={handleToggleSwitch}>
        <Switchs status={stts} key={1} />
      </button>
      <Switchs status={true} key={2} />
      <Switchs status={false} key={3} />
      <Switchs status={true} key={4} />
      <Switchs status={false} key={5} />
    </div>
  )
}
