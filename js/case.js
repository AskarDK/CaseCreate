 window.addEventListener('DOMContentLoaded', (event) => {
            const importImage = document.getElementById('import-image');
            const caseBackground = document.getElementById('casee');
            const caseImage = document.getElementById('caseimage');
            const filterButtons = document.querySelectorAll('.filter-button');

            let isDragging = false;
            let prevX = 0;
            let prevY = 0;
            let backgroundX = 0;
            let backgroundY = 0;
            let scale = 1;

            importImage.addEventListener('change', (e) => {
                const file = e.target.files[0];
                const reader = new FileReader();

                reader.onload = (readerEvent) => {
                    caseBackground.style.backgroundImage = `url(${readerEvent.target.result})`;
                };

                reader.readAsDataURL(file);
            });

            caseBackground.addEventListener('mousedown', (e) => {
                prevX = e.clientX;
                prevY = e.clientY;
                isDragging = true;
            });

            caseBackground.addEventListener('mousemove', (e) => {
                if (isDragging) {
                    const deltaX = e.clientX - prevX;
                    const deltaY = e.clientY - prevY;

                    backgroundX += deltaX;
                    backgroundY += deltaY;

                    prevX = e.clientX;
                    prevY = e.clientY;

                    caseBackground.style.backgroundPosition = `${backgroundX}px ${backgroundY}px`;
                }
            });

            caseBackground.addEventListener('mouseup', () => {
                isDragging = false;
            });

            caseBackground.addEventListener('mouseleave', () => {
                isDragging = false;
            });

            

            filterButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    const filterName = button.getAttribute('data-filter');
                    caseBackground.style.filter = filterName === 'none' ? 'none' : `url(#${filterName})`;
                });
            });
        });


 const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Удаляем класс активности у всех кнопок
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    // Добавляем класс активности к нажатой кнопке
    button.classList.add('active');
  });
});
