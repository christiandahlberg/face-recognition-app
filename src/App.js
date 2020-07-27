import React from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/navigation/Navigation';
import SignIn from './components/signin/SignIn';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';


const app = new Clarifai.App({
  apiKey: '37d5bc8365304d9080499ee14b986ecd'
});


const particles = { 
  "particles": {
        "number": {
            "value": 160, 
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 100,
                "duration": 4
            }
        }
    }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      boxes: [],
      route: 'signin',
    }
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

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})

    if (!this.state.input) {
      alert("Please enter an image URL!")
    }

    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
        .then(response => this.displayFaceBoxes(this.calculateFaceLocation(response)))
        .catch(err => console.log(err));

    document.getElementById('inputForm').value = '';
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          params={particles} />
        { this.state.route === 'signin' 
          ? <SignIn onRouteChange={this.onRouteChange}/>
          : <div>
              <Navigation onRouteChange={this.onRouteChange}/>
              <Logo />
              <Rank />
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition  imageUrl={this.state.imageUrl} boxes={this.state.boxes}/>
            </div>
        }
      </div>
    );
  }
}
  
 
export default App;
