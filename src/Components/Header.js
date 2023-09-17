import React from "react";
import { View, StyleSheet, Platform } from "react-native"; // Import Platform
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons"; // Import FontAwesome

const Header = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#88dae0", "#98e1d6", "#9ee4d4"]}
      style={styles.headerContainer}
    >
      <View style={styles.textInputContainer}>
        <Ionicons
          name="search"
          size={24}
          color="#333"
          style={styles.icon}
        />
        <TextInput
          placeholder="Search"
          style={styles.textInput}
          placeholderTextColor="#999" // Customize the placeholder text color
        />
        <FontAwesome
          name="qrcode"
          size={24}
          color="gray"
          style={styles.scannerIcon}
        />
      </View>
      <Ionicons name="mic" size={24} color="#333" style={styles.icon} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    ...Platform.select({
      ios: {
        paddingTop: 40, // Adjust padding for iOS status bar
      },
      android: {
        paddingTop: 24, // Adjust padding for Android status bar
      },
    }),
  },
  textInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginRight: 8,
    padding: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 8,
  },
  icon: {
    marginRight: 6,
  },
  scannerIcon: {
    marginLeft: 8,
  },
});

export default Header;
