import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import DataManager from "../config/DataManager";

const schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(8).label("Password"),
});

const validateUser = ({ email, password }) => {
  let user = DataManager.getInstance();
  //console.log(user.users.length);

  for (var i = 0; i < user.users.length; i++) {
    if (user.users[i].email === email && user.users[i].password === password) {
      user.setUserID(email);
      // console.log(user.getUserID());
      return true;
    }
  }
  return false;
};

function LoginScreen({ navigation }) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.welcomeContainer}>
        <MaterialCommunityIcons
          name="battlenet"
          size={70}
          color={AppColors.white}
        />
      </View>

      <Text style={styles.loginContainer}>Login</Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          if (validateUser(values)) {
            //console.log(values);
            let user = DataManager.getInstance();
            console.log(user.getUser(values).fullname);
            resetForm();
            navigation.navigate("Home", {
              screen: "Home",
              params: {
                screen: "Home",
                params: {
                  paramEmail: values.email,
                  paramName: user.getUser(values).fullname,
                  paramImage: user.getUser(values).image,
                },
              },
            });
          } else {
            resetForm();
            alert("Invalid Login Credentials");
          }
        }}
        validationSchema={schema}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          setFieldTouched,
          touched,
        }) => (
          <>
            <View style={styles.textInputContainer}>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                placeholder="Email Address"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={values.email}
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
              />

              {touched.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                keyboardType="default"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                value={values.password}
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
              />

              {touched.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
            </View>
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 20,
    backgroundColor: AppColors.backGroundColor,
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  textInputContainer: {
    marginVertical: 50,
  },
  loginContainer: {
    color: AppColors.white,
    fontSize: 50,
    paddingLeft: 20,
    fontFamily: "Cochin",
  },
  error: {
    marginVertical: -10,
    paddingLeft: 10,
    color: "red",
    fontSize: 16,
  },
});
export default LoginScreen;
