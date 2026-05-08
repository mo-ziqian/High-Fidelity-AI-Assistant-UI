import { Send, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useState } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export function ChatArea() {
  const [input, setInput] = useState('');
  const [messages] = useState<Message[]>([
    {
      id: '1',
      role: 'user',
      content: '请帮我分析一下贵州茅台（600519）的投资风险',
      timestamp: '14:23',
    },
    {
      id: '2',
      role: 'assistant',
      content: '根据最新财报和市场数据分析，贵州茅台（600519）的主要投资风险包括：\n\n1. **估值风险**：当前PE倍数为32.5倍，处于历史分位数75%水平，估值偏高\n\n2. **行业风险**：白酒行业面临消费降级压力，高端白酒需求可能放缓\n\n3. **政策风险**：反腐政策持续影响高端消费，公务消费受限\n\n4. **竞争风险**：五粮液等竞品加大市场投入，市场份额可能受到挤压\n\n**建议**：当前价位建议观望，等待回调至更合理估值区间再考虑配置',
      timestamp: '14:23',
    },
    {
      id: '3',
      role: 'user',
      content: '能否提供最近一周的A股市场概览？',
      timestamp: '14:25',
    },
    {
      id: '4',
      role: 'assistant',
      content: '**A股市场周报（2026年5月1日-5月8日）**\n\n**市场表现**\n• 上证指数：3,245.67点（-1.2%）\n• 深证成指：11,234.89点（-0.8%）\n• 创业板指：2,456.78点（+0.5%）\n\n**行业涨跌幅**\n• 新能源：+3.2%（板块领涨）\n• 半导体：+2.1%\n• 白酒：-2.5%\n• 地产：-3.1%（板块领跌）\n\n**资金流向**\n北向资金本周净流入128亿元，主要流入电子、新能源行业\n\n**重要事件**\n央行宣布降准0.25个百分点，市场流动性改善预期升温',
      timestamp: '14:26',
    },
    {
      id: '5',
      role: 'user',
      content: '我的投资组合现在持有：茅台30%、宁德时代25%、腾讯控股20%、招商银行15%、现金10%，请评估一下风险',
      timestamp: '14:28',
    },
    {
      id: '6',
      role: 'assistant',
      content: '**投资组合风险评估报告**\n\n**整体风险评级**：中等偏高 ⚠️\n\n**持仓结构分析**\n• 行业集中度：消费+科技占75%，行业过于集中\n• 地域风险：A股+港股100%，缺乏国际分散\n• 资产类型：权益类90%，现金占比偏低\n\n**主要风险点**\n1. **板块相关性高**：茅台+宁德+腾讯均为高估值成长股，系统性回调时可能同步下跌\n2. **流动性不足**：现金仓位仅10%，应对突发机会能力弱\n3. **β系数偏高**：组合整体波动率约为沪深300的1.3倍\n\n**优化建议**\n• 适当降低茅台+宁德仓位至40-45%\n• 增加防御性资产（债券、红利股）至15-20%\n• 提升现金仓位至15-20%以应对调整',
      timestamp: '14:29',
    },
    {
      id: '7',
      role: 'user',
      content: '用CAPM模型帮我计算一下宁德时代的预期收益率，无风险利率2.5%，市场风险溢价8%',
      timestamp: '14:32',
    },
    {
      id: '8',
      role: 'assistant',
      content: '**CAPM模型计算结果**\n\n**输入参数**\n• 无风险利率 (Rf)：2.5%\n• 市场风险溢价 (Rm - Rf)：8%\n• 宁德时代β系数：1.45（基于过去12个月数据）\n\n**计算公式**\nE(Ri) = Rf + βi × (Rm - Rf)\n\n**计算过程**\nE(宁德时代) = 2.5% + 1.45 × 8%\n              = 2.5% + 11.6%\n              = **14.1%**\n\n**结论**\n根据CAPM模型，宁德时代的年化预期收益率为14.1%。由于其β系数为1.45，说明该股票的波动性是市场平均水平的1.45倍，属于高风险高收益类型资产。',
      timestamp: '14:33',
    },
  ]);

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-white via-purple-50/30 to-white">
      <div className="border-b border-gray-200 bg-white/60 backdrop-blur-sm px-8 py-6">
        <h1 className="text-xl text-gray-900">
          Self-Evolving Personal Finance AI Assistant
        </h1>
        <p className="text-sm text-gray-500 mt-1">基于用户反馈的自进化金融智能助手</p>
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-2xl ${
                message.role === 'user'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white border border-gray-200'
              } rounded-2xl px-5 py-4 shadow-sm`}
            >
              <div className="whitespace-pre-line text-sm leading-relaxed">
                {message.content}
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-current/10">
                <span
                  className={`text-xs ${
                    message.role === 'user' ? 'text-purple-100' : 'text-gray-400'
                  }`}
                >
                  {message.timestamp}
                </span>
                {message.role === 'assistant' && (
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-green-600 transition-colors">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>符合预期</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-orange-600 transition-colors">
                      <ThumbsDown className="w-3.5 h-3.5" />
                      <span>需要修正</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 bg-white/60 backdrop-blur-sm px-8 py-4">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入您的问题..."
            className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
          <button className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors flex items-center gap-2">
            <Send className="w-4 h-4" />
            <span>提交</span>
          </button>
        </div>
      </div>
    </div>
  );
}
