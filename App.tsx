import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Routes} from './src/navigation/routes';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/language/i18n';
import './src/styles/global.css';

export default function App() {
  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={i18n}>
        <Routes />
      </I18nextProvider>
    </SafeAreaProvider>
  );
}
