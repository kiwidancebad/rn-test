import React from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'

import RNImageSlider from 'react-native-image-slider'

const ImageSlider = ({ images }) => {
  return (
    <View>
      <RNImageSlider
        loopBothSides
        images={images}
        customSlide={({ index, item, style }) => (
          <View key={index} style={style}>
            <Image source={{ uri: item }} />
          </View>
        )}
      />
    </View>
  )
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ImageSlider
