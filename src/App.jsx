
import './App.css'
import Aboutuspage from './component/aboutuspage/Aboutuspage'
import Crousel from './component/crousel/Crousel'
import Eventgallry from './component/eventgallery/Eventgallry'
import Header from './component/header/Header'
import LowerCrousel from './component/lowercrousel/LowerCrousel'
import Networks from './component/network/Networks'
import Ourservice from './component/ourservice/Ourservice'
import Upperheader from './component/upperheader/Upperheader'
import Whyuse from './component/whyuse/Whyuse'
import Router from './router/Router'
import {Footer} from './component/footer/Footer'

function App() {


  return (
   <>
    <Upperheader/>
    <Header/>
    <Crousel/>
    <LowerCrousel/>
    <Aboutuspage/>
    <Ourservice/>
    <Networks/>
    <Eventgallry/>
    <Whyuse/>
   <Footer/>
    <Router />
   </>
  )
}

export default App
