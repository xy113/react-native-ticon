import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {Map} from './map';

export class Ticon extends React.Component<{
    size:30,
    onPress:()=>null,
    color:'#333',
    name:'blank'
}>{

    render() {
        const {size, color, name} = this.props;
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={{
                    width:size,
                    height:size,
                    ...this.props.style
                }}
                activeOpacity={1}
            >
                <Image style={{
                    tintColor:color,
                    width:size,
                    height:size,
                    resizeMode:'contain'
                }} source={Map[name]}/>
            </TouchableOpacity>
        );
    }
}