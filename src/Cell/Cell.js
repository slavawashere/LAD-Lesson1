import React from 'react';

class Cell extends React.Component{
    render(){
        return <div>{this.props.values}</div>
    }
}

export default Cell;