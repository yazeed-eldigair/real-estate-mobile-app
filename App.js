/* TODO
-- Add alerts for input fields
-- Dismiss keyboard
-- Login page font
*/

import React, { useState, useEffect } from "react";
import SignIn from "./src/components/SingIn";
import Register from "./src/components/Register";
import Catalogue from "./src/components/Catalogue";
import { View, Text } from "react-native";
import { globalStyles } from "./global";
import {
  useFonts,
  Nunito_900Black,
  Nunito_700Bold,
  Nunito_300Light_Italic,
  Nunito_400Regular_Italic,
} from "@expo-google-fonts/nunito";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [route, setRoute] = useState("catalogue");
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("email:", email);
  }, [email]);

  useEffect(() => {
    console.log("password:", password);
  }, [password]);

  useEffect(() => {
    console.log("route:", route);
  }, [route]);

  useEffect(() => {
    console.log("name:", name);
  }, [name]);

  let [fontsLoaded] = useFonts({
    Nunito_900Black,
    Nunito_700Bold,
    Nunito_300Light_Italic,
    Nunito_400Regular_Italic,
  });

  function handleRegister() {
    var checkEmail = RegExp(
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i
    );
    if (email.length == 0 || password.length == 0 || name.length == 0) {
      alert("Required field Is missing!");
    } else if (!checkEmail.test(email)) {
      alert("Invalid email!");
    } else if (password.length < 4) {
      alert("Minimum of 4 characters required!");
    } else if (/[ ]/.test(password)) {
      alert("Don't include space in password!");
    } else {
      var registerAPI = "http://192.168.1.101/signin/signup.php"; //API to render signup

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      var data = {
        Email: email,
        Password: password,
      };

      // FETCH func ------------------------------------
      fetch(registerAPI, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data), //convert data to JSON
      })
        .then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
        .then((response) => {
          setRoute("catalogue"); //Navigate to next screen if authentications are valid
        })
        .catch((error) => {
          alert("Error Occured: " + error);
        });
    }
  }

  function handleSignIn() {
    if (email.length == 0 || password.length == 0) {
      alert("Required field Is missing!");
    } else {
      var signInAPI = "http://192.168.1.101/signin/login.php";

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      var data = {
        Email: email,
        Password: password,
      };

      fetch(signInAPI, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response[0].Message == "Success") {
            console.log("true");
            setRoute("catalogue");
          } else {
            alert(response[0].Message);
          }
          console.log(data);
        })
        .catch((error) => {
          console.error("Error occured: " + error);
        });
    }
  }

  if (!fontsLoaded) {
    return (
      <View style={globalStyles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (route === "signIn") {
    return (
      <SignIn
        setEmail={setEmail}
        setPassword={setPassword}
        setRoute={setRoute}
        handleSignIn={handleSignIn}
      />
    );
  } else if (route === "register") {
    return (
      <Register
        setEmail={setEmail}
        setPassword={setPassword}
        setName={setName}
        setRoute={setRoute}
        handleRegister={handleRegister}
      />
    );
  } else if (route === "catalogue") {
    return <Catalogue setRoute={setRoute} />;
  }
}
