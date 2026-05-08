import { Clock, TrendingUp, Zap } from 'lucide-react';

export function EvolutionContent() {
  const evolutionRecords = [
    {
      id: '1',
      time: '2026-05-08 14:35',
      feedback: '在做CAPM计算时，希望看到详细的计算步骤，不只是结果',
      optimization: '优化了金融模型计算输出格式，增加「输入参数→计算公式→计算过程→结论」四步展示',
      impact: '提升模型计算透明度',
    },
    {
      id: '2',
      time: '2026-05-08 14:30',
      feedback: '持仓风险评估需要更量化的指标，比如β系数、相关性分析',
      optimization: '在组合风险评估中新增β系数计算、行业相关性分析、资产类型分散度指标',
      impact: '风险评估准确度提升',
    },
    {
      id: '3',
      time: '2026-05-07 16:42',
      feedback: '研报摘要太长，只需要业绩预期和风险点，不要冗余的公司介绍',
      optimization: '调整研报摘要结构：删除公司背景介绍，聚焦「业绩预期+风险点」，控制篇幅在300字以内',
      impact: '信息密度提升40%',
    },
    {
      id: '4',
      time: '2026-05-06 09:15',
      feedback: '回复中专业术语太多，希望用更通俗的语言解释',
      optimization: '降低金融术语使用频率，增加「白话解释」模块，复杂概念附带案例说明',
      impact: '可读性提升',
    },
    {
      id: '5',
      time: '2026-05-05 14:20',
      feedback: '分析个股时需要结合宏观经济环境，单看公司层面不够全面',
      optimization: '个股分析框架升级：增加「宏观经济环境→行业景气度→公司基本面」三层分析逻辑',
      impact: '分析全面性提升',
    },
  ];

  const skills = [
    {
      id: '1',
      name: 'CAPM模型股票收益计算',
      description: '基于资本资产定价模型计算预期收益率',
      learnedAt: '2026-05-08',
      usageCount: 12,
      category: '量化分析',
    },
    {
      id: '2',
      name: '投资组合风险评估',
      description: '分析持仓结构、行业集中度、β系数等风险指标',
      learnedAt: '2026-05-08',
      usageCount: 8,
      category: '风险管理',
    },
    {
      id: '3',
      name: '研报核心信息提取',
      description: '从财报/研报中提取业绩预期、风险点等关键信息',
      learnedAt: '2026-05-07',
      usageCount: 24,
      category: '信息处理',
    },
    {
      id: '4',
      name: 'A股市场周报生成',
      description: '整合市场表现、行业轮动、资金流向等数据生成周报',
      learnedAt: '2026-05-06',
      usageCount: 15,
      category: '市场分析',
    },
    {
      id: '5',
      name: '个股投资风险分析',
      description: '从估值、行业、政策、竞争四维度评估个股风险',
      learnedAt: '2026-05-05',
      usageCount: 31,
      category: '基本面分析',
    },
    {
      id: '6',
      name: '宏观经济数据解读',
      description: '解读央行政策、经济指标对市场的影响',
      learnedAt: '2026-05-04',
      usageCount: 19,
      category: '宏观分析',
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-white via-purple-50/30 to-white overflow-auto">
      <div className="border-b border-gray-200 bg-white/60 backdrop-blur-sm px-8 py-6">
        <h1 className="text-xl text-gray-900">进化记录与技能管理</h1>
        <p className="text-sm text-gray-500 mt-1">AI持续学习与能力迭代的完整追踪</p>
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8">
        {/* 进化时间线 */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-purple-600" />
            <h2 className="text-lg text-gray-900">AI自进化记录时间线</h2>
          </div>

          <div className="space-y-4">
            {evolutionRecords.map((record, index) => (
              <div
                key={record.id}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm relative"
              >
                {index !== evolutionRecords.length - 1 && (
                  <div className="absolute left-7 top-full h-4 w-0.5 bg-purple-200" />
                )}

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-500">{record.time}</span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                        {record.impact}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">用户反馈</div>
                        <p className="text-sm text-gray-700 bg-orange-50 border border-orange-200 rounded-lg px-3 py-2">
                          {record.feedback}
                        </p>
                      </div>

                      <div>
                        <div className="text-xs text-gray-500 mb-1">AI优化结果</div>
                        <p className="text-sm text-gray-900 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                          {record.optimization}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 技能库 */}
        <section className="pb-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-purple-600" />
            <h2 className="text-lg text-gray-900">已学习的金融专属技能库</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-purple-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-sm text-gray-900">{skill.name}</h3>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded flex-shrink-0">
                    {skill.category}
                  </span>
                </div>

                <p className="text-xs text-gray-600 mb-4">{skill.description}</p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div className="text-xs text-gray-500">
                    学习时间：{skill.learnedAt}
                  </div>
                  <div className="text-xs text-purple-600">
                    调用 {skill.usageCount} 次
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
