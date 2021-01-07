import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3000'

export function getList() {
    const request = axios.get(`${BASE_URL}/customers`)
    return {
        type: 'DATA_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values.id ? values.id : ''
        axios[method](`${BASE_URL}/customers/${id}`, values)
            .then(resp => {
                
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                console.log(e)
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(customers) {
    return [ 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('customersForm', customers)
    ]
}

export function showDelete(customers) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('customersForm', customers)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate', 'tabUpdate', 'tabDelete'),
        selectTab('tabList'),
        getList(),
        initialize('customersForm', null)
    ]
}