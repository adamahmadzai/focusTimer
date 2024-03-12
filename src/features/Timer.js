import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { colors } from "../utils/colors";
import { Countdown } from "../components/Countdown";
import { fontSizes } from "../utils/sizes";
import { spacing } from "../utils/sizes";
import { RoundedButton } from "../components/RoundedButton";
import { Timing } from "./Timing";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject,clearSubject}) => {
  const [progress, setProgress] = useState(1);
  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(0.2);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={isStarted}
          onProgress={setProgress}
          onEnd={() => {
            Vibration.vibrate(PATTERN);
          }}
        />
      </View>
      <ProgressBar
        style={styles.progress}
        progress={progress}
        color={colors.sienaGold}
      />
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <Text style={styles.text}> Focus Feature: </Text>
      <Text style={styles.text}>{focusSubject} </Text>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton title="-" size={50} onPress={() => clearSubject()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  text: {
    color: colors.sienaGold,
    fontSize: fontSizes.xl,
    padding: spacing.md,
    textAlign: "center",
  },
  progress: {
    height: 20,
  },
  buttonWrapper: {
    flex: .3,
   
    alignItems: "center",
    paddingBottom: spacing.lg,
    paddingTop: spacing.xl,
  },
  timingWrapper: {
    flex: .3,
    flexDirection: "row",
    paddingTop: spacing.md,
  },
  clearSubjectWrapper: {
    flex: .1,
    justifyContent: "center",
    alignItems: "center",
  
  },
});
