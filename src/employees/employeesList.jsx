import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList ,showUpdate, showDelete} from './employeesActions'

class EmployeesList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(c => (
            <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.totalCommission}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(c)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(c)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Total Comissão</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.employeesCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList,showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList)