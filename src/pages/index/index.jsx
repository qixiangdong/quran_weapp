import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  state = {
    surahs: []
  }

  componentWillMount () { }

  componentDidMount () {
    let surahsJson = require('../../datas/surahs.json');
    this.setState({
      surahs: surahsJson
    });
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
       {
         this.state.surahs.map((surah=>{
          return (
            <View>
              <Text>{surah.name}</Text>
              <Text>{surah.translation_zh}</Text>
              <Text>{surah.revelation_type}</Text>

            </View>
          )
         }))
       }
      </View>
    )
  }
}
