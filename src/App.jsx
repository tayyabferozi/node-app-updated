import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./screens/SignUp";
import SignUp2 from "./screens/SignUp2";
import Signin from "./screens/Signin";
import Dashboard from "./screens/Dashboard";
import Business360 from "./screens/Business360";
import ClientsList from "./screens/ClientsList";
import Conversations from "./screens/Conversations";
import FinancesIncome from "./screens/FinancesIncome";
import FinancesExpense from "./screens/FinancesExpense";
import Inventory from "./screens/Inventory";
import FormCards from "./screens/FormCards";
import FinancesOverview from "./screens/FinancesOverview";
import Settings1 from "./screens/Settings1";
import Settings2 from "./screens/Settings2";
import Settings3 from "./screens/Settings3";
import Settings4 from "./screens/Settings4";
import WorkshopRealtime from "./screens/WorkshopRealtime";
import WorkshopAppointment from "./screens/WorkshopAppointment";
import WorkshopRequests from "./screens/WorkshopRequests";
import WorkshopStorage from "./screens/WorkshopStorage";
import WorkshopArticles from "./screens/WorkshopArticles";
import WorkshopNoded from "./screens/WorkshopNoded";

import ModalForm from "./modals/ModalForm";
import ModalScan from "./modals/ModalScan";
import ModalNewVarient from "./modals/ModalNewVarient";
import ModalArticle from "./modals/ModalArticle";
import ModalNode from "./modals/ModalNode";
import ModalProfile from "./modals/ModalProfile";
import ModalClient from "./modals/ModalClient";
import ModalAppointment from "./modals/ModalAppointment";
import ModalSchedule from "./modals/ModalSchedule";
import ModalLiveActivity from "./modals/ModalLifeActivity";
import ModalInvoice from "./modals/ModalInvoice";
import ModalOrder from "./modals/ModalOrder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup-1" element={<SignUp />} />
          <Route path="/signup-2" element={<SignUp2 />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/360" element={<Navigate to="/business-360" />} />
          <Route path="/business-360" element={<Business360 />} />
          <Route path="/way" element={<ClientsList />} />
          <Route path="/finances-income" element={<FinancesIncome />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="finances-overview" element={<FinancesOverview />} />
          <Route path="finances-expense" element={<FinancesExpense />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/form-cards" element={<FormCards />} />
          <Route path="/settings" element={<Settings1 />} />
          <Route path="/business-settings" element={<Settings2 />} />
          <Route path="/users" element={<Settings3 />} />
          <Route path="/billing" element={<Settings4 />} />
          <Route path="/workshop-realtime" element={<WorkshopRealtime />} />
          <Route
            path="/workshop-appointment"
            element={<WorkshopAppointment />}
          />
          <Route path="/workshop-requests" element={<WorkshopRequests />} />
          <Route path="/workshop-storage" element={<WorkshopStorage />} />
          <Route path="/workshop-articles" element={<WorkshopArticles />} />
          <Route path="/workshop-noded" element={<WorkshopNoded />} />

          <Route path="/modal-1" element={<ModalForm isOpen />} />
          <Route path="/modal-2" element={<ModalScan isOpen />} />
          <Route path="/modal-3" element={<ModalNewVarient isOpen />} />
          <Route path="/modal-4" element={<ModalArticle isOpen />} />
          <Route path="/modal-5" element={<ModalNode isOpen />} />
          <Route path="/modal-6" element={<ModalProfile isOpen />} />
          <Route path="/modal-7" element={<ModalClient isOpen />} />
          <Route path="/modal-8" element={<ModalAppointment isOpen />} />
          <Route path="/modal-9" element={<ModalSchedule isOpen />} />
          <Route path="/modal-10" element={<ModalLiveActivity isOpen />} />
          <Route path="/modal-11" element={<ModalInvoice isOpen />} />
          <Route path="/modal-12" element={<ModalOrder isOpen />} />

          <Route path="/" element={<Navigate to="/signup-1" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
