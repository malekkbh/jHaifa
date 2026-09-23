import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Images from "@/assets/images/Images";
import ContactItem from "@/components/ContactItem";
import AppHeader from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { getAllProducts } from "@/constants/api";

const index = () => {
  const [on, setIsOn] = useState(true);
  const [data, setData] = useState([]);

  const getAllProdeuctsFromDB = async () => {
    await getAllProducts().then((res) => {
      setData(res);
    });
  };

  const renderContacts = () => {
    const contacts = data.map((contact) => {
      return (
        <ContactItem
          name={contact.name}
          time={contact.time}
          color={contact.color}
        />
      );
    });

    if (on) {
      return contacts;
    } else {
      return null;
    }
  };

  useEffect(()=>{
    getAllProdeuctsFromDB()
  },[])

  return (
    <View style={[styles.container, !on && { backgroundColor: "black" }]}>
      <AppHeader />
      {renderContacts()}

      <Ionicons
        name="power-outline"
        size={100}
        onPress={() => setIsOn(!on)}
        color={on ? "black" : "white"}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
