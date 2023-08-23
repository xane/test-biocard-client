import {createNavigationContainerRef} from '@react-navigation/native';

export const logError = (load: boolean, error: any) =>
  !load && error && console.warn('LOG ERROR:', error);

export const logData = (load: boolean, error: any, data: any) =>
  !load && !error && console.warn('LOG DATA:', data);

export const navRef = createNavigationContainerRef<any>();

export const navigate = (name: string, params?: any) => {
  if (navRef.isReady()) {
    navRef.navigate(name, params);
  }
};

export const goBack = () => navRef?.goBack();
