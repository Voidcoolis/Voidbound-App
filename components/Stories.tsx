import { STORIES } from "@/constants/mock-data";
import { styles } from "@/styles/feed.styles";
import { ScrollView } from "react-native";
import Story from "./Story";

// ! STORIES  mock data added to a new file instead of the index.tsx in the tabs
const StoriesSection = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
      {STORIES.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </ScrollView>
  );
};

export default StoriesSection;


{/* 
    //* was needed with the Scrollview above in the index.tsx
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </ScrollView>
  */}