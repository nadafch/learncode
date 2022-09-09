import '../styles/AppFeatures.css'
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import js from '../assets/images/js.png';
import react from '../assets/images/react.png';
import git from '../assets/images/git.png';
import nodejs from '../assets/images/nodejs.png';
import fitur1 from '../assets/images/undraw_studying_re_deca.svg';
import fitur2 from '../assets/images/undraw_book_lover_re_rwjy.svg';

function AppFeatures() {
  return (
    <div className="features">
      <section className="features__coding"  style={{ backgroundColor: '#1266F1' }}>
        <h2 className='mb-3'><strong>Belajar menyesuaikan dengan minat mu.</strong></h2>
        <p className='mb-4'>dan masih banyak lagi...</p>
        <div className="features__languages">
          <img src={html} alt="html logo" />
          <img src={css} alt="css logo" />
          <img src={js} alt="js logo" />
          <img src={react} alt="react logo" />
          <img src={git} alt="git logo" />
          <img src={nodejs} alt="nodejs logo" />
        </div>
      </section>
      <section
        className="features__general"
        style={{ width: '80%', margin: '2rem auto 4rem auto' }}
      >
        <h2><strong>Fitur Kami</strong></h2>
        <div className="features__list">
          <div className="features__item">
            <img src={fitur1} alt="feature 1" />
            <div className="features__itemDesc">
              <h4><strong>Belajar menyesuaikan <br /> dengan minat mu.</strong></h4>
              <p>
              Disini setiap konten pembelajaran akan kami kategorikan 
              menjadi <br /> baberapa topik pembelajaran sesuai minat mu.
              </p>
            </div>
          </div>
          <div className="features__item">
            <img src={fitur2} alt="feature 2" />
            <div className="features__itemDesc">
              <h4><strong>Gratis akses belajar <br /> selamanya.</strong></h4>
              <p>
              Dapat belajar secara gratis tanpa harus <br /> mengeluarkan uang dari dompet mu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AppFeatures;
