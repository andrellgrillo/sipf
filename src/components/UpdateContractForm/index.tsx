import { useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { FaCheck } from 'react-icons/fa'

import { ContractContext } from '../../context/ContractContext'

const updateContractFormSchema = z.object({
  id: z.string(),
  clientId: z.string(),
  modality: z.string(),
  nModality: z.string(),
  bidding: z.string(),
  process: z.string(),
  contract: z.string(),
  index: z.string(),
  object: z.string(),
  description: z.string(),
  emails: z.string(),
  status: z.boolean().optional(),
})

type UpdateContractFormInputs = z.infer<typeof updateContractFormSchema>

export function UpdateContractForm(
  dataInput: UpdateContractFormInputs,
  setOpen: boolean,
) {
  console.debug(dataInput)
  const { updateContract } = useContext(ContractContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<UpdateContractFormInputs>({
    resolver: zodResolver(updateContractFormSchema),
  })

  async function handleUpdateContract(data: UpdateContractFormInputs) {
    // console.log(data)
    const {
      id,
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
    await updateContract({
      id,
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
      onSubmit={handleSubmit(handleUpdateContract)}
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
          type="hidden"
          defaultValue={dataInput.clientId}
          {...register('clientId')}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <input
          type="text"
          defaultValue={dataInput.modality}
          placeholder="Modalidade"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('modality')}
        />
        <input
          type="text"
          defaultValue={dataInput.nModality}
          placeholder="Nº Modalidade"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('nModality')}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <select
          id="bidding"
          defaultValue={dataInput.bidding}
          className="px-2 py-3 rounded-lg bg-slate-800 border border-solid border-cyan-600 leading-tight text-white uppercase w-32"
          {...register('bidding')}
        >
          <option value="8.666/93">8.666/93</option>
          <option value="14.133/2021">14.133/2021</option>
        </select>
        <input
          type="text"
          defaultValue={dataInput.process}
          placeholder="Nº Processo"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('process')}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <input
          type="text"
          defaultValue={dataInput.contract}
          placeholder="Nº Contrato"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('contract')}
        />
        <input
          type="text"
          defaultValue={dataInput.index}
          placeholder="Indice de Reajuste"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('index')}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <input
          type="text"
          defaultValue={dataInput.emails}
          placeholder="E-mails"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('emails')}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <textarea
          // type="text"
          defaultValue={dataInput.object}
          placeholder="Objeto"
          className="px-2 py-3 h-20 rounded-lg bg-slate-800 leading-tight text-white border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('object')}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <textarea
          // type="text"
          defaultValue={dataInput.description}
          placeholder="Descrição para colocar na NF"
          className="px-2 py-3 h-[140px] rounded-lg bg-slate-800 leading-tight text-white border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
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
