import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import {navRef, Store} from './service';
import {ScreenName, ScreensParamList} from './types';
import {ScreenDefault, ScreenItem, ScreenEdit} from './screen';

const {Navigator, Screen} = createNativeStackNavigator<ScreensParamList>();

export const App: React.FC = () => (
  <Provider store={Store}>
    <NavigationContainer ref={navRef}>
      <Navigator>
        <Screen
          name={ScreenName.DefaultScreen}
          component={ScreenDefault}
          options={{title: 'Список гонщиков'}}
        />
        <Screen
          name={ScreenName.ItemScreen}
          component={ScreenItem}
          options={({
            route: {
              params: {id},
            },
          }) => ({title: `Гонщик: ${id}`})}
        />
        <Screen
          name={ScreenName.ItemEditScreen}
          component={ScreenEdit}
          options={({
            route: {
              params: {item},
            },
          }) => ({title: `Изменить: ${item.driverId}`})}
        />
      </Navigator>
    </NavigationContainer>
  </Provider>
);
