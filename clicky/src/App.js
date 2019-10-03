import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import Nav from './Components/Nav';
import Jumbotron from './Components/Jumbotron';
import Container from './Components/Container';
import Image from './Components/Image';

class App extends Component {
  state = {
    data,
    score: 0,
    topScore: 0
  }
  componentDidMount(){
    this.setState({
      data: this.shuffleData(this.state.data)
    })
  }
  shuffleData = data => {
    let i= data.length-1;
    while(i> 0){
      const j = Math.floor(Math.random()*(i+1));
      const temp = data[j];
      data[i] = data[j];
      data[j]= data[i];
      i--;
    }
    return data;
  }
  handleItemClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item}
      if(newItem.id == id){
        if(!newItem.clicked){
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    })
    guessedCorrectly ? this.handleCorrrectGuess(newData) : this.handleInCorrectGuess(newData)
  }
  render() {
    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <Container >
          {this.state.data.map(item => {
            return <Image 
              id={item.id}
              handleClick = {this.handleItemClick}
              image = {item.image}
            />
          })}
        </Container>
        
        <div className="container"></div>
        <footer className="footer">Footer</footer>
      </div>
    );
  }
}

export default App;
