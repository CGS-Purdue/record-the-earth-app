import React, { Component } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Theme } from '../../Theme';
const _styles = Theme.Styles;
const _colors = Theme.Colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },
  item: {
    backgroundColor: 'rgba(255,255,255,.1)',
    padding: 0,
    marginVertical: 4,
    marginHorizontal: 5,
    fontSize: 16,
  },
  head: {
    flex: 1,
    width: '100%',
    backgroundColor: '#444444',
    display: 'flex',
  },
});

class ListViewEmpty extends Component {
  constructor(props) {
    super(props);
    this._onActionButton = this._onActionButton.bind(this);
  }

  _onActionButton(){
    if (this.props.onActionButton){
      console.log(this.props);
      this.props.onActionButton();
    }
  }

  render() {
    const emptyText = 'You do not have any recordings yet.';
    const actionText = 'Click here to record your first soundscape.';


  return (
    <View>
      <View style={{ flex: 1, width: '100%', backgroundColor: '#444444', display: 'flex', }}>
        <View style={[styles.item, { backgroundColor: 'rgba(255,255,255,.4)' }]} >
          <View style={styles.surface}>
            <Text style={styles.item}>{emptyText}</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1, width: '100%', backgroundColor: '#444444', display: 'flex', }}>
        <Button
          title={actionText}
          style={_styles.button_default}
          color={_colors.PRIMARY}
          onPress={this._onActionButton}
        />
      </View>
    </View>
  );
}
}

export { ListViewEmpty };
