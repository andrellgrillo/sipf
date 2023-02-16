import { Section } from './Section'
import { NavL } from './Link'
import { FaAccessibleIcon } from 'react-icons/fa'

interface ISidebar {
  setIsOpen: (isOpen: boolean) => void
  setTitle: (title: string) => void
}

export function Sidebar({ setIsOpen, setTitle }: ISidebar) {
  return (
    <div className="flex flex-col justify-start gap-2">
      <Section title="Clientes">
        <div className=" flex items-center gap-4 p-4">
          <NavL
            href="/"
            setIsOpen={() => setIsOpen(false)}
            setTitle={setTitle}
            icon={<FaAccessibleIcon size={20} />}
          >
            Home
          </NavL>
        </div>

        <NavL
          href="/cadcli"
          setIsOpen={() => setIsOpen(false)}
          setTitle={setTitle}
          icon={<FaAccessibleIcon size={20} />}
        >
          Overview
        </NavL>
      </Section>
      <Section title="Fluxo">teste</Section>
      <Section title="Atividades">teste</Section>
      <Section title="Clientes">teste</Section>
      <Section title="Fornecedor">teste</Section>
    </div>
  )
}
