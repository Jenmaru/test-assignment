import rightimage from './picture/rightimage.jpeg';
import group from './picture/Group.png';
import vector from './picture/Vector.png';

const Home = () => (
  <div className="row m-0 align-items-end justify-content-end">
    <div
      className="col-lg-6 col-sm-12 p-0"
      style={{
        backgroundImage: `url(${vector})`, maxWidth: '100%', backgroundSize: 'contain', height: 'auto', backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container-fluid mb-5 p-5">
        <h1>
          ЛЕНДИНГ ДЛЯ
        </h1>
        <h1>
          ВАШЕГО БИЗНЕСА
        </h1>
        <h1 style={{ color: '#6779FF' }}>
          ЗА 10 ДНЕЙ
        </h1>
        <h3>
          Гарантируем увеличение выручки!
        </h3>
        <button className="connect2 button" type="button">ОСТАВИТЬ ЗАЯВКУ</button>
      </div>
      <div className="row">
        <img src={group} alt="group" />
      </div>
    </div>
    <div
      className="col-lg-6 col-sm-12 p-0"
      style={{
        backgroundImage: `url(${rightimage})`, maxWidth: '100%', backgroundSize: '100% 100%', height: '56rem', backgroundPosition: 'fixed',
      }}
    >
      <div className="explain">
        <h4 className="text-center">БОЛЕЕ 7 ЛЕТ НА РЫНКЕ</h4>
        <h4 className="text-center">100+ РЕАЛИЗОВАННЫХ ПРОЕКТОВ</h4>
        <h4 className="text-center">10% МИНИМАЛЬНЫЙ РОСТ ВЫРУЧКИ</h4>
      </div>
    </div>
  </div>
);

export default Home;
