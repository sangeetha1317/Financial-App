import React from 'react';
import { View, Text } from 'react-native';

export default function TransactionDetail({ route }) {
  const { transaction } = route.params;

  return (
    <View>
     <Text> {transaction.name}</Text>
      <Text>{transaction.amount}</Text>
      <Text>{transaction.date}</Text>
    </View>
  );
}
