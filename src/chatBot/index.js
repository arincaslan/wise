import React, {useState} from "react";
import { Pressable , View , Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import Msg from './msg';
import { data } from "./data";
import styles from "./styles";
import * as Speech from 'expo-speech';
import Voice from "@react-native-voice/voice";




let chats = [];

const ChatBot = (props) => {
    const [chatList, setChatList] = useState([]);
    const [msg, setMsg] = useState("");

    const onSpeechStart = () => {
        Voice.start('en_US');

    }
    
    const onSpeechEnd = () => {
        Voice.stop();

    }



    const getAnswer = () => {
        for(let i = 0; i < data.length; i++){
            if(data[i].question.includes(props.vMsg.toLowerCase(' '))){
                chats = [...chats, {msg:data[i].answer , incomingMsg:true}];
                setChatList([...chats].reverse());
               
                return;
            }
        }
        chats = 
        [...chats, 
            {msg : 'Did not recognize your question' , incomingMsg : true}
        ];
                setChatList([...chats].reverse());
      
                return;
    }

    
    const handleVoice = () => {
        for(let i = 0; i < data.length; i++){
            if(data[i].question.includes(props.vMsg.toLowerCase(''))){
                Speech.speak(data[i].answer ,{
                    language: 'en_US',
                    pitch: 1,
                    rate: 1
                }
                );                
                return;
            }
        }
    }

    const onSendMsg = () => {
        chats = [...chats, {msg : props.vMsg ,sentMsg : true}];
        setChatList([...chats].reverse());
        setTimeout(() => {
            getAnswer(msg); 
            handleVoice(msg)   
        },1000)
        setMsg('');
    }
  
    return(
        <View>
            <FlatList
            style={{height: '83%', bottom: '3%'}}
            data={chatList}
            inverted={true}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => (
                <Msg 
                incomingMsg={item.incomingMsg} 
                msg = {item.msg}
                sentMsg={item.sentMsg} />
            )}       
            />
            
            <View style={styles.typeMsgContainer}>
                <TextInput
                style={styles.typeMsgBox}
                value={props.vMsg}
                placeholder='Press and Speak'
                />
                <Pressable

                    onPressIn={() => {
                        onSpeechStart();                       
                    }
                    }
                    
                    
                    onPressOut={(value) => {    
                        onSpeechEnd();
                        setMsg(value);
                        setTimeout(() => {
                            onSendMsg(); 
                            
                        },500);
                    }}

            
                    style=
                        { ({pressed}) => [styles.sendBtn,
                        {backgroundColor: pressed ? 'red' : 'green'}
                        ]}
                 >
                    <Text style={styles.sendText}>Send</Text>
                </Pressable>
            </View>
        </View>
    )
};

export default ChatBot;