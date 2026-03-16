/**
 * EASY 2: Ternaries – sett sammen flere variabler med betingelser
 * 
 * Instruks: Implementer funksjonene med ? : (ternary).
 * Unngå if/else – målet er å vise at du mestrer uttrykksformen.
 */

//  || = Logical OR, Returnerer første “truthy” verdi.
//  ?? = Nullish Coalescing, Returnerer høyre side kun hvis venstre er null eller undefined
//   | = union type (TypeScript), Verdien kan være enten string eller null
//  ? = optional parameter(first?:),  Så first kan være: string eller null eller undefined - fordi den er optional

// 1) Velg visningsnavn: first+last hvis minst én finnes, ellers username, ellers "Ukjent".
export function displayName(
  first?: string | null,
  last?: string | null,
  username?: string | null
): string | null {
  // TODO: bruk nested ternary + template literal
  return first || last ? `${first ?? ""}${first && last ? " " : ""}${last ?? ""}` : username ?? "ukjent";
} 

// 2) Karakter basert på poeng
// 90+ = "A", 80+ = "B", 70+ = "C", ellers "F"
export function grade(score: number): 'A' | 'B' | 'C' | 'F' {
  // TODO: ternary-kjede
  return score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
}

// 3) Badge: "Admin Pro", "Admin", "Pro", "Member"
export function badge(isAdmin: boolean, isPro: boolean): string {
  // TODO: kombiner flere ternaries/strings
  return isAdmin && isPro ? "Admin Pro" : isAdmin ? "Admin" : isPro ? "Pro" : "Member";
}
// is Admin true? and is Pro true? return Admin Pro
// is Admin true? and is Pro false? return Admin 
// is Admin false? and is Pro true? return Pro
// is Admin false? and is Pro false? return Member



// 4) Tekst for antall (1 => "1 item", ellers "N items")
export function countLabel(n: number): string {
  // TODO: ternary for plural
  return n === 1 ? `${n} item` : `${n} items`;
}

/** -------------------------- Self-check ---------------------------- 
 *  Kjør følgende kommando for å se om koden din kjørte
 *  npx tsx docs/1_introduction/assignment/easy/02_ternaries.ts
 *  ------------------------------------------------------------------
*/

console.log(`Answer: ${displayName('Ada', null, 'ada123')}\t\t\tExpected: Ada`); // Expected: Ada
console.log(`Answer: ${displayName(undefined, undefined, 'linus')}\t\t\tExpected: linux`); // Expected: linux
console.log(`Answer: ${displayName(undefined, undefined, undefined)}\t\t\tExpected: undefiend`); // Expected: undefiend

console.log(`Answer: ${grade(95)}\t\t\tExpected: A`); // Expected: A
console.log(`Answer: ${grade(81)}\t\t\tExpected: B`); // Expected: B
console.log(`Answer: ${grade(74)}\t\t\tExpected: C`); // Expected: C
console.log(`Answer: ${grade(12)}\t\t\tExpected: F`); // Expected: D

console.log(`Answer: ${badge(true, true)}\t\t\tExpected: Admin Pro`); // Expected: Admin Pro
console.log(`Answer: ${badge(true, false)}\t\t\tExpected: Admin`); // Expected: Admin 
console.log(`Answer: ${badge(false, true)}\t\t\tExpected: Pro`); // Expected: Pro
console.log(`Answer: ${badge(false, false)}\t\t\tExpected: Member`); // Expected: Member

console.log(`Answer: ${countLabel(1)}\t\t\tExpected: 1 item`); // Expected: 1 item
console.log(`Answer: ${countLabel(3)}\t\t\tExpected: 3 items`); // Expected: 3 items
