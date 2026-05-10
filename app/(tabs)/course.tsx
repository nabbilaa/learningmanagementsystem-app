import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Course() {
  const courses = [
    {
      id: 1,
      title: "React Native",
      lessons: 10,
      progress: 70,
      image: require("../../assets/images/reactnative.jpeg"),
    },

    {
      id: 2,
      title: "UI UX Design",
      lessons: 8,
      progress: 40,
      image: require("../../assets/images/uiux.jpeg"),
    },

    {
      id: 3,
      title: "Frontend Dev",
      lessons: 12,
      progress: 85,
      image: require("../../assets/images/frontenddev.jpeg"),
    },
  ];

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>
          My Courses 📚
        </Text>

        <Text style={styles.subtitle}>
          Continue your learning journey
        </Text>
      </View>

      {/* CARD */}
      {courses.map((course) => (
        <View key={course.id} style={styles.card}>

          <Image
            source={course.image}
            style={styles.image}
          />

          <View style={styles.info}>
            <Text style={styles.courseTitle}>
              {course.title}
            </Text>

            <Text style={styles.lessonText}>
              {course.lessons} Lessons
            </Text>

            <Text style={styles.progress}>
              Progress {course.progress}%            </Text>

            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${course.progress}%`
                  },
                ]}
              />
            </View>
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
    padding: 15,
    marginBottom: 18,

    flexDirection: "row",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 18,
  },

  info: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },

  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  lessonText: {
    marginTop: 5,
    color: "gray",
  },

  progress: {
    marginTop: 10,
    fontWeight: "600",
    color: "#2563EB",
  },

  progressBar: {
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    marginTop: 8,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#2563EB",
    borderRadius: 10,
  },
});