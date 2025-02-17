import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import { SafeAreaView } from "react-native-safe-area-context";
import PetDetails from "./src/screens/PetDetails";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Home />
        {/* <PetDetails /> */}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
