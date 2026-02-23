import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as SecureStore from 'expo-secure-store';

const Create = () => {
    const [saveKey, setSaveKey] = useState('')
    const [getKey, setGetKey] = useState('')
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')


    const save = async () => {

        const k = saveKey.trim()
        const v = value.trim()

        if (!k || !v) {
            return alert("Enter the Key and Value to submit")
        }

        await SecureStore.setItemAsync(k, v)
        setSaveKey('')
        setValue('')
        setResult("Successfully Submitted.")
    }

    const Data = async () => {
        const k = getKey.trim()
        if (!k) {
            return alert("Please the Key to get Value")
        }
        let result = await SecureStore.getItemAsync(k)
        if (result) {
            setResult(result)
        } else {
            alert("No such key exist.")
            setGetKey('')
        }
    }
    return (
        <View style={styles.container} >
              <Text style={styles.txt} >Secure Storage</Text>
              <Text style={styles.txt} >{result}</Text>
              <TextInput
                style={styles.placehldr}
                value={saveKey}
                onChangeText={setSaveKey}
                placeholder='Enter the Key'
              />
              <TextInput
                style={styles.placehldr}
                value={value}
                onChangeText={setValue}
                placeholder='Enter the Value'
              />
              <TouchableOpacity style={styles.btn} onPress={save} >
                <Text style={styles.btnTxt} >Submit</Text>
              </TouchableOpacity>
        
        
              <Text style={styles.txt}>Retrieve Stored Value</Text>
        
              <TextInput
                style={styles.placehldr}
                value={getKey}
                onChangeText={setGetKey}
                placeholder="Enter the Key"
                onSubmitEditing={Data}
                returnKeyType="search"
        
              />
              
            </View>
    )
}

export default Create

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