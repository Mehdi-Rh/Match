import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const Title = (props) => {
  return (
    <Text style={styles.title}>{props.title}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'red',
    textAlign: 'center'
  }
});

export default Title