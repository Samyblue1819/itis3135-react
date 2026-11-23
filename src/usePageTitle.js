import { useEffect } from "react";

// Sets the browser tab title to "site name | page name" whenever a page loads.
export default function usePageTitle(pageName) {
  useEffect(() => {
    document.title = "Sameer Sohail's Sandy Snake | ITIS3135 | " + pageName;
  }, [pageName]);
}
