import React from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Logo from "./Logo";
import { globalStyles } from "../../global";

const Register = ({ setEmail, setPassword, setName, setRoute, handleRegister }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <Logo />
        <View style={globalStyles.inputView}>
          <TextInput
            style={globalStyles.textInput}
            placeholder="Name"
            onChangeText={(name) => setName(name)}
          />
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
          <TouchableOpacity style={globalStyles.btn}>
            <Text onPress={() => handleRegister()} style={globalStyles.btnText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              onPress={() => setRoute("signIn")}
              style={globalStyles.regText}
            >
              Sign in with a registered account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
