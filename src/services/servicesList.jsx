import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList ,showUpdate, showDelete} from './servicesActions'

class ServicesList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(c => (
            <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.description}</td>
                <td>{c.price}</td>
                <td>{c.duration}</td>
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
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Duração</th>
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

const mapStateToProps = state => ({list: state.servicesCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList,showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ServicesList)