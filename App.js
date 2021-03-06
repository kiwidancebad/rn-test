import React from 'react'

import ImageTabs from './src/components/ImageTabs'

import { DATA } from './src/constants/images'

const App = () => {
  return <ImageTabs tabs={DATA} />
}

export default App
