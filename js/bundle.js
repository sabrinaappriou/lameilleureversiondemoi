(()=>{"use strict";(()=>{class e{navbarCollapsible=document.getElementById("mainNav");masthead=document.querySelector(".masthead");workContainer=document.getElementById("myWork");programsContainer=document.getElementById("programsContainer");team=document.getElementById("team");teamContainer=document.getElementById("team").querySelector(".row");aboutContainer=document.getElementById("team").querySelector(".timeline");skillsContainer=document.getElementById("expertise");contactContainer=document.getElementById("contact");mapDiv=document.getElementById("mapDiv");backToTop=document.getElementById("btn-back-to-top");async _getHtml(e){const t=await fetch("assets/html/"+e);if(t.ok)return await t.text()}_convertHexaToRgb(e){return`${parseInt(e.substr(1,2),16)}, ${parseInt(e.substr(3,2),16)}, ${parseInt(e.substr(5,2),16)}`}_copy(e){navigator.clipboard.writeText(e),alert(`Le texte : \n\n${e}\n\n a bien été copié dans le presse-papier.`)}_toNode(e){return(new DOMParser).parseFromString(e,"text/html").body.childNodes[0]}_getAge(e="1984-08-24"){return Math.floor((new Date-new Date(e).getTime())/315576e5)}renderModal(e="",t="Sabrina Coaching indique :"){const n=document.createElement("div");return n.insertAdjacentHTML("afterbegin",`\n            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h5 class="modal-title">${t}</h5>\n                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n                    </div>\n                    <div class="modal-body">\n                        <p>${e}</p>\n                    </div>\n                    <div class="modal-footer">\n                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fermer</button>\n                  </div>\n                </div>\n            </div>\n        `),n.className="modal fade",new bootstrap.Modal(n)}}const t=JSON.parse('{"header":{"path":"bw/","background":["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]},"team":[{"id":"01","name":"Sabrina Appriou","birthDate":"1984-08-24","function":"Coach en développement personnel<br>Fondatrice de","instagram":"https://www.instagram.com/sabs.app/","facebook":"https://www.facebook.com/sabrina.appriou","linkedIn":"https://www.linkedin.com/in/sabrina-appriou-0138a8122/"}],"about":[{"img":"entreprise.webp","title":"L\'entreprise","subtitle":"Mes débuts, ma carrière","text":"J’ai intégré le monde de l’entreprise après mes études à l’âge de 23 ans. Il s’agissait d’une opportunité dans une grande entreprise qu’à l’époque je ne pouvais pas refuser.<br>Tous les 3-4 ans, je changeais de poste. J’ai pu travailler dans différents domaines&nbsp;: marketing, back-office, service commercial, gestion de la ressource. Une opportunité pour moi d’évoluer dans différents environnements, d’aller à la rencontre de différentes personnes, de développer ma capacité d’adaptation. Je voyais ces changements comme autant de nouveaux défis et également de nouvelles opportunités d’évolution de ma carrière. Je me projetais dans un poste à responsabilités, dans une belle carrière, même si le domaine professionnel dans lequel j’évoluais ne me passionnait pas. Je devais poursuivre mes efforts pour atteindre mon objectif d’alors&nbsp;: gravir les échelons pour atteindre une situation financière confortable.<br>Cela passait toutefois par des concessions&nbsp;: je passais notamment beaucoup de temps dans les transports. J’étais rarement à la maison, prise par les temps de trajet et le temps passé au travail. Mais je ne voyais pas cela comme une contrainte mais plutôt comme un sacrifice à court terme. J’étais persuadée que je devais passer par cette étape pour obtenir un confort de vie."},{"img":"carriere.webp","title":"Vie pro / Vie perso","subtitle":"Comment les concilier&nbsp;?","text":"Mais ce rythme de vie commençait à m’épuiser. Mon travail prenait une place importante dans ma vie, j’étais de moins en moins présente pour ma famille. À l’époque, maman de 2 enfants en bas âge, je devais concilier ma vie professionnelle et ma vie de famille. Et progressivement, je me suis sentie tiraillée entre mon envie de réussir ma carrière et celle de voir grandir mes enfants.<br>Ma charge mentale s’accroissait et j’ai commencé à remettre en question mes choix professionnels.<br>Très vite, j’ai dû faire face à l’épuisement, à la lassitude, à l’incompréhension. Désillusion dans mes projets professionnels, contraintes qui se faisaient de plus en plus ressentir, et le sentiment que je subissais cette vie. Peu à peu, je comprends que cette situation n\'est plus tenable. Je me rends donc à l\'évidence que je dois trouver une solution plus pérenne.<br>Mon premier pas vers un rééquilibrage a été d’intégrer un poste plus proche de mon domicile. Ce rapprochement m’a permis de passer moins de temps dans les transports et plus de temps avec ma famille. Moins de trajet, du télétravail&nbsp;: sur le papier, cela semblait être une belle amélioration, un nouvel équilibre. La motivation revient. Mais s’essouffle aussi vite&nbsp;: dans ma tête une petite voix qui revient sans cesse&nbsp;: «&nbsp;Mais qu’est-ce que tu fous là&nbsp;?&nbsp;»."},{"img":"doutes.webp","title":"La trentaine","subtitle":"Remise en question, nouveau cap","text":"Arrivée à la trentaine, je ne parvenais plus à trouver ma place dans ces choix de vie qui ne me correspondait pas du tout. Je me sentais en perpétuel conflit avec moi-même et surtout prisonnière de ma vie professionnelle. Je devais faire semblant que tout allait bien, trouver la motivation pour faire des choses qui n’avaient aucun sens pour moi… difficile.<br>Mais à qui en parler&nbsp;? Avais-je vraiment envie d’entendre l’avis des autres&nbsp;? De personnes qui ne savaient pas ce que je ressentais au fond de moi&nbsp;? Pour entendre des «&nbsp;tu te plains alors que tu as une situation confortable&nbsp;!&nbsp;» ou des «&nbsp;Démissionne et trouve autre chose&nbsp;!&nbsp;»&nbsp;? Facile à dire&nbsp;!<br>Alors comment trouver une issue à cette situation qui, effectivement, était à tout point de vue pourtant «&nbsp;confortable&nbsp;»&nbsp;: salariée d’une grande entreprise depuis près de 10 ans, 13ème mois, CE, salaire&nbsp;? Une bonne situation. Stable. Alors pourquoi chercher à changer&nbsp;? Surtout avec cette ancienneté et des enfants en bas âge à charge&nbsp;!"},{"img":"sport.webp","title":"Le sport","subtitle":"Un pilier","text":"À ce moment-là, le sport tient déjà une place importante dans ma vie. Je prends le temps, à la pause déjeuner, d’aller faire du footing. Pourtant, cela ne suffit pas à empêcher mon mal-être de grandir. La frustration s’installe. Une sensation terrible de ne pas être à ma place, tandis que la société et ses injonctions me pressent à ne pas faiblir. À être une femme épanouie. À être une maman dévouée. Bien dans ses baskets. Peu à peu, je m’éloigne de mon bien-être intérieur et je me sens complètement démotivée."},{"img":"declic.webp","title":"Le déclic","subtitle":"","text":"En 2018, je décide de retrouver la motivation et je me lance un défi&nbsp;: courir le marathon de Paris. Je mets toutes les chances de mon côté en suivant un plan d’entrainement strict et une préparation minutieuse. Et une semaine avant la course, patatras&nbsp;: grosse entorse à la cheville&nbsp;! Qu’à cela ne tienne, je vais malgré tout relever ce challenge. Et je le fais. Je puise en moi toutes les ressources physiques et mentales et je parviens à franchir la ligne d’arrivée.<br>Cet accomplissement sportif a été un déclic&nbsp;: on a la force en nous de sortir de notre zone de confort et de relever d’immenses défis face à l’adversité&nbsp;!"},{"img":"vocation.webp","title":"La vocation","subtitle":"","text":"Je décide alors de me prendre main. Cela passe par un accompagnement afin que l’on m’aide à donner un autre sens à ma vie professionnelle et, pourquoi pas, à s’engager dans un changement de vie.<br>Des idées émergent&nbsp;: une activité en lien avec ce qui m’anime le plus, l’alimentation, le sport, l’humain. J’ai toujours pris du plaisir à accompagner mon entourage à se dépasser&nbsp;: amener les gens à sortir de leur zone de confort, par un défi sportif ou personnel. Je le faisais de façon spontanée, avec à chaque fois le sentiment d’avoir accompli MA mission.<br>Tout cela sonne comme une évidence pour moi. Je dois prendre un virage, suivre ma vocation, me tourner vers un métier d’accompagnement.<br>L’alimentation est un sujet qui me passionne depuis que je suis maman. Il fait partie de mon quotidien. «&nbsp;Bien manger&nbsp;».<br>Le sport m’aide à me surpasser et à repousser mes limites.<br>Le développement personnel est un état d’esprit qui m’aide à mieux me connaitre et comprendre les autres.<br>À l’issue de cet accompagnement, j’ai compris que je pouvais faire de belle chose en étant moi-même et en étant à l’écoute de mes besoins. Je fonce alors, avec pour objectif de redonner un sens à ma vie&nbsp;!"},{"img":"vie.webp","title":"Concrétisation de mon projet","subtitle":"Ma nouvelle vie","text":"J’ai évidemment des moments de doutes. «&nbsp;Vais-je y arriver&nbsp;?&nbsp;», «&nbsp;Est-ce que ce n’est pas trop risqué&nbsp;?&nbsp;». Mais finalement, je me dis&nbsp;: «&nbsp;Qu’est-ce que je risque&nbsp;?&nbsp;».<br>Plusieurs sentiments se mêlent. L’excitation de ce changement de vie, la peur d’échouer, que cela ne fonctionne pas. Car j’ai tout de même besoin de me sentir en sécurité. Mais finalement, à ce moment-là de ma vie, je ne l’étais pas. Je ne me sentais plus en sécurité intérieurement. Je réalise donc que je suis prête pour le changement.<br>Je forge mon mental, bien décidée à trouver le chemin de la sérénité&nbsp;:<br>«&nbsp;Je ne perds jamais. Soit je gagne, soit j’apprends&nbsp;»<br>(Nelson Mandela)<br>Je me forme au métier de coaching, un métier d’accompagnement, c’est-à-dire aider les personnes dans le changement, la transition professionnelle ou personnelle. Je veux être plus proche de l’humain, aider ces personnes à se réaliser en allant puiser au fond d’elles toutes les ressources dont elles disposent déjà, à se libérer émotionnellement.<br>Je contribue ainsi, à mon niveau, au bien-être des autres. Je me sens alignée avec les valeurs qui me sont chères&nbsp;: authenticité, intégrité, générosité, pugnacité, respect de soi.<br>En tant que coach, j’accompagne aujourd\'hui les personnes afin qu’elles apprennent à mieux se connaitre pour révéler tout leur potentiel."}],"skill":[{"title":"Coach Consultante","name":"coach"},{"title":"Programmation Neuro-linguistique","name":"pnl"},{"title":"Neuroscience","name":"neuroscience"},{"title":"Analyse transactionnelle","name":"at"},{"title":"Alimentation consciente & émotionnelle","name":"alimentation"},{"title":"Art du questionnement","name":"questions"},{"title":"Construction identitaire","name":"identite"},{"title":"Gestion du stress","name":"stress"},{"title":"Changements & transitions","name":"changement"}],"programs":[{"active":true,"title":"Coaching","subtitle":"LaMeilleureVersionDeMoi","intro":"","folder":"main/","description":[{"title":"Pour qui&nbsp;?","name":"who"},{"title":"C\'est quoi&nbsp;?","name":"what"},{"title":"Ma méthode","name":"how"}]},{"active":false,"title":"Coaching de vie","subtitle":"Professionnelle ou personnelle","intro":"Je vous propose un processus de coaching pour vous accompagner dans un <b>changement</b>, une <b>transition</b>, une <b>transformation de vie</b> perso ou pro.","folder":"vie/","description":[{"title":"C\'est quoi&nbsp;?","name":"what"},{"title":"Pour qui&nbsp;?","name":"who"},{"title":"Ma méthode","name":"how"}]},{"active":false,"title":"Coaching bien-être","subtitle":"Physique et mental","intro":"Il s\'agit d\'un accompagnement spécifique vers le <b>bien-être physique et mental</b>, basé sur ma méthode <b>Etat d\'esprit gagnant & Corps sain</b> qui repose sur trois fondements : le <b>mental</b>, la <b>mise en mouvement</b> et l\'<b>alimentation consciente & émotionnelle</b>.","folder":"bienetre/","description":[{"title":"C\'est quoi&nbsp;?","name":"what"},{"title":"Pour qui&nbsp;?","name":"who"},{"title":"Comment ça se passe&nbsp;?","name":"how"}]}],"contact":[{"question":"Tout d\'abord, comment vous appelez-vous ?","type":"text","name":"name","placeholder":"Répondez ici...","invalid":"Ce champs est obligatoire","required":true},{"question":"Enchantée <span class=\\"name\\"></span>. Dites-moi ce que je peux faire pour vous ?","type":"textarea","name":"message","placeholder":"Répondez ici...","invalid":"Ce champs est obligatoire","required":true},{"question":"Parfait. Merci de bien vouloir entrer votre adresse email.","type":"email","name":"email","placeholder":"nom@exemple.com","invalid":"Hum... cette adresse email ne semble pas valide.","required":true},{"question":"Si vous le préférez, laissez-moi votre numéro de téléphone et je vous recontacterai.","type":"tel","name":"phone","placeholder":"06 12 34 56 78","invalid":"","required":false}]}');new class extends e{#e;#t;#n;#s=[];#a;constructor(e){return super(),(async()=>{this.#n=e,await this._init()})()}async _revealSection(e=0){const t=new IntersectionObserver((function(t,n){t.forEach((t=>{t.isIntersecting&&setTimeout((()=>{t.target.classList.remove("section-hidden"),n.unobserve(t.target)}),e)}))}),{root:null,threshold:0});this.#e.forEach((function(e){t.observe(e),e.classList.add("section-hidden")}))}async _revealImage(){const e=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(e.target.src=e.target.dataset.src?e.target.dataset.src:e.target.src,e.target.addEventListener("load",(function(){this.classList.remove("toReveal")})),t.unobserve(e.target))}))}),{root:null,threshold:.5});this.#t.forEach((function(t){e.observe(t)}))}async _revealAbout(e=0){const t=new IntersectionObserver((function(t,n){t.forEach((t=>{t.isIntersecting&&setTimeout((()=>{t.target.classList.add("in"),n.unobserve(t.target)}),e)}))}),{root:null,threshold:.1});this.aboutContainer.querySelectorAll("li").forEach((function(e){t.observe(e)})),this.workContainer.querySelectorAll("li").forEach((function(e){t.observe(e)}))}async _renderWork(){const e=await this._getHtml("work.html");this.workContainer.insertAdjacentHTML("beforeend",e)}async _renderTeam(){this.#n.team.forEach((async e=>{const t=await this._getHtml(`team/${e.id}.html`);this.teamContainer.insertAdjacentHTML("beforeend",`\n                <div class="col-lg-${12/this.#n.team.length}">\n                    <div class="team-member">\n                        <img class="team-portrait mx-auto rounded-circle" src="assets/img/team/${e.id}.webp" alt="${e.name}" />\n                        <h3>${e.name}</h3>\n                        <p class="text-muted">${e.function}</p>\n                        <div class="row align-items-center justify-content-center mb-4">\n                            <div class="col-lg-4 col-10">\n                                <img src="assets/img/logos/LMVDM-3.svg" class="w-100" alt="La Meilleure Version de Moi" />\n                            </div>\n                        </div>\n                        <a class="btn btn-primary btn-social mx-2 shadow" href="${e.instagram}" title="Instagram"><i class="fab fa-instagram"></i></a>\n                        <a class="btn btn-primary btn-social mx-2 shadow" href="${e.facebook}" title="Facebook"><i class="fab fa-facebook-f"></i></a>\n                        <a class="btn btn-primary btn-social mx-2 shadow" href="${e.linkedIn}" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>\n                    </div>\n                </div>\n                ${t}\n            `);const n=document.getElementById(`${e.id}-age`);n.innerHTML=this._getAge(e.birthDate),n.classList.remove("spinner-border")}))}async _renderAbout(){this.#n.about.forEach(((e,t)=>{this.aboutContainer.insertAdjacentHTML("beforeend",`\n                <li${t%2==1?' class="timeline-inverted"':""}>\n                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/${e.img}"\n                            alt="..." /></div>\n                    <div class="timeline-panel">\n                        <div class="timeline-heading">\n                            <h4 class="">${e.title}</h4>\n                            <h5 class="subheading text-muted">${e.subtitle}</h5>\n                        </div>\n                        <div class="timeline-body">\n                            <p class="text-muted">${e.text}</p>\n                        </div>\n                    </div>\n                </li >\n            `)}))}async _renderSkill(){this.#n.skill.forEach((async(e,t)=>{const n=await this._getHtml(`skills/${e.name}.html`),s=this._toNode(`<div class="col-lg-4 col-sm-6 mb-4" style="order:${1+t};">\n                        \x3c!-- Skill item ${1+t} --\x3e\n                        <div class="card shadow-sm">\n                            <a class="card-link w-100" data-bs-toggle="modal" href="#skillModal${1+t}">\n                                <div class="card-hover primary">\n                                    <div class="card-hover-content"><i class="fas fa-plus fa-3x"></i></div>\n                                </div>\n                                <img class="card-img-top" src="assets/img/expertise/preview/${e.name}.webp" alt="${e.title}" />\n                            </a>\n                            <div class="card-body bg-light">\n                                <h5 class="card-title kalam text-uppercase text-primary-2 textNoWrap">${e.title}</h5>\n                                <div class="card-text">${n}</div>\n                            </div>\n                        \n                        </div>\n                        <div class="modal fade" id="skillModal${1+t}" tabindex="-1" aria-labelledby="modalLabel-${1+t}"\n                        aria-hidden="true">\n                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">\n                                <div class="modal-content">\n                                    <div class="modal-header">\n                                        <h5 class="modal-title kalam text-uppercase text-primary-2" id="modalLabel-${t}">\n                                            ${e.title}\n                                        </h5>\n                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n                                    </div>\n                                    <div class="modal-body">\n                                        <div class="text-center mb-4">\n                                            <img src="assets/img/expertise/${e.name}.webp" alt="${e.title}" class="w-100">\n                                        </div>\n                                        ${n}\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                `);this.skillsContainer.insertAdjacentElement("beforeend",s)}))}async _renderProgram(){let e="";await this.#n.programs.forEach((async(t,n)=>{if(!t.active)return;e+=`\n                <li class="nav-item">\n                    <a class="nav-link${0===n?" active":""}" data-href="pills-program${1+n}" href="#">${t.title}</a>\n                </li>\n            `;let s="";await Promise.all(t.description.map((async(e,a)=>{const i=await this._getHtml(`programs/${t.folder+e.name}.html`);s+=`\n                    <div class="col-lg-4 mb-4" style="order:${1+a};">\n                        <div class="card shadow-sm">\n                            <a class="card-link" data-bs-toggle="modal" data-bs-target="#modal-${n+"-"+a}" href="#modal-${n+"-"+a}">\n                                <div class="card-hover primary">\n                                    <div class="card-hover-content"><i class="fas fa-plus fa-3x"></i></div>\n                                </div>\n                                <img class="card-img-top" src="assets/img/programs/${t.folder+e.name}.webp"\n                                alt="${e.title}">\n                            </a>\n                            <div class="card-body bg-light">\n                                <h5 class="card-title kalam text-uppercase text-primary-2">${e.title}</h5>\n                                <div class="card-text">${i}</div>\n                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"\n                                    data-bs-target="#modal-${n+"-"+a}">\n                                    Lire plus...\n                                </button>\n                            </div>\n                        </div>\n                        \x3c!-- Modal --\x3e\n                        <div class="modal fade" id="modal-${n+"-"+a}" tabindex="-1" aria-labelledby="modalLabel-${n+"-"+a}"\n                            aria-hidden="true">\n                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">\n                                <div class="modal-content">\n                                    <div class="modal-header">\n                                        <h4 class="modal-title kalam text-uppercase text-primary-2" id="modalLabel-${n+"-"+a}">\n                                            ${e.title}\n                                        </h4>\n                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n                                    </div>\n                                    <div class="modal-body">\n                                        <div class="text-center mb-4"><img src="assets/img/programs/${t.folder+e.name}.webp" alt="${e.title}" class="w-50 rounded shadow"></div>\n                                        ${i}\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                `})));const a=this._toNode(`<div class="program py-4${0===n?" show":" hide"}" id="pills-program${1+n}">\n                    <div class="col-lg-8 mx-auto p-4 d-none">\n                        <div class="text-center">\n                            <h3 class="kalam text-uppercase text-tertary-2">${t.title}</h3>\n                            <p class="text-muted">${t.subtitle??""}</p>\n                        </div>\n                        <p>${t.intro??""}</p>\n                    </div>\n                    <div class="row col p-lg-2">${s}</div>\n                </div>\n            `);this.programsContainer.insertAdjacentElement("afterbegin",a),this.#s.push(a)})),this.#n.programs.filter((e=>e.active)).length<=1||(this.programsContainer.insertAdjacentHTML("beforebegin",`<ul class="nav nav-tabs nav-fill" id="pills-tab">${e}</ul>`),this.programsContainer.className="bg-white border border-top-0")}async _renderPrivacy(){const e=await this._getHtml("privacy.html");document.getElementById("modalPrivacy").querySelector(".modal-body").insertAdjacentHTML("beforeend",e)}async _renderTerms(){const e=await this._getHtml("terms.html");document.getElementById("modalCU").querySelector(".modal-body").insertAdjacentHTML("beforeend",e)}async _programsNavHandler(){this.#a?.addEventListener("click",(e=>{e.preventDefault();const t=e.target.closest(".nav-link");if(!t)return;this.#a.querySelectorAll(".nav-link").forEach((e=>e.classList.remove("active"))),t.classList.add("active");const n=document.getElementById(t.dataset.href);this.#s.forEach((e=>{e===n?(e.classList.remove("hide"),e.classList.add("show")):(e.classList.remove("show"),e.classList.add("hide"))}))}))}async _reader(e){const t=this._toNode('\n            <div class="progress">\n                <div class="progress-bar" role="progressbar" style="width: 0;" aria-valuenow="25" aria-valuemin="0"\n                aria-valuemax="100"></div>\n            </div>\n        '),n=["scroll",e=>{const n=e.currentTarget.myparams.target,s=window.innerHeight,a=n.getBoundingClientRect().height,i=n.getBoundingClientRect().top;t.querySelector(".progress-bar").style.width=100/a*(s-i)+"%"}];new IntersectionObserver(((e,s)=>{let a;const[i]=e,r=i.target;r.classList.contains("modal")?(a=r.querySelector(".modal-body"),t.classList.add("position-absolute"),r.insertAdjacentElement("beforeend",t)):(a=window,t.classList.add("position-fixed"),document.body.insertAdjacentElement("beforeend",t)),i.isIntersecting?(a.myparams=i,a.addEventListener(...n),t.classList.add("show")):(a.removeEventListener(...n),t.classList.remove("show"))}),{root:null,threshold:0}).observe(e)}async _init(){await Promise.all([this._renderWork(),this._renderTeam(),this._renderAbout(),this._renderSkill(),this._renderProgram(),this._renderPrivacy(),this._renderTerms()]),this.#e=document.querySelectorAll("section"),this.#t=document.querySelectorAll(".toReveal"),this.#a=document.getElementById("pills-tab"),await Promise.all([this._revealSection(),this._revealImage(),this._revealAbout(),this._programsNavHandler()])}}(t),new class extends e{#i=document.getElementById("goToHome");#r=document.getElementById("goToCurrent");#o=document.getElementById("distance");#l=document.getElementById("goDistance");#d=15;#c;#m;#u;#p=[47.658236,-2.760847];#b;constructor(){super(),this._launchMap()}_launchMap(){new IntersectionObserver(((e,t)=>{const[n]=e;n.isIntersecting&&(this._getCurrentCoords(),t.unobserve(n.target))}),{root:null,threshold:.1}).observe(this.contactContainer)}_loadMap(e=!1){if(this.#c=L.map("map",{scrollWheelZoom:!1}).setView(this.#p,this.#d),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:20,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.#c),this.#m=this._addMarker(this.#p,'<img src="assets/img/logos/LMVDM-3.svg" class="h-100 logo" alt="Sabrina Coaching" />',"neutral"),!e)return;this.#u=this._addMarker(this.#b,"Vous","tertary");const t=[this.#m,this.#u];this.#o.insertAdjacentHTML("afterbegin",`${this._calculateDistance(this.#u.getLatLng(),this.#m.getLatLng())} km`),this._goDistance(t),this._goFocusHandler(this.#i,{marker:this.#m,coords:this.#p}),this._goFocusHandler(this.#r,{marker:this.#u,coords:this.#b}),this._goDistanceHandler(this.#l,t)}_addMarker(e,t,n="primary",s="neutral"){const a=L.icon({iconUrl:`../assets/img/markers/${s}.png`,iconSize:[48,48]});return L.marker(e,{icon:a}).addTo(this.#c).bindPopup(L.popup({offset:[0,0],maxWidth:250,minWidth:100,autoClose:!1,closeOnClick:!1,className:n})).setPopupContent(t).openPopup()}_getCurrentCoords(){navigator.geolocation.getCurrentPosition((e=>{this.#b=[e.coords.latitude,e.coords.longitude],this._loadMap(!0)}),(()=>{this._loadMap()}))}_goFocusHandler(e,t){e.addEventListener("click",(e=>{e.preventDefault(),this._goFocus(t)}))}_goDistanceHandler(e,t){e.addEventListener("click",(e=>{e.preventDefault(),this._goDistance(t)}))}_goFocus(e){this.#c.flyTo(e.coords,this.#d),e.marker.openPopup()}_goDistance(e){let t=new L.featureGroup(e);this.#c.fitBounds(t.getBounds(),{padding:[50,50]})}_calculateDistance(e,t){return(e.distanceTo(t).toFixed(0)/1e3).toFixed(0)}},new class extends e{primary=getComputedStyle(document.body).getPropertyValue("--bs-primary").trim();secondary=getComputedStyle(document.body).getPropertyValue("--bs-primary-2").trim();#h;#v;primarySpan;#g;secondarySpan;#y;constructor(){super()}async _renderColorSettings(){document.querySelector("footer div.col").insertAdjacentHTML("beforeend",'\n            |<p class="link-primary text-decoration-none mx-3 cursor-pointer d-inline" data-bs-toggle="modal" data-bs-target="#settingsModal" href="#">Paramètres</p>\n            <div class="modal fade" id="settingsModal" tabindex="-1" aria-labelledby="settingsModalLabel" aria-hidden="true">\n                <div class="modal-dialog modal-dialog-centered">\n                    <div class="modal-content">\n                        <div class="modal-header">\n                            <h5 class="modal-title" id="settingsModalLabel">Paramètres</h5>\n                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n                        </div>\n                        <div class="modal-body">\n                            <p>Changer les couleurs</p>\n                            <form id="colorsForm">\n                                <div>\n                                    <input type="color" name="color" id="primaryInput" data-root="--bs-primary" data-this="primary" />\n                                    <label for="primaryInput">Couleur principale (<span id="primarySpan" class="text-primary fw-bold"></span>)</label>\n                                </div>\n                                <div>\n                                    <input type="color" name="color" id="secondaryInput" data-root="--bs-primary-2" data-this="secondary" />\n                                    <label for="secondaryInput">Couleur secondaire (<span id="secondarySpan" class="text-primary-2 fw-bold"></span>)</label>\n                                </div>\n                            </form>\n                        </div>\n                        <div class="modal-footer">\n                            <button type="button" class="btn btn-success" id="copyButton">Copier les couleurs</button>\n                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Valider</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        '),this.#h=document.getElementById("colorsForm"),this.#v=document.getElementById("primaryInput"),this.#g=document.getElementById("secondaryInput"),this.primarySpan=document.getElementById("primarySpan"),this.secondarySpan=document.getElementById("secondarySpan"),this.#y=document.getElementById("copyButton"),this.#v.value=this.primarySpan.innerText=this.primary,this.#g.value=this.secondarySpan.innerText=this.secondary}_addInputHolder(){this.#h.querySelectorAll("input").forEach((e=>{e.addEventListener("change",(()=>{const t=e.value,n=this._convertHexaToRgb(t);document.documentElement.style.setProperty(e.dataset.root,t),document.documentElement.style.setProperty(`${e.dataset.root}-rgb`,n),this[`${e.dataset.this}`]=t,this[`${e.dataset.this}Span`].innerText=t}))}))}_addCopyHandler(){this.#y.addEventListener("click",(()=>{this._copyColors()}))}_copyColors(){this._copy(`Couleur principale : ${this.primary}, couleur secondaire : ${this.secondary}`)}async _init(){await this._renderColorSettings(),this._addInputHolder(),this._addCopyHandler()}},new class extends e{#f;#w=this.navbarCollapsible.querySelector("img");#q=this.navbarCollapsible.querySelector(".navbar-toggler");constructor(e){super(),this.#f=e.header,this._init()}_headerSlider(e=5e3){const t=this.#f.background.length;setInterval((()=>{this.masthead.style.backgroundImage=`url('../assets/img/header/${this.#f.path}${this.#f.background[Math.floor(Math.random()*t)]}')`}),e),window.getComputedStyle(this.masthead,":before")}_navbarShrink(){console.log("none"===this.#q.style.display),0===window.scrollY?(this.navbarCollapsible.classList.remove("navbar-shrink"),this.#w.src=this.#w.dataset.base,this.backToTop.classList.remove("show"),this.backToTop.classList.add("hide")):(this.navbarCollapsible.classList.add("navbar-shrink"),this.#w.src=this.#w.dataset.shrink,this.backToTop.classList.add("show"),this.backToTop.classList.remove("hide"))}_scrollSpy(){new bootstrap.ScrollSpy(document.body,{target:"#mainNav",offset:74})}_responsiveNavbar(){const e=document.body.querySelector(".navbar-toggler");[].slice.call(document.querySelectorAll("#navbarResponsive .nav-link")).map((function(t){t.addEventListener("click",(()=>{"none"!==window.getComputedStyle(e).display&&e.click()}))})),document.querySelectorAll(".dropdown").forEach((e=>{e.addEventListener("mouseover",(t=>{e.querySelector(".dropdown-menu").classList.toggle("show")}))}))}_init(){window.addEventListener("DOMContentLoaded",(async()=>{this._navbarShrink(),document.addEventListener("scroll",(()=>{this._navbarShrink()})),this._scrollSpy(),this._responsiveNavbar()}))}}(t),new class extends e{#C=document.getElementById("initForm");#$;#x;#L;#_;#j;#k;#E;#S;#M;#I;#B;#T;#A;#H;constructor(e){super(),this.#$=e.contact,this._initForm()}_initForm(){this.#C.addEventListener("click",(async()=>{this.#_=this._renderModal("Formulaire de contact"),this.#j=new bootstrap.Modal(this.#_),this.#j.show(),this.#M=this.#_.querySelector(".modal-footer button"),this.#S=this.#_.querySelector(".form-content"),this.#M.addEventListener("click",(e=>{this._initCarousel(),this._addHandlers()}))}))}_initCarousel(){this.#k=this._renderCarousel(),this.#E=new bootstrap.Carousel(this.#k.container,{pause:!0}),this.#_.querySelector(".modal-body").replaceChild(this.#k.container,this.#S),this.#_.querySelector(".modal-footer").replaceChild(this.#k.controler,this.#M),this.#I=this.#k.container.querySelectorAll(".carousel-item").length,this.#B=this.#k.controler.querySelector('button[data-bs-slide="prev"]'),this.#T=this.#k.controler.querySelector('button[data-bs-slide="next"]'),this.#A=Array.from(this.#k.container.querySelectorAll(".ok")),this.#H=this.#k.container.querySelector(".valid"),this.#x=document.forms.contactForm,this.#L=Array.from(this.#x.elements).filter((e=>e.hasAttribute("name")))}_addHandlers(){const e=(e,t)=>{const n=e.target.closest(".carousel-item");n.classList.add("was-validated"),n.querySelector("input, textarea").validity.valid&&+t.dataset.to!==this.#I&&this.#E.next()};this.#L.forEach((t=>t.addEventListener("keyup",(t=>{"Enter"!==t.code||"TEXTAREA"===t.target.tagName?Array.from(document.querySelectorAll(`span.${t.target.name}`)).forEach((e=>e.innerHTML=t.target.value)):e(t,document.querySelector(`button[data-input="${t.target.name}"]`))})))),this.#A.forEach((t=>t.addEventListener("click",(n=>{e(n,t)})))),this.#k.container.addEventListener("slide.bs.carousel",(e=>{this.#B.disabled=0===e.to,this.#T.disabled=e.to===this.#I-1,e.relatedTarget.querySelector("input, textarea").focus()})),this.#H.addEventListener("click",(e=>{e.target.closest("button").disabled=!0;let t=this.#L.find((e=>!e.validity.valid));if(void 0!==t)return this.#x.classList.add("was-validated"),this.#E.to(t.dataset.to),void(e.target.closest("button").disabled=!1);this._sendEmail()}))}_sendEmail(){const e="\n            <p>Malheureusement il y a eu un problème à l'envoi du message. Veuillez réessayer ultérieurement.</p>\n            <p>Si le problème persiste, n'hésiter pas à me contacter :</p>\n                <ul>\n                    <li>Par mail : sabrina.appriou@hotmail.fr</li>\n                    <li>Par téléphone : 06 61 79 46 99</li>\n                </li>\n        ";fetch("https://sabrina-mailer.herokuapp.com/text-mail",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(new FormData(this.#x))}).then((e=>e.json())).then((t=>{console.log(t),this.#j.hide();const n=`\n                    <p>Merci d'avoir pris le temps de me contacter !<p>\n                    ${t.send?"\n                    <p>Votre message a bien été envoyé. Je reviendrai vers vous le plus rapidement possible.</p>\n                    ":e}\n                `;this.renderModal(n).show()})).catch((t=>{console.log(t),this.renderModal(e).show()}))}_renderModal(e){const t=document.createElement("div");return t.insertAdjacentHTML("afterbegin",`\n            <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable modal-form">\n                <div class="modal-content bg-primary text-light">\n                    <div class="modal-header">\n                        <h5 class="modal-title">${e}</h5>\n                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>\n                    </div>\n                    <form class="modal-body" id="contactForm">\n                        <div class="form-content">\n                            <p class="lead">\n                                Bonjour !<br>\n                                Vous êtes sur le point de m'envoyer un message.<br>\n                                Les informations qui vous seront demandées sont : <br>\n                            </p>\n                            <ol>\n                                <li>Votre nom</li>\n                                <li>Votre email</li>\n                                <li>Votre numéro de téléphone (facultatif)</li>\n                                <li>Un petit message</li>\n                            </ol>\n                            <p>\n                                <small>\n                                    Laissez-vous guider par le formulaire. Cliquer sur Démarrer pour continuer.\n                                </small>\n                            </p>\n                        </div>\n                    </form>\n                    <div class="modal-footer">\n                    <img src="assets/img/logos/LMVDM-4-feuille-violette.svg" class="w-25 d-none d-lg-block" />\n                    <button type="button" class="btn btn-lg btn-primary">Démarrer</button>\n                  </div>\n                </div>\n            </div>\n        `),t.className="modal fade",t}_renderCarousel(e="formCarousel"){const t=document.createElement("div"),n=this.#$.map(((e,t)=>`\n            <div class="carousel-item${0===t?" active":""}">\n                ${this._renderInput(Object.assign(e,{id:t}))}\n            </div>\n        `)).join("");t.insertAdjacentHTML("afterbegin",`           \n            <div class="carousel-inner">\n                ${n}\n            </div>\n        `),t.className="carousel slide",t.id=e;const s=document.createElement("div");return s.insertAdjacentHTML("afterbegin",`\n            <button type="button" class="btn btn-lg btn-primary" data-bs-target="#${e}" data-bs-slide="prev" disabled>\n                <i class="fas fa-chevron-left"></i>\n            </button>\n            <button type="button" class="btn btn-lg btn-primary" data-bs-target="#${e}" data-bs-slide="next">\n                <i class="fas fa-chevron-right"></i>\n            </button>\n        `),s.className="input-group justify-content-end",{container:t,controler:s}}_renderInput(e){return`\n        <p class="lead">${1+e.id} - ${e.question}${e.required?" *":""}\n        <br>\n        <small>${e.required?"* Champ obligatoire":"Facultatif"}</small>\n        </p >\n\n        <div class="input-group input-group-lg mb-5 position-relative">\n            ${"textarea"===e.type?`\n            <textarea class="form-control" name="${e.name}" placeholder="${e.placeholder}" data-to=${e.id} ${e.required?"required ":""}></textarea>\n            `:`\n            <input class="form-control" type="${e.type}" name="${e.name}" placeholder="${e.placeholder}" data-to="${e.id}" ${e.required?"required ":""}/>\n            `}\n            <div class="invalid-tooltip">${e.invalid}</div>\n        </div>\n        <div>\n            <button type="button" class="btn btn-lg btn-primary ok${1+e.id===this.#$.length?" valid":""}" data-to="${1+e.id}" data-input="${e.name}">\n                ${1+e.id===this.#$.length?'<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="send">Envoyer ma demande</span> <span class="sending">Envoi en cours</span>':'OK <i class="fas fa-check"></i>'}\n            </button>\n            ${1+e.id===this.#$.length||"textarea"===e.type?"":" (appuyez sur Entrée ↵)"}\n        </div>\n        `}}(t),new class extends e{#P=document.body;#D=document.cookie;constructor(){super()}_renderBanner(){}}})()})();