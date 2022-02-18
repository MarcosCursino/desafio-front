export function toCurrency(value: string | number): string {
  const formatter = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(Number(value));
}

export function formatedDate(dateValue: string) {
  let date = dateValue;
  let result = date.split("-");

  return result[0];
}