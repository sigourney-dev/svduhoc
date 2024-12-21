import React, {ErrorInfo, ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logger} from '../utils/logger.ts';

// eslint-disable-next-line max-len
// This code defines an ErrorBoundary component that catches errors that occur during rendering of its child components.
// The component renders its children normally if no error occurs, but if an error is caught,
// it displays a custom fallback UI with an error message.
// eslint-disable-next-line max-len
// We're using a class component because according to the documentation, only class components can be error boundaries.
// Read more here https://reactjs.org/docs/error-boundaries.html

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    Logger.debug(`componentDidCatch ${error} ${errorInfo}`);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <View style={styles.container}>
          <Text style={styles.message}>
            Something went wrong.{'\n'} Our team has taken a note of this issue.
          </Text>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
