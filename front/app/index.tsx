import { Image, StyleSheet, Platform, Button, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { InfoDisplay } from '@/components/InfoDisplay';
import { ProfilePicture } from '@/components/ProfilePicture';
import { pageStyle } from '@/styles/page.style';
import { router } from 'expo-router';

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const usernameSetter = (value : string) => {
        setUsername(value)
    }
    const passwordSetter = (value : string) => {
        setPassword(value)
    }
    return (
        <ThemedView style={pageStyle.container}>
            <ThemedView style={{alignItems:"center", marginTop:"60%"}}>
                <InfoDisplay text="Username" editing={false} setter={usernameSetter}></InfoDisplay>
                <InfoDisplay text="Password" editing={false} setter={passwordSetter}></InfoDisplay>
            </ThemedView>
            <ThemedView  style={pageStyle.centeredBtn}>
                <Button
                title='Log in'
                onPress={() => router.navigate("/(tabs)")}
                ></Button>
            </ThemedView>
        </ThemedView>
    );
}