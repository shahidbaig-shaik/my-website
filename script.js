document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.tab-link');
    const sections = document.querySelectorAll('.tab-content');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.dataset.tab;

            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            sections.forEach(sec => {
                sec.classList.toggle('active', sec.id === target);
            });
        });
    });
});
