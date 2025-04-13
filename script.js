const tabs = document.querySelectorAll('.tab');
  const sections = document.querySelectorAll('.menu-section');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(tab.dataset.category).classList.add('active');
    });
  });