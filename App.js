import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { TransactionProvider } from './src/TransactionContext';
import Summary from './src/components/Summary/Summary.js';
import TransactionsList from './src/components/TransactionsList/TransactionsList.js'
import TransactionDetail from './src/components/TransactionDetaiil/TransactionDetail.js';
import Ionicons from '@expo/vector-icons/Ionicons';

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
    <TransactionProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Transactions"
           component={TransactionStack}
           options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="wallet" color={color} size={size} />
            ),
          }} />
          <Tab.Screen name="Summary" 
          component={Summary} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="stats-chart" color={color} size={size} />
            ),
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionProvider>
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
