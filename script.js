// Kompletná konfigurácia 9 kameňov s tvojimi presnými pozíciami, nápismi a rozšíreným obsahom
const stoneConfig = [
    { 
        id: 'stone8', 
        label: 'CERTIFIKÁTY', 
        size: 117, 
        bottom: 4, 
        left: 60, 
        rotate: -13,
        subtitle: 'Krok 8',
        title: 'Certifikáty & Kurzy',
        desc: 'Prehľad mojich absolvovaných kurzov, certifikácií a úspechov v oblasti vývoja webu a grafického dizajnu.',
        tags: ['Frontend Development', 'Responsive Web Design', 'UI/UX Základy', 'Git & GitHub']
    },
    { 
        id: 'stone6', 
        label: 'DIZAJN', 
        size: 134, 
        bottom: 3, 
        left: 44, 
        rotate: 0,
        subtitle: 'Krok 6',
        title: 'Grafický Dizajn',
        desc: 'Vektorová grafika v Adobe Illustrator, tvorba vlastných vizuálnych prvkov, práca s vrstvami a príprava SVG/PNG podkladov pre moderný web.',
        tags: ['Adobe Illustrator', 'SVG Grafika', 'PNG Export', 'Vizuálna Identita', 'Typografia']
    },
    { 
        id: 'stone1', 
        label: 'O MNE', 
        size: 175, 
        bottom: 5, 
        left: 3, 
        rotate: 0,
        subtitle: 'Krok 1',
        title: 'O mne',
        desc: 'Ahoj, volám sa Lucia Danielová. Venujem sa tvorbe kreatívnych a funkčných webových riešení, kde spájam čistý kód s vlastným umeleckým dizajnom.',
        tags: ['Web Developer', 'Kreatívec', 'Zmysel pre detail', 'Riešenie problémov']
    },
    { 
        id: 'stone2', 
        label: 'ZRUČNOSTI', 
        size: 148, 
        bottom: 3, 
        left: 12, 
        rotate: 0,
        subtitle: 'Krok 2',
        title: 'Technické Zručnosti',
        desc: 'Ovládam moderné webové technológie na tvorbu responzívnych a interaktívnych stránok, správu verzií cez Git a prácu vo Visual Studio Code.',
        tags: ['HTML5', 'CSS3 (Flexbox & Grid)', 'JavaScript (ES6+)', 'VS Code', 'Git & GitHub']
    },
    { 
        id: 'stone3', 
        label: 'PROJEKTY', 
        size: 100, 
        bottom: 4, 
        left: 18, 
        rotate: 0,
        subtitle: 'Krok 3',
        title: 'Moje Projekty',
        desc: 'Ukážky mojej doterajšej práce: od interaktívnych JavaScript aplikácií a kalkulátorov až po toto plne animované autorské portfólio.',
        tags: ['Interaktívne Portfólio', 'JS Kalkulátor', 'Responzívne Weby', 'CSS Animácie'],
        actionText: 'Pozrieť môj GitHub',
        actionLink: 'https://github.com/LuciaDanielova'
    },
    { 
        id: 'stone4', 
        label: 'SKÚSENOSTI', 
        size: 100, 
        bottom: 3, 
        left: 26, 
        rotate: 0,
        subtitle: 'Krok 4',
        title: 'Skúsenosti & Prax',
        desc: 'Praktické skúsenosti s návrhom architektúry webu od prvotnej skice v Illustratore až po finálne nasadenie živého kódu na GitHub Pages.',
        tags: ['Frontend Architektúra', 'Ladenie kódu (DevTools)', 'Optimalizácia grafiky', 'Git Workflow']
    },
    { 
        id: 'stone5', 
        label: 'VZDELANIE', 
        size: 100, 
        bottom: 3, 
        left: 34, 
        rotate: 0,
        subtitle: 'Krok 5',
        title: 'Vzdelanie',
        desc: 'Neustále sa vzdelávam v moderných webových technológiách, prístupnosti webu (Accessibility) a najnovších trendoch v UI/UX dizajne.',
        tags: ['Samoštúdium', 'Online Kurzy', 'Webové Štandardy', 'Moderné CSS']
    },
    { 
        id: 'stone7', 
        label: 'VÍZIA', 
        size: 172, 
        bottom: 3, 
        left: 51, 
        rotate: 0,
        subtitle: 'Krok 7',
        title: 'Záľuby & Vízia',
        desc: 'Spájam technické myslenie s umením. Mojím cieľom je tvoriť weby, ktoré nie sú len obyčajnými šablónami, ale skutočným zážitkom pre používateľa.',
        tags: ['Digitálne Umenie', 'Inovácie', 'Kreatívne Kódovanie', 'Užívateľský Zážitok']
    },
    { 
        id: 'stone9', 
        label: 'KONTAKT', 
        size: 144, 
        bottom: 8, 
        left: 69, 
        rotate: -26,
        subtitle: 'Krok 9',
        title: 'Kontaktuj ma',
        desc: 'Máš záujem o spoluprácu, hľadáš posilu do tímu alebo máš otázku k mojim projektom? Ozvi sa mi a vytvorme spolu niečo výnimočné!',
        tags: ['Spolupráca', 'Web na mieru', 'Frontend Pozície'],
        actionText: 'Napísať e-mail',
        actionLink: 'mailto:luciadanielova1@gmail.com'
    }
];

const stage = document.getElementById('stage');
const modalOverlay = document.getElementById('modal-overlay');
const modalSubtitle = document.getElementById('modal-subtitle');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const modalTags = document.getElementById('modal-tags');
const modalAction = document.getElementById('modal-action');
const closeBtn = document.getElementById('close-btn');

// Predpokladaný pomer strán tvojho obrázka kameňa
const stoneRatio = 1.5; 

// Zväčšenie kameňov, aby sa do nich pohodlne zmestil text
const scaleMultiplier = 1.4;

// Funkcia na otvorenie modálneho okna s kompletným obsahom
function openModal(item, buttonElement) {
    modalSubtitle.innerText = item.subtitle || 'Sekcia portfólia';
    modalTitle.innerText = item.title || item.label;
    modalDesc.innerText = item.desc || `Obsah pre sekciu ${item.label}`;

    // Vykreslenie štítkov (tagov)
    modalTags.innerHTML = '';
    if (item.tags && item.tags.length > 0) {
        item.tags.forEach(tagText => {
            const span = document.createElement('span');
            span.className = 'tag-badge';
            span.innerText = tagText;
            modalTags.appendChild(span);
        });
    }

    // Vykreslenie akčného tlačidla (ak je definované, napr. pri Kontakte alebo Projektoch)
    modalAction.innerHTML = '';
    if (item.actionText && item.actionLink) {
        const link = document.createElement('a');
        link.className = 'action-btn';
        link.href = item.actionLink;
        if (item.actionLink.startsWith('http')) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
        link.innerText = item.actionText;
        modalAction.appendChild(link);
    }

    // Označenie kameňa ako navštíveného
    if (buttonElement) {
        buttonElement.classList.add('visited');
    }

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
}

// Funkcia na zatvorenie modálneho okna
function closeModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
}

// Vykreslenie všetkých 9 kameňov na scénu
function buildPortfolio() {
    stage.innerHTML = '';

    stoneConfig.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'stone-btn';
        btn.id = item.id;
        btn.setAttribute('aria-label', item.title || item.label);

        const textSpan = document.createElement('span');
        textSpan.innerText = item.label;
        btn.appendChild(textSpan);

        // Dynamické načítanie obrázka presne podľa ID (z 'stone8' vytiahne '8')
        const stoneNum = item.id.replace('stone', '');
        btn.style.backgroundImage = `url('stone${stoneNum}.png')`;

        // Výpočet zväčšených rozmerov
        const w = item.size * scaleMultiplier;
        const h = w * stoneRatio;

        btn.style.width = `${w}px`;
        btn.style.height = `${h}px`;
        btn.style.left = `${item.left}%`;
        btn.style.bottom = `${item.bottom}%`;
        
        // Rotácia kameňa (90 stupňov + kompozičná rotácia)
        const divRotation = 90 + item.rotate;
        btn.style.setProperty('--rot', `${divRotation}deg`);
        
        // Rotácia textu (kompenzácia, aby bol text rovno)
        const spanRotation = -divRotation;
        textSpan.style.transform = `rotate(${spanRotation}deg)`;

        // Spustenie úvodnej animácie
        btn.style.animation = `stoneAppear 0.6s ease-out ${index * 0.1}s forwards`;

        // Zapnutie vznášania po načítaní
        setTimeout(() => {
            btn.classList.add('is-floating');
        }, (index * 100) + 600);

        // Akcia po kliknutí
        btn.addEventListener('click', () => {
            console.log(`Kliknuté na sekciu: ${item.label}`);
            openModal(item, btn);
        });

        stage.appendChild(btn);
    });
}

// Zatváranie modálneho okna krížikom, kliknutím mimo alebo klávesou Escape
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Spustenie po načítaní stránky
window.onload = buildPortfolio;
