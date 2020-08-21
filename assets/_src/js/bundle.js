const hero = document.querySelector('#hero');

const lorem = (length) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from(Array(length)).map(
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join('');
};

setInterval(() => {
  hero.dataset.lorem = lorem(24);
}, 3000);
