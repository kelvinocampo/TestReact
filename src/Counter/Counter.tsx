import { useState } from 'react'

function Counter() {
  /* Cuando el contenido del input son muchos numeros se torna tipo "1.1e+227" */

  const [count, setCount] = useState(0)

  const handleClickUp = () => { setCount(count + 1) }
  const handleClickDown = () => { if (count > 0) setCount(count - 1) }
  const handleClickReset = () => { setCount(0) }
  const handleOnChange = (e: any) => { setCount(parseInt(e.target.value)) }

  return (
    <div className='bg-white rounded w-1/2 p-4 flex justify-center items-center gap-4'>
      <button className='bg-slate-950 text-white px-4 py-2 rounded' onClick={handleClickDown}>-1</button>
      <input
        value={count}
        onChange={handleOnChange}
        className='text-slate-950 flex-1 rounded text-wrap px-4 py-2 text-center outline-none text-xl border border-slate-950'
      />
      <button className='bg-slate-950 text-white px-4 py-2 rounded' onClick={handleClickUp}>+1</button>
      <button className='bg-slate-950 text-white px-4 py-2 rounded' onClick={handleClickReset}>Reset</button>
    </div>
  )
}

export default Counter
