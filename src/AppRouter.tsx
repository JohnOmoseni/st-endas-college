import { Route, Routes } from "react-router-dom";
import Home from "./app/(website2)/(home)/page";
import Contact from "./app/(website2)/contact/page";
import About from "./app/(website2)/about/page";
import AdmissionSuccess from "./app/(website2)/admission/success";
import AdmissionPage from "./app/(website2)/admission/page";
import Calendar from "./app/(website2)/calendar/page";
import Gallery from "./app/(website2)/gallery/page";
import News from "./app/(website2)/news/page";
import DashboardLayout from "./layouts/DashboardLayout";
import BlogDetails from "./app/(website2)/news/BlogDetails";

const AppRouter2 = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="gallery" element={<Gallery />} />

        <Route path="news">
          <Route index element={<News />} />
          <Route path=":id" element={<BlogDetails />} />
        </Route>

        <Route path="admission">
          <Route index element={<AdmissionPage />} />
          <Route path="success" element={<AdmissionSuccess />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter2;
