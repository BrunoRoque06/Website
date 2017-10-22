(() => {
    class Model {
        getHeader() {
            return `<header>
            <div class="row">
                <div class="col-2 header__logo">
                    <img src="img/chess.svg" alt="Chess">
                </div>
                <div class="col-8 header__title">
                    <h2>Bruno Roque</h2>
                    <h3>Software Engineer</h3>
                </div>
                <div class="col-2 header__menu">
                    <a id="menu">&#9776;</a>
                </div>
            </div>
        </header>
        <div class="nav_container">
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item"><a href="index" rel="noopener">About</a></li>
                    <li class="nav__item"><a href="code" rel="noopener">Code Mastery</a></li>
                    <li class="nav__item"><a href="https://github.com/BrunoRoque06/" target="_blank" rel="noopener">Projects</a></li>
                </ul>
            </nav>
        </div>`;
        }

        getFooter() {
            return `<footer>
            <div class="row">
                <a href="docs/BrunoRoqueCv.pdf" target="_blank" rel="noopener"><svg class="footer__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.162 240.162"><path d="M39.818 72.494h97.652c3.866 0 7-3.134 7-7s-3.134-7-7-7H39.818c-3.866 0-7 3.134-7 7s3.134 7 7 7zM39.818 96.543h97.652c3.866 0 7-3.134 7-7s-3.134-7-7-7H39.818c-3.866 0-7 3.134-7 7s3.134 7 7 7zM91.477 178.738h-51.66c-3.865 0-7 3.134-7 7s3.135 7 7 7h51.66c3.865 0 7-3.134 7-7s-3.134-7-7-7z"/><path d="M236.763 20.91l-20.58-12.347c-1.592-.955-3.498-1.24-5.3-.79-1.8.45-3.35 1.6-4.304 3.19l-35.83 59.714v-42.32c0-3.866-3.134-7-7-7H7c-3.866 0-7 3.134-7 7v197.24c0 3.866 3.134 7 7 7h156.75c3.866 0 7-3.134 7-7v-81.062l68.414-114.02c1.99-3.315.914-7.614-2.4-9.604zM146.36 157.973l-11.616 9.643 3.042-14.788L204.938 40.91l8.575 5.145-67.152 111.917zM220.717 34.05l-8.575-5.145 2.843-4.736 8.575 5.144-2.842 4.736zM14 218.597V35.357h142.75V94.01l-12.363 20.604c.05-.335.083-.674.083-1.022 0-3.866-3.134-7-7-7H39.818c-3.866 0-7 3.134-7 7s3.134 7 7 7h97.652c1.56 0 2.993-.516 4.156-1.377l-6.856 11.426H39.818c-3.866 0-7 3.135-7 7s3.134 7 7 7h86.552l-1.204 2.007c-.406.677-.695 1.418-.854 2.19l-1.203 5.852H39.817c-3.866 0-7 3.133-7 7s3.134 7 7 7h80.41l-3.216 15.638c-.6 2.91.706 5.883 3.255 7.413 1.114.67 2.36 1 3.6 1 1.598 0 3.186-.546 4.473-1.615l27.88-23.142c.19-.16.357-.344.53-.52v51.134H14z"/></svg></a>
                <a href="https://www.linkedin.com/in/BrunoRoque06" target="_blank" rel="noopener"><svg class="footer__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.5 438.5"><path d="M414.4 24.1C398.3 8 379 0 356.3 0H82.2C59.6 0 40.2 8 24.1 24.1 8 40.2 0 59.6 0 82.2v274.1c0 22.6 8 42 24.1 58.1 16.1 16.1 35.5 24.1 58.1 24.1h274.1c22.6 0 42-8 58.1-24.1 16.1-16.1 24.1-35.5 24.1-58.1V82.2C438.5 59.6 430.5 40.2 414.4 24.1zM133.6 367.2H67.7V169h66V367.2zM127.6 132.3c-6.9 6.6-15.9 9.9-27.1 9.9h-0.3c-10.8 0-19.6-3.3-26.4-9.9 -6.8-6.6-10.1-14.7-10.1-24.4 0-9.9 3.5-18.1 10.4-24.6 7-6.5 15.9-9.7 27-9.7 11 0 19.9 3.2 26.6 9.7 6.7 6.5 10.1 14.7 10.3 24.6C137.9 117.6 134.5 125.8 127.6 132.3zM370.9 367.2h-66v-105.9c0-29.9-11-44.8-33.1-44.8 -8.4 0-15.4 2.3-21.1 7 -5.7 4.7-10 10.3-12.8 17 -1.3 3.4-2 8.8-2 16v110.8h-66c0.6-119.5 0.6-185.6 0-198.1h66v28c13.9-21.7 33.6-32.5 59.1-32.5 22.8 0 41.2 7.5 55.1 22.6 13.9 15 20.8 37.2 20.8 66.5v113.6H370.9z"/></svg></a>
                <a href="https://github.com/BrunoRoque06/" target="_blank" rel="noopener"><svg class="footer__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.5 438.5"><path d="M409.1 114.6c-19.6-33.6-46.2-60.2-79.8-79.8C295.7 15.2 259.1 5.4 219.3 5.4c-39.8 0-76.5 9.8-110.1 29.4 -33.6 19.6-60.2 46.2-79.8 79.8C9.8 148.2 0 184.9 0 224.6c0 47.8 13.9 90.7 41.8 128.9 27.9 38.2 63.9 64.6 108.1 79.2 5.1 1 8.9 0.3 11.4-2 2.5-2.3 3.7-5.1 3.7-8.6 0-0.6 0-5.7-0.1-15.4 -0.1-9.7-0.1-18.2-0.1-25.4l-6.6 1.1c-4.2 0.8-9.5 1.1-15.8 1 -6.4-0.1-13-0.8-19.8-2 -6.9-1.2-13.2-4.1-19.1-8.6 -5.9-4.5-10.1-10.3-12.6-17.6l-2.9-6.6c-1.9-4.4-4.9-9.2-9-14.6 -4.1-5.3-8.2-8.9-12.4-10.8l-2-1.4c-1.3-1-2.6-2.1-3.7-3.4 -1.1-1.3-2-2.7-2.6-4 -0.6-1.3-0.1-2.4 1.4-3.3 1.5-0.9 4.3-1.3 8.3-1.3l5.7 0.9c3.8 0.8 8.5 3 14.1 6.9 5.6 3.8 10.2 8.8 13.8 14.8 4.4 7.8 9.7 13.8 15.8 17.8 6.2 4.1 12.4 6.1 18.7 6.1 6.3 0 11.7-0.5 16.3-1.4 4.6-1 8.8-2.4 12.8-4.3 1.7-12.8 6.4-22.6 14-29.4 -10.8-1.1-20.6-2.9-29.3-5.1 -8.7-2.3-17.6-6-26.8-11.1 -9.2-5.1-16.9-11.5-23-19.1 -6.1-7.6-11.1-17.6-15-30 -3.9-12.4-5.9-26.6-5.9-42.8 0-23 7.5-42.6 22.6-58.8 -7-17.3-6.4-36.7 2-58.2 5.5-1.7 13.7-0.4 24.6 3.9 10.9 4.3 18.8 8 23.8 11 5 3 9.1 5.6 12.1 7.7 17.7-4.9 36-7.4 54.8-7.4s37.1 2.5 54.8 7.4l10.8-6.8c7.4-4.6 16.2-8.8 26.3-12.6 10.1-3.8 17.8-4.9 23.1-3.1 8.6 21.5 9.3 40.9 2.3 58.2 15 16.2 22.6 35.8 22.6 58.8 0 16.2-2 30.5-5.9 43 -3.9 12.5-8.9 22.5-15.1 30 -6.2 7.5-13.9 13.9-23.1 19 -9.2 5.1-18.2 8.9-26.8 11.1 -8.7 2.3-18.4 4-29.3 5.1 9.9 8.6 14.8 22.1 14.8 40.5v60.2c0 3.4 1.2 6.3 3.6 8.6 2.4 2.3 6.1 3 11.3 2 44.2-14.7 80.2-41.1 108.1-79.2 27.9-38.2 41.8-81.1 41.8-128.9C438.5 184.9 428.7 148.2 409.1 114.6z"/></svg></a>
            </div>
            <div class="row">
                Bruno Roque | &#169; 2017 All Rights Reserved
            </div>
        </footer>`;
        }
    }

    class View {
        prependBody(element) {
            const body = $('body');
            body.prepend(element);
        }

        appendBody(element) {
            const body = $('body');
            body.append(element);
        }

        addMenuEventListener() {
            const menu = document.querySelector('#menu');
            const drawer = document.querySelector('.nav');

            menu.addEventListener('click', function (e) {
                drawer.classList.toggle('open');
                e.stopPropagation();
            });

            document.querySelector('body').addEventListener('click', function () {
                drawer.classList.remove('open');
            });
        }
    }

    class Controller {
        constructor(model, view) {
            this.model = model;
            this.view = view;
        }

        prependHeader() {
            view.prependBody(model.getHeader());
        }

        appendFooter() {
            view.appendBody(model.getFooter());
        }
    }

    const model = new Model();
    const view = new View();
    const controller = new Controller(model, view);

    controller.prependHeader();
    controller.appendFooter();
    view.addMenuEventListener();
})()