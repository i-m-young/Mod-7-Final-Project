import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div className="page">
      <div className="home">
        <h1 className="home__title">🍿 CineSearch</h1>

        <p className="home__subtitle">Find your favorite movies and TV shows</p>

        <SearchBar />
      </div>
    </div>
  );
}

export default Home;
