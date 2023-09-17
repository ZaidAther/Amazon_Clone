import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import ProductScreen from './src/Screens/ProductScreen';
import ProductDetail from './src/Screens/ProductDetail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Detail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
