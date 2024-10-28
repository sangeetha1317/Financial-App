import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function TransactionDetail({ route }) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.basicInfo}>
        <Text style={styles.trName}>{transaction.name}</Text>
        <Text style={styles.trDate}>{transaction.date}</Text>
      </View>

      <Text style={styles.trCat}>{transaction.category}</Text>
      <Text style={styles.trcard}>$ {transaction.amount}</Text>

      <Text style={styles.trDesc}>{transaction.description}</Text>
      {transaction.card ? (
        <>
          <Text style={styles.trtitle}>{transaction.paymentMethod} Details</Text>
          <View style={styles.cardContent}>
            <Text style={styles.trcard}>{transaction.card?.cardType}</Text>
            <Text style={styles.trcard}>{transaction.card?.cardNumber}</Text>
          </View>
        </>
      ) : (
        <Text style={styles.trpayment}>Payment Method:  {transaction.paymentMethod}</Text>
      )}
    </View>
  );
}
