import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
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
    <View>
      <ScrollView>
        {tabs.map((item, index) => (
          <TouchableOpacity
            key={item.name}
            onPress={() => setCurrentTabIndex(index)}>
            <Text>{item.name}</Text>
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

export default ImageTabs
