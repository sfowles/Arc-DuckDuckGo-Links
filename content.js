const query = queryParams().q.replace(/\+/g, ' ');

// Comment out, or add, your chosen sites here:

const wikipediaLink = 'https://en.wikipedia.org/wiki/' + encodeURIComponent(query);
addLink('W', 'Wikipedia', wikipediaLink);

// const redditLink = 'https://www.reddit.com/search/?q=' + encodeURIComponent(query);
// addLink('👾', 'Reddit', redditLink);

// const twitterLink = 'https://twitter.com/search?q=' + encodeURIComponent(query);
// addLink('🐥', 'Twitter', twitterLink);

// const amazonLink = 'https://www.amazon.com/s?k=' + encodeURIComponent(query);
// addLink('😳', 'Amazon', amazonLink);

// BELOW THIS are helper functions. You can ignore them if you want, or tweak them :)

function queryParams() {
  var query = location.search.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

function createLink(symbol, name, url) {
  const li = document.createElement('li');
  li.classList.add('zcm__item');

  const a = document.createElement('a');
  a.classList.add('zcm__link');

  const icon = document.createElement('span');
  icon.innerText = symbol;
  icon.style.marginRight = '0.5em';
  icon.style.fontWeight = 'bold';

  li.append(a);
  a.append(icon);
  a.append(name);

  a.setAttribute('href', url);
  return li;
}

function addLink(symbol, name, url) {
  const link = createLink(symbol, name, url);
  document.querySelector('#duckbar_static').appendChild(link);
}
