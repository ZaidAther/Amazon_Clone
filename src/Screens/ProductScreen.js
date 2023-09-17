import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { ProductData } from '../Assets/Images/ProductData';
import getRating from '../helper';
import { useNavigation } from "@react-navigation/native";

const ProductScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.productSection}    onPress={() => navigation.navigate("Detail", { item })}>
        <View style={styles.productImgSection }>
          <Image style={styles.productImg} source={item.image}  />
        </View>
        <View style={styles.productDetailSection} >
          <Text style={styles.productName}>{item.productName}</Text>
          <View style={styles.starIcon}>
            <Text style={styles.starcount}>{item.rating}</Text>
            {getRating(item.rating)}
            <Text style={styles.starreview}>{item.reviews}</Text>
          </View>
          <View style={styles.intercontainer}>
            <Text style={styles.discountPrice}>₹{item.discountedPrice}</Text>
            <Text style={styles.mrp}>M.R.P. ₹{item.mrp}</Text>
          </View>
          <View style={styles.cashbackSection}>
            <Text style={styles.cashtext}>{item.cashbackText}</Text>
            <Image style={styles.primeimg} source={item.primeImage} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Text style={styles.tagline}>
        Price and other details may vary based on product size and color.
      </Text>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={ProductData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  tagline: {
    fontSize: 11,
    color: 'grey',
  },
  productSection: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  productImgSection: {
    width: '40%',
  },
  productImg: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
  },
  productDetailSection: {
    width: '60%',
    padding: 10,
  },
  sponsored: {
    fontSize: 11,
    color: 'grey',
    marginBottom: 5,
  },
  productName: {
    fontSize: 12,
    color: 'black',
    lineHeight: 18,
  },
  starIcon: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  starcount: {
    marginRight: 5,
    color: '#1daff2',
  },
  starreview: {
    marginLeft: 5,
    color: '##1daff2',
  },
  intercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  discountPrice: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 10,
  },
  mrp: {
    fontSize: 12,
    color: 'grey',
    marginRight: 10,
  },
  actualPrice: {
    fontSize: 14,
    color: 'black',
    textDecorationLine: 'line-through',
  },

  cashtext: {
    fontSize: 11,
    color: 'grey',
    marginBottom: 5,
  },
  primeimg: {
    width: 45,
    height: 30,
  },
});


export default ProductScreen;
