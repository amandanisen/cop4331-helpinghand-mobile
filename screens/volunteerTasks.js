import React, { useState, useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FloatingAction } from "react-native-floating-action";
import VolunteerCard from "./volunteetCard";
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

const volunteerTask = ({navigation}) => {    
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('Refreshed');
    async function handleSubmit(){
      console.log(user_data.email)
      console.log(user_data.id)
      var obj = {email:user_data.email};
      var js=JSON.stringify(obj);
      console.log(js);

      try{
        const response = await fetch("https://helpinghand-cop4331.herokuapp.com/vol/tasks" ,{
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
            console.log("Thes call might have failed above buts its okay, there were no tasks");
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


  
  //function to render the card template / replace with actual json obj returned
  function renderCards() {
    console.log(posts);

    return posts.map((tasks,index) => (
      <VolunteerCard
        key={tasks._id}
        name={tasks.task_name}
        description={tasks.task_description}
        address={tasks.task_address}
        task_location={tasks.task_location.coordinates}
        maxVol={tasks.max_slots}
        numVol={tasks.slots_available}
        task_date={tasks.task_date}
        id = {tasks._id}

      />
    ));
  }

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#009387" }}>
      <View style={styles.header}>
        <ScrollView>{renderCards()}</ScrollView>
      </View>
    </View>
  );
}
export default volunteerTask;

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
    name: "Feed the Homeless",
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
