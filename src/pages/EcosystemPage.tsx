import { useState } from 'react';
import Navigation from '@/components/Navigation';
import EcosystemTree from '@/components/EcosystemTree';
import MolecularBackground from '@/components/MolecularBackground';

const EcosystemPage = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  return (
    <div className="min-h-screen bg-background relative">
      <MolecularBackground />
      <Navigation isVisible={isNavVisible} onClose={() => setIsNavVisible(false)} />
      <EcosystemTree />
    </div>
  );
};

export default EcosystemPage;