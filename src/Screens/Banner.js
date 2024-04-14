import React, { useState, useEffect } from 'react';
import { View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Banner = () => {
  const [images, setImages] = useState([
    { id: 1, imageUrl: 'https://example.com/image1.jpg' },
    { id: 2, imageUrl: 'https://example.com/image2.jpg' },
    { id: 3, imageUrl: 'https://example.com/image3.jpg' },
    // Add more images as needed
  ]);

  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    // Auto-scrolling logic
    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.snapToNext();
      }
    }, 3000); // Adjust the interval time as needed

    return () => clearInterval(intervalId);
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: item.imageUrl }}
        style={{ width: windowWidth, height: 200 }} // Adjust height as needed
        resizeMode="cover"
      />
    </View>
  );

  const carouselRef = React.useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        ref={carouselRef}
        data={images}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        autoplay
        loop
        autoplayInterval={3000} // Same interval time as used in the useEffect
      />
    </View>
  );
};

export default Banner;
