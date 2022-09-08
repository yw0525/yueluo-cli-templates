import { App } from 'vue';

import CustomContainer from './Container.vue';
import CustomHeader from './Header.vue';
import CustomFooter from './Footer.vue';
import CustomAside from './Aside.vue';
import CustomMain from './Main.vue';

export default {
  install(app: App) {
    app.component(CustomContainer.name, CustomContainer);
    app.component(CustomHeader.name, CustomHeader);
    app.component(CustomFooter.name, CustomFooter);
    app.component(CustomAside.name, CustomAside);
    app.component(CustomMain.name, CustomMain);
  },
};
