import React, { useContext, useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { NavLink } from 'react-router-dom'
import { FaPlusCircle, FaSearch } from 'react-icons/fa'
import { FiEdit, FiX } from 'react-icons/fi'
import { MdPlaylistAdd } from 'react-icons/md'

import { ClientContext } from '../../context/ClientContext'

import { cnpjMask } from '../../lib/cnpjMask'

import { Switchs } from '../../components/Switch'
import { UpdateClientForm } from '../../components/UpdateClientForm'
import { NewClientForm } from '../../components/NewClientForm'
import { NewContractForm } from '../../components/NewContractForm'
import { Tb3DCubeSphere } from 'react-icons/tb'

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

  // clients.map((c) => {
  //   return c.id
  // })

  return (
    <>
      <div className="w-screen px-4 flex justify-end gap-4">
        <div className="flex items-center gap-3">
          <label
            htmlFor="filtro"
            className="font-semibold leading-tight text-white flex items-center gap-2"
          >
            <FaSearch size={16} />
            Cliente:
          </label>
          <input
            type="text"
            id="filtro"
            placeholder="Pesquisar cliente"
            onChange={handleChangeFilterName}
            className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-white placeholder:text-slate-400 uppercase flex-1"
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
              <Dialog.Title className="text-3xl leading-tight font-extrabold text-white flex items-center gap-3">
                <FaPlusCircle />
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
              <th className="sticky top-0 bg-slate-500 p-2 text-left text-white text-sm rounded-tl-[8px] pl-4 last:rounded-tr-[8px]">
                NOME
              </th>
              <th className="sticky top-0 bg-slate-500 p-2 text-left text-white text-sm">
                CNPJ
              </th>
              <th className="sticky top-0 bg-slate-500 p-2 text-left text-white text-sm">
                RESPONSÁVEL
              </th>
              <th className="sticky top-0 bg-slate-500 p-2 text-left text-white text-sm">
                STATUS
              </th>
              <th className="sticky top-0 bg-slate-500 p-2 text-center text-white text-sm rounded-tr-[8px] pr-4">
                AÇÕES
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
                  </td>
                  <td className=" border-t-4 border-solid border-slate-800 p-2 text-sm pr-6">
                    <div className="flex items-center justify-around">
                      <Dialog.Root key={filteredD.id}>
                        <Dialog.Trigger
                          type="button"
                          className="text-sm font-extrabold rounded flex justify-center items-center gap-2 hover:text-cyan-500"
                        >
                          <FiEdit size={20} />
                        </Dialog.Trigger>
                        <Dialog.Portal>
                          <Dialog.Overlay className="w-screen bg-slate-900/80 fixed inset-0" />
                          <Dialog.Content className="absolute p-10 bg-slate-800 rounded-2xl w-full max-w-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Dialog.Close className="absolute right-6 top-6 text-slate-400 hover:text-slate-200">
                              <FiX size={24} aria-label="Fechar" />
                            </Dialog.Close>
                            <Dialog.Title className="text-3xl leading-tight font-extrabold text-white flex items-center gap-3">
                              <FiEdit />
                              Editar Cliente
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
                      <Dialog.Root>
                        <Dialog.Trigger
                          type="button"
                          className="text-sm font-extrabold rounded flex justify-center items-center gap-2 hover:text-cyan-500"
                        >
                          <MdPlaylistAdd size={26} />
                        </Dialog.Trigger>
                        <Dialog.Portal>
                          <Dialog.Overlay className="w-screen bg-slate-900/80 fixed inset-0" />
                          <Dialog.Content className="absolute p-10 bg-slate-800 rounded-2xl w-full max-w-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Dialog.Close className="absolute right-6 top-6 text-slate-400 hover:text-slate-200">
                              <FiX size={24} aria-label="Fechar" />
                            </Dialog.Close>
                            <Dialog.Title className="text-3xl leading-tight font-extrabold text-white flex items-center gap-3">
                              <FaPlusCircle />
                              Criar Novo Contrato
                            </Dialog.Title>
                            <NewContractForm clientId={filteredD.id} />
                          </Dialog.Content>
                        </Dialog.Portal>
                      </Dialog.Root>

                      <NavLink
                        to={`/contracts/${filteredD.shortName}/${filteredD.id}`}
                        className="hover:text-cyan-500"
                      >
                        <Tb3DCubeSphere size={20} />
                      </NavLink>
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
