
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {ContextProvider} from "./components/Context/Context";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ContextProvider>
        <RouterProvider router={router}/>

    </ContextProvider>



);

