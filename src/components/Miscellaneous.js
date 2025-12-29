import React from 'react';
import './Miscellaneous.css';

const Miscellaneous = () => {
  return (
    <section id="misc" className="section miscellaneous">
      <h2 className="section-title">Miscellaneous</h2>
      <p className="section-intro">
        I was previously the Vice President of{' '}
        <a
          href="https://ml.berkeley.edu/"
          target="_blank"
          rel="noopener noreferrer"

        >
          Machine Learning at Berkeley (ML@B)
        </a>
        , which is Berkeley's undergraduate ML group. I taught introductory ML workshops across the Bay Area, ran an internal new member education program, and managed $100,000 of finances.
      </p>
      <p className="section-intro">
        Below are some links of content I've developed:
      </p>
      <ul className="misc-list">
        <li>
          <a
            href="https://fluff-armadillo-037.notion.site/Modern-Computer-Vision-and-Deep-Learning-CS-198-126-b11006739378470fa67a9cf6594201e0"
            target="_blank"
            rel="noopener noreferrer"

          >
            CS 198 (Modern Computer Vision and Deep Learning)
          </a>
          : a course I co-developed and taught in Fall 2022, with 100 students and 200 auditors. Received faculty sponsorship from{' '}
          <a
            href="http://people.eecs.berkeley.edu/~russell/"
            target="_blank"
            rel="noopener noreferrer"

          >
            Stuart Russell
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/drive/folders/1BM-6LCi15RfjTSAjJ2A8G16w5DqB0UDv?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"

          >
            CS 189 (Introduction to Machine Learning)
          </a>{' '}
          recitation slides
        </li>
        <li>
          <a
            href="https://drive.google.com/drive/folders/1zuP3OJfjJ5xI36omlILGv4mMVFH-_Vzl?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"

          >
            CS 188 (Introduction to Artificial Intelligence)
          </a>{' '}
          recitation slides
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=zHUFiW5wuYY"
            target="_blank"
            rel="noopener noreferrer"

          >
            Model-agnostic meta learning (MAML)
          </a>{' '}
          talk I presented to Berkeley students
        </li>
      </ul>
      <p className="misc-kicker">Other interests</p>
      <p className="section-intro">
        Some (underexplored) interests of mine are innovation economics and the history of
        technology. A few books I've dipped into recently that reflect these themes include{' '}
        <a href="https://www.ynharari.com/book/nexus/" target="_blank" rel="noopener noreferrer">
          Nexus
        </a>
        ,{' '}
        <a href="https://press.stripe.com/boom" target="_blank" rel="noopener noreferrer">
          Boom
        </a>
        , and{' '}
        <a
          href="https://press.stripe.com/the-big-score"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Big Score
        </a>
        {' '}(as you can tell, huge Stripe Press fan).
      </p>
      <p className="section-intro">
        I also enjoy learning about Indic languages, music, and culture. I know bits and pieces of
        Tamil, Sanskrit, Hindi, and Urdu, and I learnt Carnatic music for 10 years!
      </p>
    </section>
  );
};

export default Miscellaneous;
