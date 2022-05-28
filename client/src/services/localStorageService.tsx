const prefix = 'lunchapp';

export const getLocal = (key: string): string | null => {
  return localStorage.getItem(`${prefix}-${key}`);
}

export const setLocal = (key: string, value: string) => {
  localStorage.setItem(`${prefix}-${key}`,value);
}