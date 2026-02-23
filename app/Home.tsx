import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { act, useState } from 'react'
import Create from './Create'
import Manage from './Manage';

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={styles.container} >
      <View style={styles.card} >
        <TouchableOpacity style={styles.btn} onPress={()=>setActiveTab(0)} >
          <Text style={styles.btnTxt} >Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>setActiveTab(1)} >
          <Text style={styles.btnTxt} >Remove</Text>
        </TouchableOpacity>
      </View>
      {activeTab === 0 && <Create/>}
      {activeTab === 1 && <Manage/>}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  card: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    marginLeft: 22
  },
  btn:{
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:18,
    backgroundColor:'#3378bd'
  },
  btnTxt:{
    fontSize:14,
    color:'white'
  }
})