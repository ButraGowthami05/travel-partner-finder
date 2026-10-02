import { useState } from 'react'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('Find Your Travel Partner')
  const [emailInput, setEmailInput] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')

  // Sample trip data for the Stage 1 interactive showcase
  const sampleTrips = [
    {
      id: 1,
      title: 'Cherry Blossom & Temple Tour',
      destination: 'Kyoto & Tokyo, Japan',
      flag: '🇯🇵',
      category: 'Cultural',
      dates: 'Oct 15 – Oct 26, 2026',
      traveler: 'Sarah & Maya',
      avatar: '🌸',
      budget: 'Mid-Range ($1,800)',
      pace: 'Moderate Pace',
      tags: ['Temples', 'Street Food', 'Photography', 'Bullet Trains'],
    },
    {
      id: 2,
      title: 'Alpine Hiking & Glacier Walks',
      destination: 'Interlaken & Zermatt, Switzerland',
      flag: '🇨🇭',
      category: 'Adventure',
      dates: 'Nov 02 – Nov 12, 2026',
      traveler: 'David K.',
      avatar: '🏔️',
      budget: 'Moderate ($2,200)',
      pace: 'Active & Outdoorsy',
      tags: ['Hiking', 'Scenic Trains', 'Photography', 'Fondue'],
    },
    {
      id: 3,
      title: 'Island Hopping & Sunset Cafes',
      destination: 'Santorini & Crete, Greece',
      flag: '🇬🇷',
      category: 'Relaxed',
      dates: 'Nov 18 – Nov 28, 2026',
      traveler: 'Liam & Chloe',
      avatar: '🏖️',
      budget: 'Backpacker ($1,200)',
      pace: 'Relaxed & Beach',
      tags: ['Beaches', 'Seafood', 'Sunset Spots', 'Boat Tours'],
    },
    {
      id: 4,
      title: 'Patagonian Glaciers & Trekking',
      destination: 'El Chaltén, Argentina',
      flag: '🇦🇷',
      category: 'Adventure',
      dates: 'Dec 05 – Dec 18, 2026',
      traveler: 'Elena R.',
      avatar: '🥾',
      budget: 'Budget ($1,400)',
      pace: 'High Energy',
      tags: ['Trekking', 'Campgrounds', 'Stargazing', 'Wildlife'],
    },
    {
      id: 5,
      title: 'Tuscan Food & Wine Exploration',
      destination: 'Florence & Siena, Italy',
      flag: '🇮🇹',
      category: 'Cultural',
      dates: 'Jan 10 – Jan 20, 2027',
      traveler: 'Marcus V.',
      avatar: '🍷',
      budget: 'Mid-Range ($1,900)',
      pace: 'Leisurely',
      tags: ['Wine Tasting', 'Art Museums', 'Cooking Class', 'Architecture'],
    },
    {
      id: 6,
      title: 'Tropical Snorkeling & Yoga Retreat',
      destination: 'Bali & Gili Islands, Indonesia',
      flag: '🇮🇩',
      category: 'Relaxed',
      dates: 'Feb 01 – Feb 14, 2027',
      traveler: 'Priya N.',
      avatar: '🧘‍♀️',
      budget: 'Budget ($900)',
      pace: 'Chilled Vibe',
      tags: ['Yoga', 'Snorkeling', 'Vegan Food', 'Sunsets'],
    },
  ]

  const filteredTrips = activeCategory === 'All'
    ? sampleTrips
    : sampleTrips.filter((trip) => trip.category === activeCategory)

  const handleOpenModal = (title = 'Find Your Travel Partner') => {
    setModalTitle(title)
    setModalOpen(true)
    setIsSubscribed(false)
    setEmailInput('')
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (emailInput.trim()) {
      setIsSubscribed(true)
    }
  }

  const scrollToSection = (id) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app-wrapper">
      {/* 1. Header / Navigation */}
      <header className="navbar">
        <div className="nav-container">
          <a
            href="#home"
            className="nav-brand"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
          >
            <span className="brand-icon">✈️</span>
            <span className="brand-text">Travel Partner Finder</span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links-desktop">
              <li>
                <a
                  href="#home"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('home')
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#find-partners"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('find-partners')
                  }}
                >
                  Find Partners
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('how-it-works')
                  }}
                >
                  How It Works
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="btn-get-started"
              onClick={() => handleOpenModal('Get Started with Travel Partner Finder')}
            >
              Get Started
            </button>
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer open">
            <a
              href="#home"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('home')
              }}
            >
              Home
            </a>
            <a
              href="#find-partners"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('find-partners')
              }}
            >
              Find Partners
            </a>
            <a
              href="#how-it-works"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('how-it-works')
              }}
            >
              How It Works
            </a>
            <button
              type="button"
              className="btn-get-started"
              style={{ width: '100%', marginTop: '8px' }}
              onClick={() => {
                setMobileMenuOpen(false)
                handleOpenModal('Get Started with Travel Partner Finder')
              }}
            >
              Get Started
            </button>
          </div>
        )}
      </header>

      <main>
        {/* 2. Hero Section */}
        <section id="home" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span>🌍</span>
                <span>Connecting Solo Travelers Worldwide</span>
              </div>
              <h1 className="hero-title">
                Don&apos;t Travel Alone.{' '}
                <span className="hero-title-highlight">
                  Find Someone Who Wants to Go Too.
                </span>
              </h1>
              <p className="hero-subtitle">
                Find compatible travel partners based on destination, dates, interests and travel preferences.
              </p>
              <div className="hero-actions">
                <button
                  type="button"
                  className="btn-primary-hero"
                  onClick={() => handleOpenModal('Find My Travel Partner')}
                >
                  <span>Find My Travel Partner</span>
                  <span>→</span>
                </button>
                <button
                  type="button"
                  className="btn-secondary-hero"
                  onClick={() => scrollToSection('how-it-works')}
                >
                  <span>How It Works</span>
                </button>
              </div>

              <div className="hero-badges-row">
                <div className="hero-mini-stat">
                  <span className="mini-stat-dot"></span>
                  <span>100% Free Community</span>
                </div>
                <div className="hero-mini-stat">
                  <span className="mini-stat-dot"></span>
                  <span>Destination-First Matching</span>
                </div>
                <div className="hero-mini-stat">
                  <span className="mini-stat-dot"></span>
                  <span>Built for Solo Explorers</span>
                </div>
              </div>
            </div>

            {/* Visual Hero Showcase Card */}
            <div className="hero-visual">
              <div className="match-preview-wrapper">
                <div className="floating-badge floating-badge-top">
                  <span>✈️</span>
                  <span>Matching Dates: Oct 15 – 26</span>
                </div>

                <div className="match-preview-card">
                  <div className="card-header-badge-row">
                    <span className="status-pill success">
                      <span>●</span> 98% Compatibility
                    </span>
                    <span className="category-tag">Featured Match</span>
                  </div>

                  <div className="destination-header">
                    <h3 className="destination-title">
                      <span>🇯🇵</span> Kyoto &amp; Tokyo
                    </h3>
                    <div className="destination-dates">
                      <span>📅</span> Autumn Colors &amp; Temples Tour
                    </div>
                  </div>

                  <div className="traveler-snippet">
                    <div className="traveler-avatar">M</div>
                    <div>
                      <div className="traveler-info-name">Maya &amp; Sarah</div>
                      <p className="traveler-info-meta">
                        Mid-Range Budget • Moderate Pace • English &amp; Japanese
                      </p>
                    </div>
                  </div>

                  <div className="tags-label">Shared Travel Interests</div>
                  <div className="tags-cloud">
                    <span className="interest-tag">🍜 Street Food</span>
                    <span className="interest-tag">⛩️ Ancient Temples</span>
                    <span className="interest-tag">📷 Photography</span>
                    <span className="interest-tag">🚅 Bullet Trains</span>
                  </div>

                  <div className="compatibility-bar-wrap">
                    <div className="compatibility-progress"></div>
                  </div>
                  <div className="compatibility-label">
                    <span>Preference alignment</span>
                    <strong>High Compatibility</strong>
                  </div>
                </div>

                <div className="floating-badge floating-badge-bottom">
                  <span>🤝</span>
                  <span>4 Shared Travel Passions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. How It Works Section */}
        <section id="how-it-works" className="section how-it-works-section">
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">Simple 3-Step Process</span>
              <h2 className="section-title">How It Works</h2>
              <p className="section-subtitle">
                Turn your solo travel bucket list into shared adventures with people who match your style.
              </p>
            </div>

            <div className="steps-grid">
              {/* Step 1 */}
              <div className="step-card">
                <div className="step-header">
                  <span className="step-number">01</span>
                  <div className="step-icon-box">🗺️</div>
                </div>
                <h3 className="step-title">Create Your Trip</h3>
                <p className="step-desc">
                  Share where you want to go, your target travel dates, starting location, estimated budget, and preferred travel vibe.
                </p>
                <div className="step-footer-tip">
                  <span>💡</span>
                  <span>Takes less than 2 minutes to set up</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="step-card">
                <div className="step-header">
                  <span className="step-number">02</span>
                  <div className="step-icon-box">🔍</div>
                </div>
                <h3 className="step-title">Find Compatible Partners</h3>
                <p className="step-desc">
                  Discover travelers heading to the same destinations. Filter candidates by dates, daily budget, pace, and shared passions.
                </p>
                <div className="step-footer-tip">
                  <span>⚡</span>
                  <span>Compare travel habits before saying hi</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="step-card">
                <div className="step-header">
                  <span className="step-number">03</span>
                  <div className="step-icon-box">🎒</div>
                </div>
                <h3 className="step-title">Connect &amp; Travel</h3>
                <p className="step-desc">
                  Start a conversation, coordinate itineraries, split hotel or rental car costs, and embark on an unforgettable shared trip.
                </p>
                <div className="step-footer-tip">
                  <span>✨</span>
                  <span>No more cancelling trips due to lack of company</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Feature Section */}
        <section id="features" className="section features-section">
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">Tailored Matching</span>
              <h2 className="section-title">Features Built for Real Travel Harmony</h2>
              <p className="section-subtitle">
                Great trips rely on good chemistry. Our matching criteria ensure you connect with people who share your outlook.
              </p>
            </div>

            <div className="features-grid">
              {/* Feature 1 */}
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">📍</div>
                </div>
                <div className="feature-content">
                  <span className="feature-tag">Location Focused</span>
                  <h3 className="feature-title">Destination-based matching</h3>
                  <p className="feature-description">
                    Whether you want to explore the streets of Rome, backpack Southeast Asia, or take a domestic road trip, connect with travelers whose destinations match yours.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">📅</div>
                </div>
                <div className="feature-content">
                  <span className="feature-tag">Schedule Alignment</span>
                  <h3 className="feature-title">Travel-date matching</h3>
                  <p className="feature-description">
                    No more waiting around. Match with travelers whose vacations, leaves, or flexible remote work windows coincide with your planned dates.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">🎨</div>
                </div>
                <div className="feature-content">
                  <span className="feature-tag">Passions &amp; Hobbies</span>
                  <h3 className="feature-title">Shared interests</h3>
                  <p className="feature-description">
                    Bond over common passions before you pack your bags. Find partners excited about foodie discoveries, photography, hiking, history, or nightlife.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">⚡</div>
                </div>
                <div className="feature-content">
                  <span className="feature-tag">Style Compatibility</span>
                  <h3 className="feature-title">Travel-style compatibility</h3>
                  <p className="feature-description">
                    Match with people who travel the way you do. Align on budget tiers (hostel to luxury), daily pace (early bird to slow wanderer), and accommodation preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Sample Trips Section for Find Partners */}
        <section id="find-partners" className="section preview-section">
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">Explore Sample Trips</span>
              <h2 className="section-title">Find Your Next Travel Partner</h2>
              <p className="section-subtitle">
                Explore a preview of upcoming travel itineraries and sample partner profiles.
              </p>
            </div>

            {/* Interactive Category Filter Pills */}
            <div className="filter-bar">
              {['All', 'Cultural', 'Adventure', 'Relaxed'].map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category === 'All' ? '🌐 All Destinations' : category}
                </button>
              ))}
            </div>

            {/* Trips Grid */}
            <div className="trip-cards-grid">
              {filteredTrips.map((trip) => (
                <div key={trip.id} className="trip-card">
                  <div className="trip-card-header">
                    <span className="trip-destination-badge">{trip.flag}</span>
                    <span className="trip-type-tag">{trip.category}</span>
                  </div>

                  <h3 className="trip-card-title">{trip.title}</h3>
                  <div className="trip-card-creator">
                    <span className="creator-avatar">{trip.avatar}</span>
                    <span>Posted by <strong>{trip.traveler}</strong></span>
                  </div>

                  <div className="trip-card-details">
                    <div className="trip-detail-item">
                      <span>📍</span>
                      <span><strong>Destination:</strong> {trip.destination}</span>
                    </div>
                    <div className="trip-detail-item">
                      <span>📅</span>
                      <span><strong>Dates:</strong> {trip.dates}</span>
                    </div>
                    <div className="trip-detail-item">
                      <span>💰</span>
                      <span><strong>Budget:</strong> {trip.budget}</span>
                    </div>
                    <div className="trip-detail-item">
                      <span>🏃</span>
                      <span><strong>Pace:</strong> {trip.pace}</span>
                    </div>
                  </div>

                  <div className="trip-card-tags">
                    {trip.tags.map((tag, idx) => (
                      <span key={idx} className="mini-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="btn-card-action"
                    onClick={() => handleOpenModal(`Connect for ${trip.destination}`)}
                  >
                    Connect with Partner
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Safety Message Section */}
        <section id="safety" className="section safety-section">
          <div className="container">
            <div className="safety-card">
              <div className="safety-header-group">
                <div className="safety-shield-icon">🛡️</div>
                <div className="safety-title-wrap">
                  <span className="safety-subtitle-tag">Trust &amp; Community</span>
                  <h2 className="safety-main-title">Safety First: Our Commitment to Secure Travel</h2>
                  <p className="safety-lead-text">
                    Meeting travel partners should be exciting and comfortable. While Travel Partner Finder is in early Stage 1, comprehensive safety mechanisms are central to our roadmap.
                  </p>
                </div>
              </div>

              <div className="safety-features-grid">
                <div className="safety-feature-item">
                  <span className="safety-item-icon">🪪</span>
                  <div>
                    <h4 className="safety-item-heading">Profile Verification</h4>
                    <p className="safety-item-text">
                      Upcoming versions will provide optional ID verification, social profile linkage, and phone confirmation to verify genuine travelers.
                    </p>
                  </div>
                </div>

                <div className="safety-feature-item">
                  <span className="safety-item-icon">🚫</span>
                  <div>
                    <h4 className="safety-item-heading">Reporting &amp; Blocking Tools</h4>
                    <p className="safety-item-text">
                      Users will have instant one-tap tools to report suspicious behavior or block unwanted contacts, with strict moderation standards.
                    </p>
                  </div>
                </div>

                <div className="safety-feature-item">
                  <span className="safety-item-icon">💬</span>
                  <div>
                    <h4 className="safety-item-heading">Private In-App Messaging</h4>
                    <p className="safety-item-text">
                      Chat and coordinate trip details securely within the platform without needing to reveal your phone number or personal social accounts.
                    </p>
                  </div>
                </div>

                <div className="safety-feature-item">
                  <span className="safety-item-icon">⭐</span>
                  <div>
                    <h4 className="safety-item-heading">Community Vouching &amp; Reviews</h4>
                    <p className="safety-item-text">
                      Travelers will be able to leave honest, constructive reviews following completed trips to foster trust and accountability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="safety-banner-footer">
                <p className="safety-notice-text">
                  <span>ℹ️</span>
                  <span>Safety features will be actively introduced alongside user authentication in upcoming release stages.</span>
                </p>
                <span className="safety-badge-pill">Stage 1 Notice</span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="cta-banner-section">
          <div className="container cta-banner-content">
            <h2 className="cta-banner-title">Ready to Find Your Next Travel Companion?</h2>
            <p className="cta-banner-subtitle">
              Don&apos;t let solo travel hold you back from exploring your dream destinations.
            </p>
            <button
              type="button"
              className="btn-cta-light"
              onClick={() => handleOpenModal('Get Early Access')}
            >
              <span>Find My Travel Partner Today</span>
              <span>→</span>
            </button>
          </div>
        </section>
      </main>

      {/* 6. Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand-col">
              <div className="footer-logo">
                <span>✈️</span>
                <span>Travel Partner Finder</span>
              </div>
              <p className="footer-quote">
                &ldquo;Making solo travel feel less alone.&rdquo;
              </p>
              <p className="footer-subtext">
                Helping travelers connect, share itineraries, and experience the world together safely and affordably.
              </p>
            </div>

            <div className="footer-nav-col">
              <div className="footer-link-group">
                <span className="footer-group-title">Navigation</span>
                <a
                  href="#home"
                  className="footer-nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('home')
                  }}
                >
                  Home
                </a>
                <a
                  href="#find-partners"
                  className="footer-nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('find-partners')
                  }}
                >
                  Find Partners
                </a>
                <a
                  href="#how-it-works"
                  className="footer-nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('how-it-works')
                  }}
                >
                  How It Works
                </a>
                <a
                  href="#features"
                  className="footer-nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('features')
                  }}
                >
                  Features
                </a>
              </div>

              <div className="footer-link-group">
                <span className="footer-group-title">Trust &amp; Roadmap</span>
                <a
                  href="#safety"
                  className="footer-nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('safety')
                  }}
                >
                  Safety Features
                </a>
                <span className="footer-nav-link" style={{ opacity: 0.7 }}>
                  Stage 1: Landing Page
                </span>
                <span className="footer-nav-link" style={{ opacity: 0.7 }}>
                  Stage 2: Profiles (Coming Soon)
                </span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} Travel Partner Finder. All rights reserved.</span>
            <span className="footer-badge">Junior React Project • Stage 1</span>
          </div>
        </div>
      </footer>

      {/* Stage 1 Interactive Modal */}
      {modalOpen && (
        <div
          className="modal-overlay"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-heading"
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="modal-icon-badge">🎉</div>
            <h3 id="modal-heading" className="modal-title">
              {modalTitle}
            </h3>
            <p className="modal-text">
              Welcome to <strong>Travel Partner Finder</strong>! We are currently building Stage 1. Trip creation, traveler matchmaking algorithms, and messaging will be activated in upcoming stages.
            </p>

            {isSubscribed ? (
              <div className="modal-success-box">
                ✅ Thank you! You&apos;ve been added to our early access priority list.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="modal-input-form">
                <input
                  type="email"
                  placeholder="Enter your email to get notified"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="modal-input"
                  required
                />
                <button type="submit" className="modal-submit-btn">
                  Notify Me When Search Launches
                </button>
              </form>
            )}

            <button
              type="button"
              className="modal-dismiss-btn"
              onClick={handleCloseModal}
            >
              Back to Landing Page
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
