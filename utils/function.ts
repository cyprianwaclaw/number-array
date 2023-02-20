export function toNumber(value:string) {
    return Number(value);
 }

export function findOutlier(numbers) {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const oddNumbers = numbers.filter(num => num % 2 === 1);
    if (evenNumbers.length === 1 && oddNumbers.length > 1) {
      return evenNumbers[0];
    } else if (oddNumbers.length === 1 && evenNumbers.length > 1) {
      return oddNumbers[0];
    } 
  }
  
  export function numerOk(numbers: any) {
    let results: ''
    if(numbers == null){
        results = 'Wszystkie liczby pasują do siebie'
    } else {
        results = numbers
    }
  return results;

  }