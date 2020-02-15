// formas de importar:
// import React, {Components} from 'react'
// class Button extends React.Componen

import React, {Components} from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                disable: false,
                title: {
                    text: '12312',
                    color: 'red'
                }
            }
    }


    componentDidMount() {
        console.log('Oi')
    }

    componentDidUpdate() {
        console.log('Oi')
    }

    userClicked = () => this.setState ({
        disabled: disable
    }) // alterar o estado


    render() {
        return (
            <button disable={this.state.disable}>Click me</button>
        )
    }
}