import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


import fontsSize from '../assets/fontsSize/fontsSizes'

const HeaderText = ({text}) => {
  return (
    <View style={styles.headerTextContainer}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  )
}

export default HeaderText

const styles = StyleSheet.create({
    headerTextContainer:{
        paddingVertical: wp(3)
    },
    headerText:{
        fontSize: fontsSize.px_24,
        alignSelf: 'center',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: 'black'
    }
})