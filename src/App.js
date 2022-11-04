import logo from './logo.svg';
import pathLogo from './ecto.png';
import './App.css';

const textDescription1 = "Gengar is a dark purple, bipedal Pokémon with a roundish body. It has red eyes, a wide mouth that is usually curled into a sinister grin, and pointed ears. On its back are numerous spikes and it has smaller spikes on top of its head similar to tufty fur. Its arms and legs are short with three digits on both its hands and feet. It also has a stubby tail."
const textDescription2 = "Gengar has the ability to hide perfectly in the shadow of any object, granting it exceptional stealth. However, Gengar's body acts as a heat sink. Its presence cools the temperature of the surrounding area by nearly 10°F (5°C), because it absorbs the warmth. The anime has shown that Gengar can fly, possess people and other Pokémon, and extend its tongue by several meters."
const textDescription3 = "Gengar is very mischievous, and at times, malicious. It enjoys playing practical jokes and casting curses, such as pretending to be one's shadow, then behaving erratically. When the quarry notices, the Gengar takes delight in its victim's terror. However, Gengar has been known to be loyal to a Trainer who treats it well. Being the result of an evolution via trading, Gengar is rarely found in the wild, though they can be found in caves and dark places where shadows form. It is especially fond of urban areas such as cities and back alleys, but only during the night.";

function App() {
  return (
    <div className="App">
      <div className="App-bar">
        <div className="Button-connect-wallet">Connect Wallet</div>
      </div>
      <div className="App-header">
        <div className="App-header-center">
          <a href="#App-body">
            <div className="App-logo-background">
              <div className="App-logo-background-reverse">
                <img src={pathLogo} className="App-logo" alt="logo" />
              </div>
            </div>
          </a>
          <div className="Title-Nft">Ectoplasma NFT</div>
        </div>
      </div>
      <div id="App-body" className="App-body">
        <div className="Text-container">
          {textDescription1.split(' ').map((elem, index) => {
            return <span className='Text-description-word'>{elem}</span>
          })}
        </div>
        <div className="Text-container">
          {textDescription2.split(' ').map((elem, index) => {
            return <span className='Text-description-word'>{elem}</span>
          })}
        </div>
        <div className="Text-container">
          {textDescription3.split(' ').map((elem, index) => {
            return <span className='Text-description-word'>{elem}</span>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
