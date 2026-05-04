let filmes = [
  { nome: "Interestelar", cat: "Ficção Científica", ano: "2014", rating: "8.7", img: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", banner: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg", desc: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço para garantir a sobrevivência da humanidade.", trailerUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E" },
  { nome: "Vingadores: Ultimato", cat: "Ação", ano: "2019", rating: "8.4", img: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", banner: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg", desc: "Os Vingadores restantes se reúnem para desfazer as ações de Thanos e restaurar a ordem no universo.", trailerUrl: "https://www.youtube.com/watch?v=TcMBFSGVi1c" },
  { nome: "Batman: O Cavaleiro das Trevas", cat: "Ação", ano: "2008", rating: "9.0", img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", banner: "https://image.tmdb.org/t/p/original/nMKdUFyrkirBBhAFL7vi8irbU3h.jpg", desc: "Batman enfrenta o Coringa em uma batalha épica pelo destino de Gotham City.", trailerUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY" },
  { nome: "Coringa", cat: "Drama", ano: "2019", rating: "8.4", img: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", banner: "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1ZIz5LrVEHe.jpg", desc: "A jornada de Arthur Fleck até se tornar o icônico vilão de Gotham.", trailerUrl: "https://www.youtube.com/watch?v=zAGVQLHvwOY" },
  { nome: "Homem de Ferro", cat: "Ação", ano: "2008", rating: "7.9", img: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg", banner: "https://image.tmdb.org/t/p/original/6WBeq4fCfn7AN9EGAoJCdnfBTa4.jpg", desc: "Tony Stark constrói uma armadura de alta tecnologia para combater o crime.", trailerUrl: "https://www.youtube.com/watch?v=8ugaeA-nMTc" },
  { nome: "Guardiões da Galáxia", cat: "Ação", ano: "2014", rating: "8.0", img: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg", banner: "https://image.tmdb.org/t/p/original/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg", desc: "Um grupo de criminosos intergalácticos deve se unir para salvar o universo.", trailerUrl: "https://www.youtube.com/watch?v=d96cjJhvlMA" },
  { nome: "Matrix", cat: "Ficção Científica", ano: "1999", rating: "8.7", img: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", banner: "https://image.tmdb.org/t/p/original/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg", desc: "Um hacker descobre a verdade chocante sobre a sua realidade.", trailerUrl: "https://www.youtube.com/watch?v=vKQi3bBA1y8" },
  { nome: "Avatar: O Caminho da Água", cat: "Ficção Científica", ano: "2022", rating: "7.8", img: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg", banner: "https://image.tmdb.org/t/p/original/AmR3JfberLjGaFz2poMKtAsE9HD.jpg", desc: "Jake Sully e Ney'tiri lutam para proteger sua família em Pandora.", trailerUrl: "https://www.youtube.com/watch?v=5PSNL1qE6VY" },
  { nome: "Jurassic Park", cat: "Aventura", ano: "1993", rating: "8.2", img: "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg", banner: "https://image.tmdb.org/t/p/original/9BBTo108Kh9pNHxAc5UiHqATzKR.jpg", desc: "Dinossauros extintos ganham vida em um parque temático.", trailerUrl: "https://www.youtube.com/watch?v=lc0UehYemQA" }
];

let bannerIndex = 0;

function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;
  if(u && p) {
    sessionStorage.setItem("logado", "true");
    iniciarApp();
  } else {
    alert("Preencha usuário e senha.");
  }
}

function iniciarApp() {
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("app").style.display = "block";
  mostrarCategorias(filmes);
  configurarBanner();
  
  window.addEventListener("scroll", () => {
    document.getElementById("header").classList.toggle("scrolled", window.scrollY > 50);
  });
}

function configurarBanner() {
  atualizarBanner(filmes[0]);
  setInterval(() => {
    bannerIndex = (bannerIndex + 1) % filmes.length;
    atualizarBanner(filmes[bannerIndex]);
  }, 5000); 
}

function atualizarBanner(f) {
  const bg = document.getElementById("bannerBg");
  const content = document.getElementById("bannerContent");
  
  const img = new Image();
  img.src = f.banner;
  img.onload = () => {
    bg.style.backgroundImage = `url('${f.banner}')`;
    bg.style.backgroundSize = "cover";
    bg.style.backgroundPosition = "center 20%";
    
    document.getElementById("bannerTitle").textContent = f.nome;
    document.getElementById("bannerDesc").textContent = f.desc;
    document.getElementById("bannerMeta").innerHTML = `
      <span class="meta-badge meta-rating">⭐ ${f.rating}</span>
      <span class="meta-badge">${f.ano}</span>
      <span class="meta-badge">${f.cat}</span>
    `;
    
    // REMOVIDO BOTÃO ASSISTIR DO BANNER - DEIXADO APENAS O TRAILER
    if(document.getElementById("btnMainPlay")) document.getElementById("btnMainPlay").style.display = "none";
    
    // Ajustado para abrir no site
    document.getElementById("btnMainTrailer").onclick = () => abrirPlayer(f);
    content.style.opacity = "1";
  };
}

function filtrar() {
  const termo = document.getElementById("busca").value.toLowerCase();
  const filtrados = filmes.filter(f => 
    f.nome.toLowerCase().includes(termo) || 
    f.cat.toLowerCase().includes(termo)
  );
  mostrarCategorias(filtrados);
}

function mostrarCategorias(lista) {
  const container = document.getElementById("categoriasContainer");
  container.innerHTML = "";
  const categorias = [...new Set(lista.map(f => f.cat))];
  
  categorias.forEach(cat => {
    const section = document.createElement("section");
    section.className = "categoria";
    section.innerHTML = `<h2>${cat}</h2><div class="filmes"></div>`;
    const grid = section.querySelector(".filmes");
    
    lista.filter(f => f.cat === cat).forEach(f => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card-thumb">
          <img src="${f.img}" alt="${f.nome}">
          <div class="card-overlay">
            <div class="overlay-btns">
              <button class="overlay-btn btn-trailer" onclick="event.stopPropagation(); abrirPlayer(${JSON.stringify(f).replace(/"/g, '&quot;')})">🎬 Trailer</button>
            </div>
          </div>
        </div>
        <div class="card-info">
          <div class="card-nome">${f.nome}</div>
          <div class="card-meta"><span class="card-ano">${f.ano}</span><span class="card-rating">⭐ ${f.rating}</span></div>
        </div>
      `;
      card.onclick = () => abrirPlayer(f);
      grid.appendChild(card);
    });
    container.appendChild(section);
  });
}

function abrirPlayer(f) {
  // Extrai o ID do vídeo para funcionar no iframe (embed)
  const videoId = f.trailerUrl.split('v=')[1];
  document.getElementById("videoFrame").src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  document.getElementById("player").style.display = "flex";
}

function fecharPlayer() {
  document.getElementById("player").style.display = "none";
  document.getElementById("videoFrame").src = "";
}

window.onload = () => { if(sessionStorage.getItem("logado")) iniciarApp(); };