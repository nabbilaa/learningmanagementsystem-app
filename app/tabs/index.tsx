import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.logo}>
          Home
        </Text>

        <Ionicons
          name="person-circle"
          size={35}
          color="#2563EB"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          LMS Dashboard 🚀
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: 28,
    fontWeight: "bold",
  },

  content: {
    marginTop: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});