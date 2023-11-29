import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SignUp } from './src/screens'

const App = () => {
  return (
    <View style={styles.container}>
      <SignUp/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})