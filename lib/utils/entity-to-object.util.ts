export function entityToObject(entity: any) {
  return JSON.parse(JSON.stringify(entity));
}
