import { Link } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learning Management System</Text>

      <Text style={styles.subtitle}>
        Welcome back 👋
      </Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      <Link href="/tabs/home" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
      </Link>

      <View style={styles.footer}>
        <Text>Belum punya akun? </Text>

        <Link href="/register" style={styles.link}>
          Register
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    justifyContent: "center",
    padding: 25,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 40,
  },

  input: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 14,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  link: {
    color: "#2563EB",
    fontWeight: "bold",
  },
});