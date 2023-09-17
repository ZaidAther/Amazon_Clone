import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CheifSpecial } from "../Assets/Images/Data";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Catagory = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={CheifSpecial}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Product", { item })}
            style={styles.itemContainer}
          >
            <Image source={item.image} style={styles.smallImage} />
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  itemContainer: {
    marginRight: 15,
    alignItems: "center",
  },

  smallImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  itemText: {
    marginTop: 5,
    fontSize: 8,
    textAlign: "center",
    marginBottom: 5,
  },
});

export default Catagory;
