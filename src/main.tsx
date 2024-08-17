import './styles/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App.tsx'
import Layout from './components/Layout/Layout.tsx'
import ToastifyWrapper from './components/ToastifyWrapper/ToastifyWrapper.tsx'
import Loader from './components/UI/Loader/Loader.tsx'
import { persistor, store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Layout>
				<Provider store={store}>
					<PersistGate loading={<Loader />} persistor={persistor}>
						<App />
						<ToastifyWrapper />
					</PersistGate>
				</Provider>
			</Layout>
		</BrowserRouter>
	</React.StrictMode>
)
