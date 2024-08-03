import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js'
import { FC } from 'react'
import { Bar, Chart } from 'react-chartjs-2'

import { Group, Item, Wrapper } from './Statistics.styled'

const Statistics: FC = () => {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend,
		PointElement,
		LineElement
	)

	return (
		<Wrapper>
			<Group>
				<Item>
					<Bar
						options={{
							plugins: {
								title: {
									display: true,
									text: 'Number of days in the current month',
								},
								legend: { display: false },
							},
						}}
						data={{
							labels: ['Work', 'Day off', 'Vacation', 'Stick leave'],
							datasets: [
								{
									label: 'Days',
									data: [18, 10, 2, 1],
									backgroundColor: [
										'rgba(0, 0, 0, 0.6)',
										'rgb(0, 150, 70, 0.6)',
										'rgb(200, 0, 0, 0.6)',
										'rgba(226, 80, 13, 0.6)',
									],
								},
							],
						}}
					/>
				</Item>
				<Item>
					<Bar
						options={{
							plugins: {
								title: {
									display: true,
									text: 'Money earned for the current month',
								},
								legend: { display: false },
							},
						}}
						data={{
							labels: ['Brut', 'Net', 'Tax'],
							datasets: [
								{
									label: 'PLN',
									data: [5500, 4200, 1300],
									backgroundColor: [
										'rgba(0, 0, 0, 0.6)',
										'rgb(0, 150, 70, 0.6)',
										'rgb(200, 0, 0, 0.6)',
									],
								},
							],
						}}
					/>
				</Item>
				<Item>
					<Bar
						options={{
							plugins: {
								title: {
									display: true,
									text: 'Money earned this year',
								},
								legend: { display: false },
							},
						}}
						data={{
							labels: ['Brut', 'Net', 'Tax'],
							datasets: [
								{
									label: 'PLN',
									data: [120000, 94000, 26000],
									backgroundColor: [
										'rgba(0, 0, 0, 0.6)',
										'rgb(0, 150, 70, 0.6)',
										'rgb(200, 0, 0, 0.6)',
									],
								},
							],
						}}
					/>
				</Item>
			</Group>
			<Chart
				type="bar"
				data={{
					labels: [
						'January',
						'February',
						'March',
						'April',
						'May',
						'June',
						'July',
						'August',
						'September',
						'October',
						'November',
						'December',
					],
					datasets: [
						{
							type: 'bar',
							label: 'Hours worked by month',
							backgroundColor: 'rgba(0, 0, 0, 0.6)',
							data: [180, 168, 220, 204, 256, 270, 215, 170, 190, 0, 0, 0],
						},
						{
							type: 'line',
							label: 'Standard hours every month',
							borderColor: 'rgb(200, 0, 0, 0.6)',
							backgroundColor: 'rgb(200, 0, 0, 0.6)',
							data: [
								168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168,
							],
						},
					],
				}}
				options={{
					responsive: true,
					plugins: {
						legend: { display: false },
						title: {
							display: true,
							text: 'Statistics by hours for the year',
						},
					},
				}}
			/>
		</Wrapper>
	)
}

export default Statistics
