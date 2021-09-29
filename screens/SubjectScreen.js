import React, { Component } from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

export default class SubjectScreen extends Component{
    render(){
        return(
            <View>
               <Text>Chose The Subject</Text>
              <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.props.navigation.navigate('SolutionScreen')
              }}>
               <Text>Math</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.props.navigation.navigate('SolutionScreen')
              }}>
               <Text>English</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.props.navigation.navigate('SolutionScreen')
              }}>
               <Text>Hindi</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.props.navigation.navigate('SolutionScreen')
              }}>
               <Text>So.Science</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.props.navigation.navigate('SolutionScreen')
              }}>
               <Text>science</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.props.navigation.navigate('SolutionScreen')
              }}>
               <Text>marathi</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.props.navigation.navigate('SolutionScreen')
              }}>
               <Text>Sanskrit</Text>
              </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
     width:300,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#ff9800",
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16,
     padding: 10,
     
   },
    buttonText:{
     color:'#ffff',
     fontWeight:'200',
     fontSize:20
   }
   })
   
   