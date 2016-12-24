$(document).ready(function () {
            $('.go_to').click(function () { // ловим клик по ссылке с классом go_to
                var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
                if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
                    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
                }
                return false; // выключаем стандартное действие
            });

            

        });
        function forw1() {
           

            $('#w1>.param_block>i').css('color', '#308fe0');
            $('#w1>.param_block>h3').css('color', '#333');
            $('#w1>.param_block>p').css('color', '#333');
            $('#w1>.param_block>h3').css('visibility', 'visible');
            $('#w1>.param_block>p').css('visibility', 'visible');
            $('#w1>.param_block>i').css('font-size', '100px');
        };

        function forw2() {
            $('#w2>.param_block>i').css('color', '#308fe0');
            $('#w2>.param_block>h3').css('color', '#333');
            $('#w2>.param_block>p').css('color', '#333');
            $('#w2>.param_block>h3').css('visibility', 'visible');
            $('#w2>.param_block>p').css('visibility', 'visible');
            $('#w2>.param_block>i').css('font-size', '100px');

        };
        function forw3() {
            $('#w3>.param_block>i').css('color', '#308fe0');
            $('#w3>.param_block>h3').css('color', '#333');
            $('#w3>.param_block>p').css('color', '#333');
            $('#w3>.param_block>h3').css('visibility', 'visible');
            $('#w3>.param_block>p').css('visibility', 'visible');
            $('#w3>.param_block>i').css('font-size', '100px');
        };
        function forw4() {
            $('#w4>.param_block>i').css('color', '#308fe0');
            $('#w4>.param_block>h3').css('color', '#333');
            $('#w4>.param_block>p').css('color', '#333');
            $('#w4>.param_block>h3').css('visibility', 'visible');
            $('#w4>.param_block>p').css('visibility', 'visible');
            $('#w4>.param_block>i').css('font-size', '100px');
        };
        function forw5() {
            $('#w5>.param_block>i').css('color', '#308fe0');
            $('#w5>.param_block>h3').css('color', '#333');
            $('#w5>.param_block>p').css('color', '#333');
            $('#w5>.param_block>h3').css('visibility', 'visible');
            $('#w5>.param_block>p').css('visibility', 'visible');
            $('#w5>.param_block>i').css('font-size', '100px');
        };
        function forw6() {
            $('#w6>.param_block>i').css('color', '#308fe0');
            $('#w6>.param_block>h3').css('color', '#333');
            $('#w6>.param_block>p').css('color', '#333');
            $('#w6>.param_block>h3').css('visibility', 'visible');
            $('#w6>.param_block>p').css('visibility', 'visible');
            $('#w6>.param_block>i').css('font-size', '100px');
        };