import React from 'react';
import Particles from 'react-particles-js';
import './App.css';

import Navigation from './components/navigation/Navigation';
import SignIn from './components/signin/SignIn';
import Register from './components/register/Register';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Footer from './components/footer/Footer';


const particles = { 
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 600
      }
    }
  }
}

const initialState = {
  input: '',
  imageUrl: '',
  boxes: [],
  route: 'signin',
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  }
}

class App extends React.Component {
  constructor() {
    super();
    // Excluding 'isSignedin: false'
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState(initialState);
    }
    this.setState({route: route});
  }

  calculateFaceLocation = (data) => {
    const image = document.getElementById('inputimage')
    let boxes = []

    data.outputs[0].data.regions.forEach(region => {
        const face = region.region_info.bounding_box
        const width = Number(image.width)
        const height = Number(image.height)

      boxes.push({
        leftCol: face.left_col * width,
        topRow: face.top_row * height,
        rightCol: width - (face.right_col * width),
        bottomRow: height - (face.bottom_row * height)
     })
    })

    return boxes;
  }

  displayFaceBoxes = (boxes) => {
    this.setState({boxes: boxes})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onImageSubmit = () => {
    this.setState({imageUrl: this.state.input})

    if (!this.state.input) {
      alert("Please enter an image URL!")
    }

    fetch('https://mysterious-savannah-50744.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response) {
        fetch('https://mysterious-savannah-50744.herokuapp.com:3001/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              id: this.state.user.id
          })
        })
        .then(response => response.json()) 
        .then(count => {
          this.setState(Object.assign(this.state.user, {
            entries: count
          }))
        })
        .catch(console.log)
      }
      this.displayFaceBoxes(this.calculateFaceLocation(response))
    })
    .catch(err => console.log(err));

    document.getElementById('inputForm').value = '';
  }

  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          params={particles} />
        { this.state.route === 'home' 
          ? <div>
              <Navigation onRouteChange={this.onRouteChange}/>
              <Logo />
              <Rank 
                name={this.state.user.name} 
                entries={this.state.user.entries}/>
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onImageSubmit={this.onImageSubmit}/>
              <FaceRecognition  imageUrl={this.state.imageUrl} boxes={this.state.boxes}/>
            </div>
          : (
            this.state.route === 'signin' 
            ? <div>
                <SignIn 
                  loadUser={this.loadUser}
                  onRouteChange={this.onRouteChange}/>
                <Footer />
              </div>
            : <div>
                <Register 
                  loadUser={this.loadUser} 
                  onRouteChange={this.onRouteChange}/>
                <Footer />
              </div>
            )
        }
      </div>
    );
  }
}
  
 
export default App;
