import { createBrowserRouter } from "react-router-dom";

import CafeInfoDetail from "@/components/pages/CafeInfoDetail";
import Registration from "@/components/pages/Registration";
import TestPage from "@/components/pages/TestPage";
import App from "@/App";

/**
 * @description 라우터 경로 설정
 * @see [https://reactrouter.com/en/main/routers/create-browser-router]
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
        path: "/testPage",
        element: <TestPage />,
    },
]);

export default router;
