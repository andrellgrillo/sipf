import React, { useContext, useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { FaPlusCircle, FaSearch } from 'react-icons/fa'
import { FiEdit, FiX } from 'react-icons/fi'

import { NewClientForm } from '../../components/NewClientForm'
import { cnpjMask } from '../../lib/cnpjMask'
import { ClientContext } from '../../context/ClientContext'
import { Switchs } from '../../components/Switch'
import { UpdateClientForm } from '../../components/UpdateClientForm'

export function Client() {
  const { clients, pacthClientStatus } = useContext(ClientContext)
  const [filterName, setFilterName] = useState('')

  function handleChangeFilterName(e: React.FormEvent<HTMLInputElement>) {
    const name = e.currentTarget.value.toUpperCase()

    if (name !== null && name !== filterName) {
      setFilterName(name)
    }
  }

  function handleChangeStatus(id: string) {
    pacthClientStatus(id)
  }

  useEffect(() => {
    setFilterName('')
  }, [setFilterName])

  // console.log(clients)

  return (
    <>
      <div className="w-screen px-4 flex justify-end gap-4">
        <div className="flex items-center gap-3">
          <label
            htmlFor="filtro"
            className="font-semibold leading-tight text-slate-100 flex items-center gap-2"
          >
            <FaSearch size={16} />
            Cliente:
          </label>
          <input
            type="text"
            id="filtro"
            placeholder="Pesquisar cliente"
            onChange={handleChangeFilterName}
            className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-slate-100 placeholder:text-slate-400 uppercase flex-1"
          />
        </div>
        <Dialog.Root>
          <Dialog.Trigger
            type="button"
            className="text-sm font-extrabold text-cyan-500 rounded flex justify-center items-center gap-2"
          >
            <FaPlusCircle size={20} />
            NOVO
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="w-screen bg-slate-900/80 fixed inset-0" />
            <Dialog.Content className="absolute p-10 bg-slate-800 rounded-2xl w-full max-w-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Dialog.Close className="absolute right-6 top-6 text-slate-400 hover:text-slate-200">
                <FiX size={24} aria-label="Fechar" />
              </Dialog.Close>
              <Dialog.Title className="text-3xl leading-tight font-extrabold text-slate-100">
                Criar Novo Cliente
              </Dialog.Title>
              <NewClientForm />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
      <div className="flex overflow-auto mt-8 w-screen">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th className="sticky top-0 bg-slate-500 p-2 text-left text-slate-100 text-sm rounded-tl-[8px] pl-4 last:rounded-tr-[8px]">
                NOME
              </th>
              <th className="sticky top-0 bg-slate-500 p-2 text-left text-slate-100 text-sm">
                CNPJ
              </th>
              <th className="sticky top-0 bg-slate-500 p-2 text-left text-slate-100 text-sm">
                RESPONSÁVEL
              </th>
              <th className="sticky top-0 bg-slate-500 p-2 text-left text-slate-100 text-sm">
                STATUS
              </th>
              <th className="sticky top-0 bg-slate-500 p-2 text-center text-slate-100 text-sm rounded-tr-[8px] pr-4">
                EDIÇÃO
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-300 bg-slate-700">
            {clients
              .filter((d) => d.shortName.includes(filterName))
              .map((filteredD) => (
                <tr key={filteredD.id}>
                  <td className=" border-t-4 border-solid border-slate-800 p-2 text-sm w-1/2 pl-4">
                    {filteredD.shortName}
                  </td>
                  <td className=" border-t-4 border-solid border-slate-800 p-2 text-sm">
                    {cnpjMask(filteredD.cnpj)}
                  </td>
                  <td className=" border-t-4 border-solid border-slate-800 p-2 text-sm">
                    {filteredD.treatment}. {filteredD.resp}
                  </td>
                  <td
                    className=" border-t-4 border-solid border-slate-800 p-2 text-sm"
                    onClick={() => handleChangeStatus(filteredD.id)}
                  >
                    <Switchs status={!!filteredD.status} key={filteredD.id} />
                    {/* {filteredD.status ? 'Ativo' : 'Inativo'} */}
                  </td>
                  <td className=" border-t-4 border-solid border-slate-800 p-2 text-sm pr-6">
                    <div className="flex justify-center items-center">
                      <Dialog.Root key={filteredD.id}>
                        <Dialog.Trigger
                          type="button"
                          className="text-sm font-extrabold text-white rounded flex justify-center items-center gap-2 hover:text-cyan-600"
                        >
                          <FiEdit size={20} />
                        </Dialog.Trigger>
                        <Dialog.Portal>
                          <Dialog.Overlay className="w-screen bg-slate-900/80 fixed inset-0" />
                          <Dialog.Content className="absolute p-10 bg-slate-800 rounded-2xl w-full max-w-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Dialog.Close className="absolute right-6 top-6 text-slate-400 hover:text-slate-200">
                              <FiX size={24} aria-label="Fechar" />
                            </Dialog.Close>
                            <Dialog.Title className="text-3xl leading-tight font-extrabold text-slate-100">
                              Atualizar Cliente
                            </Dialog.Title>
                            <UpdateClientForm
                              id={filteredD.id}
                              cnpj={filteredD.cnpj}
                              name={filteredD.name}
                              prefix={filteredD.prefix}
                              resp={filteredD.resp}
                              shortName={filteredD.shortName}
                              treatment={filteredD.treatment}
                            />
                          </Dialog.Content>
                        </Dialog.Portal>
                      </Dialog.Root>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}