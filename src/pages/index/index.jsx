import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import SurahList from '../components/surah_list';

export default class Index extends Component {

  state = {
    loading: true,
    surahs: []
  }

  componentWillMount () { }

  componentDidMount () {
    let surahsJson = require('../../datas/surahs.json');
    this.setState({
      surahs: surahsJson,
      loading: false
    });
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {loading, surahs} = this.state
    return (
      <View className='index'>
       <SurahList surahs={surahs} loading={loading} />
      </View>
    )
  }
}
