import Header from './components/headerComponent.jsx';
import Home from './components/HomeComponent.jsx';
import photo from './components/picture/photo_project.png';
import './App.css';

const App = () => (
  <>
    <Header />
    <Home />
    <div className="row">
      <div className="col">
        <h1>
          НАШИ ПРОЕКТЫ
        </h1>
        <img className="img" src={photo} alt="group" />
      </div>
    </div>
  </>
);

export default App;
