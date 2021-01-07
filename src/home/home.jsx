import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import React, { Component } from 'react'
import ValueBox from  '../common/widget/valueBox'
import Row from  '../common/layout/row'
 
class Home extends Component {
 
   
   
    constructor(props) {
        super(props)
        this.state = { credit: 0, debt: 0 }
    }

    componentWillMount() {
        this.state  = { credit: 10, debt: 20 }
    }

    render() {
        const { credit, debt } = this.state
        return (
            <div> 
                <ContentHeader title='Dashboard' small='Versão 2.0' />
                <Content>
                    <Row> 
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debt}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${credit - debt}`} text='Valor Consolidado' />
                    </Row> 
                </Content> 
            </div>
        )
    }
}
 
export default Home
