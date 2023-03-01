import { useContext, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { TbListDetails } from 'react-icons/tb'
import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'

import { ContractContext } from '../../context/ContractContext'
import { api } from '../../lib/axios'

type IUseParams = {
  nome: string
  clientId: string
}

interface IContractDetails {
  id: string
  contractId: string
  type: string
  dateIn: string
  dateOut: string
  documentDate: string
  annualValue: number
  monthlyValue: number
  act: string
  status: boolean
}

export function ClientContracts() {
  const { nome, clientId } = useParams<keyof IUseParams>() as IUseParams
  const { contracts, readClientContracts } = useContext(ContractContext)
  const [contractDetails, setContractDetails] = useState<IContractDetails[]>([])

  useEffect(() => {
    readClientContracts(clientId)
  }, [clientId, readClientContracts])

  async function handleGetDetails(contractId: string) {
    const response = await api.get(`/details/contract/${contractId}`)
    setContractDetails(response.data)
  }

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
            // onChange={handleChangeFilterName}
            className="px-2 py-3 rounded-lg bg-slate-800 leading-tight text-slate-100 placeholder:text-slate-400 uppercase flex-1"
          />
        </div>
      </div>

      <div
        id="accordionFlushExample"
        className="flex overflow-auto mt-8 w-screen"
        // key={clientContracts.id}
      >
        {contracts.map((contract, i) => {
          return (
            <div
              key={contract.id}
              className="w-full border-collapse min-w-[600px]"
            >
              <div className="sticky top-0 bg-slate-500 p-2 text-left text-slate-100 test-sm rounded-tl-[8px] pl-4 last:rounded-tr-[8px]">
                {nome}
              </div>

              <div className="rounded-none border border-l-0 border-r-0 border-t-4 border-solid border-slate-800 text-xs  bg-slate-700 w-full">
                <h2 className="mb-0 w-full flex justify-between items-center">
                  <table className="w-full border-collapse  min-w-[600px]">
                    <tbody className="text-slate-300 bg-slate-700 text-left">
                      <tr className=" font-bold">
                        <td className="py-2 pl-4 w-[10%] font-extrabold text-slate-400 text-right pr-3">
                          CONTRATO:
                        </td>
                        <td className="w-[5%]">{contract.contract}</td>
                        <td className="pl-4 w-[10%] font-extrabold text-slate-400 text-right pr-3">
                          PROCESSO:
                        </td>
                        <td className="w-[8%] pl-1">{contract.process}</td>
                        <td className="pl-4 w-[10%] font-extrabold text-slate-400 text-right pr-3">
                          MODALIDADE:
                        </td>
                        <td className="w-[15%]">{contract.modality}</td>
                        <td className="pl-4 w-[10%] font-extrabold text-slate-400 text-right pr-3">
                          Nº MODALIDADE:
                        </td>
                        <td className="w-[5%]">{contract.nModality}</td>
                        <td className="pl-4 w-[12%] font-extrabold text-slate-400 text-right pr-3">
                          ÍNDICE DE REAJUSTE:
                        </td>
                        <td className="w-[15%] text-left">{contract.index}</td>
                      </tr>
                      <tr className=" text-xs font-bold text-left">
                        <td className="py-2 pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                          OBJETO:
                        </td>
                        <td colSpan={9}>{contract.object}</td>
                      </tr>
                      <tr className=" text-xs font-bold text-left">
                        <td className="py-2 pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                          DESCRIÇÃO:
                        </td>
                        <td colSpan={9} className="pb-4">
                          {contract.description}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div id={contract.id} className="mr-4">
                    <button
                      className="group relative flex w-full items-center rounded-none border-0 bg-slate-700 text-slate-100 transition [overflow-anchor:none]
                        hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-slate-700 [&:not([data-te-collapse-collapsed])]:text-cyan-600"
                      type="button"
                      data-te-collapse-init
                      data-te-collapse-collapsed
                      data-te-target={`#a${contract.id.toString()}`}
                      aria-expanded="false"
                      aria-controls={`${contract.id}`}
                      onClick={() => handleGetDetails(contract.id)}
                    >
                      <span
                        className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 
                        group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </h2>

                <div
                  id={`a${contract.id.toString()}`}
                  className="!visible hidden border-0"
                  data-te-collapse-item
                  // data-te-collapse-show
                  aria-labelledby={contract.id}
                  data-te-parent="#accordionFlushExample"
                >
                  <div className="py-4 px-5 bg-[#273446] text-slate-100 text-sm">
                    {contractDetails.map((cd) => (
                      <table
                        key={cd.id}
                        className="w-full border-collapse min-w-[600px] border-b-[1px] border-solid border-slate-600"
                      >
                        <tbody>
                          <tr className="h-8 text-xs font-bold">
                            <td className="pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                              TIPO:
                            </td>
                            <td className="w-32">{cd.type}</td>
                            <td className=" pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                              VALIDADE:
                            </td>
                            <td className="w-40">
                              {dayjs(cd.dateIn).format('DD/MM/YYYY')} -{' '}
                              {dayjs(cd.dateOut).format('DD/MM/YYYY')}
                            </td>
                            <td className="pl-4 w-[190px] font-extrabold text-slate-400 text-right pr-3">
                              DATA DO DOCUMENTO:
                            </td>
                            <td className="w-20">
                              {dayjs(cd.documentDate).format('DD/MM/YYYY')}
                            </td>
                            <td className=" pl-4 w-[130px] font-extrabold text-slate-400 text-right pr-3">
                              VALOR ANUAL:
                            </td>
                            <td className="w-20">{cd.annualValue}</td>
                            <td className=" pl-4 w-[140px] font-extrabold text-slate-400 text-right pr-3">
                              VALOR MENSAL:
                            </td>
                            <td className="w-20">{cd.monthlyValue}</td>
                            <td rowSpan={2} className="w-10 pl-5">
                              <TbListDetails size={16} />
                            </td>
                          </tr>
                          <tr className="bg-[#273446] text-xs font-bold">
                            <td
                              colSpan={3}
                              className="py-2 pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3"
                            >
                              SOLICITAÇÃO DE CAPACIDADE TÉCNICA:
                            </td>
                            <td colSpan={7}>{cd.act}</td>
                          </tr>
                        </tbody>
                      </table>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
