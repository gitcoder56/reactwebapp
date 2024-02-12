import { useEffect } from "react";
import React from "react";
import {
  heroBanner,
  blogBanner1,
  blogBanner2,
  blogBanner3,
  featuresImage1,
  featuresImage2,
  logoFooter,
  logo,
} from "./imageReferences";
import IonIcon from "@reacticons/ionicons";
import "./style/style.css";
import Navbar from "./js/javascript";
import SvgComponent1 from "./components/logo";
import SvgComponent2 from "./components/logoFooter";

const Homepage = () => {
  return (
    <div>
      <div>
        <body>
          <header class="header" data-header>
            <div class="container">
              <a href="/" class="logo">
                <SvgComponent1 />
              </a>

              <button class="menu-toggle-btn" data-nav-toggle-btn>
                <IonIcon name="menu-outline"></IonIcon>
              </button>

              <nav class="navbar">
                <ul class="navbar-list">
                  <li>
                    <a href="/hero" class="navbar-link">
                      Home
                    </a>
                  </li>

                  <li>
                    <a href="/features" class="navbar-link">
                      Features
                    </a>
                  </li>

                  <li>
                    <a href="/" class="navbar-link">
                      Pricing
                    </a>
                  </li>

                  <li>
                    <a href="/blog" class="navbar-link">
                      Blog
                    </a>
                  </li>

                  <li>
                    <a href="/contact" class="navbar-link">
                      Contact Us
                    </a>
                  </li>
                </ul>

                <div class="header-actions">
                  <a href="/" class="header-action-link">
                    Log in
                  </a>
                  <a href="/" class="header-action-link">
                    Register
                  </a>
                </div>
              </nav>
            </div>
          </header>

          <main>
            <article>
              <section class="hero" id="hero">
                <div class="container">
                  <div class="hero-content">
                    <h1 class="h1 hero-title">Test Landing Page</h1>

                    <p class="hero-text">
                      A creative landing page with an urban look and feel, here
                      we make dreams come true with top notch quality and
                      service
                    </p>

                    <p class="form-text">
                      <span></span> Subscribe to out newsletter! We know you
                      want to :)
                    </p>

                    <form action="" class="hero-form">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter Your Email"
                        class="email-field"
                      />

                      <button type="submit" class="btn btn-primary">
                        Subscribe
                      </button>
                    </form>
                  </div>

                  <figure class="hero-banner">
                    <img src={heroBanner} alt="Hero pic" />
                  </figure>
                </div>
              </section>

              <section class="about">
                <div class="container">
                  <div class="about-content">
                    <div class="about-icon">
                      <IonIcon name="cube"></IonIcon>
                    </div>

                    <h2 class="h2 about-title">Why Choose Us ?</h2>

                    <p class="about-text">
                      We get the job done and we get it done efficiently through
                      our world class service provision, you don't have to worry
                      about a thing ;)
                    </p>

                    <button class="btn btn-outline">Learn More</button>
                  </div>

                  <ul class="about-list">
                    <li>
                      <div class="about-card">
                        <div class="card-icon">
                          <IonIcon name="thumbs-up"></IonIcon>
                        </div>
                        <h3 class="h3 card-title">Easy To Use</h3>

                        <p class="card-text">
                          Our software is very easy to use with our beautiful
                          UI, anyone can use it it's almost as easy as learning
                          the alphabet!
                        </p>
                      </div>
                    </li>

                    <li>
                      <div class="about-card">
                        <div class="card-icon">
                          <IonIcon name="trending-up"></IonIcon>
                        </div>
                        <h3 class="h3 card-title">Grow Your Revenue</h3>

                        <p class="card-text">
                          We help you grow your revenue with our data analytics
                          tools! Trust me in Nigeria your'e going to need them.
                        </p>
                      </div>
                    </li>

                    <li>
                      <div class="about-card">
                        <div class="card-icon">
                          <IonIcon name="shield-checkmark"></IonIcon>
                        </div>
                        <h3 class="h3 card-title">Analytics Security</h3>

                        <p class="card-text">
                          Be rest assured that when you make use of our software
                          you get state of the art analytics security which
                          means less time problem solving and more time being
                          productive.
                        </p>
                      </div>
                    </li>

                    <li>
                      <div class="about-card">
                        <div class="card-icon">
                          <IonIcon name="server"></IonIcon>
                        </div>
                        <h3 class="h3 card-title">Data Privacy</h3>

                        <p class="card-text">
                          Be rest assured that any data given to us is going to
                          stay private, we use end to end encyption so nobody
                          can intecept the information conveyed between us.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section class="features" id="features">
                <div class="container">
                  <h2 class="h2 section-title">Awesome Features</h2>

                  <p class="section-text">
                    We've got awesome features like weekly data, monthly data
                    and yearly data, all generated with the push of a button.
                  </p>

                  <div class="features-wrapper">
                    <figure class="features-banner">
                      <img src={featuresImage1} alt="illustration art" />
                    </figure>

                    <div class="features-content">
                      <p class="features-content-subtitle">
                        <IonIcon name="sparkles"></IonIcon>

                        <span>CREATIVE FEATURES</span>
                      </p>

                      <h3 class="features-content-title">
                        Build community & conversion with our suite of social
                        tool
                      </h3>

                      <p class="features-content-text">
                        Now you can fine-tune the type of data that you want to
                        be shown by your self using our state of the art
                        creative features while also putting it in lovely UI
                      </p>

                      <ul class="features-list">
                        <li class="features-list-item">
                          <IonIcon name="layers-outline"></IonIcon>

                          <p>Stack your data all in one place.</p>
                        </li>

                        <li class="features-list-item">
                          <IonIcon name="megaphone-outline"></IonIcon>

                          <p>
                            Create personal announcements that fit your needs.
                          </p>
                        </li>
                      </ul>

                      <div class="btn-group">
                        <button class="btn btn-primary">Read More</button>

                        <button class="btn btn-secondary">Buy Now</button>
                      </div>
                    </div>
                  </div>

                  <div class="features-wrapper">
                    <figure class="features-banner">
                      <img src={featuresImage2} alt="illustration art" />
                    </figure>

                    <div class="features-content">
                      <p class="features-content-subtitle">
                        <IonIcon name="sparkles"></IonIcon>

                        <span>CREATIVE FEATURES</span>
                      </p>

                      <h3 class="features-content-title">
                        We do the work youstay focused on your customers.
                      </h3>

                      <p class="features-content-text">
                        We do all the work with our sophisticated technology so
                        all you have to do is just sit back relax and face all
                        those customers that want to stress you.
                      </p>

                      <ul class="features-list">
                        <li class="features-list-item">
                          <IonIcon name="rocket-outline"></IonIcon>

                          <p>Fast and efficient.</p>
                        </li>

                        <li class="features-list-item">
                          <IonIcon name="wifi-outline"></IonIcon>

                          <p>Saved on the cloud so no issue don't worry.</p>
                        </li>
                      </ul>

                      <div class="btn-group">
                        <button class="btn btn-primary">Read More</button>

                        <button class="btn btn-secondary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section class="blog" id="blog">
                <div class="container">
                  <h2 class="h2 section-title">Latest News</h2>

                  <p class="section-text">
                    Your all in one blog site, we get all the news for you so
                    you don't have to!
                  </p>

                  <ul class="blog-list">
                    <li>
                      <div class="blog-card">
                        <figure class="blog-banner">
                          <img src={blogBanner1} alt="Best Traveling Place" />
                        </figure>

                        <div class="blog-meta">
                          <span>
                            <IonIcon name="calendar-outline"></IonIcon>

                            <time datetime="2024-02-05">february 02 2024</time>
                          </span>

                          <span>
                            <IonIcon name="person-outline"></IonIcon>

                            <p>admin</p>
                          </span>
                        </div>

                        <h3 class="blog-title">Best Traveling Place</h3>

                        <p class="blog-text">
                          You should check out Dubai at this time of the year,
                          desert safaris, amusement parks, boat cruises and a
                          big buffet, make sure don't miss this!
                        </p>

                        <a href="/" class="blog-link-btn">
                          <span>Learn More</span>
                          <IonIcon
                            name="chevron-forward-outline"
                            class="icon"
                          ></IonIcon>
                        </a>
                      </div>
                    </li>

                    <li>
                      <div class="blog-card">
                        <figure class="blog-banner">
                          <img src={blogBanner2} alt="Private Meeting Room" />
                        </figure>

                        <div class="blog-meta">
                          <span>
                            <IonIcon name="calendar-outline"></IonIcon>

                            <time datetime="2024-02-05">february 02 2024</time>
                          </span>

                          <span>
                            <IonIcon name="person-outline"></IonIcon>

                            <p>admin</p>
                          </span>
                        </div>

                        <h3 class="blog-title">Private Meetings</h3>

                        <p class="blog-text">
                          Well, i guess you have meetings right here in abuja,
                          guess what! we've got something for you, you could
                          check out our latest place in the ends at Jahi.
                        </p>

                        <a href="/" class="blog-link-btn">
                          <span>Learn More</span>

                          <IonIcon
                            name="chevron-forward-outline"
                            class="icon"
                          ></IonIcon>
                        </a>
                      </div>
                    </li>

                    <li>
                      <div class="blog-card">
                        <figure class="blog-banner">
                          <img
                            src={blogBanner3}
                            alt="The Best Business Ideas"
                          />
                        </figure>

                        <div class="blog-meta">
                          <span>
                            <IonIcon name="calendar-outline"></IonIcon>

                            <time datetime="2024-02-05">february 02 2024</time>
                          </span>

                          <span>
                            <IonIcon name="person-outline"></IonIcon>

                            <p>admin</p>
                          </span>
                        </div>

                        <h3 class="blog-title">The Best Business Ideas</h3>

                        <p class="blog-text">
                          If you're a business man you are in good hands! with
                          our state of the art technology, getting data insights
                          into potential business ideas have never been easier.
                        </p>

                        <a href="/" class="blog-link-btn">
                          <span>Learn More</span>

                          <IonIcon
                            name="chevron-forward-outline"
                            class="icon"
                          ></IonIcon>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section class="contact" id="contact">
                <div class="container">
                  <h2 class="h2 section-title">Contact Us</h2>

                  <p class="section-text">
                    If you have anything you want to tell us just do it! We are
                    one step away.
                  </p>

                  <div class="contact-wrapper">
                    <form action="" class="contact-form">
                      <div class="wrapper-flex">
                        <div class="input-wrapper">
                          <label for="name">Name*</label>

                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            placeholder="Enter Your Name"
                            class="input-field"
                          />
                        </div>

                        <div class="input-wrapper">
                          <label for="email">Email*</label>

                          <input
                            type="text"
                            name="email"
                            id="email"
                            required
                            placeholder="Enter Your Email"
                            class="input-field"
                          />
                        </div>
                      </div>

                      <label for="message">Message*</label>

                      <textarea
                        name="message"
                        id="message"
                        required
                        placeholder="Type You Message"
                        class="input-field"
                      ></textarea>

                      <button type="submit" class="btn btn-primary">
                        <span>Send Message</span>

                        <IonIcon name="paper-plane-outline"></IonIcon>
                      </button>
                    </form>

                    <ul class="contact-list">
                      <li>
                        <a
                          href="mailto:support@website.com"
                          class="contact-link"
                        >
                          <IonIcon name="mail-outline" class="icon"></IonIcon>

                          <span>: support@landio.com</span>
                        </a>
                      </li>

                      <li>
                        <a href="/" class="contact-link">
                          <IonIcon name="globe-outline" class="icon"></IonIcon>

                          <span>: www.landi.com</span>
                        </a>
                      </li>

                      <li>
                        <a href="tel:+0011234567890" class="contact-link">
                          <IonIcon name="call-outline" class="icon"></IonIcon>

                          <span>: (+234) 123 456 7890</span>
                        </a>
                      </li>

                      <li>
                        <a href="/" class="contact-link">
                          <IonIcon name="time-outline" class="icon"></IonIcon>

                          <span>: 9:00 AM - 6:00 PM</span>
                        </a>
                      </li>

                      <li>
                        <a href="/" class="contact-link">
                          <IonIcon
                            name="location-outline"
                            class="icon"
                          ></IonIcon>

                          <address>: 28 Randolph Street Maitama, Abuja</address>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </article>
          </main>

          <footer>
            <div class="footer-top">
              <div class="container">
                <div class="footer-brand">
                  <a href="/" class="logo">
                    <SvgComponent2 />
                  </a>

                  <p class="footer-text">
                    We make work easier one step at a time with our quality data
                    analytics tools!
                  </p>

                  <ul class="social-list">
                    <li>
                      <a href="/" class="social-link">
                        <IonIcon name="logo-facebook"></IonIcon>
                      </a>
                    </li>

                    <li>
                      <a href="/" class="social-link">
                        <IonIcon name="logo-twitter"></IonIcon>
                      </a>
                    </li>

                    <li>
                      <a href="/" class="social-link">
                        <IonIcon name="logo-instagram"></IonIcon>
                      </a>
                    </li>

                    <li>
                      <a href="/" class="social-link">
                        <IonIcon name="logo-linkedin"></IonIcon>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="footer-link-box">
                  <ul class="footer-list">
                    <li>
                      <p class="footer-item-title">ABOUT US</p>
                    </li>

                    <li>
                      <a href="/" class="footer-link">
                        Works
                      </a>
                    </li>

                    <li>
                      <a href="/" class="footer-link">
                        Strategy
                      </a>
                    </li>

                    <li>
                      <a href="/" class="footer-link">
                        Releases
                      </a>
                    </li>

                    <li>
                      <a href="/" class="footer-link">
                        Press
                      </a>
                    </li>

                    <li>
                      <a href="/" class="footer-link">
                        Mission
                      </a>
                    </li>
                  </ul>

                  <ul class="footer-list">
                    <li>
                      <p class="footer-item-title">CUSTOMERS</p>
                    </li>

                    <li>
                      <a href="/" class="footer-link">
                        Trending
                      </a>
                    </li>

                    <li>
                      <a href="/" class="footer-link">
                        Popular
                      </a>
                    </li>

                    <li>
                      <a href="/" class="footer-link">
                        Customers
                      </a>
                    </li>

                    <li>
                      <a href="/" class="footer-link">
                        Features
                      </a>
                    </li>
                  </ul>

                  <ul class="footer-list">
                    <li>
                      <p class="footer-item-title">SUPPORT</p>
                    </li>

                    <li>
                      <a href="/" class="footer-link">
                        Developers
                      </a>
                    </li>

                    <li>
                      <a href="/" class="footer-link">
                        Support
                      </a>
                    </li>

                    <li>
                      <a href="/" class="footer-link">
                        Customer Service
                      </a>
                    </li>

                    <li>
                      <a href="/" class="footer-link">
                        Get Started
                      </a>
                    </li>

                    <li>
                      <a href="/" class="footer-link">
                        Guide
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="footer-button">
              <div class="container">
                <p class="copyright">
                  &copy; 2024 <a href="">Udotech</a>. All Right Reserved
                </p>
              </div>
            </div>
          </footer>

          <script src="./assets/js/script.js"></script>

          <script
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          ></script>
        </body>
      </div>
      <div>
        {/* Other components or content */}
        <Navbar />
      </div>
    </div>
  );
};
export default Homepage;
