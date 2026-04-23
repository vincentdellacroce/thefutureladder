// Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.closest('.tab-group');
    group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    group.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    group.querySelector('#' + btn.dataset.tab).classList.add('active');
  });
});

// Accordions
document.querySelectorAll('.accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const body = trigger.nextElementSibling;
    const arrow = trigger.querySelector('.acc-arrow');
    const isOpen = body.classList.contains('open');
    body.classList.toggle('open', !isOpen);
    if (arrow) arrow.textContent = isOpen ? '+' : '−';
  });
});

// Search filter for major cards
const searchBar = document.getElementById('major-search');
if (searchBar) {
  searchBar.addEventListener('input', () => {
    const q = searchBar.value.toLowerCase();
    document.querySelectorAll('.major-card').forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(q) ? '' : 'none';
    });
  });
}

// Animate salary numbers on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.salary-cell').forEach(cell => observer.observe(cell));
