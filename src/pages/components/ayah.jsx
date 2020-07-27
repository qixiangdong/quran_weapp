import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'

export default class Ayah extends Component {
    render() {
        const { number, text, translation } = this.props
        return (
            <View>
                <Text>
                    {number}
                </Text>
                <Text>{text}</Text>
                <Text>{translation}</Text>
            </View>
        )
    }
}
