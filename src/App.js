// create your App component here
import React, { Component } from 'react'

class App extends Component {
    state = {
        yaba: []
    }

    render() {
        return(
            <div>
                {this.state}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    yaba: data.daba
                })
            })
    }
}



export default App