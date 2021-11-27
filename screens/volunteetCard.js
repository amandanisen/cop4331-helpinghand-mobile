import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
} from "react-native";

import { Card, ListItem, Icon, Button } from "react-native-elements";

export default function CoordCard(props) {
  function closeTask() {
    //make api call to close task
    //pass task id i assume
    console.log("clicked close task");
  }

  return (
    <Card borderRadius={5}>
      <Card.Title style={{ fontSize: 20, marginBottom: 2 }}>
        {" "}
        {props.name}
      </Card.Title>
      <Card.Divider />
      <Text style={{ marginBottom: 10, color: "#808080" }}>
        {props.numVol + " Slots Left " +" --- " + props.maxVol + " Total Slots"}
      </Text>
      <Text style={{ marginBottom: 10 }}>{props.description}</Text>
      <Text style={{ marginBottom: 10, color: "#808080" }}>
        {"Coordinates:  " +props.task_location[0] + "     " + props.task_location[1]}
      </Text>
      <Button
        icon={<Icon name="check" color="#ffffff" />}
        onPress={() => closeTask()}
        buttonStyle={{
          borderRadius: 10,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          backgroundColor: "#013d38",
        }}
        title="Close Task"
      />
    </Card>
  );
}
