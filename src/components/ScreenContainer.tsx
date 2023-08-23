import React from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import {useScreen} from '../hooks';
import {ScreenShowLoad} from './ScreenShowLoad';
import {ScreenShowError} from './ScreenShowError';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

interface Props extends React.PropsWithChildren {
  load?: boolean;
  error?: any;
  onRefresh?: () => void;
}

export const ScreenContainer: React.FC<Props> = ({
  children,
  load = false,
  error = null,
  onRefresh,
}) => {
  const {barStyle, backgroundColor} = useScreen();

  return (
    <SafeAreaView style={[style.container, {backgroundColor}]}>
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
      <ScrollView
        contentInsetAdjustmentBehavior="always"
        style={[style.content, {backgroundColor}]}
        refreshControl={
          onRefresh ? (
            <RefreshControl refreshing={load} onRefresh={onRefresh} />
          ) : undefined
        }>
        <ScreenShowLoad show={load} />
        <ScreenShowError show={!load && error} onPress={onRefresh} />
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
