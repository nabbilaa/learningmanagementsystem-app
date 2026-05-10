import {
  Image,
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
      title: "React Native",
      lessons: 10,
      image: require("../../assets/images/reactnative.jpeg"),
    },
    {
      id: 2,
      title: "UI UX Design",
      lessons: 8,
      image: require("../../assets/images/uiux.jpeg"),
    },
    {
      id: 3,
      title: "Frontend Dev",
      lessons: 12,
      image: require("../../assets/images/frontenddev.jpeg"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>
            Hi, Bila 👋
          </Text>

          <Text style={styles.subText}>
            Continue learning today 🚀
          </Text>
        </View>
      </View>

      {/* BANNER */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>
          Learn Anywhere
        </Text>

        <Text style={styles.bannerText}>
          Start improving your skills today
        </Text>
      </View>

      {/* SEARCH */}
      <TextInput
        placeholder="Search course..."
        style={styles.searchInput}
      />

      {/* SECTION */}
      <Text style={styles.sectionTitle}>
        Popular Courses
      </Text>

      {/* COURSE CARD */}
      {courses.map((course) => (
        <View key={course.id} style={styles.card}>
          
          <Image
            source={course.image}
            style={styles.courseImage}
          />

          <View style={styles.courseInfo}>
            <Text style={styles.courseTitle}>
              {course.title}
            </Text>

            <Text style={styles.lessonText}>
              {course.lessons} Lessons
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
    marginBottom: 20,
  },

  greeting: {
    fontSize: 30,
    fontWeight: "bold",
  },

  subText: {
    fontSize: 16,
    color: "gray",
    marginTop: 5,
  },

  banner: {
    backgroundColor: "#2563EB",
    borderRadius: 25,
    padding: 25,
    marginBottom: 25,
  },

  bannerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  bannerText: {
    color: "white",
    marginTop: 8,
    fontSize: 15,
  },

  searchInput: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    marginBottom: 18,

    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },

  courseImage: {
    width: 70,
    height: 70,
    borderRadius: 15,
  },

  courseInfo: {
    marginLeft: 15,
  },

  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  lessonText: {
    marginTop: 8,
    color: "gray",
    fontSize: 15,
  },
});