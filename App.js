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
        <Stack.Screen name="Transactions List" component={TransactionsList}  options={{ title: "My Transactions", headerTitleStyle: { color: '#4a235a', fontWeight: 'bold' } }} />
        <Stack.Screen name="Transaction Detail" component={TransactionDetail} options={{ headerTitleStyle: { color: '#4a235a', fontWeight: 'bold' } }} />
      </Stack.Navigator>
    );
  }
  return (
    <TransactionProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#4a235a',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'left',
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Transactions') {
            iconName = focused ? 'wallet' : 'wallet-outline'
          } else {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        }
      })}>
          <Tab.Screen name="Transactions"
           component={TransactionStack}
           options={{headerShown: false }}
          />
          <Tab.Screen name="Summary" 
          component={Summary}  options={{headerTitle: 'Financial Summary', headerTitleStyle: { color: '#4a235a',  fontWeight: 'bold'  }  }}/>
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
