import { createBrowserRouter } from "react-router-dom";

import CafeInfoDetail from "@/pages/CafeInfoDetail";
import Registration from "@/pages/Registration";
import TestMain from "@/pages/TestMain";
import App from "@/App";

/**
 * @description 라우터 경로 설정
 * @see https://reactrouter.com/en/main/routers/create-browser-router
 */
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/cafeDetail/:infoId",
        element: <CafeInfoDetail />,
    },
    {
        path: "/registration",
        element: <Registration />,
    },
    {
        path: "/testMain",
        element: <TestMain />,
    },
]);

export default router;
