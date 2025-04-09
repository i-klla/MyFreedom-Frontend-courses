import { format } from 'date-fns'
import { fetchUsers } from './axios-test'

const formattedDate = format(new Date(), 'dd-MM-yyyy')
console.log(formattedDate)

fetchUsers()