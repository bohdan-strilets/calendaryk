import { FC } from 'react'

import { getCopyright } from '@/utils/functions/getCopyright'

import { Text } from './Copyright.styled'

const Copyright: FC = () => {
	const copyright = getCopyright()

	return <Text>{copyright}</Text>
}

export default Copyright
