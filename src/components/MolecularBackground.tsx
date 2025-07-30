import { useEffect, useState } from 'react';

interface Molecule {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  type: 'primary' | 'secondary' | 'light';
}

const MolecularBackground = () => {
  const [molecules, setMolecules] = useState<Molecule[]>([]);

  useEffect(() => {
    const generateMolecules = () => {
      const newMolecules: Molecule[] = [];
      const types: Molecule['type'][] = ['primary', 'secondary', 'light'];
      
      for (let i = 0; i < 15; i++) {
        newMolecules.push({
          id: i,
          size: Math.random() * 150 + 20, // 20-170px
          x: Math.random() * 100, // 0-100%
          y: Math.random() * 100, // 0-100%
          delay: Math.random() * 20, // 0-20s delay
          type: types[Math.floor(Math.random() * types.length)]
        });
      }
      
      setMolecules(newMolecules);
    };

    generateMolecules();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {molecules.map((molecule) => (
        <div
          key={molecule.id}
          className={`molecule ${
            molecule.type === 'secondary'
              ? 'molecule-secondary'
              : molecule.type === 'light'
              ? 'molecule-light'
              : ''
          }`}
          style={{
            width: `${molecule.size}px`,
            height: `${molecule.size}px`,
            left: `${molecule.x}%`,
            top: `${molecule.y}%`,
            animationDelay: `${molecule.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default MolecularBackground;