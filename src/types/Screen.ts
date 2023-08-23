import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IResDriver} from './Driver';

export enum ScreenName {
  DefaultScreen = 'DefaultScreen',
  ItemScreen = 'ItemScreen',
  ItemEditScreen = 'ItemEditScreen',
}

type ParamWithID = {
  id: string;
};

type ParamWithDriver = {
  item: IResDriver;
};

export type ScreensParamList = {
  [ScreenName.DefaultScreen]: undefined;
  [ScreenName.ItemScreen]: ParamWithID;
  [ScreenName.ItemEditScreen]: ParamWithDriver;
};

export type ScreenDefaultProps = NativeStackScreenProps<
  ScreensParamList,
  ScreenName.DefaultScreen
>;

export type ScreenItemProps = NativeStackScreenProps<
  ScreensParamList,
  ScreenName.ItemScreen
>;

export type ScreenEditProps = NativeStackScreenProps<
  ScreensParamList,
  ScreenName.ItemEditScreen
>;
