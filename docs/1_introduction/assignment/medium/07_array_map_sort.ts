/**
 * MEDIUM: Array – map & sort (uten å mutere originalen)
 * Mål:
 * - Bruke map for å transformere data
 * - Sortere tall/strenger/objekter
 * - Lage sorterings-kopier (ikke muter originalen)
 */

//! npx tsx docs/1_introduction/assignment/medium/07_array_map_sort.ts

// 1) doubleAll: returner ny liste med alle tall * 2
export function doubleAll(nums: number[]): number[] {

  const newNums: number[] = nums.map(num => num * 2)
  return newNums;
}

// 2) trimAll: trim whitespace på hvert navn
export function trimAll(names: string[]): string[] {
  
  const mn: string[] = names.map(name => name.trim())
  return mn;
}

// 3) sortedNumbersAsc: returner SORTERT KOPI stigende (ikke mutér input!)
export function sortedNumbersAsc(nums: number[]): number[] {

  const sN = [...nums].sort((a, b) => a- b)
  return sN;
}

// 4) sortedNumbersDesc: returner sortert kopi synkende
export function sortedNumbersDesc(nums: number[]): number[] {

  const nD = [...nums].sort((b, a) => b - a)
  return nD;
}

// 5) case-insensitive sort på strenger (kopi)
export function sortedNamesCaseInsensitive(names: string[]): string[] {

  const sN = [...names].sort((a, b) => a.localeCompare(b, "no"));
  return sN;
}

// 6) sorter objekter på 'name' (A→Å) som kopi
type User = { id: number; name: string; age: number };

export function sortUsersByName(users: User[]): User[] {

  const deepCopy = structuredClone(users);
  return deepCopy.sort((a, b) => a.name.localeCompare(b.name, "no"));
}

// 7) sorter objekter på 'age' (lav→høy) som kopi
export function sortUsersByAge(users: User[]): User[] {

  const deepCopyNum = structuredClone(users);
  
  return deepCopyNum.sort((a, b) => a.age - b.age)
}

/** -------------------------- Self-check ----------------------------
 *  Kjør følgende kommando for å se om koden din kjørte
 *  npx tsx tasks/js-recap/medium/01_array_map_sort.ts
 *  ------------------------------------------------------------------
*/
const nums = [3, 1, 2];
console.log(`Answer: ${JSON.stringify(doubleAll(nums))}\t\t\tExpected: [6,2,4]`);
console.log(`Answer: ${JSON.stringify(trimAll(['  Ada ', ' Linus']))}\t\tExpected: ["Ada","Linus"]`);

const asc = sortedNumbersAsc(nums);
const desc = sortedNumbersDesc(nums);
console.log(`Answer: ${JSON.stringify(asc)}\t\t\tExpected: [1,2,3]`);
console.log(`Answer: ${JSON.stringify(desc)}\t\t\tExpected: [3,2,1]`);
console.log(`Answer: ${JSON.stringify(nums)}\t\t\tExpected: [3,1,2]`);

console.log(`Answer: ${JSON.stringify(sortedNamesCaseInsensitive(['b','A','å']))}\tExpected: ["A","b","å"]`);

const users: User[] = [
  { id: 1, name: 'Linus', age: 50 },
  { id: 2, name: 'ada', age: 36 },
  { id: 3, name: 'Grace', age: 45 },
];
console.log(`Answer: ${JSON.stringify(sortUsersByName(users).map(u => u.name))}\tExpected: ["ada","Grace","Linus"]`);
console.log(`Answer: ${JSON.stringify(sortUsersByAge(users).map(u => u.age))}\t\tExpected: [36,45,50]`);
console.log(`Answer: ${JSON.stringify(users.map(u => u.name))}\t\tExpected: ["Linus","ada","Grace"]`);
