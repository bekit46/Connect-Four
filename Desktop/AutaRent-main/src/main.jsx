import { RentalProvider } from "./components/RentalContext";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import { ClerkProvider, useUser } from "@clerk/clerk-react";
import { CarProvider } from "./components/CarContext";
import { InsuranceProvider } from "./components/InsuranceContext";
import { ExtrasProvider } from "./components/ExtrasContext";
import "./index.css";

// Import Pages
import Home from "./home";
import AllCars from "./allCars";
import AboutUs from "./aboutUs";
import Privacy from "./privacy";
import Manager from "./manager";
import Admin from "./admin";
import FAQs from "./faqPage";
import Pricing from "./pricing";
import ExtrasPage from "./ExtrasPage";
import DetailsPage from "./DetailsPage";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from './contactUs'
import HelpCenter from './helpCenter'
import Campaign from './campaign'
import PaymentPage from './PaymentPage'
import NotFound from "./NotFound";
import Mycar from "./Mycar";
import Map from './components/Map'; 

const ProtectedRoute = ({ element, allowedRoles }) => {
  const { user, isSignedIn } = useUser();

  // If the user is logged in:
  // - If they already have a role (admin, manager, etc.), keep it.
  // - If no role is set, default to "user".
  // If the user is NOT logged in, default to "guest".
  const userRole = isSignedIn
    ? user?.publicMetadata?.role || "user"
    : "guest";

  return allowedRoles.includes(userRole) ? element : <Navigate to="/" />;
};
// Layout component with ScrollToTop
const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

// Define Routes with Layout
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/all-cars", element: <AllCars /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/extras", element: <ExtrasPage /> },
      { path: "/details", element: <DetailsPage /> },
      { path: "/contactUs", element: <ContactUs /> },
      { path: "/helpCenter", element: <HelpCenter /> },
      { path: "/campaign", element: <Campaign /> },
      { path: "/faqs", element: <FAQs /> },
      { path: "/payment", element: <PaymentPage /> },
      // Protected Routes
      { path: "/manager", element: <ProtectedRoute element={<Manager />} allowedRoles={["manager"]} /> },
      { path: "/admin", element: <ProtectedRoute element={<Admin />} allowedRoles={["admin"]} /> },
      { path: "/my-cars", element: <ProtectedRoute element={<Mycar />} allowedRoles={["user", "admin", "manager"]} /> },
      // 404 Not Found Page
      { path: "/map", element: <Map /> }, 
      // 404 Not Found Page
      { path: "*", element: <NotFound /> },
    ]
  }
]);

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <CarProvider>
        <RentalProvider>
          <InsuranceProvider>
            <ExtrasProvider>
              <RouterProvider router={router} />
            </ExtrasProvider>
          </InsuranceProvider>
        </RentalProvider>
      </CarProvider>
    </ClerkProvider>
  </StrictMode>
);
