import { Link } from "react-router-dom";

// Shared header: mascot logo, site name, tagline, and both menus.
// The main menu is shortened to the 4 pages in this React site;
// the secondary menu links back to the full course site.
export default function Header() {
  const courseSite = "https://samyblue1819.github.io/itis3135/";

  return (
    <header>
      <img src="/images/mascot-logo.png" alt="Coral cartoon snake head on a green square" width="120" height="120" />
      <h1>Sameer Sohail's Sandy Snake | ITIS3135</h1>
      <p><em>Slithering into front-end, one page at a time.</em></p>
      <nav aria-label="Main menu">
        <Link to="/">Home</Link> |{" "}
        <Link to="/introduction">Introduction</Link> |{" "}
        <Link to="/contract">Contract</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
      <nav aria-label="Secondary menu">
        <a href={courseSite + "hobby/"}>Hobby</a> |{" "}
        <a href={courseSite + "sandysnake/"}>Sandy Snake</a> |{" "}
        <a href={courseSite + "stuff/My%20CRAPpy%20Page-$!.htm"}>CRAPpy</a>
      </nav>
    </header>
  );
}
