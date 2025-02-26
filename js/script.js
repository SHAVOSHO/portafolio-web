// Estado inicial: resumido y formal
let aboutState = {
    length: 'resumido',  // 'resumido' o 'extendido'
    tone: 'formal'       // 'formal' o 'informal'
  };
  
  // Definición de textos para cada variante
  const aboutTexts = {
    resumido: {
      formal: "Estudié en el Tecnológico de Parral, Chihuahua, motivado por mi interés en comprender el funcionamiento interno de los videojuegos. Participé en hackatones y realicé proyectos destacados.",
      informal: "¡Quiúbole! Soy Alan. Estudié en el Tecnológico de Parral porque me latía descubrir cómo se movían los personajes en los videojuegos. He participado en hackatones, armé apps y hasta me rifé con el cableado. Además, me late echarme unas buenas sesiones de anime y enterarme de lo último en tecnología."
    },
    extendido: {
      formal: "Estudié en el Tecnológico de Parral, Chihuahua, impulsado por una profunda pasión por entender el funcionamiento interno de los videojuegos. Durante mi formación, participé en eventos como Hackatec/Innovatec, colaborando en proyectos para optimizar sistemas empresariales y desarrollando aplicaciones como <a href=\"https://play.google.com/store/apps/details?id=com.gys_dev.gys&hl=en&gl=US\" target=\"_blank\">Garage Sale Finder</a>. Mi enfoque profesional se centra en aplicar las nuevas tecnologías de manera responsable y eficiente.",
      informal: "¡Qué onda! Soy Alan y te cuento sin rodeos: estudié en el Tecnológico de Parral porque siempre me latió descubrir qué rollo traían los videojuegos detrás de cámaras. Entre hackatones, apps y hasta aventones con el cableado, me he rifado enfrentando retos. Uno de mis proyectos, <a href=\"https://play.google.com/store/apps/details?id=com.gys_dev.gys&hl=en&gl=US\" target=\"_blank\">Garage Sale Finder</a>, te ayuda a encontrar garajes abiertos cerca. Y en mi tiempo libre, me la paso viendo anime y poniéndome al tanto de lo nuevo en tecnología."
    }
  };
  
  // Referencias a elementos
  const aboutTextElem = document.getElementById('about-text');
  const btnToggleLength = document.getElementById('toggle-length');
  const btnToggleTone = document.getElementById('toggle-tone');
  
  // Función para actualizar el contenido y la etiqueta de los botones
  function updateAboutSection() {
    // Usamos innerHTML para que se interprete el enlace en la versión extendida
    aboutTextElem.innerHTML = aboutTexts[aboutState.length][aboutState.tone];
  
    // Botón de longitud: muestra la acción disponible
    btnToggleLength.textContent = (aboutState.length === 'resumido') ? "Extender" : "Resumir";
  
    // Botón de tono: muestra la acción disponible
    btnToggleTone.textContent = (aboutState.tone === 'formal') ? "Informal" : "Formal";
  }
  
  // Eventos para los botones
  btnToggleLength.addEventListener('click', () => {
    // Toggle de longitud
    aboutState.length = (aboutState.length === 'resumido') ? 'extendido' : 'resumido';
    updateAboutSection();
  });
  
  btnToggleTone.addEventListener('click', () => {
    // Toggle de tono
    aboutState.tone = (aboutState.tone === 'formal') ? 'informal' : 'formal';
    updateAboutSection();
  });
  
  // Botón "Sobre Mi"
  const btnNavSobreMi = document.getElementById('nav-sobre-mi');
  const sectionAbout = document.querySelector('.about');
  btnNavSobreMi.addEventListener('click', () => {
    sectionAbout.scrollIntoView({ behavior: 'smooth' });
  });
  
  // Al hacer clic en la foto de perfil, se desplaza a la parte superior
  const profileImage = document.querySelector('.profile-img img');
  profileImage.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Botón "Portafolio"
  const btnNavPortfolio = document.getElementById('nav-portfolio');
  const sectionPortfolio = document.getElementById('portfolio-section');
  btnNavPortfolio.addEventListener('click', () => {
    sectionPortfolio.scrollIntoView({ behavior: 'smooth' });
  });
  
  // Carrusel de imágenes para GYS Android
  const carouselImages = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png"
  ];
  let currentIndex = 0;
  const androidCarousel = document.getElementById("android-carousel");
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    androidCarousel.src = carouselImages[currentIndex];
  }, 3000);
  
  document.getElementById("android-prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    androidCarousel.src = carouselImages[currentIndex];
  });
  
  document.getElementById("android-next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    androidCarousel.src = carouselImages[currentIndex];
  });
  
  // Carrusel de imágenes para GYS iOS
  const iosCarouselImages = [
    "img/1_ios.png",
    "img/2_ios.png",
    "img/3_ios.png",
    "img/4_ios.png",
    "img/5_ios.png",
    "img/6_ios.png"
  ];
  let currentIosIndex = 0;
  const iosCarousel = document.getElementById("ios-carousel");
  
  setInterval(() => {
    currentIosIndex = (currentIosIndex + 1) % iosCarouselImages.length;
    iosCarousel.src = iosCarouselImages[currentIosIndex];
  }, 3000);
  
  document.getElementById("ios-prev").addEventListener("click", () => {
    currentIosIndex = (currentIosIndex - 1 + iosCarouselImages.length) % iosCarouselImages.length;
    iosCarousel.src = iosCarouselImages[currentIosIndex];
  });
  
  document.getElementById("ios-next").addEventListener("click", () => {
    currentIosIndex = (currentIosIndex + 1) % iosCarouselImages.length;
    iosCarousel.src = iosCarouselImages[currentIosIndex];
  });
  
  // Botón "Educación"
  const btnNavEducation = document.getElementById('nav-education');
  const sectionStudies = document.getElementById('studies-section');
  btnNavEducation.addEventListener('click', () => {
    sectionStudies.scrollIntoView({ behavior: 'smooth' });
  });
  
  // Botón "Skills"
  const btnNavSkills = document.getElementById('nav-skills');
  const sectionSkills = document.getElementById('skills-section');
  btnNavSkills.addEventListener('click', () => {
    sectionSkills.scrollIntoView({ behavior: 'smooth' });
  });
  
  // Botón "Contacto"
  const btnNavContact = document.getElementById('nav-contact');
  const sectionContact = document.getElementById('contact-section');
  btnNavContact.addEventListener('click', () => {
    sectionContact.scrollIntoView({ behavior: 'smooth' });
  });
  
  // Botón de descarga del CV (si tuvieras uno específico con id)
  document.getElementById('btn-download-cv')?.addEventListener('click', () => {
    window.location.href = 'CV_Alan_Sosa_Pereyra_2025.pdf';
  });
  
  // Inicializamos la sección con el estado por defecto
  updateAboutSection();
  