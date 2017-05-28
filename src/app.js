import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './Components/Common';
import LoginForm from './Components/LoginForm';

class App extends Component {
  componentWillMount(){
      firebase.initializeApp({
        apiKey: "AIzaSyCYZaFO05e7RdesSUNAPm3703QFrkwSKu0",
        authDomain: "auth-98fef.firebaseapp.com",
        databaseURL: "https://auth-98fef.firebaseio.com",
        projectId: "auth-98fef",
        storageBucket: "auth-98fef.appspot.com",
        messagingSenderId: "47683223280"
      });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
