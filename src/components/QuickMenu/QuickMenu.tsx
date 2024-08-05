import { FC } from 'react'
import { FaCalendarDays, FaChartLine } from 'react-icons/fa6'
import { PiListChecksFill } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'

import { navigationPaths } from '@/utils/data/navigationPaths'

import { Button, Item, List } from './QuickMenu.styled'

const QuickMenu: FC = () => {
	const navigate = useNavigate()

	return (
		<List>
			<Item
				initial={{ x: '-100%', opacity: 0 }}
				animate={{ x: '0', opacity: 1 }}
				transition={{ duration: 0.3 }}
			>
				<Button
					type="button"
					onClick={() => navigate(navigationPaths.CALENDAR)}
				>
					<FaCalendarDays />
				</Button>
			</Item>
			<Item
				initial={{ x: '-100%', opacity: 0 }}
				animate={{ x: '0', opacity: 1 }}
				transition={{ duration: 0.3, delay: 0.3 }}
			>
				<Button
					type="button"
					onClick={() => navigate(navigationPaths.TODO_LIST)}
				>
					<PiListChecksFill />
				</Button>
			</Item>
			<Item
				initial={{ x: '-100%', opacity: 0 }}
				animate={{ x: '0', opacity: 1 }}
				transition={{ duration: 0.3, delay: 0.6 }}
			>
				<Button
					type="button"
					onClick={() => navigate(navigationPaths.STATISTICS)}
				>
					<FaChartLine />
				</Button>
			</Item>
		</List>
	)
}

export default QuickMenu
