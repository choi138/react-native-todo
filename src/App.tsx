import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { ToDoScreen } from './screens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ToDo" component={ToDoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
