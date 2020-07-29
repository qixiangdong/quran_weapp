import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import "taro-ui/dist/style/components/flex.scss"
import "./surah_intro.scss"

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
          <View class="flex-page">
            <View onClick={this.handleNavigate} className="at-row at-row__align--center">
              <View className="at-col number">
                <Text>{number}</Text>
              </View>
              <View className="at-col">
                <View>
                  <Text>{translation_zh}</Text>
                </View>
                <View className="engname">
                  <Text>{transliteration_en}</Text>
                </View>
              </View>

              <View className="at-col">
                <View>
                  <Text>{revelation_type}</Text>
                </View>
                <View className="totalverses">
                  <Text>{total_verses}节</Text>
                </View>
              </View>
            </View>
          </View>
        );
    }
}
