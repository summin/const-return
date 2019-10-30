import _Home from "./components/_Home";
import _Projects from "./components/_Projects";
import _Technology from "./components/_Technology";
import _Shop from "./components/_Shop";

export default [
    {
        path: "/",
        component: _Home,
        exact: true,
    },
    {
        path: "/technology",
        component: _Technology,
        exact: true,
    },
    {
        path: "/projects",
        component: _Projects,
        exact: true,
    },
    {
        path: "/shop",
        component: _Shop,
        exact: true,
    },
];
