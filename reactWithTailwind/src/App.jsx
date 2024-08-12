
import './App.css'
import Cards from './components/cards'
function App() {

  return (
    <>
    {/* uppar walo ko fragment kehte hai... */}
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
    <Cards username = "shubham sharma"/>
    <Cards/>
    </>
  )
}

export default App
