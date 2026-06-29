document.addEventListener('DOMContentLoaded', () => {
  const lightbox = GLightbox({
    selector: '.gallery-item',
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
  });

  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      items.forEach(item => {
        const visible = filter === 'all' || item.dataset.category === filter;
        item.style.display = visible ? '' : 'none';
      });
    });
  });
});
