import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";

const OTP_LENGTH = 4;

const VerificationScreen = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [timer, setTimer] = useState(30);
  const inputs = useRef([]);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  // const handleChange = (value: string, index: number) => {
  //   if (!/^\d?$/.test(value)) return;

  //   const newOtp = [...otp];
  //   newOtp[index] = value;
  //   setOtp(newOtp);

  //   if (value && index < OTP_LENGTH - 1) {
  //     inputs.current[index + 1].focus();
  //   }
  // };

  // const handleBackspace = (value: string, index: number) => {
  //   if (!value && index > 0) {
  //     inputs.current[index - 1].focus();
  //   }
  // };

  const resendCode = () => {
    setTimer(30);
  };

  const verifyOtp = () => {
    const code = otp.join("");
    console.log("OTP:", code);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <MaterialIcons name="arrow-back-ios" size={20} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Verification</Text>
      <Text style={styles.subtitle}>Enter the 4-digit code sent to</Text>
      <Text style={styles.email}>example@gmail.com</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            // ref={(ref) => (inputs.current[index] = ref)}
            style={[styles.otpInput, digit && styles.activeInput]}
            value={digit}
            // onChangeText={(val) => handleChange(val, index)}
            // onKeyPress={({ nativeEvent }) =>
            //   nativeEvent.key === "Backspace" && handleBackspace(digit, index)
            // }
            keyboardType="number-pad"
            maxLength={1}
            autoFocus={index === 0}
          />
        ))}
      </View>
      {timer > 0 ? (
        <Text style={styles.timer}>
          Resend code in 00:{timer < 10 ? `0${timer}` : timer}
        </Text>
      ) : (
        <TouchableOpacity onPress={resendCode}>
          <Text style={styles.resend}>Resend Code</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: "#FFF5F0",
  },
  title: {
    fontSize: 32,
    marginTop: 45,
    textAlign: "center",
    marginBottom: 6,
    color: "black",
    fontFamily: "Poppins_600SemiBold",
  },
  subtitle: {
    fontSize: 15,
    color: "#000000a3",
    lineHeight: 20,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
  email: {
    fontSize: 14,
    color: "#000000",
    lineHeight: 20,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#FFB3A0",
    marginHorizontal: 8,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#FFF",
    marginTop: 30,
  },
  activeInput: {
    borderColor: "#ff5b27",
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
  timer: {
    color: "#0000006d",
    marginTop: 30,
    textAlign: "center",
  },
  resend: {
    color: "#FF5A1F",
    marginTop: 30,
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    height: 50,
    backgroundColor: "#ff5b27",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 480,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
});
