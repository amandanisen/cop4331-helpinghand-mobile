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
export default function coortinatorTask() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selected, setSelected] = useState({});
  let idTrack = useRef(null);
  var user_data=localStorage.getItem("user_data");
  useEffect(() => {
    if (tasks && tasks.length > 0 && Object.values(selected).length === 0) {
      let taskObj = {};
      tasks.forEach((task) => (taskObj[task.id] = false));
      setSelected(taskObj);
    }
  }, [tasks, selected]);
  useEffect(() =>{
    async function handleSubmit(){
      var obj = {email:'alexrutledge1030@gmail.com'};
      var js=JSON.stringify(obj);
      console.log(js);
      try{
        const response = await fetch("https://helpinghand-cop4331.herokuapp.com/coord/tasks",{
          method: "POST",
          headers: {"Content-Type" : "application/json"},
          body : js,
        });
        var res=JSON.parse(await response.text() );
        if (res.error != null){
          console.log(res.error);
        } else{
          console.log("success");
          if(res != "nos such user found"){
            setPosts(res);
          } else{
            console.log("The call might have failed above buts its okay, there were no tasks");
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
  }, []);
  const handleSelect = (id) => {
    let newSelected = { ...selected };
    if (idTrack.current === null) {
      idTrack.current = id;
    }
    if (selected[id]) {
      // We are leaving the task
      //Socket.send(JSON.stringify({topic: "task", action: "leave", message: {id: id, action: "Leaving"}}));
      newSelected[id] = false;
      setSelected(newSelected);
    } else {
      // We are joining the task
      if (idTrack.current !== id) {
        //Socket.send(JSON.stringify({topic: "task", action: "leave", message: {id: idTrack.current, action: "Leaving"}}));
      }
      //Socket.send(JSON.stringify({topic: "task", action: "join", message: {id: id, action: "Joining"}}));
      for (const prop in newSelected) {
        newSelected[prop] = false;
      }
      newSelected[id] = true;
      setSelected(newSelected);
    }
    idTrack.current = id;
  };
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
        task_date={tasks.task_date}
      />
    ));
  }
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#009387" }}>
      <View style={styles.header}>
        <ScrollView>{renderCards()}</ScrollView>
      </View>
      <FloatingAction
        color="#013D38"
        actions={actions}
        onPressItem={() => navigateToCreateTask()}
      />
    </View>
  );
  console.log(tasks)
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