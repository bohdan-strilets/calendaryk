// eslint-disable-next-line simple-import-sort/imports
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Tooltip,
	Title as chartTitle,
} from 'chart.js'
import { FC } from 'react'
import { Line } from 'react-chartjs-2'

import Title from '@/components/UI/Title'

import { StatisticsProps } from '@/types/props/listCompanies/StatisticsProps'

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

const Statistics: FC<StatisticsProps> = ({ companies }) => {
	const data = {
		labels: companies?.map((company) => company.name),
		datasets: [
			{
				label: 'Salary per hour',
				data: companies?.map((company) => company.salaryPerHour),
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
			{companies && companies?.length > 1 ? (
				<Line data={data} options={options} />
			) : (
				<p style={{ textAlign: 'center' }}>
					To display the statistics, you need to add two or more companies.
				</p>
			)}
		</Wrapper>
	)
}

export default Statistics
