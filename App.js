import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import ImageTabs from './src/components/ImageTabs'

import { DATA } from './src/constants/images'

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageTabs tabs={DATA} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  }
})

export default App
