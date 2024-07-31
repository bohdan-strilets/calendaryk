type weatherForDay = {
	id: number
	icon: React.ReactNode
	temperature: number
}

export type WeatherForWeekProps = {
	weatherForWeek: weatherForDay[]
}
