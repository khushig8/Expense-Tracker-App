import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'

const welcome = () => {
    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <View>
                    <TouchableOpacity style={styles.loginButton}>
                        <Typo fontWeight={"500"}>Sign In</Typo>
                    </TouchableOpacity>
                    <Image
                        source={require('../../assets/images/welcome.png')}
                        style={styles.welcomeImage}
                    />
                </View>

                <View style={styles.footer}>
                    <View style={{ alignItems: 'center' }}>
                        <Typo size={30} fontWeight={"800"}>Always take control</Typo>
                        <Typo size={30} fontWeight={"800"}>of finances</Typo>
                    </View>
                    <View style={{ alignItems: 'center', gap:2 }}>
                        <Typo size={17} color={colors.textLight}>Finances must be arranged to set a better</Typo>
                        <Typo size={17} color={colors.textLight}>lifestyle in future</Typo>
                    </View>

                    <View style={styles.buttonContainer}>
                        {/* button */}
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: spacingY._7,
    },
    welcomeImage: {
        width: '100%',
        height: verticalScale(300),
        alignSelf: "center",
        marginTop: verticalScale(100),
    },
    loginButton: {
        alignSelf: "flex-end",
        marginRight: spacingX._20,
    },
    footer: {
        backgroundColor: colors.neutral900,
        alignItems: "center",
        paddingTop: verticalScale(30),
        paddingBottom: verticalScale(45),
        gap: spacingY._20,
        shadowColor: "white",
        shadowOffset: { width: 0, height: -10 },
        elevation: 10,
        shadowRadius: 25,
        shadowOpacity: 0.15,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: spacingX._25,
    }
})