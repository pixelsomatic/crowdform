import React from 'react';
import {View} from 'react-native';
import Typography from '../components/Typography';

const PortfolioScreen = () => {
  return (
    <View>
      <Typography size={24} color="black" weight="600">
        Portfolio
      </Typography>
      <Typography size={14} color="black" weight="400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </Typography>
    </View>
  );
};

export default PortfolioScreen;
