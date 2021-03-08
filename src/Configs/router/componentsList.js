import Home from 'Views/Home';
import HomeMeta from 'Views/Home/meta';
import About from 'Views/About';
import AboutMeta from 'Views/About/meta';

const componentsList = {
    Home: {
        component: Home,
        meta: HomeMeta,
    },
    About: {
        component: About,
        meta: AboutMeta,
    },
};

export default componentsList;