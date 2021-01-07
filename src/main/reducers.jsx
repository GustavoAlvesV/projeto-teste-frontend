import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import CustomersReducer from '../customers/customersReducer'
import EmployeesReducer from '../employees/employeesReducer'
import ServicesReducer from '../services/servicesReducer'
import TabReducer from '../common/tab/tabReducer'
import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers({
    toastr: toastrReducer,
    customersCycle: CustomersReducer,
    employeesCycle: EmployeesReducer,
    servicesCycle:  ServicesReducer,
    form: formReducer,
    tab: TabReducer,
    auth: AuthReducer
})

export default rootReducer