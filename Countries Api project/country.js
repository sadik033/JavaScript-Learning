const countryName = new URLSearchParams(location.search).get('name');
const flagImage = document.querySelector('.country-details img')
const CountryNameH1 = document.querySelector('.country-details h1')
const nativeName = document.querySelector('.native-Name')
const population = document.querySelector('.population')
const Region = document.querySelector('.Region')
const subRegion = document.querySelector('.sub-Region')
const capital = document.querySelector('.capital')
const topLevelDomain = document.querySelector('.top-level-domain')
const currencies = document.querySelector('.currencies')
const language = document.querySelector('.language')
const borderCountries = document.querySelector('.border-countries')


fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res) => res.json())
.then(([country]) => {

    console.log(country.borders);
    flagImage.src= country.flags.svg
    CountryNameH1.innerText = country.name.common
    population.innerText = country.population.toLocaleString('en-IN')
    Region.innerText = country.region
    if(country.subregion){
        subRegion.innerText = country.subregion
    }
   if(country.capital){
    capital.innerText = country.capital?.[0]
   }
    topLevelDomain.innerText = country.tld.join(', ')

    if(country.name.nativeName){
        nativeName.innerText= Object.values(country.name.nativeName)[0].common
    }
    else{
        nativeName.innerText= country.name.common
    }
    if(country.currencies){
        currencies.innerText=Object.values(country.currencies).map((currency) => currency.name).join(', ')
    }
    if(country.languages){
        language.innerText= Object.values(country.languages).join(', ')
    }
    if(country.borders){
        country.borders.forEach((border) =>{
            
            fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res) => res.json())
            .then(([borderCountry]) =>{
                // console.log(borderCountry);
                const borderCountryTag = document.createElement('a')
                borderCountryTag.innerText = borderCountry.name.common
                borderCountryTag.href = `country.html?name=${borderCountry.name.common}`
                // console.log(borderCountryTag);
                borderCountries.append(borderCountryTag)
            })
        })
    }
    
})
                    