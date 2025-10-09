import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import Provider from "../store/provider";

const _layout = () => {
  return (
    <Provider>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="whatsapp" />
      </Stack>
    </Provider>
  );
};

export default _layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
