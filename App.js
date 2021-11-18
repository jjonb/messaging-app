import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const TextMessage = (props) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        flexDirection: "row",
        width: 100 + "%",
        height: 40,
        borderColor: "grey",
        position: "relative",
      }}
    >
      <Ionicons name="person-circle-outline" size={24} color="black" />
      <View style={{ paddingLeft: 5 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text>{props.textMessage}</Text>
      </View>
      <Text style={{ position: "absolute", bottom: 0, right: 0, fontSize: 10 }}>
        {new Intl.DateTimeFormat("en-US", {
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }).format(Date.now())}
      </Text>
    </View>
  );
};

function HomeScreen() {
  const [messages, setMessages] = useState([]);
  const AddTextMessage = () => {
    setMessages([...messages, TextMessage]);
  };
  const NameBank = ["Jesse", "Mom", "Dad", "Bob", "John", "Sally"];
  const MessageBank = ["Hi", "Hola", "Bonjour"];
  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingLeft: 10,
      }}
    >
      <TextMessage
        name={NameBank[Math.floor(Math.random() * NameBank.length)]}
        textMessage={
          MessageBank[Math.floor(Math.random() * MessageBank.length)]
        }
      />
      <TextMessage
        name={NameBank[Math.floor(Math.random() * NameBank.length)]}
        textMessage={
          MessageBank[Math.floor(Math.random() * MessageBank.length)]
        }
      />
      <TextMessage
        name={NameBank[Math.floor(Math.random() * NameBank.length)]}
        textMessage={
          MessageBank[Math.floor(Math.random() * MessageBank.length)]
        }
      />
      {messages.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              borderBottomWidth: 1,
              flexDirection: "row",
              width: 100 + "%",
              height: 40,
              borderColor: "grey",
              position: "relative",
            }}
          >
            <TextMessage
              name={NameBank[Math.floor(Math.random() * NameBank.length)]}
              textMessage={
                MessageBank[Math.floor(Math.random() * MessageBank.length)]
              }
            />
          </View>
        );
      })}
      <TouchableOpacity
        style={{ position: "absolute", bottom: 20, right: 20 }}
        onPress={(e) => {
          e.preventDefault();
          AddTextMessage();
        }}
      >
        <AntDesign name="pluscircle" size={40} color="orange" />
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "Messaging",
            headerRight: () => (
              <View
                style={{
                  flexDirection: "row",
                  width: 60,
                  justifyContent: "space-around",
                }}
              >
                <AntDesign name="search1" size={24} color="orange" />
                <EvilIcons name="trash" size={33} color="orange" />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
