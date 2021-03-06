'use strict';

import View from './View';

export default class Mappy extends View {

    #goToHome = document.getElementById('goToHome');
    #goToCurrent = document.getElementById('goToCurrent');
    #distance = document.getElementById('distance');
    #goDistance = document.getElementById('goDistance');
    #mapZoomLevel = 15;
    #map;
    #home;
    #current;
    #homeCoords = [47.658236, -2.760847];
    #currentCoords;
    #permission = false;

    constructor() {
        super();
        return (async () => {
            const permissionStatus = await navigator?.permissions?.query({ name: 'geolocation' });
            if (permissionStatus !== undefined)
                this.#permission = permissionStatus.state === 'granted';
            this.#goDistance.style.visibility = 'hidden';
            this._launchMap();
        })();
    }

    _launchMap() {
        const callback = (entries, observer) => {
            const [entry] = entries;
            if (!entry.isIntersecting) return;
            this._loadMap();
            observer.unobserve(entry.target);
        };
        const contactObserver = new IntersectionObserver(callback, { root: null, threshold: 0.1 });
        contactObserver.observe(this.contactContainer);
    }

    _loadMap() {
        this.#map = L.map('map', { scrollWheelZoom: false }).setView(this.#homeCoords, this.#mapZoomLevel);
        L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
            maxZoom: 20,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        this.#home = this._addMarker(this.#homeCoords, `<img src="${this.folder.IMG}logos/v4/purpleText/pinkLeaf/LMVDM.svg" class="h-100 logo" alt="Sabrina Coaching" />`, 'neutral');
        this._goFocusHandler(this.#goToHome, { marker: this.#home, coords: this.#homeCoords });
        if (this.#permission) {
            this._getCurrentPosition();
        } else {
            this.#goToCurrent.addEventListener('click', (e) => {
                e.preventDefault();
                this._getCurrentPosition();
            });
        }
    }

    _getCurrentPosition() {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.#currentCoords = [pos.coords.latitude, pos.coords.longitude];
            this._loadMarkers();
        });
    }

    _loadMarkers() {
        this.#current = this._addMarker(this.#currentCoords, 'Vous', 'tertary');
        const group = [this.#home, this.#current];
        this.#distance.insertAdjacentHTML('afterbegin', `${this._calculateDistance(this.#current.getLatLng(), this.#home.getLatLng())} km`);
        this.#goDistance.style.visibility = 'visible';
        this._goDistance(group);
        this._goFocusHandler(this.#goToCurrent, { marker: this.#current, coords: this.#currentCoords });
        this._goDistanceHandler(this.#goDistance, group);
    }

    _addMarker(coords, text, style = 'primary', marker = 'neutral') {
        const newMarker = L.icon({
            iconUrl: `./${this.folder.IMG}markers/${marker}.png`,
            iconSize: [48, 48]
        });
        return L.marker(coords, { icon: newMarker })
            .addTo(this.#map)
            .bindPopup(L.popup({ offset: [0, 0], maxWidth: 250, minWidth: 100, autoClose: false, closeOnClick: false, className: style }))
            .setPopupContent(text)
            .openPopup();
    }

    _goFocusHandler(button, ele) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            this._goFocus(ele);
        });
    }

    _goDistanceHandler(button, array) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            this._goDistance(array);
        });
    }

    _goFocus(ele) {
        this.#map.flyTo(ele.coords, this.#mapZoomLevel);
        ele.marker.openPopup();
    }

    _goDistance(array) {
        let group = new L.featureGroup(array)
        this.#map.fitBounds(group.getBounds(), { padding: [50, 50] });
    }

    _calculateDistance(from, to) {
        return ((from.distanceTo(to)).toFixed(0) / 1000).toFixed(0);
    }
}