import { Link } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Create Account</Text>

      <Text style={styles.subtitle}>
        Daftar untuk mulai belajar 🚀
      </Text>

      {/* Full Name */}
      <TextInput
        placeholder="Full Name"
        style={styles.input}
      />

      {/* Email */}
      <TextInput
        placeholder="Email"
        style={styles.input}
      />

      {/* Password */}
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Register
        </Text>
      </TouchableOpacity>

      {/* Login Link */}
      <View style={styles.footer}>
        <Text>Sudah punya akun? </Text>

        <Link href="/" style={styles.link}>
          Login
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
    fontSize: 34,
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