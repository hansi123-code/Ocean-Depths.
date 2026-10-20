import { useEffect } from "react";

function Hero() {

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };


  /* ================= GSAP FISH ANIMATION ================= */

  useEffect(() => {

    const gsap = window.gsap;

    if (!gsap) {
      console.warn("GSAP is not loaded.");
      return;
    }

    const fish = document.querySelectorAll(".hero-fish");

    fish.forEach((item, index) => {

      const fromLeft = index % 2 === 0;

      const startX = fromLeft
        ? -220
        : window.innerWidth + 220;

      const endX = fromLeft
        ? window.innerWidth + 220
        : -220;

      const startY =
        window.innerHeight * (0.20 + index * 0.17);


      gsap.set(item, {
        x: startX,
        y: startY,
        scaleX: fromLeft ? 1 : -1,
        rotation: 0
      });


      const swim = gsap.timeline({
        repeat: -1,
        delay: index * 2.5
      });


      swim.to(item, {
        x: endX,
        y: startY + 70,
        duration: 18 + index * 4,
        ease: "none"
      });


      gsap.to(item, {
        y: "+=18",
        rotation: 2,
        duration: 2.5 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    });


    /* ================= LIGHT MOVEMENT ================= */

    gsap.to(".light-rays", {
      x: 35,
      rotation: 3,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });


    /* ================= BUBBLES ================= */

    const bubbles = document.querySelectorAll(".hero-bubble");

    bubbles.forEach((bubble, index) => {

      gsap.fromTo(
        bubble,

        {
          y: window.innerHeight + 50,
          opacity: 0
        },

        {
          y: -120,
          opacity: 0.65,
          duration: 7 + (index % 5),
          delay: index * 0.7,
          repeat: -1,
          ease: "none"
        }
      );

    });


    /* ================= CLEANUP ================= */

    return () => {

      gsap.killTweensOf(".hero-fish");
      gsap.killTweensOf(".light-rays");
      gsap.killTweensOf(".hero-bubble");

    };

  }, []);


  return (
    <>


      {/* =====================================================
          SURFACE / HERO
      ===================================================== */}

      <section
        className="ocean-section surface"
        id="surface"
      >

        {/* Underwater Light */}

        <div className="light-rays">

          <span></span>
          <span></span>
          <span></span>

        </div>


        {/* ================= BUBBLES ================= */}

        <div className="hero-bubbles">

          {Array.from({ length: 22 }).map((_, i) => (

            <span
              key={i}
              className="hero-bubble"
              style={{
                left: ((i * 17) % 100) + "%",
                width: (4 + (i % 5)) + "px",
                height: (4 + (i % 5)) + "px"
              }}
            />

          ))}

        </div>


        {/* ================= FISH ================= */}

        <div className="hero-fish-layer">


          <img
            className="hero-fish hero-fish-1"
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Clownfish.jpg"
            alt=""
          />


          <img
            className="hero-fish hero-fish-2"
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Paracanthurus%20hepatus.jpg"
            alt=""
          />


          <img
            className="hero-fish hero-fish-3"
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Yellow%20tang.jpg"
            alt=""
          />


          <img
            className="hero-fish hero-fish-4"
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Clownfish.jpg"
            alt=""
          />

        </div>


        {/* ================= HERO CONTENT ================= */}

        <div className="hero-content">

          <p className="hero-subtitle">
            WELCOME TO THE DEEP
          </p>


          <h1>
            OCEAN DEPTHS
          </h1>


          <p className="hero-description">
            Explore beyond the surface and discover a world hidden beneath
            the waves.
          </p>


          <button
            className="hero-button"
            onClick={() => goTo("blue")}
          >
            Dive In
          </button>

        </div>


        {/* ================= SCROLL ================= */}

        <div className="scroll-indicator">

          <span></span>

          <p>
            SCROLL TO DIVE
          </p>

        </div>

      </section>



      {/* =====================================================
          INTO THE BLUE
      ===================================================== */}

      <section
        className="ocean-section blue"
        id="blue"
      >

        <div className="water-particles">

          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i}></span>
          ))}

        </div>


        <div className="section-content">

          <p className="eyebrow">
            02 — INTO THE BLUE
          </p>


          <h2>
            Beneath
            <br />
            The Surface
          </h2>


          <p>
            The deeper we travel, the quieter the ocean becomes.
            Sunlight slowly fades and an entirely different world appears.
          </p>


          <button
            className="ghost-button"
            onClick={() => goTo("reef")}
          >
            Explore the Reef
          </button>

        </div>


        <div className="deep-fish fish-a">

          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Clownfish.jpg"
            alt="Clownfish"
          />

        </div>


        <div className="deep-fish fish-b">

          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Paracanthurus%20hepatus.jpg"
            alt="Blue tang"
          />

        </div>

      </section>



      {/* =====================================================
          CORAL REEF
      ===================================================== */}

      <section
        className="ocean-section reef"
        id="reef"
      >

        <div className="reef-glow"></div>


        <div className="section-content reef-text">

          <p className="eyebrow">
            03 — CORAL REEF
          </p>


          <h2>
            A World
            <br />
            Full of Colour
          </h2>


          <p>
            Coral reefs are among the most colourful and diverse ecosystems
            beneath the ocean surface.
          </p>

        </div>


        <div className="reef-life">


          <img
            className="reef-fish reef-fish-1"
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Clownfish.jpg"
            alt="Clownfish"
          />


          <img
            className="reef-fish reef-fish-2"
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Paracanthurus%20hepatus.jpg"
            alt="Blue tang"
          />


          <img
            className="reef-fish reef-fish-3"
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Yellow%20tang.jpg"
            alt="Yellow tang"
          />


          <div className="coral coral-red"></div>

          <div className="coral coral-pink"></div>

          <div className="coral coral-purple"></div>

          <div className="coral coral-orange"></div>


          <div className="kelp kelp-1"></div>

          <div className="kelp kelp-2"></div>

          <div className="kelp kelp-3"></div>

        </div>

      </section>



      {/* =====================================================
          DEEP REEF
      ===================================================== */}

      <section
        className="ocean-section deep-reef"
        id="deep"
      >

        <div className="deep-haze"></div>


        <div className="section-content center-content">

          <p className="eyebrow">
            04 — THE DEEP
          </p>


          <h2>
            Where
            <br />
            Light Disappears
          </h2>


          <p>
            Below the colourful reef lies a darker, colder and mysterious
            world.
          </p>

        </div>


        <div className="tiny-particles">

          {Array.from({ length: 35 }).map((_, i) => (
            <span key={i}></span>
          ))}

        </div>


        <div className="deep-creature">

          <div className="creature-glow"></div>

          <div className="creature-body"></div>

          <div className="creature-eye"></div>

        </div>


        <button
          className="deep-button"
          onClick={() => goTo("giants")}
        >
          Continue Deeper
        </button>

      </section>



      {/* =====================================================
          OCEAN GIANTS
      ===================================================== */}

      <section
        className="ocean-section giants"
        id="giants"
      >

        <div className="giant-overlay"></div>


        <div className="section-content giant-text">

          <p className="eyebrow">
            05 — OCEAN GIANTS
          </p>


          <h2>
            Life
            <br />
            Beyond Imagination
          </h2>


          <p>
            The ocean is home to some of the largest and most fascinating
            creatures on Earth.
          </p>

        </div>


        <div className="whale-silhouette">

          <div className="whale-body"></div>

          <div className="whale-tail"></div>

        </div>

      </section>



      {/* =====================================================
          EXPLORE
      ===================================================== */}

      <section
        className="ocean-section explore"
        id="explore"
      >

        <div className="explore-content">

          <p className="eyebrow">
            06 — EXPLORE
          </p>


          <h2>
            The Ocean
            <br />
            Is Waiting
          </h2>


          <p>
            There is always another world waiting beneath the next wave.
          </p>


          <button
            className="hero-button"
            onClick={() => goTo("surface")}
          >
            Return to Surface
          </button>

        </div>

      </section>



      {/* =====================================================
          SIDE NAVIGATION
      ===================================================== */}

      <nav className="ocean-nav">


        <button
          onClick={() => goTo("surface")}
        >
          <span>01</span>
          SURFACE
        </button>


        <button
          onClick={() => goTo("blue")}
        >
          <span>02</span>
          BLUE
        </button>


        <button
          onClick={() => goTo("reef")}
        >
          <span>03</span>
          REEF
        </button>


        <button
          onClick={() => goTo("deep")}
        >
          <span>04</span>
          DEEP
        </button>


        <button
          onClick={() => goTo("giants")}
        >
          <span>05</span>
          GIANTS
        </button>


        <button
          onClick={() => goTo("explore")}
        >
          <span>06</span>
          EXPLORE
        </button>


      </nav>

    </>
  );
}


export default Hero;