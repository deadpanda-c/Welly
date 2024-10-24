import { Image, StyleSheet, Platform, TextInput, useColorScheme } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { pageStyle } from '@/styles/page.style';

type InfoDisplayProps = {
    text: string;
    editing: Boolean;
  };

export function InfoDisplay(props: InfoDisplayProps) {
  const theme = useColorScheme() ?? 'light';

  var color = '';

  if (theme == "dark") {
      color = "white";
  } else {
      color = "black";
  }

  return (
    <ThemedView style={pageStyle.infoDisplayPosition}>
        <ThemedText style={styles.infoTitle}>{props.text}</ThemedText>
        <TextInput
        placeholderTextColor={color}
        editable={props.editing ? false : true}
        selectTextOnFocus={props.editing ? false : true}
        style={[props.editing ? pageStyle.infoInput : pageStyle.infoInput2, {color: color}]}
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
