import React from 'react';
import {TouchableWithoutFeedback, Image} from 'react-native';
import {Map} from './map';

export default class Ticon extends React.Component<{
    size:30,
    onPress:()=>null,
    color:'#333',
    name:'blank'
}>{

    render() {
        const {size, color, name} = this.props;
        return (
            <TouchableWithoutFeedback
                onPress={this.props.onPress}
                style={{
                    width:size,
                    height:size,
                    ...this.props.style
                }}
            >
                <Image style={{
                    tintColor:color,
                    width:size,
                    height:size,
                    resizeMode:'contain'
                }} source={Map[name]}/>
            </TouchableWithoutFeedback>
        );
    }
}