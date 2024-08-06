import { BsCloudFog2Fill, BsCloudLightningRainFill } from 'react-icons/bs'
import { IoIosPartlySunny, IoIosSunny } from 'react-icons/io'
import { IoRainySharp } from 'react-icons/io5'

export const weather = [
	{
		id: 0,
		icon: <IoIosSunny />,
		temperature: 27,
	},
	{
		id: 1,
		icon: <IoIosPartlySunny />,
		temperature: 24,
	},
	{
		id: 2,
		icon: <IoRainySharp />,
		temperature: 19,
	},
	{
		id: 3,
		icon: <BsCloudLightningRainFill />,
		temperature: 18,
	},
	{
		id: 4,
		icon: <IoIosSunny />,
		temperature: 25,
	},
	{
		id: 5,
		icon: <IoIosSunny />,
		temperature: 29,
	},
	{
		id: 6,
		icon: <BsCloudFog2Fill />,
		temperature: 25,
	},
]
