import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeScreen} from '../home/home-screen';
import {ExploreScreen} from '../explore-screen/explore-screen';
import {COLORS} from '../../constants/theme';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
// const HomeIcon = ({color, size}) => (
//   <Icon name="explore" color={color} size={25} />
// );
// const ExploreIcon = ({color, size}) => (
//   <Icon name="explore" color={color} size={36} />
// );

export const MyTabs = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={COLORS.tertiary}
      inactiveColor={COLORS.inactiveClr}
      barStyle={{backgroundColor: COLORS.white}}
      // sceneAnimationEnabled={true}
      // shifting={true}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          // tabBarIcon: HomeIcon,
          tabBarBadgeStyle: {backgroundColor: 'red'},
          tabBarStyle: {backgroundColor: 'blue'},
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          // tabBarIcon: ExploreIcon,
        }}
      />
    </Tab.Navigator>
  );
};
