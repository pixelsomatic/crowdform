import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Typography from './Typography';

type GridProps = {
  values: {title: string; value: string}[];
};

interface CellProps {
  title: string;
  value: string;
}

interface RowProps {
  rowData: CellProps[];
}

const Grid = ({values}: GridProps) => {
  const rows: CellProps[][] = [];
  for (let i = 0; i < values.length; i += 2) {
    const row = values.slice(i, i + 2);
    rows.push(row);
  }

  const Cell = ({title, value}: CellProps) => {
    return (
      <View style={styles.cell}>
        <Typography size={14} weight="400" color="lightGrey">
          {title}
        </Typography>
        <Typography size={14} weight="400" color="black">
          {value}
        </Typography>
      </View>
    );
  };

  const Row = ({rowData}: RowProps) => {
    const cells = rowData.map(item => (
      <Cell key={item.title} title={item.title} value={item.value} />
    ));
    return (
      <View key={rowData[0].title} style={styles.row}>
        {cells}
      </View>
    );
  };

  const grid = rows.map(rowData => (
    <Row key={rowData[0].title} rowData={rowData} />
  ));
  return <View style={styles.container}>{grid}</View>;
};

export default Grid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  cell: {
    width: Dimensions.get('screen').width * 0.4,
    height: 40,
  },
});
