# JavaScript Metoder og Innebygde Funksjoner

## 1. Global Functions
- `eval()` – Evaluerer en streng som JavaScript-kode.
- `isFinite()` – Sjekker om en verdi er et endelig tall.
- `isNaN()` – Sjekker om en verdi er `NaN`.
- `parseFloat()` – Konverterer en streng til et flyttall.
- `parseInt()` – Konverterer en streng til et heltall.
- `decodeURI()` – Dekoder en URI-streng.
- `decodeURIComponent()` – Dekoder en komponent av URI.
- `encodeURI()` – Koder en URI-streng.
- `encodeURIComponent()` – Koder en komponent av URI.
- `escape()` – (Gammel) Koder en streng for bruk i URL.
- `unescape()` – (Gammel) Dekoder en URL-kodet streng.

## 2. Object Methods
- `Object.keys(obj)` – Returnerer en array med objektets egne nøkler.
- `Object.values(obj)` – Returnerer en array med objektets egne verdier.
- `Object.entries(obj)` – Returnerer en array med `[key, value]` par.
- `Object.assign(target, ...sources)` – Kopierer egenskaper fra kilder til målobjektet.
- `Object.create(proto)` – Lager et nytt objekt med spesifisert prototype.
- `Object.freeze(obj)` – Frys objektet slik at det ikke kan endres.
- `Object.seal(obj)` – Forhindrer nye nøkler i objektet, men lar eksisterende verdier endres.
- `Object.hasOwn(obj, prop)` – Sjekker om objektet har en bestemt egenskap.

## 3. Array Methods
- `push()` – Legger til elementer på slutten av en array.
- `pop()` – Fjerner og returnerer det siste elementet.
- `shift()` – Fjerner og returnerer det første elementet.
- `unshift()` – Legger til elementer i starten av en array.
- `concat()` – Slår sammen arrays til en ny array.
- `join(separator)` – Slår sammen array-elementer til en streng.
- `slice(start, end)` – Lager en kopi av del av array.
- `splice(start, deleteCount, ...items)` – Endrer array ved å fjerne og legge til elementer.
- `forEach(callback)` – Kaller en funksjon for hvert element.
- `map(callback)` – Returnerer en ny array med resultatet av funksjonen for hvert element.
- `filter(callback)` – Returnerer en ny array med elementer som oppfyller betingelsen.
- `reduce(callback, initialValue)` – Reduserer array til én verdi.
- `reduceRight(callback, initialValue)` – Reduserer array fra høyre til venstre.
- `find(callback)` – Returnerer første element som oppfyller betingelsen.
- `findIndex(callback)` – Returnerer indeks til første element som oppfyller betingelsen.
- `some(callback)` – Sjekker om minst ett element oppfyller betingelsen.
- `every(callback)` – Sjekker om alle elementer oppfyller betingelsen.
- `includes(value)` – Sjekker om array inneholder en verdi.
- `indexOf(value)` – Returnerer indeks til første forekomst av verdi.
- `lastIndexOf(value)` – Returnerer indeks til siste forekomst av verdi.
- `sort(compareFn)` – Sorterer array.
- `reverse()` – Reverserer array.
- `flat(depth)` – Flater ut nested arrays.
- `flatMap(callback)` – Map + flater ut resultatet.
- `fill(value, start, end)` – Fyller array med en verdi.
- `copyWithin(target, start, end)` – Kopierer deler av array til en annen posisjon.

## 4. String Methods
- `charAt(index)` – Returnerer tegnet på en posisjon.
- `charCodeAt(index)` – Returnerer Unicode-kode for tegnet.
- `codePointAt(index)` – Returnerer kodepunkt for tegnet.
- `concat(...strings)` – Slår sammen strenger.
- `includes(searchString)` – Sjekker om strengen inneholder substring.
- `endsWith(searchString)` – Sjekker om strengen slutter med substring.
- `startsWith(searchString)` – Sjekker om strengen starter med substring.
- `indexOf(searchString)` – Returnerer første forekomst.
- `lastIndexOf(searchString)` – Returnerer siste forekomst.
- `slice(start, end)` – Returnerer del av streng.
- `substring(start, end)` – Returnerer del av streng.
- `substr(start, length)` – Returnerer del av streng (gammel).
- `replace(search, replaceWith)` – Erstatter substring.
- `replaceAll(search, replaceWith)` – Erstatter alle forekomster.
- `toLowerCase()` – Gjør strengen små bokstaver.
- `toUpperCase()` – Gjør strengen store bokstaver.
- `trim()` – Fjerner mellomrom på begge sider.
- `trimStart()` / `trimLeft()` – Fjerner mellomrom foran.
- `trimEnd()` / `trimRight()` – Fjerner mellomrom bak.
- `split(separator)` – Deler strengen til array.
- `padStart(targetLength, padString)` – Fylt til lengde foran.
- `padEnd(targetLength, padString)` – Fylt til lengde bak.
- `repeat(count)` – Gjentar strengen flere ganger.
- `localeCompare()` – Sammenligner strenger med lokaliserte regler.

## 5. Number Methods
- `toString(radix)` – Konverterer tall til streng (evt. i base 2, 16 osv.).
- `toFixed(digits)` – Returnerer streng med spesifisert desimaler.
- `toExponential(fractionDigits)` – Returnerer streng i eksponentform.
- `toPrecision(precision)` – Returnerer streng med spesifisert presisjon.
- `valueOf()` – Returnerer primitiv verdi av objektet.

## 6. Boolean Methods
- `valueOf()` – Returnerer primitiv boolean-verdi.

## 7. Date Methods
- `Date.now()` – Returnerer timestamp (ms siden 1970-01-01).
- `Date.parse()` – Parser en dato-streng.
- `Date.UTC()` – Lager timestamp i UTC.
- `getDate()` – Henter dag i måneden.
- `getDay()` – Henter ukedag (0-6).
- `getFullYear()` – Henter år.
- `getMonth()` – Henter måned (0-11).
- `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()` – Henter tid.
- `setDate()`, `setFullYear()`, `setMonth()` – Setter dato.
- `toISOString()` – Returnerer ISO-formatert streng.
- `toUTCString()` – Returnerer UTC-streng.
- `toDateString()` – Returnerer lokal dato-streng.
- `toTimeString()` – Returnerer lokal tid-streng.

## 8. Math Methods
- `Math.abs(x)` – Absoluttverdi.
- `Math.ceil(x)` – Rund opp.
- `Math.floor(x)` – Rund ned.
- `Math.round(x)` – Rund til nærmeste heltall.
- `Math.trunc(x)` – Fjerner desimaler.
- `Math.sign(x)` – Returnerer 1, -1 eller 0.
- `Math.pow(x, y)` – x opphøyd i y.
- `Math.sqrt(x)` – Kvadratrot.
- `Math.cbrt(x)` – Kubikkrot.
- `Math.min(...values)` – Minste verdi.
- `Math.max(...values)` – Største verdi.
- `Math.random()` – Tilfeldig tall mellom 0 og 1.
- `Math.sin(x)`, `Math.cos(x)`, `Math.tan(x)` – Trigonometriske funksjoner.
- `Math.asin(x)`, `Math.acos(x)`, `Math.atan(x)` – Inverse trigonometriske funksjoner.
- `Math.log(x)` – Naturlig logaritme.
- `Math.exp(x)` – e^x.

## 9. JSON Methods
- `JSON.parse(str)` – Konverterer JSON-streng til objekt.
- `JSON.stringify(obj)` – Konverterer objekt til JSON-streng.

## 10. RegExp Methods
- `test(str)` – Sjekker om regex matcher streng.
- `exec(str)` – Returnerer match-resultater eller null.
- `match()` – Matcher regex på streng (streng-metode).
- `matchAll()` – Matcher alle forekomster (streng-metode).
- `replace()` – Erstatter regex (streng-metode).
- `search()` – Søker etter regex (streng-metode).
- `split()` – Deler streng basert på regex (streng-metode).
