import {
	CategoryScale,
	Chart as ChartJS,
	Title as chartTitle,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Tooltip,
} from 'chart.js'
import { FC } from 'react'
import { Line } from 'react-chartjs-2'

import Title from '@/components/UI/Title'

import { companies } from '../data'
import { Wrapper } from './Statistics.styled'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	chartTitle,
	Tooltip,
	Legend
)

const Statistics: FC = () => {
	const data = {
		labels: companies.map((company) => company.name),
		datasets: [
			{
				label: 'Salary per hour',
				data: companies.map((company) => company.salaryPerHour),
				fill: false,
				backgroundColor: '#f00000',
				borderColor: '#f00000',
				tension: 0.4,
			},
		],
	}

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
		},
	}

	return (
		<Wrapper>
			<Title fontSize={28} textAlign="center">
				Salary growth chart
			</Title>
			<Line data={data} options={options} />
		</Wrapper>
	)
}

export default Statistics
