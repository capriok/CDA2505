const API_KEY = 'AIzaSyAaoOIs6BIXaCQmYzhG6OVjQTsZTZHNHuI'

$('form').submit(e => executeSearch(e))

const getSearchValue = () => $('.search-input').val()
const getCountValue = () => $('.search-count').val()

async function executeSearch(e) {
	e.preventDefault()
	const searchValue = getSearchValue();
	const searchCount = getCountValue();
	const maxResults = parseInt(getCountValue())

	if (!searchValue) return alert('Enter a Search Value.')
	if (!searchCount) $('.search-count').val('3')

	const Base = 'https://www.googleapis.com/youtube/v3/search?'
	const Type = 'type=video'
	const Query = `&q=${searchValue}`
	const Part = '&part=snippet'
	const MaxResults = `&maxResults=${maxResults}`
	const Key = `&key=${API_KEY}`
	const URL = Base + Type + Query + Part + MaxResults + Key

	const response = await fetch(URL)
	const data = await response.json()
	RenderResults(data.items);
}

function RenderResults(results) {
	console.log({ Results: results });
	$('section').empty()
	results.forEach(r => {
		let result = document.createElement('div')
		result.classList.add('result')
		let title = document.createElement('h3')
		title.textContent = r.snippet.title
		let description = document.createElement('p')
		description.textContent = r.snippet.description
		let thumbCont = document.createElement('div')
		let thumb = document.createElement('img')
		thumb.src = r.snippet.thumbnails.medium.url
		thumbCont.append(thumb)
		let channelCont = document.createElement('p')
		let channel = document.createElement('a')
		channel.href = `https://www.youtube.com/channel/${r.channelID}`
		channelCont.append('Channel: ')
		channelCont.append(channel)
		channel.textContent = r.snippet.channelTitle
		result.append(title, description, thumbCont, channelCont)
		thumb.classList.add('thumb')
		$('section').append(result)
	});
}