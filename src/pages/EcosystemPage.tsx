import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Banner from '@/components/Banner';
import EcosystemTree from '@/components/EcosystemTree';

const EcosystemPage = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  return (
    <div className="min-h-screen bg-background relative">
      <Banner />
      <Navigation isVisible={isNavVisible} onClose={() => setIsNavVisible(false)} />
      <EcosystemTree />
    </div>
  );
};

export default EcosystemPage;