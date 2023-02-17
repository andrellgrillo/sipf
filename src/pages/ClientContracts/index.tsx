import { FaSearch } from 'react-icons/fa'

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
        <table className="w-full border-collapse min-w-[600px]"></table>
      </div>
    </>
  )
}
