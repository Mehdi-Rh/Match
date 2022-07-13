import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const partiesDetail = [
  {
  id : "1",
  town : "Oran",
  region : "Bir El Djir",
  teamName : "Pepinière",
  weekDay : "Saturday",
  dayTime : "Morning",
  time : "08:00"
  },
  {
    id : "2",
    town : "Oran",
    region : "Senia",
    teamName : "Al Hilal",
    weekDay : "Sunday",
    dayTime : "Night",
    time : "08:00"
  },
  {
    id : "3",
    town : "Oran",
    region : "Bir El Djir",
    teamName : "Al Moustakbal",
    weekDay : "Saturday",
    dayTime : "evening",
    time : "05:00"
    }
]

const Item = ({ town, region, teamName, weekDay,dayTime, time}) => (
  <View style={styles.item}>
    <View >
      <Text style={styles.title}>{town}</Text>
      <Text style={styles.title}>{region}</Text>
      <Text style={styles.title}>{teamName}</Text>
    </View>
    <View >
      <Text style={styles.title}>{weekDay}</Text>
      <Text style={styles.title}>{dayTime}</Text>
      <Text style={styles.title}>{time}</Text>
    </View>
  </View>

);


const Party = () => {
  const renderItem = ({ item }) => (
    <Item town={item.town} region={item.region} region={item.region} teamName={item.teamName} weekDay={item.weekDay} dayTime={item.dayTime} time={item.time}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={partiesDetail}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row'

  },
  title: {
    fontSize: 32,
  },
});


export default Party