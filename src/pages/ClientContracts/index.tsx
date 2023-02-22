import { FaArrowDown, FaSearch } from 'react-icons/fa'

export function ClientContracts() {
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
      <div className="flex overflow-auto mt-8 w-screen">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th
                colSpan={11}
                className="sticky top-0 bg-slate-500 p-2 text-left text-slate-100 test-sm rounded-tl-[8px] pl-4 last:rounded-tr-[8px]"
              >
                PREFEITURA MUNICIPAL DE MODELÂNDIA PAULISTA
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-300 bg-slate-700">
            <tr className=" border-t-4 border-solid border-slate-800 text-xs font-bold">
              <td className="py-2 pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                CONTRATO:
              </td>
              <td className="w-20">185/2018</td>
              <td className="pl-4 w-[88px] font-extrabold text-slate-400 text-right pr-3">
                PROCESSO:
              </td>
              <td className="w-20 pl-1">5139/2018</td>
              <td className="pl-4 w-[106px] font-extrabold text-slate-400 text-right pr-3">
                MODALIDADE:
              </td>
              <td className="w-40">CONVITE</td>
              <td className="pl-4 w-[100px] font-extrabold text-slate-400 text-right pr-3">
                Nº MODALIDADE:
              </td>
              <td className="w-20">03/2018</td>
              <td className="pl-4 w-[100px] font-extrabold text-slate-400">
                ÍNDICE DE REAJUSTE:
              </td>
              <td className="w-20 text-left">IPCA</td>
              <td rowSpan={3} className="w-10 pl-5">
                <FaArrowDown size={16} />
              </td>
            </tr>
            <tr className=" text-xs font-bold">
              <td className="py-2 pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                OBJETO:
              </td>
              <td colSpan={9}>
                SERVIÇOS DE ASSESSORIA E CONSULTORIA NA ÁREA CONTÁBIL
                FINANCEIRA, CONFORME ANEXO I - TERMO DE REFERÊNCIA DO CONTRATO
                N° 185/2018.
              </td>
            </tr>
            <tr className=" text-xs font-bold">
              <td className="py-2 pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                DESCRIÇÃO:
              </td>
              <td colSpan={9} className="pb-4">
                Valor se refere a serviços de assessoria e consultoria na área
                contábil financeira, do mês xx/2022, conforme Contrato n°
                185/2018, originário da Carta Convite n° 03/2018 com vigência de
                23/10/2021 a 22/10/2022. Dados bancários para depósito: Banco do
                Brasil, Ag.:0000-0, CC.: 00000-0. Total aproximado dos Tributos
                Federais, Estaduais e Municipais R${' '}
              </td>
            </tr>
            <tr className="h-8 bg-[#273446] text-xs font-bold">
              <td className="pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                TIPO:
              </td>
              <td className='"w-20"'>CONTRATO</td>
              <td className=" pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                VALIDADE:
              </td>
              <td className="w-40">23/10/2018 - 22/10/2019</td>
              <td className="pl-4 w-[130px] font-extrabold text-slate-400 text-right pr-3">
                DATA DO DOCUMENTO:
              </td>
              <td className="w-20">23/10/2018</td>
              <td className=" pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                VALOR ANUAL:
              </td>
              <td className="w-20">59.760,00</td>
              <td className=" pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                VALOR MENSAL:
              </td>
              <td className="w-20">4.980,00</td>
              <td rowSpan={2} className="w-10 pl-5">
                <FaArrowDown size={16} />
              </td>
            </tr>
            <tr className="bg-[#273446] text-xs font-bold">
              <td
                colSpan={3}
                className="py-2 pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3"
              >
                DATA DA SOLICITAÇÃO DE CAPACIDADE TÉCNICA:
              </td>
              <td colSpan={7}>00/00/00</td>
            </tr>
            <tr className="h-8 bg-[#273446] text-xs font-bold">
              <td className="pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                TIPO:
              </td>
              <td className='"w-20"'>CONTRATO</td>
              <td className=" pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                VALIDADE:
              </td>
              <td className="w-40">23/10/2018 - 22/10/2019</td>
              <td className="pl-4 w-[130px] font-extrabold text-slate-400 text-right pr-3">
                DATA DO DOCUMENTO:
              </td>
              <td className="w-20">23/10/2018</td>
              <td className=" pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                VALOR ANUAL:
              </td>
              <td className="w-20">59.760,00</td>
              <td className=" pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                VALOR MENSAL:
              </td>
              <td className="w-20">4.980,00</td>
              <td rowSpan={2} className="w-10 pl-5">
                <FaArrowDown size={16} />
              </td>
            </tr>
            <tr className="bg-[#273446] text-xs font-bold">
              <td
                colSpan={3}
                className="py-2 pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3"
              >
                DATA DA SOLICITAÇÃO DE CAPACIDADE TÉCNICA:
              </td>
              <td colSpan={7}>00/00/00</td>
            </tr>
            <tr className="h-8 bg-[#273446] text-xs font-bold">
              <td className="pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                TIPO:
              </td>
              <td className='"w-20"'>CONTRATO</td>
              <td className=" pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                VALIDADE:
              </td>
              <td className="w-40">23/10/2018 - 22/10/2019</td>
              <td className="pl-4 w-[130px] font-extrabold text-slate-400 text-right pr-3">
                DATA DO DOCUMENTO:
              </td>
              <td className="w-20">23/10/2018</td>
              <td className=" pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                VALOR ANUAL:
              </td>
              <td className="w-20">59.760,00</td>
              <td className=" pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3">
                VALOR MENSAL:
              </td>
              <td className="w-20">4.980,00</td>
              <td rowSpan={2} className="w-10 pl-5">
                <FaArrowDown size={16} />
              </td>
            </tr>
            <tr className="bg-[#273446] text-xs font-bold">
              <td
                colSpan={3}
                className="py-2 pl-4 w-[90px] font-extrabold text-slate-400 text-right pr-3"
              >
                DATA DA SOLICITAÇÃO DE CAPACIDADE TÉCNICA:
              </td>
              <td colSpan={7}>00/00/00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
