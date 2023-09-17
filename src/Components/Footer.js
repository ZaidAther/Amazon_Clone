import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons"; // Import Ionicons for flag icon

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footheader}>
        <SimpleLineIcons name="arrow-up" size={16} color="gray" />
        <Text style={styles.text}>TOP OF PAGE</Text>
      </View>

      <View style={styles.footmid}>
        <View style={styles.column}>
          <TouchableOpacity>
            <Text style={styles.text1}>Amazon.com</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text1}>Your List</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text1}>Find a Gift</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text1}>Returns</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity>
            <Text style={styles.text1}>Your Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text1}>Gift Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text1}>Your Account</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text1}>Customer Service</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text1}>Sell Products on Amazon</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footlast}>
        <View style={styles.footlast1}>
          <Ionicons name="globe" size={16} color="gray" />
          <Text style={styles.text2}>ENGLISH</Text>
          <Text style={styles.text3}>$ USD-U.S. Dollars</Text>
        </View>
        <View style={styles.footlast2}>
          <Ionicons name="flag" size={16} color="gray" />
          <Text style={styles.text2}>United States</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footheader: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: "#43434d",
  },
  text: {
    textAlign: "center",
    marginLeft: 5,
    color: "white",
  },
  text2: {
    textAlign: "center",
    marginLeft: 5,
    color: "grey",
 
  },

  text3: {
    textAlign: "center",
    marginLeft: 5,
    color: "grey",
    marginLeft: 15,
  },

  text1: {
    textAlign: "center",
    marginLeft: 5,
    fontSize: 18,
    color: "grey",
    marginVertical: 15,
  },
  footmid: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#2d2e3b",
    paddingVertical: 20, // Reduced padding for illustration
    height: 350, // Reduced height for illustration
  },
  column: {
    flex: 1,
    alignItems: "center",
  },

  footlast: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    paddingVertical: 10,
    height: 100,
  },
  footlast1: {
    flexDirection: "row",
    paddingVertical: 10,
  },

  footlast2: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  container: {
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
  },
});

export default Footer;
