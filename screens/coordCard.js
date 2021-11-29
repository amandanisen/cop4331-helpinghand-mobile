import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
} from "react-native";

import { Card, ListItem, Icon, Button } from "react-native-elements";
var user_data;




export default function CoordCard(props) {
  const navigation = useNavigation();

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('user_data');
      if (value !== null) {
        user_data= JSON.parse(localStorage.getItem("user_data"))
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
_retrieveData();
  var user_email = user_data.email;
     function closeTask() {
      async function close(){
        console.log(user_email)
        var obj = {email:user_email,taskID:props.id};
        var js=JSON.stringify(obj);
        console.log(js);

        if (window.confirm("Are you sure you want to delete this task?")) {
        try{
          const response = await fetch("https://helpinghand-cop4331.herokuapp.com/task/remove",{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body : js,
          });
          var res=JSON.parse(await response.text() );
          if (res.success != true){
            console.log(res.error);
          } else{
            console.log(res.success);
            console.log("success");
            return res;
          }
        } catch (e){
          console.log((e.toString()));
          return ;
        }
        
      }
      
      }
        //test
      close();
      navigation.navigate("Refresh");
      setTimeout(function(){
        navigation.navigate("CoordinatorTasks");
      }, 400);
    //make api call to close task
    //pass task id i assume
    console.log("clicked close task");
  }



  console.log(props.id)
  console.log(props.address)
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
      <Text style={{ marginBottom: 10, color: "#808080" }}>{props.address}
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

    
