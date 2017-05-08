const endpoint = 'https://gist.githubusercontent.com/sharanvkaur/d89519946ae07d1a1422d5b37c8cd576/raw/3f8267ed31e3162681602a37f4c969cfec951304/got.json'

const episodes = []

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => episodes.push(...data))

function findMatches (wordToMatch, episodes) {
  return episodes.filter(ep => {
    const regex = new RegExp(wordToMatch, 'gi')
    return ep.title.match(regex) || ep.summary.match(regex)
  })
}

function displayMatches() {
  const matchArray = findMatches(this.value, episodes)

  const html = matchArray.map(ep => {
    const regex = new RegExp(this.value, 'gi')
    const epTitle = ep.title.replace(regex, `<span class ="highlight">${this.value}</span>`)
    const epSummary = ep.summary.replace(regex, `<span class ="highlight">${this.value}</span>`)

    return `
    <li>
    <div>
    <img src="${ep.image}"/>
    <p>
    <strong>${epTitle}</strong> - S${ep.season} x E${ep.epno}
    <br>
    ${epSummary}
    </p>
    </div>
    </li>
    `
  }).join('')
  suggestions.innerHTML = html
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)
