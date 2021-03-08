import { renderRoutes } from 'react-router-config';
import routes from 'Configs/router';

function AppRouter() {
    return renderRoutes(routes);
}

export default AppRouter;