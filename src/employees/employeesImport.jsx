import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field,formValueSelector} from 'redux-form'

import { init } from './employeesActions'
import InputFile from '../common/form/inputFile'

class EmployeesImport extends Component {

    render() {
        const { handleSubmit} = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field  name="importName" type="file" component={InputFile} cols='12 4'  />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                </div>
            </form>
        )
    }
}

EmployeesImport = reduxForm({form: 'employeesImport', destroyOnUnmount: false})(EmployeesImport)
const selector = formValueSelector('employeesImport')
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
const mapStateToProps = state => ({
    name: selector(state, 'importName')
})
export default connect(mapStateToProps, mapDispatchToProps)(EmployeesImport)