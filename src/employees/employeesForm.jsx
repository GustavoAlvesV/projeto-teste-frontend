import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field,formValueSelector} from 'redux-form'

import { init } from './employeesActions'
import LabelAndInput from '../common/form/labelAndInput'

class EmployeesForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='email' component={LabelAndInput} type='email' readOnly={readOnly}
                        label='Email' cols='12 4' placeholder='Informe o email' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

EmployeesForm = reduxForm({form: 'employeesForm', destroyOnUnmount: false})(EmployeesForm)
const selector = formValueSelector('employeesForm')
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
const mapStateToProps = state => ({
    name: selector(state, 'name'),
    email: selector(state, 'email')
})
export default connect(mapStateToProps, mapDispatchToProps)(EmployeesForm)