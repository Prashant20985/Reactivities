import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import { store, StoreContext } from "./app/stores/store";
import reportWebVitals from "./reportWebVitals";
import {RouterProvider} from "react-router-dom"
import { router } from "./app/router/Routes";
import 'react-calendar/dist/Calendar.css'
import './app/layout/App.css'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>
);

reportWebVitals();
