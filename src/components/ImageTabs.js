import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'

import ImageSlider from './ImageSliser'

const ImageTabs = ({ tabs }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(
    tabs.length ? 0 : null,
  )

  if (currentTabIndex === null) {
    return null
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        {tabs.map((item, index) => (
          <TouchableOpacity
            key={item.name}
            onPress={() => setCurrentTabIndex(index)}>
            <Text
              style={[
                styles.tabText,
                index === currentTabIndex ? styles.tabSelectedText : null,
              ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ImageSlider images={tabs[currentTabIndex].images} />
    </View>
  )
}

ImageTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: '5%',
  },
  scrollView: {
    maxHeight: '5%',
  },
  scrollViewContent: {
    paddingLeft: '3%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabText: {
    marginRight: '2%',
    opacity: 0.7,
  },
  tabSelectedText: {
    opacity: 1,
  },
})

export default ImageTabs
