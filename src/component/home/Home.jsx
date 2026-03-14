import React from 'react'
import Crousel from '../crousel/Crousel'
import LowerCrousel from '../lowercrousel/LowerCrousel'
import Aboutuspage from '../aboutuspage/Aboutuspage'
import Ourservice from '../ourservice/Ourservice'
import Networks from '../network/Networks'
import Eventgallry from '../eventgallery/Eventgallry'
import Whyuse from '../whyuse/Whyuse'

export default function Home() {
  return (
    <>
      <Crousel/>
      <LowerCrousel/>
      <Aboutuspage/>
      <Ourservice/>
      <Networks/>
      <Eventgallry/>
      <Whyuse/>
    </>
  )
}
