import { FC } from 'react'
import { IoLocationSharp } from 'react-icons/io5'

import villagePng from '@/assets/village/village.png'

import { LocationInfoProps } from '@/types/props/weather/LocationInfoProps'

import {
	CityLabel,
	CountryLabel,
	Image,
	Info,
	LocationDetails,
	Wrapper,
} from './LocationInfo.styled'

const LocationInfo: FC<LocationInfoProps> = ({ country, city }) => {
	return (
		<Wrapper>
			<Image src={villagePng} alt="Village vector" width={240} />
			<Info
				initial={{ x: '-100%', opacity: 0 }}
				animate={{ x: '0', opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<IoLocationSharp size={22} color="var(--green-color)" />
				<LocationDetails>
					<CountryLabel>{country}</CountryLabel>
					<CityLabel>{city}</CityLabel>
				</LocationDetails>
			</Info>
		</Wrapper>
	)
}

export default LocationInfo
