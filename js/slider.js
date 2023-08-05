 $(document).ready(function () {
            // Initialize the slider
            var slider = $('.slider-list').bxSlider({
                auto: true,
                controls: false,
                pager: true,
                 touchEnabled: false,
                slideWidth: 500, // Ширина каждого слайда (3 слайда * 1000px)
                minSlides: 4, // Минимальное количество видимых слайдов
                maxSlides: 4, // Максимальное количество видимых слайдов
                moveSlides: 4, // Количество слайдов, прокручиваемых за один раз
                slideMargin: 20 // Отступ между слайдами

            });


        });