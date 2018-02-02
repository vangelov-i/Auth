import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyALonek8mgdmhE2EBFaSX6QTf4XfGECef8',
      authDomain: 'auth-e556d.firebaseapp.com',
      databaseURL: 'https://auth-e556d.firebaseio.com',
      projectId: 'auth-e556d',
      storageBucket: 'auth-e556d.appspot.com',
      messagingSenderId: '730462174012'
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
