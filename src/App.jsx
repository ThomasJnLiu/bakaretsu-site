import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Archive from './pages/Archive';
import RootLayout from './pages/Root';
import ComicPage from './pages/ComicPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/archive', element: <Archive /> },
			{ path: '/comic/:comicId', element: <ComicPage /> },
		],
	},
]);

function App() {
	console.log(import.meta.url);

	return (
		<>
			<RouterProvider router={router} />
			{/* <header>
      <img class = "header-img" src = "/bakaretsu.png"/>
      <a>BAKARETSU</a>
    </header>
    <nav>
      <a href = "./home">
        HOME
      </a>
      <a href = "./archive">
        ARCHIVE
      </a>
      <a href = "./about">
        ABOUT
      </a>
    </nav>
    <div class = "comics-container">
        {comicsInfo.map(comic => {
            return (<img key = {comic.id} src = {`/comics/${comic.name}`}/>) 
        })}
    </div> */}
		</>
	);
}

export default App;
