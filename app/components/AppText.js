import React from "react";
import { StyleSheet, Text } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children} </Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontFamily: "Avenir-Roman",
    fontWeight: "400",
  },
});

export default AppText;
