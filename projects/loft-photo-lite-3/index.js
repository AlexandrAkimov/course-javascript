import pages from './pages';
import mainPage from './mainPage';
import loginPage from './loginPage';
import './styles.css';
import profilePage from './profilePage';

pages.openPage('login');
loginPage.handleEvents();
mainPage.handleEvents();
profilePage.handleEvents();
