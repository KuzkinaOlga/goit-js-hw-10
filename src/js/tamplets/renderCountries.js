export function renderCountries(countries) {
   return countries.map(countrie => `<li class="countries_item"><img class="img_logo" src="${countrie.flags.svg}" alt="${countrie.name.official}"
  width=50 height=30><h3>${countrie.name.official}</h3></li>`);
}