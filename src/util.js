export default function addClassToBody(mode) {
  const body = document.body;
  if (mode === 'light') {
    body.classList.remove('dark');
    body.classList.add(mode);
  } else {
    body.classList.remove('light');
    body.classList.add(mode);
  }
}
