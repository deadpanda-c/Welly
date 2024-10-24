import { Image, StyleSheet, Platform, Button, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { InfoDisplay } from '@/components/InfoDisplay';
import { ProfilePicture } from '@/components/ProfilePicture';
import { pageStyle } from '@/styles/page.style';
import { router } from 'expo-router';

import RegisterPage from './register';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginPage() {
    const tryLogin = async (username, password) => {
      const data = {
        "username": username,
        "password": password
      }
      const res = await fetch("http://10.10.76.36:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
      // store token into local storage

      const storeData = async (value) => {
        try {
          console.log(value)
          await AsyncStorage.setItem('token', value)
        } catch (e) {
          console.error(e)
        }
      }
      storeData(res["access_token"])
      router.navigate("(tabs)")
    }
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
                onPress={() => tryLogin()}
                ></Button>

                <Button
                title='Register'
                onPress={() => router.navigate("register")}
                ></Button>
            </ThemedView>
        </ThemedView>
    );
}
