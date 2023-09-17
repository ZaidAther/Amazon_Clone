import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Deal from "../Assets/Images/deals.jpg";
import { TouchableOpacity } from "react-native";

const Discount = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recommended For You</Text>
      <Image style={styles.image} source={Deal} />

      <View style={styles.intercontainer}>
        <TouchableOpacity style={styles.dealbtn}>
          <Text style={styles.textbtn}>15% Off</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>Deal</Text>
      </View>

      <View style={styles.intercontainer}>
        <Text style={styles.discountPrice}>₹1,549.00</Text>
        <Text style={styles.mrp}>M.R.P.</Text>
        <Text style={styles.actualPrice}>₹1,895.00</Text>

        </View>
        <Text style={styles.productName}>
          Pantene Gentle Hair Shampoo to Strenthen your Hairs
        </Text>
        <Text style={styles.allDeals}>See all deals</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "bold",
  },

  image: {
    width: "100%",
    height: 200,
    marginTop: 5,
  },

  intercontainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },

  dealbtn: {
    backgroundColor: "red",
    height: 30,
    width: 70,
    borderRadius: 5,
  },

  textbtn: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 6,
  },

  text1: {
    marginLeft: 6,
    fontWeight: "bold",
    color: "red",
  },

  discountPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
    color: "black",
    marginVertical: 5,
  },
  mrp: {
    fontSize: 10,
    marginRight: 10,
  },
  actualPrice: {
    fontSize: 10,
    textDecorationLine: "line-through",
    marginRight: 10,
  },
  productName: {
    fontSize: 14,
    color: "black",
    marginLeft: 6,
  },
  allDeals: {
    color: "blue",
    fontSize: 14,
    marginVertical: 5,
    marginLeft: 6,
  },
});

export default Discount;
