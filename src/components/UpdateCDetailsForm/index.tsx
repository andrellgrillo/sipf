import { FormEvent, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { FaCheck } from 'react-icons/fa'

import { CDetailContext } from '../../context/CDetailContext'

const updateCDFormSchema = z.object({
  id: z.string(),
  contractId: z.string(),
  type: z.string(),
  documentDate: z.date(),
  dateIn: z.date(),
  dateOut: z.date(),
  annualValue: z.number(),
  monthlyValue: z.number(),
  act: z.string(),
  dou: z.string(),
  din: z.string(),
  doc: z.string(),
})

interface updateCDForm {
  id: string
  contractId: string
  type: string
  documentDate: Date
  dateIn: Date
  dateOut: Date
  annualValue: number
  monthlyValue: number
  act: string
  dou: string
  din: string
  doc: string
  // setOpen: (open: boolean) => void
}

type UpdateCDetailFormInputs = z.infer<typeof updateCDFormSchema>
export function UpdateCDetailsForm(dataInput: updateCDForm) {
  const { updateCDetails } = useContext(CDetailContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<UpdateCDetailFormInputs>({
    resolver: zodResolver(updateCDFormSchema),
  })

  async function handleUpdateCDetails(data: UpdateCDetailFormInputs) {
    console.log(data)
    const {
      id,
      contractId,
      type,
      documentDate,
      dateIn,
      dateOut,
      annualValue,
      monthlyValue,
      act,
      dou,
      din,
      doc,
    } = data

    await updateCDetails({
      id,
      contractId,
      type: type.toUpperCase(),
      documentDate,
      dateIn,
      dateOut,
      annualValue,
      monthlyValue,
      act: act.toUpperCase(),
    })

    reset()
    // dataInput.setOpen(false)
  }

  return (
    <form
      onSubmit={handleSubmit(handleUpdateCDetails)}
      className="w-full flex flex-col mt-6"
    >
      <div className="flex gap-3 items-center mt-3">
        <input
          type="hidden"
          id="id"
          {...register('id')}
          defaultValue={dataInput.id}
        />
        <input
          type="hidden"
          {...register('doc')}
          defaultValue={dataInput.doc}
        />
        <input
          type="hidden"
          {...register('din')}
          defaultValue={dataInput.din}
        />
        <input
          type="hidden"
          {...register('dou')}
          defaultValue={dataInput.dou}
        />
        <input
          type="hidden"
          {...register('contractId')}
          defaultValue={dataInput.contractId}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <input
          type="text"
          defaultValue={dataInput.type}
          placeholder="Contrato ou Aditamento"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('type')}
        />
        <input
          type="date"
          defaultValue={dataInput.doc}
          placeholder="Data do Documento"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('documentDate', { valueAsDate: true })}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <input
          type="date"
          defaultValue={dataInput.din}
          placeholder="Ínicio da Vigência"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('dateIn', { valueAsDate: true })}
        />

        <input
          type="date"
          defaultValue={dataInput.dou}
          placeholder="Término da Vigência"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('dateOut', { valueAsDate: true })}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <input
          type="number"
          defaultValue={dataInput.annualValue}
          placeholder="Valor Anual"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('annualValue', { valueAsNumber: true })}
        />
        <input
          type="number"
          defaultValue={dataInput.monthlyValue}
          placeholder="Valor Mensal"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('monthlyValue', { valueAsNumber: true })}
        />
      </div>
      <div className="flex gap-3 items-center mt-3">
        <input
          type="text"
          defaultValue={dataInput.act}
          placeholder="Atestado Capacidade Técnica"
          className="px-2 py-3 rounded-lg bg-slate-800 leading-tight border border-solid border-cyan-600 text-white placeholder:text-slate-400 uppercase flex-1"
          {...register('act')}
        />
      </div>
      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold text-white bg-emerald-600 
            hover:bg-emerald-700 hover:text-slate-300 transition-colors duration-300 disabled:bg-red-500"
        disabled={isSubmitting}
      >
        <FaCheck size={20} fontWeight="bold" />
        Confirmar
      </button>

      {errors.id ? (
        <p className="text-red-500">id: {errors.type?.message}</p>
      ) : null}

      {errors.contractId ? (
        <p className="text-red-500">contractId: {errors.type?.message}</p>
      ) : null}

      {errors.type ? (
        <p className="text-red-500">type: {errors.type?.message}</p>
      ) : null}

      {errors.dateIn ? (
        <p className="text-red-500">dateIN: {errors.dateIn?.message}</p>
      ) : null}

      {errors.dateOut ? (
        <p className="text-red-500">dateOut: {errors.dateOut?.message}</p>
      ) : null}

      {errors.documentDate ? (
        <p className="text-red-500">
          documentDate: {errors.documentDate?.message}
        </p>
      ) : null}

      {errors.annualValue ? (
        <p className="text-red-500">{errors.annualValue?.message}</p>
      ) : null}

      {errors.monthlyValue ? (
        <p className="text-red-500">{errors.monthlyValue?.message}</p>
      ) : null}
    </form>
  )
}
