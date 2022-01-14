'use strict';

import View from "./View";
import data from "../json/data.json";
import { IMG_FOLDER } from "../config";

class Form extends View {
    #initForm = document.getElementById('initForm');
    #inputsSrc;
    #form;
    #inputs;
    #modal;
    #carousel;
    #formCarousel;
    #initContent;
    #goBtn;
    #slideNbr;
    #prevBtn;
    #nextBtn;
    #okBtn;
    #sendBtn;

    constructor(data) {
        super();
        this.#inputsSrc = data.contact;
        this._initForm();
    }

    _initForm() {
        this.#initForm.addEventListener('click', async () => {
            this.#modal = this._renderModal("Formulaire de contact");
            const formModal = new bootstrap.Modal(this.#modal);
            formModal.show();
            this.#goBtn = this.#modal.querySelector('.modal-footer button');
            this.#initContent = this.#modal.querySelector('.form-content');
            this.#goBtn.addEventListener('click', (e) => {
                this._initCarousel();
                this._addHandlers();
            });
        });
    }

    _initCarousel() {
        this.#carousel = this._renderCarousel();
        this.#modal.querySelector('.modal-body').replaceChild(this.#carousel.container, this.#initContent);
        this.#modal.querySelector('.modal-footer').replaceChild(this.#carousel.controler, this.#goBtn);
        this.#slideNbr = this.#carousel.container.querySelectorAll('.carousel-item').length;
        this.#prevBtn = this.#carousel.controler.querySelector('button[data-bs-slide="prev"]');
        this.#nextBtn = this.#carousel.controler.querySelector('button[data-bs-slide="next"]');
        this.#okBtn = this.#carousel.container.querySelectorAll('.ok');
        this.#sendBtn = this.#carousel.container.querySelector('.valid');
        this.#form = document.forms.contactForm;
        this.#inputs = Array.from(this.#form.elements).filter(ele => ele.hasAttribute('name'));
        this.#formCarousel = new bootstrap.Carousel(this.#carousel.container, { pause: true });
    }

    _addHandlers() {
        this.#inputs.forEach(ele => ele.addEventListener('keyup', (e) => {
            Array.from(document.querySelectorAll(`span.${e.target.name}`)).forEach(span => span.innerHTML = e.target.value);
        }));

        this.#carousel.container.addEventListener('slide.bs.carousel', (e) => {
            this.#prevBtn.disabled = (e.to === 0);
            this.#nextBtn.disabled = (e.to === this.#slideNbr - 1);
            e.relatedTarget.querySelector('input, textarea').focus();
        });

        Array.from(this.#okBtn).forEach(ele => {
            ele.addEventListener('click', (e) => {
                const item = e.target.closest('.carousel-item');
                item.classList.add('was-validated');
                if (!item.querySelector('input, textarea').validity.valid || +ele.dataset.to === this.#slideNbr) return;
                this.#formCarousel.next();
            })
        });

        this.#sendBtn.addEventListener('click', () => {
            let invalid = this.#inputs.find(ele => !ele.validity.valid);
            if (invalid !== undefined) {
                this.#form.classList.add('was-validated');
                this.#formCarousel.to(invalid.dataset.to);
                return;
            }
            this._sendEmail();
        });
    }

    _sendEmail() {
        fetch(`https://sabrina-mailer.herokuapp.com/text-mail`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams((new FormData(this.#form)))
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    _renderModal(title) {
        const modalContainer = document.createElement('div');
        modalContainer.insertAdjacentHTML('afterbegin', `
            <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable modal-form">
                <div class="modal-content bg-primary text-light">
                    <div class="modal-header">
                        <h5 class="modal-title">${title}</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form class="modal-body" id="contactForm">
                        <div class="form-content">
                            <p class="lead">
                                Bonjour !<br>
                                Vous êtes sur le point de m'envoyer un message.<br>
                                Les informations qui vous seront demandées sont : <br>
                            </p>
                            <ol>
                                <li>Votre nom</li>
                                <li>Votre email</li>
                                <li>Votre numéro de téléphone (facultatif)</li>
                                <li>Un petit message</li>
                            </ol>
                            <p>
                                <small>
                                    Laissez-vous guider par le formulaire. Cliquer sur Démarrer pour continuer.
                                </small>
                            </p>
                        </div>
                    </form>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-lg btn-primary">Démarrer</button>
                  </div>
                </div>
            </div>
        `);
        modalContainer.className = 'modal fade';
        return modalContainer;
    }

    _renderCarousel(id = "formCarousel") {
        const carouselContainer = document.createElement('div');
        const html = this.#inputsSrc.map((ele, index) => `
            <div class="carousel-item${index === 0 ? ' active' : ''}">
                ${this._renderInput(Object.assign(ele, { id: index }))}
            </div>
        `).join('');
        carouselContainer.insertAdjacentHTML('afterbegin', `           
            <div class="carousel-inner">
                ${html}
            </div>
        `);
        carouselContainer.className = 'carousel slide';
        carouselContainer.id = id;
        const carouselControler = document.createElement('div');
        carouselControler.insertAdjacentHTML('afterbegin', `
            <button type="button" class="btn btn-lg btn-primary" data-bs-target="#${id}" data-bs-slide="prev" disabled>
                <i class="fas fa-chevron-left"></i>
            </button>
            <button type="button" class="btn btn-lg btn-primary" data-bs-target="#${id}" data-bs-slide="next">
                <i class="fas fa-chevron-right"></i>
            </button>
        `);
        carouselControler.className = 'input-group justify-content-end';
        return { "container": carouselContainer, "controler": carouselControler };
    }

    _renderInput(data) {
        return `
        <p class="lead">${1 + data.id} - ${data.question}${data.required ? ' *' : ''}
        <br>
        <small>${data.required ? '* Champ obligatoire' : 'Facultatif'}</small>
        </p >

        <div class="input-group input-group-lg mb-5 position-relative">
            ${data.type === 'textarea' ? `
            <textarea class="form-control" name="${data.name}" placeholder="${data.placeholder}" data-to=${data.id} ${data.required ? 'required ' : ''}></textarea>
            ` : `
            <input class="form-control" type="${data.type}" name="${data.name}" placeholder="${data.placeholder}" data-to="${data.id}" ${data.required ? 'required ' : ''}/>
            `}
            <div class="invalid-tooltip">${data.invalid}</div>
        </div>
        <div class="text-end">
            <button type="button" class="btn btn-primary ok${(1 + data.id === this.#inputsSrc.length) ? ' valid' : ''}" data-to="${1 + data.id}">
                ${(1 + data.id === this.#inputsSrc.length) ? 'Envoyer' : 'OK <i class="fas fa-check"></i>'}
            </button>
        </div>
        `;
    }
}

export default new Form(data);