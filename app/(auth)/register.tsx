import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import * as Icons from "phosphor-react-native";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";

const Register = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { register: registerUser } = useAuth();

    const handleSubmit = async () => {
        if (!nameRef.current || !emailRef.current || !passwordRef.current) {
            Alert.alert("Sign up", "Please fill in all fields");
            return;
        }
        setIsLoading(true);
        const res = await registerUser(
            nameRef.current,
            emailRef.current,
            passwordRef.current
        );
        setIsLoading(false);
        console.log('register result: ', res);
        if (!res.success) {
            Alert.alert('Sign up', res.msg);
        }
    };

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <BackButton iconSize={28} />
                <View style={{ gap: 5, marginTop: spacingY._20 }}>
                    <Typo size={30} fontWeight={"800"}>
                        Let's
                    </Typo>
                    <Typo size={30} fontWeight={"800"}>
                        Get Started
                    </Typo>
                </View>

                {/* form */}
                <View style={styles.form}>
                    <Typo size={16} color={colors.textLighter}>
                        Create an account to track your expense
                    </Typo>
                    <Input
                        placeholder="Enter your name"
                        onChangeText={(value) => (nameRef.current = value)}
                        icon={
                            <Icons.User
                                color={colors.neutral300}
                                size={verticalScale(26)}
                                weight="fill"
                            />
                        }
                    />
                    <Input
                        placeholder="Enter your email"
                        onChangeText={(value) => (emailRef.current = value)}
                        icon={
                            <Icons.At
                                color={colors.neutral300}
                                size={verticalScale(26)}
                                weight="fill"
                            />
                        }
                    />
                    <Input
                        placeholder="Enter your password"
                        secureTextEntry
                        onChangeText={(value) => (passwordRef.current = value)}
                        icon={
                            <Icons.Lock
                                color={colors.neutral300}
                                size={verticalScale(26)}
                                weight="fill"
                            />
                        }
                    />

                    <Button loading={isLoading} onPress={handleSubmit}>
                        <Typo size={21} color={colors.black} fontWeight={"700"}>
                            Sign Up
                        </Typo>
                    </Button>
                </View>

                {/* footer */}
                <View style={styles.footer}>
                    <Typo size={15}>Already have an account?</Typo>
                    <Pressable onPress={() => router.navigate("/(auth)/login")}>
                        <Typo size={15} color={colors.primary} fontWeight={"700"}>
                            Login
                        </Typo>
                    </Pressable>
                </View>
            </View>
        </ScreenWrapper>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingX._20,
    },
    welcomeText: {
        fontSize: verticalScale(20),
        fontWeight: "bold",
        color: colors.text,
    },
    form: {
        gap: spacingY._20,
    },
    forgotPassword: {
        textAlign: "right",
        fontWeight: "500",
        color: colors.text,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    footerText: {
        color: colors.text,
        textAlign: "center",
        fontSize: verticalScale(15),
    },
});
