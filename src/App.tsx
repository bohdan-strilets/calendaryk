import { FC, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useAppDispatch } from './hooks/useAppDispatch'
import { useAppSelector } from './hooks/useAppSelector'
import AboutUsPage from './pages/AboutUsPage'
import AuthPage from './pages/AuthPage'
import CalendarPage from './pages/CalendarPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import StatisticsPage from './pages/StatisticsPage'
import TodoListPage from './pages/TodoListPage'
import UsersPage from './pages/UsersPage'
import { getToken } from './store/auth/authSelectors'
import operations from './store/user/userOperations'
import { navigationPaths } from './utils/data/navigationPaths'

const App: FC = () => {
	const dispatch = useAppDispatch()
	const token = useAppSelector(getToken)

	useEffect(() => {
		if (token) {
			dispatch(operations.getCurrentUser())
		}
	}, [])

	return (
		<>
			<Routes>
				<Route path={navigationPaths.AUTH} element={<AuthPage />} />

				<Route path={navigationPaths.HOME} element={<HomePage />} />
				<Route path={navigationPaths.CALENDAR} element={<CalendarPage />} />
				<Route path={navigationPaths.TODO_LIST} element={<TodoListPage />} />
				<Route path={navigationPaths.PROFILE} element={<ProfilePage />} />
				<Route path={navigationPaths.STATISTICS} element={<StatisticsPage />} />
				<Route path={navigationPaths.USERS} element={<UsersPage />} />
				<Route path={navigationPaths.ABOUT_US} element={<AboutUsPage />} />
			</Routes>
		</>
	)
}

export default App
