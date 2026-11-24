const categories = [
  { id: 'all', name: '全部' },
  { id: 'ceiling', name: '吸顶灯' },
  { id: 'pendant', name: '吊灯' },
  { id: 'table', name: '台灯' },
  { id: 'floor', name: '落地灯' },
  { id: 'wall', name: '壁灯' }
];

const products = [
  {
    id: 'p001',
    name: '云环智能吸顶灯',
    categoryId: 'ceiling',
    categoryName: '吸顶灯',
    price: 899,
    originalPrice: 1099,
    emoji: '💡',
    color: 'linear-gradient(145deg, #dce8f8, #a9c5eb)',
    tagline: '一盏灯，照亮家的每个角落',
    description: '简约圆形灯体适合客厅、卧室等多种空间。支持亮度与色温调节，可根据阅读、休息等场景切换舒适光线。',
    specs: ['适用面积：15–25㎡', '无级调光调色温', '支持智能开关控制']
  },
  {
    id: 'p002',
    name: '星屿玻璃吊灯',
    categoryId: 'pendant',
    categoryName: '吊灯',
    price: 1280,
    originalPrice: 1580,
    emoji: '✨',
    color: 'linear-gradient(145deg, #e8e4f6, #b9b2dc)',
    tagline: '让餐桌成为家的视觉中心',
    description: '通透玻璃灯罩搭配简洁金属灯体，适合餐桌、吧台或客厅局部照明。光线温润，为空间增加轻盈的层次感。',
    specs: ['灯罩：手工吹制玻璃', '灯头：E27', '吊线长度可调节']
  },
  {
    id: 'p003',
    name: '折光 LED 阅读台灯',
    categoryId: 'table',
    categoryName: '台灯',
    price: 399,
    originalPrice: 499,
    emoji: '🛋️',
    color: 'linear-gradient(145deg, #d9e8f4, #91b6d6)',
    tagline: '专注阅读，也照顾双眼',
    description: '可调节灯臂方便按需布光，均匀柔和的光线适合书桌阅读与日常办公。简洁底座节省桌面空间。',
    specs: ['多档亮度调节', '无可视频闪设计', '灯臂多角度调节']
  },
  {
    id: 'p004',
    name: '弧线阅读落地灯',
    categoryId: 'floor',
    categoryName: '落地灯',
    price: 768,
    originalPrice: 899,
    emoji: '💡',
    color: 'linear-gradient(145deg, #dce7f1, #a0b7ce)',
    tagline: '沙发旁的专属阅读光',
    description: '弧形灯杆可延伸至沙发或休闲椅上方，搭配稳定底座与柔和灯罩，适合客厅阅读、休闲和氛围照明。',
    specs: ['灯体高度：约 165cm', '灯罩方向可调', '金属灯杆与加重底座']
  },
  {
    id: 'p005',
    name: '月白床头阅读灯',
    categoryId: 'wall',
    categoryName: '壁灯',
    price: 329,
    originalPrice: 399,
    emoji: '🌙',
    color: 'linear-gradient(145deg, #e5e9f4, #b3c1dc)',
    tagline: '睡前阅读，光线恰到好处',
    description: '小巧灯体适合安装在床头或走廊墙面，向下出光减少直射眩光，为睡前阅读和夜间起身提供柔和照明。',
    specs: ['暖白光 LED 光源', '灯头角度可调', '适合床头与走廊安装']
  },
  {
    id: 'p006',
    name: '拾光木艺台灯',
    categoryId: 'table',
    categoryName: '台灯',
    price: 459,
    originalPrice: 559,
    emoji: '🪔',
    color: 'linear-gradient(145deg, #e2e8f2, #aebbd0)',
    tagline: '木与光，构成安静一隅',
    description: '木质灯座搭配简约布艺灯罩，光线温和不刺眼。适合卧室床头、客厅边几或书房角落。',
    specs: ['实木底座', '布艺灯罩', '灯头：E27']
  },
  {
    id: 'p007',
    name: '极简线性吊灯',
    categoryId: 'pendant',
    categoryName: '吊灯',
    price: 699,
    originalPrice: 829,
    emoji: '💡',
    color: 'linear-gradient(145deg, #dce8f7, #9cb8df)',
    tagline: '干净利落，适配现代空间',
    description: '线性灯体适合餐桌、书桌及厨房岛台上方，简洁外形不抢空间主体，提供均匀实用的照明。',
    specs: ['一体式 LED 光源', '吊线高度可调', '适合长桌与岛台']
  },
  {
    id: 'p008',
    name: '方圆简约吸顶灯',
    categoryId: 'ceiling',
    categoryName: '吸顶灯',
    price: 529,
    originalPrice: 629,
    emoji: '🔆',
    color: 'linear-gradient(145deg, #e5ebf5, #b6c8e2)',
    tagline: '简洁外形，照顾全屋日常',
    description: '方圆结合的薄型灯体适合卧室、书房和小户型客厅。柔光扩散均匀，简洁设计容易融入不同装修风格。',
    specs: ['适用面积：8–15㎡', '节能 LED 光源', '高透光柔光灯罩']
  }
];

module.exports = { categories, products };
