import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field,formValueSelector} from 'redux-form'

import { init } from './servicesActions'
import LabelAndInput from '../common/form/labelAndInput'

class ServicesForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome do serviço' />
                    <Field name='description' component={LabelAndInput} type='text' readOnly={readOnly}
                        label='Descrição' cols='12 4' placeholder='Informe a descrição' />
                    <Field name='price' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Preço' cols='12 4' placeholder='Informe o preço' />
                    <Field name='duration' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Duração' cols='12 4' placeholder='Informe a duração' />
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

ServicesForm = reduxForm({form: 'servicesForm', destroyOnUnmount: false})(ServicesForm)
const selector = formValueSelector('servicesForm')
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
const mapStateToProps = state => ({
    name: selector(state, 'name'),
    description: selector(state, 'description'),
    price: selector(state, 'price'),
    duration: selector(state, 'duration')
})
export default connect(mapStateToProps, mapDispatchToProps)(ServicesForm)