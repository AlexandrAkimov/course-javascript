import './todo.html';
import './styles.css';
import { AppView } from './modules/app-view';
import { AppController } from './modules/app-controller';
import { AppModel } from './modules/app-model';

const appModel = new AppModel();
const appController = new AppController(appModel);
const appView = new AppView(document.getElementById('todos'), appController);

appView.mount();
