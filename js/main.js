/* ========================================
   ACGB.Lab — Main JS
   ======================================== */

// ---- Language Toggle ----
const translations = {
  es: {
    nav_about:      'Sobre el Lab',
    nav_team:       'Equipo',
    nav_research:   'Investigación',
    nav_fieldwork:  'Terreno',
    nav_documents:  'Documentos',
    nav_contact:    'Contacto',
    hero_subtitle:  'Investigamos los mecanismos fisiológicos y ecológicos que determinan la respuesta de los bosques frente al cambio climático, contribuyendo a su conservación y gestión sustentable.',
    hero_btn1:      'Conoce nuestra investigación',
    hero_btn2:      'Contáctanos',
    about_tag:      'Quiénes somos',
    about_title:    'Sobre el Laboratorio',
    about_p1:       'El Laboratorio de Adaptación Climática y Gestión del Bosque (ACGB.Lab) investiga los mecanismos fisiológicos y ecológicos de los ecosistemas forestales frente al cambio climático. Nuestro trabajo integra fisiología de árboles, silvicultura y teledetección para abordar desafíos actuales en la conservación y el manejo sustentable de los bosques de Chile.',
    about_p2:       'El laboratorio forma parte del Departamento de Manejo de Recursos Forestales y Medioambiente de la Facultad de Ciencias Forestales y de la Conservación de la Naturaleza de la Universidad de Chile. Colaboramos con instituciones nacionales e internacionales, incluyendo CONAF, Empresa Forestal Mininco y redes globales de investigación forestal.',
    stat1_label:    'Años de investigación',
    stat2_label:    'Proyectos activos',
    stat3_label:    'Publicaciones',
    stat4_label:    'Integrantes',
    about_group_caption: 'Equipo ACGB.Lab',
    team_tag:       'Personas',
    team_title:     'Nuestro Equipo',
    team_subtitle:  'Investigadores, personal de apoyo, estudiantes y colaboradores que hacen posible nuestro trabajo.',
    dir_label:      'Director / Investigador Principal',
    staff_label:    'Personal del Laboratorio',
    students_label: 'Estudiantes de Pregrado',
    interns_label:  'Pasantes',
    thesis_placeholder: 'Memoria: por definir',
    res_tag:        'Líneas de trabajo',
    res_title:      'Investigación',
    res_subtitle:   'Áreas temáticas en las que trabajamos actualmente.',
    res1_tag:       'Fisiología Forestal',
    res1_title:     'Hidráulica de Árboles y Resistencia a la Sequía',
    res1_desc:      'Estudiamos la resistencia a la cavitación xilemática en especies leñosas nativas de Chile, incluyendo esclerófilas y Nothofagus. Investigamos la variación intraespecífica frente al estrés hídrico para predecir la vulnerabilidad de los bosques ante sequías más intensas y frecuentes.',
    res2_tag:       'Teledetección',
    res2_title:     'Fenología Forestal y Monitoreo de Ecosistemas',
    res2_desc:      'Utilizamos fotografía digital repetida, imágenes satelitales y sensores remotos para monitorear el desarrollo fenológico del dosel forestal. Integramos señales de color de copa con modelos de intercambio de carbono y agua para comprender la respuesta de los ecosistemas a variaciones climáticas estacionales.',
    res3_tag:       'Cambio Climático',
    res3_title:     'Impactos del Cambio Climático en Bosques Chilenos',
    res3_desc:      'Analizamos cómo el cambio climático afecta la distribución, función y dinámica de los bosques de Chile. Modelamos el balance hídrico y el "Time of Emergence" de condiciones sin precedentes en ecosistemas mediterráneos, incluyendo el bosque esclerófilo de Quillaja saponaria y Lithraea caustica.',
    field_tag:      'Divulgación y terreno',
    field_title:    'Trabajo en Terreno y Difusión',
    field_subtitle: 'Registros de nuestras salidas a campo, experimentos en sitio y actividades de difusión científica.',
    video_caption:  '"Los bosques sedientos de Chile" — material de divulgación sobre el impacto de la sequía en los bosques chilenos.',
    docs_tag:       'Publicaciones y recursos',
    docs_title:     'Publicaciones y Documentos',
    docs_subtitle:  'Artículos científicos, currículum del investigador principal y materiales descargables.',
    docs_download:  'Descargar',
    contact_tag:    'Comunicación',
    contact_title:  'Contacto',
    contact_subtitle: 'Si tienes consultas sobre nuestra investigación o quieres colaborar, escríbenos.',
    contact_p:      'Estamos ubicados en la Facultad de Ciencias Forestales y de la Conservación de la Naturaleza de la Universidad de Chile. Puedes visitarnos o escribirnos por correo.',
    form_name:      'Tu nombre',
    form_email:     'Tu correo electrónico',
    form_msg:       'Tu mensaje',
    form_send:      'Enviar mensaje',
    footer_copy:    '© 2026 ACGB.Lab — Laboratorio de Adaptación Climática y Gestión del Bosque · Universidad de Chile. Todos los derechos reservados.',
  },
  en: {
    nav_about:      'About',
    nav_team:       'Team',
    nav_research:   'Research',
    nav_fieldwork:  'Fieldwork',
    nav_documents:  'Documents',
    nav_contact:    'Contact',
    hero_subtitle:  'We investigate the physiological and ecological mechanisms that determine forest responses to climate change, contributing to their conservation and sustainable management.',
    hero_btn1:      'Explore our research',
    hero_btn2:      'Contact us',
    about_tag:      'Who we are',
    about_title:    'About the Lab',
    about_p1:       'The Climate Adaptation and Forest Management Laboratory (ACGB.Lab) investigates the physiological and ecological mechanisms of forest ecosystems in the face of climate change. Our work integrates tree physiology, silviculture, and remote sensing to address current challenges in the conservation and sustainable management of Chile\'s forests.',
    about_p2:       'The laboratory is part of the Department of Forest Management and the Environment at the Faculty of Forest Sciences and Nature Conservation, Universidad de Chile. We collaborate with national and international institutions, including CONAF, Empresa Forestal Mininco, and global forest research networks.',
    stat1_label:    'Years of research',
    stat2_label:    'Active projects',
    stat3_label:    'Publications',
    stat4_label:    'Members',
    about_group_caption: 'ACGB.Lab team',
    team_tag:       'People',
    team_title:     'Our Team',
    team_subtitle:  'Researchers, lab staff, students, and collaborators who make our work possible.',
    dir_label:      'Principal Investigator',
    staff_label:    'Lab Staff',
    students_label: 'Undergraduate Students',
    interns_label:  'Interns',
    thesis_placeholder: 'Thesis: to be defined',
    res_tag:        'Lines of work',
    res_title:      'Research',
    res_subtitle:   'Thematic areas we are currently working on.',
    res1_tag:       'Forest Physiology',
    res1_title:     'Tree Hydraulics and Drought Resistance',
    res1_desc:      'We study xylem cavitation resistance in native woody species of Chile, including sclerophylls and Nothofagus. We investigate intraspecific variation under water stress to predict forest vulnerability to increasingly intense and frequent droughts.',
    res2_tag:       'Remote Sensing',
    res2_title:     'Forest Phenology and Ecosystem Monitoring',
    res2_desc:      'We use repeat digital photography, satellite imagery, and remote sensors to monitor the phenological development of forest canopies. We integrate canopy colour signals with carbon and water exchange models to understand ecosystem responses to seasonal climate variation.',
    res3_tag:       'Climate Change',
    res3_title:     'Climate Change Impacts on Chilean Forests',
    res3_desc:      'We analyse how climate change affects the distribution, function, and dynamics of Chile\'s forests. We model water balance and the Time of Emergence of unprecedented climatic conditions in Mediterranean ecosystems, including the sclerophyllous forest of Quillaja saponaria and Lithraea caustica.',
    field_tag:      'Outreach & fieldwork',
    field_title:    'Fieldwork and Outreach',
    field_subtitle: 'Records of our field trips, on-site experiments, and science communication activities.',
    video_caption:  '"Los bosques sedientos de Chile" — outreach material on the impact of drought on Chilean forests.',
    docs_tag:       'Publications & resources',
    docs_title:     'Publications and Documents',
    docs_subtitle:  'Scientific articles, PI curriculum vitae, and downloadable materials.',
    docs_download:  'Download',
    contact_tag:    'Get in touch',
    contact_title:  'Contact',
    contact_subtitle: 'If you have questions about our research or want to collaborate, write to us.',
    contact_p:      'We are located at the Faculty of Forest Sciences and Nature Conservation, Universidad de Chile. You can visit us or reach us by email.',
    form_name:      'Your name',
    form_email:     'Your email address',
    form_msg:       'Your message',
    form_send:      'Send message',
    footer_copy:    '© 2026 ACGB.Lab — Climate Adaptation and Forest Management Laboratory · Universidad de Chile. All rights reserved.',
  }
};

let currentLang = 'es';

function applyLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ---- Hamburger ----
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// ---- Active nav on scroll ----
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 80;
  sections.forEach(sec => {
    const top    = sec.offsetTop;
    const height = sec.offsetHeight;
    const link   = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
    if (link) link.classList.toggle('active', scrollY >= top && scrollY < top + height);
  });
});

// ---- Lightbox ----
const overlay = document.querySelector('.lightbox-overlay');
const lbImg   = overlay ? overlay.querySelector('img') : null;
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    if (!overlay || !lbImg) return;
    lbImg.src = img.src;
    overlay.classList.add('open');
  });
});
if (overlay) {
  overlay.querySelector('.lightbox-close').addEventListener('click', () => overlay.classList.remove('open'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
}

// ---- Init language ----
applyLang('es');
