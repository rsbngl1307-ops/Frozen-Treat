import {
  IceCreamBowl,
  Phone,
  MapPin,
  MessageCircle,
  CalendarDays,
  ArrowRight,
  Sparkles,
  Store,
  PartyPopper,
} from "lucide-react";

import "./App.css";

const menuItems = [
  {
    name: "Ice Creams",
    description:
      "Delicious chilled scoops and frozen favourites available at our store.",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80",
    type: "Available at Store",
    available: true,
  },
  {
    name: "Milkshakes",
    description:
      "Creamy and refreshing milkshakes prepared for functions and special events.",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80",
    type: "Event Orders",
  },
  {
    name: "Thickshakes",
    description:
      "Rich, thick and indulgent shakes for parties, celebrations and gatherings.",
    image:
      "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=900&q=80",
    type: "Event Orders",
  },
  {
    name: "Mocktails",
    description:
      "Colourful and refreshing non-alcoholic drinks for every celebration.",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
    type: "Event Orders",
  },
  {
    name: "Fruit Juices",
    description:
      "Fresh and refreshing fruit juices served for functions and special occasions.",
    image:
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80",
    type: "Event Orders",
  },
  {
    name: "Fruit Salad",
    description:
      "A colourful mix of fresh fruits prepared for your celebrations.",
    image:
      "https://images.unsplash.com/photo-1568158879083-c42860933ed7?auto=format&fit=crop&w=900&q=80",
    type: "Event Orders",
  },
  {
    name: "Cut Fruits",
    description:
      "Freshly cut seasonal fruits, neatly prepared and served for events.",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=900&q=80",
    type: "Event Orders",
  },
  {
    name: "Stone Ice Cream",
    description:
      "A fun and delicious frozen experience prepared specially for your event.",
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=80",
    type: "Event Orders",
  },
  {
    name: "Paan (Killis)",
    description:
      "Traditional paan and killis to give your celebration a perfect finishing touch.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    type: "Event Orders",
  },
];

function InstagramIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="3" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function App() {
  const phoneOne = "9030350619";
  const phoneTwo = "8374522344";
  const phoneThree = "9494799419";
  const phoneFour = "8367494448";

  const whatsappNumber = "8367494448";

  const googleMapsLink =
    "https://maps.app.goo.gl/G4KRTseSjmrqLeGW7?g_st=aw";

  const instagramLink =
    "https://www.instagram.com/frozen.treat_gudlavalleru?utm_source=qr&igsh=MWhkYWRkNmQzNHV4Mg==";

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="brand">
          <div className="brand-icon">
            <IceCreamBowl size={25} />
          </div>

          <div>
            <strong>FROZEN TREART</strong>
            <span>Sweet moments, served chilled</span>
          </div>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#events">Event Orders</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-order-btn" href={`tel:${phoneOne}`}>
          <Phone size={17} />
          Call Now
        </a>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              Gudlavalleru&apos;s Frozen & Event Treats
            </div>

            <h1>
              Make every moment
              <span> sweeter & cooler.</span>
            </h1>

            <p>
              Enjoy delicious ice creams at our store and make your functions,
              parties and celebrations special with our refreshing event menu.
            </p>

            <div className="hero-actions">
              <a href="#menu" className="primary-btn">
                Explore Our Menu
                <ArrowRight size={18} />
              </a>

              <a
                href={`https://wa.me/91${whatsappNumber}?text=Hello%20Frozen%20Treart,%20I%20would%20like%20to%20enquire%20about%20an%20order.`}
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>

            <div className="hero-features">
              <div>
                <Store size={21} />
                <span>
                  <strong>Ice Creams</strong>
                  Available at Store
                </span>
              </div>

              <div>
                <PartyPopper size={21} />
                <span>
                  <strong>8+ Event Treats</strong>
                  Available on Order
                </span>
              </div>

              <div>
                <MapPin size={21} />
                <span>
                  <strong>Gudlavalleru</strong>
                  Krishna District
                </span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=1200&q=85"
              alt="Colourful frozen desserts"
            />

            <div className="floating-card">
              <IceCreamBowl size={25} />
              <div>
                <strong>Visit us for Ice Creams</strong>
                <span>Fresh frozen happiness awaits!</span>
              </div>
            </div>
          </div>
        </section>

        {/* IMPORTANT NOTICE */}
        <section className="notice-section">
          <div className="notice-card">
            <div className="notice-icon">
              <Store size={28} />
            </div>

            <div>
              <span>PLEASE NOTE</span>
              <h2>Ice creams are available at our store.</h2>
              <p>
                Milkshakes, thickshakes, mocktails, fruit juices, fruit salad,
                cut fruits, stone ice cream and paan are supplied for functions,
                parties and events on advance order.
              </p>
            </div>
          </div>
        </section>

        {/* MENU SECTION */}
        <section className="menu-section" id="menu">
          <div className="section-heading">
            <span>OUR MENU</span>
            <h2>A treat for every celebration</h2>
            <p>
              From everyday ice cream cravings to complete refreshment counters
              for your special events.
            </p>
          </div>

          <div className="menu-grid">
            {menuItems.map((item) => (
              <article className="menu-card" key={item.name}>
                <div className="menu-image">
                  <img src={item.image} alt={item.name} loading="lazy" />

                  <span className={item.available ? "store-tag" : "event-tag"}>
                    {item.type}
                  </span>
                </div>

                <div className="menu-card-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  <a
                    href={`https://wa.me/91${whatsappNumber}?text=Hello%20Frozen%20Treart,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(
                      item.name
                    )}.`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enquire Now
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EVENT ORDERS */}
        <section className="events-section" id="events">
          <div className="events-content">
            <span>FUNCTIONS • PARTIES • CELEBRATIONS</span>

            <h2>Planning an event? Let us make it more refreshing.</h2>

            <p>
              Choose from our wide range of shakes, mocktails, fresh fruit
              items, stone ice cream and paan. Contact us in advance to discuss
              your function requirements.
            </p>

            <div className="event-points">
              <div>
                <CalendarDays size={21} />
                Advance Orders
              </div>

              <div>
                <PartyPopper size={21} />
                Functions & Parties
              </div>

              <div>
                <MessageCircle size={21} />
                Easy Enquiry
              </div>
            </div>

            <a
              href={`https://wa.me/91${whatsappNumber}?text=Hello%20Frozen%20Treart,%20I%20would%20like%20to%20enquire%20about%20services%20for%20a%20function%20or%20event.`}
              target="_blank"
              rel="noreferrer"
              className="event-order-btn"
            >
              <MessageCircle size={19} />
              Enquire for Your Event
            </a>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section" id="contact">
          <div className="section-heading">
            <span>CONTACT US</span>
            <h2>Let&apos;s make your celebration sweeter</h2>
          </div>

          <div className="contact-grid">
            {/* OWNERS */}
            <div className="contact-card">
              <Store size={26} />
              <span>OWNERS</span>
              <h3>Nani & Kamal</h3>
              <p>Frozen Treart</p>
            </div>

            {/* CALL US */}
            <div className="contact-card">
              <Phone size={26} />
              <span>CALL US</span>

              <a href={`tel:${phoneOne}`}>{phoneOne}</a>
              <a href={`tel:${phoneTwo}`}>{phoneTwo}</a>
              <a href={`tel:${phoneThree}`}>{phoneThree}</a>
              <a href={`tel:${phoneFour}`}>{phoneFour}</a>
            </div>

            {/* GOOGLE MAPS */}
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noreferrer"
              className="contact-card contact-link-card"
            >
              <MapPin size={26} />
              <span>VISIT US</span>
              <h3>Santha Rd., Gudlavalleru</h3>
              <p>Krishna District, Andhra Pradesh, India</p>

              <strong className="contact-action">
                Open in Google Maps
                <ArrowRight size={16} />
              </strong>
            </a>

            {/* INSTAGRAM */}
            <a
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
              className="contact-card contact-link-card"
            >
              <InstagramIcon size={26} />
              <span>FOLLOW US</span>
              <h3>@frozen.treat_gudlavalleru</h3>
              <p>
                Follow us on Instagram for updates, treats and event services.
              </p>

              <strong className="contact-action">
                Open Instagram
                <ArrowRight size={16} />
              </strong>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <IceCreamBowl size={27} />

          <div>
            <strong>FROZEN TREART</strong>
            <span>Sweet moments, served chilled.</span>
          </div>
        </div>

        <p>Ice creams at store • Event treats on advance order</p>

        <div className="footer-socials">
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Frozen Treart location in Google Maps"
          >
            <MapPin size={20} />
          </a>

          <a
            href={instagramLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Frozen Treart Instagram"
          >
            <InstagramIcon size={20} />
          </a>

          <a
            href={`https://wa.me/91${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Contact Frozen Treart on WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>

        <span>© 2026 Frozen Treart</span>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        className="whatsapp-float"
        href={`https://wa.me/91${whatsappNumber}?text=Hello%20Frozen%20Treart,%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Frozen Treart on WhatsApp"
      >
        <MessageCircle size={27} />
      </a>
    </div>
  );
}

export default App;