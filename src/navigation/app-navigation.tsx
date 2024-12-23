import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {BottomSheetStack} from './bottom-sheet-stack';
import {Logger} from '../utils/logger';
import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  InfoScreen,
  MemberScreen,
  AboutUsScreen,
  AskAnswerScreen,
  NotebookScreen,
  ApplicationScreen,
  StudentScreen,
  FormTranslateScreen,
  CommunityScreen,
  WorkerScreen,
  FamilyScreen,
  ElectionScreen,
  IconHome,
  FormApplication,
  ChangePasswordScreen,
} from '../screens';

const Stack = createNativeStackNavigator<AppStackParamList>();

export type AppStackParamList = {
  BottomSheetStack: undefined;
  HomeScreen: undefined;
  AccountScreen: undefined;
  SettingScreen: undefined;
  SearchScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  InfoScreen: undefined;
  ForgotPasswordScreen: undefined;
  MemberScreen: undefined;
  AboutUsScreen: undefined;
  AskAnswerScreen: undefined;
  NotebookScreen: undefined;
  ApplicationScreen: undefined;
  StudentScreen: undefined;
  FormTranslateScreen: undefined;
  CommunityScreen: undefined;
  WorkerScreen: undefined;
  FamilyScreen: undefined;
  ElectionScreen: undefined;
  IconHome: undefined;
  FormApplication: undefined;
  ChangePasswordScreen: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export function AppNavigation() {
  const navigationRef = createNavigationContainerRef();
  const routeNameRef = React.useRef<string>();
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef?.getCurrentRoute()?.name;
        if (previousRouteName !== currentRouteName) {
          Logger.info(`Current route: ${currentRouteName}`);
        }
      }}>
      <AppStack />
    </NavigationContainer>
  );
}

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="BottomSheetStack">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="BottomSheetStack" component={BottomSheetStack} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="InfoScreen" component={InfoScreen} />
      <Stack.Screen name="AskAnswerScreen" component={AskAnswerScreen} />
      <Stack.Screen name="MemberScreen" component={MemberScreen} />
      <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
      <Stack.Screen name='NotebookScreen' component={NotebookScreen} />
      <Stack.Screen name='ApplicationScreen' component={ApplicationScreen} />
      <Stack.Screen name='StudentScreen' component={StudentScreen} />
      <Stack.Screen name='FormTranslateScreen' component={FormTranslateScreen} />
      <Stack.Screen name='CommunityScreen' component={CommunityScreen} />
      <Stack.Screen name='WorkerScreen' component={WorkerScreen} />
      <Stack.Screen name='FamilyScreen' component={FamilyScreen} />
      <Stack.Screen name='ElectionScreen' component={ElectionScreen} />
      <Stack.Screen name='IconHome' component={IconHome} />
      <Stack.Screen name='FormApplication' component={FormApplication} />
      <Stack.Screen name='ChangePasswordScreen' component={ChangePasswordScreen} />
    </Stack.Navigator>
  );
}
