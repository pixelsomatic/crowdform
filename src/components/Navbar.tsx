import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Typography from './Typography';

type NavbarProps = {
  state?: any;
  descriptors?: any;
  navigation?: any;
};

const NAVBAR_ITEMS = ['Home', 'Trade', 'Portfolio'];

const Navbar = ({descriptors, navigation, state}: NavbarProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return NAVBAR_ITEMS.includes(route.name) ? (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.navbarContainer}>
            <View
              style={
                state.index === index
                  ? styles.activeIndicator
                  : styles.indicator
              }>
              {options.tabBarIcon({
                focused: state.index === index ? true : false,
              })}
              <Typography size={10} weight="700" color="black">
                {route.name}
              </Typography>
            </View>
          </TouchableOpacity>
        ) : null;
      })}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#fff',
  },
  activeIndicator: {
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 18,
    alignItems: 'center',
  },
  indicator: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
});
