import { ArrowRight, Sparkles, Check, Database } from 'lucide-react';

export function FeedbackFlow() {
  return (
    <div className="size-full bg-gradient-to-br from-gray-50 via-purple-50/20 to-gray-50 overflow-auto">
      <div className="min-h-full flex flex-col items-center justify-center p-12">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-2xl text-gray-900 mb-3">
              Self-Evolving AI Assistant: User Feedback Loop
            </h1>
            <p className="text-sm text-gray-500">
              基于自然语言反馈的人机协同进化完整流程
            </p>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 items-center">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm">
                  1
                </div>
                <h2 className="text-base text-gray-900">用户给出自然语言反馈</h2>
              </div>

              <div className="space-y-3">
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="text-xs text-gray-500 mb-2">AI原回复</div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    **贵州茅台2025年报摘要**
                    <br />
                    <br />
                    公司成立于1999年，是中国领先的白酒企业，主营业务包括高端白酒的生产与销售。2025年实现营收1,234亿元，同比增长8.5%...
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                  <div className="text-xs text-orange-700 mb-2">用户反馈</div>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    这个研报摘要不对，我要突出<strong>业绩预期</strong>和
                    <strong>风险点</strong>，不要冗余的公司介绍
                  </p>
                </div>
              </div>
            </div>

            <ArrowRight className="w-6 h-6 text-purple-400" />

            {/* Step 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm">
                  2
                </div>
                <h2 className="text-base text-gray-900">AI解析反馈并优化输出</h2>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl p-4">
                <div className="text-xs text-green-700 mb-3 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>优化后回复</span>
                </div>
                <p className="text-sm text-gray-900 leading-relaxed mb-4">
                  **贵州茅台2025年报摘要**
                  <br />
                  <br />
                  <span className="bg-green-100 px-1 rounded">
                    📊 业绩预期：2026年营收目标1,350亿元（+9.4%），净利润预期680亿元（+10.2%），主要增长驱动力为产品结构升级
                  </span>
                  <br />
                  <br />
                  <span className="bg-green-100 px-1 rounded">
                    ⚠️ 风险点：①高端消费需求不确定性 ②估值处于历史高位 ③库存周转天数同比上升15%
                  </span>
                </p>

                <div className="space-y-2 pt-3 border-t border-gray-200">
                  <div className="flex items-start gap-2 text-xs text-gray-600">
                    <Check className="w-3.5 h-3.5 text-green-600 mt-0.5" />
                    <span>新增业绩预期模块</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-600">
                    <Check className="w-3.5 h-3.5 text-green-600 mt-0.5" />
                    <span>新增风险点模块</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-600">
                    <Check className="w-3.5 h-3.5 text-green-600 mt-0.5" />
                    <span>删除冗余公司介绍内容</span>
                  </div>
                </div>
              </div>
            </div>

            <ArrowRight className="w-6 h-6 text-purple-400" />

            {/* Step 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm">
                  3
                </div>
                <h2 className="text-base text-gray-900">完成自进化，存储用户偏好</h2>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="w-4 h-4 text-purple-600" />
                  <span className="text-xs text-purple-700">已学习并存储</span>
                </div>

                <div className="bg-white rounded-lg p-3 mb-3">
                  <p className="text-sm text-gray-900 leading-relaxed">
                    <strong>偏好记录：</strong>研报摘要优先展示业绩预期+风险点，控制篇幅在300字以内
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-purple-600">
                  <Check className="w-3.5 h-3.5" />
                  <span>后续对话将自动适配该偏好</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-xs text-gray-500 mb-2">进化历史</div>
                <div className="space-y-1.5">
                  <div className="text-xs text-gray-600 bg-gray-50 rounded px-2 py-1.5">
                    2026-05-08 14:32 · 研报摘要格式优化
                  </div>
                  <div className="text-xs text-gray-600 bg-gray-50 rounded px-2 py-1.5">
                    2026-05-07 16:42 · 风险评估模型更新
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">
              <Sparkles className="w-4 h-4" />
              <span>完整闭环：用户反馈 → AI优化 → 偏好存储 → 持续进化</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
