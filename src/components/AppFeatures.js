import '../styles/AppFeatures.css';
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
      <section className="features__coding"
        style={{ backgroundColor: '#1266F1' }}>
        <h2 className='mb-3'
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"><strong>Belajar menyesuaikan dengan minat mu.</strong>
        </h2>
        <p className='mb-4'
          data-aos="fade-up"
          data-aos-duration="2000">dan masih banyak lagi...</p>
        <div className="features__languages"
          data-aos="fade-left"
          data-aos-duration="2000">
          <img src={html} alt="html logo"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" />
          <img src={css} alt="css logo"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" />
          <img src={js} alt="js logo"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" />
          <img src={react} alt="react logo"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" />
          <img src={git} alt="git logo"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" />
          <img src={nodejs} alt="nodejs logo"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" />
        </div>
      </section>
      <section
        className="features__general"
        style={{ width: '80%', margin: '2rem auto 4rem auto' }}
      >
        <h2 data-aos="fade-up"
          data-aos-anchor-placement="bottom-center"><strong>Fitur Kami</strong></h2>
        <div className="features__list">
          <div className="features__item">
            <img src={fitur1} alt="feature 1"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" />
            <div className="features__itemDesc"
              data-aos="fade-left">
              <h4 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"><strong>Belajar menyesuaikan <br /> dengan minat mu.</strong></h4>
              <p data-aos="fade-up"
                data-aos-duration="2000">
                Disini setiap konten pembelajaran akan kami kategorikan
                menjadi <br /> baberapa topik pembelajaran sesuai minat mu.
              </p>
            </div>
          </div>
          <div className="features__item">
            <img src={fitur2} alt="feature 2"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" />
            <div className="features__itemDesc" data-aos="fade-right" data-aos-duration="2000">
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
