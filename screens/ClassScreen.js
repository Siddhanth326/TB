import React, { Component } from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

export default class ClassScreen extends Component{
    render(){
        return(
          <View style={[styles.View,{marginRight:100}]}>
              <Text>Please chose your section</Text>
              <TouchableOpacity style={[styles.button,{marginBottom:20, marginTop:20}]}
              onPress={()=>{
                  this.props.navigation.navigate('SubjectScreen')
              }}>
                  <Text style={styles.buttonText}>Class 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.props.navigation.navigate('SubjectScreen')
              }}>
                  <Text style={styles.buttonText}>Class 2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button,{marginBottom:20, marginTop:20}]}
              onPress={()=>{
                this.props.navigation.navigate('SubjectScreen')
            }}>
                  <Text style={styles.buttonText}>Class 3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.props.navigation.navigate('SubjectScreen')
            }}>
                  <Text style={styles.buttonText}>Class 4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button,{marginBottom:20, marginTop:20}]}
              onPress={()=>{
                this.props.navigation.navigate('SubjectScreen')
            }}>
                  <Text style={styles.buttonText}>Class 5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.props.navigation.navigate('SubjectScreen')
            }}>
                  <Text style={styles.buttonText}>Class 6</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={[styles.button,{marginBottom:20, marginTop:20}]}
              onPress={()=>{
                this.props.navigation.navigate('SubjectScreen')
            }}>
                  <Text style={styles.buttonText}>Class 7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.props.navigation.navigate('SubjectScreen')
            }}>
                  <Text style={styles.buttonText}>Class 8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button,{marginBottom:20, marginTop:20}]}
              onPress={()=>{
                this.props.navigation.navigate('SubjectScreen')
            }}>
                  <Text style={styles.buttonText}>Class 9</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button,{marginBottom:20, marginTop:20}]}
              onPress={()=>{
                this.props.navigation.navigate('SubjectScreen')
            }}>
                  <Text style={styles.buttonText}>Class 10</Text>
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

