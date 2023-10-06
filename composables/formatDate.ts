export const formatDate = (date: string) => {
  return new Date(date).toLocaleString([], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
