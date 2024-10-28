import React from 'react';
import { View, Text } from 'react-native';
import { useTransactions } from '../../TransactionContext'
import styles from './styles';

export default function Summary() {
  const { transactions } = useTransactions();

  const totalExpenses = transactions.reduce((total, item) => total + item.amount, 0);
  const totalFood = transactions.filter((transaction) => transaction.category === 'Food').reduce((sum, transaction) => sum + transaction.amount, 0);
  const totalTransportation = transactions.filter((transaction) => transaction.category === 'Transportation').reduce((sum, transaction) => sum + transaction.amount, 0);
  const totalUtilities = transactions.filter((transaction) => transaction.category === 'Utilities').reduce((sum, transaction) => sum + transaction.amount, 0);
  const totalHousing = transactions.filter((transaction) => transaction.category === 'Housing').reduce((sum, transaction) => sum + transaction.amount, 0);
  const totalClothing = transactions.filter((transaction) => transaction.category === 'Clothing').reduce((sum, transaction) => sum + transaction.amount, 0);
  const totalOthers = transactions.filter((transaction) => transaction.category === 'Others').reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
     <View style={styles.container}>
     <Text style={styles.title}>Financial Summary</Text>
     
     <View style={styles.summaryCard}>
       <Text style={styles.summaryLabel}>Total Amount Expenses:</Text>
       <Text style={styles.summaryValue}>$ {totalExpenses}</Text>
     </View>

     <View style={styles.summaryCard}>
       <Text style={styles.summaryLabel}>Food Expenses:</Text>
       <Text style={styles.summaryValue}>$ {totalFood}</Text>
     </View>

     <View style={styles.summaryCard}>
       <Text style={styles.summaryLabel}>Transportation Expenses:</Text>
       <Text style={styles.summaryValue}>$ {totalTransportation}</Text>
     </View>

     <View style={styles.summaryCard}>
       <Text style={styles.summaryLabel}>Utilities Expenses:</Text>
       <Text style={styles.summaryValue}>$ {totalUtilities}</Text>
     </View>

     <View style={styles.summaryCard}>
       <Text style={styles.summaryLabel}>Clothing Expenses:</Text>
       <Text style={styles.summaryValue}>$ {totalClothing}</Text>
     </View>

     <View style={styles.summaryCard}>
       <Text style={styles.summaryLabel}>Other Expenses:</Text>
       <Text style={styles.summaryValue}>$ {totalOthers}</Text>
     </View>
     </View>

  );
}