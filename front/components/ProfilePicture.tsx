import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { pageStyle } from '@/styles/page.style';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

type ProfilePictureProps = {
    name: string;
    image: string;
  };

export function ProfilePicture(props: ProfilePictureProps) {
  return (
    <ThemedView style={styles.profileBox}>
        <Image
            style={styles.pictureStyle}
            source={require("../assets/images/rukiaangel.png")}
        />
        <ThemedText style={styles.usernameTitle}>{props.name}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
    profileBox: {
        marginTop: "5%",
        alignItems:"center",
    },
    pictureStyle: {
        borderRadius:100,
        width:150,
        height:150,    
    },
    usernameTitle: {
        lineHeight:60,
        fontSize:40,
    },
})