import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import Summary from './src/components/Summary';
import TransactionsList from './src/components/TransactionsList';
import TransactionDetail from './src/components/TransactionDetail';

export default function App() {

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function TransactionStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Transactions List" component={TransactionsList} />
        <Stack.Screen name="Transaction Detail" component={TransactionDetail} />
      </Stack.Navigator>
    );
  }
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Transactions" component={TransactionStack} />
          <Tab.Screen name="Summary" component={Summary} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
