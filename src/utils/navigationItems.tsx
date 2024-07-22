import { AiFillHome } from 'react-icons/ai'
import { FaCalendarDays, FaChartLine, FaLightbulb } from 'react-icons/fa6'
import { IoSettings } from 'react-icons/io5'
import { PiListChecksFill, PiUsersThreeFill } from 'react-icons/pi'

export const navigationItems = [
	{ id: 0, label: 'Home', icon: <AiFillHome size={18} /> },
	{ id: 1, label: 'Calendar', icon: <FaCalendarDays size={18} /> },
	{ id: 2, label: 'Todo list', icon: <PiListChecksFill size={18} /> },
	{ id: 3, label: 'Profile', icon: <IoSettings size={18} /> },
	{ id: 4, label: 'Statistics', icon: <FaChartLine size={18} /> },
	{ id: 5, label: 'Users', icon: <PiUsersThreeFill size={18} /> },
	{ id: 6, label: 'About us', icon: <FaLightbulb size={18} /> },
]
