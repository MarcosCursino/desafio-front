export function formatedDate(dateValue: string) {
  let date = dateValue;
  let result = date.split("-");

  return result[0];
}
