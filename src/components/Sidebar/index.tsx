import { Section } from './Section'
import { NavL } from './Link'
import { FaFileContract } from 'react-icons/fa'
import { MdAddBusiness, MdDashboard } from 'react-icons/md'

interface ISidebar {
  setIsOpen: (isOpen: boolean) => void
  setTitle: (title: string) => void
}

export function Sidebar({ setIsOpen, setTitle }: ISidebar) {
  return (
    <div className="flex flex-col justify-start gap-2 pt-4">
      <Section title="Clientes" icon={<MdAddBusiness size={24} />}>
        <div className=" flex items-center gap-4 p-4">
          <NavL
            href="/"
            setIsOpen={() => setIsOpen(false)}
            setTitle={setTitle}
            icon={<MdDashboard size={20} />}
          >
            Visão Geral
          </NavL>
        </div>
      </Section>
      <Section title="Contratos" icon={<FaFileContract size={24} />}>
        <div className=" flex items-center gap-4 p-4">
          <NavL
            href="/client/contracts"
            setIsOpen={() => setIsOpen(false)}
            setTitle={setTitle}
            icon={<MdDashboard size={20} />}
          >
            Visão Geral
          </NavL>
        </div>
      </Section>
      <Section title="Atividades">
        <div className=" flex items-center gap-4 p-4">
          <NavL
            href="/teste"
            setIsOpen={() => setIsOpen(false)}
            setTitle={setTitle}
            icon={<MdDashboard size={20} />}
          >
            Teste
          </NavL>
        </div>
      </Section>
      <Section title="Clientes">teste</Section>
      <Section title="Fornecedor">teste</Section>
    </div>
  )
}
