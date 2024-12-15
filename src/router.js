import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import Homepage from "./pages/users/Homepage";
import MasterLayout from "./pages/users/theme/masterLayout";
import AboutUs from "./pages/users/About-us";
import Sign from "./pages/users/Sign";
import SlList from "./component/SlList";
import SplList from "./component/SplList";
import DlList from "./component//DlList";
import AboutUsCopy from "./pages/users/About-us copy";
import ProductDetail from "./component/PageProduct";

const renderUserRouter =()=> {
    const userRouter =[
        {
            path: ROUTERS.USER.HOME,
            component: <Homepage/>,
        },
        {
            path: ROUTERS.USER.ABOUTUS,
            component: <AboutUs/>,
        },
        {
            path: ROUTERS.USER.SIGNFROMS,
            component: <Sign/>,
        },
        {
            path: ROUTERS.USER.DL,
            component: <DlList/>,
        },{
            path: ROUTERS.USER. SL,
            component: <SlList/>,
        },{
            path: ROUTERS.USER.SPL,
            component: <SplList/>,
        },
        {
            path: ROUTERS.USER.ABOUTUSCOPY,
            component: <AboutUsCopy/>,
        },
        {
            path: ROUTERS.USER. PAGEPRODUCT,
            component: <ProductDetail/>,
        },
    ]
    return(
        <MasterLayout>
    <Routes>
        {
            userRouter.map((item,key)=>(
            <Route key={key} path={item.path} element={item.component}/>
))}
    </Routes>
    </MasterLayout>
    )
}

const RouterCustom = () =>{
    return renderUserRouter() ;
}
export default RouterCustom;