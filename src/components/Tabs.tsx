import React, {ReactNode, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type PrimaryTabsProps = {
  tabs: string[];
  children: ReactNode[];
  qtUnread?: number;
  qtAll?: number;
  canDelete?: boolean;
  variant?: boolean;
  onSelectedTab?: (tab: string) => void;
};

const Tabs = ({tabs, children, onSelectedTab}: PrimaryTabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const formatText = (label: string) => {
    return label.toUpperCase();
  };

  const tabMapper = (tab: string, index: number): JSX.Element => {
    return (
      <TouchableOpacity
        key={index}
        style={[selectedTab === index ? styles.selectedTab : styles.tab]}
        onPress={() => {
          setSelectedTab(index);
          onSelectedTab && onSelectedTab(tab);
        }}>
        <Text
          style={selectedTab === index ? styles.selectedLabel : styles.label}>
          {formatText(tab)}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 12}}>
        {tabs.map(tabMapper)}
      </ScrollView>
      {children[selectedTab]}
    </>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  selectedLabel: {
    color: '#000',
    fontWeight: 'bold',
  },
  label: {
    color: '#A0A0A0',
  },
  selectedTab: {
    borderBottomColor: '#770FDF',
    borderBottomWidth: 2,
    paddingBottom: 4,
    marginRight: 12,
  },
  tab: {
    marginRight: 12,
  },
});
