/**
 * MEDIUM: URL-safe parser
 * Vi bruker innebygde URL/URLSearchParams for trygg parsing.
 * Krav:
 * - parseQuery: tar "?a=1&b=hei%20på%20deg" ELLER "a=1&b=..." og returnerer et objekt
 *   (siste forekomst vinner ved duplikate keys)
 * - parseUrl: tar en URL (absolutt eller relativ), returnerer { path, query }
 */

// 1) parseQuery: bygg et enkelt Record<string,string>
export function parseQuery(qs: string): Record<string, string> {
  const out: Record<string, string> = {};
  // Record = returnerer et Objekt med satt verdi 
  // TODO:
  // - fjern ledende '?'
  // - bruk new URLSearchParams(...)
  // - for ... of (params) og legg inn i out (senere forekomst vinner)
  
  // Fjern ledende '?' hvis query-strengen starter med '?'
if(qs.startsWith("?")){
  qs = qs.slice(1)
}

  // Ex inn: "a=1&b=hei%20på%20deg"
  const para = new URLSearchParams(qs);
  //! new URLSearchParams() - returnerer alltid (Key også Value) i den rekkefølgen.
  // Ex: out: [("a", "1"), ("b", "hei på deg")]
  // Ex: Key = "a", Value = "1"

  //! .forEach() - Første parameter er alltid Value. Andre parameter er alltid Key. (Value, også Key) i den rekkefølgen.
  para.forEach((value, key) => {
    // Iterer gjennom hvert par og legg det inn i 'out'
    // Hvis nøkkelen allerede finnes, overskrives den (siste vinner)
    out[key] = value;
    // Sett i objektet "out" et element med nøkkelen key og verdien value.
  })
    return out;
}


// 2) parseUrl: håndter både absolutte og relative URL-er
export function parseUrl(input: string): { path: string; query: Record<string, string> } {
  // TODO:
  // - new URL(input, 'http://example')
  // - hent .pathname og .search
  // - parseQuery(...)
  
  const url = new URL(input, "http://example");
  
  const path = url.pathname;
  const queryStr = url.search;

  const query = parseQuery(queryStr);

 
  return { path, query };
}

/** -------------------------- Self-check ----------------------------
 *  Kjør følgende kommando for å se om koden din kjørte
 * 
 *  npx tsx docs/1_introduction/assignment/medium/09_parsing.ts
 *  ------------------------------------------------------------------
*/
console.log(`Answer: ${JSON.stringify(parseQuery('?q=react%20hooks&page=1'))}\tExpected: {"q":"react hooks","page":"1"}`);
console.log(`Answer: ${JSON.stringify(parseQuery('lang=nb&x=%E2%9C%93'))}\t\tExpected: {"lang":"nb","x":"✓"}`);

console.log(`Answer: ${JSON.stringify(parseUrl('/search?q=hei+verden&x=1'))}\tExpected: {"path":"/search","query":{"q":"hei verden","x":"1"}}`);
console.log(
  `Answer: ${JSON.stringify(parseUrl('https://example.com/a/b?tag=a&tag=b'))}\tExpected: {"path":"/a/b","query":{"tag":"b"}}`
);
