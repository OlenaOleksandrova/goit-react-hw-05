import { useEffect } from "react";

const MoviesPage = () => {
     useEffect(() => {
        document.title = "BEST CODERS | MoviesPage";
    }, []);
  return (
      <div>
          <h2>MoviesPage</h2>
      </div>
  )
}

export default MoviesPage