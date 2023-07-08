import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import { List } from 'react-native-paper';

export default function ListScreen() {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    fetchListItems();
  }, []);

  const fetchListItems = async () => {
    try {
      const response = await axios.get('https://hisocars.techinnsoft.com/api/Booking/get-listings');
      setListItems(response.data);
    } catch (error) {
      console.error('Error fetching list items:', error);
    }
  };

  const renderItem = ({ item }) => (
    <List.Item title={item.name} />
  );
  

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={listItems}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
