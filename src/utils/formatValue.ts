const formatValue = (value: number | Date): string => {
  if (value instanceof Date) {
    return Intl.DateTimeFormat('pt-BR').format(new Date(value));
  }
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);
};

export default formatValue;
