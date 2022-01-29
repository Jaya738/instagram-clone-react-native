import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { users } from "../data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image
              source={{
                uri: story.image,
              }}
              style={styles.story}
            />
            <Text style={{ color: "white", fontSize: 11 }}>
              {story.user.length > 13
                ? story.user.slice(0, 12).toLowerCase() + "..."
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});
