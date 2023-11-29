import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderText from '../../components/HeaderText'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const SignUp = () => {
  return (
    <View style={styles.container}>
      <HeaderText text="crate account" />
      {/* Profile Image */}
      <View style={styles.profileImageContainer}></View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue',
    flex: 1
  },
  profileImageContainer:{
    width: wp(20),
    height: hp(10),
    backgroundColor: 'white',
    borderRadius: wp(20),
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: wp(0.6)
  }
})