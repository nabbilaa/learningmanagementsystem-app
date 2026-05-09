import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Home() {
  const courses = [
    {
      id: 1,
      title: "React Native Basic",
      lessons: 10,
    },
    {
      id: 2,
      title: "UI UX Design",
      lessons: 8,
    },
    {
      id: 3,
      title: "Frontend Development",
      lessons: 12,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Hi, Bila 👋
        </Text>

        <Text style={styles.subText}>
          Continue your learning today 🚀
        </Text>
      </View>

      {/* Search */}
      <TextInput
        placeholder="Search course..."
        style={styles.searchInput}
      />

      {/* Section */}
      <Text style={styles.sectionTitle}>
        Popular Courses
      </Text>

      {/* Cards */}
      {courses.map((course) => (
        <View key={course.id} style={styles.card}>
          <Text style={styles.courseTitle}>
            {course.title}
          </Text>

          <Text style={styles.lessonText}>
            {course.lessons} Lessons
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 20,
  },

  header: {
    marginTop: 40,
    marginBottom: 25,
  },

  greeting: {
    fontSize: 28,
    fontWeight: "bold",
  },

  subText: {
    fontSize: 16,
    color: "gray",
    marginTop: 5,
  },

  searchInput: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 14,
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 18,
    marginBottom: 15,
  },

  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  lessonText: {
    marginTop: 8,
    color: "gray",
  },
});