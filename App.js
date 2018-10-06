import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TxtMsgParamView} from './TxtMsgParamView.js'
import {TxtMsgTypePicker} from './TxtMsgTypePicker.js'

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    	text: '',
    	pickedTxtMsgType: ''

    }

    this.test = ''
  }





  render() {
    return (
      <View style={styles.parentView}>
        
        <View style={styles.view1}>
      	</View>
      	

      	<View style={styles.view2}>
 	      	<Text>
	      		{this.state.text}
	      		{this.state.pickedTxtMsgType}
	      	</Text>
      	</View>
      	

      	<View style={styles.view3}>
      		<TxtMsgParamView
      			onChangeText = {(text) => this.setState({text: text})}
      			txtMsgType = {this.state.pickedTxtMsgType}
      		>	
      		</TxtMsgParamView>
      	</View>

      	

      	<View style={styles.view4}>
        	<TxtMsgTypePicker
        		onValueChange = {(pickedTxtMsgType) => this.setState({pickedTxtMsgType: pickedTxtMsgType})}
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
