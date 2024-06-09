const translations = {
  pt: {
      welcome: "Bem-vindo!",
      intro: "Sou um desenvolvedor júnior em desenvolvimento frontend (HTML5, CSS3, JavaScript) e atualmente estou aprendendo Python.",
      home: "Início",
      projects: "Projetos",
      contact: "Contato",
      myProjects: "Meus Projetos",
      portfolio: "Confira meus projetos no GitHub:",
      githubPortfolio: "GitHub Portfolio",
      contactMe: "Contato"
  },
  en: {
      welcome: "Welcome!",
      intro: "I am a junior developer in frontend development (HTML5, CSS3, JavaScript) and currently learning Python.",
      home: "Home",
      projects: "Projects",
      contact: "Contact",
      myProjects: "My Projects",
      portfolio: "Check out my projects on my GitHub:",
      githubPortfolio: "GitHub Portfolio",
      contactMe: "Contact"
  }
};

function changeLanguage(lang) {
  document.querySelectorAll('.lang').forEach((element) => {
    const key = element.getAttribute('key');
    element.textContent = translations[lang][key];
  });
}
