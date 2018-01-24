import React from 'react';
import {Text, View, Platform,Image} from 'react-native';
import Landing from './src/Landing';
import Search from './src/Search';

//Loading the Current States for P-index Appplications
export default class App extends React.Component {
  state = {
    currentScreen: "landing"
  }
  switchScreen = (currentScreen) =>{
    this.setState({currentScreen});
  }
  renderScreen = () =>{
    if(this.state.currentScreen === "landing"){
      return(
        <Landing switchScreen={this.switchScreen}/>
      )
    }
    else if(this.state.currentScreen === "search"){
      return(
        <Search />
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    );
  }
}

//Converting App to match the margin for android platform
const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0
  }
}




    
    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       


     






// Making if stament for compatible of styles for andriod plaform
