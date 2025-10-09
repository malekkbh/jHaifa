import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HaifaContext from "./context";

//rnfes

const provider = (props) => {
  const [cart, setCart] = useState([]);

  const value = {
    cart,
    setCart,
  };

  return (
    <HaifaContext.Provider value={value}>
      {props.children}
    </HaifaContext.Provider>
  );
};

export default provider;

const styles = StyleSheet.create({});
