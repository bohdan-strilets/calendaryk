import './styles/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import Layout from './components/Layout/Layout.tsx'
import ToastifyWrapper from './components/ToastifyWrapper/ToastifyWrapper.tsx'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Layout>
				<Provider store={store}>
					<App />
					<ToastifyWrapper />
				</Provider>
			</Layout>
		</BrowserRouter>
	</React.StrictMode>
)
