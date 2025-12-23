import React from 'react'

const App = () => {
  const nome = 'jonh';
  const x = 10;
  const y = 20;
  const names = ['Brad', 'Mary', 'Joe', 'Sara'];



  return (
    <div className='text-5xl'>
      <p>Hello {nome}</p>
      <p>The sum of {x} and {y} is: {x + y}</p>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>


    </div>

    
  )
}

export default App;
