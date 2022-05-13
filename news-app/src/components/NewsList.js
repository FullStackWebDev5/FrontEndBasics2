import { Link } from 'react-router-dom'

function NewsList({news}) {
  return (
		<>
			<div>NewsList</div>
			<ul>
				{news.map((singleNews, index) => (
					<li key={index}>
						<Link to={`/news/${index}`} >
							{singleNews.title}
						</Link>
					</li>
				))}
			</ul>
		</>
  )
}

export default NewsList