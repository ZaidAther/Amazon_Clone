import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { Section2Data } from "../Assets/Images/Section_Data2";

const Section2 = () => {
  return (
    <View>
      <Text style={styles.text}>Women's fashion sneakers</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={Section2Data}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.newcontainer}>
            <Image style={styles.newImage} source={item.image} />
          </View>
                 
        )}
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
  },
  newImage: {
    height: 170,
    width: 175,
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

export default Section2;
