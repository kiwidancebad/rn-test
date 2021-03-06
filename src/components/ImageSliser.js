import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import RNImageSlider from 'react-native-image-slider'

const ImageSlider = ({ images }) => {
  return (
    <View style={styles.wrapper}>
      <RNImageSlider
        loopBothSides
        images={images}
        customSlide={({ index, item, style }) => (
          <View key={index} style={[style, styles.imageContainer]}>
            <Image
              source={{ uri: item }}
              indicator={ProgressBar}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        )}
      />
    </View>
  )
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  imageContainer: {},
  image: {
    flex: 1,
  },
})

export default ImageSlider
