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

      <View style={styles.basicInfo}>
        <Text style={styles.trCat}>{transaction.category}</Text>
        <Text style={styles.trCost}>-  ${transaction.amount}</Text>
      </View>
      <Text style={styles.trDesc}>{transaction.description}</Text>
      {transaction.card ? (
        <>
          <Text style={styles.trtitle}>{transaction.paymentMethod} Details</Text>
          <View style={styles.cardContent}>
          <View style={styles.paymentInfo}>
            <Text style={[styles.trcard, styles.cardTitle]}>Card Type:   </Text>
            <Text style={styles.trcard}>{transaction.card?.cardType}</Text>
          </View>
          <View style={styles.paymentInfo}>
            <Text style={[styles.trcard, styles.cardTitle]}>Card No:    </Text>
            <Text style={styles.trcard}>  {transaction.card?.cardNumber}</Text>
            </View>
          </View>
        </>
      ) : (
        <View style={styles.paymentInfo}>
          <Text style={styles.trpaytitle}>Payment Method: </Text>
          <Text style={styles.trpayment}>  {transaction.paymentMethod}</Text>
        </View>
        
      )}
    </View>
  );
}
