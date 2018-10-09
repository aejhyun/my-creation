import React from 'react';
import * as enums from './Enums.js'

import { StyleSheet, Text, View } from 'react-native';
import {TxtMsgParamView} from './TxtMsgParamView.js'
import {TxtMsgTypePicker} from './TxtMsgTypePicker.js'
import TxtMsgMaker from './TxtMsgMaker.js'



export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    	txtMsg: '',
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

  render() {
    return (
      <View style={styles.parentView}>
        
        <View style={styles.view1}>
      	</View>
      	

      	<View style={styles.view2}>
 	      	<Text>
	      		{this.state.txtMsg}
	      		{this.state.pickedTxtMsgType}
	      	</Text>
      	</View>
      	

      	<View style={styles.view3}>
      		<TxtMsgParamView
      			onChangeText = {(text, paramType) => this.get(text, paramType)}
      			txtMsgType = {this.pickedTxtMsgType}
      		>	
      		</TxtMsgParamView>
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
