import React, { useState} from "react";
import reactDom from "react-dom";
import { Text, View, StyleSheet, Image, Switch } from "react-native";
import thumbnail from './assets/thumbnail.jpg';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={isEnabled ? styles.container : styles.containerDark}>
      <View style={styles.navbar}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={isEnabled ? styles.toggleSwitch : styles.toggleSwitchDark}
        />
      </View>
      <View style={styles.photoContainer}>
        <Image source={thumbnail} style={styles.photo} />
        <Text style={isEnabled ? styles.nameAndPronouns : styles.nameAndPronounsDark}>Anthony (he/him)</Text>
        <Text style={isEnabled ? styles.blurb : styles.blurbDark}>I make stuff</Text>
      </View>
      {/* <View style={styles.nameContainer}>
        <Text style={styles.nameAndPronouns}>Anthony (he/him)</Text>
      </View> */}
      {/* <View style={styles.blurbContainer}>
        <Text style={styles.blurb}>I make stuff.</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    color: "#fff"
  },
  containerDark: {
    flex: 1,
    backgroundColor: "black",
    color: "#fff"
  },
  navbar: {
    marginTop: 60,
    alignItems: "flex-end"
  },
  toggleSwitch: {
    marginRight: 20
  },
  toggleSwitchDark: {
    marginRight: 20
  },
  photoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blurbContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    resizeMode: "contain",
    borderRadius: 150,
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  nameAndPronouns: {
    fontSize: 20,
    marginTop: 30,
    color: "#000"
  },
  nameAndPronounsDark: {
    fontSize: 20,
    marginTop: 30,
    color: "#fff"
  },
  blurb: {
    fontSize: 18,
    marginTop: 50,
    color: "#000"
  },
  blurbDark: {
    fontSize: 18,
    marginTop: 50,
    color: "#fff"
  },
});
