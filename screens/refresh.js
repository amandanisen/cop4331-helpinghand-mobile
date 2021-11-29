
import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef, useEffect } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";


//const buildPath = require("../../redux/buildPath");

//this page is used as a fake refresh to navigate to this page , and then another
//to trigger a rerender on a page. we'll never actually see this blank page
export default function refresh() {
console.log("refresh");
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#009387" }}>
  
    

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingBottom: 5,
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
});
