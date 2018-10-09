import React from 'react';
import * as enums from './Enums.js'

import { StyleSheet, Text, View } from 'react-native';
import {CustomButton} from './CustomButton.js'
import VisibilityManager from './VisibilityManager.js'



export class TxtMsgParamButtons extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    }

    this.visibilityManager = new VisibilityManager()
  }


  setVisibility() {
    this.visibilityManager.setVisibilityUsing(this.props.txtMsgType)
  }

  onChangeText(text, paramType) {
    this.props.onChangeText(text, paramType)
  }

  render() {
    return (
          <View style = {styles.container}>

            <CustomButton
              style = {styles.buttonContainer}
              visible = {this.visibilityManager.candidateName}
              title = {enums.TxtMsgParamType.CANDIDATE_NAME + ":"}
              textAlign = {"right"}
              onPress = {() => { 
                // this.setModalVisible(true)
              }} 
            />

            <CustomButton
              style = {styles.buttonContainer} 
              visible = {this.visibilityManager.myName}
              title = {enums.TxtMsgParamType.MY_NAME + ":"}
              textAlign = {"right"}
              onPress = {() => { 
     
              }} 
            />

            <CustomButton
              style = {styles.buttonContainer} 
              visible = {this.visibilityManager.location}
              title = {enums.TxtMsgParamType.LOCATION + ":"}
              textAlign = {"right"}
              onPress = {() => { 
      
              }} 
            />

            <CustomButton
              style = {styles.buttonContainer} 
              visible = {this.visibilityManager.time}
              title = {enums.TxtMsgParamType.TIME + ":"}
              textAlign = {"right"}
              onPress = {() => { 
           
              }} 
            />

            <CustomButton
              style = {styles.buttonContainer} 
              visible = {this.visibilityManager.day}
              title = {enums.TxtMsgParamType.DAY + ":"}
              textAlign = {"right"}
              onPress = {() => { 
           
              }} 
            />

            <CustomButton
              style = {styles.buttonContainer} 
              visible = {this.visibilityManager.address}
              title = {enums.TxtMsgParamType.ADDRESS + ":"}
              textAlign = {"right"}
              onPress = {() => { 
 
              }} 
            />

            <CustomButton
              style = {styles.buttonContainer} 
              visible = {this.visibilityManager.speakerName}
              title = {enums.TxtMsgParamType.SPEAKER_NAME + ":"}
              textAlign = {"right"}
              onPress = {() => { 

              }} 
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