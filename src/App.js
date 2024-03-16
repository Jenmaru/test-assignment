import Header from './components/headerComponent.jsx';
import Home from './components/HomeComponent.jsx';
import photo from './components/picture/photo_project.png';
import arrow from './components/picture/arrow.png';
import './App.css';

const App = () => (
  <>
    <Header />
    <Home />
    <div className="container-fluid">
      <div className="row">
        <h1 className="mt-5 ms-5">
          НАШИ ПРОЕКТЫ
        </h1>
        <div className="col-lg-7 col-md-12">
          <img className="img p-5" src={photo} alt="group" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div className="col-lg-4 col-md-12 justify-content-center align-items-center d-flex portfolio">
          <div className="mt-3">
            <h1 className="text-skin" style={{ color: '#6779FF' }}>
              ЛЕНДИНГ ДЛЯ SKINCLUB
            </h1>
            <h3 className="pt-md-5 text-skin">
              Поставленные задачи:
            </h3>
            <ul>
              <li className="pt-3">
                Интуитивно понятный интерфейс
              </li>
              <li className="pt-3">
                Разработка оригинального дизайна
              </li>
              <li className="pt-3">
                Lorem Ipsum is simply dummy
              </li>
              <li className="pt-3">
                Lorem Ipsum is simply dummy
              </li>
              <li className="pt-3">
                Lorem Ipsum is simply dummy
              </li>
            </ul>
            <h3 className="pt-3">
              Срок выполнения работы: 10 дней
            </h3>
            <button className="connect2 button mt-5" type="button">ОСТАВИТЬ ЗАЯВКУ</button>
          </div>
        </div>
        <div className="col-lg-1 col-md-12 justify-content-center align-items-center d-flex">
          <img className="img" src={arrow} alt="group" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  </>
);

export default App;
