import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import pets from "../data/petsData";

const PetItem = ({ petName, petImage }) => {
  const pet = pets[0];
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        alignItems: "center",
        width: 250,
      }}
    >
      <Image
        source={{
          uri: petImage,
        }}
        width={150}
        height={150}
      />

      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          fontWeight: "bold",
        }}
      >
        {petName}
      </Text>
    </View>
  );
};

export default PetItem;

const styles = StyleSheet.create({});
