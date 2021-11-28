import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  ImageBackground,
} from "react-native";

export default function homePage() {
  const navigation = useNavigation();

  function navigateToCoordinatorRegister() {
    navigation.navigate("CoordinatorSignup");
  }

  function navigateToVolunteerRegister() {
    navigation.navigate("VolunteerSignup");
  }

  function navigateToLogin() {
    navigation.navigate("Login");
  }

  function test() {
    navigation.navigate("CoordinatorTasks");
  }

  function test1() {
    navigation.navigate("VolunteerTasks");
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground
        source={require("../assets/hands.png")}
        style={styles.background}
      >
        <View style={styles.header}>
          <Text style={styles.text_header}>Helping Hand</Text>

          <View style={styles.button}>
          

            <TouchableOpacity
              onPress={() => navigateToLogin()}
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
                Login
              </Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigateToVolunteerRegister()}>
              <Text style={{ color: "#FFFFFF", marginTop: 15 }}>
                Become a Volunteer!
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateToCoordinatorRegister()}>
              <Text style={{ color: "#FFFFFF", marginTop: 15 }}>
                Become a Coordinator!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text_MidSize: {
    color: "#05375a",
    fontSize: 15,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#009387",
    width: "25%",
  },
  header: {
    flex: 3,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
    paddingBottom: "20",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: "gray",
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    justifyContent: "flex-end",
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
});
