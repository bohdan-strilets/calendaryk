import './styles/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import Layout from './components/Layout/Layout.tsx'
import ToastifyWrapper from './components/ToastifyWrapper/ToastifyWrapper.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Layout>
				<App />
				<ToastifyWrapper />
			</Layout>
		</BrowserRouter>
	</React.StrictMode>
)
