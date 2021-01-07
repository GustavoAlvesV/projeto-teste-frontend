import axios from 'axios'
const BASE_URL = 'http://localhost:3000/api'

export function getSummary() {
    //const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    
    return {
        type: 'SUCCESS_HOME',
        payload: {credit: 100, debt: 50}
    }
    
}