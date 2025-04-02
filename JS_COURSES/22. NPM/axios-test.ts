import axios from 'axios'

// export async function fetchUsers() {
//     try {
//         const response = await fetch('https://dummyjson.com/users')
//         const data = await response.json()
//         console.log(data)
//     }
//     catch(err) {
//         console.log(err)
//     }
// }

export async function fetchUsers() {
    try {
        const response = await axios.get('https://dummyjson.com/users')
        console.log(response.data)
    }
    catch(err) {
        console.log(err)
    }
}