import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { getCurrentInstance } from '@tarojs/taro'
import './surah.css'

export default class Surah extends Component {
    config = {
        navigationBarTitleText: 'Surah'
    }
    


    render() {
        const number = getCurrentInstance().router.params.number
        return (
            <View>
                {number}
            </View>
        )
    }
}
