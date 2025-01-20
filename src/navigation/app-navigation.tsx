import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
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
  FormTranslateScreen,
  CommunityScreen,
  IconHome,
  FormStudentScreen,
  ChangePasswordScreen,
  ChangeInformationScreen,
  NewsScreen,
  ChangeVisaScreen,
  CommonScreen,
  DetailNewsScreen,
  FormVisaD2Screen,
  FormServiceWorker,
  ConfirmForgotScreen,
  SplashScreen,
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
  FormTranslateScreen: undefined;
  CommunityScreen: undefined;
  IconHome: undefined;
  FormStudentScreen: undefined;
  ChangePasswordScreen: undefined;
  ChangeInformationScreen: undefined;
  NewsScreen: undefined;
  ChangeVisaScreen: undefined;
  CommonScreen: undefined;
  DetailNewsScreen: undefined;
  FormVisaD2Screen: undefined;
  FormServiceWorker: undefined;
  ConfirmForgotScreen: undefined;
  SplashScreen: undefined;
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
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
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
      <Stack.Screen name='FormTranslateScreen' component={FormTranslateScreen} />
      <Stack.Screen name='CommunityScreen' component={CommunityScreen} />
      <Stack.Screen name='IconHome' component={IconHome} />
      <Stack.Screen name='FormStudentScreen' component={FormStudentScreen} />
      <Stack.Screen name='ChangePasswordScreen' component={ChangePasswordScreen} />
      <Stack.Screen name='ChangeInformationScreen' component={ChangeInformationScreen} />
      <Stack.Screen name='NewsScreen' component={NewsScreen} />
      <Stack.Screen name='ChangeVisaScreen' component={ChangeVisaScreen} />
      <Stack.Screen name='CommonScreen' component={CommonScreen} />
      <Stack.Screen name='DetailNewsScreen' component={DetailNewsScreen} />
      <Stack.Screen name='FormVisaD2Screen' component={FormVisaD2Screen} /> 
      <Stack.Screen name='FormServiceWorker' component={FormServiceWorker} />
      <Stack.Screen name='ConfirmForgotScreen' component={ConfirmForgotScreen} />
    </Stack.Navigator>
  );
}
