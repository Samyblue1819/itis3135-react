import { Link } from "react-router-dom";
import usePageTitle from "../usePageTitle.js";

export default function Introduction() {
  usePageTitle("Introduction");

  return (
    <main>
      <h2>Introduction</h2>
      <h6>Sameer Sohail ~ Sandy Snake</h6>
      <figure>
        <img src="/images/intro-photo.jpg" alt="Sameer in a black shirt and backpack, standing outside at night" width="800" height="1067" />
        <figcaption>Leaving gym</figcaption>
      </figure>
      <p>I am a junior currently pursuing a degree in computer science with a concentration in Information Technology. I'm looking forward to learning more about frontend development. I also enjoy working with computers and cars, and I like learning how things work.</p>
      <ul>
        <li><strong>Personal Background:</strong> Born in Brooklyn, grew up in Charlotte.</li>
        <li><strong>Professional Background:</strong> Dispatcher for a hotshot trucker, car bodywork/mechanic.</li>
        <li><strong>Academic Background:</strong> CS 2027</li>
        <li><strong>Primary Work Computer:</strong> Desktop, Windows 11, 25H2</li>
        <li><strong>Primary Work Location:</strong> Home/Office</li>
        <li><strong>Alternate Computer &amp; Location:</strong> M4 Mac Air, Campus/Library</li>
        <li><strong>Courses I'm Taking, &amp; Why:</strong>
          <ol>
            <li>ITSC 3166 - Intro to Computer Networks: A technical elective that interests me because I quite enjoy networking.</li>
            <li><Link to="/contract">ITIS 3135 - Front-End Web Development</Link>: This class is required and also something new to learn.</li>
            <li>ITSC 3100 - Intro to Info Security &amp; Privacy: Another technical elective that is interesting to me.</li>
            <li>ITSC 3260 - Database Design &amp; Implementation: A required course, and I like SQL.</li>
          </ol>
        </li>
      </ul>
      <blockquote>
        <p>&ldquo;Be in this world as if you were a stranger or a traveler along a path.&rdquo;</p>
        <p>-Ṣaḥīḥ al-Bukhārī 6416</p>
      </blockquote>
    </main>
  );
}
