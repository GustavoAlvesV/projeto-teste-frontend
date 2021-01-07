import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../auth/authActions'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    changeOpen() {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { name, email } = this.props.user
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li onMouseLeave={() => this.changeOpen()}
                        className={`dropdown user user-menu ${this.state.open ? 'open' : ''}`}>

                        <a href="#" onClick={() => this.changeOpen()}
                            aria-expanded={this.state.open ? 'true' : 'false'}
                            className="dropdown-toggle"
                            data-toggle="dropdown">
                            <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" className="user-image" alt="User Image" />
                            <span className="hidden-xs">{name}</span>
                        </a>

                        <ul className="dropdown-menu">
                            <li className="user-header">
                                <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" className="img-circle" alt="User Image" />
                                <p>{name}<small>{email}</small></p>
                            </li>

                            <li className="user-body">
                                <div className="col-xs-4 text-center">
                                    <a href="#"> Atendimentos</a>
                                </div>
                            </li>

                            <li className="user-footer">
                                <div className="pull-right">
                                    <a href="#" onClick={this.props.logout}
                                    className="btn btn-default btn-flat">Sair</a>
                                </div>
                            </li>

                        </ul>
                    </li>
                </ul>
            </div>
        )
    }

}

const mapStateToPros = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToPros, mapDispatchToProps)(Navbar)