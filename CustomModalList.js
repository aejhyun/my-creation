import React from 'react';
import * as enums from './Enums.js'

import {Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import {CustomButton} from './CustomButton.js'
import {CustomFlatList} from './CustomFlatList.js'
import VisibilityManager from './VisibilityManager.js'
import Communications from 'react-native-communications';



export class CustomModalList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    }

  }



  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{marginTop: 22}}>
          <View>
            <TouchableHighlight
              onPress={() => {
                this.props.setAddressBookVisibilityTo(!this.props.visible);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
          <CustomFlatList/>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: "column",
    backgroundColor: 'pink',
    justifyContent: 'center'
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'violet',
    justifyContent: 'center'

  },
});