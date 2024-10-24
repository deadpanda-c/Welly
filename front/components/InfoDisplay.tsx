import { Image, StyleSheet, Platform, TextInput } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { pageStyle } from '@/styles/page.style';

type InfoDisplayProps = {
    text: string;
    editing: Boolean;
  };

export function InfoDisplay(props: InfoDisplayProps) {
  return (
    <ThemedView style={pageStyle.infoDisplayPosition}>
        <ThemedText style={styles.infoTitle}>{props.text}</ThemedText>
        <TextInput
        editable={props.editing ? false : true}
        selectTextOnFocus={props.editing ? false : true}
        style={props.editing ? pageStyle.infoInput : pageStyle.infoInput2}
        >suiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</TextInput>
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
