import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";
import AppIcon from "../components/AppIcon";
import AppListItem from "../components/AppListItem";
import AppScreen from "../components/AppScreen";
import AppButton from "../components/AppButton";

function HomeScreen({ navigation, route }) {
  console.log(route.params.params);
  return (
    <AppScreen style={styles.container}>
      <View style={{ width: "30%", height: "10%" }}>
        <AppButton
          title="Log Out"
          color="primaryColor"
          onPress={() => navigation.navigate("Welcome")}
        />
      </View>

      <View style={styles.welcomeContainer}>
        <MaterialCommunityIcons
          name="battlenet"
          size={70}
          color={AppColors.primaryColor}
        />
      </View>
      <View style={styles.profileContainer}>
        <AppListItem
          image={route.params.paramImage}
          title={route.params.paramName}
        />
        <Text style={styles.email}>{route.params.paramEmail}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}>
          MY ITEMS
        </Text>
      </View>
      <View style={styles.linksContainer}>
        <AppListItem
          title="Hotels"
          IconComponent={
            <AppIcon
              name="bed"
              size={50}
              iconColor={AppColors.otherColor}
              backgroundColor={AppColors.primaryColor}
            />
          }
          onPress={() => navigation.navigate("Hotel")}
        />
        <AppListItem
          title="Restaurants"
          IconComponent={
            <AppIcon
              name="food"
              size={50}
              iconColor={AppColors.otherColor}
              backgroundColor={AppColors.primaryColor}
            />
          }
          onPress={() => navigation.navigate("Restaurant")}
        />
        <AppListItem
          title="Tour"
          IconComponent={
            <AppIcon
              name="camera-iris"
              size={50}
              iconColor={AppColors.otherColor}
              backgroundColor={AppColors.primaryColor}
            />
          }
          onPress={() => navigation.navigate("Tour")}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.otherColor,
    marginTop: 0,
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    marginTop: 30,
    marginBottom: 20,
    height: 120,
    backgroundColor: AppColors.otherColorLite,
    justifyContent: "center",
  },
  linksContainer: {
    marginVertical: 10,
    backgroundColor: AppColors.otherColorLite,
    height: 250,
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  email: {
    fontSize: 18,
    marginTop: -30,
    paddingLeft: 120,
  },
});
export default HomeScreen;
