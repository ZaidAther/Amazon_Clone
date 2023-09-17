import React from "react";
import { View, Text, Image ,FlatList} from "react-native";
import { ScrollView } from "react-native";
import Amazon_Pay from "../Assets/Images/Amazonpay.jpg";
import send_money from "../Assets/Images/pay.jpg";
import Scan from "../Assets/Images/Scan.jpg";
import Bill from "../Assets/Images/bill.jpg";
import { Section1Data } from "../Assets/Images/Section_Data1";

const Service = () => {
  return (
    <ScrollView
      style={styles.Container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.payContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.column}>
            <Image style={styles.image} source={Amazon_Pay} />
            <Text style={styles.titletext}>Amazon_Pay</Text>
          </View>

          <View style={styles.column}>
            <Image style={styles.image} source={send_money} />
            <Text style={styles.titletext}>Send Money</Text>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.column}>
            <Image style={styles.image} source={Scan} />
            <Text style={styles.titletext}>Scan QR</Text>
          </View>

          <View style={styles.column}>
            <Image style={styles.image} source={Bill} />
            <Text style={styles.titletext}>Pay Bills</Text>
          </View>
        </View>
      </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Section1Data}
          renderItem={({ item }) => (
            <View style={styles.newcontainer}>
              <Text style={styles.newText}>{item.title}</Text>
              <Image style={styles.newImage} source={item.image} />
            </View>
          )}
        />
    </ScrollView>
  );
};

const styles = {
  Container: {
    marginTop: -20,
    paddingHorizontal: 10,
  },

  payContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    padding:5,
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  column: {
    alignItems: "center",
    paddingTop: 15,
    padding: 10,
  },

  image: {
    height: 50,
    width: 50,
    borderRadius: 20,
  },

  titletext: {
    fontSize: 10,
    marginTop: 5,
  },

  newcontainer: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 5,
    elevation: 5,
    width: 150,
    marginLeft:8,
  },

  newImage: {
    width: "100%",
    height: 130,
  },

  newText: {
    fontSize: 15,
    marginbottom: 10,
    textAlign: "center",

  },
};

export default Service;
