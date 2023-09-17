import React, { useRef, useState } from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";
import CarouselSlider from "react-native-snap-carousel";
import { Slider_Data } from "../Assets/Images/SliderData";
import { Pagination } from "react-native-snap-carousel";

const slider_width = Dimensions.get("screen").width;

const Slider = () => {
  const CourselRef = useRef();
  const [activeSlide, setactiveSlide] = useState(0);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image style={styles.image} source={item.image} />
    </View>
  );

  return (
    <View style={styles.slidercontainer}>
      <CarouselSlider
        ref={CourselRef}
        data={Slider_Data}
        renderItem={renderItem}
        sliderWidth={slider_width}
        itemWidth={500}
        onSnapToItem={(index) => setactiveSlide(index)}
      />

      <Pagination
        dotsLength={Slider_Data.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          position: 'absolute',
          top: 150,
          left: '30%',
          paddingVertical: 10,
        }}
        dotStyle={{
          width: 15,
          height:15,
          borderRadius: 5,
        }}
        inactiveDotStyle={{
          width: 13,
          height: 13,
          borderRadius: 5,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        dotColor="yellow"
        inactiveDotColor="grey"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    resizeMode: 'auto',
  },

  slidercontainer: {
    position: "relative",
  },

  slide: {},
});

export default Slider;
