import React, { useEffect, useState } from "react";
import "./App.css";

const FRIEND_NAME = "Kanak";

const memories = [
  {
    image: "/photos/kanak1.jpg",
    title: "The Beginning",
    text: "The moment our friendship started.",
  },
  {
    image: "/photos/kanak2.jpg",
    title: "Pure Chaos",
    text: "Somehow every normal day becomes an adventure.",
  },
  {
    image: "/photos/kanak3.jpg",
    title: "Unforgettable",
    text: "One of those memories we'll probably never forget.",
  },
];

const roasts = [
  "Your confidence has 4K resolution, but your decisions are still 144p. 💀",
  "Common sense tried to contact you, but apparently your number was unreachable. 📵",
  "You don't need enemies. Your decisions are doing enough damage already. 😂",
  "If being dramatic was an Olympic sport, you'd have a gold medal. 🥇",
  "You're proof that chaos can exist in human form. 😭",
  "Somehow you're both the problem AND the solution. Impressive. 🤝",
];

const stats = [
  ["😂", "Random Laughs", "9999+"],
  ["🔥", "Chaos Level", "100%"],
  ["💀", "Brain Cells", "404"],
  ["🤝", "Trust Level", "∞"],
  ["🗣️", "Random Talks", "999+"],
  ["❤️", "Friendship", "∞"],
];

const timeline = [
  {
    icon: "👋",
    title: "The Beginning",
    text: "Somehow two completely different people became friends.",
  },
  {
    icon: "😂",
    title: "The Chaos Started",
    text: "Then came the jokes, roasting, arguments and random conversations.",
  },
  {
    icon: "🔥",
    title: "Too Many Memories",
    text: "At some point we stopped counting the ridiculous moments.",
  },
  {
    icon: "♾️",
    title: "Still Here",
    text: "Years later, somehow the friendship survived all the nonsense.",
  },
];

function App() {
  const [dark, setDark] = useState(true);
  const [letter, setLetter] = useState(false);
  const [roastIndex, setRoastIndex] = useState(0);
  const [boxOpen, setBoxOpen] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    const moveGlow = (e) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const confetti = () => {
    const container = document.createElement("div");
    container.className = "confetti-container";

    for (let i = 0; i < 120; i++) {
      const piece = document.createElement("span");

      piece.className = "confetti-piece";

      piece.style.left = `${Math.random() * 100}%`;
      piece.style.animationDelay = `${Math.random() * 1}s`;
      piece.style.animationDuration = `${2 + Math.random() * 3}s`;

      container.appendChild(piece);
    }

    document.body.appendChild(container);

    setTimeout(() => {
      container.remove();
    }, 6000);
  };

  const openBox = () => {
    setBoxOpen(true);
    confetti();
  };

  const nextRoast = () => {
    setRoastIndex((prev) => (prev + 1) % roasts.length);
  };

  return (
    <div className={`app ${dark ? "dark" : "light"}`}>

      {/* SCROLL PROGRESS */}

      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
      />

      {/* BACKGROUND */}

      <div className="mouse-glow"></div>

      <div className="stars">
        {Array.from({ length: 45 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          <span>✦</span>
          K 
        </div>

        <div className="nav-links">
          <button onClick={() => scrollTo("home")}>
            Home
          </button>

          <button onClick={() => scrollTo("memories")}>
            Memories
          </button>

          <button onClick={() => scrollTo("roast")}>
            Roast
          </button>

          <button onClick={() => scrollTo("story")}>
            Story
          </button>

          <button onClick={() => scrollTo("message")}>
            Message
          </button>
        </div>

        <button
          className="theme-button"
          onClick={() => setDark(!dark)}
        >
          {dark ? "☀️" : "🌙"}
        </button>

      </nav>

      {/* HERO */}

      <section id="home" className="hero">

        <div className="hero-content">

          <div className="eyebrow">
            ✦ A FRIENDSHIP WORTH REMEMBERING ✦
          </div>

          <h1>
            KANAK
            <span></span>
            
          </h1>

          <h2>
            Some friendships
            <br />
            <span>just happen.</span>
          </h2>

          <p>
            No perfect beginning.
            <br />
            No perfect people.
            <br />
            Just two idiots creating memories.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() => scrollTo("memories")}
            >
              Explore Our Story
              <span>→</span>
            </button>

            <button
              className="ghost-button"
              onClick={() => scrollTo("roast")}
            >
              Roast Kanak 😂
            </button>

          </div>

          <div className="hero-mini">

            <div>
              <strong>∞</strong>
              <span>Memories</span>
            </div>

            <div>
              <strong>404</strong>
              <span>Brain Cells</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Friendship</span>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="orb orb-one"></div>
          <div className="orb orb-two"></div>

          <div className="glass-card">

            <div className="card-top">
              <span>FRIENDSHIP STATUS</span>
              <span className="online">
                ● ONLINE
              </span>
            </div>

            <div className="big-heart">
              ♡
            </div>

            <h3>
              Still Friends
            </h3>

            <p>
              Despite everything.
            </p>

            <div className="fake-wave">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="intro-section">

        <div className="intro-line"></div>

        <p>
          THIS IS NOT A LOVE STORY.
        </p>

        <h2>
          It's something
          <br />
          <span>much more chaotic.</span>
        </h2>

        <div className="intro-line"></div>

      </section>

      {/* MEMORIES */}

      <section id="memories" className="section">

        <div className="section-title">

          <span>01 — MEMORIES</span>

          <h2>
            Moments that
            <br />
            <em>actually matter.</em>
          </h2>

          <p>
            A collection of random moments that somehow
            became unforgettable memories.
          </p>

        </div>

        <div className="memory-grid">

          {memories.map((memory, index) => (

            <div
              className={`memory-card memory-${index}`}
              key={memory.title}
              onClick={() => setSelectedMemory(memory)}
            >

              <img
                src={memory.image}
                alt={memory.title}
              />

              <div className="memory-number">
                0{index + 1}
              </div>

              <div className="memory-info">

                <span>MEMORY</span>

                <h3>
                  {memory.title}
                </h3>

                <p>
                  {memory.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* STATS */}

      <section className="stats-section">

        <div className="section-title center">

          <span>02 — THE NUMBERS</span>

          <h2>
            Our friendship
            <br />
            <em>according to science.</em>
          </h2>

        </div>

        <div className="stats-grid">

          {stats.map(([icon, title, value]) => (

            <div className="stat-card" key={title}>

              <div className="stat-icon">
                {icon}
              </div>

              <strong>
                {value}
              </strong>

              <span>
                {title}
              </span>

            </div>

          ))}

        </div>

      </section>

      {/* ROAST */}

      <section id="roast" className="roast-section">

        <div className="roast-content">

          <span className="danger">
            ⚠ ROAST MODE ACTIVATED
          </span>

          <h2>
            Things I should
            <br />
            probably <em>not say.</em>
          </h2>

          <div className="roast-box">

            <div className="roast-icon">
              💀
            </div>

            <p>
              "{roasts[roastIndex]}"
            </p>

            <button onClick={nextRoast}>
              Hit Me With Another 🔥
            </button>

          </div>

        </div>

      </section>

      {/* STORY */}

      <section id="story" className="section story-section">

        <div className="section-title">

          <span>03 — OUR STORY</span>

          <h2>
            From strangers
            <br />
            to <em>absolute chaos.</em>
          </h2>

        </div>

        <div className="timeline">

          {timeline.map((item, index) => (

            <div
              className="timeline-item"
              key={item.title}
            >

              <div className="timeline-number">
                0{index + 1}
              </div>

              <div className="timeline-icon">
                {item.icon}
              </div>

              <div className="timeline-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* MESSAGE */}

      <section id="message" className="message-section">

        <div className="message-card">

          <div className="message-decoration">
            ✦
          </div>

          <span>
            04 — SOMETHING SERIOUS
          </span>

          <h2>
            Okay...
            <br />
            one non-roast moment.
          </h2>

          <div className="letter-preview">

            <p>
              Dear Kanak,
            </p>

            <p>
              We've had enough random conversations,
              arguments, jokes and completely unnecessary
              chaos to fill several lifetimes.
            </p>

            <p>
              But honestly, I'm glad you're one of the
              people I get to call a friend.
            </p>

            {!letter && (
              <div className="blurred">
                There's something else I wanted to say...
              </div>
            )}

            {letter && (
              <div className="revealed-message">

                <p>
                  No matter how much we roast each other,
                  some friendships are simply worth keeping.
                </p>

                <strong>
                  Don't become too normal. 😎
                </strong>

                <div className="signature">
                  — Your Favorite Idiot
                </div>

              </div>
            )}

          </div>

          <button
            className="message-button"
            onClick={() => setLetter(!letter)}
          >
            {letter
              ? "Hide The Secret"
              : "Reveal The Secret →"}
          </button>

        </div>

      </section>

      {/* MYSTERY BOX */}

      <section className="mystery-section">

        <span>
          05 — ONE LAST THING
        </span>

        <h2>
          There's something
          <br />
          <em>inside.</em>
        </h2>

        {!boxOpen ? (

          <>

            <div
              className="mystery-box"
              onClick={openBox}
            >

              <div className="box-lid">
                ?
              </div>

              <div className="box-body">
                ✦
              </div>

            </div>

            <p>
              Click the box.
            </p>

          </>

        ) : (

          <div className="final-reveal">

            <div className="reveal-symbol">
              ∞
            </div>

            <h3>
              You opened it.
            </h3>

            <p>
              The secret was never a gift.
            </p>

            <strong>
              It was the friendship.
            </strong>

            <button
              onClick={() => {
                setShowFinal(true);
                confetti();
              }}
            >
              Continue →
            </button>

          </div>

        )}

      </section>

      {/* FINAL */}

      {showFinal && (

        <section className="final-section">

          <div className="final-stars">
            ✦ ✧ ✦ ✧ ✦
          </div>

          <p>
            AFTER ALL THE CHAOS
          </p>

          <h2>
            SOME PEOPLE
            <br />
            JUST STAY.
          </h2>

          <div className="final-name">
            KANAK
          </div>

          <p className="final-text">
            Keep being weird.
            <br />
            Keep being annoying.
            <br />
            Keep being you.
          </p>

          <div className="final-heart">
            ♡
          </div>

          <button
            className="primary-button"
            onClick={() => scrollTo("home")}
          >
            Start Again ↑
          </button>

        </section>

      )}

      {/* LIGHTBOX */}

      {selectedMemory && (

        <div
          className="lightbox"
          onClick={() => setSelectedMemory(null)}
        >

          <button
            className="close-lightbox"
            onClick={() => setSelectedMemory(null)}
          >
            ×
          </button>

          <div
            className="lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedMemory.image}
              alt={selectedMemory.title}
            />

            <h3>
              {selectedMemory.title}
            </h3>

            <p>
              {selectedMemory.text}
            </p>

          </div>

        </div>

      )}

      {/* FOOTER */}

      <footer>

        <div className="footer-logo">
          K 
        </div>

        <p>
          Built with chaos, memories & questionable decisions.
        </p>

        <span>
          © Friendship Department — No refunds.
        </span>

      </footer>

    </div>
  );
}

export default App;