import { useEffect, useState } from "react";
import "./App.css";

const fish = [
  {
    name: "Clownfish",
    scientific: "Amphiprioninae",
    video: "/videos/fish/clownfish.mp4",
    description: "Clownfish or anemonefishes are saltwater fish found in the warm and tropical waters of the Indo-Pacific. They mainly inhabit coral reefs and have a distinctive colouration typically consisting of white vertical bars on a red, orange, yellow, brown or black background."
  },
  {
    name: "Blue Tang",
    scientific: "Paracanthurus hepatus",
   video: "/videos/fish/bluetang.mp4",
    description: "The blue tang (Paracanthurus hepatus) is a vibrant marine fish famous for its bright blue body, black palette markings, and sunny yellow tail. They are widely recognized as the species behind the character Dory from the movies Finding Nemo and Finding Dory."
  },
  {
    name: "Lionfish",
    scientific: "Pterois",
    video: "/videos/fish/lionfish.mp4",
    description: "A lionfish is a striking, venomous marine fish belonging to the scorpionfish family (Scorpaenidae) and the genus Pterois. They feature bold, zebra-like brown, maroon, and white stripes covering their head and body."
  },
  {
    name: "Angelfish",
    scientific: "Pomacanthidae",
    video: "/videos/fish/angelfish.mp4",
    description: "Angelfish are popular, graceful tropical fish known for their thin, disk-like bodies and long, wing-like fins.The name angelfish actually refers to two completely different groups of fish: freshwater angelfish and marine (ocean) angelfish."
  }
];

const corals = [
  {
    name: "Brain Coral",
    type: "Hard Coral",
    video: "/videos/corals/brain coral.mp4",
    description: "Brain coral is a slow-growing stony coral named for its round shape and grooved surface that looks like a human brain. They are not a single animal or a plant. Each brain coral head is made of thousands of tiny, genetically identical soft-bodied animals called polyps."
  },
  {
    name: "Staghorn Coral",
    type: "Hard Coral",
    video: "/videos/corals/stagron coral.mp4",
    description: "Staghorn coral is a fast-growing, stony marine invertebrate named for its long, cylindrical branches that resemble a deer's antlers. One of the fastest-growing hard corals, adding 2 to 8 inches (5 to 20 cm) of branch length per year."
  },
  {
    name: "Sea Fan",
    type: "Soft Coral",
    video: "/videos/corals/sea fan.mp4",
    description: "A sea fan is a type of soft marine animal that forms flat, branching colonies shaped like an red sea fan coral underwater fan. Though they look like colorful plants or trees swaying in the ocean, they are actually made of thousands of tiny living animals called polyps."
  },
  {
    name: "Mushroom Coral",
    type: "Hard Coral",
    video: "/videos/corals/mushroom coral.mp4",
    description: "Mushroom corals are a popular, hardy group of marine invertebrates named for their flat, disc-like shapes that resemble mushrooms. Soft mushroom corals (like Rhodactis) use allelopathy—a form of chemical warfare."
  }
];

function App() {
  const [depth, setDepth] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) {
        setDepth(0);
        return;
      }

      const progress = window.scrollY / maxScroll;
      setDepth(Math.round(progress * 5000));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }

    setMenuOpen(false);
  };

  return (
    <div className="ocean-app">

      {/* NAVBAR */}
      <nav className="navbar">

        <div
          className="logo"
          onClick={() => scrollTo("hero")}
        >
          OCEAN<span>DEPTHS</span>
        </div>

        <div className={"nav-links " + (menuOpen ? "active" : "")}>

          <button onClick={() => scrollTo("hero")}>
            Home
          </button>

          <button onClick={() => scrollTo("marine-life")}>
            Marine Life
          </button>

          <button onClick={() => scrollTo("coral-reefs")}>
            Coral Reefs
          </button>

          <button onClick={() => scrollTo("deep-ocean")}>
            The Deep
          </button>

          <button onClick={() => scrollTo("ecosystem")}>
            Ecosystem
          </button>

          <button onClick={() => scrollTo("protect")}>
            Protect
          </button>

        </div>

        
      </nav>

     {/* DEPTH INDICATOR */}
<div className="depth-indicator">

  <div className="depth-line">

    <span
      className="depth-progress"
      style={{
        height: Math.min(depth / 50, 100) + "%"
      }}
    />

  </div>

  <div className="depth-text">
    <span>DEPTH</span>
    <strong>{depth}m</strong>
  </div>

</div>



{/* HERO */}
<section id="hero" className="hero">

  <div className="sun-rays"></div>
  <div className="ocean-glow"></div>

  {/* REAL FISH */}
  <div className="hero-fish-layer">

    <img
      className="hero-fish hero-fish-1"
      src="/images/fish/clownfish.png"
      alt=""
    />

    <img
      className="hero-fish hero-fish-2"
      src="/images/fish/blue-tang.png"
      alt=""
    />

    <img
      className="hero-fish hero-fish-3"
      src="/images/fish/yellow-tang.png"
      alt=""
    />

    <img
      className="hero-fish hero-fish-4"
      src="/images/fish/lionfish.png"
      alt=""
    />

  </div>

  <div className="particles">
    {Array.from({ length: 35 }, (_, index) => (
      <span
        key={index}
        className="particle"
        style={{
          left: ((index * 17) % 100) + "%",
          animationDelay: ((index % 8) * 0.8) + "s",
          animationDuration: (6 + (index % 5)) + "s",
          width: (1 + (index % 2)) + "px",
          height: (1 + (index % 2)) + "px",
        }}
      />
    ))}
  </div>

  <div className="hero-content">

    <p className="eyebrow">
      OCEAN DEPTHS · AN IMMERSIVE JOURNEY
    </p>

    <h1>
      Dive Into
      <br />
      <span>The Unknown</span>
    </h1>

    <p className="hero-description">
      Descend beneath the surface and discover a world shaped by life,
      darkness and endless blue. A journey beyond light.
    </p>

    <button
      className="explore-button"
      onClick={() => scrollTo("marine-life")}
    >
      <span>EXPLORE THE DEPTHS</span>

      <div className="btn-arrow">
        <b>↓</b>
      </div>
    </button>

  </div>

  <div className="hero-bottom">

    <div className="hero-bottom-line">
      <span>0 M</span>

      <div className="line"></div>

      <span>DESCEND BELOW</span>
    </div>

    <div className="scroll-hint">
      <span>SCROLL TO DIVE</span>
      <i>↓</i>
    </div>

  </div>

</section>

      {/* MARINE LIFE */}
      <section
        id="marine-life"
        className="section marine-life"
      >

        <div className="section-heading">


          <h2>
            Life Beneath
            <br />
            <em>The Surface</em>
          </h2>

          <p>
            Explore the extraordinary creatures that call
            the ocean home.
          </p>

        </div>

        <div className="fish-grid">

          {fish.map((item, index) => (

            <article
              className="fish-card"
              key={item.name}
            >

              <div className="image-placeholder">

                <video
                  src={item.video}
                 autoPlay
                 muted
                 loop
                 playsInline
                />

              </div>

              <div className="card-content">

                <span className="card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.name}</h3>

                <i>{item.scientific}</i>

                <p>
                  {item.description}
                </p>

                <button>
                  DISCOVER MORE ↗️
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* CORAL REEFS */}
      <section
        id="coral-reefs"
        className="section coral-section"
      >

        <div className="section-heading">

          

          <h2>
            Cities
            <br />
            <em>Beneath the Sea</em>
          </h2>

          <p>
            Discover the colourful ecosystems built by coral.
          </p>

        </div>

       <div className="coral-list">

  {corals.map((coral, index) => (

    <article
      className={
        "coral-row " +
        (index % 2 === 1 ? "reverse" : "")
      }
      key={coral.name}
    >

      <div className="coral-video">

        <video
          src={coral.video}
          autoPlay
          muted
          loop
          playsInline
        />

      </div>

      <div className="coral-info">

        <span>
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3>
          {coral.name}
        </h3>

        <p className="coral-type">
          {coral.type}
        </p>

        <p>
          {coral.description}
        </p>

      </div>

    </article>

  ))}

</div>

      </section>

     {/* THE DEEP */}
<section
  id="deep-ocean"
  className="deep-section"
>

  <div className="deep-glow"></div>

  {/* SONAR */}
  <div className="abyss-sonar">
    <div className="sonar-ring ring-1"></div>
    <div className="sonar-ring ring-2"></div>
    <div className="sonar-ring ring-3"></div>
    <div className="sonar-center"></div>
    <div className="sonar-sweep"></div>
  </div>

  {/* DEEP OCEAN PARTICLES */}
  <div className="abyss-particles">
    {Array.from({ length: 28 }, (_, index) => (
      <span
        key={index}
        style={{
          left: ((index * 23) % 100) + "%",
          top: ((index * 37) % 100) + "%",
          animationDelay: ((index % 8) * 0.6) + "s",
          animationDuration: (5 + (index % 5)) + "s"
        }}
      ></span>
    ))}
  </div>

  {/* DISTANT CREATURE */}
  <div className="abyss-creature">
    <div className="creature-body"></div>
    <div className="creature-tail"></div>
  </div>

  <div className="deep-content">

   

    <h2>
      Into the
      <br />
      <em>Abyss</em>
    </h2>

    <p>
      As sunlight disappears, another world begins.
      Descend through the mysterious layers of the
      deep ocean.
    </p>

    <div className="abyss-status">
      <span className="status-dot"></span>
      DEEP OCEAN EXPEDITION
    </div>

  </div>

  {/* DEPTH DATA */}
  <div className="deep-data">

    <div>
      <span>CURRENT DEPTH</span>
      <strong>1,200 M</strong>
    </div>

    <div>
      <span>PRESSURE</span>
      <strong>121 ATM</strong>
    </div>

    <div>
      <span>AVAILABLE LIGHT</span>
      <strong>1%</strong>
    </div>

  </div>

  <div className="depth-zones">

    <div>
      <strong>200m</strong>
      <span>TWILIGHT ZONE</span>
    </div>

    <div>
      <strong>1,000m</strong>
      <span>MIDNIGHT ZONE</span>
    </div>

    <div>
      <strong>4,000m</strong>
      <span>ABYSSAL ZONE</span>
    </div>

    <div>
      <strong>6,000m+</strong>
      <span>HADAL ZONE</span>
    </div>

  </div>

</section>

      {/* ECOSYSTEM */}
<section
  id="ecosystem"
  className="ecosystem-section"
>

  <div className="ecosystem-grid"></div>

  <div className="ecosystem-particles">
    {Array.from({ length: 25 }, (_, index) => (
      <span
        key={index}
        style={{
          left: ((index * 29) % 100) + "%",
          top: ((index * 41) % 100) + "%",
          animationDelay: ((index % 7) * 0.7) + "s",
          animationDuration: (6 + (index % 5)) + "s"
        }}
      ></span>
    ))}
  </div>

  <div className="section-heading">

    

    <h2>
      One Ocean.
      <br />
      <em>One Connected World.</em>
    </h2>

    <p>
      Every organism plays a role in keeping the
      marine ecosystem alive.
    </p>

  </div>

  <div className="food-chain">

    <div className="chain-item chain-1">
      <div>☀️</div>
      <span>SUNLIGHT</span>
    </div>

    <b>→</b>

    <div className="chain-item chain-2">
      <div>🌱</div>
      <span>PLANKTON</span>
    </div>

    <b>→</b>

    <div className="chain-item chain-3">
      <div>🐟</div>
      <span>SMALL FISH</span>
    </div>

    <b>→</b>

    <div className="chain-item chain-4">
      <div>🐠</div>
      <span>LARGE FISH</span>
    </div>

    <b>→</b>

    <div className="chain-item chain-5">
      <div>🦈</div>
      <span>PREDATORS</span>
    </div>

  </div>

  <div className="ecosystem-flow">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

  <div className="ecosystem-stats">

    <div>
      <strong>71%</strong>
      <span>OF EARTH IS COVERED BY OCEAN</span>
    </div>

    <div>
      <strong>80%</strong>
      <span>OF MARINE LIFE REMAINS UNEXPLORED</span>
    </div>

    <div>
      <strong>∞</strong>
      <span>INTERCONNECTED SPECIES</span>
    </div>

  </div>

</section>
{/* PROTECT */}
<section
  id="protect"
  className="protect-section"
>

  <div className="protect-glow"></div>

  <div className="protect-particles">
    {Array.from({ length: 22 }, (_, index) => (
      <span
        key={index}
        style={{
          left: ((index * 31) % 100) + "%",
          top: ((index * 47) % 100) + "%",
          animationDelay: ((index % 8) * 0.7) + "s",
          animationDuration: (6 + (index % 5)) + "s"
        }}
      ></span>
    ))}
  </div>

  <div className="protect-orbit orbit-1"></div>
  <div className="protect-orbit orbit-2"></div>
  <div className="protect-orbit orbit-3"></div>

  <div className="protect-content">

    <span className="protect-label">
      PROTECT THE BLUE
    </span>

    <h2>
      The Ocean
      <br />
      <em>Needs Us.</em>
    </h2>

    <p>
      The deeper we explore, the more we understand
      what there is to protect.
    </p>

    <div className="threats">

      <div>
        <span className="threat-line"></span>
        <h3>Plastic Pollution</h3>
      </div>

      <div>
        <span className="threat-line"></span>
        <h3>Coral Bleaching</h3>
      </div>

      <div>
        <span className="threat-line"></span>
        <h3>Overfishing</h3>
      </div>

      <div>
        <span className="threat-line"></span>
        <h3>Ocean Warming</h3>
      </div>

    </div>

    <button
      className="surface-button"
      onClick={() => scrollTo("hero")}
    >
      <span>RETURN TO THE SURFACE</span>
      <b>↑</b>
    </button>

  </div>

  <div className="protect-bottom-text">
    <span>OUR OCEAN</span>
    <span>OUR FUTURE</span>
  </div>

</section>

      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          OCEAN<span>DEPTHS</span>
        </div>

        <p>
          Explore. Discover. Protect.
        </p>

        <small>
          © 2026 Ocean Depths
        </small>

      </footer>

    </div>
  );
}

export default App;