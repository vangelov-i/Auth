import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyALonek8mgdmhE2EBFaSX6QTf4XfGECef8',
      authDomain: 'auth-e556d.firebaseapp.com',
      databaseURL: 'https://auth-e556d.firebaseio.com',
      projectId: 'auth-e556d',
      storageBucket: 'auth-e556d.appspot.com',
      messagingSenderId: '730462174012'
    });

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: !!user });
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.buttonStyle}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
  },
  spinnerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttonStyle: {
    marginTop: 5,
    height: 45
  }
};

export default App;
