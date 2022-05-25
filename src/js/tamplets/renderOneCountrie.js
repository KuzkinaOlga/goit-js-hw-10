export function renderOneCountrie(countries) {
    const languages = Object.values(countries[0].languages)
    
    return countries.map(countrie => `<div><div class="countrie_logo"><img src="${countrie.flags.svg}" alt="${countrie.name.official}"
  width=70 height=40><h3 class="countrie_name">${countrie.name.official}</h3></div><p><span class="text_normal">Capital: </span>${countrie.capital}</p><p><span class="text_normal">Population: </span>${countrie.population}</p><p><span class="text_normal">Languages: </span>${languages.map(language => language).join(', ')}</p></div>`)
}