import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Counter from './projects/1_projects/Counter.jsx';
import ToDo from './projects/2_projects/ToDo.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <ToDo />
    </>
  )
}

export default App
