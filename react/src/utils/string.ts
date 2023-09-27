export const toLocale = (num:number) => {
  return num.toLocaleString();
}

interface AddUnit {
  (unit: string): (value: number) => string;
  (unit: string, value: number): string;
}

export const addUnit: AddUnit = (unit:string, value?:number):any => {
  if(value) {
    return String(value)+unit;
  }
  return (value:number) => {
    return String(value)+unit
  }
}

export const addPx = addUnit('px')