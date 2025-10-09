import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Images from "@/assets/images/Images";
import ContactItem from "@/components/ContactItem";
import AppHeader from "@/components/Header";
import { data } from "@/assets/res/data";
import { Ionicons } from "@expo/vector-icons";

const Whatsapp = () => {
  const [on, setIsOn] = useState(true);

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

  return (
    <View style={[styles.container , !on && {backgroundColor:'black'}]}>
      <AppHeader />
      {renderContacts()}

      <Ionicons name="power-outline" size={100}  
      onPress={()=> setIsOn(!on) }
       color={on ? 'black' : 'white'} />
    </View>
  );
};

export default Whatsapp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
