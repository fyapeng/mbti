/**
 * MBTI Test Data File
 * 
 * This file contains all the necessary data for the MBTI personality test web application.
 * It includes:
 * 1. personalityTypes: An object with details for each of the 16 personality types,
 *    including their title, temperament, associated color, and a brief description.
 * 2. simpleQuestions: A set of 28 questions for a quick and simple test experience.
 * 3. completeQuestions: A comprehensive set of 80 questions for a more in-depth analysis.
 *
 * The questions are designed to be non-proprietary and are based on the general principles
 * of Jungian typology that the MBTI is built upon. For educational and entertainment purposes only.
 */

// ===================================================================================
// 1. 16 Personality Types Data (with Temperaments and Colors)
// ===================================================================================
const personalityTypes = {
    // 守护者 (Guardians) - SJ - 蓝色 🟦
    "ISTJ": { title_zh: "物流师", title_en: "The Inspector", temperament: "守护者 (Guardian)", color: "#3498db", description: "认真、负责、务实。他们是事实和数据的忠实拥护者，喜欢让生活和工作井井有条，是值得信赖的传统守护者。" },
    "ISFJ": { title_zh: "守卫者", title_en: "The Protector", temperament: "守护者 (Guardian)", color: "#3498db", description: "温和、有爱心、乐于助人。他们非常关心他人的感受，以极大的热情和慷慨来保护所爱之人，是忠诚的奉献者。" },
    "ESTJ": { title_zh: "总经理", title_en: "The Supervisor", temperament: "守护者 (Guardian)", color: "#3498db", description: "高效、有条理、是优秀的管理者。他们是传统和秩序的典范，利用他们对正确、错误和社交可接受事物的理解来团结家庭和社区。" },
    "ESFJ": { title_zh: "执政官", title_en: "The Provider", temperament: "守护者 (Guardian)", color: "#3498db", description: "热心、善于社交、乐于助人。他们非常受欢迎，总是热心地为他人提供帮助，并享受在社区中服务他人的感觉。" },
    
    // 工匠/艺术家 (Artisans) - SP - 黄色 🟨
    "ISTP": { title_zh: "鉴赏家", title_en: "The Crafter", temperament: "工匠 (Artisan)", color: "#f1c40f", description: "大胆、务实、热爱探索。他们喜欢用双手和眼睛去探索世界，通过冷静的理性主义和强烈的好奇心来体验生活。" },
    "ISFP": { title_zh: "探险家", title_en: "The Artist", temperament: "工匠 (Artisan)", color: "#f1c40f", description: "迷人、敏感、有艺术气质。他们随时准备好探索和体验新事物，用灵活和自发的方式拥抱生活，寻找美感。" },
    "ESTP": { title_zh: "企业家", title_en: "The Dynamo", temperament: "工匠 (Artisan)", color: "#f1c40f", description: "聪明、精力充沛、有洞察力。他们总是处于风暴的中心，喜欢冒险和行动，是天生的影响者。" },
    "ESFP": { title_zh: "表演者", title_en: "The Performer", temperament: "工匠 (Artisan)", color: "#f1c40f", description: "热情、有趣、精力充沛。他们是天生的表演者，热衷于成为众人瞩目的焦点，并将简单的生活变成一场派对。" },

    // 理想主义者 (Idealists) - NF - 绿色 🟩
    "INFJ": { title_zh: "提倡者", title_en: "The Counselor", temperament: "理想主义者 (Idealist)", color: "#2ecc71", description: "富有理想、有远见、深刻。他们安静而神秘，却能鼓舞人心，并孜孜不倦地为世界留下积极的印记。" },
    "INFP": { title_zh: "调停者", title_en: "The Healer", temperament: "理想主义者 (Idealist)", color: "#2ecc71", description: "善良、富有诗意、利他主义。他们看似安静，但内心充满激情和火焰。他们总是从好的角度看待人和事，希望世界更美好。" },
    "ENFJ": { title_zh: "主人公", title_en: "The Teacher", temperament: "理想主义者 (Idealist)", color: "#2ecc71", description: "有魅力、鼓舞人心、是天生的领导者。他们充满激情和魅力，能够吸引并激励听众，为共同的善而努力。" },
    "ENFP": { title_zh: "竞选者", title_en: "The Champion", temperament: "理想主义者 (Idealist)", color: "#2ecc71", description: "热情、有创造力、善于社交。他们是真正的自由精神，总能找到理由微笑，并以其独特的魅力感染身边的人。" },

    // 理性者 (Rationals) - NT - 紫色 🟪
    "INTJ": { title_zh: "建筑师", title_en: "The Mastermind", temperament: "理性者 (Rational)", color: "#8e44ad", description: "独立、有策略、富有想象力。他们是天生的战略家，对一切都抱有改进的计划，拥有驱动他们实现目标的巨大决心。" },
    "INTP": { title_zh: "逻辑学家", title_en: "The Architect", temperament: "理性者 (Rational)", color: "#8e44ad", description: "充满好奇心、知识渊博、善于分析。他们对知识有着永不满足的渴望，并以其独特的视角和活跃的智力为世界增添光彩。" },
    "ENTJ": { title_zh: "指挥官", title_en: "The Commander", temperament: "理性者 (Rational)", color: "#8e44ad", description: "大胆、有远见、意志坚定。他们是天生的领导者，用魅力和自信汇集人群，总能找到或创造解决方法。" },
    "ENTP": { title_zh: "辩论家", title_en: "The Inventor", temperament: "理性者 (Rational)", color: "#8e44ad", description: "聪明、好奇、喜欢挑战。他们无法抗拒智力上的挑战，喜欢剖析和重建思想，是天生的“杠精”和头脑风暴者。" }
};


// ===================================================================================
// 2. Simple Question Set (28 Questions)
// ===================================================================================
const simpleQuestions = [
    // E/I (7 questions)
    { dimension: 'EI', text: "在社交聚会后，你通常感觉？", optionA: "精力充沛，很兴奋", optionB: "筋疲力尽，想独处" },
    { dimension: 'EI', text: "当思考一个复杂问题时，你倾向于？", optionA: "和别人讨论，大声说出来", optionB: "独自安静地思考" },
    { dimension: 'EI', text: "对于新朋友，你通常是？", optionA: "主动结识，轻松交谈", optionB: "等待别人接近你" },
    { dimension: 'EI', text: "你更喜欢的工作环境是？", optionA: "充满互动和协作", optionB: "安静独立，少受打扰" },
    { dimension: 'EI', text: "你的周末安排更倾向于？", optionA: "和朋友外出活动", optionB: "在家看书、看电影" },
    { dimension: 'EI', text: "在一个团队中，你通常？", optionA: "乐于表达自己的看法", optionB: "先倾听别人的意见" },
    { dimension: 'EI', text: "你对“闲聊”的态度是？", optionA: "觉得是很好的社交方式", optionB: "觉得有点浪费时间" },
    // S/N (7 questions)
    { dimension: 'SN', text: "你更信任？", optionA: "实际的、可触摸的经验", optionB: "灵感和未来的可能性" },
    { dimension: 'SN', text: "在描述一件事时，你倾向于？", optionA: "注重具体细节和事实", optionB: "描述整体模式和含义" },
    { dimension: 'SN', text: "你更喜欢？", optionA: "有明确步骤和说明的任务", optionB: "可以自由发挥和创新的任务" },
    { dimension: 'SN', text: "当学习新东西时，你偏爱？", optionA: "实践和应用", optionB: "理解背后的理论和概念" },
    { dimension: 'SN', text: "你认为自己是一个？", optionA: "务实的人", optionB: "富有想象力的人" },
    { dimension: 'SN', text: "在看电影时，你更容易记住？", optionA: "具体的场景和对话", optionB: "电影的象征意义和主题" },
    { dimension: 'SN', text: "你对未来的规划是？", optionA: "基于现有资源和现实情况", optionB: "充满各种可能性和愿景" },
    // T/F (7 questions)
    { dimension: 'TF', text: "做决定时，你更看重？", optionA: "逻辑和客观的公平", optionB: "他人的感受和关系的和谐" },
    { dimension: 'TF', text: "当朋友遇到麻烦时，你首先会？", optionA: "分析问题，提供解决方案", optionB: "给予情感支持和安慰" },
    { dimension: 'TF', text: "你认为哪个更重要？", optionA: "真相和原则", optionB: "同情和仁慈" },
    { dimension: 'TF', text: "在工作中收到批评时，你更倾向于？", optionA: "客观接受，并分析如何改进", optionB: "感到有点受伤，需要情感缓冲" },
    { dimension: 'TF', text: "你更愿意被看作是一个？", optionA: "思维缜密的人", optionB: "富有同情心的人" },
    { dimension: 'TF', text: "在团队决策中，你强调？", optionA: "效率和结果", optionB: "团队合作和成员感受" },
    { dimension: 'TF', text: "你对规则的态度是？", optionA: "规则是为了让系统更高效", optionB: "规则应考虑特殊情况和人情" },
    // J/P (7 questions)
    { dimension: 'JP', text: "你的生活方式更接近？", optionA: "有条理，喜欢提前计划", optionB: "随性的，喜欢保留选择" },
    { dimension: 'JP', text: "对于截止日期 (Deadline)，你通常？", optionA: "把它看作一个必须遵守的死线", optionB: "把它看作一个可以灵活调整的参考" },
    { dimension: 'JP', text: "在旅行前，你通常会？", optionA: "制定详细的行程表", optionB: "只定好目的地，随心所欲地玩" },
    { dimension: 'JP', text: "你更喜欢？", optionA: "完成一件事，而不是留有悬念", optionB: "享受过程，对新出现的机会保持开放" },
    { dimension: 'JP', text: "你的办公桌或房间通常是？", optionA: "整洁有序", optionB: "东西多，但你知道在哪儿" },
    { dimension: 'JP', text: "在做决定时，你倾向于？", optionA: "尽快做出决定，然后继续前进", optionB: "收集更多信息，不急于下结论" },
    { dimension: 'JP', text: "你觉得“把事情搞定”的感觉？", optionA: "非常满足", optionB: "有时会觉得限制了其他可能性" },
];


// ===================================================================================
// 3. Complete Question Set (80 Questions)
// ===================================================================================
const completeQuestions = [
    // --- E/I (Extraversion / Introversion) - 20 Questions ---
    { dimension: 'EI', text: '在社交场合，你更倾向于？', optionA: '主动与许多人交谈', optionB: '与少数几个你熟悉的人深入交谈' },
    { dimension: 'EI', text: '一个理想的周末夜晚是？', optionA: '参加热闹的派对或活动', optionB: '在家安静地看书或看电影' },
    { dimension: 'EI', text: '在团队会议中，你通常是？', optionA: '积极发言，分享想法', optionB: '更多地倾听，在深思熟虑后发言' },
    { dimension: 'EI', text: '当需要集中精力时，你更喜欢？', optionA: '在有背景噪音（如咖啡馆）的环境', optionB: '在绝对安静的环境' },
    { dimension: 'EI', text: '结识新朋友对你来说？', optionA: '是一件令人兴奋和轻松的事', optionB: '需要一些时间和精力' },
    { dimension: 'EI', text: '在学习新技能时，你更喜欢？', optionA: '通过与他人实践和互动来学习', optionB: '通过自己阅读和研究来学习' },
    { dimension: 'EI', text: '你更倾向于将自己的想法？', optionA: '立即说出来与人分享', optionB: '在内心反复琢磨' },
    { dimension: 'EI', text: '当电话铃响起时，你的第一反应是？', optionA: '乐于接听，看看是谁', optionB: '有点不情愿，希望是短信' },
    { dimension: 'EI', text: '你的能量水平在独处一段时间后会？', optionA: '下降，感到无聊', optionB: '恢复，感到平静' },
    { dimension: 'EI', text: '在做演讲或报告时，你？', optionA: '感觉充满活力，享受观众的关注', optionB: '感到紧张，希望尽快结束' },
    { dimension: 'EI', text: '你对“广度”和“深度”的偏好是？', optionA: '认识很多人，涉猎广泛（广度）', optionB: '深入了解少数人或事（深度）' },
    { dimension: 'EI', text: '在处理问题时，你更倾向于？', optionA: '通过讨论来理清思路', optionB: '通过内省来找到答案' },
    { dimension: 'EI', text: '你更喜欢的工作类型是？', optionA: '需要大量与客户或同事沟通的工作', optionB: '可以独立完成大部分任务的工作' },
    { dimension: 'EI', text: '你认为自己是？', optionA: '一个容易被他人了解的人', optionB: '一个需要时间才能被了解的人' },
    { dimension: 'EI', text: '在团队项目中，你更喜欢扮演的角色是？', optionA: '协调者或发言人', optionB: '研究员或技术专家' },
    { dimension: 'EI', text: '休闲时间，你更可能选择？', optionA: '参加一个团体运动或兴趣小组', optionB: '进行一项个人爱好，如绘画或写作' },
    { dimension: 'EI', text: '当你感到压力时，你会？', optionA: '找朋友倾诉', optionB: '自己一个人静一静' },
    { dimension: 'EI', text: '你对开放式办公环境的看法是？', optionA: '喜欢，因为它促进了沟通', optionB: '讨厌，因为它让人分心' },
    { dimension: 'EI', text: '在派对上，你更可能是？', optionA: '活跃气氛，与不同的人聊天', optionB: '待在角落，观察大家' },
    { dimension: 'EI', text: '你更欣赏？', optionA: '充满活力和热情的人', optionB: '沉静和有深度的人' },

    // --- S/N (Sensing / Intuition) - 20 Questions ---
    { dimension: 'SN', text: '你更关注？', optionA: '眼前的事实和细节', optionB: '未来的可能性和潜在的联系' },
    { dimension: 'SN', text: '在阅读一本书时，你更喜欢？', optionA: '情节具体、描述写实的故事', optionB: '充满象征和隐喻的抽象故事' },
    { dimension: 'SN', text: '你更信任？', optionA: '你亲身体验过的事情', optionB: '你的直觉和预感' },
    { dimension: 'SN', text: '在描述一个事件时，你倾向于？', optionA: '按时间顺序说出具体发生了什么', optionB: '解释这个事件的意义和影响' },
    { dimension: 'SN', text: '你更喜欢的工作任务是？', optionA: '有明确的指导和可预期的结果', optionB: '需要创新和想象力的挑战' },
    { dimension: 'SN', text: '你认为自己更像一个？', optionA: '现实主义者', optionB: '理想主义者' },
    { dimension: 'SN', text: '在学习新知识时，你更倾向于？', optionA: '掌握具体应用和操作', optionB: '理解背后的理论和概念' },
    { dimension: 'SN', text: '对于“改变”，你的态度是？', optionA: '如果现有方式有效，就没必要改变', optionB: '总是寻找新的、更好的方式' },
    { dimension: 'SN', text: '你看待问题时，更容易看到？', optionA: '问题的各个组成部分', optionB: '问题的整体模式' },
    { dimension: 'SN', text: '你更喜欢谈论？', optionA: '具体的人和事', optionB: '抽象的概念和理论' },
    { dimension: 'SN', text: '在组装家具时，你会？', optionA: '严格按照说明书的每一步进行', optionB: '看一眼说明书，然后凭感觉来' },
    { dimension: 'SN', text: '你更欣赏的艺术是？', optionA: '写实主义的绘画', optionB: '抽象派或超现实主义的绘画' },
    { dimension: 'SN', text: '在做长期规划时，你更注重？', optionA: '基于当前情况的实际步骤', optionB: '对未来的愿景和设想' },
    { dimension: 'SN', text: '你更喜欢被认为是？', optionA: '一个务实和脚踏实地的人', optionB: '一个有远见和创造力的人' },
    { dimension: 'SN', text: '当别人向你解释一个想法时，你希望他们？', optionA: '给你举一些具体的例子', optionB: '给你描绘一个整体的蓝图' },
    { dimension: 'SN', text: '你对日常生活的态度是？', optionA: '享受当下，关注现实的乐趣', optionB: '经常思考生活的意义和可能性' },
    { dimension: 'SN', text: '在解决问题时，你更倾向于？', optionA: '使用你熟悉且被证明有效的方法', optionB: '尝试新的、未经试验的方法' },
    { dimension: 'SN', text: '你对细节的态度是？', optionA: '细节是至关重要的', optionB: '细节有时会让人迷失方向' },
    { dimension: 'SN', text: '你更喜欢哪种电影？', optionA: '基于真实事件的纪录片', optionB: '充满奇幻元素的科幻片' },
    { dimension: 'SN', text: '当回忆往事时，你更容易记住？', optionA: '发生过的具体情景和对话', optionB: '当时的感觉和整体氛围' },

    // --- T/F (Thinking / Feeling) - 20 Questions ---
    { dimension: 'TF', text: '在做决定时，你更受什么驱动？', optionA: '客观的逻辑和原则', optionB: '个人价值观和对他人的影响' },
    { dimension: 'TF', text: '当朋友向你倾诉烦恼时，你通常会？', optionA: '帮助他们分析问题并找到解决方案', optionB: '表示同情并给予情感上的支持' },
    { dimension: 'TF', text: '你认为哪个更糟糕？', optionA: '不合逻辑', optionB: '不近人情' },
    { dimension: 'TF', text: '在工作中，你更看重？', optionA: '任务的完成和效率', optionB: '团队的和谐与合作' },
    { dimension: 'TF', text: '在批评别人时，你倾向于？', optionA: '直接坦率，对事不对人', optionB: '委婉温和，以免伤害对方感情' },
    { dimension: 'TF', text: '你更愿意被看作是？', optionA: '一个公正、头脑清醒的人', optionB: '一个热情、有同情心的人' },
    { dimension: 'TF', text: '在面对冲突时，你优先考虑的是？', optionA: '找出真相和事实', optionB: '维护人际关系的和谐' },
    { dimension: 'TF', text: '你觉得一个好的决定应该是？', optionA: '基于事实和证据的合理决定', optionB: '让大多数人都感到满意的决定' },
    { dimension: 'TF', text: '你更容易被什么说服？', optionA: '强有力的逻辑论证', optionB: '充满激情的情感诉求' },
    { dimension: 'TF', text: '在评价一个项目时，你更关注？', optionA: '它是否达到了预期的目标和标准', optionB: '参与者在这个过程中的感受和成长' },
    { dimension: 'TF', text: '当需要做出艰难选择时，你更依赖？', optionA: '你的头脑（理性分析）', optionB: '你的内心（感觉和价值观）' },
    { dimension: 'TF', text: '你认为“公平”意味着？', optionA: '对每个人都使用相同的标准', optionB: '根据每个人的具体情况进行调整' },
    { dimension: 'TF', text: '在团队中，你更倾向于？', optionA: '挑战不合逻辑的观点', optionB: '鼓励和支持团队成员' },
    { dimension: 'TF', text: '你做决定后，如果发现它伤害了某人，你会？', optionA: '坚持决定，因为它是最合乎逻辑的', optionB: '感到不安，并试图弥补' },
    { dimension: 'TF', text: '你更欣赏的领导风格是？', optionA: '果断、高效、以目标为导向', optionB: '民主、包容、以人为本' },
    { dimension: 'TF', text: '在商业谈判中，你认为最重要的是？', optionA: '争取到最有利的条款', optionB: '建立长期、双赢的合作关系' },
    { dimension: 'TF', text: '你对自己的要求是？', optionA: '做事要始终保持客观和理性', optionB: '待人要始终保持真诚和善良' },
    { dimension: 'TF', text: '当别人犯错时，你的第一反应是？', optionA: '指出错误在哪里', optionB: '理解他们为什么会犯错' },
    { dimension: 'TF', text: '什么更能激励你？', optionA: '智力上的挑战和成就感', optionB: '帮助他人和被他人所需要' },
    { dimension: 'TF', text: '你认为社会规则的主要作用是？', optionA: '维持秩序和效率', optionB: '促进合作和互助' },

    // --- J/P (Judging / Perceiving) - 20 Questions ---
    { dimension: 'JP', text: '你的工作方式更倾向于？', optionA: '先制定详细计划，然后按部就班', optionB: '保持灵活性，边做边调整' },
    { dimension: 'JP', text: '对于“截止日期”，你通常？', optionA: '将其视为必须遵守的硬性规定', optionB: '将其视为一个需要努力的目标' },
    { dimension: 'JP', text: '你更喜欢的生活是？', optionA: '有条理、可预测的', optionB: '充满惊喜、随性的' },
    { dimension: 'JP', text: '在做出选择时，你倾向于？', optionA: '尽快决定，以便继续前进', optionB: '尽可能多地了解信息，不急于下结论' },
    { dimension: 'JP', text: '你的办公桌或书桌通常是？', optionA: '整洁有序，所有东西都有固定位置', optionB: '比较杂乱，但充满正在进行的项目' },
    { dimension: 'JP', text: '当一个项目接近完成时，你感觉？', optionA: '很满足，因为事情有了结果', optionB: '有点失落，因为探索的过程结束了' },
    { dimension: 'JP', text: '在安排一次旅行时，你会？', optionA: '提前预订好所有酒店和行程', optionB: '只定好第一站，然后随心而行' },
    { dimension: 'JP', text: '你更喜欢？', optionA: '把事情都解决了（Closure）', optionB: '让事情保持开放的可能性（Options）' },
    { dimension: 'JP', text: '对于日常事务，你倾向于？', optionA: '建立一套固定的流程和习惯', optionB: '根据心情和当天的感觉来安排' },
    { dimension: 'JP', text: '当面对一个新任务时，你首先想的是？', optionA: '如何组织和规划它', optionB: '如何开始和体验它' },
    { dimension: 'JP', text: '你的购物习惯是？', optionA: '带着清单去买需要的东西', optionB: '随便逛逛，看有什么吸引你的' },
    { dimension: 'JP', text: '你如何看待“计划赶不上变化”这句话？', optionA: '感到沮丧，因为这打乱了我的计划', optionB: '认为很正常，变化带来了新的机会' },
    { dimension: 'JP', text: '你更喜欢的工作环境是？', optionA: '结构化、有明确规则和流程', optionB: '自由、灵活、鼓励即兴发挥' },
    { dimension: 'JP', text: '在周末，你更倾向于？', optionA: '完成一些待办事项，让下周更轻松', optionB: '完全放松，不做任何计划' },
    { dimension: 'JP', text: '你认为“准时”是？', optionA: '非常重要的，代表尊重', optionB: '一个相对的概念，不必太死板' },
    { dimension: 'JP', text: '你更喜欢哪种状态？', optionA: '事情尘埃落定的状态', optionB: '事情悬而未决，充满可能性的状态' },
    { dimension: 'JP', text: '在玩游戏时，你更喜欢？', optionA: '有明确规则和获胜条件的游戏', optionB: '可以自由探索和创造的开放世界游戏' },
    { dimension: 'JP', text: '你的人生哲学更接近？', optionA: '生命在于掌控和规划', optionB: '生命在于体验和适应' },
    { dimension: 'JP', text: '当别人向你征求意见时，你倾向于给出？', optionA: '一个明确的、可行的建议', optionB: '几个不同的选项和可能性' },
    { dimension: 'JP', text: '你对列表（To-do list）的态度是？', optionA: '每天都用，完成了就划掉，很有成就感', optionB: '只是个提醒，经常会根据情况改变' },
];
