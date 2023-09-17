import React from 'react';
import { View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const getRating = (rating) => {
  const ratingStars = [];
  const fullStar = (
    <FontAwesome name="star" size={15} color="#e6cc09" key="full" />
  );
  const halfStar = (
    <FontAwesome name="star-half-empty" size={15} color="#e6cc09" key="half" />
  );
  const emptyStar = (
    <FontAwesome name="star-o" size={15} color="#e6cc09" key="empty" />
  );

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      ratingStars.push(fullStar);
    } else if (i - 0.5 === rating) {
      ratingStars.push(halfStar);
    } else {
      ratingStars.push(emptyStar);
    }
  }

  return (
    <View style={{ flexDirection: 'row' }}>
 {ratingStars}
    </View>
  );
};












export default getRating;
