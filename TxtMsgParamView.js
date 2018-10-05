import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import {CustomTextInput} from './CustomTextInput.js'
import VisibilityManager from './VisibilityManager.js'
import * as enums from './Enums.js'

export class TxtMsgParamView extends React.Component {
  

  constructor(props) {
    super(props);
    this.visibilityManager = new VisibilityManager()
  }

  onChangeText(text, id) {
    this.props.onChangeText(text, id)
  }


  render() {
    return (
      <View style={styles.container}>

            <CustomTextInput
              style = {styles.textInputContainer} 
              visible = {this.visibilityManager.candidateName}
              id = {enums.TextMessageInfoType.CANDIDATE_NAME}
              placeholder = "Candidate's Name"
              onChangeText ={(text, id) => this.onChangeText(text, id)}
            />

            <CustomTextInput
              style = {styles.textInputContainer} 
              visible = {this.visibilityManager.myName}
              id = {enums.TextMessageInfoType.MY_NAME}
              placeholder = "My Name"
              onChangeText ={(text, id) => this.onChangeText(text, id)}
            />

            <CustomTextInput
              style = {styles.textInputContainer} 
              visible = {this.visibilityManager.location}
              id = {enums.TextMessageInfoType.LOCATION}
              placeholder = "Location"
              onChangeText ={(text, id) => this.onChangeText(text, id)}
            />

            <CustomTextInput
              style = {styles.textInputContainer} 
              visible = {this.visibilityManager.time}
              id = {enums.TextMessageInfoType.TIME}
              placeholder = "Time"
              onChangeText ={(text, id) => this.onChangeText(text, id)}
            />

            <CustomTextInput
              style = {styles.textInputContainer} 
              visible = {this.visibilityManager.day}
              id = {enums.TextMessageInfoType.DAY}
              placeholder = "Day"
              onChangeText ={(text, id) => this.onChangeText(text, id)}
            />

            <CustomTextInput
              style = {styles.textInputContainer} 
              visible = {this.visibilityManager.address}
              id = {enums.TextMessageInfoType.ADDRESS}
              // value = {this.addressBookManager.getSelectedAddress()}
              placeholder = "Address"
              onChangeText ={(text, id) => this.onChangeText(text, id)}
            />

            <CustomTextInput
              style = {styles.textInputContainer} 
              visible = {this.visibilityManager.speakerName}
              id = {enums.TextMessageInfoType.SPEAKER_NAME}
              placeholder = "Speaker's Name"
              onChangeText ={(text, id) => this.onChangeText(text, id)}
            />



        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInputContainer: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
});