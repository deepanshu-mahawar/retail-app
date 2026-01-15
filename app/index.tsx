import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Entypo from "@expo/vector-icons/Entypo";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/intro");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Entypo name="shopping-cart" size={40} color="#ffffff" />
      </View>
      <Text style={styles.title}>Retail Pro</Text>
      <Text style={styles.subtitle} numberOfLines={3}>
        Manage inventory, tract sales, and grow your retail business in one
        place.
      </Text>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F0",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  iconWrapper: {
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: "#ff5927fe",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    elevation: 6,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontFamily: "Poppins_700Bold",
    color: "#000000",
  },
  subtitle: {
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
    marginTop: -8,
    fontSize: 14,
    color: "#000000a3",
    letterSpacing: 0.5,
    maxWidth: "85%",
    lineHeight: 20,
  },
});
