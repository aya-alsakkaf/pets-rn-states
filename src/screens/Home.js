import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import CategoryList from "../components/CategoryList";
import PetList from "../components/PetList";

const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Your Pet"
        style={{
          borderWidth: 1,
          width: "90%",
          padding: 10,
          borderRadius: 10,
        }}
        onChangeText={(text) => {
          setSearch(text);
        }}
      />

      <CategoryList />
      <PetList filterByName={search} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
