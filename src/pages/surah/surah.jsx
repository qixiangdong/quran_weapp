import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { getCurrentInstance } from '@tarojs/taro'
import './surah.css'
import Ayah from '../components/ayah'

export default class Surah extends Component {
    config = {
        navigationBarTitleText: 'Surah'
    }
    


    render() {
        const number = getCurrentInstance().router.params.number
        const translation_zh = getCurrentInstance().router.params.translation_zh
        const surah_content = require('../../datas/surah_content/'+number+'.json')
        const element = surah_content.verses.map((ayah)=>{
            return <Ayah number={ayah.number} text={ayah.text} translation={ayah.translation_zh} key={ayah.number}/>
        })
        return (
            <View className="page">
                <View className="title">
                {translation_zh}
                </View>
                <View className="content">
                {element}
                </View>
               
            </View>
        )
    }
}
