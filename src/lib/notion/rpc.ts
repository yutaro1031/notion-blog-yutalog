export function values(obj: any) {
  const vals: any = [];

  Object.keys(obj).forEach((key) => {
    vals.push(obj[key]);
  });
  return vals;
}
