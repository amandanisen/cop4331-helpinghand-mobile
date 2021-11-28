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
export default function createTask() {
  const navigation = useNavigation();
  //data will hold all of the text unput data
  const [data, setData] = React.useState({
    name: "",
    details: "",
    volunteers: "",
    longitude: "",
    latitude: "",
    date: "",
  });
  function handlePress() {
    //api call to submit the data in the form
    //console log to verify inputs for debugging
    postData("https://helpinghand-cop4331.herokuapp.com/task/create", {
      name: data.name,
      description: data.details,
      max_slots: data.volunteers,
      latitude: parseFloat(data.latitude),
      longitude: parseFloat(data.longitude),
      email: 'alexrutledge1030@gmail.com' ,
      date: data.date,
    }).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
    console.log(data.name, data.details, data.volunteers, parseFloat(data.latitude), parseFloat(data.longitude),data.date);
    navigateToTaskList();
  }
  // Example POST method implementation:
  async function postData(url = '', data = {}) {
    console.log(url, data);
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  //function to navigate back to task list on cancel
  function navigateToTaskList() {
    navigation.navigate("CoordinatorTasks");
  }
  //setters for tex inputs
  const nameInputChange = (val) => {
    setData({
      ...data,
      name: val,
    });
  };
  const detailsInputChange = (val) => {
    setData({
      ...data,
      details: val,
    });
  };
  const volunteersInputChange = (val) => {
    setData({
      ...data,
      volunteers: val,
    });
  };
  const longitudeInputChange = (val) => {
    setData({
      ...data,
      longitude: val,
    });
  };
  const latitudeInputChange = (val) => {
    setData({
      ...data,
      latitude: val,
    });
  };
  const DateInputChange = (val) => {
    setData({
      ...data,
      date: val,
    });
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#009387",
      }}
    >
      <View style={styles.header}>
        <Text style={styles.text_header}>New Task</Text>
        <TextInput
          placeholder="Task Name"
          placeholderTextColor={"#D6D6D6"}
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => nameInputChange(val)}
        />
        <TextInput
          placeholder="Task Details"
          placeholderTextColor={"#D6D6D6"}
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => detailsInputChange(val)}
        />
        <TextInput
          placeholder="Number of Volunteers Needed"
          placeholderTextColor={"#D6D6D6"}
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => volunteersInputChange(val)}
        />
        <TextInput
          placeholder="Longitude"
          placeholderTextColor={"#D6D6D6"}
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => longitudeInputChange(val)}
        />       
         <TextInput
          placeholder="Latitude"
          placeholderTextColor={"#D6D6D6"}
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => latitudeInputChange(val)}
        />        
        <TextInput
        placeholder="Date"
        placeholderTextColor={"#D6D6D6"}
        style={styles.textInput}
        autoCapitalize="none"
        onChangeText={(val) => DateInputChange(val)}
        />
        <TouchableOpacity
          onPress={() => navigateToTaskList()}
          style={[
            styles.signIn,
            {
              backgroundColor: "#FFFFFF",
              marginTop: 15,
            },
          ]}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: "#009387",
              },
            ]}
          >
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress()}
          style={[
            styles.signIn,
            {
              backgroundColor: "#013D38",
              marginTop: 15,
            },
          ]}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: "#FFFFFF",
              },
            ]}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingBottom: 10,
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
  header2: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    marginBottom: 30,
  },
  text_footer: {
    color: "#05375A",
    fontSize: 18,
  },
  action: {
    flexDirection: "column",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
    paddingBottom: 5,
  },
  textInput: {
    marginTop: Platform.OS === "ios" ? 0 : 0,
    paddingLeft: 10,
    backgroundColor: "#0BBFB1",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#009387",
    color: "white",
    height: 35,
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
});