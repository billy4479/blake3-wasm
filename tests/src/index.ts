import { greet } from 'blake3-wasm';

const span = document.getElementById('number') as HTMLSpanElement;
const button = document.getElementById('press');

button?.addEventListener('click', () => {
  const n = parseInt(span.innerText, 10);
  greet();
  span.innerText = (n + 1).toString();
});
