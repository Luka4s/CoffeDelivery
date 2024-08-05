import { Route, Routes } from "react-router-dom";
import { FormPage } from "./components/pages/Shop/FormPage/Index";
import { DefaultLayout } from "./Layout/DefaultLayout/index";
import { BodyCoffe } from "./components/pages/Home/BodyCoffe/Index";
import { Conclusion } from "./components/pages/Fineshed/Conclusion/Index";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<BodyCoffe />} />
        <Route path="/Shop" element={<FormPage />} />
        <Route path="/Success" element={<Conclusion />} />
      </Route>
    </Routes>
  );
}
