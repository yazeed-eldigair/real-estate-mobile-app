import React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { globalStyles, images } from "../../global";
import { bsoData } from "../../data";
import Card from "./Card";

const Catalogue = ({ setRoute }) => {


  return (
    <View style={globalStyles.homeContainer}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerText}>Catalogue</Text>
        <Text
          style={globalStyles.signOutText}
          onPress={() => setRoute("signIn")}
        >
          Sign out
        </Text>
      </View>

      <FlatList
        data={bsoData}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Card>
              <Text style={globalStyles.itemTitle}>{item.title}</Text>
              <View style={globalStyles.imageContainer}>
                <Text style={globalStyles.itemDescription}>{item.body}</Text>
                <Image
                  style={globalStyles.itemImage}
                  source={images.properties[item.key]}
                />
              </View>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Catalogue;
