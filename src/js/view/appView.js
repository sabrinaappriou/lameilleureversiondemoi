'use strict';

import View from "./View";
import data from "../json/data.json"

class App extends View {
    #sections;
    #images;
    #data;

    constructor(data) {
        super();
        return (async () => {
            this.#data = data;
            await this._init();
        })();
    }

    async _revealSection(delay = 0) {
        const reveal = function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.classList.remove('section-hidden');
                    observer.unobserve(entry.target);
                }, delay);
            });
        };
        const sectionObserver = new IntersectionObserver(reveal, { root: null, threshold: 0.15 });
        this.#sections.forEach(function (section) {
            sectionObserver.observe(section);
            section.classList.add('section-hidden');
        });
    }

    async _revealImage(delay = 0) {
        const reveal = function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.src = (!entry.target.dataset.src) ? entry.target.src : entry.target.dataset.src;
                    entry.target.addEventListener('load', function () {
                        this.classList.add('reveal');

                    })
                    observer.unobserve(entry.target);
                }, delay);
            });
        }
        const imageObserver = new IntersectionObserver(reveal, { root: null, threshold: 0, rootMargin: '55px' });
        this.#images.forEach(function (image) {
            imageObserver.observe(image);
        });
    }

    async _revealAbout(delay = 0) {
        const reveal = function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                setTimeout(() => {
                    entry.target.classList.add('in');
                    observer.unobserve(entry.target);
                }, delay);
            });
        };
        const timelineObserver = new IntersectionObserver(reveal, { root: null, threshold: 0, rootMargin: '55px' });
        this.aboutContainer.querySelectorAll('li').forEach(function (li) {
            timelineObserver.observe(li);
        });
    }

    async _renderTeam() {
        this.#data.team.forEach((ele, index) => {
            this.teamContainer.insertAdjacentHTML('beforeend', `
                <div class="col-lg-${12 / team.length}">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="assets/img/team/${ele.img}" alt="..." />
                        <h4>${ele.name}</h4>
                        <p class="text-muted">${ele.function}</p>
                        <a class="btn btn-primary btn-social mx-2 shadow" href="${ele.instagram}"><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-primary btn-social mx-2 shadow" href="${ele.facebook}"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-primary btn-social mx-2 shadow" href="${ele.linkedIn}"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            `);
        });
    }

    async _renderAbout() {
        this.#data.about.forEach((ele, index) => {
            this.aboutContainer.insertAdjacentHTML('beforeend', `
                <li${(index % 2 === 1 ? ' class="timeline-inverted"' : '')}>
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/${ele.img}"
                            alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>${ele.date}</h4>
                            <h4 class="subheading">${ele.title}</h4>
                        </div>
                        <div class="timeline-body">
                            <p class="text-muted">${ele.text}</p>
                        </div>
                    </div>
                </li >
            `);
        });
    }

    async _renderSkill() {
        this.#data.skill.forEach((ele, index) => {
            this.skillsContainer.insertAdjacentHTML('beforeend', `
                <div class="col-lg-4 col-sm-6 mb-4">
                    <!-- Portfolio item ${1 + index} -->
                    <div class="portfolio-item shadow">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal${1 + index}">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/expertise/small/${ele.img}" data-src="assets/img/expertise/preview/${ele.img}" alt="${ele.title}" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">${ele.title}</div>
                            <!-- <div class="portfolio-caption-subheading text-muted">Illustration</div> -->
                        </div>
                    </div>
                    <div class="modal fade" id="portfolioModal${1 + index}" tabindex="-1" aria-labelledby="modalLabel-${1 + index}"
                    aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel-${index}"><span class="text-uppercase text-primary">${ele.title}</span></h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="text-center mb-4"><img src="assets/img/expertise/${ele.img}" alt="${ele.title}" class="w-50 rounded shadow"></div>
                                    ${ele.text}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    async _renderProgram() {
        let buttons = '';
        this.#data.programs.forEach((program, index1) => {
            buttons += `
                <li class="nav-item">
                    <a class="nav-link${(index1 === 0 ? ' active' : '')}" data-href="pills-program${1 + index1}" href="#pills-program${1 + index1}">${program.title}</a>
                </li>
            `;
            let cards = '';
            program.description.forEach((card, index2) => {
                cards += `
                    <div class="col-lg-6 mb-4">
                        <div class="card shadow-sm">
                            <img class="card-img-top" src="assets/img/programs/${card.img}"
                                alt="${card.title}">
                            <div class="card-body bg-tertary-2">
                                <h5 class="card-title text-muted">${card.title}</h5>
                                <div class="card-text">${card.text}</div>
                                <button type="button" class="btn btn-tertary-2" data-bs-toggle="modal"
                                    data-bs-target="#modal-${index1 + '-' + index2}">
                                    Lire plus...
                                </button>
                            </div>
                        </div>
                        <!-- Modal -->
                        <div class="modal fade" id="modal-${index1 + '-' + index2}" tabindex="-1" aria-labelledby="modalLabel-${index1 + '-' + index2}"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="modalLabel-${index1 + '-' + index2}">Programme <span class="text-uppercase text-tertary-2">${program.title}</span><br><span class="text-muted">${card.title}</span></h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="text-center mb-4"><img src="assets/img/programs/${card.img}" alt="${card.title}" class="w-50 rounded shadow"></div>
                                        ${card.text}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
            this.programsContainer.insertAdjacentHTML('beforeend', `
                <div class="program rounded shadow bg-white${(index1 === 0 ? ' show' : ' hide')}" id="pills-program${1 + index1}">
                    <div class="col-lg-8 mx-auto p-4">
                        <div class="text-center">
                            <h4>Programme <span class="text-uppercase text-tertary-2">${program.title}</span></h4>
                            <p class="text-muted">${program.subtitle ?? ''}</p>
                        </div>
                        <p>${program.intro ?? ''}</p>
                    </div>
                    <div class="row col-lg-8 mx-auto py-4">${cards}</div>
                </div>
            `);
        });
        this.programsContainer.insertAdjacentHTML('beforebegin', `<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">${buttons}</ul>`);
    }

    async _renderPrivacy() {
        const html = await this._getHtml('src/html/privacy.html');
        document.getElementById('modalPrivacy').querySelector('.modal-body').insertAdjacentHTML('beforeend', html);
    }

    async _renderTerms() {
        const html = await this._getHtml('src/html/terms.html');
        document.getElementById('modalCU').querySelector('.modal-body').insertAdjacentHTML('beforeend', html);
    }

    //Initialisation
    async _init() {
        await Promise.all([
            this._renderTeam(),
            this._renderAbout(),
            this._renderSkill(),
            this._renderProgram(),
            this._renderPrivacy(),
            this._renderTerms()
        ]);
        this.#sections = document.querySelectorAll('section');
        this.#images = document.querySelectorAll('img');
        await Promise.all([this._revealSection(), this._revealImage(), this._revealAbout()]);

    }
};

export default new App(data);