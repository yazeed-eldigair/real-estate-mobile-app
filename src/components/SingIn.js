import React from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { globalStyles } from "../../global";

import Logo from "./Logo";

const SignIn = ({ setEmail, setPassword, setRoute, handleSignIn }) => {
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <Logo />
        <View style={globalStyles.inputView}>
          <TextInput
            style={globalStyles.textInput}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            style={globalStyles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          <TouchableOpacity onPress={()=>handleSignIn()} style={globalStyles.btn}>
            <Text  style={globalStyles.btnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              onPress={() => setRoute("register")}
              style={globalStyles.regText}
            >
              Register new user
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
