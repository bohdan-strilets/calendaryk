import { AiFillHome } from 'react-icons/ai'
import { FaCalendarDays, FaChartLine, FaLightbulb } from 'react-icons/fa6'
import { HiBuildingOffice2 } from 'react-icons/hi2'
import { IoSettings } from 'react-icons/io5'
import { PiListChecksFill, PiUsersThreeFill } from 'react-icons/pi'

import { navigationPaths } from '../data/navigationPaths'

export const navigationItems = [
	{
		id: 0,
		label: 'Home',
		icon: <AiFillHome size={18} />,
		path: navigationPaths.HOME,
	},
	{
		id: 1,
		label: 'Calendar',
		icon: <FaCalendarDays size={18} />,
		path: navigationPaths.CALENDAR,
	},
	{
		id: 2,
		label: 'Todo list',
		icon: <PiListChecksFill size={18} />,
		path: navigationPaths.TODO_LIST,
	},
	{
		id: 3,
		label: 'Profile',
		icon: <IoSettings size={18} />,
		path: navigationPaths.PROFILE,
	},
	{
		id: 4,
		label: 'Companies',
		icon: <HiBuildingOffice2 size={18} />,
		path: navigationPaths.COMPANIES,
	},
	{
		id: 5,
		label: 'Statistics',
		icon: <FaChartLine size={18} />,
		path: navigationPaths.STATISTICS,
	},
	{
		id: 6,
		label: 'Users',
		icon: <PiUsersThreeFill size={18} />,
		path: navigationPaths.USERS,
	},
	{
		id: 7,
		label: 'About us',
		icon: <FaLightbulb size={18} />,
		path: navigationPaths.ABOUT_US,
	},
]
