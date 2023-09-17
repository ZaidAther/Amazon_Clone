import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { Section3Data } from "../Assets/Images/Section_Data3";

const Section3 = () => {
  return (
    <View>
      <Text style={styles.text}>Women's fashion sneakers</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={Section3Data}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.newcontainer}>
            <Image style={styles.newImage} source={item.image} />
            <Text style={styles.newText}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.allDeals}>See All</Text>
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
  newcontainer: {
    margin: 6,
    alignItems: "center", // Center items within each cell
  },
  newImage: {
    height: 110,
    width: 180,
    borderRadius: 5,
  },
  newText: {
    fontSize: 15,
    marginTop: 5,
    textAlign: "center",
  },
  allDeals: {
    color: "blue",
    fontSize: 14,
    marginVertical: 3,
    marginLeft: 6,
  },
});

export default Section3;
