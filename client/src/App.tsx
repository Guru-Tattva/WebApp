import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/lib/authContext";
import ParticlesBackground from "@/components/ParticlesBackground";

// Lazy-load pages for smaller initial bundle and code-splitting
const Home = lazy(() => import("@/pages/Home"));
const News = lazy(() => import("@/pages/News"));
const Blog = lazy(() => import("@/pages/Blog"));
const Dhyanasthali = lazy(() => import("@/pages/Dhyanasthali"));
const Sahitya = lazy(() => import("@/pages/Sahitya"));
const Gurukarya = lazy(() => import("@/pages/Gurukarya"));
const AboutMeditation = lazy(() => import("@/pages/AboutMeditation"));
const AboutGurudev = lazy(() => import("@/pages/AboutGurudev"));
const AboutGuruTattva = lazy(() => import("@/pages/AboutGuruTattva"));
const Management = lazy(() => import("@/pages/Management"));
const Login = lazy(() => import("@/pages/Login"));
const Signup = lazy(() => import("@/pages/Signup"));
const Verify = lazy(() => import("@/pages/Verify"));
const Profile = lazy(() => import("@/pages/Profile"));
const FindCenter = lazy(() => import("@/pages/FindCenter"));
const Certificates = lazy(() => import("@/pages/Certificates"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/blog" component={Blog} />
        <Route path="/dhyanasthali" component={Dhyanasthali} />
        <Route path="/sahitya" component={Sahitya} />
        <Route path="/gurukarya" component={Gurukarya} />
        <Route path="/about-meditation" component={AboutMeditation} />
        <Route path="/about-gurudev" component={AboutGurudev} />
        <Route path="/about-gurutattva" component={AboutGuruTattva} />
        <Route path="/management" component={Management} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/verify" component={Verify} />
        <Route path="/profile" component={Profile} />
        <Route path="/find-center" component={FindCenter} />
        <Route path="/certificates" component={Certificates} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <ParticlesBackground />
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
