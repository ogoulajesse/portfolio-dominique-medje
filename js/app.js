/**
 * ===================================================================
 * PORTFOLIO MAHUNA RAPHAËL DOMINIQUE MEDJE - APPLICATION INTERACTIVE
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. DATA STORE: PROJETS & ÉTUDES DE CAS MAJEURES ---
  const projectsData = [
    {
      id: 'dclic-cockpit',
      category: 'projet-360',
      badge: 'Gestion de Projets 360°',
      org: 'OIF / Programme D-CLIC (2026)',
      title: 'Modélisation & Cockpit de Pilotage Stratégique 360°',
      summary: 'Conception intégrale d\'un dispositif de gouvernance de projet : diagnostic stratégique, rétro-planning Gantt jalonné, modélisation budgétaire prévisionnelle et tableau de bord décisionnel (KPIs & ROI social).',
      deliverables: ['Cahier des charges & WBS', 'Rétro-planning Gantt budgété', 'Cockpit KPI & Tableaux de bord', 'Matrice RACI & Reporting DG'],
      metrics: [
        { label: 'Jalons critiques validés', val: '100%' },
        { label: 'Maîtrise budgétaire', val: 'Écart < 2%' },
        { label: 'Indicateurs pilotés', val: '18 KPIs' }
      ],
      details: {
        context: 'Dans le cadre du parcours de spécialisation de haut niveau D-CLIC / OIF, ce projet a constitué le livrable de synthèse démontrant l\'aptitude à orchestrer des projets complexes du brief initial jusqu\'à la mesure du retour sur investissement.',
        challenges: 'Structurer une approche rigoureuse permettant d\'aligner parties prenantes, respect des délais d\'exécution stricts, contraintes financières et reporting transparent pour comités de direction.',
        methodology: 'Méthodologie 360° articulée en 5 phases : Diagnostic & cadrage, Planification opérationnelle & Gantt, Modélisation budgétaire et allocation des ressources, Déploiement et communication multi-canal, Pilotage de la performance via cockpits décisionnels.',
        impact: 'Standardisation d\'outils réutilisables pour le pilotage d\'interventions à fort impact social et sanitaire.'
      }
    },
    {
      id: 'sante-simr-parakou',
      category: 'sante-publique',
      badge: 'Santé Publique & Terrain',
      org: 'Ministère de la Santé du Bénin (2024 – Présent)',
      title: 'Surveillance Épidémiologique SIMR & Supervision VAD',
      summary: 'Coordination opérationnelle de la santé communautaire sur le 2ème Arrondissement de Parakou : détection précoce des maladies sous surveillance, encadrement des relais et fiabilisation des statistiques sanitaires.',
      deliverables: ['Notification SIMR hebdomadaire', 'Supervision des Visites à Domicile', 'Rapports statistiques district', 'Formation continue des relais'],
      metrics: [
        { label: 'Populations couvertes', val: '+12 000 hab.' },
        { label: 'Relais communautaires encadrés', val: '15+ agents' },
        { label: 'Taux de conformité SIMR', val: '99%' }
      ],
      details: {
        context: 'Le 2ème Arrondissement de Parakou constitue un bassin démographique dense où la détection précoce des flambées épidémiques (paludisme, méningite, choléra, rougeole) est vitale.',
        challenges: 'Maintenir un maillage communautaire actif, assurer la transmission sans faille des alertes sanitaires et garantir la qualité des données collectées sur le terrain.',
        methodology: 'Organisation de plannings de visites à domicile (VAD), audits réguliers des registres villageois, séances de recyclage pédagogique des relais de santé et intégration rigoureuse aux plateformes de rapportage du district sanitaire.',
        impact: 'Zéro retard de notification sur les cas index et amélioration substantielle de la couverture vaccinale (PEV) du secteur.'
      }
    },
    {
      id: 'dssr-jeunesse-vnu',
      category: 'sante-publique',
      badge: 'Humanitaire & DSSR',
      org: 'Programme VNU & Médecins du Monde Suisse (2024 – Présent)',
      title: 'Promotion des Droits en Santé Sexuelle & Reproductive (DSSR)',
      summary: 'Point focal opérationnel du projet de promotion des droits en santé sexuelle et reproductive des adolescents et jeunes (10 à 24 ans) : ateliers participatifs, formation de pairs éducateurs et plaidoyer ODD 3.',
      deliverables: ['Ateliers participatifs de sensibilisation', 'Guide de formation pairs éducateurs', 'Plaidoyer communal ODD 3', 'Rapports d\'impact trimestriels'],
      metrics: [
        { label: 'Jeunes et ados sensibilisés', val: '+2 500 jeunes' },
        { label: 'Pairs éducateurs formés', val: '35 pairs' },
        { label: 'Taux d\'adhésion ateliers', val: '94%' }
      ],
      details: {
        context: 'Les adolescents et jeunes font face à des tabous persistants et à des difficultés d\'accès aux services de santé reproductive adaptés.',
        challenges: 'Déconstruire les stéréotypes, encourager l\'expression libre des jeunes et créer un pont de confiance entre la jeunesse et les structures sanitaires habilitées.',
        methodology: 'Animation d\'ateliers interactifs en milieu scolaire et communautaire, mobilisation citoyenne par les pairs, plaidoyer auprès des autorités locales et comités de parents pour un accès universel aux soins de qualité.',
        impact: 'Augmentation mesurée des consultations préventives de jeunes et baisse des grossesses non désirées en milieu scolaire dans les zones ciblées.'
      }
    },
    {
      id: 'villes-propres-assainissement',
      category: 'action-communautaire',
      badge: 'Action Communautaire & Éco-citoyenneté',
      org: 'ONG Bénin Villes Propres (2023 – Présent)',
      title: 'Initiatives Communautaires d\'Assainissement Urbain',
      summary: 'Représentant communal : mobilisation écocitoyenne, organisation d\'opérations de salubrité publique et plaidoyer pour l\'amélioration du cadre de vie et la prévention des maladies hydriques.',
      deliverables: ['Campagnes communales de salubrité', 'Séances de plaidoyer municipal', 'Sensibilisation hygiène de l\'eau', 'Plans d\'action éco-communautaires'],
      metrics: [
        { label: 'Quartiers assainis', val: '6 quartiers' },
        { label: 'Bénévoles mobilisés', val: '+180 citoyens' },
        { label: 'Réduction dépôts sauvages', val: '-40%' }
      ],
      details: {
        context: 'La salubrité urbaine est un pilier de la santé publique préventive : les dépôts sauvages d\'ordures favorisent la prolifération des gîtes larvaires et des endémies.',
        challenges: 'Fédérer les jeunes des quartiers, surmonter l\'inertie citoyenne et instaurer des mécanismes durables de tri et d\'évacuation des déchets ménagers.',
        methodology: 'Approche participative One Health combinant journées citoyennes d\'assainissement ("Villes Propres"), sensibilisation porte-à-porte et dialogue avec les élus locaux pour la mise à disposition de bacs de collecte.',
        impact: 'Transformation durable de points noirs d\'insalubrité en espaces sécurisés et baisse notable des affections gastro-intestinales dans les zones ciblées.'
      }
    },
    {
      id: 'csi-rapha-soins',
      category: 'projet-360',
      badge: 'Management Clinique & Soins',
      org: 'Cabinet de Soins Infirmiers RAPHA (2023 – 2024)',
      title: 'Management Clinique & Sécurisation de la Chaîne du Froid',
      summary: 'Infirmier Chef de Poste : gestion des urgences, organisation et planification de l\'équipe soignante, sécurisation rigoureuse de la chaîne du froid vaccinale et reporting médico-statistique.',
      deliverables: ['Protocoles de soins d\'urgence', 'Suivi thermique chaîne du froid', 'Gestion des approvisionnements', 'Tableaux de bord d\'activité'],
      metrics: [
        { label: 'Consultations gérées', val: '+1 800 actes' },
        { label: 'Ruptures de chaîne froid', val: '0 incident' },
        { label: 'Taux satisfaction patients', val: '98%' }
      ],
      details: {
        context: 'Direction opérationnelle du cabinet infirmier avec pour impératif une qualité irréprochable des soins primaires et une traçabilité sans faille des produits thermosensibles.',
        challenges: 'Garantir la continuité des soins 24/7, prévenir les ruptures de stock critiques et encadrer le personnel soignant débutant.',
        methodology: 'Mise en place de fiches de contrôle quotidiennes de température des réfrigérateurs médicaux, réorganisation du circuit d\'accueil des urgences et formalisation des inventaires pharmaceutiques mensuels.',
        impact: 'Audit d\'inspection sanitaire validé avec félicitations et zéro gaspillage de doses vaccinales sur l\'ensemble de l\'exercice.'
      }
    }
  ];

  // --- 2. THEME SWITCHER (DARK / LIGHT) ---
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const storedTheme = localStorage.getItem('dm_theme');
  const currentTheme = storedTheme || document.documentElement.getAttribute('data-theme') || 'dark';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('dm_theme', theme);
    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
        themeToggleBtn.setAttribute('title', 'Passer au mode sombre');
      } else {
        themeIcon.innerHTML = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
        themeToggleBtn.setAttribute('title', 'Passer au mode clair');
      }
    }
  }

  setTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(activeTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // --- 3. HEADER SCROLL & MOBILE NAVIGATION ---
  const header = document.querySelector('.site-header');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top visibility
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        if (mobileToggle) {
          mobileToggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
        }
      });
    });
  }

  // --- 4. SCROLL SPY FOR ACTIVE NAV LINK ---
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // --- 5. ANIMATED NUMBER COUNTERS (INTERSECTION OBSERVER) ---
  const counters = document.querySelectorAll('.counter-val');
  let countersAnimated = false;

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const prefix = counter.getAttribute('data-prefix') || '';
          const suffix = counter.getAttribute('data-suffix') || '';
          const duration = 1800; // ms
          const stepTime = 25;
          const totalSteps = duration / stepTime;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / totalSteps;
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOutProgress * target);

            counter.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;

            if (currentStep >= totalSteps) {
              counter.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
              clearInterval(timer);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.querySelector('.metrics-banner-section');
  if (metricsSection) {
    countObserver.observe(metricsSection);
  }

  // --- 6. PROJECTS RENDER & FILTERING ---
  const projectsGrid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderProjects(filter = 'all') {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    const filtered = filter === 'all'
      ? projectsData
      : projectsData.filter(p => p.category === filter);

    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="project-header-strip">
          <span class="badge badge-coral">${p.badge}</span>
          <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">${p.metrics[0].label}: <strong style="color: var(--emerald-primary);">${p.metrics[0].val}</strong></span>
        </div>
        <div class="project-body">
          <span class="project-meta-org">${p.org}</span>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.summary}</p>
          <div class="project-deliverables">
            <span class="deliverables-title">Livrables & Méthodes :</span>
            <div class="deliverables-tags">
              ${p.deliverables.map(d => `<span class="deliverable-tag">${d}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="project-footer">
          <div style="display: flex; gap: 14px;">
            ${p.metrics.slice(1).map(m => `
              <div style="display:flex; flex-direction:column;">
                <span style="font-size: 0.72rem; color: var(--text-muted);">${m.label}</span>
                <span style="font-size: 0.86rem; font-weight: 700; color: var(--text-primary);">${m.val}</span>
              </div>
            `).join('')}
          </div>
          <button class="project-view-btn" data-project-id="${p.id}">
            Voir l'étude <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      `;
      projectsGrid.appendChild(card);
    });

    // Attach click listeners to view buttons
    document.querySelectorAll('.project-view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const pId = btn.getAttribute('data-project-id');
        openProjectModal(pId);
      });
    });
  }

  renderProjects('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  // --- 7. PROJECT MODAL CASE STUDY ---
  const modalOverlay = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');

  function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modalOverlay || !modalBody) return;

    modalBody.innerHTML = `
      <div style="margin-bottom: 24px;">
        <span class="badge badge-coral" style="margin-bottom: 10px;">${project.badge}</span>
        <h2 style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 900; line-height: 1.2; color: var(--text-primary); margin-bottom: 8px;">${project.title}</h2>
        <span style="font-size: 0.9rem; font-weight: 600; color: var(--coral-primary);">${project.org}</span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; background: var(--bg-secondary); padding: 18px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 26px;">
        ${project.metrics.map(m => `
          <div>
            <div style="font-size: 0.74rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">${m.label}</div>
            <div style="font-family: var(--font-display); font-size: 1.4rem; font-weight: 900; color: var(--coral-primary);">${m.val}</div>
          </div>
        `).join('')}
      </div>

      <div style="display: flex; flex-direction: column; gap: 20px; font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary);">
        <div>
          <h4 style="font-family: var(--font-display); color: var(--text-primary); font-size: 1.1rem; font-weight: 800; margin-bottom: 6px;">Contexte Stratégique</h4>
          <p>${project.details.context}</p>
        </div>

        <div>
          <h4 style="font-family: var(--font-display); color: var(--text-primary); font-size: 1.1rem; font-weight: 800; margin-bottom: 6px;">Enjeux & Défis Rencontrés</h4>
          <p>${project.details.challenges}</p>
        </div>

        <div>
          <h4 style="font-family: var(--font-display); color: var(--text-primary); font-size: 1.1rem; font-weight: 800; margin-bottom: 6px;">Méthodologie Opérationnelle</h4>
          <p>${project.details.methodology}</p>
        </div>

        <div>
          <h4 style="font-family: var(--font-display); color: var(--text-primary); font-size: 1.1rem; font-weight: 800; margin-bottom: 6px;">Impact & Résultats Durables</h4>
          <p>${project.details.impact}</p>
        </div>

        <div style="margin-top: 10px; padding: 18px; background: var(--bg-accent-soft); border-radius: var(--radius-md); border: 1px solid var(--border-accent);">
          <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--coral-primary); margin-bottom: 8px;">Livrables Majeurs Validés :</div>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${project.deliverables.map(d => `<span class="deliverable-tag" style="background: rgba(0,0,0,0.25);">${d}</span>`).join('')}
          </div>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // --- 8. INTERACTIVE PROJECT COCKPIT (D-CLIC 360° LIVE DEMO) ---
  const cockpitTabs = document.querySelectorAll('.cockpit-tab-btn');
  const cockpitPanes = document.querySelectorAll('.cockpit-pane');

  cockpitTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      cockpitTabs.forEach(t => t.classList.remove('active'));
      cockpitPanes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPane = document.getElementById(tab.getAttribute('data-pane'));
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // Interactive Budget Simulator within Cockpit
  const budgetRange = document.getElementById('budgetRange');
  const budgetTotalDisplay = document.getElementById('budgetTotalDisplay');
  const budgetHealthVal = document.getElementById('budgetHealthVal');
  const budgetCommVal = document.getElementById('budgetCommVal');
  const budgetPilotVal = document.getElementById('budgetPilotVal');

  if (budgetRange && budgetTotalDisplay) {
    budgetRange.addEventListener('input', (e) => {
      const total = parseInt(e.target.value, 10);
      budgetTotalDisplay.textContent = total.toLocaleString() + ' FCFA';
      
      const healthPart = Math.round(total * 0.50);
      const commPart = Math.round(total * 0.30);
      const pilotPart = Math.round(total * 0.20);

      if (budgetHealthVal) budgetHealthVal.textContent = healthPart.toLocaleString() + ' FCFA (50%)';
      if (budgetCommVal) budgetCommVal.textContent = commPart.toLocaleString() + ' FCFA (30%)';
      if (budgetPilotVal) budgetPilotVal.textContent = pilotPart.toLocaleString() + ' FCFA (20%)';
    });
  }

  // --- 9. CAREER JOURNEY TIMELINE TOGGLE ---
  const timelineTabs = document.querySelectorAll('.timeline-tab-btn');
  const timelinePanes = document.querySelectorAll('.timeline-pane');

  timelineTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      timelineTabs.forEach(t => t.classList.remove('active'));
      timelinePanes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetTimeline = document.getElementById(tab.getAttribute('data-target'));
      if (targetTimeline) {
        targetTimeline.classList.add('active');
      }
    });
  });

  // --- 10. SKILLS MATRIX TABS ---
  const skillsTabs = document.querySelectorAll('.skills-tab-btn');
  const skillsPanes = document.querySelectorAll('.skills-pane');

  skillsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillsTabs.forEach(t => t.classList.remove('active'));
      skillsPanes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPane = document.getElementById(tab.getAttribute('data-skill-pane'));
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // --- 11. CONTACT FORM WITH WHATSAPP & MAILTO REDIRECTION ---
  const contactForm = document.getElementById('portfolioContactForm');
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      if (toast.parentElement) toast.remove();
    }, 4200);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const subject = document.getElementById('formSubject').value.trim();
      const message = document.getElementById('formMessage').value.trim();
      const channel = document.querySelector('input[name="contactChannel"]:checked')?.value || 'email';

      if (!name || !email || !message) {
        alert('Veuillez renseigner tous les champs obligatoires.');
        return;
      }

      const formattedBody = `Bonjour Dominique,%0D%0A%0D%0AJe suis ${name} (${email}).%0D%0AObjet : ${subject}%0D%0A%0D%0AMessage :%0D%0A${message}%0D%0A%0D%0A-- Envoyé depuis votre portfolio officiel`;

      if (channel === 'whatsapp') {
        const waText = encodeURIComponent(`Bonjour Dominique, je suis ${name} (${email}). Objet: ${subject}. Message: ${message}`);
        const waUrl = `https://wa.me/2290190808942?text=${waText}`;
        window.open(waUrl, '_blank');
        showToast('Ouverture de WhatsApp avec votre message pré-rempli !');
      } else {
        const mailtoUrl = `mailto:dominiquemedje@gmail.com?subject=${encodeURIComponent('[Portfolio] ' + subject)}&body=${formattedBody}`;
        window.location.href = mailtoUrl;
        showToast('Ouverture de votre client e-mail pour l\'envoi direct !');
      }

      contactForm.reset();
    });
  }

  // Back to top smooth trigger
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
