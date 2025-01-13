import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CHARACTERDETAIL,
  FILTERCHARACTERS,
  SEARCHCHARACTERS,
  TABNAVIGATOR,
} from '../utils/routes';
import TabNavigator from './tabRouter';
import CharacterDetail from '../screens/characters/CharacterDetail';
import FilterCharacters from '../screens/characters/FilterCharacters';
import SearchCharacters from '../screens/characters/SearchCharacters';
import Colors from '../theme/colors';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.BACKGROUNDCOLOR,
        },
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABNAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen name={CHARACTERDETAIL} component={CharacterDetail} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetail} />
      <Stack.Screen name={FILTERCHARACTERS} component={FilterCharacters} />
      <Stack.Screen name={SEARCHCHARACTERS} component={SearchCharacters} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
