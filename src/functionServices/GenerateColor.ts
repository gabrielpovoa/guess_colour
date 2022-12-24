export const generateRandomColor = () => {
    const digits = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += digits[Math.floor(Math.random() * 16)];
    }
    return color;
  }