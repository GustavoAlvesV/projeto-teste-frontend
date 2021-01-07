import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field,formValueSelector} from 'redux-form'

import { init } from './customersActions'
import LabelAndInput from '../common/form/labelAndInput'

class CustomersForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='email' component={LabelAndInput} type='email' readOnly={readOnly}
                        label='Email' cols='12 4' placeholder='Informe o email' />
                    <Field name='password' component={LabelAndInput} type='password' readOnly={readOnly}
                        label='Senha' cols='12 4' placeholder='Informe a Senha' />
                    <Field name='confirmPassword' component={LabelAndInput} type='password' readOnly={readOnly}
                        label='Confirmar Senha' cols='12 4' placeholder='Confirme a senha' />
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

CustomersForm = reduxForm({form: 'customersForm', destroyOnUnmount: false})(CustomersForm)
const selector = formValueSelector('customersForm')
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
const mapStateToProps = state => ({
    name: selector(state, 'name'),
    email: selector(state, 'email')
})
export default connect(mapStateToProps, mapDispatchToProps)(CustomersForm)