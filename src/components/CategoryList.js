import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  return (
    <ScrollView
      style={{
        // flexDirection: "row",
        gap: 10,
        marginTop: 10,
        width: "100%",
      }}
      horizontal={true}
    >
      <CategoryItem categoryName={"Cat"} />
      <CategoryItem categoryName={"Dog"} />
      <CategoryItem categoryName={"Rabbit"} />
      <CategoryItem categoryName={"Rabbit"} />
      <CategoryItem categoryName={"Rabbit"} />
      <CategoryItem categoryName={"Rabbit"} />
      <CategoryItem categoryName={"Rabbit"} />
      <CategoryItem categoryName={"Rabbit"} />
      <CategoryItem categoryName={"Rabbit"} />
    </ScrollView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
