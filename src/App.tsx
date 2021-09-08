import React from 'react'

import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container-center">
        <Logo />
      </div>
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}

export default App
