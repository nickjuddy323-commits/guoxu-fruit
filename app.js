/* 果序 · 时令水果志 */

const SEASONS = {
  spring: {
    name: "春",
    title: "春 · 新鲜初醒",
    text: "春天的水果带着清新的酸甜，适合唤醒胃口。草莓、枇杷、菠萝正当季，柑橘类仍在收尾。",
    quote: "少酸多甘，顺着春气吃轻盈一点的果子。",
  },
  summer: {
    name: "夏",
    title: "夏 · 多汁解暑",
    text: "夏季水果水分高、香气浓。西瓜、桃、葡萄、芒果轮番登场，是补充水分与电解质的好帮手。",
    quote: "热天优先高水分水果，冰镇别过头，肠胃会抗议。",
  },
  autumn: {
    name: "秋",
    title: "秋 · 丰收醇厚",
    text: "秋天风味开始变得扎实：石榴、柿子、梨、葡萄、柚子陆续成熟，润燥补水正合适。",
    quote: "秋燥易口干，梨、柚、葡萄这类多汁果子很贴心。",
  },
  winter: {
    name: "冬",
    title: "冬 · 清甜温润",
    text: "冬季以柑橘类为绝对主角。橙、柚、金橘、草莓温室上市，酸甜提神，也补维生素 C。",
    quote: "冷天想吃清甜时，柑橘家族几乎不会出错。",
  },
};

const BENEFITS = [
  { id: "vitc", label: "补充维 C", icon: "#e85a3c" },
  { id: "fiber", label: "膳食纤维", icon: "#7aa86a" },
  { id: "eye", label: "护眼明目", icon: "#d4842e" },
  { id: "antiox", label: "抗氧化", icon: "#b0557a" },
  { id: "hydrate", label: "补水润燥", icon: "#4a7c9b" },
  { id: "digest", label: "助消化", icon: "#c4783a" },
  { id: "energy", label: "快速补能", icon: "#e0b33c" },
  { id: "lowcal", label: "低卡友好", icon: "#5f9e78" },
];

// sugar: low | mid | high
const FRUITS = [
  {
    id: "apple",
    name: "苹果",
    en: "Apple",
    emoji: "🍎",
    seasons: ["autumn", "winter"],
    months: [9, 10, 11, 12, 1],
    accent: "#c4574a",
    sugar: "mid",
    common: true,
    brief: "四季常见，秋冬最脆甜。果胶丰富，饭后一颗很耐吃。",
    benefits: ["富含果胶等膳食纤维，有助维持肠道舒适", "含多酚类物质，具抗氧化潜力", "咀嚼感强，适合当作加餐", "带皮吃纤维更完整"],
    seasonText: "秋冬季的红富士、嘎啦果风味最足。晚秋到初春是最佳赏味期。",
    pairing: "切片配无糖酸奶或坚果；炖肉时加几块苹果能去腻。控糖时一次吃小个即可。",
    tips: "选果面光滑、手感沉实、果香清新的。冰箱冷藏可存放数周；切开后尽快食用。",
    calories: "约 52 kcal / 100g",
    tags: ["fiber", "antiox", "digest"],
  },
  {
    id: "banana",
    name: "香蕉",
    en: "Banana",
    emoji: "🍌",
    seasons: ["summer", "autumn"],
    months: [5, 6, 7, 8, 9, 10],
    accent: "#e0b33c",
    sugar: "high",
    common: true,
    brief: "方便携带的天然能量棒，运动前后都很合适。",
    benefits: ["富含钾元素，有助维持正常肌肉与神经功能", "碳水释放平缓，适合快速补充能量", "口感软糯，对牙口不友好时也易吃", "含抗性淀粉（偏青时更高）"],
    seasonText: "全年有售，但风味最佳多在夏秋。偏青时更抗饿，斑点熟蕉更甜更软。",
    pairing: "和燕麦、牛奶打成奶昔；运动前半根补能很稳。控糖人群优先偏青的香蕉，并减量。",
    tips: "室温催熟，熟后冷藏可减缓变黑（皮会变黑但果肉仍好）。不要未熟就放冰箱。",
    calories: "约 93 kcal / 100g",
    tags: ["energy", "fiber"],
  },
  {
    id: "orange",
    name: "橙子",
    en: "Orange",
    emoji: "🍊",
    seasons: ["winter", "spring"],
    months: [11, 12, 1, 2, 3],
    accent: "#e08a3c",
    sugar: "mid",
    common: true,
    brief: "冬季维 C 担当，酸甜多汁，闻起来就提神。",
    benefits: ["维生素 C 含量突出", "含类黄酮等植物化学物", "水分足，解渴也解腻", "酸度适中，适合做鲜榨或直接吃"],
    seasonText: "晚秋至初春是主产季，冬至前后往往最甜。",
    pairing: "早餐半个橙子配鸡蛋；炖鱼、做沙拉时挤几滴汁。尽量吃果肉，别用果汁代替整果。",
    tips: "选手感沉、果皮有弹性、脐部平整的。常温通风存放即可，冷藏更久。",
    calories: "约 48 kcal / 100g",
    tags: ["vitc", "hydrate", "antiox"],
  },
  {
    id: "strawberry",
    name: "草莓",
    en: "Strawberry",
    emoji: "🍓",
    seasons: ["spring", "winter"],
    months: [12, 1, 2, 3, 4],
    accent: "#c45b7a",
    sugar: "low",
    common: true,
    brief: "香气迷人、酸甜轻盈，春日与温室冬春的明星。",
    benefits: ["维生素 C 丰富", "含花青素等抗氧化成分", "热量相对友好", "含多种植物营养素"],
    seasonText: "自然产季多在春季；冬春温室草莓也能买到好风味。上市高峰的草莓最甜。",
    pairing: "配酸奶、燕麦碗，或蘸一点黑巧克力。洗后立刻吃，别泡水。",
    tips: "选果蒂翠绿、无白斑水渍的。带回家摊开通风，吃前再洗，不要浸泡。",
    calories: "约 32 kcal / 100g",
    tags: ["vitc", "antiox", "lowcal"],
  },
  {
    id: "blueberry",
    name: "蓝莓",
    en: "Blueberry",
    emoji: "🫐",
    seasons: ["summer"],
    months: [6, 7, 8],
    accent: "#5b6fa8",
    sugar: "low",
    common: true,
    brief: "小小一粒，花青素含量亮眼，早餐酸奶的好搭档。",
    benefits: ["富含花青素，抗氧化关注度高", "膳食纤维不错", "低糖低卡的加餐选择", "便于冷冻保存营养"],
    seasonText: "夏季是国产蓝莓旺季，进口冷冻蓝莓全年可得。",
    pairing: "拌进酸奶、隔夜燕麦；冷冻蓝莓做冰沙不用另外加糖也够甜。",
    tips: "选果粉完整、颗粒饱满的。不洗直接冷藏，吃前再冲洗。",
    calories: "约 57 kcal / 100g",
    tags: ["antiox", "fiber", "lowcal"],
  },
  {
    id: "grape",
    name: "葡萄",
    en: "Grape",
    emoji: "🍇",
    seasons: ["summer", "autumn"],
    months: [7, 8, 9, 10],
    accent: "#6b7fa8",
    sugar: "high",
    common: true,
    brief: "夏末秋初的甜蜜串珠，品种丰富，颜色越深往往风味越浓。",
    benefits: ["含白藜芦醇、花青素等多酚成分", "天然糖分可快速补能", "果皮营养丰富，能吃皮就吃皮", "水分足，解渴"],
    seasonText: "盛夏到初秋是国产葡萄旺季。阳光玫瑰、巨峰、玫瑰香各有风味高峰。",
    pairing: "冻葡萄是夏日小零食；配奶酪拼盘很出彩。一次一小串就好，容易不知不觉吃多。",
    tips: "选果梗青绿、果粒紧实不易掉的。冷藏存放，吃前再剪成小串清洗。",
    calories: "约 69 kcal / 100g",
    tags: ["antiox", "energy", "hydrate"],
  },
  {
    id: "watermelon",
    name: "西瓜",
    en: "Watermelon",
    emoji: "🍉",
    seasons: ["summer"],
    months: [6, 7, 8],
    accent: "#d4574a",
    sugar: "mid",
    common: true,
    brief: "夏天的代名词。高水分、清甜爽快，切开就有节日感。",
    benefits: ["含水量极高，补水首选之一", "含番茄红素（红瓤）", "热量相对不高，适量吃负担小", "天然清甜，适合分享"],
    seasonText: "炎夏最盛。挑对时令的本地西瓜，往往比反季节更甜更便宜。",
    pairing: "撒一点盐提甜；和薄荷、柠檬做冷饮。切开后尽快吃完，别当水无限喝。",
    tips: "看纹路清晰、瓜蒂卷曲干枯、轻拍有空灵回声。切开后盖保鲜膜冷藏，尽快吃完。",
    calories: "约 31 kcal / 100g",
    tags: ["hydrate", "lowcal"],
  },
  {
    id: "peach",
    name: "桃",
    en: "Peach",
    emoji: "🍑",
    seasons: ["summer"],
    months: [6, 7, 8],
    accent: "#e08a7a",
    sugar: "mid",
    common: true,
    brief: "盛夏的软甜记忆，水蜜桃、黄桃、蟠桃各有拥趸。",
    benefits: ["含钾与多种维生素", "膳食纤维尚可", "香气开胃，适合食欲不振时", "水分较多，解渴"],
    seasonText: "夏季是绝对主场，七月中旬到八月往往是水蜜桃高峰。",
    pairing: "冰镇后直接吃最过瘾；也可拌沙拉、做桃子气泡水。软桃适合甜品，脆桃适合咸口。",
    tips: "水蜜桃选有绒毛、香气浓、轻按微软的；脆桃则选硬实。软熟桃尽快冷藏或吃掉。",
    calories: "约 42 kcal / 100g",
    tags: ["hydrate", "fiber", "digest"],
  },
  {
    id: "mango",
    name: "芒果",
    en: "Mango",
    emoji: "🥭",
    seasons: ["summer"],
    months: [4, 5, 6, 7, 8],
    accent: "#e0a83c",
    sugar: "high",
    common: true,
    brief: "热带香气之王。成熟后果肉细腻，甜味饱满。",
    benefits: ["富含 β-胡萝卜素（维生素 A 原）", "维生素 C 也不错", "香气浓郁，增进食欲", "含消化酶（如芒果蛋白酶）"],
    seasonText: "春夏之交到盛夏是旺季，海南、广西、云南、东南亚品种轮番上市。",
    pairing: "配椰奶、糯米饭；和虾做酸辣沙拉也很搭。一次半个到一个就足够满足。",
    tips: "轻捏有弹性、香气扑鼻即熟。未熟时室温放置，熟后冷藏。对漆树科过敏者谨慎。",
    calories: "约 65 kcal / 100g",
    tags: ["eye", "vitc", "digest"],
  },
  {
    id: "kiwi",
    name: "猕猴桃",
    en: "Kiwi",
    emoji: "🥝",
    seasons: ["autumn", "winter"],
    months: [9, 10, 11, 12, 1],
    accent: "#7aa86a",
    sugar: "mid",
    common: true,
    brief: "维 C 与维 K 的好来源，酸甜平衡，挖着吃很方便。",
    benefits: ["维生素 C 含量很高", "含奇异果蛋白酶，有助蛋白质消化", "膳食纤维丰富", "钾含量不俗"],
    seasonText: "秋季国产猕猴桃大量上市，进口绿心、黄心品种也多在秋冬。",
    pairing: "切丁拌酸奶；或做烤鸡翅的腌料软化肉质。绿心偏酸，黄心更甜。",
    tips: "轻握微软有弹性即可吃。可与苹果香蕉同放催熟；熟后冷藏延缓过软。",
    calories: "约 61 kcal / 100g",
    tags: ["vitc", "fiber", "digest"],
  },
  {
    id: "pear",
    name: "梨",
    en: "Pear",
    emoji: "🍐",
    seasons: ["autumn", "winter"],
    months: [8, 9, 10, 11, 12],
    accent: "#c4b36a",
    sugar: "mid",
    common: true,
    brief: "秋燥时节的经典润口果子，清甜多汁。",
    benefits: ["含水量高，润燥解渴", "膳食纤维（含石细胞）丰富", "清甜不腻，适合炖煮", "钾等矿物质有一定贡献"],
    seasonText: "夏末到深秋是主场，砀山梨、库尔勒香梨、秋月梨各有最佳期。",
    pairing: "炖银耳、煮梨汤；或切丝拌沙拉。嗓子不舒服时热梨水比冰饮更温和。",
    tips: "选果形端正、手感沉、无碰伤的。西洋梨需后熟变软再吃；砂梨类脆甜可直接吃。",
    calories: "约 51 kcal / 100g",
    tags: ["hydrate", "fiber"],
  },
  {
    id: "citrus-pomelo",
    name: "柚子",
    en: "Pomelo",
    emoji: "🍈",
    seasons: ["autumn", "winter"],
    months: [9, 10, 11, 12],
    accent: "#d4a24a",
    sugar: "low",
    common: true,
    brief: "秋冬清甜巨果，瓣多汁足，节日感满满。",
    benefits: ["维生素 C 丰富", "水分多，解腻", "含柚皮苷等黄酮类", "热量友好，分享性强"],
    seasonText: "中秋后到春节是最佳时段，沙田柚、蜜柚、文旦各有风味。",
    pairing: "剥瓣当零食；果皮可做糖渍或柚子茶。海鲜大餐后来几瓣很解腻。",
    tips: "选手感沉、按压紧实、果皮有油胞香气的。去皮分瓣冷藏可保存数日。",
    calories: "约 42 kcal / 100g",
    tags: ["vitc", "hydrate", "lowcal"],
  },
  {
    id: "pomegranate",
    name: "石榴",
    en: "Pomegranate",
    emoji: "🔴",
    seasons: ["autumn"],
    months: [8, 9, 10, 11],
    accent: "#b0453c",
    sugar: "mid",
    common: true,
    brief: "秋日红宝石，籽粒酸甜爆浆，耐心拆才好吃。",
    benefits: ["富含多酚与花青素", "维生素 C、钾有一定含量", "抗氧化关注度高", "天然酸甜，开胃"],
    seasonText: "秋季成熟，九月到十一月是最佳赏味期。",
    pairing: "撒在沙拉、酸奶上；也可榨汁兑气泡水。空腹大量吃可能刺激胃。",
    tips: "选果皮光滑发亮、棱线明显、手感沉的。整果常温阴凉处可放一段时间；剥籽后冷藏。",
    calories: "约 83 kcal / 100g",
    tags: ["antiox", "vitc"],
  },
  {
    id: "pineapple",
    name: "菠萝",
    en: "Pineapple",
    emoji: "🍍",
    seasons: ["spring", "summer"],
    months: [3, 4, 5, 6, 7],
    accent: "#e0b33c",
    sugar: "mid",
    common: true,
    brief: "热带酸甜，香气有穿透力，泡盐水后更柔和。",
    benefits: ["含菠萝蛋白酶，有助蛋白质消化", "维生素 C 与锰不错", "酸甜开胃", "热量中等"],
    seasonText: "春末到盛夏最甜。海南、广东、广西、东南亚产区接力。",
    pairing: "配烤肉、披萨、咕咾肉；或拌虾仁沙拉。淡盐水泡 10 分钟可减少「杀嘴」感。",
    tips: "选叶冠挺立、果身金黄、香气浓、轻按略软的。去皮切块后冷藏尽快吃。",
    calories: "约 54 kcal / 100g",
    tags: ["vitc", "digest"],
  },
  {
    id: "cherry",
    name: "樱桃",
    en: "Cherry",
    emoji: "🍒",
    seasons: ["spring", "summer"],
    months: [5, 6],
    accent: "#b0455c",
    sugar: "mid",
    common: true,
    brief: "春夏之交的小红珠，酸甜精致，颗颗珍贵。",
    benefits: ["含花青素等多酚", "含钾、维生素 C", "天然褪黑素受关注", "口感精致，适合作为小奖励"],
    seasonText: "国产大樱桃多在五、六月；进口车厘子集中在冬春。",
    pairing: "洗干净直接吃最幸福；也可配奶酪、做果酱。一次 10–15 颗就很有满足感。",
    tips: "选果梗翠绿、果粒硬实饱满的。冷藏保存，不要水洗后存放。",
    calories: "约 46 kcal / 100g",
    tags: ["antiox", "vitc"],
  },
  {
    id: "dragonfruit",
    name: "火龙果",
    en: "Dragon Fruit",
    emoji: "🐉",
    seasons: ["summer", "autumn"],
    months: [5, 6, 7, 8, 9, 10],
    accent: "#c45b7a",
    sugar: "mid",
    common: true,
    brief: "外观张扬，果肉清淡，小黑籽嚼感有趣。",
    benefits: ["含水量高，补水友好", "小黑籽带来膳食纤维", "热量相对友好", "口感清淡，适合搭配酸奶"],
    seasonText: "夏秋为旺季，红心、白心风味不同，红心更甜更艳。",
    pairing: "挖球做水果拼盘；和酸奶、蜂蜜拌着吃。红心汁液染色强，切的时候垫纸。",
    tips: "选鳞片新鲜不干枯、略软有弹性的。室温放熟，熟后冷藏。",
    calories: "约 55 kcal / 100g",
    tags: ["hydrate", "fiber", "lowcal"],
  },
  {
    id: "durian",
    name: "榴莲",
    en: "Durian",
    emoji: "🟡",
    seasons: ["summer"],
    months: [5, 6, 7, 8],
    accent: "#c4a03c",
    sugar: "high",
    common: true,
    brief: "爱之深、避之远。浓郁奶油感，热带水果之王。",
    benefits: ["能量密度高，适合需要补能时", "含钾、维生素 C、B 族", "膳食纤维不低", "风味极强，少量即满足"],
    seasonText: "夏季是旺季，泰国、马来西亚金枕、猫山王各有上市期。",
    pairing: "冷冻后像冰淇淋；或做榴莲酥、班戟。一次 1–2 瓣足矣，别当饭吃。",
    tips: "刺尖可捏、有香气裂缝即熟。未开果室温；果肉冷冻可久存。控糖与肾病人群注意份量。",
    calories: "约 150 kcal / 100g",
    tags: ["energy"],
  },
  {
    id: "lychee",
    name: "荔枝",
    en: "Lychee",
    emoji: "🏮",
    seasons: ["summer"],
    months: [6, 7],
    accent: "#d4574a",
    sugar: "high",
    common: true,
    brief: "一骑红尘妃子笑。鲜食最惊艳，稍纵即逝的季节感。",
    benefits: ["维生素 C 不错", "含多种酚类物质", "清甜多汁，开胃", "钾有一定含量"],
    seasonText: "初夏短短一季，六月前后最盛。妃子笑、糯米糍、桂味各有风味。",
    pairing: "冰镇后风味更清晰；或浸入绿茶。空腹一次别吃太多，成人一次约 10 颗内更稳妥。",
    tips: "选果壳刺锐、颜色自然不过艳、有清香味的。冷藏保鲜，空腹一次别吃太多。",
    calories: "约 71 kcal / 100g",
    tags: ["vitc", "energy"],
  },
  {
    id: "longan",
    name: "龙眼",
    en: "Longan",
    emoji: "🟤",
    seasons: ["summer", "autumn"],
    months: [7, 8],
    accent: "#c49a5c",
    sugar: "high",
    common: true,
    brief: "比荔枝更温润，甜得收敛，常用来做甜汤。",
    benefits: ["天然糖分可快速补能", "含多种矿物质", "传统上常与安神补益联系", "适合做甜品与茶饮"],
    seasonText: "盛夏到初秋，七月八月是高峰。",
    pairing: "煮红枣桂圆茶；或做甜汤。鲜果一次一把就好，桂圆干更要减量。",
    tips: "选果壳完整、果肉饱满的。鲜果冷藏；桂圆干则阴凉干燥处密封。",
    calories: "约 60 kcal / 100g（鲜）",
    tags: ["energy"],
  },
  {
    id: "persimmon",
    name: "柿子",
    en: "Persimmon",
    emoji: "🟠",
    seasons: ["autumn", "winter"],
    months: [9, 10, 11],
    accent: "#e07a3c",
    sugar: "high",
    common: true,
    brief: "秋末的橙红灯笼，软糯或脆爽各有流派。",
    benefits: ["富含 β-胡萝卜素", "含多酚类抗氧化物", "膳食纤维丰富", "钾含量较好"],
    seasonText: "深秋最盛，霜降前后往往更甜。脆柿与软柿上市期略有差别。",
    pairing: "软柿可做柿子饼、拌酸奶；脆柿切片配芝士。不宜空腹大量吃。",
    tips: "脆柿选硬实橙红；软柿待变软再吃。空腹慎食大量柿子；避免与高蛋白餐同时大量摄入。",
    calories: "约 72 kcal / 100g",
    tags: ["eye", "antiox", "fiber"],
  },
  {
    id: "grapefruit",
    name: "西柚",
    en: "Grapefruit",
    emoji: "🍊",
    seasons: ["winter"],
    months: [12, 1, 2, 3],
    accent: "#e08a6a",
    sugar: "low",
    common: true,
    brief: "微苦回甘，早餐切一半，清爽提神。",
    benefits: ["维生素 C 丰富", "含柚皮苷等黄酮", "热量较低", "苦味来自呋喃香豆素等成分，开胃"],
    seasonText: "冬季是主场，一月前后风味稳定。",
    pairing: "早餐切半用勺挖着吃；或做沙拉汁。服药人群请先咨询医生。",
    tips: "选手感沉、果皮细致的。冷藏保存更久。服药人群（部分降压药、他汀等）请咨询医生。",
    calories: "约 42 kcal / 100g",
    tags: ["vitc", "lowcal"],
  },
  {
    id: "avocado",
    name: "牛油果",
    en: "Avocado",
    emoji: "🥑",
    seasons: ["spring", "summer"],
    months: [3, 4, 5, 6, 7, 8],
    accent: "#6a9e5c",
    sugar: "low",
    common: true,
    brief: "严格说是浆果，但厨房里当「健康脂肪担当」用。",
    benefits: ["以单不饱和脂肪酸为主", "含钾、维生素 K、叶酸", "饱腹感强", "口感顺滑，适合咸甜搭配"],
    seasonText: "春到初夏常见；进口全年有售，品种季节略有差异。",
    pairing: "抹吐司、拌沙拉、做酱；和鸡蛋、番茄很配。一次半个即可，热量并不低。",
    tips: "轻捏微软即可吃。未熟室温催熟；熟后冷藏 2–3 天。切开挤柠檬汁防氧化。",
    calories: "约 160 kcal / 100g",
    tags: ["energy"],
  },
  {
    id: "lemon",
    name: "柠檬",
    en: "Lemon",
    emoji: "🍋",
    seasons: ["winter", "spring"],
    months: [11, 12, 1, 2, 3],
    accent: "#e0c84a",
    sugar: "low",
    common: true,
    brief: "很少有人整颗啃，却是厨房与饮品的灵魂。",
    benefits: ["维生素 C 含量高", "酸度天然，有助增鲜去腥", "柠檬香气提神", "适合做水、茶、调味"],
    seasonText: "冬春常见，安岳柠檬等产区供应稳定。",
    pairing: "挤汁调饮品、拌沙拉、去鱼腥；泡水用温水即可，别用滚水久煮。",
    tips: "选手感沉、果皮细腻有油香的。常温或冷藏均可；切开后密封冷藏。",
    calories: "约 29 kcal / 100g",
    tags: ["vitc"],
  },
  {
    id: "apricot",
    name: "杏",
    en: "Apricot",
    emoji: "🍑",
    seasons: ["spring", "summer"],
    months: [5, 6, 7],
    accent: "#e08a5c",
    sugar: "mid",
    common: true,
    brief: "春夏之交的酸甜小果，果脯之外，鲜食也很迷人。",
    benefits: ["富含 β-胡萝卜素", "含钾与纤维", "酸甜开胃", "传统润肺食果之一"],
    seasonText: "晚春到初夏，五、六月最鲜。",
    pairing: "直接吃或做果酱；搭配羊奶酪很出彩。果脯含糖高，不能等价替换鲜果。",
    tips: "选香气浓、略软有弹性的。非常易熟，尽快食用或做果酱。",
    calories: "约 48 kcal / 100g",
    tags: ["eye", "digest", "fiber"],
  },
  {
    id: "loquat",
    name: "枇杷",
    en: "Loquat",
    emoji: "枇",
    seasons: ["spring"],
    months: [3, 4, 5],
    accent: "#e0b35c",
    sugar: "mid",
    common: true,
    brief: "春末金黄小果，清甜微酸，果期很短。",
    benefits: ["含多种维生素与矿物质", "水分适中，口感柔和", "传统上常与润喉联系", "春季限定感强"],
    seasonText: "晚春最盛，四五月是高峰，浙江、福建、四川都有好产区。",
    pairing: "去皮去核直接吃；或炖冰糖枇杷。一次 5–8 颗，别空腹大量吃。",
    tips: "选金黄饱满、无碰伤黑点的。很不耐放，买回尽快吃或冷藏 1–2 天。",
    calories: "约 47 kcal / 100g",
    tags: ["digest", "hydrate"],
  },
  {
    id: "bayberry",
    name: "杨梅",
    en: "Bayberry",
    emoji: "杨",
    seasons: ["summer"],
    months: [5, 6],
    accent: "#a83c4a",
    sugar: "mid",
    common: true,
    brief: "初夏短暂时令，酸甜爆汁，盐水泡一下更安心。",
    benefits: ["含多种有机酸，开胃", "有花青素等多酚", "水分充足", "夏季限定风味"],
    seasonText: "五到六月，产季很短。仙居、慈溪等地名气大。",
    pairing: "淡盐水泡 5–10 分钟再吃；也可浸杨梅酒、做杨梅汁。一次一小碗即可。",
    tips: "选颗粒饱满、颜色均匀、无出水的。极不耐放，当天吃掉最好。",
    calories: "约 28 kcal / 100g",
    tags: ["vitc", "digest", "lowcal"],
  },
  {
    id: "passionfruit",
    name: "百香果",
    en: "Passion Fruit",
    emoji: "🟣",
    seasons: ["summer", "autumn"],
    months: [6, 7, 8, 9, 10],
    accent: "#8a5c9e",
    sugar: "mid",
    common: true,
    brief: "香气炸弹，酸得有个性，通常用来调味。",
    benefits: ["香气浓郁，开胃", "含维生素 C 与膳食纤维籽", "酸度高，适合调味", "热量友好"],
    seasonText: "夏秋为旺季，紫皮皱一点反而更熟更香。",
    pairing: "挖籽拌蜂蜜水、酸奶；或做茶饮、甜点。直接空口吃通常太酸。",
    tips: "选果皮微皱、摇起来有响声的更成熟。室温放置到发皱再吃。",
    calories: "约 97 kcal / 100g",
    tags: ["vitc", "fiber", "digest"],
  },
  {
    id: "mangosteen",
    name: "山竹",
    en: "Mangosteen",
    emoji: "山",
    seasons: ["summer"],
    months: [5, 6, 7, 8],
    accent: "#8a4a6a",
    sugar: "mid",
    common: true,
    brief: "白嫩果肉，清甜微酸，是榴莲的「灭火」搭档。",
    benefits: ["口感清爽，解腻", "含多种植物化学物", "水分适中", "与重口味甜品互补"],
    seasonText: "夏季旺季，东南亚进口为主。",
    pairing: "和榴莲、重甜点一起吃很平衡；冰镇后风味更清。一次 2–4 瓣。",
    tips: "选果壳软硬适中、按压略弹、底部花瓣瓣数与果肉瓣数相关的。壳硬可能不熟。",
    calories: "约 73 kcal / 100g",
    tags: ["digest", "hydrate"],
  },
  {
    id: "fig",
    name: "无花果",
    en: "Fig",
    emoji: "无",
    seasons: ["summer", "autumn"],
    months: [7, 8, 9, 10],
    accent: "#7a5c8a",
    sugar: "high",
    common: true,
    brief: "蜜甜软糯，中东风情，鲜果季很金贵。",
    benefits: ["膳食纤维丰富", "含钾与多种矿物质", "口感绵密，甜而不冲", "晒干后风味浓缩"],
    seasonText: "夏末到初秋最鲜，新疆、威海等地有产区。",
    pairing: "配芝士、火腿；或做沙拉。干无花果糖分浓缩，要减量。",
    tips: "选软中带弹、无破皮渗蜜的。极易坏，买回当天或次日吃完。",
    calories: "约 74 kcal / 100g",
    tags: ["fiber", "energy"],
  },
  {
    id: "mulberry",
    name: "桑葚",
    en: "Mulberry",
    emoji: "桑",
    seasons: ["spring"],
    months: [4, 5],
    accent: "#5c3c6a",
    sugar: "mid",
    common: true,
    brief: "春日紫黑小果，酸甜浓郁，弄脏手指是仪式感。",
    benefits: ["花青素含量突出", "含多种维生素", "抗氧化关注度高", "春季时令感强"],
    seasonText: "晚春，四五月最盛，产季极短。",
    pairing: "拌酸奶、做果酱；或榨汁兑水。清洗要轻，容易烂。",
    tips: "选紫黑饱满、无出水的。不耐放，当天吃；吃前流水轻冲。",
    calories: "约 61 kcal / 100g",
    tags: ["antiox", "vitc", "eye"],
  },
  {
    id: "jujube",
    name: "鲜枣",
    en: "Jujube",
    emoji: "枣",
    seasons: ["autumn"],
    months: [8, 9, 10],
    accent: "#c46a3c",
    sugar: "mid",
    common: true,
    brief: "脆甜如小苹果，维 C 惊人，秋天的零食。",
    benefits: ["维生素 C 含量很高（鲜果）", "口感脆甜，咀嚼感好", "矿物质有一定贡献", "比干枣热量低一些"],
    seasonText: "初秋到中秋，八月十月间最好。",
    pairing: "洗净当零食；或炖汤。干红枣含糖高，和鲜枣不是同一回事。",
    tips: "选硬实无皱、颜色自然的。冷藏可存数天。",
    calories: "约 125 kcal / 100g",
    tags: ["vitc", "energy"],
  },
  {
    id: "papaya",
    name: "木瓜",
    en: "Papaya",
    emoji: "🧡",
    seasons: ["summer", "autumn"],
    months: [5, 6, 7, 8, 9],
    accent: "#e08a3c",
    sugar: "mid",
    common: true,
    brief: "橙红软甜，含天然蛋白酶，炖汤或鲜吃都行。",
    benefits: ["含木瓜蛋白酶，有助蛋白质消化", "富含 β-胡萝卜素", "口感柔软好入口", "水分适中"],
    seasonText: "夏秋旺季，海南、广东等地常见。",
    pairing: "青木瓜可做沙拉；熟木瓜炖雪耳、配牛奶。空腹别一次吃太多。",
    tips: "熟木瓜选橙红微软有清香；青木瓜则硬实绿色。熟后冷藏。",
    calories: "约 43 kcal / 100g",
    tags: ["digest", "eye", "vitc"],
  },
  {
    id: "mandarin",
    name: "橘子",
    en: "Mandarin",
    emoji: "🍊",
    seasons: ["autumn", "winter"],
    months: [10, 11, 12, 1],
    accent: "#e08a3c",
    sugar: "mid",
    common: true,
    brief: "秋冬国民小果，好剥皮，酸甜开胃。",
    benefits: ["维生素 C 不错", "好分享、不用刀", "水分足", "柑橘香气提神"],
    seasonText: "深秋到隆冬，沙糖桔、蜜桔风味最好。",
    pairing: "直接吃；果皮可做陈皮。一次 2–3 个中等橘子即可。",
    tips: "选手感沉、皮有弹性、脐部平的。常温通风，冷藏更久。",
    calories: "约 44 kcal / 100g",
    tags: ["vitc", "hydrate", "lowcal"],
  },
  {
    id: "cherry-tomato",
    name: "圣女果",
    en: "Cherry Tomato",
    emoji: "🍅",
    seasons: ["summer", "autumn"],
    months: [5, 6, 7, 8, 9, 10],
    accent: "#d4574a",
    sugar: "low",
    common: true,
    brief: "常当水果吃的小番茄，酸甜脆爽，热量友好。",
    benefits: ["番茄红素与维 C", "糖分友好", "方便清洗携带", "可咸可甜"],
    seasonText: "夏秋大量上市，温室可全年供应。",
    pairing: "洗净直接吃；或拌沙拉。控糖期可当日常水果。",
    tips: "选硬实、颜色均匀、无裂口的。冷藏存放。",
    calories: "约 25 kcal / 100g",
    tags: ["lowcal", "vitc", "antiox"],
  },
  {
    id: "plum",
    name: "李子",
    en: "Plum",
    emoji: "🟣",
    seasons: ["summer"],
    months: [6, 7, 8],
    accent: "#8a5c9e",
    sugar: "mid",
    common: true,
    brief: "夏日酸甜小果，脆李、软李各有拥趸。",
    benefits: ["含多种有机酸", "开胃", "有一定纤维", "热量中等"],
    seasonText: "盛夏是旺季，六月到八月最好吃。",
    pairing: "酸李可蘸椒盐；软李直接吃。空腹别一次吃太多酸李。",
    tips: "按品种选硬实或微软。冰箱冷藏数日。",
    calories: "约 46 kcal / 100g",
    tags: ["digest", "vitc"],
  },
  {
    id: "prune-plum",
    name: "西梅",
    en: "Prune Plum",
    emoji: "💜",
    seasons: ["summer", "autumn"],
    months: [7, 8, 9],
    accent: "#6b5c8a",
    sugar: "mid",
    common: true,
    brief: "紫皮小果，鲜食酸甜；干果更常见但糖分浓缩。",
    benefits: ["纤维友好", "有助肠道舒适", "含山梨糖醇（干果更明显）", "风味浓缩"],
    seasonText: "鲜果夏末秋初；西梅干全年可得。",
    pairing: "鲜果直接吃；干果 2–3 颗当零食，配水更舒服。",
    tips: "鲜果选略软有弹性的。干果密封阴凉存放。",
    calories: "约 46 kcal / 100g（鲜）",
    tags: ["fiber", "digest"],
  },
  {
    id: "hawthorn",
    name: "山楂",
    en: "Hawthorn",
    emoji: "🔴",
    seasons: ["autumn"],
    months: [9, 10, 11],
    accent: "#c43c3c",
    sugar: "low",
    common: true,
    brief: "酸得很醒神，常用来做糖葫芦和果酱。",
    benefits: ["有机酸丰富，开胃", "传统上与消食联系", "糖分鲜食时不高", "适合做茶饮"],
    seasonText: "秋季成熟，十月前后最盛。",
    pairing: "山楂糕/糖葫芦含糖高，鲜果或干片泡茶更友好。胃酸多者少食。",
    tips: "选红亮饱满无虫眼的。鲜果冷藏；干片密封。",
    calories: "约 102 kcal / 100g（鲜，酸感强）",
    tags: ["digest"],
  },
  {
    id: "coconut",
    name: "椰子",
    en: "Coconut",
    emoji: "🥥",
    seasons: ["summer"],
    months: [5, 6, 7, 8, 9],
    accent: "#c4a06a",
    sugar: "mid",
    common: true,
    brief: "椰水清甜，椰肉香浓，热带解渴担当。",
    benefits: ["椰水含电解质", "椰肉脂肪较高、饱腹", "风味独特", "热带常见"],
    seasonText: "夏季旺季，海南等产地供应稳定。",
    pairing: "椰水直接喝；椰肉做甜品或炒菜。椰肉热量不低。",
    tips: "选沉手、摇起来水声明显的嫩椰。开口后尽快喝完。",
    calories: "约 231 kcal / 100g（椰肉）",
    tags: ["hydrate", "energy"],
  },
  {
    id: "jackfruit",
    name: "菠萝蜜",
    en: "Jackfruit",
    emoji: "🟡",
    seasons: ["summer"],
    months: [5, 6, 7, 8],
    accent: "#e0c04a",
    sugar: "high",
    common: true,
    brief: "热带巨果，果肉香甜软韧，香气很有辨识度。",
    benefits: ["能量较高", "含维生素与矿物质", "风味浓，少量满足", "果核可食"],
    seasonText: "夏季旺季，海南、广东、东南亚常见。",
    pairing: "鲜果直接吃；果核煮食。一次几粒果肉就好。",
    tips: "选香气浓、外皮有弹性、刺尖软的。剥肉冷藏尽快吃。",
    calories: "约 95 kcal / 100g",
    tags: ["energy"],
  },
  {
    id: "guava",
    name: "番石榴",
    en: "Guava",
    emoji: "🟢",
    seasons: ["summer", "autumn"],
    months: [6, 7, 8, 9, 10],
    accent: "#7aa86a",
    sugar: "low",
    common: true,
    brief: "脆甜清香，维 C 很高，芭乐蘸酸梅粉是经典吃法。",
    benefits: ["维生素 C 含量很高", "糖分友好", "纤维丰富", "热量友好"],
    seasonText: "夏秋旺季，南方产区常见。",
    pairing: "直接啃或切片蘸酸梅粉/椒盐。控糖期很友好。",
    tips: "选硬实偏黄、香气清新的。常温放软后甜度上升。",
    calories: "约 41 kcal / 100g",
    tags: ["vitc", "lowcal", "fiber"],
  },
  {
    id: "wax-apple",
    name: "莲雾",
    en: "Wax Apple",
    emoji: "🌸",
    seasons: ["summer"],
    months: [5, 6, 7, 8],
    accent: "#e07a8a",
    sugar: "low",
    common: true,
    brief: "清脆多汁，口感像水做的苹果，很解渴。",
    benefits: ["含水量高", "热量友好", "口感清爽", "夏季解渴"],
    seasonText: "夏季旺季，台湾、海南、东南亚常见。",
    pairing: "洗净直接吃。冰镇后更清脆。",
    tips: "选深红/粉红饱满、底部开张的。冷藏保鲜。",
    calories: "约 32 kcal / 100g",
    tags: ["hydrate", "lowcal"],
  },
  {
    id: "hami-melon",
    name: "哈密瓜",
    en: "Hami Melon",
    emoji: "🍈",
    seasons: ["summer"],
    months: [6, 7, 8],
    accent: "#e0b35c",
    sugar: "mid",
    common: true,
    brief: "新疆甜瓜代表，香气浓，甜得很有存在感。",
    benefits: ["水分充足", "含 β-胡萝卜素", "钾有一定含量", "夏季解暑"],
    seasonText: "盛夏最好，新疆产区风味足。",
    pairing: "冰镇挖球。糖分不低，控糖日减量。",
    tips: "闻香气、按底部微软、网纹清晰。切后冷藏尽快吃。",
    calories: "约 34 kcal / 100g",
    tags: ["hydrate", "eye"],
  },
  {
    id: "muskmelon",
    name: "香瓜",
    en: "Muskmelon",
    emoji: "🍈",
    seasons: ["summer"],
    months: [6, 7, 8],
    accent: "#d4c06a",
    sugar: "mid",
    common: true,
    brief: "瓜摊常客，脆甜清香，价格通常友好。",
    benefits: ["水分多", "夏季解渴", "热量中等", "风味清新"],
    seasonText: "夏季是旺季。",
    pairing: "冷藏切块。挑本地当季往往更甜。",
    tips: "选香气浓、按压略弹的。切开后尽快吃。",
    calories: "约 26–36 kcal / 100g",
    tags: ["hydrate", "lowcal"],
  },
  {
    id: "starfruit",
    name: "杨桃",
    en: "Starfruit",
    emoji: "⭐",
    seasons: ["autumn"],
    months: [8, 9, 10, 11],
    accent: "#e0c84a",
    sugar: "low",
    common: false,
    brief: "切开像星星，酸甜清爽，颜值高。",
    benefits: ["含水量高", "热量友好", "口感清爽", "维 C 有一定含量"],
    seasonText: "夏末秋初常见。",
    pairing: "切片直接吃或做装饰。肾功能异常者遵医嘱。",
    tips: "选黄绿相间、棱角饱满的。冷藏保存。",
    calories: "约 31 kcal / 100g",
    tags: ["hydrate", "lowcal"],
  },
  {
    id: "pepino",
    name: "人参果",
    en: "Pepino",
    emoji: "🟨",
    seasons: ["autumn"],
    months: [8, 9, 10],
    accent: "#e0c86a",
    sugar: "low",
    common: false,
    brief: "口感清淡微甜，像甜黄瓜与香瓜之间。",
    benefits: ["水分足", "热量友好", "口感温和", "含多种微量元素"],
    seasonText: "秋季常见，温室也有供应。",
    pairing: "洗净直接吃。调味淡，适合当清淡加餐。",
    tips: "选黄紫条纹明显、略有弹性的。冷藏保存。",
    calories: "约 25–50 kcal / 100g",
    tags: ["hydrate", "lowcal"],
  },
  {
    id: "rambutan",
    name: "红毛丹",
    en: "Rambutan",
    emoji: "🔴",
    seasons: ["summer"],
    months: [6, 7, 8],
    accent: "#d4574a",
    sugar: "mid",
    common: false,
    brief: "毛茸茸外壳，果肉清甜多汁，像荔枝的好朋友。",
    benefits: ["清甜开胃", "有一定维 C", "水分不错", "夏季热带风味"],
    seasonText: "夏季进口与南方少量上市。",
    pairing: "剥壳直接吃。一次 5–8 颗。",
    tips: "选毛刺挺立、壳红中带黄的。冷藏保鲜。",
    calories: "约 68–82 kcal / 100g",
    tags: ["vitc", "energy"],
  },
  {
    id: "custard-apple",
    name: "释迦",
    en: "Custard Apple",
    emoji: "🟩",
    seasons: ["autumn"],
    months: [8, 9, 10, 11],
    accent: "#7aa86a",
    sugar: "high",
    common: false,
    brief: "又叫番荔枝，果肉绵密香甜，像天然奶油冻。",
    benefits: ["口感细腻", "能量较高", "钾与维 C 不错", "少量很满足"],
    seasonText: "夏末秋初，南方与台湾产区常见。",
    pairing: "对半切开用勺挖。糖分高，一次半个左右。",
    tips: "选略软有弹性、鳞缝展开的。催熟后冷藏。",
    calories: "约 94–100 kcal / 100g",
    tags: ["energy"],
  },
  {
    id: "seabuckthorn",
    name: "沙棘",
    en: "Sea Buckthorn",
    emoji: "🧡",
    seasons: ["autumn"],
    months: [9, 10],
    accent: "#e08a3c",
    sugar: "low",
    common: false,
    brief: "酸得很有个性，常做成原浆与饮料。",
    benefits: ["维 C 与类黄酮受关注", "酸度高，适合调味", "营养浓缩", "传统上用于滋补食果"],
    seasonText: "秋季采收，西北产区有名。",
    pairing: "少直接大口吃；兑水/蜂蜜或做酱更友好。",
    tips: "鲜果难保存，常见冻果与原浆。密封冷藏。",
    calories: "约 80–120 kcal / 100g（品种差异大）",
    tags: ["vitc", "antiox"],
  },
  {
    id: "olive",
    name: "橄榄",
    en: "Olive",
    emoji: "🫒",
    seasons: ["autumn"],
    months: [9, 10, 11],
    accent: "#6a8a5c",
    sugar: "low",
    common: false,
    brief: "青果回甘，南方常鲜食或腌渍。",
    benefits: ["清热利咽的传统印象", "纤维尚可", "热量不高", "回甘有趣"],
    seasonText: "秋季成熟，闽粤桂常见。",
    pairing: "鲜果慢慢嚼；或腌渍、煲汤。一次几颗即可。",
    tips: "选硬实青绿无斑的。腌渍后密封冷藏。",
    calories: "约 49 kcal / 100g",
    tags: ["digest"],
  },
  {
    id: "date-fruit",
    name: "椰枣",
    en: "Date",
    emoji: "🟤",
    seasons: ["autumn"],
    months: [9, 10, 11],
    accent: "#a0704c",
    sugar: "high",
    common: false,
    brief: "蜜甜软糯，能量很高，中东传统干果。",
    benefits: ["快速补能", "钾与纤维不错", "天然甜味", "旅途好携带"],
    seasonText: "秋季干果常见，全年可买。",
    pairing: "1–2 颗配咖啡/牛奶；替代甜点。控糖要严格减量。",
    tips: "选软润不粘手、糖霜自然的。密封阴凉存放。",
    calories: "约 280 kcal / 100g（干）",
    tags: ["energy", "fiber"],
  },
  {
    id: "sapodilla",
    name: "人心果",
    en: "Sapodilla",
    emoji: "🟤",
    seasons: ["summer", "autumn"],
    months: [7, 8, 9],
    accent: "#8a6a4c",
    sugar: "mid",
    common: false,
    brief: "熟透后香甜如梨膏，口感粉糯。",
    benefits: ["口感绵密", "能量中等", "风味独特", "热带水果"],
    seasonText: "夏秋热带产区有售。",
    pairing: "对半挖食。未熟会涩，务必放软。",
    tips: "选略软、果皮褐黄的。室温催熟。",
    calories: "约 83 kcal / 100g",
    tags: ["energy"],
  },
  {
    id: "golden-fruit",
    name: "蛋黄果",
    en: "Lucuma",
    emoji: "🟠",
    seasons: ["autumn"],
    months: [9, 10],
    accent: "#e0b35c",
    sugar: "mid",
    common: false,
    brief: "果肉橙黄粉糯，像蛋黄与红薯之间。",
    benefits: ["能量中等", "风味浓缩", "饱腹感不错", "可做甜品"],
    seasonText: "秋季热带/亚热带有少量。",
    pairing: "勺挖着吃或做泥。一次半个即可。",
    tips: "选微软、香气温和的。冷藏保存。",
    calories: "约 130 kcal / 100g（估）",
    tags: ["energy"],
  },
  {
    id: "jabuticaba",
    name: "嘉宝果",
    en: "Jabuticaba",
    emoji: "🟣",
    seasons: ["summer"],
    months: [5, 6, 7],
    accent: "#5c3c6a",
    sugar: "mid",
    common: false,
    brief: "长在树干上的黑紫小果，酸甜有籽。",
    benefits: ["花青素受关注", "酸甜开胃", "少见珍果", "观赏与食用两用"],
    seasonText: "初夏南方少量上市。",
    pairing: "直接吃。果期短，遇到就尝。",
    tips: "选紫黑饱满的。不耐放，当天吃。",
    calories: "约 45–60 kcal / 100g（估）",
    tags: ["antiox"],
  },
  {
    id: "miracle-fruit",
    name: "神秘果",
    en: "Miracle Fruit",
    emoji: "🔴",
    seasons: ["autumn"],
    months: [9, 10],
    accent: "#c4574a",
    sugar: "low",
    common: false,
    brief: "小红果，含神秘果蛋白，可暂时改味觉。",
    benefits: ["风味体验独特", "热量低", "少食即可", "趣味性强"],
    seasonText: "秋季热带稀有栽培。",
    pairing: "含服后再吃酸食会变甜感。不要过量。",
    tips: "选红熟的。冷藏短期保存。",
    calories: "约 10–20 kcal / 100g（估）",
    tags: ["lowcal"],
  },
  {
    id: "wampee",
    name: "黄皮",
    en: "Wampee",
    emoji: "🟡",
    seasons: ["summer"],
    months: [6, 7],
    accent: "#e0c84a",
    sugar: "mid",
    common: false,
    brief: "岭南夏日小果，酸甜开胃，核多肉少。",
    benefits: ["酸甜开胃", "夏季时令", "有一定维 C", "传统消食印象"],
    seasonText: "六七月两广福建常见。",
    pairing: "直接吃或浸酒/做酱。一次一小串。",
    tips: "选金黄饱满、无出水的。冷藏 1–2 天。",
    calories: "约 35–50 kcal / 100g（估）",
    tags: ["digest", "vitc"],
  },
  {
    id: "roxburgh-rose",
    name: "刺梨",
    en: "Roxburgh Rose",
    emoji: "💛",
    seasons: ["autumn"],
    months: [8, 9],
    accent: "#d4b84a",
    sugar: "low",
    common: false,
    brief: "维 C 炸弹，酸刺很多，常加工成原浆。",
    benefits: ["维生素 C 极高", "抗氧化受关注", "酸度强", "加工品更常见"],
    seasonText: "秋季西南产区采收。",
    pairing: "少直接吃；兑水、做酵素饮品更友好。",
    tips: "鲜果刺多，购买加工品时看配料表。",
    calories: "约 50–70 kcal / 100g（估）",
    tags: ["vitc", "antiox"],
  },
  {
    id: "gooseberry",
    name: "醋栗",
    en: "Gooseberry",
    emoji: "🟢",
    seasons: ["summer"],
    months: [6, 7],
    accent: "#7aa86a",
    sugar: "low",
    common: false,
    brief: "酸脆小浆果，欧美常见，国内小众。",
    benefits: ["维 C 不错", "糖分低", "酸爽开胃", "抗氧化"],
    seasonText: "初夏短暂上市。",
    pairing: "做酱、装饰甜点；也可少食鲜果。",
    tips: "选饱满半透明的。冷藏尽快吃。",
    calories: "约 44 kcal / 100g",
    tags: ["vitc", "lowcal"],
  },
  {
    id: "black-currant",
    name: "黑加仑",
    en: "Black Currant",
    emoji: "🟣",
    seasons: ["summer"],
    months: [7, 8],
    accent: "#5c3c6a",
    sugar: "low",
    common: false,
    brief: "深紫小浆果，酸味强，花青素高。",
    benefits: ["花青素丰富", "维 C 不错", "糖分鲜食偏低", "适合做饮品"],
    seasonText: "夏季冷凉产区。",
    pairing: "果汁、果酱、干果泡茶。酸度高少直接吃。",
    tips: "鲜果冷链保存；加工品看糖添加。",
    calories: "约 63 kcal / 100g",
    tags: ["antiox", "vitc"],
  },
  {
    id: "raspberry",
    name: "覆盆子",
    en: "Raspberry",
    emoji: "🔴",
    seasons: ["summer"],
    months: [6, 7],
    accent: "#c45b7a",
    sugar: "low",
    common: false,
    brief: "精致酸甜小浆果，娇气但很有气质。",
    benefits: ["纤维不错", "糖分友好", "抗氧化", "热量低"],
    seasonText: "初夏为旺季。",
    pairing: "酸奶、燕麦碗搭档。轻洗后立即吃。",
    tips: "选完整不流汁的。极不耐放。",
    calories: "约 52 kcal / 100g",
    tags: ["lowcal", "antiox", "fiber"],
  },
  {
    id: "yacon",
    name: "雪莲果",
    en: "Yacon",
    emoji: "🟡",
    seasons: ["autumn"],
    months: [10, 11],
    accent: "#e0c86a",
    sugar: "low",
    common: false,
    brief: "清脆多汁，像甜梨的地瓜，低甜感。",
    benefits: ["含低聚果糖（益生元）", "热量低", "清脆解渴", "控糖相对友好"],
    seasonText: "深秋冬季根茎果。",
    pairing: "削皮生吃或榨汁。削皮后易氧化，尽快吃。",
    tips: "选硬实无黑斑的。阴凉存放。",
    calories: "约 30–50 kcal / 100g",
    tags: ["lowcal", "hydrate", "digest"],
  },
  {
    id: "monk-fruit",
    name: "罗汉果",
    en: "Monk Fruit",
    emoji: "🟤",
    seasons: ["autumn"],
    months: [9, 10],
    accent: "#8a6a4c",
    sugar: "low",
    common: false,
    brief: "传统润喉果，很少鲜吃，多做茶饮。",
    benefits: ["天然甜味物质（罗汉果苷）", "泡茶清甜", "几乎不提供热量负担", "岭南传统食果"],
    seasonText: "秋季采收干燥果。",
    pairing: "掰开泡水代糖饮。体寒者适量。",
    tips: "选摇起来无响、壳完整的。密封干燥存放。",
    calories: "约 20–40 kcal / 100g（干，估）",
    tags: ["hydrate"],
  },
  {
    id: "buddha-hand",
    name: "佛手",
    en: "Buddha Hand",
    emoji: "🟡",
    seasons: ["autumn"],
    months: [10, 11],
    accent: "#e0c84a",
    sugar: "low",
    common: false,
    brief: "香气冲鼻，少鲜食，多做香料与茶饮。",
    benefits: ["果皮香气精油", "观赏与闻香", "传统理气食材", "热量极低"],
    seasonText: "秋季成熟。",
    pairing: "切片泡茶、炖汤；不建议当水果大口吃。",
    tips: "选指条舒展、香气浓的。常温摆放也香。",
    calories: "约 30 kcal / 100g（估）",
    tags: [],
  },
  {
    id: "citron",
    name: "香橼",
    en: "Citron",
    emoji: "🟡",
    seasons: ["autumn"],
    months: [10, 11],
    accent: "#d4c86a",
    sugar: "low",
    common: false,
    brief: "皮厚肉少，香气浓，多作药用香果。",
    benefits: ["果皮芳香", "传统上与理气相关", "观赏性好", "加工入茶"],
    seasonText: "秋季成熟。",
    pairing: "制蜜饯或泡茶。直接吃酸涩。",
    tips: "选皮黄香浓的。通风存放。",
    calories: "约 30–50 kcal / 100g（估）",
    tags: [],
  },
  {
    id: "crabapple",
    name: "海棠果",
    en: "Crabapple",
    emoji: "🔴",
    seasons: ["autumn"],
    months: [9, 10],
    accent: "#d4574a",
    sugar: "low",
    common: false,
    brief: "小苹果亲戚，酸甜紧实，北方秋日常见。",
    benefits: ["维 C 尚可", "酸甜开胃", "适合做果酱", "时令感强"],
    seasonText: "秋季上市。",
    pairing: "鲜食或煮罐头。酸度高，可蒸软。",
    tips: "选硬实红亮的。冷藏保存。",
    calories: "约 50–70 kcal / 100g（估）",
    tags: ["vitc"],
  },
  {
    id: "snake-fruit",
    name: "蛇皮果",
    en: "Snake Fruit",
    emoji: "🟫",
    seasons: ["summer"],
    months: [5, 6, 7],
    accent: "#a0704c",
    sugar: "mid",
    common: false,
    brief: "鳞片状外皮，果肉脆甜微酸。",
    benefits: ["口感独特", "能量中等", "热带风味", "含矿物质"],
    seasonText: "夏季进口常见。",
    pairing: "剥皮直接吃。选脆爽品种更受欢迎。",
    tips: "选鳞片完整不干枯的。冷藏短存。",
    calories: "约 82 kcal / 100g",
    tags: ["energy"],
  },
  {
    id: "blackberry",
    name: "黑莓",
    en: "Blackberry",
    emoji: "⚫",
    seasons: ["summer"],
    months: [6, 7, 8],
    accent: "#3c2c4a",
    sugar: "low",
    common: false,
    brief: "深紫黑浆果，酸甜浓，抗氧化明星。",
    benefits: ["花青素高", "纤维丰富", "糖分友好", "维 C 不错"],
    seasonText: "夏季为旺季。",
    pairing: "酸奶、沙拉、奶昔。轻洗后立即吃。",
    tips: "选不流汁、颜色深的。极不耐放。",
    calories: "约 43 kcal / 100g",
    tags: ["antiox", "fiber", "lowcal"],
  },
  {
    id: "cranberry",
    name: "蔓越莓",
    en: "Cranberry",
    emoji: "🔴",
    seasons: ["autumn"],
    months: [9, 10],
    accent: "#c43c4c",
    sugar: "low",
    common: false,
    brief: "极酸小果，常见果汁与干果。",
    benefits: ["原花青素受关注", "酸度高", "加工品常见", "少直接鲜食"],
    seasonText: "秋季采收。",
    pairing: "无添加冻干或低糖干果更友好；果汁常含大量糖。",
    tips: "买加工品先看糖。鲜果冷链。",
    calories: "约 46 kcal / 100g（鲜）",
    tags: ["antiox"],
  },
  {
    id: "mume",
    name: "梅子",
    en: "Mume / Green Plum",
    emoji: "🟢",
    seasons: ["spring"],
    months: [4, 5],
    accent: "#7aa86a",
    sugar: "low",
    common: true,
    brief: "青梅很酸，常做梅酒、梅干、脆梅。",
    benefits: ["有机酸丰富", "开胃", "适合加工", "春末时令"],
    seasonText: "春末夏初青梅季。",
    pairing: "少直接大口吃生梅；梅干含盐糖较高要节制。",
    tips: "青梅选硬实翠绿。加工品看配料。",
    calories: "约 30–50 kcal / 100g（鲜，估）",
    tags: ["digest"],
  },
  {
    id: "horned-melon",
    name: "火参果",
    en: "Horned Melon",
    emoji: "🟡",
    seasons: ["summer"],
    months: [7, 8],
    accent: "#e0a83c",
    sugar: "low",
    common: false,
    brief: "外皮带刺，果肉青绿多籽，酸甜清爽。",
    benefits: ["含水量高", "热量低", "口感清新", "颜值高"],
    seasonText: "夏季进口偶见。",
    pairing: "对半挖着吃或兑饮品。",
    tips: "选橙黄饱满的。冷藏保存。",
    calories: "约 25–45 kcal / 100g",
    tags: ["hydrate", "lowcal"],
  },
  {
    id: "haskap",
    name: "蓝靛果",
    en: "Haskap",
    emoji: "🟣",
    seasons: ["summer"],
    months: [6, 7],
    accent: "#5c4c8a",
    sugar: "low",
    common: false,
    brief: "蓝紫小浆果，酸甜有野果气质。",
    benefits: ["花青素高", "维 C 不错", "酸甜平衡", "冷凉产区特产"],
    seasonText: "初夏东北等地有产。",
    pairing: "做酱、泡酒或少食鲜果。",
    tips: "选饱满深色的。冷藏或冷冻。",
    calories: "约 50–70 kcal / 100g（估）",
    tags: ["antiox", "vitc"],
  },
];

// 原产国/地区与国内主产地
const FRUIT_ORIGIN = {
  apple: { origin: "中亚（天山一带）", regions: "新疆、陕西、山东、甘肃、河南" },
  banana: { origin: "东南亚（马来群岛）", regions: "海南、广东、广西、云南、福建" },
  orange: { origin: "中国南方", regions: "江西、湖南、四川、广西、湖北、重庆" },
  strawberry: { origin: "美洲", regions: "辽宁、山东、江苏、安徽、河北、北京" },
  blueberry: { origin: "北美洲", regions: "辽宁、吉林、山东、贵州、云南、江苏" },
  grape: { origin: "西亚—黑海沿岸", regions: "新疆、宁夏、河北、山东、云南、甘肃" },
  watermelon: { origin: "非洲南部", regions: "宁夏、新疆、甘肃、山东、江苏、内蒙古" },
  peach: { origin: "中国", regions: "山东、河北、湖北、陕西、北京、浙江" },
  mango: { origin: "南亚（印度—缅甸）", regions: "海南、广西、云南、四川、广东、台湾" },
  kiwi: { origin: "中国（长江流域）", regions: "陕西、四川、湖北、贵州、湖南、河南" },
  pear: { origin: "中国", regions: "河北、山东、新疆、安徽、辽宁、四川" },
  "citrus-pomelo": { origin: "中国南方", regions: "福建、广西、重庆、广东、浙江、四川" },
  pomegranate: { origin: "伊朗—中亚", regions: "四川、云南、陕西、安徽、河南、新疆" },
  pineapple: { origin: "南美洲", regions: "海南、广东、广西、云南、福建" },
  cherry: { origin: "西亚—小亚细亚", regions: "山东、辽宁、河北、河南、山西、陕西" },
  dragonfruit: { origin: "中美洲", regions: "广西、广东、海南、福建、云南、台湾" },
  durian: { origin: "东南亚", regions: "海南、广东、云南（少量）" },
  lychee: { origin: "中国南方", regions: "广东、广西、福建、海南、四川、云南" },
  longan: { origin: "中国南方", regions: "福建、广东、广西、台湾、云南、四川" },
  persimmon: { origin: "中国", regions: "陕西、河南、河北、山西、广西、湖北" },
  grapefruit: { origin: "加勒比海地区", regions: "四川、重庆、广东、湖南、浙江" },
  avocado: { origin: "中美洲", regions: "云南、四川、广西、广东、海南" },
  lemon: { origin: "南亚—缅甸一带", regions: "四川、云南、广东、重庆、海南" },
  apricot: { origin: "中国西北—中亚", regions: "新疆、甘肃、陕西、河北、河南、山西" },
  loquat: { origin: "中国东南", regions: "浙江、福建、江苏、四川、安徽、湖南" },
  bayberry: { origin: "中国南方", regions: "浙江、江苏、福建、湖南、贵州、广西" },
  passionfruit: { origin: "南美洲", regions: "台湾、福建、广东、广西、云南、海南" },
  mangosteen: { origin: "东南亚", regions: "海南、广东、云南、台湾（少量）" },
  fig: { origin: "西亚—地中海沿岸", regions: "新疆、山东、陕西、河南、福建" },
  mulberry: { origin: "中国", regions: "江苏、浙江、山东、四川、新疆、湖北" },
  jujube: { origin: "中国", regions: "新疆、河北、山东、山西、河南、陕西" },
  papaya: { origin: "中美洲", regions: "海南、广东、广西、云南、福建" },

  mandarin: { origin: "中国", regions: "湖南、湖北、四川、广西、江西、浙江" },
  "cherry-tomato": { origin: "南美洲", regions: "山东、河北、新疆、江苏、云南" },
  plum: { origin: "中国", regions: "新疆、陕西、河南、辽宁、浙江、福建" },
  "prune-plum": { origin: "西亚—里海沿岸", regions: "新疆、河北、山东、陕西（引进栽培）" },
  hawthorn: { origin: "中国", regions: "山东、河北、山西、河南、辽宁" },
  coconut: { origin: "东南亚—太平洋群岛", regions: "海南、广东、云南、广西、台湾" },
  jackfruit: { origin: "南亚—东南亚", regions: "海南、广东、广西、云南" },
  guava: { origin: "美洲热带", regions: "广东、广西、海南、福建、台湾、云南" },
  "wax-apple": { origin: "东南亚—马来群岛", regions: "台湾、海南、广东、福建" },
  "hami-melon": { origin: "中亚—中国新疆", regions: "新疆、甘肃、内蒙古、宁夏" },
  muskmelon: { origin: "中亚—西亚", regions: "新疆、甘肃、山东、河南、河北" },
  starfruit: { origin: "东南亚—马来群岛", regions: "广东、广西、海南、福建、台湾" },
  pepino: { origin: "南美洲", regions: "四川、云南、新疆、甘肃（引进）" },
  rambutan: { origin: "东南亚", regions: "海南、广东、云南（引进少量）" },
  "custard-apple": { origin: "美洲热带", regions: "台湾、海南、广东、福建、云南" },
  seabuckthorn: { origin: "欧亚温带", regions: "山西、内蒙古、新疆、甘肃、青海、河北" },
  olive: { origin: "地中海沿岸—西亚", regions: "福建、广东、广西、四川、云南、台湾" },
  "date-fruit": { origin: "西亚—北非", regions: "新疆（引种）、进口为主" },
  sapodilla: { origin: "中美洲", regions: "海南、广东、台湾（引进）" },
  "golden-fruit": { origin: "南美洲", regions: "海南、云南、台湾（引进）" },
  jabuticaba: { origin: "南美洲", regions: "广东、广西、台湾（引进）" },
  "miracle-fruit": { origin: "西非", regions: "广东、海南、云南（引进）" },
  wampee: { origin: "中国南方", regions: "广东、广西、海南、福建、台湾、云南" },
  "roxburgh-rose": { origin: "中国西南", regions: "贵州、四川、云南、湖南、湖北" },
  gooseberry: { origin: "欧洲—西亚", regions: "黑龙江、吉林、新疆、内蒙古（冷凉区）" },
  "black-currant": { origin: "欧洲—北亚", regions: "黑龙江、吉林、内蒙古、新疆、河北" },
  raspberry: { origin: "北半球温带", regions: "东北、西北、西南（引进栽培）" },
  yacon: { origin: "南美洲", regions: "云南、福建、湖南、四川、新疆" },
  "monk-fruit": { origin: "中国南方", regions: "广西、广东、江西、湖南、贵州" },
  "buddha-hand": { origin: "中国—印度", regions: "广东、广西、福建、云南、四川" },
  citron: { origin: "印度—中国南方", regions: "云南、广西、广东、福建、四川" },
  crabapple: { origin: "中国—东亚", regions: "东北、华北、西北、西南" },
  "snake-fruit": { origin: "东南亚", regions: "进口为主；台湾、海南有试种" },
  blackberry: { origin: "欧洲—北美", regions: "贵州、云南、四川、浙江、江苏（引进）" },
  cranberry: { origin: "北美洲", regions: "东北、新疆、进口冻果常见" },
  mume: { origin: "中国南方", regions: "福建、广东、广西、浙江、四川、云南" },
  "horned-melon": { origin: "非洲", regions: "新疆、云南、进口偶见" },
  haskap: { origin: "东北亚—北美", regions: "黑龙江、吉林、辽宁、内蒙古、新疆" },

};

function isForeignOrigin(origin) {
  return !String(origin || "").startsWith("中国");
}

function originBadgeHtml(id) {
  const o = FRUIT_ORIGIN[id];
  if (!o || !isForeignOrigin(o.origin)) return "";
  return '<span class="tag origin-tag">原产 ' + o.origin + "</span>";
}

const SUGAR_LABEL = {
  low: "糖分偏低",
  mid: "糖分中等",
  high: "糖分偏高",
};

// ---------- state ----------
const FAV_KEY = "guoxu-favorites";
let favorites = loadFavorites();
let selectedMonth = new Date().getMonth() + 1;
let activeSeason = seasonFromMonth(selectedMonth);
let activeBenefit = null;
let activeFruitId = null;

function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAV_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function saveFavorites() {
  try {
    localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
  } catch {
    /* ignore */
  }
}

function isFavorite(id) {
  return favorites.includes(id);
}

function toggleFavorite(id) {
  if (isFavorite(id)) favorites = favorites.filter((x) => x !== id);
  else favorites = [...favorites, id];
  saveFavorites();
  refreshFavoritesUI();
}

function refreshFavoritesUI() {
  setTimeout(() => { if (typeof renderDataStrip === 'function') renderDataStrip(); }, 0);
  const countEl = document.getElementById("fav-count");
  if (countEl) countEl.textContent = String(favorites.length);

  document.querySelectorAll(".card-fav").forEach((btn) => {
    const on = isFavorite(btn.dataset.id);
    btn.classList.toggle("is-on", on);
    btn.textContent = on ? "♥" : "♡";
    btn.setAttribute("aria-label", on ? "取消收藏" : "收藏");
  });

  const modalFav = document.getElementById("modal-fav");
  if (modalFav && activeFruitId) {
    const on = isFavorite(activeFruitId);
    modalFav.classList.toggle("is-on", on);
    modalFav.textContent = on ? "♥" : "♡";
    modalFav.setAttribute("aria-label", on ? "取消收藏" : "收藏");
  }

  renderFavoritesPanel();
}

// ---------- utils ----------
function seasonLabel(id) {
  return SEASONS[id]?.name || id;
}

function monthName(m) {
  return `${m}月`;
}

function seasonFromMonth(m) {
  if (m >= 3 && m <= 5) return "spring";
  if (m >= 6 && m <= 8) return "summer";
  if (m >= 9 && m <= 11) return "autumn";
  return "winter";
}

function fruitInMonth(fruit, month) {
  return fruit.months.includes(month);
}


function fruitImgTag(fruit) {
  return (
    "<img class=\"fruit-img\" src=\"assets/fruits/" +
    fruit.id +
    ".png\" alt=\"" +
    fruit.name +
    "\" loading=\"lazy\" width=\"72\" height=\"72\" />"
  );
}

function fruitById(id) {
  return FRUITS.find((f) => f.id === id);
}

function setSeasonTheme(season) {
  document.body.dataset.season = season;
}

function createFruitCard(fruit, { highlight = false, compact = false } = {}) {
  const el = document.createElement("article");
  el.className = "fruit-card" + (highlight ? " is-highlight" : "");
  el.tabIndex = 0;
  el.dataset.id = fruit.id;
  el.style.setProperty("--card-accent", fruit.accent || "var(--accent)");
  el.innerHTML = `
    <button class="card-fav" type="button" data-id="${fruit.id}" aria-label="收藏">${isFavorite(fruit.id) ? "♥" : "♡"}</button>
    <div class="fruit-card-top">
      <div class="fruit-emoji" aria-hidden="true">${fruitImgTag(fruit)}</div>
      <div>
        <h3 class="fruit-name">${fruit.name}</h3>
        <p class="fruit-en">${fruit.en}</p>
      </div>
    </div>
    <p class="fruit-brief">${fruit.brief}</p>
    <div class="fruit-meta">
      <span class="tag season">${fruit.seasons.map(seasonLabel).join(" · ")}</span>
      ${compact ? "" : `<span class="tag cal">${fruit.calories}</span>`}
      <span class="tag sugar">${SUGAR_LABEL[fruit.sugar] || ""}</span>
      ${originBadgeHtml(fruit.id)}
    </div>
  `;

  el.addEventListener("click", (e) => {
    if (e.target.closest(".card-fav")) return;
    openModal(fruit.id);
  });
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(fruit.id);
    }
  });

  const favBtn = el.querySelector(".card-fav");
  favBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavorite(fruit.id);
  });

  return el;
}

// ---------- modal ----------
const modal = document.getElementById("fruit-modal");

function openModal(id) {
  const fruit = fruitById(id);
  if (!fruit) return;
  activeFruitId = id;

  document.getElementById("modal-emoji").innerHTML = fruitImgTag(fruit);
  document.getElementById("modal-title").textContent = fruit.name;
  document.getElementById("modal-en").textContent = fruit.en;
  document.getElementById("modal-seasons").textContent =
    fruit.seasons.map(seasonLabel).join(" · ") +
    " · 旺季 " +
    fruit.months.map((m) => m + "月").join("、");
  document.getElementById("modal-benefits").innerHTML = fruit.benefits
    .map((b) => `<li>${b}</li>`)
    .join("");
  document.getElementById("modal-season-text").textContent = fruit.seasonText;
  document.getElementById("modal-pairing").textContent = fruit.pairing || "洗净直接吃，或按自己的口味搭配。";
  document.getElementById("modal-tips").textContent = fruit.tips;
  document.getElementById("modal-meta").innerHTML = `
    <span class="meta-pill">热量 ${fruit.calories}</span>
    <span class="meta-pill">${SUGAR_LABEL[fruit.sugar] || ""}</span>
    <span class="meta-pill">应季：${fruit.seasons.map(seasonLabel).join(" / ")}</span>
  `;
  document.getElementById("modal-tags").innerHTML = fruit.tags
    .map((t) => {
      const b = BENEFITS.find((x) => x.id === t);
      return b
        ? `<span class="tag"><span class="chip-icon" style="background:${b.icon}"></span>${b.label}</span>`
        : "";
    })
    .join("");

  refreshFavoritesUI();
  modal.hidden = false;
  document.body.style.overflow = "hidden";

  const closeBtn = modal.querySelector(".modal-close");
  if (closeBtn) closeBtn.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  activeFruitId = null;
}

modal.addEventListener("click", (e) => {
  if (e.target.matches("[data-close-modal]")) closeModal();
});

document.getElementById("modal-fav").addEventListener("click", () => {
  if (activeFruitId) toggleFavorite(activeFruitId);
});

document.addEventListener("keydown", (e) => {
  if (modal.hidden) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "Tab") {
    const focusables = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

// ---------- today / month ----------
const monthPicker = document.getElementById("month-picker");
const todayGrid = document.getElementById("today-grid");
const coreMonth = document.getElementById("core-month");

// ---------- orbit (dynamic hero wheel) ----------
function orbitAccentFor(season) {
  return (
    {
      spring: "#7cb86a",
      summer: "#e85a3c",
      autumn: "#d4842e",
      winter: "#4a7c9b",
    }[season] || "var(--accent)"
  );
}

function renderOrbit() {
  const fruitsEl = document.getElementById("orbit-fruits");
  const coreMonthEl = document.getElementById("core-month");
  const coreLabelEl = document.getElementById("core-label");
  if (!fruitsEl || !coreMonthEl) return;

  const season = seasonFromMonth(selectedMonth);
  const seasonInfo = SEASONS[season];
  coreMonthEl.textContent = monthName(selectedMonth);
  if (coreLabelEl) {
    coreLabelEl.textContent = `${seasonInfo?.name || ""} · 本月应季`;
  }

  // In-season fruits, prefer mid-peak (more months overlap), take up to 6
  const inSeason = FRUITS.filter((f) => fruitInMonth(f, selectedMonth));
  const scored = inSeason
    .map((f) => {
      // months closer to selectedMonth peak first
      let score = f.months.includes(selectedMonth) ? 0 : 1;
      const center = selectedMonth;
      const dist = Math.min(...f.months.map((m) => Math.abs(((m - center + 18) % 12) - 6)));
      score += dist * 0.01;
      return { f, score };
    })
    .sort((a, b) => a.score - b.score)
    .map((x) => x.f);

  const picks = scored.slice(0, 6);
  // If not enough, pad with seasonal peers
  if (picks.length < 5) {
    const extras = FRUITS.filter((f) => f.seasons.includes(season) && !picks.some((p) => p.id === f.id));
    picks.push(...extras.slice(0, 5 - picks.length));
  }

  const n = picks.length || 1;
  const radius = 42; // % from center
  const startAngle = -Math.PI / 2; // top
  fruitsEl.innerHTML = "";

  picks.forEach((fruit, i) => {
    const angle = startAngle + (i / n) * Math.PI * 2;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "fruit-orb is-enter";
    btn.style.left = `calc(${x}% - 27px)`;
    btn.style.top = `calc(${y}% - 27px)`;
    btn.style.background = fruit.accent || orbitAccentFor(season);
    btn.style.animationDelay = `${i * 0.07}s, ${0.55 + i * 0.07}s`;
    btn.title = `${fruit.name} · 本月应季`;
    btn.setAttribute("aria-label", `查看${fruit.name}`);
    btn.innerHTML = fruitImgTag(fruit);
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(fruit.id);
    });
    fruitsEl.appendChild(btn);
  });

  // subtle season tint on core
  const core = document.querySelector(".orbit-core");
  if (core) {
    core.style.background = `radial-gradient(circle at 30% 28%, #fff, transparent 45%), linear-gradient(160deg, #fff8ee, color-mix(in srgb, ${orbitAccentFor(season)} 18%, #f0d9c4))`;
    core.style.transition = "background 0.5s ease";
  }
}

function refreshAfterMonthChange() {
  renderMonthPicker();
  renderToday();
  renderYearMap();
  renderDaily();
  renderOrbit();
  syncSeasonTab(seasonFromMonth(selectedMonth));
  if (typeof renderCompare === "function") renderCompare();
  const basket = document.getElementById("basket-panel");
  if (basket && !basket.hidden) generateBasket();
  const peakEl = document.getElementById("stat-peak");
  if (peakEl) {
    peakEl.textContent = String(FRUITS.filter((f) => fruitInMonth(f, selectedMonth)).length);
  }
}

function renderMonthPicker() {
  monthPicker.innerHTML = "";
  for (let m = 1; m <= 12; m++) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "month-btn" + (m === selectedMonth ? " is-active" : "");
    btn.textContent = monthName(m);
    btn.addEventListener("click", () => {
      selectedMonth = m;
      setSeasonTheme(seasonFromMonth(m));
      refreshAfterMonthChange();
    });
    monthPicker.appendChild(btn);
  }
}

function renderToday() {
  coreMonth.textContent = monthName(selectedMonth);
  const list = FRUITS.filter((f) => fruitInMonth(f, selectedMonth)).slice(0, 8);
  todayGrid.innerHTML = "";
  if (!list.length) {
    todayGrid.innerHTML = `<p class="empty-state">这个月暂时没有推荐，换个季节看看。</p>`;
    return;
  }
  list.forEach((f) => todayGrid.appendChild(createFruitCard(f, { highlight: true, compact: true })));
}

function syncSeasonTab(season) {
  activeSeason = season;
  document.querySelectorAll(".season-tab").forEach((t) => {
    const on = t.dataset.season === season;
    t.classList.toggle("is-active", on);
    t.setAttribute("aria-selected", on ? "true" : "false");
  });
  renderSeasonIntro();
}

// ---------- year map ----------
const yearGrid = document.getElementById("year-grid");

function renderYearMap() {
  yearGrid.innerHTML = "";
  const counts = [];
  for (let m = 1; m <= 12; m++) {
    counts.push(FRUITS.filter((f) => fruitInMonth(f, m)).length);
  }
  const max = Math.max(...counts, 1);

  for (let m = 1; m <= 12; m++) {
    const fruits = FRUITS.filter((f) => fruitInMonth(f, m));
    const top = fruits.slice(0, 2).map((f) => f.name).join(" ");
    const density = counts[m - 1] / max;
    const season = seasonFromMonth(m);

    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "year-cell" + (m === selectedMonth ? " is-active" : "");
    cell.style.background = `color-mix(in srgb, var(--${season}) ${Math.round(12 + density * 38)}%, var(--surface-2))`;
    cell.innerHTML = `
      <span class="ym">${m}月</span>
      <span class="yd">${fruits.length}</span>
      <span class="yf">${top || "—"}${fruits.length > 2 ? "…" : ""}</span>
    `;
    cell.addEventListener("click", () => {
      selectedMonth = m;
      setSeasonTheme(seasonFromMonth(m));
      refreshAfterMonthChange();
      document.getElementById("today").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    yearGrid.appendChild(cell);
  }
}

// ---------- seasons ----------
function renderSeasonIntro() {
  const s = SEASONS[activeSeason];
  document.getElementById("season-intro").innerHTML = `
    <h3>${s.title}</h3>
    <p>${s.text}</p>
    <div class="season-quote">${s.quote}</div>
  `;
  const chips = FRUITS.filter((f) => f.seasons.includes(activeSeason));
  const wrap = document.getElementById("season-fruits");
  wrap.innerHTML = "";
  chips.forEach((f) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "fruit-chip";
    chip.innerHTML = `<span class="chip-emoji">${f.emoji}</span><span>${f.name}</span>`;
    chip.addEventListener("click", () => openModal(f.id));
    wrap.appendChild(chip);
  });
}

document.querySelectorAll(".season-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const season = tab.dataset.season;
    // Move selected month into this season so orbit / today grid follow time
    const monthMap = { spring: 4, summer: 7, autumn: 10, winter: 1 };
    selectedMonth = monthMap[season] ?? selectedMonth;
    setSeasonTheme(season);
    refreshAfterMonthChange();
  });
});

// ---------- benefits filter ----------
const benefitFilter = document.getElementById("benefit-filter");
const benefitGrid = document.getElementById("benefit-grid");
const benefitResultText = document.getElementById("benefit-result-text");

function renderBenefitFilter() {
  benefitFilter.innerHTML = "";
  BENEFITS.forEach((b) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "benefit-chip" + (activeBenefit === b.id ? " is-active" : "");
    btn.innerHTML = `<span class="chip-icon" style="background:${b.icon}"></span>${b.label}`;
    btn.addEventListener("click", () => {
      activeBenefit = activeBenefit === b.id ? null : b.id;
      renderBenefitFilter();
      renderBenefitGrid();
    });
    benefitFilter.appendChild(btn);
  });
}

function renderBenefitGrid() {
  const list = activeBenefit
    ? FRUITS.filter((f) => f.tags.includes(activeBenefit))
    : FRUITS.slice(0, 6);

  benefitGrid.innerHTML = "";
  list.forEach((f) => benefitGrid.appendChild(createFruitCard(f, { compact: true })));

  if (activeBenefit) {
    const label = BENEFITS.find((b) => b.id === activeBenefit)?.label || "";
    benefitResultText.textContent = `「${label}」相关水果 · 共 ${list.length} 种`;
  } else {
    benefitResultText.textContent = "未筛选时展示部分热门水果。点选上方标签可缩小范围。";
  }
}

document.getElementById("btn-clear-benefit").addEventListener("click", () => {
  activeBenefit = null;
  renderBenefitFilter();
  renderBenefitGrid();
});

// ---------- atlas / search / favorites ----------
const atlasGrid = document.getElementById("atlas-grid");
const atlasEmpty = document.getElementById("atlas-empty");
const searchInput = document.getElementById("search-input");

let atlasScope = "common";

function renderAtlas(query = "") {
  const q = query.trim().toLowerCase();
  const list = !q
    ? FRUITS
    : FRUITS.filter((f) => {
        const hay = [
          f.name,
          f.en,
          f.brief,
          f.seasonText,
          f.tips,
          f.pairing,
          SUGAR_LABEL[f.sugar] || "",
          ...f.benefits,
          ...f.tags.map((t) => BENEFITS.find((b) => b.id === t)?.label || ""),
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      });

  atlasGrid.innerHTML = "";
  list.forEach((f) => atlasGrid.appendChild(createFruitCard(f)));
  atlasEmpty.hidden = list.length > 0;
}

function renderAtlasScope() {
  const bar = document.getElementById("atlas-scope");
  if (!bar) return;
  bar.querySelectorAll("button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.scope === atlasScope);
    btn.addEventListener("click", () => {
      atlasScope = btn.dataset.scope;
      renderAtlasScope();
      renderAtlas(searchInput?.value || document.getElementById("search-input")?.value || "");
    });
  });
}

searchInput.addEventListener("input", (e) => renderAtlas(e.target.value));
renderAtlasScope();

function renderFavoritesPanel() {
  const panel = document.getElementById("favorites-panel");
  const grid = document.getElementById("favorites-grid");
  if (!panel || !grid) return;

  if (!favorites.length) {
    panel.hidden = true;
    return;
  }
  panel.hidden = false;
  grid.innerHTML = "";
  favorites
    .map((id) => fruitById(id))
    .filter(Boolean)
    .forEach((f) => grid.appendChild(createFruitCard(f, { compact: true })));
}

document.getElementById("btn-favorites").addEventListener("click", () => {
  const panel = document.getElementById("favorites-panel");
  if (!favorites.length) {
    panel.hidden = false;
    panel.querySelector("h3").textContent = "还没有收藏";
    document.getElementById("favorites-grid").innerHTML =
      `<p class="empty-state">在图鉴卡片上点「♡」即可收藏喜欢的水果。</p>`;
    document.getElementById("atlas").scrollIntoView({ behavior: "smooth" });
    return;
  }
  panel.hidden = false;
  panel.querySelector("h3").textContent = "我的收藏";
  renderFavoritesPanel();
  document.getElementById("atlas").scrollIntoView({ behavior: "smooth" });
});

// ---------- daily fruit ----------
function renderDaily() {
  const dayIndex = Math.floor(Date.now() / 86400000) % FRUITS.length;
  // Prefer in-season fruit for the current month when possible
  const inSeason = FRUITS.filter((f) => fruitInMonth(f, selectedMonth));
  const pool = inSeason.length ? inSeason : FRUITS;
  const fruit = pool[dayIndex % pool.length];

  document.getElementById("daily-emoji").innerHTML = fruitImgTag(fruit);
  document.getElementById("daily-name").textContent = fruit.name;
  document.getElementById("daily-brief").textContent = fruit.brief;
  document.getElementById("btn-daily").onclick = () => openModal(fruit.id);
}

// ---------- sugar zone ----------
const sugarFilter = document.getElementById("sugar-filter");
const sugarGrid = document.getElementById("sugar-grid");
const sugarResult = document.getElementById("sugar-result");
let activeSugar = "all";

const SUGAR_OPTIONS = [
  { id: "all", label: "全部" },
  { id: "low", label: "糖分偏低" },
  { id: "mid", label: "糖分中等" },
  { id: "high", label: "糖分偏高（注意份量）" },
];

function renderSugarFilter() {
  sugarFilter.innerHTML = "";
  SUGAR_OPTIONS.forEach((opt) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "sugar-chip" + (activeSugar === opt.id ? " is-active" : "");
    btn.textContent = opt.label;
    btn.addEventListener("click", () => {
      activeSugar = opt.id;
      renderSugarFilter();
      renderSugarGrid();
    });
    sugarFilter.appendChild(btn);
  });
}

function renderSugarGrid() {
  const list =
    activeSugar === "all"
      ? FRUITS.slice().sort((a, b) => {
          const rank = { low: 0, mid: 1, high: 2 };
          return (rank[a.sugar] ?? 9) - (rank[b.sugar] ?? 9);
        })
      : FRUITS.filter((f) => f.sugar === activeSugar);

  sugarGrid.innerHTML = "";
  list.forEach((f) => sugarGrid.appendChild(createFruitCard(f, { compact: true })));

  const counts = {
    low: FRUITS.filter((f) => f.sugar === "low").length,
    mid: FRUITS.filter((f) => f.sugar === "mid").length,
    high: FRUITS.filter((f) => f.sugar === "high").length,
  };

  if (activeSugar === "all") {
    sugarResult.textContent = `共 ${list.length} 种 · 偏低 ${counts.low} · 中等 ${counts.mid} · 偏高 ${counts.high}。优先从「偏低」挑起。`;
  } else {
    const label = SUGAR_OPTIONS.find((x) => x.id === activeSugar)?.label || "";
    sugarResult.textContent = `「${label}」共 ${list.length} 种。偏高档并非不能吃，而是要更注意份量。`;
  }
}

// ---------- compare ----------
const compareA = document.getElementById("compare-a");
const compareB = document.getElementById("compare-b");
const compareBody = document.getElementById("compare-body");
const compareVerdict = document.getElementById("compare-verdict");

function fillCompareSelects() {
  const sorted = FRUITS.slice().sort((a, b) => a.name.localeCompare(b.name, "zh"));
  [compareA, compareB].forEach((sel) => {
    sel.innerHTML = sorted
      .map((f) => `<option value="${f.id}">${f.name}</option>`)
      .join("");
  });
  compareA.value = "orange";
  compareB.value = "blueberry";
  if (!fruitById(compareA.value)) compareA.value = sorted[0].id;
  if (!fruitById(compareB.value) || compareB.value === compareA.value) {
    compareB.value = sorted.find((f) => f.id !== compareA.value)?.id || sorted[0].id;
  }
}

function sugarPillHtml(sugar) {
  const cls = sugar === "low" ? "pill-low" : sugar === "mid" ? "pill-mid" : "pill-high";
  return `<span class="tag ${cls}">${SUGAR_LABEL[sugar] || sugar}</span>`;
}

function seasonTextShort(fruit) {
  return fruit.seasons.map(seasonLabel).join(" / ") + `（旺季 ${fruit.months.join("、")}月）`;
}

function benefitTagsHtml(fruit) {
  return fruit.tags
    .map((t) => {
      const b = BENEFITS.find((x) => x.id === t);
      return b ? `<span class="tag"><span class="chip-icon" style="background:${b.icon}"></span>${b.label}</span>` : "";
    })
    .join(" ");
}

function bestUseLine(fruit) {
  if (fruit.sugar === "low") return "控糖/减脂期更友好，可当日常主力水果。";
  if (fruit.sugar === "high") return "风味与补能更强，注意单次份量，控糖时减半。";
  return "平衡之选，正常份量即可；控糖时控制在 100–150 克更稳妥。";
}

function renderCompare() {
  let a = fruitById(compareA.value);
  let b = fruitById(compareB.value);
  if (!a || !b) return;
  if (a.id === b.id) {
    b = FRUITS.find((f) => f.id !== a.id) || b;
    compareB.value = b.id;
  }

  document.getElementById("compare-a-title").innerHTML = fruitImgTag(a) + a.name;
  document.getElementById("compare-b-title").innerHTML = fruitImgTag(b) + b.name;

  const rows = [
    ["英文", a.en, b.en],
    ["糖分", sugarPillHtml(a.sugar), sugarPillHtml(b.sugar)],
    ["热量", a.calories, b.calories],
    ["最佳季节", seasonTextShort(a), seasonTextShort(b)],
    ["主要功效", benefitTagsHtml(a), benefitTagsHtml(b)],
    ["怎么吃", a.pairing, b.pairing],
    ["适用建议", bestUseLine(a), bestUseLine(b)],
  ];

  compareBody.innerHTML = rows
    .map(
      ([k, va, vb]) => `
      <tr>
        <td>${k}</td>
        <td>${va}</td>
        <td>${vb}</td>
      </tr>`
    )
    .join("");

  const rank = { low: 0, mid: 1, high: 2 };
  const sugarWinner =
    rank[a.sugar] === rank[b.sugar]
      ? null
      : rank[a.sugar] < rank[b.sugar]
        ? a
        : b;

  let verdict = "";
  if (sugarWinner) {
    verdict += `从糖分看，<strong>${sugarWinner.name}</strong>更友好（${SUGAR_LABEL[sugarWinner.sugar]}）。`;
  } else {
    verdict += `两者的糖分档位相近，都是<strong>${SUGAR_LABEL[a.sugar]}</strong>级别。`;
  }

  const seasonNow = seasonFromMonth(selectedMonth);
  const aIn = a.seasons.includes(seasonNow);
  const bIn = b.seasons.includes(seasonNow);
  if (aIn && bIn) verdict += `现在（${monthName(selectedMonth)}）两只都在应季窗口，怎么选都新鲜。`;
  else if (aIn) verdict += `现在（${monthName(selectedMonth)}）更推荐<strong>${a.name}</strong>，正值当季。`;
  else if (bIn) verdict += `现在（${monthName(selectedMonth)}）更推荐<strong>${b.name}</strong>，正值当季。`;
  else verdict += `现在（${monthName(selectedMonth)}）两只都不在绝对高峰，可按口味与糖分偏好决定。`;

  if (rank[a.sugar] >= 1 && rank[b.sugar] >= 1) {
    verdict += `若需要控糖，两只都要注意单次份量，或混搭「糖分偏低」的水果。`;
  }

  compareVerdict.innerHTML = verdict;
}

compareA.addEventListener("change", renderCompare);
compareB.addEventListener("change", renderCompare);

document.getElementById("compare-swap").addEventListener("click", () => {
  const tmp = compareA.value;
  compareA.value = compareB.value;
  compareB.value = tmp;
  renderCompare();
});

document.getElementById("compare-random").addEventListener("click", () => {
  const ids = FRUITS.map((f) => f.id);
  const i = Math.floor(Math.random() * ids.length);
  let j = Math.floor(Math.random() * ids.length);
  while (j === i) j = Math.floor(Math.random() * ids.length);
  compareA.value = ids[i];
  compareB.value = ids[j];
  renderCompare();
});

// ---------- font scale ----------
const FONT_KEY = "guoxu-font";
function applyFont(size) {
  const val = size === "lg" || size === "xl" ? size : "md";
  document.documentElement.dataset.font = val;
  document.querySelectorAll(".font-switch button").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.font === val);
  });
  try {
    localStorage.setItem(FONT_KEY, val);
  } catch {
    /* ignore */
  }
}

document.querySelectorAll(".font-switch button").forEach((btn) => {
  btn.addEventListener("click", () => applyFont(btn.dataset.font));
});

try {
  const savedFont = localStorage.getItem(FONT_KEY);
  if (savedFont) applyFont(savedFont);
} catch {
  /* ignore */
}

// ---------- elder zone ----------
const ELDER_SCENARIOS = [
  { id: "all", label: "全部", color: "#4a7c9b" },
  { id: "soft", label: "牙口友好", color: "#7aa86a" },
  { id: "digest", label: "好消化", color: "#e08a3c" },
  { id: "sugar", label: "控糖注意", color: "#c4783a" },
  { id: "eye", label: "护眼", color: "#b0557a" },
  { id: "potassium", label: "补钾", color: "#6b7fa8" },
  { id: "hydrate", label: "补水润燥", color: "#5f9e78" },
  { id: "medsafe", label: "服药也稳", color: "#d4842e" },
];

const ELDER_TAGS = {
  apple: ["digest", "hydrate", "medsafe", "eye"],
  banana: ["soft", "potassium", "digest"],
  orange: ["hydrate", "medsafe", "eye"],
  strawberry: ["soft", "medsafe", "eye", "sugar"],
  blueberry: ["soft", "eye", "medsafe", "sugar"],
  grape: ["soft", "potassium", "hydrate"],
  watermelon: ["soft", "hydrate", "sugar"],
  peach: ["soft", "hydrate", "digest"],
  mango: ["soft", "eye", "sugar"],
  kiwi: ["soft", "digest", "eye", "medsafe"],
  pear: ["soft", "hydrate", "digest", "medsafe"],
  "citrus-pomelo": ["hydrate", "medsafe", "sugar"],
  pomegranate: ["eye", "medsafe"],
  pineapple: ["digest"],
  cherry: ["soft", "eye", "medsafe"],
  dragonfruit: ["soft", "digest", "hydrate"],
  durian: ["sugar", "soft"],
  lychee: ["sugar", "soft"],
  longan: ["sugar"],
  persimmon: ["eye", "sugar", "digest"],
  grapefruit: ["sugar", "hydrate"], // med caution
  avocado: ["soft", "potassium", "digest"],
  lemon: ["hydrate"],
  apricot: ["soft", "eye"],
  loquat: ["soft", "digest", "hydrate"],
  bayberry: ["digest"],
  passionfruit: ["digest"],
  mangosteen: ["soft", "digest"],
  fig: ["digest", "soft"],
  mulberry: ["eye"],
  jujube: ["potassium"],
  papaya: ["soft", "digest", "eye"],
};

const ELDER_TIPS = {
  soft: "口感软或好入口，牙口负担小。",
  digest: "对胃肠相对友好，适合少量开始。",
  sugar: "糖分相对高或需控量，三高长辈减半吃。",
  eye: "含有益眼睛的营养素（如维 A 原、花青素）。",
  potassium: "钾较丰富，对日常电解质有益（肾病者遵医嘱）。",
  hydrate: "水分足，帮助润燥补水。",
  medsafe: "一般与常见慢病用药冲突较少；仍建议遵医嘱。",
};

// ---------- younger zone ----------
const YOUNGER_SCENARIOS = [
  { id: "all", label: "全部", color: "#e85a3c" },
  { id: "office", label: "办公补给", color: "#4a7c9b" },
  { id: "gym", label: "健身塑形", color: "#7aa86a" },
  { id: "cut", label: "控卡低糖", color: "#5f9e78" },
  { id: "glow", label: "气色抗氧化", color: "#b0557a" },
  { id: "night", label: "熬夜平替", color: "#6b7fa8" },
  { id: "share", label: "好分享", color: "#d4842e" },
];

const YOUNGER_TAGS = {
  apple: ["office", "cut", "share"],
  banana: ["gym", "night", "office"],
  orange: ["office", "glow", "share"],
  strawberry: ["cut", "glow", "night"],
  blueberry: ["cut", "glow", "office", "night"],
  grape: ["gym", "share", "glow"],
  watermelon: ["night", "share", "cut"],
  peach: ["cut", "glow"],
  mango: ["glow", "gym"],
  kiwi: ["glow", "cut", "office"],
  pear: ["cut", "office", "share"],
  "citrus-pomelo": ["cut", "share", "office"],
  pomegranate: ["glow", "office"],
  pineapple: ["share", "gym"],
  cherry: ["glow", "night", "office"],
  dragonfruit: ["cut", "share", "office"],
  durian: ["gym", "share"],
  lychee: ["night", "share"],
  longan: ["night"],
  persimmon: ["office", "glow"],
  grapefruit: ["cut", "office", "glow"],
  avocado: ["gym", "office"],
  lemon: ["cut", "office"],
  apricot: ["cut", "glow"],
  loquat: ["glow", "night"],
  bayberry: ["cut", "night"],
  passionfruit: ["night", "office"],
  mangosteen: ["share", "cut"],
  fig: ["night", "share"],
  mulberry: ["glow", "night"],
  jujube: ["office", "glow"],
  papaya: ["gym", "glow", "cut"],
};

const YOUNGER_TIPS = {
  office: "工位耐放、好开口，比甜品饮料更稳。",
  gym: "适合训练前后补糖原或搭配蛋白质。",
  cut: "相对友好，减脂期也可作甜食替代。",
  glow: "维 C / 抗氧化相关，关注气色与皮肤状态。",
  night: "比奶茶炸鸡温和，适合嘴馋时的小份选择。",
  share: "好分、不黏手，合租或办公室很省事。",
};

function makeScenarioSection({ barId, resultId, gridId, scenarios, tagMap, tips, kind }) {
  let active = "all";
  const bar = document.getElementById(barId);
  const result = document.getElementById(resultId);
  const grid = document.getElementById(gridId);

  function fruitTags(fruit) {
    return tagMap[fruit.id] || [];
  }

  function renderBar() {
    bar.innerHTML = "";
    scenarios.forEach((s) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "scenario-chip" + (active === s.id ? " is-active" : "");
      btn.innerHTML = `<span class="sc-icon" style="background:${s.color}"></span>${s.label}`;
      btn.addEventListener("click", () => {
        active = s.id;
        renderBar();
        renderGrid();
      });
      bar.appendChild(btn);
    });
  }

  function renderGrid() {
    const list =
      active === "all"
        ? FRUITS.filter((f) => fruitTags(f).length).slice(0, 9)
        : FRUITS.filter((f) => fruitTags(f).includes(active));

    grid.innerHTML = "";
    list.forEach((f) => {
      const card = createFruitCard(f, { compact: true });
      const tagsHtml = fruitTags(f)
        .map((t) => {
          const sc = scenarios.find((x) => x.id === t);
          return sc
            ? `<span class="tag"><span class="chip-icon" style="background:${sc.color}"></span>${sc.label}</span>`
            : "";
        })
        .join("");
      const meta = card.querySelector(".fruit-meta");
      if (meta && tagsHtml) {
        const row = document.createElement("div");
        row.className = "fruit-meta";
        row.style.marginTop = "8px";
        row.innerHTML = tagsHtml;
        meta.after(row);
      }
      if (kind === "elder" && f.id === "grapefruit") {
        const warn = document.createElement("div");
        warn.className = "tag";
        warn.style.cssText = "margin-top:8px;color:#a33b2c;background:rgba(232,90,60,0.12)";
        warn.textContent = "服药前先问医生/药师";
        card.querySelector(".fruit-meta")?.after(warn);
      }
      grid.appendChild(card);
    });

    if (active === "all") {
      result.textContent =
        kind === "elder"
          ? "已按牙口、消化、控糖、护眼、补钾等标注。先点上方标签，再按自家情况取舍。"
          : "已按办公、健身、控卡、气色、熬夜等标注。点标签快速筛选。";
    } else {
      const sc = scenarios.find((x) => x.id === active);
      const tip = tips[active] || "";
      result.textContent = `「${sc?.label || ""}」共 ${list.length} 种。${tip}`;
    }
  }

  renderBar();
  renderGrid();
  return { refresh: renderGrid };
}

// ---------- student zone ----------
const STUDENT_SCENARIOS = [
  { id: "all", label: "全部", color: "#e85a3c" },
  { id: "dorm", label: "宿舍耐放", color: "#7aa86a" },
  { id: "noprep", label: "开袋即食", color: "#e08a3c" },
  { id: "budget", label: "省钱友好", color: "#4a7c9b" },
  { id: "exam", label: "考试周", color: "#b0557a" },
  { id: "gym", label: "运动前后", color: "#c4783a" },
  { id: "late", label: "熬夜自习", color: "#6b7fa8" },
  { id: "share", label: "宿舍分享", color: "#d4842e" },
];

// 场景标签：dorm 耐放 / noprep 免刀免切 / budget 便宜 / exam 考试周 / gym 运动 / late 熬夜 / share 分享
const STUDENT_TAGS = {
  apple: ["dorm", "noprep", "budget", "exam", "share"],
  banana: ["noprep", "budget", "exam", "gym", "late"],
  orange: ["dorm", "budget", "exam", "late", "share"],
  strawberry: ["noprep", "late"],
  blueberry: ["noprep", "exam", "late"],
  grape: ["noprep", "exam", "gym", "share"],
  watermelon: ["budget", "share", "late"],
  peach: ["noprep", "late"],
  mango: ["noprep", "gym"],
  kiwi: ["exam", "late", "gym"],
  pear: ["dorm", "budget", "exam", "share"],
  "citrus-pomelo": ["dorm", "budget", "share", "exam"],
  pomegranate: ["dorm", "exam", "share"],
  pineapple: ["share", "budget"],
  cherry: ["noprep", "late"],
  dragonfruit: ["noprep", "share"],
  durian: ["share", "gym"],
  lychee: ["noprep", "share", "late"],
  longan: ["dorm", "late", "budget"],
  persimmon: ["dorm", "budget", "exam"],
  grapefruit: ["dorm", "budget", "exam", "late"],
  avocado: ["gym", "exam"],
  lemon: ["dorm", "budget", "late"],
  apricot: ["noprep", "budget"],
  loquat: ["noprep", "late"],
  bayberry: ["noprep", "late"],
  passionfruit: ["late", "exam"],
  mangosteen: ["noprep", "share"],
  fig: ["late", "share"],
  mulberry: ["noprep", "late"],
  jujube: ["dorm", "budget", "exam", "noprep"],
  papaya: ["share", "gym", "budget"],
};

const STUDENT_TIPS = {
  dorm: "常温阴凉处就能放，适合没冰箱的宿舍。",
  noprep: "洗一下/剥皮就能吃，不用刀不用板。",
  budget: "当季本地量大价优，适合生活费有限时。",
  exam: "补能稳、好入口，自习包里好带。",
  gym: "训练前后补糖原很顺手。",
  late: "别用高糖零食硬扛，这些果子更温和。",
  share: "好分、好拿，适合寝室/课题组拼着吃。",
};

let activeScenario = "all";

function fruitStudentTags(fruit) {
  return STUDENT_TAGS[fruit.id] || [];
}

function renderScenarioBar() {
  const bar = document.getElementById("scenario-bar");
  bar.innerHTML = "";
  STUDENT_SCENARIOS.forEach((s) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "scenario-chip" + (activeScenario === s.id ? " is-active" : "");
    btn.innerHTML = `<span class="sc-icon" style="background:${s.color}"></span>${s.label}`;
    btn.addEventListener("click", () => {
      activeScenario = s.id;
      renderScenarioBar();
      renderStudentGrid();
    });
    bar.appendChild(btn);
  });
}

function renderStudentGrid() {
  const grid = document.getElementById("student-grid");
  const result = document.getElementById("scenario-result");

  const list =
    activeScenario === "all"
      ? FRUITS.filter((f) => fruitStudentTags(f).length).slice(0, 9)
      : FRUITS.filter((f) => fruitStudentTags(f).includes(activeScenario));

  grid.innerHTML = "";
  list.forEach((f) => {
    const card = createFruitCard(f, { compact: true });
    const tags = fruitStudentTags(f)
      .map((t) => {
        const sc = STUDENT_SCENARIOS.find((x) => x.id === t);
        return sc ? `<span class="tag"><span class="chip-icon" style="background:${sc.color}"></span>${sc.label}</span>` : "";
      })
      .join("");
    const meta = card.querySelector(".fruit-meta");
    if (meta && tags) {
      const row = document.createElement("div");
      row.className = "fruit-meta";
      row.style.marginTop = "8px";
      row.innerHTML = tags;
      meta.after(row);
    }
    grid.appendChild(card);
  });

  if (activeScenario === "all") {
    result.textContent =
      "已标好宿舍耐放、开袋即食、省钱、考试周等场景。点上方标签快速筛选，或直接生成本周宿舍果篮。";
  } else {
    const sc = STUDENT_SCENARIOS.find((x) => x.id === activeScenario);
    const tip = STUDENT_TIPS[activeScenario] || "";
    result.textContent = `「${sc?.label || ""}」共 ${list.length} 种。${tip}`;
  }
}

function generateBasket() {
  // Prefer in-season + student-friendly fruits
  const current = FRUITS.filter((f) => fruitInMonth(f, selectedMonth));
  const dorm = current.filter((f) => fruitStudentTags(f).includes("dorm") || fruitStudentTags(f).includes("budget"));
  const prep = current.filter((f) => fruitStudentTags(f).includes("noprep") || fruitStudentTags(f).includes("exam"));
  const extra = FRUITS.filter((f) => fruitStudentTags(f).includes("share") && fruitInMonth(f, selectedMonth));

  const pool = [...dorm, ...prep, ...extra];
  const unique = [];
  const seen = new Set();
  for (const f of pool) {
    if (!seen.has(f.id)) {
      seen.add(f.id);
      unique.push(f);
    }
  }

  // Shuffle and take 3
  for (let i = unique.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [unique[i], unique[j]] = [unique[j], unique[i]];
  }
  let picks = unique.slice(0, 3);
  if (picks.length < 3) {
    const backup = FRUITS.filter((f) => !seen.has(f.id));
    picks = picks.concat(backup.slice(0, 3 - picks.length));
  }

  const grid = document.getElementById("basket-grid");
  const tip = document.getElementById("basket-tip");
  grid.innerHTML = "";
  picks.forEach((f, idx) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "basket-item";
    item.innerHTML = `
      <div class="b-emoji">${fruitImgTag(f)}</div>
      <h4>${f.name}</h4>
      <p>${STUDENT_TIPS[fruitStudentTags(f)[0]] || f.brief}</p>
    `;
    item.addEventListener("click", () => openModal(f.id));
    grid.appendChild(item);
    void idx;
  });

  tip.textContent = `按 ${monthName(selectedMonth)} 应季 + 宿舍场景抽了 3 种，大约够一人 3–5 天。一次别囤太多，坏了更费钱。`;
  document.getElementById("basket-panel").hidden = false;
}

document.getElementById("btn-fruit-basket").addEventListener("click", generateBasket);
document.getElementById("basket-close").addEventListener("click", () => {
  document.getElementById("basket-panel").hidden = true;
});

// ---------- share / print / toast ----------
const SITE_URL = "https://nickjuddy323-commits.github.io/guoxu-fruit/";

function showToast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.hidden = false;
  requestAnimationFrame(() => el.classList.add("is-show"));
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    el.classList.remove("is-show");
    setTimeout(() => {
      el.hidden = true;
    }, 250);
  }, 2200);
}

function openShare() {
  const modal = document.getElementById("share-modal");
  const urlEl = document.getElementById("share-url");
  const qr = document.getElementById("qr-img");
  const url = location.href.startsWith("http") ? location.href : SITE_URL;
  if (urlEl) urlEl.textContent = url;
  if (qr && !qr.src) {
    qr.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=8&data=" +
      encodeURIComponent(url);
    qr.onerror = () => {
      qr.style.display = "none";
    };
  }
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeShare() {
  const modal = document.getElementById("share-modal");
  modal.hidden = true;
  document.body.style.overflow = "";
}

async function copyLink() {
  const url = location.href.startsWith("http") ? location.href : SITE_URL;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(url);
    } else {
      const ta = document.createElement("textarea");
      ta.value = url;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    showToast("链接已复制，去粘贴给朋友吧");
  } catch {
    showToast("复制失败，请手动复制链接");
  }
}

function nativeShare() {
  const url = location.href.startsWith("http") ? location.href : SITE_URL;
  const data = {
    title: "果序 · 时令水果志",
    text: "水果功效、当季怎么吃、控糖与长辈/青年/学生场景，一页就能查。",
    url,
  };
  if (navigator.share) {
    navigator.share(data).catch(() => {});
  } else {
    copyLink();
    showToast("已复制链接，可粘贴到微信/QQ");
  }
}

function doPrint() {
  window.print();
}

document.getElementById("btn-share").addEventListener("click", openShare);
document.getElementById("btn-share-2").addEventListener("click", openShare);
document.getElementById("btn-copy-link").addEventListener("click", copyLink);
document.getElementById("btn-native-share").addEventListener("click", nativeShare);
document.getElementById("btn-print").addEventListener("click", doPrint);
document.getElementById("btn-print-2").addEventListener("click", () => {
  closeShare();
  setTimeout(doPrint, 80);
});

document.getElementById("share-modal").addEventListener("click", (e) => {
  if (e.target.matches("[data-close-share]")) closeShare();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const share = document.getElementById("share-modal");
    if (share && !share.hidden) closeShare();
  }
});

// ---------- header search ----------
const headerSearch = document.getElementById("header-search");
if (headerSearch && searchInput) {
  headerSearch.addEventListener("input", () => {
    searchInput.value = headerSearch.value;
    renderAtlas(headerSearch.value);
    if (headerSearch.value.trim()) {
      document.getElementById("atlas")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
  searchInput.addEventListener("input", () => {
    headerSearch.value = searchInput.value;
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
    const tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    e.preventDefault();
    const box = document.querySelector(".header-search")?.offsetParent
      ? headerSearch
      : searchInput;
    box?.focus();
    document.getElementById("atlas")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// ---------- play wheel ----------
let playMode = "any";
let playFruit = null;
const playModesEl = document.getElementById("play-modes");
const playWheel = document.getElementById("play-wheel");
const playFace = document.getElementById("play-face");
const playHint = document.getElementById("play-hint");
const playResult = document.getElementById("play-result");

function playPool() {
  switch (playMode) {
    case "season":
      return FRUITS.filter((f) => fruitInMonth(f, selectedMonth));
    case "low":
      return FRUITS.filter((f) => f.sugar === "low");
    case "easy":
      return FRUITS.filter((f) => fruitStudentTags(f).includes("noprep") || fruitStudentTags(f).includes("dorm"));
    case "exam":
      return FRUITS.filter((f) => f.tags.includes("energy") || f.tags.includes("vitc") || fruitStudentTags(f).includes("exam"));
    default:
      return FRUITS;
  }
}

function spinPlay() {
  const pool = playPool().length ? playPool() : FRUITS;
  playFruit = pool[Math.floor(Math.random() * pool.length)];
  playWheel.classList.remove("is-spin");
  void playWheel.offsetWidth;
  playWheel.classList.add("is-spin");
  playHint.textContent = "转…";

  // quick face shuffle
  let ticks = 0;
  const shuffle = setInterval(() => {
    const f = FRUITS[Math.floor(Math.random() * FRUITS.length)];
    playFace.textContent = f.emoji;
    ticks += 1;
    if (ticks > 10) {
      clearInterval(shuffle);
      playFace.innerHTML = fruitImgTag(playFruit);
      playHint.textContent = "就决定是你了";
      playResult.hidden = false;
      document.getElementById("play-emoji").innerHTML = fruitImgTag(playFruit);
      document.getElementById("play-name").textContent = playFruit.name;
      document.getElementById("play-brief").textContent = playFruit.brief;
      document.getElementById("play-detail").onclick = () => openModal(playFruit.id);
    }
  }, 70);
}

playModesEl?.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    playModesEl.querySelectorAll("button").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    playMode = btn.dataset.mode;
  });
});

playWheel?.addEventListener("click", spinPlay);
document.getElementById("play-again")?.addEventListener("click", spinPlay);

// ---------- week fruit plan ----------
const WEEK_KEY = "guoxu-week-plan";
const WEEK_DAYS = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];

function loadWeek() {
  try {
    const raw = localStorage.getItem(WEEK_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function saveWeek(week) {
  try {
    localStorage.setItem(WEEK_KEY, JSON.stringify(week));
  } catch {
    /* ignore */
  }
}

let weekPlan = loadWeek(); // array of 7: fruitId | null

function renderWeek() {
  setTimeout(() => { if (typeof renderDataStrip === 'function') renderDataStrip(); }, 0);
  const grid = document.getElementById("week-grid");
  const countEl = document.getElementById("week-count");
  if (!grid) return;

  // today index Mon=0
  const jsDay = new Date().getDay(); // 0 Sun
  const todayIdx = (jsDay + 6) % 7;

  let filled = 0;
  grid.innerHTML = "";
  WEEK_DAYS.forEach((label, i) => {
    const fruitId = weekPlan[i];
    const fruit = fruitId ? fruitById(fruitId) : null;
    if (fruit) filled += 1;

    const card = document.createElement("div");
    card.className = "week-day" + (i === todayIdx ? " is-today" : "");
    card.innerHTML = `<div class="d-label">${label}${i === todayIdx ? " · 今天" : ""}</div>`;

    if (fruit) {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "d-item";
      item.innerHTML = fruitImgTag(fruit) + `<span><strong>${fruit.name}</strong></span>`;
      item.addEventListener("click", () => openModal(fruit.id));
      card.appendChild(item);
      const clear = document.createElement("button");
      clear.type = "button";
      clear.className = "d-clear";
      clear.textContent = "换一天内容 → 随机";
      clear.addEventListener("click", () => {
        weekPlan[i] = FRUITS[Math.floor(Math.random() * FRUITS.length)].id;
        saveWeek(weekPlan);
        renderWeek();
      });
      card.appendChild(clear);
    } else {
      const empty = document.createElement("button");
      empty.type = "button";
      empty.className = "d-empty";
      empty.textContent = "+ 选水果";
      empty.addEventListener("click", () => {
        const pool = FRUITS.filter((f) => fruitInMonth(f, selectedMonth));
        const src = pool.length ? pool : FRUITS;
        weekPlan[i] = src[Math.floor(Math.random() * src.length)].id;
        saveWeek(weekPlan);
        renderWeek();
      });
      card.appendChild(empty);
    }
    grid.appendChild(card);
  });

  if (countEl) countEl.textContent = `已排 ${filled}/7 天`;
}

document.getElementById("week-fill")?.addEventListener("click", () => {
  weekPlan = WEEK_DAYS.map(() => {
    const pool = FRUITS.filter((f) => fruitInMonth(f, selectedMonth));
    const src = pool.length ? pool : FRUITS;
    return src[Math.floor(Math.random() * src.length)].id;
  });
  saveWeek(weekPlan);
  renderWeek();
  showToast("本周果单已随机填满");
});

document.getElementById("week-clear")?.addEventListener("click", () => {
  weekPlan = Array(7).fill(null);
  saveWeek(weekPlan);
  renderWeek();
  showToast("本周果单已清空");
});

// ---------- data strip ----------
function renderDataStrip() {
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  set("data-fruits", String(FRUITS.length));
  set("data-benefits", String(BENEFITS.length));
  set("data-scenarios", String(STUDENT_SCENARIOS.length + ELDER_SCENARIOS.length + YOUNGER_SCENARIOS.length - 3));
  set("data-season", SEASONS[seasonFromMonth(selectedMonth)]?.name || "—");
  set("data-peak", String(FRUITS.filter((f) => fruitInMonth(f, selectedMonth)).length) + " 种");
  set("data-foreign", String(FRUITS.filter((f) => isForeignOrigin((FRUIT_ORIGIN[f.id] || {}).origin)).length) + " 种");
  set("data-fav", String(favorites.length));
  const weekFilled = (weekPlan || []).filter(Boolean).length;
  set("data-week", weekFilled + "/7");
}


// ---------- dietitian ----------
function dietPortionBase(people, goal) {
  const peopleNum = Number(people) || 1;
  let per = 220;
  if (goal === "low") per = 150;
  if (goal === "energy") per = 280;
  if (goal === "skin") per = 220;
  if (goal === "digest") per = 180;
  if (goal === "soft") per = 180;
  return Math.round(per * peopleNum);
}

function dietPool(goal) {
  let list = FRUITS.filter((f) => fruitInMonth(f, selectedMonth));
  if (!list.length) list = FRUITS.slice();
  if (goal === "low") list = FRUITS.filter((f) => f.sugar === "low").concat(list.filter((f) => f.sugar === "mid"));
  if (goal === "energy") list = FRUITS.filter((f) => f.tags.includes("energy") || fruitStudentTags(f).includes("gym")).concat(list);
  if (goal === "skin") list = FRUITS.filter((f) => f.tags.includes("antiox") || f.tags.includes("vitc") || f.tags.includes("eye")).concat(list);
  if (goal === "digest") list = FRUITS.filter((f) => f.tags.includes("digest") || f.tags.includes("fiber")).concat(list);
  if (goal === "soft") list = FRUITS.filter((f) => fruitStudentTags(f).includes("soft") || f.tags.includes("digest")).concat(list);
  const seen = new Set();
  return list.filter((f) => { if (seen.has(f.id)) return false; seen.add(f.id); return true; });
}

function similarFruit(fruit, excludeIds) {
  const score = (f) => {
    let s = 0;
    if (f.sugar === fruit.sugar) s += 3;
    fruit.tags.forEach((t) => { if (f.tags.includes(t)) s += 2; });
    f.seasons.forEach((t) => { if (fruit.seasons.includes(t)) s += 1; });
    if (fruitInMonth(f, selectedMonth)) s += 2;
    return s;
  };
  return FRUITS.filter((f) => f.id !== fruit.id && !excludeIds.has(f.id))
    .map((f) => ({ f, s: score(f) }))
    .sort((a, b) => b.s - a.s)[0]?.f;
}

function buildDietPlan() {
  const people = document.getElementById('diet-people')?.value || '1';
  const goal = document.getElementById('diet-goal')?.value || 'balance';
  const hasRaw = document.getElementById('diet-has')?.value || '';
  const wantSub = document.getElementById('diet-sub')?.value !== 'off';
  const hasList = hasRaw.split(/[，,、\s]+/).map((s) => s.trim()).filter(Boolean);
  const totalG = dietPortionBase(people, goal);
  const peopleNum = Number(people) || 1;
  const owned = [];
  hasList.forEach((name) => {
    const hit = FRUITS.find((f) => f.name === name || f.en.toLowerCase().includes(name.toLowerCase()) || f.name.includes(name));
    if (hit && !owned.find((o) => o.id === hit.id)) owned.push(hit);
  });
  const pool = dietPool(goal);
  const picks = [];
  const used = new Set(owned.map((o) => o.id));
  owned.forEach((f) => { if (picks.length < 3) { picks.push({ fruit: f, source: 'has' }); used.add(f.id); } });
  while (picks.length < 3) {
    const cand = pool.find((f) => !used.has(f.id));
    if (!cand) break;
    picks.push({ fruit: cand, source: 'pick' });
    used.add(cand.id);
  }
  while (picks.length < 2) {
    const cand = FRUITS.find((f) => !used.has(f.id));
    if (!cand) break;
    picks.push({ fruit: cand, source: 'pick' });
    used.add(cand.id);
  }
  const weights = picks.map((p) => (p.fruit.sugar === 'high' ? 0.22 : p.fruit.sugar === 'low' ? 0.38 : 0.3));
  const wsum = weights.reduce((a, b) => a + b, 0) || 1;
  const portions = picks.map((p, i) => Math.max(60, Math.round((totalG * weights[i]) / wsum / 10) * 10));
  const sumG = portions.reduce((a, b) => a + b, 0);
  const goalLabel = { balance: '均衡多样', low: '控糖 / 减糖', energy: '补能 / 运动', skin: '气色 / 抗氧化', digest: '好消化', soft: '牙口友好' }[goal];
  const summary = peopleNum === 1
    ? `为 1 人准备约 ${sumG} 克水果（${goalLabel}）。建议分 1–2 次吃完，两餐之间很合适。`
    : `为 ${people} 人准备约 ${sumG} 克水果（${goalLabel}），人均约 ${Math.round(sumG / peopleNum)} 克。可洗好装盒分享。`;
  const sumEl = document.getElementById('diet-summary-text');
  if (sumEl) sumEl.textContent = summary;
  const listEl = document.getElementById('diet-list');
  if (!listEl) return;
  listEl.innerHTML = '';
  picks.forEach((p, i) => {
    const f = p.fruit;
    const g = portions[i];
    const note = p.source === 'has' ? '手边有，优先安排。' : goal === 'low' ? '糖分相对友好。' : goal === 'energy' ? '适合运动前后补糖原。' : goal === 'skin' ? '维 C / 抗氧化相关。' : goal === 'soft' ? '口感偏软，好入口。' : '当季推荐，风味在线。';
    const row = document.createElement('div');
    row.className = 'diet-item';
    row.style.cursor = 'pointer';
    row.innerHTML =
      '<div class="d-img">' + fruitImgTag(f) + '</div>' +
      '<div><h4>' + f.name + (p.source === 'has' ? ' · 已有' : '') + '</h4><p>' + note + ' ' +
      ((FRUIT_ORIGIN[f.id] || {}).regions || '').split('、')[0] + '一带常见。</p></div>' +
      '<div class="d-portion"><strong>' + g + '克</strong><span>约 ' + Math.max(1, Math.round(g / 120)) + ' 个中等份</span></div>';
    row.addEventListener('click', () => openModal(f.id));
    listEl.appendChild(row);
  });
  const swapBox = document.getElementById('diet-swap-box');
  const swapEl = document.getElementById('diet-swaps');
  if (!swapBox || !swapEl) return;
  if (!wantSub) { swapBox.hidden = true; return; }
  const swaps = [];
  const exclude = new Set(picks.map((p) => p.fruit.id));
  picks.forEach((p) => {
    const alt = similarFruit(p.fruit, exclude);
    if (!alt) return;
    exclude.add(alt.id);
    swaps.push('买不到「' + p.fruit.name + '」→ 可换 <strong>' + alt.name + '</strong>（' + SUGAR_LABEL[alt.sugar] + '）。主产地：' + ((FRUIT_ORIGIN[alt.id] || {}).regions || '') + '。');
  });
  swaps.push('若附近只有橙/橘，可替代维 C 类水果；只有苹果/梨，可替代耐放嚼感类；只有香蕉，可当快速补能担当。');
  swaps.push('冷冻蓝莓、冻芒果、无添加冻莓可当草莓/蓝莓/芒果的应急平替；口感略软，营养保留通常不错。');
  swapEl.innerHTML = swaps.map((s) => '<div class="diet-swap">' + s + '</div>').join('');
  swapBox.hidden = false;
}

document.getElementById('diet-apply')?.addEventListener('click', buildDietPlan);
document.getElementById('diet-refresh')?.addEventListener('click', () => {
  buildDietPlan();
  showToast('已换一份今日建议');
});

// ---------- random ----------

function randomFruit() {
  const f = FRUITS[Math.floor(Math.random() * FRUITS.length)];
  openModal(f.id);
}

document.getElementById("btn-random").addEventListener("click", randomFruit);
document.getElementById("btn-random-2").addEventListener("click", randomFruit);

// ---------- mobile nav ----------
const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");

navToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  navToggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
});

siteNav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ---------- to top ----------
const toTop = document.getElementById("to-top");
window.addEventListener(
  "scroll",
  () => {
    toTop.classList.toggle("is-show", window.scrollY > 480);
  },
  { passive: true }
);
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ---------- scroll reveal + active nav ----------
function setupReveal() {
  const nodes = document.querySelectorAll(
    ".section-head, .fruit-card, .tip-card, .faq-item, .season-panel, .year-map, .closing-card, .daily-card"
  );
  nodes.forEach((n) => n.classList.add("reveal"));

  if (!("IntersectionObserver" in window)) {
    nodes.forEach((n) => n.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  nodes.forEach((n) => io.observe(n));
}

function setupActiveNav() {
  const links = [...document.querySelectorAll(".nav a")];
  const map = new Map();
  links.forEach((a) => {
    const id = a.getAttribute("href")?.slice(1);
    const el = id ? document.getElementById(id) : null;
    if (el) map.set(el, a);
  });
  if (!map.size || !("IntersectionObserver" in window)) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("is-active"));
          map.get(entry.target)?.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );
  map.forEach((_, el) => io.observe(el));
}

// ---------- stats ----------
function initStats() {
  document.getElementById("stat-fruits").textContent = String(FRUITS.length);
  document.getElementById("stat-benefits").textContent = String(BENEFITS.length);
  const peak = FRUITS.filter((f) => fruitInMonth(f, selectedMonth)).length;
  document.getElementById("stat-peak").textContent = String(peak);
}

// ---------- init ----------
setSeasonTheme(activeSeason);
initStats();
renderMonthPicker();
renderToday();
renderYearMap();
renderOrbit();
syncSeasonTab(activeSeason);
renderBenefitFilter();
renderBenefitGrid();
renderAtlas();
renderDaily();
renderSugarFilter();
renderSugarGrid();
fillCompareSelects();
renderCompare();
renderScenarioBar();
renderStudentGrid();
renderWeek();
renderDataStrip();
makeScenarioSection({
  barId: "elder-bar",
  resultId: "elder-result",
  gridId: "elder-grid",
  scenarios: ELDER_SCENARIOS,
  tagMap: ELDER_TAGS,
  tips: ELDER_TIPS,
  kind: "elder",
});
makeScenarioSection({
  barId: "younger-bar",
  resultId: "younger-result",
  gridId: "younger-grid",
  scenarios: YOUNGER_SCENARIOS,
  tagMap: YOUNGER_TAGS,
  tips: YOUNGER_TIPS,
  kind: "younger",
});
refreshFavoritesUI();
setupReveal();
setupActiveNav();
