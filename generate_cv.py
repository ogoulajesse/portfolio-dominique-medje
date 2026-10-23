import os
import base64
import subprocess
import fitz

# Read framed portrait image and encode to base64
with open('d:/Project/Dominique/dominique_perfect_bw.jpg', 'rb') as f:
    photo_b64 = base64.b64encode(f.read()).decode('utf-8')

html_content = f'''<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>CV Dominique MEDJE</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  @page {{
    size: A4 portrait;
    margin: 0;
  }}

  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }}

  html, body {{
    width: 210mm;
    height: 297mm;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    color: #111;
    background: #ffffff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}

  .page {{
    position: relative;
    width: 210mm;
    height: 297mm;
    max-height: 297mm;
    padding: 36px 40px 30px 48px;
    background: #ffffff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }}

  /* Left margin visual accent: solid black bar flush at the paper edge */
  .left-black-bar {{
    position: absolute;
    left: 0;
    top: 36px;
    width: 16px;
    height: 74px;
    background: #000000;
    z-index: 2;
  }}

  /* Header Section */
  .header {{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    position: relative;
  }}

  .header-left {{
    display: flex;
    flex-direction: column;
  }}

  .name-first {{
    font-size: 25px;
    font-weight: 300;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #1a1a1a;
    line-height: 1.1;
  }}

  .name-last {{
    font-size: 27px;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #000000;
    line-height: 1.1;
    margin-top: 1px;
  }}

  .job-title {{
    font-size: 9.2px;
    font-weight: 600;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: #222222;
    margin-top: 8px;
  }}

  .header-right {{
    width: 242px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 1px;
  }}

  .contact-row {{
    display: flex;
    align-items: center;
  }}

  .contact-icon {{
    width: 18px;
    text-align: center;
    font-size: 11px;
    font-weight: 700;
    color: #111;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }}

  .contact-text {{
    flex: 1;
    margin-left: 9px;
    font-size: 9px;
    color: #2b2b2b;
    padding-bottom: 2px;
    border-bottom: 1.2px solid #666;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }}

  /* Main 2-column layout */
  .main-content {{
    display: flex;
    gap: 32px;
    flex: 1;
  }}

  .col-left {{
    flex: 1.58;
    display: flex;
    flex-direction: column;
  }}

  .col-right {{
    flex: 1;
    display: flex;
    flex-direction: column;
  }}

  /* Section Titles with extending horizontal line */
  .section-header-line {{
    display: flex;
    align-items: center;
    margin-top: 14px;
    margin-bottom: 9px;
  }}

  .section-title {{
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #000;
    white-space: nowrap;
  }}

  .section-line {{
    flex: 1;
    height: 1.2px;
    background: #555555;
    margin-left: 10px;
  }}

  /* Summary Section */
  .summary-title {{
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 7px;
  }}

  .summary-text {{
    border-left: 1.8px solid #b8b8b8;
    padding-left: 12px;
    font-size: 8.45px;
    line-height: 1.45;
    color: #383838;
    text-align: justify;
  }}

  /* Experience Entries */
  .experience-item {{
    margin-bottom: 11px;
  }}

  .exp-role {{
    font-size: 9.8px;
    font-weight: 700;
    text-transform: uppercase;
    color: #111;
    line-height: 1.2;
  }}

  .exp-sub {{
    font-size: 8.5px;
    font-weight: 500;
    color: #444;
    margin-top: 2px;
    margin-bottom: 4px;
  }}

  .bullet-list {{
    list-style: none;
    padding-left: 0;
  }}

  .bullet-list li {{
    position: relative;
    padding-left: 11px;
    font-size: 8.15px;
    line-height: 1.36;
    color: #444;
    margin-bottom: 2.5px;
    text-align: justify;
  }}

  .bullet-list li::before {{
    content: "•";
    position: absolute;
    left: 0;
    top: 0;
    font-size: 9px;
    color: #444;
  }}

  /* Projects Section */
  .projects-section {{
    margin-top: 10px;
  }}

  .project-title-header {{
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 7px;
  }}

  .project-item {{
    font-size: 8.15px;
    line-height: 1.35;
    color: #444;
    margin-bottom: 3.5px;
    text-align: justify;
  }}

  .project-item strong {{
    color: #111;
    font-weight: 700;
  }}

  /* Right Column: Photo */
  .photo-container {{
    width: 100%;
    height: 190px;
    margin-bottom: 2px;
    overflow: hidden;
    border-radius: 3px;
    background: #f4f5f7;
  }}

  .photo-container img {{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 10%;
    display: block;
  }}

  /* Education Entries */
  .edu-item {{
    margin-bottom: 7px;
  }}

  .edu-degree {{
    font-size: 9.1px;
    font-weight: 700;
    color: #111;
    line-height: 1.25;
  }}

  .edu-school {{
    font-size: 8.3px;
    font-weight: 400;
    color: #555;
    margin-top: 1.5px;
  }}

  .edu-date {{
    font-size: 7.8px;
    font-style: italic;
    color: #777;
    margin-top: 1px;
  }}

  /* Skills Categories */
  .skills-category {{
    margin-bottom: 8px;
  }}

  .skills-cat-title {{
    font-size: 9.1px;
    font-weight: 700;
    color: #111;
    margin-bottom: 3px;
  }}

  .skills-list {{
    list-style: none;
    padding-left: 0;
  }}

  .skills-list li {{
    position: relative;
    padding-left: 11px;
    font-size: 8.15px;
    line-height: 1.34;
    color: #444;
    margin-bottom: 2px;
  }}

  .skills-list li::before {{
    content: "•";
    position: absolute;
    left: 0;
    color: #444;
  }}
</style>
</head>
<body>

<div class="page">
  <!-- Left margin visual accent: solid black bar flush at the paper edge -->
  <div class="left-black-bar"></div>

  <!-- Header -->
  <header class="header">
    <div class="header-left">
      <div class="name-first">MAHUNA RAPHAËL</div>
      <div class="name-last">DOMINIQUE MEDJE</div>
      <div class="job-title">SANTÉ PUBLIQUE & GESTION DE PROJETS 360°</div>
    </div>
    <div class="header-right">
      <div class="contact-row">
        <div class="contact-icon">M</div>
        <div class="contact-text">+229 01 90 80 89 42</div>
      </div>
      <div class="contact-row">
        <div class="contact-icon">@</div>
        <div class="contact-text">dominiquemedje@gmail.com</div>
      </div>
      <div class="contact-row">
        <div class="contact-icon">in</div>
        <div class="contact-text">linkedin.com/in/dominiquemedje</div>
      </div>
      <div class="contact-row">
        <div class="contact-icon">
          <svg width="11" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
          </svg>
        </div>
        <div class="contact-text">Banikanni, Parakou, Bénin</div>
      </div>
    </div>
  </header>

  <!-- Body 2-Column Content -->
  <div class="main-content">
    <!-- Left Column -->
    <div class="col-left">
      <!-- Summary -->
      <div class="summary-title">PROFIL PROFESSIONNEL</div>
      <p class="summary-text">
        Infirmier Diplômé d'État (IDE/IAS), Agent de Santé Communautaire Qualifié (ASCQ) et Spécialiste en Gestion de Projets Marketing 360° (OIF / D-CLIC). Alliant pratique clinique rigoureuse et maîtrise complète du cycle de projet : diagnostic stratégique, planification budgétaire & rétro-planning (Gantt), coordination d'équipes et prestataires, communication 360°, et pilotage de la performance par les KPI et tableaux de bord décisionnels. Jeune Volontaire des Nations Unies, mobilisé pour le déploiement d'interventions médico-sociales durables à fort impact (ODD 3).
      </p>

      <!-- Work Experience -->
      <div class="section-header-line">
        <div class="section-title">EXPÉRIENCES PROFESSIONNELLES</div>
        <div class="section-line"></div>
      </div>

      <!-- Experience 1 -->
      <div class="experience-item">
        <div class="exp-role">AGENT DE SANTÉ COMMUNAUTAIRE QUALIFIÉ (ASCQ)</div>
        <div class="exp-sub">Ministère de la Santé du Bénin | Avril 2024 – Présent</div>
        <ul class="bullet-list">
          <li>Coordination et déploiement opérationnel des activités de santé communautaire sur le 2<sup>ème</sup> Arrondissement de Parakou : supervision des visites à domicile (VAD) et actions de terrain.</li>
          <li>Surveillance épidémiologique communautaire : détection précoce, notification, orientation et suivi actif des maladies sous surveillance (SIMR).</li>
          <li>Encadrement technique, formation continue et accompagnement pédagogique des relais communautaires de santé.</li>
          <li>Sensibilisation et éducation sanitaire : vaccination (PEV), nutrition, santé sexuelle & reproductive (DSSR) et prévention des endémies.</li>
          <li>Collecte rigoureuse, contrôle qualité et rapportage statistique des données sanitaires vers les plateformes du district sanitaire.</li>
        </ul>
      </div>

      <!-- Experience 2 -->
      <div class="experience-item">
        <div class="exp-role">INFIRMIER CHEF DE POSTE (IAS / IDE)</div>
        <div class="exp-sub">Cabinet de Soins Infirmiers RAPHA | Févr. 2023 – Mars 2024</div>
        <ul class="bullet-list">
          <li>Management opérationnel, coordination et planification des équipes soignantes du cabinet.</li>
          <li>Administration des soins infirmiers polyvalents, gestion des urgences et consultations primaires.</li>
          <li>Gestion des approvisionnements pharmaceutiques, chaîne du froid et élaboration des rapports médico-statistiques mensuels.</li>
        </ul>
      </div>

      <!-- Experience 3 -->
      <div class="experience-item">
        <div class="exp-role">VOLONTAIRE DES NATIONS UNIES & POINT FOCAL DSSR</div>
        <div class="exp-sub">Programme VNU & Médecins du Monde Suisse | 2024 – Présent</div>
        <ul class="bullet-list">
          <li>Point focal opérationnel du projet de promotion des droits en santé sexuelle et reproductive des adolescents et jeunes (10 à 24 ans).</li>
          <li>Mobilisation citoyenne, animation d'ateliers participatifs et plaidoyer pour l'accès universel aux soins de qualité (ODD 3).</li>
        </ul>
      </div>

      <!-- Projects / Engagements -->
      <div class="projects-section">
        <div class="project-title-header">PROJETS & RÉALISATIONS MAJEURES</div>
        <div class="project-item"><strong>Spécialisation Gestion de Projets 360° (OIF / D-CLIC) :</strong> Conception de plans d'action stratégiques, rétro-plannings budgétés (Gantt), cockpits de KPI, analyse ROI et reportings pour comités de direction.</div>
        <div class="project-item"><strong>ONG Bénin Villes Propres :</strong> Représentant communal – Déploiement d'initiatives communautaires d'assainissement et plaidoyer citoyen.</div>
        <div class="project-item"><strong>Campus AFD & DisasterReady :</strong> Certifications en Pilotage de projets de développement et Leadership humanitaire (2025–2026).</div>
        <div class="project-item"><strong>ONU Femmes & IDEP/CEA :</strong> Certificats en Égalité des sexes et Protection sociale en Afrique (2026).</div>
        <div class="project-item"><strong>Références professionnelles :</strong> Disponibles sur demande (Médecin Chef Commune Parakou, CCD/CNLSTP Borgou, CSI RAPHA).</div>
      </div>
    </div>

    <!-- Right Column -->
    <div class="col-right">
      <!-- Photo -->
      <div class="photo-container">
        <img src="data:image/jpeg;base64,{photo_b64}" alt="Dominique MEDJE">
      </div>

      <!-- Education -->
      <div class="section-header-line">
        <div class="section-title">FORMATION</div>
        <div class="section-line"></div>
      </div>

      <div class="edu-item">
        <div class="edu-degree">Spécialisation Gestion de Projets Marketing 360°</div>
        <div class="edu-school">OIF / Programme D-CLIC (En cours de finalisation)</div>
        <div class="edu-date">Bénin | 2026</div>
      </div>

      <div class="edu-item">
        <div class="edu-degree">Licence Professionnelle en Soins Infirmiers & Obstétricaux</div>
        <div class="edu-school">Institut de Formation en Soins Infirmiers (IFSIO - UP)</div>
        <div class="edu-date">Parakou, Bénin | 2019 – 2022</div>
      </div>

      <div class="edu-item">
        <div class="edu-degree">Baccalauréat Scientifique (Série D)</div>
        <div class="edu-school">CEG La Vallée - Gbéko | 2016 – 2019</div>
      </div>

      <!-- Skills -->
      <div class="section-header-line">
        <div class="section-title">COMPÉTENCES</div>
        <div class="section-line"></div>
      </div>

      <div class="skills-category">
        <div class="skills-cat-title">Gestion de Projets & Stratégie 360°</div>
        <ul class="skills-list">
          <li>Cadrage stratégique, brief & cahier des charges</li>
          <li>Planification opérationnelle & Gantt (jalons)</li>
          <li>Budget prévisionnel & modélisation financière</li>
          <li>Coordination d'équipes & prestataires</li>
          <li>Communication 360°, plaidoyer & événementiel</li>
          <li>Tableaux de bord (KPI), ROI & reporting DG</li>
        </ul>
      </div>

      <div class="skills-category">
        <div class="skills-cat-title">Santé Publique & Clinique</div>
        <ul class="skills-list">
          <li>Soins infirmiers & gestes d'urgence</li>
          <li>Santé communautaire & approche One Health</li>
          <li>Surveillance épidémiologique (SIMR)</li>
          <li>Santé sexuelle & reproductive (DSSR)</li>
          <li>Vaccination (PEV) & Nutrition infantile</li>
        </ul>
      </div>

      <div class="skills-category">
        <div class="skills-cat-title">Langues & Outils</div>
        <ul class="skills-list">
          <li>Français : Bilingue / C2 · Anglais : Professionnel</li>
          <li>Fon & Goun : Langues maternelles</li>
          <li>Excel avancé, ODK / KoboToolbox, Pack Office</li>
        </ul>
      </div>
    </div>
  </div>
</div>

</body>
</html>
'''

html_path = 'd:/Project/Dominique/CV_Dominique_MEDJE.html'
pdf_path = 'd:/Project/Dominique/CV_Dominique_MEDJE.pdf'

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html_content)
print('HTML written.')

# Render to PDF using Edge headless
edge_exe = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
cmd = [
    edge_exe,
    '--headless',
    '--disable-gpu',
    '--no-pdf-header-footer',
    f'--print-to-pdf={pdf_path}',
    html_path
]
res = subprocess.run(cmd, capture_output=True, text=True)
print('Edge render returncode:', res.returncode)

# Check PDF page count and render to image
doc = fitz.open(pdf_path)
print('Total pages in PDF:', len(doc))

page = doc[0]
pix = page.get_pixmap(dpi=150)
preview_path = 'd:/Project/Dominique/cv_preview_p1.png'
pix.save(preview_path)
print('Saved preview image:', preview_path)
if len(doc) > 1:
    pix2 = doc[1].get_pixmap(dpi=150)
    pix2.save('d:/Project/Dominique/cv_preview_p2.png')
    print('Warning: page 2 generated!')
