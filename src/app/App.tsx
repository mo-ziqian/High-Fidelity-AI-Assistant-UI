import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatArea } from './components/ChatArea';
import { RightPanel } from './components/RightPanel';
import { EvolutionFlowContent } from './components/EvolutionFlowContent';
import { EvolutionContent } from './components/EvolutionContent';
import { SettingsContent } from './components/SettingsContent';

export default function App() {
  const [activeItem, setActiveItem] = useState('history');

  const renderContent = () => {
    switch (activeItem) {
      case 'flow':
        return <EvolutionFlowContent />;
      case 'evolution':
        return <EvolutionContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return (
          <>
            <ChatArea />
            <RightPanel />
          </>
        );
    }
  };

  return (
    <div className="size-full flex bg-gradient-to-br from-gray-50 via-purple-50/20 to-gray-50">
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      {renderContent()}
    </div>
  );
}
