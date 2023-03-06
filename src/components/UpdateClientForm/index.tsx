import { useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { FaCheck } from 'react-icons/fa'

import { ClientContext } from '../../context/ClientContext'

const updateClientFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  cnpj: z.string(),
  treatment: z.enum(['SR', 'SRA', 'DR', 'DRA']),
  resp: z.string(),
  shortName: z.string(),
  prefix: z.string(),
})

type UpdateClientFormInputs = z.infer<typeof updateClientFormSchema>

export function UpdateClientForm(
  dataInput: UpdateClientFormInputs,
  setOpen: boolean,
) {
  console.debug(dataInput)
  const { updateClient } = useContext(ClientContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<UpdateClientFormInputs>({
    resolver: zodResolver(updateClientFormSchema),
  })

  async function handleCreateNewClient(data: UpdateClientFormInputs) {
    // console.log(data)
    const { id, name, cnpj, treatment, resp, shortName, prefix } = data
    const response = await updateClient({
      id,
      name: name.toUpperCase(),
      cnpj,
      treatment,
      resp: resp.toUpperCase(),
      shortName: shortName.toUpperCase(),
      prefix: prefix.toUpperCase(),
    })

    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateNewClient)}
      className="w-full flex flex-col mt-6"
    >
      <div className="flex gap-3 items-center mt-3">
        <input
          type="hidden"
          id="id"
          defaultValue={dataInput.id}
          {...register('id')}
        />
        <input
          type="text"
          id="name"
          defaultValue={dataInput.name}
          placeholder="Nome do Cliente"
          autoFocus
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('name')}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <input
          type="text"
          id="shortName"
          defaultValue={dataInput.shortName}
          placeholder="Nome do Cliente abreviado"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('shortName')}
        />
        <input
          type="text"
          id="cnpj"
          defaultValue={dataInput.cnpj}
          placeholder="CNPJ - somente numeros"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('cnpj')}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <select
          id="treatment"
          defaultValue={dataInput.treatment}
          className="px-2 py-3 rounded-lg bg-slate-800 border border-solid border-cyan-600 leading-tight text-white uppercase w-20"
          {...register('treatment')}
        >
          <option value="SR">SR.</option>
          <option value="SRA">SRA.</option>
          <option value="DR">DR.</option>
          <option value="DRA">DRA.</option>
        </select>

        <input
          type="text"
          id="resp"
          defaultValue={dataInput.resp}
          placeholder="Nome do Responsável"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('resp')}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <input
          type="text"
          id="prefixo"
          defaultValue={dataInput.prefix}
          placeholder="Prefixo - identificador de banco de dados Ex.: PMMAP"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('prefix')}
        />
      </div>
      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold text-white bg-emerald-600 
            hover:bg-emerald-700 hover:text-slate-300 transition-colors duration-300"
        disabled={isSubmitting}
      >
        <FaCheck size={20} fontWeight="bold" />
        Confirmar
      </button>
    </form>
  )
}
