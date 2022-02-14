import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -200,
  },

  homeContainer: {
    flex: 1,
    paddingTop: 0,
  },

  header: {
    height: 115,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
    marginHorizontal: -5,
    backgroundColor: '#ddd',
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    
    elevation: 3,
  },

  headerText: {
    paddingTop: 40,
    fontFamily: "Nunito_900Black",
    fontSize: 20,
    color: "#333",
    paddingTop: 60
  },

  signOutText: {
    fontSize: 12,
    alignSelf: "flex-end",
    paddingRight: 14,
    fontFamily : "Nunito_400Regular_Italic",
    // fontStyle: 'italic',
    textDecorationLine: "underline"
  },

  itemTitle: {
    fontFamily : 'Nunito_700Bold',
  },

  card: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: '#333',
    shadowOpacity: 0.6,
    shadowRadius: 2,
    marginHorizontal: 15,
    marginVertical: 8
  },

  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },

  imageContainer: {
    flexDirection: 'row'
  },

  itemDescription: {
    marginVertical: 5,
    fontFamily: 'Nunito_300Light_Italic',
    fontSize: 12,
    flex: 0.5
  },

  itemImage: {
    flex: 0.5,
    height: 127,
    resizeMode: "contain",
    borderRadius: 10,
  },


  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },

  inputView: {
    width: "70%",
    height: 55,
    marginBottom: 40,
    alignItems: "center",
  },

  textInput: {
    height: 50,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#b3b3b3",
    borderRadius: 30,
    width: "100%",
    paddingLeft: 20,
    marginBottom: 20,
  },

  regText: {
    fontFamily: "Nunito_400Regular_Italic"
  },

  btn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8dc6ff",
    marginBottom: 20,
  },

  btnText: {
    textTransform: "uppercase",
    fontFamily: "Nunito_700Bold"
  },
});

export const images = {
  properties: {
    '1': require('./assets/properties/1.png'),
    '2': require('./assets/properties/2.png'),
    '3': require('./assets/properties/3.png'),
    '4': require('./assets/properties/4.png'),
    '5': require('./assets/properties/5.png'),
    '6': require('./assets/properties/6.png'),
    '7': require('./assets/properties/7.png'),
    '8': require('./assets/properties/8.png'),
    '9': require('./assets/properties/9.png'),
    '10': require('./assets/properties/10.png'),
  }
}
