import { useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { api } from '../../lib/axios'

import { FaCheck } from 'react-icons/fa'

const newCDetailFormSchema = z.object({
  contractId: z.string(),
  type: z.string(),
  dateIn: z.string(),
  dateOut: z.string(),
  documentDate: z.string(),
  annualValue: z.number(),
  monthlyValue: z.number(),
  act: z.string(),
  status: z.boolean().optional(),
})

interface INewCDetailForm {
  contractId: string
}

type NewCDetailFormInputs = z.infer<typeof newCDetailFormSchema>

export function NewCDetailForm({ contractId }: INewCDetailForm) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewCDetailFormInputs>({
    resolver: zodResolver(newCDetailFormSchema),
  })

  async function handleCreateNewCDetail(data: NewCDetailFormInputs) {
    console.warn('oi')
    console.log(data)
    const {
      type,
      dateIn,
      dateOut,
      documentDate,
      annualValue,
      monthlyValue,
      act,
    } = data
    await api.post(`/details/contract/${contractId}`, {
      type: type.toUpperCase(),
      dateIn,
      dateOut,
      documentDate,
      annualValue,
      monthlyValue,
      act: act.toUpperCase(),
    })

    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateNewCDetail)}
      className="w-full flex flex-col mt-6"
    >
      <div className="flex gap-10 items-center mt-3">
        <input
          type="text"
          placeholder="Contrato ou Aditamento"
          autoFocus
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-white border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('type')}
        />
        <input
          type="text"
          placeholder="Data do Documento"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-white border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('documentDate')}
        />
      </div>
      <div className="flex gap-10 items-center mt-3">
        <input
          type="text"
          placeholder="Ínicio da Vigência"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-white border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('dateIn')}
        />
        <input
          type="text"
          placeholder="Término da Vigência"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-white border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('dateOut')}
        />
      </div>
      <div className="flex gap-10 items-center mt-3">
        <input
          type="text"
          placeholder="Valor Anual"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-white border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('annualValue')}
        />
        <input
          type="text"
          placeholder="Valor Mensal"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-white border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('monthlyValue')}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <input
          type="text"
          placeholder="Atestado de Capacidade Técnica"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-white border border-solid border-cyan-600 placeholder:text-slate-300 uppercase flex-1"
          {...register('act')}
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
