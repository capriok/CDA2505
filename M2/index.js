const API_KEY = 'AIzaSyBqX9mB4G8Mtnc-oVIrb_2DSnf681_SuSw'

$('form').submit(e => executeSearch(e))

gapi.load("client", loadClient);

function loadClient() {
	gapi.client.setApiKey(API_KEY);
	return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
		.then(() => console.log("GAPI client Ready"),
			(err) => console.error("GAPI Client Error", err)
		)
}


function executeSearch(e) {
	e.preventDefault()
	const searchValue = $('.search-input').val();
	const searchCount = $('.search-count').val();

	if (!searchValue) return alert('Enter a Search Value.')
	if (!searchCount) $('.search-count').val('3')

	var config = {
		"part": 'snippet',
		"type": 'video',
		"q": searchValue,
		"maxResults": parseInt(searchCount)
	};

	return gapi.client.youtube.search.list(config)
		.then((response) => {
			const results = response.result.items;
			RenderResults(results);
		},
			(err) => console.error("Execute error", err)
		)
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