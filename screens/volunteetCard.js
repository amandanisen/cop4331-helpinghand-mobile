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
var user_data= JSON.parse(localStorage.getItem("user_data"));


export default function CoordCard(props) {
  function closeTask() {
    async function close(){
      console.log(user_data.email)
      var obj = {email:user_data.email,taskID:props.id};
      var js=JSON.stringify(obj);
      console.log(js);

      if (window.confirm("Are you sure you want to remove this task?")) {
      try{
        const response = await fetch("https://helpinghand-cop4331.herokuapp.com/vol/removeTask",{
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
          
          if(res != "nos such user found"){
            setPosts(res);
          } else{
            console.log("The call might have failed above buts its okay, there were no tasks");
          }
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
     ;
  //make api call to close task
  //pass task id i assume
  console.log("clicked close task");
}



  return (
    <Card borderRadius={5}>
      <Card.Title style={{ fontSize: 20, marginBottom: 2 }}>
        {props.name}
      </Card.Title>
      <Card.Divider />
      <Text style={{ marginBottom: 10, color: "#808080" }}>
        {"Date: "+props.task_date+"       "+ props.address + "       Volunteers Needed: "+ props.numVol }
      </Text>
      
      <Text style={{ marginBottom: 10 }}>{props.description}</Text>
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
        title="Done"
      />
    </Card>
  );
}
