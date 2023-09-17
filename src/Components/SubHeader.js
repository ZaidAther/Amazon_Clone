import React from "react";
import { View, Text, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {SimpleLineIcons,Feather } from "@expo/vector-icons"; // Import FontAwesome


const SubHeader = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#bbe8ef", "#bdeee9", "#c3f1e3"]}
      style={styles.subheader}
    >
      <Feather
        name="map-pin"
        size={16}
        color="gray"
      />
      <Text style={styles.subheaderText}>Deliver to Zaid Ather-Islamabad 64499</Text>

      <SimpleLineIcons 
        name="arrow-down"
        size={16}
        color="gray"

      />
    </LinearGradient>
  );
};

const styles = {
  subheader: {
    padding: 13,
    flexDirection:'row',
    alignItems: 'center',
  },
  subheaderText: {
    color: "grey",
    fontSize: 14,
    paddingHorizontal: 10,
  },
};

export default SubHeader;
