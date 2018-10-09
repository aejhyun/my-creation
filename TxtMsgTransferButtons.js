import React from 'react';
import * as enums from './Enums.js'

import { Clipboard, StyleSheet, Text, View } from 'react-native';
import {CustomButton} from './CustomButton.js'
import VisibilityManager from './VisibilityManager.js'
import Communications from 'react-native-communications';



export class TxtMsgTransferButtons extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  onCreateButtonPress = (value) =>  {
    Communications.text('9512331991', this.state.textMessage)


    // const isAvailable = SMS.isAvailableAsync();
    // if (isAvailable) {
    //   SMS.sendSMSAsync([], this.state.textMessage);
    // } else {
    //   // misfortune... there's no SMS available on this device
    // }
   
  }

  writeToClipboard = async () => {
    await Clipboard.setString(this.state.textMessage);
    alert('Yo text is copied home slice');

  }



  render() {
    return (
      <View style={{flex: 0.7, backgroundColor: "burlywood", flexDirection: "row"}}>
        <CustomButton
          style={{backgroundColor: "blueviolet", width: 80}}
          visible = {true}
          title = {"Create"}
          textAlign = {"center"}
          onPress = {this.onCreateButtonPress}
        />
        <CustomButton
          style={{backgroundColor: "blueviolet", width: 80}}
          visible = {true}
          title = {"Copy"}
          textAlign = {"center"}
          onPress = {this.writeToClipboard}
        />
          
      </View>
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