import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { FaCheck } from 'react-icons/fa'

import { ContractContext } from '../../context/ContractContext'

const newContractFormSchema = z.object({
  clientId: z.string(),
  modality: z.string(),
  nModality: z.string(),
  process: z.string(),
  contract: z.string(),
  index: z.string(),
  object: z.string(),
  description: z.string(),
  emails: z.string(),
  status: z.boolean().optional(),
})

interface INewContractForm {
  clientId: string
}

type NewContractFormInputs = z.infer<typeof newContractFormSchema>

export function NewContractForm({ clientId }: INewContractForm) {
  const { createContracts } = useContext(ContractContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewContractFormInputs>({
    resolver: zodResolver(newContractFormSchema),
  })

  async function handleCreateNewContract(data: NewContractFormInputs) {
    // console.log(data)
    const {
      clientId,
      modality,
      nModality,
      process,
      contract,
      index,
      object,
      description,
      emails,
    } = data
    await createContracts({
      clientId,
      modality: modality.toUpperCase(),
      nModality,
      process,
      contract,
      index: index.toUpperCase(),
      object: object.toUpperCase(),
      description: description.toUpperCase(),
      emails,
    })
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateNewContract)}
      className="w-full flex flex-col mt-6"
    >
      <div className="flex gap-10 items-center mt-3">
        <input type="hidden" value={clientId} {...register('clientId')} />
        <input
          type="text"
          placeholder="Modalidade"
          autoFocus
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-slate-100 border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('modality')}
        />
        <input
          type="text"
          placeholder="Dados da Modalidade"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-slate-100 border border-solid border-cyan-600 placeholder:text-slate-300 uppercase"
          {...register('nModality')}
        />
        <input
          type="text"
          placeholder="Nº do Processo"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-slate-100 border border-solid border-cyan-600 placeholder:text-slate-300 uppercase"
          {...register('process')}
        />
      </div>
      <div className="flex gap-10 items-center mt-3">
        <input
          type="text"
          placeholder="Nº do Contrato"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-slate-100 border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('contract')}
        />
        <input
          type="text"
          placeholder="Índice de Reajuste"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-slate-100 border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('index')}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <input
          type="text"
          placeholder="E-mails"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-slate-100 border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('emails')}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <textarea
          placeholder="Objeto"
          className="px-2 py-3 h-20 rounded-lg bg-slate-800 leading-tight text-slate-100 border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('object')}
        />
      </div>

      <div className="flex gap-3 items-center mt-3">
        <textarea
          // type="text"

          placeholder="Descrição Para colocar na NF"
          className="px-2 py-3 h-20 rounded-lg bg-slate-800 leading-tight text-slate-100 border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('description')}
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
