export default function arrFindDuelicated<T>(arr: T[]): T[] {
  return [...new Set(arr.filter((v1, i1) => arr.find((v2, i2) => i1 !== i2 && v1 === v2)))] as T[];
}
