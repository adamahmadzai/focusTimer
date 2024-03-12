import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { colors } from "./src/utils/colors";
import React, { useState } from "react";
import { Focus } from "./src/features/Focus";
import { Timer } from "./src/features/Timer";
export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.forestGreen,
    padding: Platform.OS === "android" ? statusbar.currentHeight : 0,
    alignItems: "center",
  },
  text: {
    color: "offWhite",
    fontSize: 20,
  },
});
