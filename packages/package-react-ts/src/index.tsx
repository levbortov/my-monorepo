import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => <h1>Hello, React from scratch!</h1>

const portalDiv = document.getElementById('root')!

const root = ReactDOM.createRoot(portalDiv)
root.render(<App />)
