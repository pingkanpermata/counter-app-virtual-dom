import React from 'react'

class Counter extends React.Component {
    render() {
        return(
            <div>{this.props.children}</div>
        )
    }
}

export default Counter