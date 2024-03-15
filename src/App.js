import Header from './components/headerComponent.jsx';
import Home from './components/HomeComponent.jsx';
import photo from './components/picture/photo_project.png';
import './App.css';

const App = () => (
  <>
    <Header />
    <Home />
    <div className="container-fluid">
      <div className="row">
        <h1 className="mt-5">
          НАШИ ПРОЕКТЫ
        </h1>
        <div className="col-lg-7">
          <img className="img" src={photo} alt="group" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div className="col-lg-5">
          <div>
            <h1>
              haha
            </h1>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default App;
