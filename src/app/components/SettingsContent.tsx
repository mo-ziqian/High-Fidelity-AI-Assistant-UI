import { useState } from 'react';
import { MessageCircle, FileText, Shield, Sliders } from 'lucide-react';

type SettingCategory = 'conversation' | 'output' | 'privacy' | 'evolution';

export function SettingsContent() {
  const [activeCategory, setActiveCategory] = useState<SettingCategory>('conversation');

  const [settings, setSettings] = useState({
    autoLearnHabits: true,
    autoStoreFeedback: true,
    personalizedResponse: true,
    contextMemory: true,

    structuredFormat: true,
    detailedCalculation: true,
    simplifyTerms: false,
    includeExamples: true,

    localStorage: true,
    noSensitiveLearning: true,
    dataEncryption: true,
    anonymousMode: false,

    autoEvolution: true,
    feedbackPrompt: true,
    evolutionNotification: true,
    userApprovalRequired: false,
  });

  const categories = [
    { id: 'conversation' as const, icon: MessageCircle, label: '对话偏好' },
    { id: 'output' as const, icon: FileText, label: '内容输出设置' },
    { id: 'privacy' as const, icon: Shield, label: '隐私控制' },
    { id: 'evolution' as const, icon: Sliders, label: '进化权限' },
  ];

  const settingsByCategory = {
    conversation: [
      {
        key: 'autoLearnHabits' as const,
        label: '自动学习用户对话习惯',
        description: 'AI会分析您的提问方式、关注重点，逐步适配您的交流风格',
      },
      {
        key: 'autoStoreFeedback' as const,
        label: '自动存储用户反馈偏好',
        description: '当您对回复提出修正意见时，AI会记录偏好并在后续对话中应用',
      },
      {
        key: 'personalizedResponse' as const,
        label: '启用个性化回复',
        description: '基于已学习的偏好，AI会调整回复风格、详略程度、专业术语使用',
      },
      {
        key: 'contextMemory' as const,
        label: '上下文记忆',
        description: '在同一对话中记住之前提到的信息，避免重复提问',
      },
    ],
    output: [
      {
        key: 'structuredFormat' as const,
        label: '结构化输出格式',
        description: '使用标题、列表、分段等结构化方式组织内容，提升可读性',
      },
      {
        key: 'detailedCalculation' as const,
        label: '展示详细计算步骤',
        description: '在使用金融模型时，展示完整的计算公式和推导过程',
      },
      {
        key: 'simplifyTerms' as const,
        label: '简化专业术语',
        description: '降低金融专业术语使用频率，用更通俗的语言解释概念',
      },
      {
        key: 'includeExamples' as const,
        label: '附带案例说明',
        description: '在解释复杂概念时，提供具体的实际案例帮助理解',
      },
    ],
    privacy: [
      {
        key: 'localStorage' as const,
        label: '本地存储对话数据',
        description: '所有对话记录和学习偏好仅存储在本地设备，不上传至云端',
      },
      {
        key: 'noSensitiveLearning' as const,
        label: '禁止敏感内容学习',
        description: 'AI不会学习和记录涉及个人财务信息、账户密码等敏感数据',
      },
      {
        key: 'dataEncryption' as const,
        label: '数据加密存储',
        description: '使用AES-256加密算法保护本地存储的对话记录和偏好设置',
      },
      {
        key: 'anonymousMode' as const,
        label: '匿名模式',
        description: '开启后，AI不会记录任何用户偏好和对话历史',
      },
    ],
    evolution: [
      {
        key: 'autoEvolution' as const,
        label: '允许AI自动进化',
        description: '基于用户反馈，AI可以自动优化回复策略和输出格式',
      },
      {
        key: 'feedbackPrompt' as const,
        label: '主动请求用户反馈',
        description: 'AI会在关键回复后询问「这个回答是否符合您的预期」',
      },
      {
        key: 'evolutionNotification' as const,
        label: '进化通知',
        description: '当AI完成一次自我优化后，会向用户发送通知说明变更内容',
      },
      {
        key: 'userApprovalRequired' as const,
        label: '进化需用户批准',
        description: '每次AI学习到新偏好前，需经用户确认后才会存储和应用',
      },
    ],
  };

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex-1 flex bg-gradient-to-br from-white via-purple-50/30 to-white">
      {/* 左侧分类导航 */}
      <div className="w-64 bg-white/80 backdrop-blur-sm border-r border-gray-200 p-6">
        <h2 className="text-sm text-gray-600 mb-4">设置分类</h2>
        <nav className="space-y-1">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  activeCategory === category.id
                    ? 'bg-purple-50 text-purple-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{category.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* 右侧设置项 */}
      <div className="flex-1 overflow-y-auto">
        <div className="border-b border-gray-200 bg-white/60 backdrop-blur-sm px-8 py-6">
          <h1 className="text-xl text-gray-900">用户偏好与隐私设置</h1>
          <p className="text-sm text-gray-500 mt-1">
            完全掌控AI的学习行为与数据隐私
          </p>
        </div>

        <div className="px-8 py-6 space-y-4">
          {settingsByCategory[activeCategory].map((setting) => (
            <div
              key={setting.key}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex items-start justify-between gap-4"
            >
              <div className="flex-1">
                <h3 className="text-sm text-gray-900 mb-1">{setting.label}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {setting.description}
                </p>
              </div>

              <button
                onClick={() => toggleSetting(setting.key)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                  settings[setting.key] ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings[setting.key] ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}

          {activeCategory === 'privacy' && (
            <div className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-5">
              <h3 className="text-sm text-purple-900 mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>以人为本的隐私理念</span>
              </h3>
              <p className="text-xs text-purple-700 leading-relaxed">
                本系统严格遵循HCI「用户完全控制权」原则，所有学习行为均可由用户自主决定开启或关闭。数据所有权完全归属用户，您可以随时查看、修改、删除AI学习到的任何偏好记录。
              </p>
            </div>
          )}

          {activeCategory === 'evolution' && (
            <div className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-5">
              <h3 className="text-sm text-purple-900 mb-2 flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                <span>用户对AI自进化的完全控制权</span>
              </h3>
              <p className="text-xs text-purple-700 leading-relaxed">
                AI的每一次进化都基于您的明确反馈。您可以选择让AI自动学习优化，也可以要求每次变更都需要您的批准。进化过程完全透明，所有优化记录均可在「进化记录」中查看。
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
