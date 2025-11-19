import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Courses from "./pages/Courses";
import Learnerships from "./pages/Learnerships";
import Corporate from "./pages/Corporate";
import Contact from "./pages/Contact";
import BecomeLearner from "./pages/BecomeLearner";
import BecomeClient from "./pages/BecomeClient";
import News from "./pages/News";
import StudentHub from "./pages/StudentHub";

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/programs" component={Programs} />
        <Route path="/courses" component={Courses} />
        <Route path="/learnerships" component={Learnerships} />
        <Route path="/corporate" component={Corporate} />
        <Route path="/become-learner" component={BecomeLearner} />
        <Route path="/become-client" component={BecomeClient} />
        <Route path="/news" component={News} />
        <Route path="/student-hub" component={StudentHub} />
        <Route path="/contact" component={Contact} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
