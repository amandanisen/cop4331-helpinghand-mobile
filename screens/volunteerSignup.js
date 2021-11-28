import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

 const VolunteerSignup = ({navigation}) => {

    const [data, setData] = React.useState({
        firstName: '',
        lastName: '',
        email:'',
        password: '',
        confirm_password: '',
        acceptedDistance:'',
        lon:'',
        lat:'',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                firstName: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                firstName: val,
                check_textInputChange: false
            });
        }
    }


    const textInputChange2 = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                lastName: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                lastName: val,
                check_textInputChange: false
            });
        }
    }


    const textInputChange3 = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const textInputChange4 = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                acceptedDistance: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                acceptedDistance: val,
                check_textInputChange: false
            });
        }
    }

    const textInputChange5 = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                lon: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                lon: val,
                check_textInputChange: false
            });
        }
    }


    const textInputChange6 = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                lat: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                lat: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }


    const registerVol = () => {
        //console.log(userName)
        //console.log(password)
        //console.log(data.role)
          async function register(){
            var obj = {first_name:data.firstName,last_name:data.lastName,email:data.email,password1:data.password, password2:data.confirm_password
            ,accepted_distance:data.acceptedDistance,longitude:data.lon,latitude:data.lat};
            var js=JSON.stringify(obj);
            console.log(js);
            try{
              const response = await fetch("https://helpinghand-cop4331.herokuapp.com/vol/register",{
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body : js,
              });
              var res=JSON.parse(await response.text() );
              if (res.error != null){
                console.log(res.error);
              }   
                if(res.id ==-1)
                {
                    alert("Sign up failed try again!")
                }
                if(res.id>0){
                navigation.navigate("Login");}
                console.log(res)
                console.log(res.id)
                //console.log(res.username)
                //console.log(res.password)
            } catch (e){
              alert(e.toString());
              return ;
              
            }
          }
            //test
          register();
       ;
        //handleMessage(null);
      };





    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header2}>
            <Text style={styles.text_header}>Volunteer Registration</Text>
        </View>

        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
             <Text style={styles.text_footer}>First and Last Name</Text>
             <View style={styles.action}>
                 <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your first name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    {/* <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    /> */}
                </Animatable.View>
                : null}
            </View>
            <View style={styles.action}>
                 <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your last name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange2(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    {/* <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    /> */}
                </Animatable.View>
                : null}
            </View>
            <Text style={[styles.text_footer, {marginTop: 25}]}>Email</Text>
             <View style={styles.action}>
                 <Feather 
                    name="mail"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange3(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    {/* <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    /> */}
                </Animatable.View>
                : null}
            </View>
            <Text style={[styles.text_footer, {
                marginTop: 25
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                  
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
 
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Confirm Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                    
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>

            <Text style={[styles.text_footer, {marginTop: 25}]}>Accepted Distance (Miles)</Text>
            <View style={styles.action}>
             <Feather 
                    name="map-pin"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="1,2,3 etc"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange4(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    {/* <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    /> */}
                </Animatable.View>
                : null}
            </View>

        

            <Text style={[styles.text_footer, {marginTop: 25}]}>Location</Text>
             <View style={styles.action}>
             <Feather 
                    name="map-pin"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Longitude"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange5(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    {/* <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    /> */}
                </Animatable.View>
                : null}
            </View>

            <View style={styles.action}>
             <Feather 
                    name="map-pin"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Latitude"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange6(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    {/* <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    /> */}
                </Animatable.View>
                : null}
            </View>


              
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {}}
                >
                {/* <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                > */}
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                 {/* </LinearGradient> */}
                </TouchableOpacity>

                <TouchableOpacity
                      onPress={() => {
                        registerVol();
                      }}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: -60
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
 };

export default VolunteerSignup;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    header2: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 30
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : 0,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });

