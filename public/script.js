const featuredShows = [
    {
      name: "Breaking Bad",
      image: "https://via.placeholder.com/500x281"
    },
    {
      name: "Stranger Things",
      image: "https://via.placeholder.com/500x281"
    },
    {
      name: "The Witcher",
      image: "https://via.placeholder.com"
    },
    // Adicione mais programas aqui se desejar
  ];
  
  const genres = [
    { name: "Drama" },
    { name: "Suspense" },
    { name: "Aventura" },
    // Adicione mais gêneros aqui se desejar
  ];
  
  const featuredShowsList = document.querySelector(".featured-shows");
  const genresList = document.querySelector(".genres");
  
  // Adicionar programas destacados à lista
  featuredShows.forEach(show => {
    const showItem = document.createElement("li");
    const showImage = document.createElement("img");
    const showName = document.createElement("p");
  
    showImage.src = show.image;
    showName.textContent = show.name;
  
    showItem.appendChild(showImage);
    showItem.appendChild(showName);
  
    featuredShowsList.appendChild(showItem);
  });
  
  // Adicionar gêneros à lista
  genres.forEach(genre => {
    const genreItem = document.createElement("li");
    const genreName = document.createElement("p");
  
    genreName.textContent = genre.name;
  
    genreItem.appendChild(genreName);
  
    genresList.appendChild(genreItem);
  });
  
