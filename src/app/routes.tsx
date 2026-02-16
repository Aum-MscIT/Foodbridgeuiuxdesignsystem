import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { RoleSelection } from "./pages/auth/RoleSelection";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { DonorDashboard } from "./pages/donor/DonorDashboard";
import { CreateListing } from "./pages/donor/CreateListing";
import { DonorImpact } from "./pages/donor/DonorImpact";
import { RecipientBrowse } from "./pages/recipient/RecipientBrowse";
import { RecipientMap } from "./pages/recipient/RecipientMap";
import { RecipientClaimed } from "./pages/recipient/RecipientClaimed";
import { VolunteerSchedule } from "./pages/volunteer/VolunteerSchedule";
import { VolunteerRoutes } from "./pages/volunteer/VolunteerRoutes";
import { VolunteerMissions } from "./pages/volunteer/VolunteerMissions";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminVerification } from "./pages/admin/AdminVerification";
import { AdminModeration } from "./pages/admin/AdminModeration";
import { Messages } from "./pages/shared/Messages";
import { Notifications } from "./pages/shared/Notifications";
import { Profile } from "./pages/shared/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/auth/role",
    Component: RoleSelection,
  },
  {
    path: "/auth/login",
    Component: Login,
  },
  {
    path: "/auth/register",
    Component: Register,
  },
  // Donor Portal
  {
    path: "/donor",
    Component: DonorDashboard,
  },
  {
    path: "/donor/create",
    Component: CreateListing,
  },
  {
    path: "/donor/impact",
    Component: DonorImpact,
  },
  // Recipient Portal
  {
    path: "/recipient",
    Component: RecipientBrowse,
  },
  {
    path: "/recipient/map",
    Component: RecipientMap,
  },
  {
    path: "/recipient/claimed",
    Component: RecipientClaimed,
  },
  // Volunteer App
  {
    path: "/volunteer",
    Component: VolunteerSchedule,
  },
  {
    path: "/volunteer/routes",
    Component: VolunteerRoutes,
  },
  {
    path: "/volunteer/missions",
    Component: VolunteerMissions,
  },
  // Admin Dashboard
  {
    path: "/admin",
    Component: AdminDashboard,
  },
  {
    path: "/admin/verification",
    Component: AdminVerification,
  },
  {
    path: "/admin/moderation",
    Component: AdminModeration,
  },
  // Shared Pages
  {
    path: "/messages",
    Component: Messages,
  },
  {
    path: "/notifications",
    Component: Notifications,
  },
  {
    path: "/profile",
    Component: Profile,
  },
]);
