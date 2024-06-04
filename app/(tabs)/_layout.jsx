import {StatusBar} from 'expo-status-bar';
import {Redirect, Tabs} from 'expo-router';
import {Image, Text, View} from 'react-native';

import {icons} from '../../constants';

const TabLayout = () => {
  const TabIcon = ({icon, color, name, focused}) => {
    return (
      <View className="flex items-center justify-center gap-2">
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-6 h-6"
        />
        <Text
          className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
          style={{color: color}}>
          {name}
        </Text>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 2,
          borderTopColor: '#232533',
          height: 100,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="play"
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcon
              icon={icons.play}
              color={color}
              name="Play"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
