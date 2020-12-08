import './App.css';
import React from 'react';
// class Gg extends React
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString(),
            active: true,
            childValue:'父组件'
        }
        this.showChange = this.showChange.bind(this)
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.setState({
        //         time: new Date().toLocaleTimeString(),
        //     })
        // }, 1000)

    }

    showChange(idx) {
        return (e) => {

            console.log(e);

            console.log(idx);
            this.setState({
                active: !this.state.active
            })

        }

    }
    changeFrist=(idx)=>{
        return (e) => {
            this.setState({
                childValue: idx
            })
            }

        }

    render() {
        const conts = {
            width: '500px',
            margin: 'auto',
            height: '500px',
            marginTop: '100px'
        }
        //   let fg;
        // let a=''
        // console.log(a)
        // console.log(fg)
        return (
            <div style={conts}>
                <h1>我是一个时钟组件</h1>
                <div className={'color'}>{this.state.time}</div>
                <h1>props父子传值</h1>
                <button onClick={this.showChange(1)}>显示</button>
                <button onClick={this.showChange(2)}>隐藏</button>
                <Child active={this.state.active} changeFrist={this.changeFrist}/>
                <h1>我是子组件传过来的值:{this.state.childValue}</h1>

            </div>
        );
    }
}

function Child(props) {
    console.log(props.changeFrist)
    let active = props.active ? 'active' : ''
    // let abc='我是子组件传过来的值'
    return (
        <div className={'nr' + active}>
            <h1>我是子元素</h1>
            <button onClick={props.changeFrist('我是子组件传过来的值')}>改变父组件的值</button>
        </div>
    )
}



export default App;
