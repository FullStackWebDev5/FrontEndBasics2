import React from 'react'
import { useParams } from 'react-router-dom'

function SingleNews({news}) {
	const { index } = useParams()
	const singleNews = news[index]
	return (
		<>
			<div>SingleNews</div>
			{ singleNews.title }
		</>
	)
}

export default SingleNews