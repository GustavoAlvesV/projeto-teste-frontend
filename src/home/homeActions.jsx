import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

const BASE_URL = 'http://localhost:3000/api'

export function getServices() {
    const request = axios.get(`${BASE_URL}/services`)
    return {
        type: 'SUCCESS_HOME',
        payload: {credit: 100, debt: 50}
    }
    
}


export function create(values) {
    return submit(values, 'post')
}

function submit(values, method) {
    return dispatch => {
        const id = values.id ? values.id : ''
        axios[method](`${BASE_URL}/invoices_services/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function init() {
    return [
        getList()
    ]
}