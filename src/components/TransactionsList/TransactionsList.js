import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useTransactions } from '../../TransactionContext'
import styles from './styles';

export default function TransactionsList({ navigation }) {
  const { transactions } = useTransactions();

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Transaction Detail', { transaction: item })}
          >
            <View style={styles.infoCard}>
            <View style={styles.infoContent}>
              <Text style={styles.trName}>{item.name}</Text>
              <Text style={styles.trAmount}>- ${item.amount}</Text>
            </View>
              <Text style={styles.trPayment}>{item.paymentMethod}</Text>
              <Text style={styles.trDate}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
