/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { TbListDetails } from 'react-icons/tb'
import { ClientContext } from '../../context/ClientContext'

interface IClienteContract {
  clientId: string
}

// interface IClientContracts {
//   id: string
//   clientId: string
//   modality: string
//   nmodality: string
//   process: string
//   index: string
//   object: string
//   description: string
//   emails: string
//   status: boolean
//   Contracts: {
//     id: string
//     clientId: string
//     modality: string
//     nModality: string
//     process: string
//     contract: string
//     index: string
//     object: string
//     description: string
//   }
// }

export function ClientContracts({ clientId }: IClienteContract) {
  const { clientContracts, readClientContracts } = useContext(ClientContext)

  readClientContracts(clientId)

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
      >
        <div className="w-full border-collapse min-w-[600px]">
          <div className="sticky top-0 bg-slate-500 p-2 text-left text-slate-100 test-sm rounded-tl-[8px] pl-4 last:rounded-tr-[8px]">
            {clientContracts.map((cc) => cc.shortName)}
          </div>
          <div className="rounded-none border border-l-0 border-r-0 border-t-4 border-solid border-slate-800 text-xs  bg-slate-700 w-full">
            <h2 className="mb-0 w-full flex justify-between items-center">
              <table className="w-full border-collapse min-w-[600px]">
                <tbody className="text-slate-300 bg-slate-700 text-left">
                  <tr className=" font-bold">
                    <td className="py-2 pl-4 w-[10%] font-extrabold text-slate-400 text-right pr-3">
                      CONTRATO:
                    </td>
                    <td className="w-[5%]">185/2018</td>
                    <td className="pl-4 w-[10%] font-extrabold text-slate-400 text-right pr-3">
                      PROCESSO:
                    </td>
                    <td className="w-[8%] pl-1">5139/2018</td>
                    <td className="pl-4 w-[10%] font-extrabold text-slate-400 text-right pr-3">
                      MODALIDADE:
                    </td>
                    <td className="w-[15%]">CONVITE</td>
                    <td className="pl-4 w-[10%] font-extrabold text-slate-400 text-right pr-3">
                      Nº MODALIDADE:
                    </td>
                    <td className="w-[5%]">03/2018</td>
                    <td className="pl-4 w-[12%] font-extrabold text-slate-400 text-right pr-3">
                      ÍNDICE DE REAJUSTE:
                    </td>
                    <td className="w-[15%] text-left">IPCA</td>
                  </tr>
                  <tr className=" text-xs font-bold text-left">
                    <td className="py-2 pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                      OBJETO:
                    </td>
                    <td colSpan={9}>
                      SERVIÇOS DE ASSESSORIA E CONSULTORIA NA ÁREA CONTÁBIL
                      FINANCEIRA, CONFORME ANEXO I - TERMO DE REFERÊNCIA DO
                      CONTRATO N° 185/2018.
                    </td>
                  </tr>
                  <tr className=" text-xs font-bold text-left">
                    <td className="py-2 pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                      DESCRIÇÃO:
                    </td>
                    <td colSpan={9} className="pb-4">
                      Valor se refere a serviços de assessoria e consultoria na
                      área contábil financeira, do mês xx/2022, conforme
                      Contrato n° 185/2018, originário da Carta Convite n°
                      03/2018 com vigência de 23/10/2021 a 22/10/2022. Dados
                      bancários para depósito: Banco do Brasil, Ag.:0000-0, CC.:
                      00000-0. Total aproximado dos Tributos Federais, Estaduais
                      e Municipais R${' '}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div id="flush-headingOne" className="mr-4">
                <button
                  className="group relative flex w-full items-center rounded-none border-0 bg-slate-700 text-slate-100 transition [overflow-anchor:none]
                      hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-slate-700 [&:not([data-te-collapse-collapsed])]:text-cyan-600"
                  type="button"
                  data-te-collapse-init
                  data-te-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
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
              id="flush-collapseOne"
              className="!visible border-0 w-full"
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby="flush-headingOne"
              data-te-parent="#accordionFlushExample"
            >
              <div className="py-4 px-5 bg-[#273446] text-slate-100 text-sm">
                <table className="w-full border-collapse min-w-[600px]">
                  <tbody>
                    <tr className="h-8 text-xs font-bold">
                      <td className="pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                        TIPO:
                      </td>
                      <td className="w-20">CONTRATO</td>
                      <td className=" pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                        VALIDADE:
                      </td>
                      <td className="w-40">23/10/2018 - 22/10/2019</td>
                      <td className="pl-4 w-[190px] font-extrabold text-slate-400 text-right pr-3">
                        DATA DO DOCUMENTO:
                      </td>
                      <td className="w-20">23/10/2018</td>
                      <td className=" pl-4 w-[130px] font-extrabold text-slate-400 text-right pr-3">
                        VALOR ANUAL:
                      </td>
                      <td className="w-20">59.760,00</td>
                      <td className=" pl-4 w-[140px] font-extrabold text-slate-400 text-right pr-3">
                        VALOR MENSAL:
                      </td>
                      <td className="w-20">4.980,00</td>
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
                      <td colSpan={7}>00/00/00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
