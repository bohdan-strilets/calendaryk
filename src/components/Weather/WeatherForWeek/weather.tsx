import { BsCloudFog2Fill, BsCloudLightningRainFill } from 'react-icons/bs'
import { IoIosPartlySunny, IoIosSunny } from 'react-icons/io'
import { IoRainySharp } from 'react-icons/io5'

export const weather = [
	{
		id: 0,
		icon: <IoIosSunny size={36} />,
		temperature: 27,
	},
	{
		id: 1,
		icon: <IoIosPartlySunny size={36} />,
		temperature: 24,
	},
	{
		id: 2,
		icon: <IoRainySharp size={36} />,
		temperature: 19,
	},
	{
		id: 3,
		icon: <BsCloudLightningRainFill size={36} />,
		temperature: 18,
	},
	{
		id: 4,
		icon: <IoIosSunny size={36} />,
		temperature: 25,
	},
	{
		id: 5,
		icon: <IoIosSunny size={36} />,
		temperature: 29,
	},
	{
		id: 6,
		icon: <BsCloudFog2Fill size={36} />,
		temperature: 25,
	},
]
