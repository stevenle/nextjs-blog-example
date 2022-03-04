export function getClassName(...classNames: Array<string | null | undefined>): string {
  return classNames.filter(n => !!n).join(' ');
}
