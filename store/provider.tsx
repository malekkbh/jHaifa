import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppContext from "./context";

//rnfes

const Provider = (props) => {
  const [cart, setCart] = useState([]);

  const value = {
    cart,
    setCart,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default Provider;

const styles = StyleSheet.create({});
