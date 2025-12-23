import React from 'react'

const App = () => {
  const nome = 'jonh';
  const x = 10;
  const y = 20;



  return (
    <div className='text-5xl'>
      <p>Hello {nome}</p>
      <p>The sum of {x} and {y} is: {x + y}</p>
    </div>
  )
}

export default App
