import './App.css'
import Header from './component/header/Header'
import Upperheader from './component/upperheader/Upperheader'
import Router from './router/Router'
import {Footer} from './component/footer/Footer'

function App() {
  return (
    <>
      <Upperheader/>
      <Header/>
      <Router />
      <Footer/>
    </>
  )
}

export default App
