import { Image, StyleSheet, Platform, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { pageStyle } from '@/styles/page.style';

type InfoDisplayProps = {
    text: string;
    editing: Boolean;
    setter: Function; 
  };

export function InfoDisplay(props: InfoDisplayProps) {
  const [text, setText] = useState('')
  const handleOnChange = (text : string) => {
    setText(text)
    props.setter(text)
  }
  return (
    <ThemedView style={pageStyle.infoDisplayPosition}>
        <ThemedText style={styles.infoTitle}>{props.text}</ThemedText>
        <TextInput
        onChangeText={handleOnChange}
        editable={props.editing ? false : true}
        selectTextOnFocus={props.editing ? false : true}
        style={props.editing ? pageStyle.infoInput : pageStyle.infoInput2}
        >{text}</TextInput>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
    infoTitle: {
        color: "#999999",
        fontWeight: "bold",
        marginLeft: "2%",
        marginBottom:"0.5%",
    }
})
