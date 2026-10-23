import ThemeToggle from '../components/common/ThemeToggle';

export default function TopBar() {
  return (
    <header className="site-header no-print">
      <a className="skip-link" href="#main-content">Skip to Resume</a>
      <div className="site-header-inner">
        <a className="site-name" href="#top">Sanarker S<span>Resume</span></a>
        <nav aria-label="Resume navigation">
          <a href="#experience">Experience</a><a href="#projects">Projects</a>
          <a href="#skills">Expertise</a><a href="#contact">Contact</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
