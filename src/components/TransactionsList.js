import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { transactions } from '../mockData';

export default function TransactionsList({ navigation }) {

  return (
    <View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <View>
              <Text>{item.name}</Text>
              <Text>{item.amount}</Text>
              <Text>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
