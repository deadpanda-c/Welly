import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { pageStyle } from "@/styles/page.style";
import { StyleSheet, TextInput, useColorScheme } from 'react-native';
import React, { useState } from 'react';

export default function Chat() {
    interface Message {
        sender: string;
        text: string;
    }

    const [mygoals, setMygoals] = useState<Message[]>([]);

    const [message, setMessage] = useState('');

    const sendMessage = () => {
        if (message.trim() === '') return;
        setMygoals([...mygoals, { sender: 'source', text: message }]);
        setMessage('');
    };

    const theme = useColorScheme() ?? 'light';

    var color = '';

    if (theme == "dark") {
        color = "white";
    } else {
        color = "black";
    }

    return (
        <ThemedView style={pageStyle.container}>
            <ThemedView style={style.topBar}>
                <ThemedText style={style.topBarText}>Welly</ThemedText>
            </ThemedView>

            <ThemedView style={style.chatContainer}>
                {mygoals.map((message, index) => (
                    <ThemedView
                        key={index}
                        style={[
                            style.messageContainer,
                            message.sender === "source" ? style.sourceMessage : style.destinationMessage
                        ]}
                    >
                        <ThemedText style={style.messageText}>{message.text}</ThemedText>
                    </ThemedView>
                ))}
            </ThemedView>

            <ThemedView style={style.inputContainer}>
                <TextInput
                    style={[style.input, {color: color}]}
                    placeholder="Type a message..."
                    placeholderTextColor={color}
                    value={message}
                    onChangeText={setMessage}
                />
                <ThemedText style={style.sendButton} onPress={sendMessage}>
                    Send
                </ThemedText>
            </ThemedView>
        </ThemedView>
    );
};

// Styles
const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'flex-start',
    },
    messageContainer: {
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',
    },
    sourceMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#68017a',
    },
    destinationMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#0800a1',
    },
    messageText: {
        fontSize: 16,
        color: "white"
    },
    topBar: {
        width: '100%',
        height: 60,
        backgroundColor: '#6f6f70',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topBarText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    chatContainer: {
        flex: 1,
        padding: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
        marginBottom: "10%",
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    sendButton: {
        fontSize: 16,
        color: '#4A90E2',
        fontWeight: 'bold',
    },
});
