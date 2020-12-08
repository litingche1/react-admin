import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd'
import store from './store'
// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
// ];

class App extends Component {
    constructor(props) {
        super(props)
        console.log(store.getState())
        this.state = store.getState()
    }

    componentDidMount() {

    }


    render() {
        const conts = {
            width: '500px',
            margin: 'auto',
            height: '500px',
            marginTop: '100px'
        }

        return (
            <div style={conts}>

                <Input placeholder={this.state.inputValue} style={{width: '250px', marginRight: '10px', marginBottom: '8px'}}/>
                <Button type="primary">
                    添加
                </Button>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}


export default App;