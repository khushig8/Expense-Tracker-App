import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import Button from "@/components/Button";
import Typo from "@/components/Typo";
import { colors } from "@/constants/theme";
import ScreenWrapper from "@/components/ScreenWrapper";

const Home = () => {
  const handleLogOut = async () => {
    await signOut(auth);
  };
  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Button onPress={handleLogOut}>
        <Typo color={colors.black}>Log Out</Typo>
      </Button>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
