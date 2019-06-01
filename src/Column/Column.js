import React from 'react';
import Cell from '../Cell/Cell';

class Column extends React.Component{
    showCells(values){
        return values.map(el => {
            return <Cell values = {el}></Cell>
        })
    }

    render(){
        return <div onClick = {() => this.props.onPress(this.props.idx)}>{this.showCells(this.props.values)}</div>
    }
}

export default Column;