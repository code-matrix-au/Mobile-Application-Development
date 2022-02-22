import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppColors from "../config/AppColors";
import AppText from "./AppText";


function AppListItem({image, title, subtitle, IconComponent , onPress, onSwipeLeft}) {
  return <Swipeable renderRightActions={onSwipeLeft}>
      <TouchableHighlight onPress={onPress} underlayColor ={AppColors.otherColor}>

      <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} onPress={()=> console.log("Test done")}/>}
                    <View style={styles.textContainer}>
                        <AppText style={styles.title}> {title} </AppText>
           {subtitle && <AppText style={styles.subtitle}> {subtitle} </AppText>}
                    </View>
                </View>

      </TouchableHighlight>

      
  </Swipeable>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {

    height: 75,
    width: 75,
    borderRadius: 37,
    marginLeft: 10,
    
  },
  textContainer: {
    flexDirection: "column",
    marginLeft: 20,
  },
  title: {
    fontWeight: "bold",
    marginVertical: 5,
  },
  subtitle: {
   
    fontSize: 10,
    
  },
});

export default AppListItem;
