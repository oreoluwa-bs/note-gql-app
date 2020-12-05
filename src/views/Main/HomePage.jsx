import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div style={{ minHeight: '100vh' }}>
        <div
          className="hero"
          style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h1 className="hero__header">Note taking made easy and safe</h1>
            <p className="hero__subhead">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV
              ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
              quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox
              nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.
              Bright vixens jump; dozy fowl quack.
            </p>
            <button className="btn btn__primary">Get Started</button>
          </div>
          <div style={{ flex: '0 0 50%' }}>
            <div className="hero__image"></div>
            {/* <img
              src={require('../../assets/images/hero__image.jpeg').default}
              alt="Laptop with note application screen"
              className="hero__image"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
