import { generateYearOptions } from '../functions/generateYearOptions'

const currentYear = new Date().getFullYear()

export const yearOptions = generateYearOptions(1970, currentYear)
