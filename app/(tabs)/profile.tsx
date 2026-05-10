import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function Profile() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        
        <View style={styles.avatar}>
          <Ionicons
            name="person"
            size={60}
            color="white"
          />
        </View>

        <Text style={styles.name}>
          Nabila Istighfareta 
        </Text>

        <Text style={styles.role}>
          Student Developer 🚀
        </Text>
      </View>

      <View style={styles.statsContainer}>
        
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>
            12
          </Text>

          <Text style={styles.statLabel}>
            Courses
          </Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>
            48
          </Text>

          <Text style={styles.statLabel}>
            Lessons
          </Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>
            8
          </Text>

          <Text style={styles.statLabel}>
            Certificates
          </Text>
        </View>

      </View>

      {/* MENU */}
      <View style={styles.menuContainer}>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons
            name="create-outline"
            size={24}
            color="#2563EB"
          />

          <Text style={styles.menuText}>
            Edit Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#2563EB"
          />

          <Text style={styles.menuText}>
            Notifications
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons
            name="log-out-outline"
            size={24}
            color="red"
          />

          <Text style={[styles.menuText, { color: "red" }]}>
            Logout
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    paddingHorizontal: 20,
  },

  header: {
    alignItems: "center",
    marginTop: 70,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#2563EB",

    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    marginTop: 20,
    fontSize: 28,
    fontWeight: "bold",
  },

  role: {
    marginTop: 8,
    fontSize: 16,
    color: "gray",
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 40,
    marginBottom: 40,
  },

  statBox: {
    backgroundColor: "white",
    width: "30%",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2563EB",
  },

  statLabel: {
    marginTop: 8,
    color: "gray",
  },

  menuContainer: {
    marginTop: 10,
  },

  menuItem: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 20,
    marginBottom: 15,

    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },

  menuText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "600",
  },
});