import { useEffect, useState } from 'react';

import Aurora from './components/reactbits/Aurora/Aurora';
import SplitText from './components/reactbits/SplitText/SplitText';
import BlurText from './components/reactbits/BlurText/BlurText';
import ShinyText from './components/reactbits/ShinyText/ShinyText';
import GradientText from './components/reactbits/GradientText/GradientText';
import RotatingText from './components/reactbits/RotatingText/RotatingText';
import DecryptedText from './components/reactbits/DecryptedText/DecryptedText';
import SpotlightCard from './components/reactbits/SpotlightCard/SpotlightCard';
import Magnet from './components/reactbits/Magnet/Magnet';
import ClickSpark from './components/reactbits/ClickSpark/ClickSpark';
import AnimatedContent from './components/reactbits/AnimatedContent/AnimatedContent';
import CountUp from './components/reactbits/CountUp/CountUp';
import LogoLoop from './components/reactbits/LogoLoop/LogoLoop';
import StarBorder from './components/reactbits/StarBorder/StarBorder';
import ScrollVelocity from './components/reactbits/ScrollVelocity/ScrollVelocity';
import ScrollReveal from './components/reactbits/ScrollReveal/ScrollReveal';
import Dock from './components/reactbits/Dock/Dock';

import { profile, qualities, education, experience, marquee, categories, projects, stack, stats } from './data';

const ACCENT = '#8dffb5';
const VIOLET = '#7b6cff';

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

const go = id => () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

// Dépôts GitHub publics non vides : sert à afficher le lien « Voir le code ».
function useGithub() {
  const [repos, setRepos] = useState({});

  useEffect(() => {
    let alive = true;
    fetch(`https://api.github.com/users/${profile.handle}/repos?per_page=100`)
      .then(r => (r.ok ? r.json() : Promise.reject(r.status)))
      .then(list => {
        if (!alive || !Array.isArray(list)) return;
        const map = {};
        list.forEach(r => {
          if (r.size > 0) map[r.name] = r.html_url;
        });
        setRepos(map);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  return repos;
}

const SectionHead = ({ index, label, title }) => (
  <header className="section-head">
    <span className="eyebrow">
      <span className="eyebrow-index">{index}</span>
      <DecryptedText text={label} animateOn="view" sequential speed={40} />
    </span>
    <BlurText text={title} className="section-title" animateBy="words" delay={90} />
  </header>
);

function Timeline({ label, items }) {
  return (
    <div className="timeline-col">
      <h3 className="timeline-label">{label}</h3>
      <ol className="timeline">
        {items.map((item, i) => (
          <li key={item.title} className={item.current ? 'tl-item current' : 'tl-item'}>
            <AnimatedContent distance={36} delay={i * 0.1} className="tl-body">
            <span className="tl-period">
              {item.period}
              {item.current && <em>En cours</em>}
            </span>
            <span className="tl-title">{item.title}</span>
            {item.place && <span className="tl-place">{item.place}</span>}
            {item.text && <p className="tl-text">{item.text}</p>}
            </AnimatedContent>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ProjectCard({ project, index, repos }) {
  const url = project.repo ? repos[project.repo] || (project.code ? `${profile.github}/${project.repo}` : null) : null;
  const slot = ['project-slot', `size-${project.size || 'half'}`, project.flip && 'flip', project.featured && 'featured']
    .filter(Boolean)
    .join(' ');
  return (
    <AnimatedContent distance={50} delay={(index % 2) * 0.08} className={slot}>
      <SpotlightCard className="project-card" spotlightColor={project.featured ? ACCENT : VIOLET} intensity={0.16} borderGlow={0.8}>
        {project.image && (
          <figure className="project-shot">
            <img
              src={`${import.meta.env.BASE_URL}${project.image}`}
              alt={`Aperçu de ${project.title}`}
              width="1440"
              height="900"
              loading="lazy"
            />
            {project.imageNote && <figcaption>{project.imageNote}</figcaption>}
          </figure>
        )}
        <div className="project-body">
          <div className="project-top">
            <span>{project.kind}</span>
            {project.featured && <span className="project-flag">Projet phare</span>}
          </div>
          <h3>{project.title}</h3>
          <p className="project-desc">{project.description}</p>
          {project.highlights && (
            <ul className="project-points">
              {project.highlights.map(h => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
          <div className="project-foot">
            <div className="tags">
              {(project.tags || []).map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {url && (
              <a className="project-link" href={url} target="_blank" rel="noreferrer">
                Voir le code <Icon d="M7 17 17 7M8 7h9v9" />
              </a>
            )}
          </div>
        </div>
      </SpotlightCard>
    </AnimatedContent>
  );
}

export default function App() {
  const repos = useGithub();
  const [filter, setFilter] = useState('all');
  const visible = projects.filter(p => filter === 'all' || p.category === filter);
  const countOf = id => (id === 'all' ? projects.length : projects.filter(p => p.category === id).length);

  const dockItems = [
    { icon: <Icon d="M3 11.5 12 4l9 7.5M5.5 10v9.5h13V10" />, label: 'Accueil', onClick: go('accueil') },
    { icon: <Icon d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20a7.5 7.5 0 0 1 15 0" />, label: 'À propos', onClick: go('a-propos') },
    { icon: <Icon d="M4 6.5h6l2 2h8v9.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />, label: 'Projets', onClick: go('projets') },
    { icon: <Icon d="M2.5 9 12 4.5 21.5 9 12 13.5ZM6.5 11v4.5c0 1.4 2.5 3 5.5 3s5.5-1.6 5.5-3V11M21.5 9v5" />, label: 'Parcours', onClick: go('parcours') },
    { icon: <Icon d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />, label: 'Stack', onClick: go('stack') },
    { icon: <Icon d="M4 6h16v12H4zM4 7l8 6 8-6" />, label: 'Contact', onClick: go('contact') },
    { icon: <GithubIcon />, label: 'GitHub', onClick: () => window.open(profile.github, '_blank', 'noopener') }
  ];

  return (
    <ClickSpark sparkColor={ACCENT} sparkSize={10} sparkRadius={22} sparkCount={8} duration={450}>
      <div className="page">
        {/* ───────── Hero ───────── */}
        <section id="accueil" className="hero">
          <div className="hero-bg" aria-hidden="true">
            <Aurora colorStops={['#3b2bff', ACCENT, '#7b6cff']} speed={0.6} />
          </div>

          <div className="hero-inner">
            <span className="status">
              <i />
              <ShinyText text={profile.status} color="#9aa3ad" shineColor="#ffffff" speed={3} />
            </span>

            <SplitText
              text={profile.handle}
              tag="h1"
              className="hero-name"
              splitType="chars"
              delay={70}
              duration={1.1}
              trigger="load"
              textAlign="left"
              rootMargin="0px"
            />

            <div className="hero-line">
              <span>{profile.tagline}</span>
              <RotatingText
                texts={profile.roles}
                mainClassName="hero-rotate"
                splitBy="characters"
                staggerDuration={0.02}
                staggerFrom="last"
                rotationInterval={2400}
              />
            </div>

            <p className="hero-intro">{profile.intro}</p>

            <div className="hero-cta">
              <Magnet padding={60} magnetStrength={4}>
                <StarBorder as="button" color={ACCENT} duration={5} radius={999} className="btn-star" onClick={go('projets')}>
                  Voir mes projets
                </StarBorder>
              </Magnet>
              <Magnet padding={60} magnetStrength={4}>
                <a className="btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
                  <GithubIcon size={18} /> github.com/{profile.handle}
                </a>
              </Magnet>
            </div>
          </div>

          <span className="scroll-hint" aria-hidden="true">
            défiler <i />
          </span>
        </section>

        {/* ───────── Bandeau ───────── */}
        <div className="band" aria-hidden="true">
          <ScrollVelocity
            texts={[marquee.join(' ✦ ') + ' ✦ ', marquee.slice().reverse().join(' ✦ ') + ' ✦ ']}
            velocity={45}
            className="band-text"
            outlineAlternate
            fadeEdges
          />
        </div>

        {/* ───────── À propos ───────── */}
        <section id="a-propos" className="section">
          <SectionHead index="01" label="À PROPOS" title="Des outils qui tournent tout seuls." />
          <div className="about">
            <div>
              <ScrollReveal baseOpacity={0.12} blurStrength={5} baseRotation={2} containerClassName="about-reveal" textClassName="about-text">
                {profile.about}
              </ScrollReveal>
              <AnimatedContent distance={24} className="qualities">
                <span className="qualities-label">Qualités</span>
                <ul>
                  {qualities.map(q => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </AnimatedContent>
            </div>

            <div className="stats">
              {stats.map((s, i) => (
                <AnimatedContent key={s.key} distance={40} delay={i * 0.1}>
                  <div className="stat">
                    <span className="stat-num">
                      <CountUp to={s.to} duration={1.6} suffix={s.suffix || ''} />
                    </span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Projets ───────── */}
        <section id="projets" className="section">
          <SectionHead index="02" label="PROJETS" title="Ce que j'ai construit." />
          <div className="filters" role="group" aria-label="Filtrer les projets">
            {categories.map(c => (
              <button key={c.id} type="button" className="filter" aria-pressed={filter === c.id} onClick={() => setFilter(c.id)}>
                {c.label} <span>{countOf(c.id)}</span>
              </button>
            ))}
          </div>
          <div className="projects" key={filter}>
            {visible.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} repos={repos} />
            ))}
          </div>
        </section>

        {/* ───────── Parcours ───────── */}
        <section id="parcours" className="section">
          <SectionHead index="03" label="PARCOURS" title="Formation et expérience." />
          <div className="parcours">
            <Timeline label="Formation" items={education} />
            <Timeline label="Expérience" items={experience} />
          </div>
        </section>

        {/* ───────── Stack ───────── */}
        <section id="stack" className="section section-wide">
          <div className="section-pad">
            <SectionHead index="04" label="STACK" title="Mes outils du quotidien." />
          </div>
          <LogoLoop
            logos={stack.map(name => ({ node: <span className="stack-chip">{name}</span>, title: name }))}
            speed={70}
            gap={18}
            logoHeight={46}
            fadeOut
            ariaLabel="Technologies utilisées"
          />
          <LogoLoop
            logos={stack
              .slice()
              .reverse()
              .map(name => ({ node: <span className="stack-chip alt">{name}</span>, title: name }))}
            speed={50}
            direction="right"
            gap={18}
            logoHeight={46}
            fadeOut
            ariaLabel="Technologies utilisées (suite)"
            className="stack-second"
          />
        </section>

        {/* ───────── Contact ───────── */}
        <section id="contact" className="section contact">
          <span className="eyebrow">
            <span className="eyebrow-index">05</span>
            <DecryptedText text="CONTACT" animateOn="view" sequential speed={40} />
          </span>
          <h2 className="contact-title">
            Un projet, un bot, une idée ?<br />
            <GradientText colors={[ACCENT, '#b9b2ff', VIOLET, ACCENT]} animationSpeed={6} className="contact-gradient">
              Parlons-en.
            </GradientText>
          </h2>
          <p className="contact-sub">Le plus simple : ouvre une issue ou écris-moi via GitHub.</p>
          <Magnet padding={80} magnetStrength={3}>
            <StarBorder as="a" href={profile.github} target="_blank" rel="noreferrer" color={ACCENT} duration={4} radius={999} className="btn-star big">
              <GithubIcon size={18} /> Me retrouver sur GitHub
            </StarBorder>
          </Magnet>
        </section>

        <footer className="footer">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.handle}
          </span>
          <span>
            Animations par{' '}
            <a href="https://reactbits.dev" target="_blank" rel="noreferrer">
              React Bits
            </a>
          </span>
        </footer>
      </div>

      <nav className="dock-wrap" aria-label="Navigation">
        <Dock items={dockItems} baseItemSize={42} magnification={58} panelHeight={58} gap={8} showIndicators={false} />
      </nav>
    </ClickSpark>
  );
}
