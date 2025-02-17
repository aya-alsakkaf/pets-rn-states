import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryItem = ({ categoryName }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
      }}
    >
      <Text>{categoryName}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
