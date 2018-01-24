import React from 'react';
import {View,Text,Image} from 'react-native';
import {Button} from 'native-base'; 

var myBackground = require('../assets/icons/landing.jpg');

class Landing extends React.Component {
				render(){
					return(
						<View>
						 <Button
     block={true}
     style={styles.butttonStyle}
     onPress={()=>this.props.switchScreen("search")}
     >
     <Text style={styles.buttonText}> Start Searching Pindex Now </Text>
     </Button>
						<Image source={myBackground}/>
    
     </View>
       )
		}
}


const styles = {
butttonStyle: {
  margin:10
},

buttonText:{
  color: 'white',
}

}
export default Landing;