import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {PortalProvider} from '@gorhom/portal';
import {useNetInfo} from '@react-native-community/netinfo';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import {ErrorBoundary} from './src/error/error-boundary.tsx';
import {toastConfig, ToastService} from './src/services/toast/toast-service.tsx';
import {AppNavigation} from './src/navigation/app-navigation.tsx';
import {color} from './src/themes';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
    const {isConnected} = useNetInfo();
    useEffect(() => {
        if(!isConnected) {
            ToastService.showError('No network connection');
        }
    }, [isConnected]);

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={styles.AndroidSafeArea}>
                <ErrorBoundary>
                    <PortalProvider>
                      <AppNavigation />
                    </PortalProvider>
                </ErrorBoundary>
                <Toast config={toastConfig} />
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: color.white,
        paddingTop: 0,
    },
});
