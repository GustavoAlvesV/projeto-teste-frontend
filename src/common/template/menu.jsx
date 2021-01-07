import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Home' icon='dashboard' />
        <MenuItem path='/services' label='Serviço' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'> 
            <MenuItem path='/customers'
                label='Cliente' icon='usd' />
            <MenuItem path='/services'
                label='Serviço' icon='usd' />
            <MenuItem path='/employees'
                label='Funcionário' icon='usd' />
        </MenuTree>
        
    </ul>
)