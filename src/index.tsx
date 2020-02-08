import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

const appMount = document.querySelector('#app')
appMount && render(<App />, appMount)

export default App
