import React from 'react';
import { View, Text } from 'react-native';

export default function Summary() {
  const totalExpenses = transactions.reduce((total, item) => total + item.amount, 0);

  return (
    <View style={{ padding: 20 }}>
      <Text>Total Expenses: ${totalExpenses}</Text>
    </View>
  );
}