import { StyleSheet, Text, TextInput,TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as SecureStore from 'expo-secure-store';

const Manage = () => {
  const [key, setKey] = useState('')
  const [message, setMessage] = useState("")

  const RemoveItem = async() =>{
    const k = key.trim()
    if(!k){
      return alert("Please enter the Key in order to delete respective key and value.")
    }
    let item = await SecureStore.getItemAsync(k)
    if(item === null){
      return alert("No such key exist.")
    }
    await SecureStore.deleteItemAsync(k)
    setKey("")
    setMessage("Key Deleted Successfully.")

  }


  return (
    <View style={styles.container}>
      <Text style={styles.txt} >Manage</Text>
       <Text style={styles.txt} >{message}</Text>
      <TextInput
        style={styles.placehldr}
        value={key}
        onChangeText={setKey}
        placeholder='Enter the Key'
      />
      <TouchableOpacity style={styles.btn} onPress={RemoveItem}  >
        <Text style={styles.btnTxt} >Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Manage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  txt: {
    fontSize: 22,
    fontWeight: 500,
    textAlign: 'center',
    marginTop: 20,
  },
  placehldr: {
    borderWidth: 1,
    marginTop: 30,
    paddingHorizontal: 11,
    paddingVertical: 16,
    fontSize: 18
  },
  btn: {
    marginTop: 30,
    borderWidth: 1,
    paddingHorizontal: 11,
    paddingVertical: 16,
    borderRadius: 10,
    backgroundColor: '#3498eb'

  },
  btnTxt: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  }
})