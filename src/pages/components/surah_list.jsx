import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import SurahIntro from './surah_intro'

export default class SurahList extends Component {



  componentWillMount () { }

  componentDidMount () {

   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { loading, surahs } = this.props

    // if(loading) {
    //   return <Loading />
    // }


    const element = surahs.map((surah)=>{
      return (
        <SurahIntro
          key={surah.number}
          number={surah.number}
          transliteration_en={surah.transliteration_en} 
          translation_zh={surah.translation_zh} 
          revelation_type={surah.revelation_type}
        />
      )
    })

    return (
     <View>
       {element}
     </View>
    )
  }
}
