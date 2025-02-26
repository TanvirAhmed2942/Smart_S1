import { createBrowserRouter } from "react-router-dom";
import Auth from "../Layout/Auth/Auth";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Dashboard/Home/Home";
import PrivacyPolicy from "../Pages/Dashboard/PrivacyPolicy/PrivacyPolicy.jsx";
import ChangePassword from "../Pages/Auth/ChangePassword";
import Login from "../Pages/Auth/Login";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import VerifyOtp from "../Pages/Auth/VerifyOtp";
import ResetPassword from "../Pages/Auth/ResetPassword";
import NotFound from "../NotFound";
import Notifications from "../Pages/Dashboard/Notifications";

import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";

import TermsAndCondition from "../Pages/Dashboard/TermsAndCondition/TermsAndCondition";
import ServiceProvidersList from "../Pages/Dashboard/ServiceProvider/ServiceProvidersList.jsx";
import Transaction from "../Pages/Dashboard/Transaction/Transaction.jsx";
import Setting from "../Pages/Dashboard/Setting/Setting.jsx";
import FaqCollapse from "../Pages/Dashboard/FAQ/FaqCollapse.jsx";
import Contact from "../Pages/Dashboard/Contact/Contact.jsx";

import Customer from "../Pages/Dashboard/Customer/Customer.jsx";
import PushNotification from "../Pages/Dashboard/PushNotification/PushNotification.jsx";
import PendingProject from "../Pages/Dashboard/Project/PendingProject/PendingProject.jsx";
import ActiveProject from "../Pages/Dashboard/Project/ActiveProject/ActiveProject.jsx";
import NewRequest from "../Pages/Dashboard/Project/NewRequest/NewRequest.jsx";
import BookingList from "../Pages/Dashboard/Booking/BookingList.jsx";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/service-provider-list",
        element: <ServiceProvidersList />,
      },

      {
        path: "/transaction",
        element: <Transaction />,
      },

      {
        path: "/customer-list",
        element: <Customer />,
      },
      {
        path: "/booking-list",
        element: <BookingList />,
      },
      {
        path: "/pushnotification",
        element: <PushNotification />,
      },

      {
        path: "/faq",
        element: <FaqCollapse />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndCondition />,
      },

      {
        path: "/profile",
        element: <AdminProfile />,
      },
      {
        path: "/notification",
        element: <Notifications />,
      },

      {
        path: "/admin-list",
        element: <Setting />,
      },
      {
        path: "/newrequest",
        element: <NewRequest />,
      },
      {
        path: "/activeproject",
        element: <ActiveProject />,
      },
      {
        path: "/pendingproject",
        element: <PendingProject />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth",
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "verify-otp",
        element: <VerifyOtp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
