import React from 'react'
import { Features, Footer, LandingNav } from '../../Landing Components/index.js'

export const Landing = () => {
  return (
    <div>
      <LandingNav />
      <Features />
      <Footer />
    </div>
  )
}

export default Landing