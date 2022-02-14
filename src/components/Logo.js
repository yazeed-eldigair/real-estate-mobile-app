import React from "react";
import { Image } from "react-native";
import { globalStyles } from "../../global";

const Logo = ({ imgSrc }) => {
  return (
    <Image source={require('../../assets/logo.png')} style={globalStyles.image} />
  );
};

export default Logo;
