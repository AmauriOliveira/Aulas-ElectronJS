const View = {
  render({ minutes, seconds }) {
    document.getElementById('timer').innerHTML = `
      <p>Próximo post em</p>
      <span>${minutes}:${seconds}</span>
    `;
  },
};

export { View };
