
import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef, useEffect } from "react";
import { FloatingAction } from "react-native-floating-action";
import CoordCard from "./coordCard";
import { useLocation } from "react-router-dom";

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
import { Card, ListItem, Icon } from "react-native-elements";
import { connect } from "react-redux";

//const buildPath = require("../../redux/buildPath");
const coordinatorTask = ({navigation}) => {    
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('Refreshed');
      async function handleSubmit(){
        console.log(localStorage.getItem("user_data"))
        console.log(user_data.email)
        var obj = {email:user_data.email};
        var js=JSON.stringify(obj);
        console.log(js);
  
        try{
          const response = await fetch("https://helpinghand-cop4331.herokuapp.com/coord/tasks",{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body : js,
          });
          var res=JSON.parse(await response.text() );
          console.log(res);
          if (res.error != null){
            console.log(res.error);
          } else{
            console.log("success");  
            if(res != "no such user found"){
              setPosts(res);
            } else{
              console.log("No user was found");
            }
            return res;
          }
        } catch (e){
          alert(e.toString());
          return ;
        }
      }
        //test
      handleSubmit();
    });
    return unsubscribe;
  }, [navigation]);


  const [posts, setPosts] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selected, setSelected] = useState({});
  let idTrack = useRef(null);
  var user_data= JSON.parse(localStorage.getItem("user_data"))




  useEffect(() => {
    if (tasks && tasks.length > 0 && Object.values(selected).length === 0) {
      let taskObj = {};
      tasks.forEach((task) => (taskObj[task.id] = false));
      setSelected(taskObj);
    }
  }, [tasks, selected]);




  //actions for the floating action button
  const actions = [
    {
      text: "CreateTask",
      name: "bt_createTask",
      position: 1,
    },
  ];

  //function to navigate back to task list on cancel
  function navigateToCreateTask() {
    navigation.navigate("CreateTask");
  }

  

  //function to render the card template / replace with actual json obj returned
  function renderCards() {
    console.log(posts);
    

    return posts.map((tasks,index) => (
      <CoordCard   
        key={tasks._id}
        name={tasks.task_name}
        description={tasks.task_description}
        task_location={tasks.task_location.coordinates}
        maxVol={tasks.max_slots}
        numVol={tasks.slots_available}
        id = {tasks._id}
        address ={tasks.task_address}

      />
    ));
  }

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#009387" }}>
      <View style={styles.header}>
        <ScrollView>{renderCards()}</ScrollView>
      </View>
      <FloatingAction
        color="#013d38"
        actions={actions}
        onPressItem={() => navigateToCreateTask()}
      />
    </View>
  );
  console.log(tasks)
}
export default coordinatorTask;



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

const areasTest = [
  {
    id: "1",
    name: "Feed the Homelesss",
    location: "Downtown Orlando",
    miles: "2.5 miles",
    description:
      "This is a description of feed the homeless. Need 8 participants to help go around DT Orlando to feed.",
    numVol: "5",
    maxVol: "8",
  },
  {
    id: "2",
    name: "Concert Cleanup",
    description:
      "This is a description of concert cleanup. Need 10 participants to help clean after a concert.",
    location: "Amway Center",
    miles: "3 miles",
    numVol: "1",
    maxVol: "10",
  },
  {
    id: "3",
    name: "Set up Tents",
    description:
      "This is a description of setting up tents. Need 6 participants.",
    location: "UCF",
    miles: "15 miles",
    numVol: "2",
    maxVol: "6",
  },
];
