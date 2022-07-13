import React from 'react'
import { Text, View } from 'react-native';
import { Options} from '../../components';


const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Options title="New Match"/>
      <Options title="Find a Match"/>

    </View>
  );
}

export default Home