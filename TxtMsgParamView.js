import React from 'react';
import * as enums from './Enums.js'

import { StyleSheet, Text, View } from 'react-native';
import {CustomTextInput} from './CustomTextInput.js'
import VisibilityManager from './VisibilityManager.js'
import TxtMsgMaker from './TxtMsgMaker.js'


export class TxtMsgParamTextInputs extends React.Component {
  
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
      <View style={styles.container}
        callVisibilityManager = {this.setVisibility()}
      >

        <CustomTextInput
          style = {styles.textInputContainer}
          visible = {this.visibilityManager.candidateName}
          id = {enums.TxtMsgParamType.CANDIDATE_NAME}
          placeholder = "Candidate's Name"
          onChangeText ={(text, id) => this.onChangeText(text, id)}
        />

        <CustomTextInput
          style = {styles.textInputContainer} 
          visible = {this.visibilityManager.myName}
          id = {enums.TxtMsgParamType.MY_NAME}
          placeholder = "My Name"
          onChangeText ={(text, id) => this.onChangeText(text, id)}
        />

        <CustomTextInput
          style = {styles.textInputContainer} 
          visible = {this.visibilityManager.location}
          id = {enums.TxtMsgParamType.LOCATION}
          placeholder = "Location"
          onChangeText ={(text, id) => this.onChangeText(text, id)}
        />

        <CustomTextInput
          style = {styles.textInputContainer} 
          visible = {this.visibilityManager.time}
          id = {enums.TxtMsgParamType.TIME}
          placeholder = "Time"
          onChangeText ={(text, id) => this.onChangeText(text, id)}
        />

        <CustomTextInput
          style = {styles.textInputContainer} 
          visible = {this.visibilityManager.day}
          id = {enums.TxtMsgParamType.DAY}
          placeholder = "Day"
          onChangeText ={(text, id) => this.onChangeText(text, id)}
        />

        <CustomTextInput
          style = {styles.textInputContainer} 
          visible = {this.visibilityManager.address}
          id = {enums.TxtMsgParamType.ADDRESS}
          // value = {this.addressBookManager.getSelectedAddress()}
          placeholder = "Address"
          onChangeText ={(text, id) => this.onChangeText(text, id)}
        />

        <CustomTextInput
          style = {styles.textInputContainer} 
          visible = {this.visibilityManager.speakerName}
          id = {enums.TxtMsgParamType.SPEAKER_NAME}
          placeholder = "Speaker's Name"
          onChangeText = {(text, id) => this.onChangeText(text, id)}
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
    backgroundColor: 'lightgreen',
    justifyContent: 'center'
  },

  textInputContainer: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
});