import { Image, StyleSheet, Platform, Button, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { InfoDisplay } from '@/components/InfoDisplay';
import { ProfilePicture } from '@/components/ProfilePicture';
import { pageStyle } from '@/styles/page.style';

export default function HomeScreen() {
    const [editing, setEditing] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const usernameSetter = (value : string) => {
        setUsername(value)
    }
    const passwordSetter = (value : string) => {
        setPassword(value)
    }
    const emailSetter = (value : string) => {
        setEmail(value)
    }
    useEffect(() => {
      const changeEdit = async () => {
        setEditing(true);
      };
      changeEdit();
    }, []);
    return (
        <ThemedView style={pageStyle.container}>
            <ThemedText style={pageStyle.pageTitle}>Profile</ThemedText>
            <ThemedView style={pageStyle.cornerRightTop}>
                    <Button color={editing ? "#141716" : ""} title={editing ? 'Edit' : 'Save'} onPress={() => setEditing(!editing)}></Button>
            </ThemedView>
            <ScrollView>
                <ProfilePicture name="Bob" image=".../assets/images/rukiaangel.png"></ProfilePicture>
                <ThemedView style={{alignItems:"center"}}>
                    <InfoDisplay text="Username" editing={editing} setter={usernameSetter}></InfoDisplay>
                    <InfoDisplay text="Email" editing={editing} setter={emailSetter}></InfoDisplay>
                    <InfoDisplay text="Password" editing={editing} setter={passwordSetter}></InfoDisplay>
                </ThemedView>
                <ThemedView  style={pageStyle.centeredBtn}>
                    <Button disabled={editing ? false : true} title='Log Out' ></Button>
                </ThemedView>
            </ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
})