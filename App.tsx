import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/index';
import Opacity from './src/pages/Opacity';
import Translate from './src/pages/Translate';
import Scale from './src/pages/Scale';
import WidthHeight from './src/pages/WidthHeight';
import WidthHeightPercentage from './src/pages/WidthHeightPercentage';
import Absolute from './src/pages/Absolute';
import Color from './src/pages/Color';
import Rotate from './src/pages/Rotate';
import Easing from './src/pages/Easing';
import Spring from './src/pages/Spring';
import Event from './src/pages/Event';
import Decay from './src/pages/Decay';
import Add from './src/pages/Add';
import Divide from './src/pages/Divide';
import Multiply from './src/pages/Multiply';
import Modulo from './src/pages/Modulo';

const Routes = {
  Home,
  Opacity,
  Translate,
  Scale,
  WidthHeight,
  WidthHeightPercentage,
  Absolute,
  Color,
  Rotate,
  Easing,
  Spring,
  Event,
  Decay,
  Add,
  Divide,
  Multiply,
  Modulo
};

const App = createAppContainer(createStackNavigator(Routes));

export default App;
