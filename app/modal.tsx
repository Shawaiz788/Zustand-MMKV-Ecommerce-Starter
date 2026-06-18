import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View ,Text, Button} from 'react-native';
import {storage} from '../store/mmkv';


export default function ModalScreen() {
  const [name,setName]=useState(storage.getString('user.displayname'))
  const updateName=()=>{
    storage.set('user.displayname', 'Shawaiz Ali Rehman');
  }
  return (
    <View style={styles.container}>
      <Text>Welcome to the App:{name}</Text>
      <Button onPress={updateName} title="Update"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
