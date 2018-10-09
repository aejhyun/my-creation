import React from 'react';
import * as enums from './Enums.js'

import { Modal, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import {TxtMsgParamTextInputs} from './TxtMsgParamView.js'
import {TxtMsgParamButtons} from './TxtMsgParamButtons.js'
import {TxtMsgTypePicker} from './TxtMsgTypePicker.js'
import {TxtMsgTransferButtons} from './TxtMsgTransferButtons.js'
import {CustomModalList} from './CustomModalList.js'
import TxtMsgMaker from './TxtMsgMaker.js'

import {CustomButton} from './CustomButton.js'
import {CustomTextInput} from './CustomTextInput.js'

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    	txtMsg: new TxtMsgMaker().makeTxtMsgWith(enums.TxtMsgType.CONFIRM_PHONE_NUMBER),
    	addressBookVisible: false,
    }
    this.txtMsgMaker = new TxtMsgMaker()
    this.pickedTxtMsgType = enums.TxtMsgType.CONFIRM_PHONE_NUMBER

  }

  picked(txtMsgType) {
  	this.pickedTxtMsgType = txtMsgType
  	this.makeTxtMsg()

  }

  get(text, paramType) {
 		this.txtMsgMaker.setParamUsing(text, paramType)
  	this.makeTxtMsg()
  }

  makeTxtMsg() {
  	this.setState({txtMsg: this.txtMsgMaker.makeTxtMsgWith(this.pickedTxtMsgType)})
  }

  setAddressBookVisibilityTo(visibility) {
    this.setState({addressBookVisible: visibility});
  }

  render() {
    return (
      <View style={styles.parentView}>


				<CustomModalList
					visible={this.state.addressBookVisible}
					setAddressBookVisibilityTo = {(visibility) => this.setAddressBookVisibilityTo(visibility)}
				/>




        
        <View style={styles.view1}>
      	</View>
      	

      	<View style={styles.view2}>
          <CustomTextInput
            style={{ flex: 2}}
            multiline = {true}
            placeholder="The text message..."
            value = {this.state.txtMsg}
          />
          <TxtMsgTransferButtons/>
      	</View>

      	<View style={styles.view3}>
    			<TxtMsgParamButtons
    				addressButtonPressed = {() => this.setAddressBookVisibilityTo(true)}
    			/>
    			<TxtMsgParamTextInputs
      			onChangeText = {(text, paramType) => this.get(text, paramType)}
      			txtMsgType = {this.pickedTxtMsgType}
    			/>	
      	</View>

      	<View style={styles.view4}>
        	<TxtMsgTypePicker
        		onValueChange = {(txtMsgType) => this.picked(txtMsgType)}
        	>
        	</TxtMsgTypePicker>
      	</View>

      </View>
    );
  }
}

const styles = StyleSheet.create({


  parentView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'skyblue'
  },
  
  view1: {
    flex: .2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'blue',
  },
  
  view2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'purple'
  },

  view3: {
    flex: 2.5,
    flexDirection: 'row',
    backgroundColor: 'skyblue'
  },

  view3n1: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: "column",
    backgroundColor: 'darkgreen',
    justifyContent: 'center',
  },

  view3n2: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: "column",
    backgroundColor: 'lightgreen',
    justifyContent: 'center'
  },

  view4: {
    flex: 2.3,
    backgroundColor: 'lightgray',
    alignItems:'center',
  },
});
