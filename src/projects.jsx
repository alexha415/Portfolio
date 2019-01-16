import brickbreaker1 from './resources/brickbreaker1.png';
import brickbreaker2 from './resources/brickbreaker2.png';
import brickbreaker3 from './resources/brickbreaker3.png';
import brickbreaker4 from './resources/brickbreaker4.png';
import brickbreaker5 from './resources/brickbreaker5.png';

import tankwars1 from './resources/tankwars1.png';
import tankwars2 from './resources/tankwars2.png';
import tankwars3 from './resources/tankwars3.png';
import tankwars4 from './resources/tankwars4.png';

import gatortrader1 from './resources/gatortrader1.png';
import gatortrader2 from './resources/gatortrader2.png';
import gatortrader3 from './resources/gatortrader3.png';
import gatortrader4 from './resources/gatortrader4.png';

import speedbuddy1 from './resources/speedbuddy1.png';
import speedbuddy2 from './resources/speedbuddy2.png';
import speedbuddy3 from './resources/speedbuddy3.png';
import speedbuddy4 from './resources/speedbuddy4.png';

const fillerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non est vel est cursus tincidunt. Suspendisse vitae facilisis libero, non pharetra eros. In posuere quam fermentum risus venenatis, elementum maximus purus dapibus. Proin pretium tellus nec accumsan bibendum. Donec eget neque ut metus commodo dignissim. Suspendisse potenti. Nulla facilisis justo libero, sed vehicula nisi tincidunt in. Morbi feugiat sem velit, at rutrum neque dictum a. Nulla venenatis sapien eu metus consequat, sed pretium ligula commodo.";

const items = [
  {
    src: [gatortrader1,gatortrader2,gatortrader3,gatortrader4],
    srcDesc:[fillerText,fillerText,fillerText,fillerText],
    name: 'Gator Trader',
    path: 'gator-traders'
  },
  {
    src: [tankwars4,tankwars1,tankwars2,tankwars3],
    srcDesc:[fillerText,fillerText,fillerText,fillerText],
    name: 'Tank Wars',
    path: 'tank-wars'
  },
  {
    src: [speedbuddy1,speedbuddy2,speedbuddy3,speedbuddy4],
    srcDesc:[fillerText,fillerText,fillerText],
    name: 'Speed Buddy',
    path: 'speed-buddy'
  },
  {
    src: [brickbreaker1,brickbreaker2,brickbreaker3,brickbreaker4],
    srcDesc:[fillerText,fillerText,fillerText,fillerText],
    name: 'Super Rainbow Reef',
    path: 'super-rainbow-reef'
  }
];

export default items;
