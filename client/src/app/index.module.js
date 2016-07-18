import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';

angular.module('client', ['ngTouch', 'ui.router'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  // .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  // .directive('acmeMalarkey', () => new MalarkeyDirective(malarkey));
