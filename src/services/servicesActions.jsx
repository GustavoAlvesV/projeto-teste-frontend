import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3000'

export function getList() {
    const request = axios.get(`${BASE_URL}/services`)
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
        axios[method](`${BASE_URL}/services/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}


export function showUpdate(services) {
    return [ 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('servicesForm', services)
    ]
}

export function showDelete(services) {
    return [ 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('servicesForm', services)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate', 'tabUpdate', 'tabDelete'),
        selectTab('tabList'),
        getList(),
        initialize('servicesForm', null)
    ]
}