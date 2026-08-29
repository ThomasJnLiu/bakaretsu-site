// Purpose: Take the list of all comics, generate a link for each
import comicsInfo from '../../src/meta.json';
import { Link } from 'react-router-dom';

function Archive() {
	return (
		<>
			<h1>Archive</h1>
			<ul className='archive-list'>
				{comicsInfo.map((comic) => {
					console.log(comic);
					let thumbnailPath = 'thumb_' + comic.filePath;

					return (
						<div key={comic.id}>
							<img src={`/comics/thumbnails/${thumbnailPath}`} />
							<Link to={`/comic/${comic.urlPath}`}>
								{comic.title}
							</Link>
						</div>
					);
				})}
			</ul>
		</>
	);
}

export default Archive;
