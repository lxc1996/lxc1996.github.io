var box = document.getElementById('box');
        var screenBox = box.children[0];
        var imgWidth = screenBox.offsetWidth;
        var ul = screenBox.children[0];
        var ulLis = ul.children;
        var ol = screenBox.children[1];
        var olLis = ol.children;
        var arrBox = box.children[1];
        var arrLeft = arrBox.children[0];
        var arrRight = arrBox.children[1];

        for (var i = 0; i < ulLis.length; i++) {
            var li = document.createElement('li');
            li.innerText = i + 1;
            ol.appendChild(li);
        }

        olLis[0].classList.add('current');

        for (var i = 0; i < olLis.length; i++) {

            olLis[i].dataset.index = i;

            olLis[i].onclick = function () {

                if (count === ulLis.length - 1) {

                    ul.style.left = 0;

                }

                for (var i = 0; i < olLis.length; i++) {

                    olLis[i].classList.remove('current');

                }

                this.classList.add('current');

                var target = -this.dataset.index * imgWidth;

                move(ul, target);

                count = this.dataset.index;

            };
        }

        box.addEventListener('mouseover', function () {

            arrBox.style.display = 'block';

        });

        box.addEventListener('mouseout', function () {

            arrBox.style.display = 'none';

        });

        //设置一个变量用于记录滚出去的张数.
        var count = 0;

        //克隆ul的最后一张图片并且放入到ul中.
        ul.appendChild(ulLis[0].cloneNode(true));

        arrRight.onclick = function () {
            if (count === ulLis.length - 1) {
                ul.style.left = 0;
                count = 0;
            }

            count++;

            var target = -count * imgWidth;

            move(ul, target);

            for (var i = 0; i < olLis.length; i++) {
                olLis[i].classList.remove('current');
            }

            if (count === ulLis.length - 1) {
                olLis[0].classList.add('current');
            } else {
                olLis[count].classList.add('current');
            }

        };

        arrLeft.onclick = function () {
            if (count === 0) {
                ul.style.left = -(ulLis.length - 1) * imgWidth + 'px';
                count = ulLis.length - 1;
            }

            count--;
            var target = -count * imgWidth;
            move(ul, target);
            for (var i = 0; i < olLis.length; i++) {
                olLis[i].classList.remove('current');
            }
            olLis[count].classList.add('current');
        };

        var timer = setInterval(function () {
            arrRight.click();
        }, 3000);

        box.addEventListener('mouseover', function () {
            clearInterval(timer);
        });

        box.addEventListener('mouseout', function () {
            timer = setInterval(function () {
                arrRight.click();
            }, 3000);
        });

        function move(element, target) {
            clearInterval(element.timer);
            element.timer = setInterval(function () {
                var current = element.offsetLeft;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style.left = current + 'px';

                if (current === target) {
                    clearInterval(element.timer);
                }
            }, 20);
        }