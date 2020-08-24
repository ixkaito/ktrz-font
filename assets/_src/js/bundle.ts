const hero = document.querySelector("#hero") as HTMLElement;

const lorem = (length: number) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from(Array(length)).map(
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join('');
};

hero.dataset.lorem = lorem(24);
setInterval(() => {
  hero.dataset.lorem = lorem(24);
}, 3000);
