import usePageTitle from "../usePageTitle.js";

export default function About() {
  usePageTitle("About");

  return (
    <main>
      <h2>About</h2>
      <p>This course site is my work for ITIS3135 - Front-End Web Development at UNC Charlotte. It shows what I learn each module, starting with plain HTML and CSS and building up to JavaScript and full multi-page sites. Assignments, standards, and the schedule all come from my instructor's <a href="https://divonbriesen.github.io/teaching/itis3135/">ITIS3135 teaching site</a>.</p>
      <p>Everything here is published in two places, my CLT webspace and my GitHub Pages site, so every link inside the site is relative and works from either copy. I write the code and check it with these tools:</p>
      <ul>
        <li>VS Code - my code editor</li>
        <li>Emmet - shortcuts in VS Code for writing HTML and CSS faster</li>
        <li>Git and GitHub - version control and hosting through GitHub Pages</li>
        <li>Browser developer tools - inspecting elements and testing on different screen sizes</li>
        <li>Accumulus - the cloud validator that checks my HTML and accessibility</li>
        <li>Vicunadator - the llama that checks each page against the course standards</li>
      </ul>
      <p>By the end of the semester I will build these sites:</p>
      <ul>
        <li>Personal home page - the root of my webspace that links to this course site</li>
        <li>Course site - this site, with my introduction, contract, and assignment pages</li>
        <li>Design firm site - Sohail Web Design, linked from the footer of every course page</li>
        <li>Crappy page - a page that breaks every design rule on purpose</li>
        <li>Hobby site - a one-page site about motorcycling</li>
        <li>Whimsical product company - a fun business site for my mascot with its own look</li>
        <li>Peer-management tool - an app for organizing and tracking peers</li>
        <li>Client project - a site built for a real client</li>
      </ul>
    </main>
  );
}
