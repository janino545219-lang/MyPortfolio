import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWorks } from './components/SelectedWorks';
import { Journal } from './components/Journal';
import { Explorations } from './components/Explorations';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-bg text-text-primary min-h-screen">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <main>
          <Navbar />
          <Hero />
          <SelectedWorks />
          <Journal />
          <Explorations />
          <Stats />
          <Footer />
        </main>
      )}
    </div>
  );
}

export default App;
