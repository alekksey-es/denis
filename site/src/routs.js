import AdminPage from "./pages/AdminPage";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, MARKET_ROUTE, REGISTRATION_ROUTE, TOOL_ROUTE} from "./utils/consts";
import basket from "./pages/Basket";
import Auth from "./pages/Auth";
import Market from "./pages/Market";
import ToolPage from "./pages/ToolPage";

export const authRoutes =[
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: BASKET_ROUTE,
        Component: basket
    }
]

export const publicRoutes =[
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: MARKET_ROUTE,
        Component: Market
    },
    {
        path: TOOL_ROUTE + '/:id',
        Component: ToolPage
    }

]