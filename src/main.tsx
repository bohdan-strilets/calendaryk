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
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Layout>
					<PersistGate loading={<Loader />} persistor={persistor}>
						<App />
						<ToastifyWrapper />
					</PersistGate>
				</Layout>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
