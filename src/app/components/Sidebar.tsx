import { MessageSquare, Briefcase, TrendingUp, Settings, GitBranch } from 'lucide-react';

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

export function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  const navItems = [
    { id: 'history', icon: MessageSquare, label: '对话历史' },
    { id: 'skills', icon: Briefcase, label: '金融技能库' },
    { id: 'evolution', icon: TrendingUp, label: '进化记录' },
    { id: 'flow', icon: GitBranch, label: '进化流程' },
    { id: 'settings', icon: Settings, label: '设置' },
  ];

  return (
    <div className="w-56 bg-white/80 backdrop-blur-sm border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h2 className="text-sm text-gray-600 mb-6">导航</h2>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onItemClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  activeItem === item.id
                    ? 'bg-purple-50 text-purple-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
