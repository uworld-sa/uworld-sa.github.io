document.addEventListener('DOMContentLoaded', function () {



    if (!'IntersectionObserver' in window &&
        !'IntersectionObserverEntry' in window &&
        !'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
        let myImgs = document.querySelectorAll('li');
        oldLazy(myImgs);

    } else {
        let myImgs = document.querySelectorAll('li');
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let element = entry.target;
                    let img = document.createElement('img');
                    img.src = element.dataset.src;
                    element.appendChild(img);
                    observer.unobserve(entry.target);
                }
            });
        });

        myImgs.forEach((image,key) => {
            setTimeout(function(){
                observer.observe(image);
            }, 100*key);
        });
    }

    function showElement(el) {
        let offset = el.getBoundingClientRect().top;
        if (offset < document.documentElement.clientHeight) {
            let img = document.createElement('img');
            img.src = el.dataset.src;
            el.appendChild(img);
            delete el.dataset.src;
        }
    }

    function scrollLazy() {
        let hiddenImgs = document.querySelectorAll('li[data-src]');
        hiddenImgs.forEach((image,key) => {
            showElement(image);
        });

    }

    function oldLazy(myImgs) {
        myImgs.forEach((image,key) => {
            setTimeout(function(){showElement(image)}, 100*key);
        });
        addEventListener('scroll', function(){
            scrollLazy();
        });
    }

});

