document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const titles = document.querySelectorAll('h1');
    const contentItems = document.querySelectorAll('.content-container h2');
    const customCursor = document.querySelector('.custom-cursor');
    const body = document.body;

    function moveCursor(e) {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    }

    document.addEventListener('mousemove', moveCursor);

    circles.forEach((circle, index) => {
        circle.addEventListener('mouseenter', () => {
            body.classList.add('active');
            circle.style.backgroundColor = '#00ffcc';
            circle.style.borderColor = '#00ffcc';
            titles[index].style.color = 'black';
            const target = circle.getAttribute('data-target');
            document.getElementById(target).style.display = 'block';
            setTimeout(() => {
                document.getElementById(target).style.opacity = '1';
            }, 10);
        });

        circle.addEventListener('mouseleave', () => {
            body.classList.remove('active');
            circle.style.backgroundColor = 'transparent';
            circle.style.borderColor = 'white';
            titles[index].style.color = 'white';
            const target = circle.getAttribute('data-target');
            document.getElementById(target).style.opacity = '0';
            setTimeout(() => {
                document.getElementById(target).style.display = 'none';
            }, 300);
        });
    });
});