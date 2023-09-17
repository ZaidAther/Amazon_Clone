import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import getRating from '../helper';

const ProductDetail = ({ route }) => {
  const {
    productName,
    description,
    rating,
    reviews,
    price,
    mrp,
    cashbackText,
    image,
  } = route.params.item;

  return (
    <View style={styles.container}>
      <Text style={styles.Producttitle}>{productName}</Text>
      <View style={styles.ratingContainer}>
        {getRating(rating)}
        <Text style={styles.ratingText}>Rating: {rating}</Text>
        <Text style={styles.reviewText}>Reviews: {reviews}</Text>
      </View>
      <Image source={image} style={styles.Productimage} />
      <Text style={styles.desc}>{description}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>₹{price}</Text>
        <Text style={styles.mrp}>M.R.P.</Text>
        <Text style={styles.mrp1}>₹{mrp}</Text>
      </View>
      <Text style={styles.cashbackText}>{cashbackText}</Text>
      <TouchableOpacity
        style={styles.orderButton}
      >
        <Text style={styles.orderButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  Productimage: {
    marginTop: 16,
    width: "100%",
    height: 300,
    resizeMode: "contain",
    borderRadius: 8,
  },
  Producttitle: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: "bold",
  },
  desc: {
    marginTop: 8,
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  ratingText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#ff9900", // Amazon's star color
  },
  reviewText: {
    fontSize: 16,
    marginLeft: 16,
    color: "grey",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  price: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#B12704", // Amazon's price color
  },
  mrp: {
    fontSize: 16,
    color: "grey",
    marginLeft: 8,
  },
  mrp1: {
    fontSize: 20,
    color: "grey",
    marginLeft: 8,
    textDecorationLine: "line-through",
  },
  cashbackText: {
    fontSize: 16,
    marginTop: 8,
  },
  orderButton: {
    marginTop: 16,
    backgroundColor: "#ff9900", // Amazon's order button color
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  orderButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default ProductDetail;
