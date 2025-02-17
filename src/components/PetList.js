import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PetItem from "./PetItem";
import pets from "../data/petsData";

const PetList = ({ filterByName }) => {
  console.log("FILTER:", filterByName);
  const displayPets = pets
    .filter((pet) => {
      return pet.name.includes(filterByName.trim());
    })
    .map((pet) => {
      return <PetItem petImage={pet.image} petName={pet.name} />;
    });

  return (
    <ScrollView
      style={{
        width: "100%",
      }}
      contentContainerStyle={{
        alignItems: "center",
      }}
    >
      {displayPets}
    </ScrollView>
  );
};

export default PetList;

const styles = StyleSheet.create({});
