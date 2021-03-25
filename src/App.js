import Row from './row';
import request from './request';
import Banner from './Banner';
import NavBar from './Nav';
import './App.css';
function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl = {request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl = {request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl = {request.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl = {request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl = {request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl = {request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl = {request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl = {request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
