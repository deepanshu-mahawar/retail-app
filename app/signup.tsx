import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  //   Alert,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Link, useRouter } from "expo-router";

const SignupScreen = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSignup = () => {
  //     if (!fullName || !email || !password) {
  //       Alert.alert('Error', 'Please fill all fields');
  //       return;
  //     }
  //
  //     Alert.alert('Success', `Account created for ${fullName}`);
  //     console.log({ fullName, email, password });
  //   };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <MaterialIcons name="arrow-back-ios" size={20} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Join Retail Pro to manage your business efficiently.
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <View style={styles.inputWrapper}>
          <MaterialIcons
            name="person"
            size={20}
            color="#00000061"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="e.g. Alex Morgan"
            placeholderTextColor="#00000061"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputWrapper}>
          <MaterialIcons
            name="email"
            size={20}
            color="#00000061"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="name@example.com"
            placeholderTextColor="#00000061"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <MaterialIcons
            name="lock"
            size={20}
            color="#00000061"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Create a password"
            placeholderTextColor="#00000061"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>Or continue with</Text>

      <View style={styles.extraButtonWrapper}>
        <TouchableOpacity style={styles.extraButton}>
          <FontAwesome6 name="google" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.extraButton}>
          <Fontisto name="apple" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.terms}>
        Already have an account?{" "}
        <Link href={"/signin"} style={styles.link}>
          Sign In
        </Link>
      </Text>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: "#ffded4",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 45,
    marginBottom: 6,
    color: "black",
    fontFamily: "Poppins_600SemiBold",
  },
  subtitle: {
    fontSize: 15,
    color: "#0000008b",
    lineHeight: 20,
    marginBottom: 40,
    fontFamily: "Poppins_400Regular",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#4a4a4a",
    marginBottom: 5,
    fontFamily: "Poppins_500Medium",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00000016",
    paddingHorizontal: 10,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    height: 50,
    backgroundColor: "#ff5b27",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
  terms: {
    fontSize: 13,
    color: "#0000008b",
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
  },
  extraButtonWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    height: 80,
    marginTop: 30,
  },
  extraButton: {
    width: "48%",
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#ffffff",
    borderColor: "#00000016",
  },
  link: {
    color: "#ff5b27",
    fontWeight: "700",
  },
});
