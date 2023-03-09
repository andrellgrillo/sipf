import { useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { FaCheck } from 'react-icons/fa'

import { ContractContext } from '../../context/ContractContext'

const newContractFormSchema = z.object({
  contractDetailId: z.string(),
  number: z.number(),
  nfe: z.string().optional(),
  value: z.string(),
  issue: z.string(),
  period: z.string(),
  activeReport: z.string(),
})

interface INewContractForm {
  contractDetailId: string
}

type NewContractFormInputs = z.infer<typeof newContractFormSchema>

export function NewContractForm({ contractDetailId }: INewContractForm) {
  const { createContracts } = useContext(ContractContext)
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewContractFormInputs>({
    resolver: zodResolver(newContractFormSchema),
  })

  async function handleCreateNewContract(data: NewContractFormInputs) {
    console.log(data)
    const {
      clientId,
      modality,
      nModality,
      bidding,
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
      bidding,
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
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-white border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('modality')}
        />
        <input
          type="text"
          placeholder="Dados da Modalidade"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-white border border-solid border-cyan-600 placeholder:text-slate-300 uppercase"
          {...register('nModality')}
        />
      </div>
      <div className="flex gap-10 items-center mt-3">
        <Controller
          control={control}
          name="bidding"
          render={({ field }) => {
            return (
              <select
                id="bidding"
                defaultValue="8666/93"
                value={field.value}
                className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-slate-100 uppercase w-20"
                {...register('bidding')}
              >
                <option value="8.666/93">8.666/93</option>
                <option value="14.133/2021">14.133/2021</option>
              </select>
            )
          }}
        />
        <input
          type="text"
          placeholder="Nº do Processo"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-white border border-solid border-cyan-600 placeholder:text-slate-300 uppercase"
          {...register('process')}
        />
      </div>
      <div className="flex gap-10 items-center mt-3">
        <input
          type="text"
          placeholder="Nº do Contrato"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-white border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('contract')}
        />
        <input
          type="text"
          placeholder="Índice de Reajuste"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-white border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('index')}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <input
          type="text"
          placeholder="E-mails"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-white border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('emails')}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <textarea
          placeholder="Objeto"
          className="px-2 py-3 h-20 rounded-lg bg-slate-800 leading-tight text-white border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('object')}
        />
      </div>

      <div className="flex gap-3 items-center mt-3">
        <textarea
          // type="text"

          placeholder="Descrição Para colocar na NF"
          className="px-2 py-3 h-20 rounded-lg bg-slate-800 leading-tight text-white border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('description')}
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
