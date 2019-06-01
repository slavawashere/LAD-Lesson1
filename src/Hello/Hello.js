import React from 'react';

class Hello extends React.Component{
    sayHello(name){
        return 'Hello, ' + name;
    }
    render(){
        const name = this.props.name;
        return <div onClick = {this.props.onPress}>{this.sayHello(name)}</div>
    }
}

export default Hello;