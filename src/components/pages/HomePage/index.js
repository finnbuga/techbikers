import React, { memo, useEffect } from "react";
import { Form, Container } from "semantic-ui-react";

import "./style.css";
import { setDocumentTitle } from "../../../helpers";

const HomePage = memo(() => {
  useEffect(setDocumentTitle());

  return (
    <Container as="main" id="home-page">
      <Hero />
      <Mission />
      <Stats />
      <MailchimpForm />
    </Container>
  );
});

// @todo optimise image size! and optimise for @media mobile
const Hero = memo(() => (
  <section id="hero">
    <p>
      <b>Drop</b>your laptop & get on your<b>bike</b>
    </p>
  </section>
));

const Mission = memo(() => (
  <section id="mission">
    <h2>Our Mission</h2>

    <p>
      Techbikers is a collaboration of the London tech startup community to help
      children in need by supporting literacy charity Room to Read. Since 2012
      over 300 tech professionals – including start-ups, venture capitalists and
      executives have cycled 960km in three Paris to London rides to raise money
      for this fantastic charity.
    </p>
  </section>
));

const Stats = memo(() => (
  <section id="stats">
    <h2>Stats to Date</h2>

    <p>
      <b>365</b>cyclists
    </p>
    <p>
      <b>£304,000</b> raised since 2012
    </p>
    <p>
      <b>1600km</b> ridden
    </p>
  </section>
));

const MailchimpForm = memo(() => (
  <section id="mailchimp">
    <h2>Learn more about our plans for 2020!</h2>

    <Form
      action="//techbikers.us7.list-manage.com/subscribe/post?u=b99427a37520d53bd953e6e7c&amp;id=85462469df"
      method="post"
      target="_blank"
    >
      <Form.Input type="email" name="EMAIL" placeholder="Your email address" />
      <input
        style={{ position: "absolute", left: "-5000px" }}
        type="text"
        name="b_b99427a37520d53bd953e6e7c_85462469df"
        tabIndex="-1"
        defaultValue=""
      />
      <Form.Button type="submit" name="subscribe" color="olive">
        Subscribe
      </Form.Button>
    </Form>
  </section>
));

export default HomePage;
