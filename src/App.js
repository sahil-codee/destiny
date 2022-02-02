import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp';
import Header from './Components/Header';
import Buttons from './Components/Buttons';
import work from './work.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='left'>
          <Header />
          <SignUp />
          <Buttons />
        </div>
        <div className='right'>
          <h2 style={{fontSize: '3rem', marginTop: '8%'}}>Welcome To <u>Destin</u>y</h2>
          <img src={work} className='img'></img>
        </div>
      </header>
    </div>
  );
}

export default App;
