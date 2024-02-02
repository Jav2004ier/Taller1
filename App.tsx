import React from 'react';
import { PositionsScreen } from './src/screens/PositionsScreens';
//import { HolaMundoScreens } from './src/screens/HolaMundoScreens';
//import { ContadorScreen } from './src/screens/ContadorScreen';
//import {BoxObejctsModelScreens} from './src/screens/BoxObejctsModelScreens';
import { SafeAreaView } from 'react-native';
import { FlexScreen } from './src/screens/FlexScreen';
//import { DimensionesScreen } from './src/screens/DimensionesScreen';


export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    {/*<HolaMundoScreen/>*/}
    {/*<ContadorScreen/>*/}
    {/*<BoxObejctsModelScreens/>*/}
    {/*<DimensionesScreen/>*/}
    {/*<PositionsScreen/>*/}
    <FlexScreen/>  
    </SafeAreaView>
  )
}
