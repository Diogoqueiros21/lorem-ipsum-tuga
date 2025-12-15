const data = {
    intros: [
        "Eh pá,", "Ouve lá,", "Diz-me uma coisa,", "Atenção que", "Por acaso,", "Imagina só,", "Vê lá se,", 
        "Então,", "Mas olha que,", "Portanto,", "Basicamente,", "Sinceramente,", "Epá,", "Ó homem,",
        "Olha que não sei se,", "A verdade é que,", "No outro dia,", "Sabes que mais?", "E digo-te mais,",
        "Agora a sério,", "Deixa-me dizer-te,", "Ouve o que te digo,", "Pois é,", "Curiosamente,",
        "Ainda por cima,", "E não é que,", "Vê bem,", "Repara nisto,"
    ],
    subjects: [
        "o Cristiano Ronaldo", "a Cristina Ferreira", "o Gato Fedorento", "o Zé do Pipo", "uma alheira", 
        "o Fernando Mendes", "o Toy", "o Jorge Jesus", "o Marcelo", "a minha vizinha", "o emplastro",
        "o Quim Barreiros", "o Herman José", "o taxista", "o gajo do talho", "o meu primo da Suíça",
        "o fiscal das finanças", "o carteiro", "a peixeira", "o trolha", "o estagiário", "o patrão",
        "o árbitro", "o treinador de bancada", "o Zé Povinho", "a padeira de Aljubarrota", "o Camões",
        "o D. Afonso Henriques", "o Presidente da Junta", "o homem do lixo", "a senhora do café",
        "o meu avô", "o cão do vizinho", "o gato da vizinha", "o papagaio", "o periquito"
    ],
    actions: [
        "foi aos caracóis", "partiu a loiça toda", "ficou a ver navios", "mandou vir um bitoque", 
        "foi comprar tabaco", "perdeu a carteira", "ganhou o Euromilhões", "foi à bola", 
        "apanhou uma bebedeira", "comeu uma francesinha", "foi ao Santuário", "apanhou o elétrico 28",
        "foi ver o Benfica", "foi ver o Sporting", "foi ver o Porto", "armou uma peixeirada",
        "foi à feira", "comprou um pastel de nata", "bebeu uma ginjinha", "foi ao fado",
        "apanhou uma seca", "deu um ganda tralho", "foi apanhar sol", "foi à praia",
        "foi ao shopping", "foi ao cinema", "foi ao teatro", "foi ao concerto", "foi ao festival",
        "foi à discoteca", "foi ao bar", "foi ao restaurante", "foi ao café", "foi à pastelaria",
        "foi à padaria", "foi à mercearia", "foi ao talho", "foi à peixaria", "foi à farmácia",
        "foi ao médico", "foi ao dentista", "foi ao hospital", "foi ao centro de saúde"
    ],
    complements: [
        "no Chiado", "com o Fernando Mendes", "antes do telejornal", "na casa da vizinha", 
        "no Pingo Doce", "na tasca do Zé", "em Leiria (que não existe)", "no Algarve", 
        "na ponte 25 de Abril", "no meio do trânsito", "na fila da segurança social",
        "enquanto comia tremoços", "a ouvir Xutos", "com uma imperial na mão",
        "na Segunda Circular", "no Marquês de Pombal", "na Torre de Belém", "nos Jerónimos",
        "na Ribeira", "na Baixa", "no Rossio", "no Bairro Alto", "em Alfama", "na Mouraria",
        "em Sintra", "em Cascais", "no Estoril", "na Caparica", "na Arrábida", "no Gerês",
        "na Serra da Estrela", "no Douro", "no Alentejo", "na Madeira", "nos Açores",
        "no metro", "no autocarro", "no comboio", "no barco", "no avião", "no táxi", "no uber"
    ],
    connectors: [
        "e depois", "mas de repente", "porque", "visto que", "só que", "entretanto", "por isso é que",
        "e nisto", "e do nada", "mas atenção,", "e então", "e por causa disso", "e logo a seguir",
        "e mais tarde", "e no fim", "e no entanto", "e contudo", "e todavia", "e porém",
        "e além disso", "e ainda", "e também", "e igualmente", "e da mesma forma", "e assim",
        "e deste modo", "e consequentemente", "e por conseguinte", "e portanto", "e logo"
    ],
    endings: [
        ", tás a ver?", ", hã?", ", carago!", ", pá!", ", mai nada!", ", espetáculo!", 
        ", percebes?", ", né?", ", ouviste?", ", granda maluco!", ", que cena!", ", fónix!",
        ", não achas?", ", diz lá!", ", a sério!", ", juro!", ", palavra de honra!",
        ", acredita!", ", confia!", ", top!", ", brutal!", ", lindo!", ", maravilha!",
        ", que luxo!", ", que classe!", ", que nível!", ", que categoria!", ", que estilo!"
    ],
    slang: [
        "bué da", "ganda", "tipo", "cena", "tuga", "fixe", "top", "brutal", "marado", "chanfrado",
        "giro", "porreiro", "bacano", "fixe", "mó", "kota", "chunga", "beto", "mitra", "gunão"
    ]
};

// Event Listeners
document.getElementById('generate-btn').addEventListener('click', generateLorem);
document.getElementById('copy-btn').addEventListener('click', copyToClipboard);
document.getElementById('surprise-btn').addEventListener('click', surpriseMe);
document.getElementById('intensity').addEventListener('input', updateIntensityLabel);

// Initial Setup
updateIntensityLabel();
generateLorem();

function adjustValue(delta) {
    const input = document.getElementById('paragraphs');
    let newValue = parseInt(input.value) + delta;
    if (newValue >= parseInt(input.min) && newValue <= parseInt(input.max)) {
        input.value = newValue;
    }
}

function updateIntensityLabel() {
    const value = parseInt(document.getElementById('intensity').value);
    const label = document.getElementById('intensity-label');
    
    if (value < 25) label.textContent = "Suave";
    else if (value < 50) label.textContent = "Equilibrado";
    else if (value < 75) label.textContent = "Comó Milho";
    else label.textContent = "Azeiteiro";
}

function surpriseMe() {
    // Randomize paragraphs
    document.getElementById('paragraphs').value = Math.floor(Math.random() * 5) + 1;
    
    // Randomize intensity
    const intensity = Math.floor(Math.random() * 100) + 1;
    document.getElementById('intensity').value = intensity;
    updateIntensityLabel();
    
    // Randomize checkboxes (visual only now, as logic is template based)
    document.getElementById('include-celebrities').checked = Math.random() > 0.3;
    document.getElementById('include-expressions').checked = Math.random() > 0.3;
    document.getElementById('include-food').checked = Math.random() > 0.3;
    
    generateLorem();
}

function generateLorem() {
    // Add SIUUU animation
    const btn = document.getElementById('generate-btn');
    const originalText = btn.innerHTML;
    
    btn.classList.add('siu-anim');
    btn.innerHTML = "SIUUUUUUUU! 🇵🇹";
    
    setTimeout(() => {
        btn.classList.remove('siu-anim');
        btn.innerHTML = originalText;
    }, 1000);

    const numParagraphs = parseInt(document.getElementById('paragraphs').value);
    const intensity = parseInt(document.getElementById('intensity').value);
    
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    for (let i = 0; i < numParagraphs; i++) {
        const paragraph = createParagraph(intensity);
        const pElement = document.createElement('p');
        pElement.textContent = paragraph;
        outputDiv.appendChild(pElement);
    }
}

function createParagraph(intensity) {
    const numSentences = Math.floor(Math.random() * 4) + 3; // 3 to 6 sentences
    let paragraph = "";
    
    // Create a temporary copy of data to avoid repetition within paragraph
    let tempData = JSON.parse(JSON.stringify(data));

    for (let i = 0; i < numSentences; i++) {
        paragraph += createSentence(intensity, tempData) + " ";
    }

    return paragraph.trim();
}

function createSentence(intensity, tempData) {
    // Template: [Intro] [Subject] [Action] [Complement] [Connector] [Subject] [Action] [Ending]
    // Or simpler: [Intro] [Subject] [Action] [Complement] [Ending]
    
    const isComplex = Math.random() > 0.5;
    const useSlang = (intensity / 100) > Math.random();
    
    let sentence = "";
    
    // 1. Intro (Optional based on intensity)
    if (Math.random() > 0.3) {
        sentence += getRandomAndRemove(tempData.intros) + " ";
    }

    // 2. Core Sentence
    sentence += buildCoreSentence(useSlang, tempData);

    // 3. Connector + Second part (if complex)
    if (isComplex) {
        sentence += " " + getRandomAndRemove(tempData.connectors) + " " + buildCoreSentence(useSlang, tempData);
    }

    // 4. Ending (More frequent with higher intensity)
    if (Math.random() < (intensity / 100)) {
        sentence += getRandomAndRemove(tempData.endings);
    } else {
        sentence += ".";
    }

    // Capitalize first letter
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    
    return sentence;
}

function buildCoreSentence(useSlang, tempData) {
    let s = getRandomAndRemove(tempData.subjects) + " ";
    
    if (useSlang && Math.random() > 0.5) {
        s += getRandomAndRemove(tempData.slang) + " "; 
    }
    
    s += getRandomAndRemove(tempData.actions) + " ";
    s += getRandomAndRemove(tempData.complements);
    
    return s;
}

function getRandomAndRemove(arr) {
    if (arr.length === 0) {
        // Refill if empty (fallback to original data if needed, but for now just return empty string or placeholder)
        // Ideally we should refill from master data, but let's just pick random if empty to avoid crash
        return ""; 
    }
    const index = Math.floor(Math.random() * arr.length);
    const item = arr[index];
    arr.splice(index, 1); // Remove used item
    return item;
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function copyToClipboard() {
    const text = document.getElementById('output').innerText;
    navigator.clipboard.writeText(text).then(() => {
        showToast();
    });
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}
