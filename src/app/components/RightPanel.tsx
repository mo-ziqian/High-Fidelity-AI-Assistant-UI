import { Check, Sparkles, Target, Briefcase } from 'lucide-react';

export function RightPanel() {
  const preferences = [
    '偏好价值投资策略，关注基本面分析',
    '风险承受能力：中等偏保守',
    '重点关注A股市场，次要关注港股',
    '投资周期：中长期（1-3年）',
  ];

  const feedbackHistory = [
    {
      id: '1',
      content: '优化风险评估模型，增加流动性指标权重',
      timestamp: '2026-05-07 16:42',
    },
    {
      id: '2',
      content: '调整回复风格，减少专业术语使用',
      timestamp: '2026-05-06 09:15',
    },
    {
      id: '3',
      content: '增加宏观经济数据在分析中的比重',
      timestamp: '2026-05-05 14:20',
    },
  ];

  const skills = [
    { name: '股票分析', level: 95 },
    { name: '研报解读', level: 88 },
    { name: '风险评估', level: 92 },
    { name: '市场预测', level: 78 },
  ];

  return (
    <div className="w-80 bg-white/80 backdrop-blur-sm border-l border-gray-200 overflow-y-auto">
      <div className="p-6 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-4 h-4 text-purple-600" />
            <h3 className="text-sm text-gray-900">已学习的用户偏好</h3>
          </div>
          <div className="space-y-2">
            {preferences.map((pref, index) => (
              <div
                key={index}
                className="flex items-start gap-2 text-xs text-gray-600 bg-purple-50/50 rounded-lg p-3"
              >
                <Check className="w-3.5 h-3.5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>{pref}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <h3 className="text-sm text-gray-900">最近反馈优化记录</h3>
          </div>
          <div className="space-y-3">
            {feedbackHistory.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-lg p-3"
              >
                <p className="text-xs text-gray-700 mb-2">{item.content}</p>
                <span className="text-[10px] text-gray-400">{item.timestamp}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-4 h-4 text-purple-600" />
            <h3 className="text-sm text-gray-900">核心金融技能</h3>
          </div>
          <div className="space-y-3">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-gray-700">{skill.name}</span>
                  <span className="text-xs text-purple-600">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
