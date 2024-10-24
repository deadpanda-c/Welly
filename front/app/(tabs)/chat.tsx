import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { pageStyle } from "@/styles/page.style";

export default function Chat() {
    return (
        <ThemedView style={pageStyle.container}>
            <ThemedText>Hello World</ThemedText>
        </ThemedView>
    )
};
