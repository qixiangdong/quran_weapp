import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'

export default class SurahIntro extends Component {

    handleNavigate = () =>{
        const {number, translation_zh} = this.props
        Taro.navigateTo({
            url: '/pages/surah/surah?number='+number+'&translation_zh='+translation_zh
        })
    }

    componentWillMount () { }

    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }

    render() {
        const {number, transliteration_en, translation_zh, revelation_type, total_verses} = this.props
        return (
           <View onClick={this.handleNavigate} className='at-row'>
           <Text className='at-col' at-col-1>{number}</Text>
           <Text className='at-col' at-col-3>{transliteration_en}</Text>
           <Text className='at-col' at-col-3>{translation_zh}</Text>
           <Text className='at-col' at-col-2>{revelation_type}</Text>
           <Text className='at-col' at-col-2>{total_verses}</Text>

         </View>
        )
    }
}
