import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import pets from "../data/petsData";
import CategoryItem from "../components/CategoryItem";

const PetDetails = () => {
  const pet = pets[0];
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <CategoryItem categoryName={"Up for Adoption"} />
      <Text>Pet Details</Text>
      <Image
        source={{
          uri: pet.image,
        }}
        width={150}
        height={150}
      />

      <Text>Name: {pet.name}</Text>
      <Text>Type: {pet.type}</Text>

      <Text>
        {pet.adopted == 0 ? "This pet is not adopted" : "This is adopted "}
      </Text>
    </View>
  );
};

export default PetDetails;

const styles = StyleSheet.create({});
