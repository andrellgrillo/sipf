import { useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { FaCheck } from 'react-icons/fa'

import { ClientContext } from '../../context/ClientContext'

const newClientFormSchema = z.object({
  name: z.string(),
  cnpj: z.string(),
  treatment: z.enum(['SR', 'SRA', 'DR', 'DRA']),
  resp: z.string(),
  shortName: z.string(),
  prefix: z.string(),
  status: z.boolean().optional(),
})

type NewClientFormInputs = z.infer<typeof newClientFormSchema>

export function NewClientForm() {
  const { createClient } = useContext(ClientContext)
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewClientFormInputs>({
    resolver: zodResolver(newClientFormSchema),
  })

  async function handleCreateNewClient(data: NewClientFormInputs) {
    console.log(data)
    const { name, cnpj, treatment, resp, shortName, prefix } = data
    await createClient({
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
        <label
          htmlFor="name"
          className="font-semibold leading-tight text-slate-100"
        >
          Nome do Cliente:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Nome do Cliente"
          autoFocus
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-slate-100 placeholder:text-slate-400 uppercase flex-1"
          {...register('name')}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <label
          htmlFor="shortName"
          className="font-semibold leading-tight text-slate-100"
        >
          Nome Curto:
        </label>
        <input
          type="text"
          id="shortName"
          placeholder="Nome do Cliente abreviado"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-slate-100 placeholder:text-slate-400 uppercase flex-1"
          {...register('shortName')}
        />
        <label
          htmlFor="cnpj"
          className="font-semibold leading-tight text-slate-100"
        >
          CNPJ:
        </label>
        <input
          type="text"
          id="cnpj"
          placeholder="CNPJ - somente numeros"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-slate-100 placeholder:text-slate-400 uppercase flex-1"
          {...register('cnpj')}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <label
          htmlFor="treatment"
          className="font-semibold leading-tight text-slate-100"
        >
          Tratamento:
        </label>
        <Controller
          control={control}
          name="treatment"
          render={({ field }) => {
            return (
              <select
                id="treatment"
                defaultValue="SR"
                value={field.value}
                className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-slate-100 uppercase w-20"
                {...register('treatment')}
              >
                <option value="SR">SR.</option>
                <option value="SRA">SRA.</option>
                <option value="DR">DR.</option>
                <option value="DRA">DRA.</option>
              </select>
            )
          }}
        />

        <label
          htmlFor="resp"
          className="font-semibold leading-tight text-slate-100"
        >
          Responsável:
        </label>
        <input
          type="text"
          id="resp"
          placeholder="Nome do Responsável"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-slate-100 placeholder:text-slate-400 uppercase flex-1"
          {...register('resp')}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <label
          htmlFor="prefixo"
          className="font-semibold leading-tight text-slate-100"
        >
          Prefixo:
        </label>

        <input
          type="text"
          id="prefixo"
          placeholder="Prefixo - identificador de banco de dados Ex.: PMMAP"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-slate-100 placeholder:text-slate-400 uppercase flex-1"
          {...register('prefix')}
        />
      </div>
      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold text-slate-100 bg-emerald-600 
            hover:bg-emerald-700 hover:text-slate-300 transition-colors duration-300"
        disabled={isSubmitting}
      >
        <FaCheck size={20} fontWeight="bold" />
        Confirmar
      </button>
    </form>
  )
}
