import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import {AppStackParamList, AppStackScreenProps} from './app-navigation.tsx';
import {color, hs, ms, S, TS} from '../themes';
import {AbroadScreen, MenuScreen, DeliveryScreen, HomeScreen} from '../screens/index.tsx';
import {Home, Van, Category, Global} from '../../assets/icons';
import {Utils, widthScreen, heightScreen} from '../utils/index.ts';
import {useNavigation} from '@react-navigation/native';
// import {NewHomeScreen} from '../screens/home/new-home.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type TabParamList = {
  // NewHomeScreen: undefined;
  HomeScreen: undefined;
  MenuScreen: undefined;
  DeliveryScreen: undefined;
  AbroadScreen: undefined;
};

export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>;

const Tab = createBottomTabNavigator<TabParamList>();

interface ITabScreen {
  id: number;
  title: string;
  icon: any;
  name: keyof TabParamList;
  component: () => React.JSX.Element;
}

interface TabBarIconProps {
  focused: boolean;
  tab: Omit<ITabScreen, 'component'>;
}

export function TabBarIcon(props: TabBarIconProps) {
  const {focused, tab} = props;
  const colorFocused = focused ? color.green.bold : color.grey.bold;

  const styles = StyleSheet.create({
    tabBarIconContainer: {
      ...S.itemsCenter,
      ...S.justifyCenter,
      ...S.flex1,
      width: hs(widthScreen / 4),
    },
    tabBarTitle: {
      ...TS.textXsMedium,
      color: colorFocused,
    },
  });

  const showIcon = (icon: string) => {
    switch (icon) {
      case 'home': {
        return <Home color={colorFocused} />;
      }
      case 'delivery': {
        return <Van color={colorFocused} />;
      }
      case 'abroad': {
        return <Global color={colorFocused} />;
      }
      default: {
        return <Category color={colorFocused} />;
      }
    }
  };
  return (
    <View style={styles.tabBarIconContainer}>
      {showIcon(tab.icon)}
      <Text style={styles.tabBarTitle}>{tab.title}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export const BottomSheetStack = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [translateX] = useState(new Animated.Value(0));

  const handleTabChange = (tabId: number) => {
    Animated.spring(translateX, {
      toValue: tabId * (widthScreen / 4),
      useNativeDriver: false,
      tension: 3,
      friction: 5,
    }).start();
  };

  const tabScreens: ITabScreen[] = [
    {
      id: 0,
      title: 'Trang chủ',
      icon: 'home',
      name: 'HomeScreen',
      component: HomeScreen,
    },
    {
      id: 1,
      title: 'Tin tức',
      icon: 'abroad',
      name: 'AbroadScreen',
      component: AbroadScreen,
    },
    {
      id: 2,
      title: 'Vận chuyển',
      icon: 'delivery',
      name: 'DeliveryScreen',
      component: DeliveryScreen,
    },
    {
      id: 3,
      title: 'Menu',
      icon: 'menu',
      name: 'MenuScreen',
      component: MenuScreen,
    },
  ];

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: Utils.isIOS() ? hs(heightScreen / 11) : 110,
            width: widthScreen,
            backgroundColor: color.white,
          },
        }}>
        {tabScreens.map((tab, index) => (
          <Tab.Screen
            name={tab.name}
            key={index}
            component={tab.component}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <TouchableOpacity
                    style={{paddingHorizontal: Utils.isIOS() ? 4 : 28, marginTop: 12}}
                    onPress={() => {
                      handleTabChange(tab.id);
                      // @ts-ignore
                      navigation.navigate(tab.name);
                    }}>
                    <TabBarIcon focused={focused} tab={tab} />
                  </TouchableOpacity>
                );
              },
            }}
          />
        ))}
      </Tab.Navigator>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: Utils.isIOS() ? hs(heightScreen / 11) : 109,
          transform: [{translateX: translateX}],
          width: widthScreen / 4,
          height: 2,
          backgroundColor: color.green.bold,
        }}
      />
    </>
  );
};
