import React from 'react';
import * as enums from './Enums.js'

import { Picker, StyleSheet, Text, View } from 'react-native';


export class TxtMsgTypePicker extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      txtMsgTypeValue: enums.TxtMsgType.CONFIRM_PHONE_NUMBER
    }

  }

  pickerChanged(itemValue, itemIndex) {

    this.setState({ 
      txtMsgTypeValue: itemValue
      
    })
  
  }




  render() {
    return (
   
         
          <Picker
            selectedValue={this.state.txtMsgTypeValue}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ txtMsgTypeValue: itemValue})
              this.props.onValueChange(itemValue)

              //this.pickerChanged(itemValue, itemIndex)
            }}>
            <Picker.Item label="Confirm Phone #" value={enums.TxtMsgType.CONFIRM_PHONE_NUMBER} />
            <Picker.Item label="Availability?" value={enums.TxtMsgType.CHECK_AVAILABILITY} />
            <Picker.Item label="Setup MG1" value={enums.TxtMsgType.SETUP_MG1} />
            <Picker.Item label="Pre-Confirm MG1" value={enums.TxtMsgType.PRE_CONFIRM_MG1} />
            <Picker.Item label="Confirm MG1" value={enums.TxtMsgType.CONFIRM_MG1} />
            <Picker.Item label="Book Finished" value={enums.TxtMsgType.BOOK_FINISHED} />
            <Picker.Item label="Book Not Finished" value={enums.TxtMsgType.BOOK_NOT_FINISHED} />
            <Picker.Item label="Confirm MG2" value={enums.TxtMsgType.CONFIRM_MG2} />
            <Picker.Item label="Confirm BP1" value={enums.TxtMsgType.CONFIRM_BP1} />
            <Picker.Item label="Due Diligence" value={enums.TxtMsgType.DUE_DILIGENCE} />
            <Picker.Item label="Confirm BP2" value={enums.TxtMsgType.CONFIRM_BP2} />
            <Picker.Item label="No Response" value={enums.TxtMsgType.NO_RESPONSE} />
            <Picker.Item label="Other..." value={enums.TxtMsgType.OTHER} />
          </Picker>
            

        

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

});