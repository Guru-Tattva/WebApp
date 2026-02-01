import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import FindCenter from "@/pages/FindCenter";
import NotFound from "@/pages/not-found";
import ParticlesBackground from "@/components/ParticlesBackground";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/find-center" component={FindCenter} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ParticlesBackground />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
