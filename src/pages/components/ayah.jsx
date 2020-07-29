import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './ayah.scss'

export default class Ayah extends Component {
    render() {
        const { number, translation } = this.props
        return (
            <View className="ayah">
                <Text selectable='true'>
                    {number}.
                </Text>
                <Text selectable='true'>{translation}</Text>
            </View>
        )
    }
}
