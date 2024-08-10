import 'react-toastify/dist/ReactToastify.css'

import { FC } from 'react'
import { Slide, ToastContainer } from 'react-toastify'

const ToastifyWrapper: FC = () => {
	return (
		<ToastContainer
			position="top-right"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="colored"
			limit={3}
			transition={Slide}
		/>
	)
}

export default ToastifyWrapper
