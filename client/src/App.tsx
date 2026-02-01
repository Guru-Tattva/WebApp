import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/lib/authContext";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Blog from "@/pages/Blog";
import Dhyanasthali from "@/pages/Dhyanasthali";
import Sahitya from "@/pages/Sahitya";
import Gurukarya from "@/pages/Gurukarya";
import AboutMeditation from "@/pages/AboutMeditation";
import AboutGurudev from "@/pages/AboutGurudev";
import AboutGuruTattva from "@/pages/AboutGuruTattva";
import Management from "@/pages/Management";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Verify from "@/pages/Verify";
import Profile from "@/pages/Profile";
import FindCenter from "@/pages/FindCenter";
import Certificates from "@/pages/Certificates";
import NotFound from "@/pages/not-found";
import ParticlesBackground from "@/components/ParticlesBackground";

function Router() {
  return (
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
