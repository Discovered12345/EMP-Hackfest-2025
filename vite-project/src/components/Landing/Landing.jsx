import './landing.css';
import Toolbar from '../Toolbar/Toolbar';

const Landing = () => {
  return (
    <div className="minimal-landing">
      <Toolbar />
      <div className="content">
        <div className="title">Sky Scanner</div>
        <div className="links">
          <a href="/map" className="button-link">
            <svg className="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6L21 3V18L15 21M15 6L9 3M15 6V21M9 3L3 6V21L9 18M9 3V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Launch Map
          </a>
          <a href="https://github.com/Jeff1454/Aqua2" className="button-link">
            <svg className="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.167 8.84 21.49C9.34 21.581 9.52 21.27 9.52 21C9.52 20.758 9.512 20.079 9.508 19.208C6.726 19.758 6.139 17.783 6.139 17.783C5.685 16.624 5.029 16.313 5.029 16.313C4.121 15.692 5.098 15.704 5.098 15.704C6.108 15.774 6.638 16.741 6.638 16.741C7.538 18.206 8.974 17.829 9.539 17.569C9.629 16.931 9.889 16.493 10.175 16.252C7.954 16.008 5.62 15.207 5.62 11.477C5.62 10.386 6.01 9.493 6.658 8.794C6.558 8.535 6.218 7.552 6.758 6.168C6.758 6.168 7.602 5.896 9.497 7.195C10.297 6.975 11.147 6.865 11.997 6.861C12.847 6.865 13.697 6.975 14.497 7.195C16.392 5.896 17.236 6.168 17.236 6.168C17.776 7.552 17.436 8.535 17.336 8.794C17.984 9.493 18.374 10.386 18.374 11.477C18.374 15.219 16.036 16.004 13.809 16.242C14.169 16.541 14.489 17.132 14.489 18.036C14.489 19.333 14.479 20.668 14.479 21C14.479 21.273 14.659 21.587 15.167 21.49C19.138 20.163 22 16.418 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
            </svg>
            View on GitHub
          </a>
        </div>
        <div className="tag">EMPHackfest</div>
      </div>
    </div>
  );
};

export default Landing; 