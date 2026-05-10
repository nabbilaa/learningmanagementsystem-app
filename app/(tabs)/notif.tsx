import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function Notif() {
  const notifications = [
    {
      id: 1,
      title: "New React Native lesson available",
      time: "2 minutes ago",
      icon: "book",
    },

    {
      id: 2,
      title: "Congratulations! You completed UI UX",
      time: "1 hour ago",
      icon: "trophy",
    },

    {
      id: 3,
      title: "Frontend Development updated",
      time: "3 hours ago",
      icon: "notifications",
    },

    {
      id: 4,
      title: "Daily learning reminder 🚀",
      time: "Today",
      icon: "alarm",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Notifications 🔔
        </Text>

        <Text style={styles.subtitle}>
          Stay updated with your learning
        </Text>
      </View>

      {/* NOTIFICATION CARD */}
      {notifications.map((item) => (
        <View key={item.id} style={styles.card}>
          
          <View style={styles.iconContainer}>
            <Ionicons
              name={item.icon as any}
              size={26}
              color="#2563EB"
            />
          </View>

          <View style={styles.info}>
            <Text style={styles.notifTitle}>
              {item.title}
            </Text>

            <Text style={styles.time}>
              {item.time}
            </Text>
          </View>

        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 60,
    marginBottom: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: 6,
    color: "gray",
    fontSize: 16,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 22,
    padding: 18,
    marginBottom: 15,

    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: "#EFF6FF",

    justifyContent: "center",
    alignItems: "center",
  },

  info: {
    flex: 1,
    marginLeft: 15,
  },

  notifTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  time: {
    marginTop: 6,
    color: "gray",
    fontSize: 14,
  },
});