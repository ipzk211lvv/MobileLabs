import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function TabTopNavigation(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === 'Головна') {
            iconName = 'home';
          } else if (route.name === 'Галерея') {
            iconName = 'photo';
          } else if (route.name === 'Профіль') {
            iconName = 'user';
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
        tabBarStyle: {
          height: 56,
          paddingBottom: 3,
          backgroundColor: 'rgba(0, 0, 0, .1)',
          borderWidth: 0,
          elevation: 0,
          position: 'absolute',
          top: 0,
        },
      })}>
      <Tab.Screen
        name="Головна"
        component={HomeScreen}
        options={{headerTitle: ''}}
      />
      <Tab.Screen
        name="Галерея"
        component={GalleryScreen}
        options={{headerTitle: ''}}
      />
      <Tab.Screen
        name="Профіль"
        component={ProfileScreen}
        options={{headerTitle: ''}}
      />
    </Tab.Navigator>
  );
}

export default TabTopNavigation;
