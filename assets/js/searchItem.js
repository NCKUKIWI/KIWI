// 因為每次搜尋的時間畫太長，所以事先仔好放置網頁
var content = [
  
  {
    title: '黃金鼎*',
    url:'/course?teacher=黃金鼎*'
  },
  {
    title: '藥物發展實習（二）',
    url:'/course?course_name=藥物發展實習（二）'
  },
  
  {
    title: '劉秉彥*',
    url:'/course?teacher=劉秉彥*'
  },
  {
    title: '心血管疾病機轉及治療趨勢概論',
    url:'/course?course_name=心血管疾病機轉及治療趨勢概論'
  },
  
  {
    title: '王新台*',
    url:'/course?teacher=王新台*'
  },
  {
    title: '統計在基礎醫學研究上之應用與軟體操作',
    url:'/course?course_name=統計在基礎醫學研究上之應用與軟體操作'
  },
  
  {
    title: '鄭宏祺 ',
    url:'/course?teacher=鄭宏祺 '
  },
  {
    title: '癌症研究所需之論證',
    url:'/course?course_name=癌症研究所需之論證'
  },
  
  {
    title: '楊岱樺 ',
    url:'/course?teacher=楊岱樺 '
  },
  {
    title: '工程生理學',
    url:'/course?course_name=工程生理學'
  },
  
  {
    title: '張純純 傅子芳 張文粲*陳昌熙 楊尚訓 ',
    url:'/course?teacher=張純純 傅子芳 張文粲*陳昌熙 楊尚訓 '
  },
  {
    title: '發育生物學',
    url:'/course?course_name=發育生物學'
  },
  
  {
    title: '郭保麟 王崇任 許耿福 吳昭良*謝嘉興 蕭璦莉*袁　國 ',
    url:'/course?teacher=郭保麟 王崇任 許耿福 吳昭良*謝嘉興 蕭璦莉*袁　國 '
  },
  {
    title: '基因治療特論',
    url:'/course?course_name=基因治療特論'
  },
  
  {
    title: '賴明德 許桂森*簡伯武 王憶卿 蔡少正 孫孝芳 ',
    url:'/course?teacher=賴明德 許桂森*簡伯武 王憶卿 蔡少正 孫孝芳 '
  },
  {
    title: '科研寫作',
    url:'/course?course_name=科研寫作'
  },
  
  {
    title: '楊孔嘉 王貞仁 余佳益 張定宗 陳舜華*凌　斌 張　堯 彭貴春 王憲威 ',
    url:'/course?teacher=楊孔嘉 王貞仁 余佳益 張定宗 陳舜華*凌　斌 張　堯 彭貴春 王憲威 '
  },
  {
    title: '高等病毒學',
    url:'/course?course_name=高等病毒學'
  },
  
  {
    title: '張文粲*鄭宏祺 陳昌熙 黃柏憲 張志鵬 蔡曜聲 許育祥 吳梨華 蔣輯武 莫凡毅 王仰高 ',
    url:'/course?teacher=張文粲*鄭宏祺 陳昌熙 黃柏憲 張志鵬 蔡曜聲 許育祥 吳梨華 蔣輯武 莫凡毅 王仰高 '
  },
  {
    title: '細胞生長及分化',
    url:'/course?course_name=細胞生長及分化'
  },
  
  {
    title: '許桂森*',
    url:'/course?teacher=許桂森*'
  },
  {
    title: '教學實習（三）',
    url:'/course?course_name=教學實習（三）'
  },
  
  {
    title: '楊倍昌*凌　斌*',
    url:'/course?teacher=楊倍昌*凌　斌*'
  },
  {
    title: '腫瘤免疫學',
    url:'/course?course_name=腫瘤免疫學'
  },
  
  {
    title: '黃柏憲*姜學誠*',
    url:'/course?teacher=黃柏憲*姜學誠*'
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '張雅雯*張志鵬*',
    url:'/course?teacher=張雅雯*張志鵬*'
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '黃柏憲*沈孟儒 簡伯武 姜學誠*吳豐森 湯銘哲 莊季瑛 蔡少正 黃阿敏 蔡美玲 吳勝男 楊尚訓 張雅雯 ',
    url:'/course?teacher=黃柏憲*沈孟儒 簡伯武 姜學誠*吳豐森 湯銘哲 莊季瑛 蔡少正 黃阿敏 蔡美玲 吳勝男 楊尚訓 張雅雯 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '徐麗君 張雅雯*劉校生 楊倍昌 陳舜華 林以行 凌　斌 王淑鶯 張志鵬*彭貴春 游一龍 蕭雅心 蔣輯武 王憲威 鄧景浩 吳佳慶 ',
    url:'/course?teacher=徐麗君 張雅雯*劉校生 楊倍昌 陳舜華 林以行 凌　斌 王淑鶯 張志鵬*彭貴春 游一龍 蕭雅心 蔣輯武 王憲威 鄧景浩 吳佳慶 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '吳昭良 莊偉哲 張文粲 賴明德 鄭宏祺 陳昌熙 黃柏憲*呂增宏 許桂森 王憶卿 姜學誠*楊尚訓 ',
    url:'/course?teacher=吳昭良 莊偉哲 張文粲 賴明德 鄭宏祺 陳昌熙 黃柏憲*呂增宏 許桂森 王憶卿 姜學誠*楊尚訓 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '葉才明 楊孔嘉 謝淑珠 張權發 王貞仁 黃溫雅 黃暉升 傅子芳 蔡佩珍 徐麗君 張雅雯*張志鵬*郭余民 黃步敏 江美治 莫凡毅 吳佳慶 司君一 ',
    url:'/course?teacher=葉才明 楊孔嘉 謝淑珠 張權發 王貞仁 黃溫雅 黃暉升 傅子芳 蔡佩珍 徐麗君 張雅雯*張志鵬*郭余民 黃步敏 江美治 莫凡毅 吳佳慶 司君一 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '呂佩融*陳明晟 ',
    url:'/course?teacher=呂佩融*陳明晟 '
  },
  {
    title: '轉譯醫學與臨床試驗特論',
    url:'/course?course_name=轉譯醫學與臨床試驗特論'
  },
  
  {
    title: '許桂森*',
    url:'/course?teacher=許桂森*'
  },
  {
    title: '教學實習（一）',
    url:'/course?course_name=教學實習（一）'
  },
  
  {
    title: '許桂森*',
    url:'/course?teacher=許桂森*'
  },
  {
    title: '中樞神經電生理學',
    url:'/course?course_name=中樞神經電生理學'
  },
  
  {
    title: '顏經洲 何漣漪 黃一修*陳振暐 鄧景浩 橋本昌征 ',
    url:'/course?teacher=顏經洲 何漣漪 黃一修*陳振暐 鄧景浩 橋本昌征 '
  },
  {
    title: '高等細菌學',
    url:'/course?course_name=高等細菌學'
  },
  
  {
    title: '黃一修 彭貴春*吳尚蓉 ',
    url:'/course?teacher=黃一修 彭貴春*吳尚蓉 '
  },
  {
    title: '轉譯醫學導論',
    url:'/course?course_name=轉譯醫學導論'
  },
  
  {
    title: '陳柏熹 莊季瑛*凌　斌 游一龍 郭余民 ',
    url:'/course?teacher=陳柏熹 莊季瑛*凌　斌 游一龍 郭余民 '
  },
  {
    title: '神經訊息傳遞特論',
    url:'/course?course_name=神經訊息傳遞特論'
  },
  
  {
    title: '黃溫雅 呂政展 李政昌 何中良*蘇五洲 周楠華 賴明德 沈孟儒 謝達斌 ',
    url:'/course?teacher=黃溫雅 呂政展 李政昌 何中良*蘇五洲 周楠華 賴明德 沈孟儒 謝達斌 '
  },
  {
    title: '癌症分子病理學',
    url:'/course?course_name=癌症分子病理學'
  },
  
  {
    title: '賴吾為 陳彩雲 辛致煒 李政昌 陳海雯 蘇五洲 姚維仁 顏家瑞 廖寶琦 張南山*陳玉玲 ',
    url:'/course?teacher=賴吾為 陳彩雲 辛致煒 李政昌 陳海雯 蘇五洲 姚維仁 顏家瑞 廖寶琦 張南山*陳玉玲 '
  },
  {
    title: '癌症醫學',
    url:'/course?course_name=癌症醫學'
  },
  
  {
    title: '游一龍*蕭雅心 ',
    url:'/course?teacher=游一龍*蕭雅心 '
  },
  {
    title: '行為神經藥物學',
    url:'/course?course_name=行為神經藥物學'
  },
  
  {
    title: '吳炳慶 許釗凱 張雅雯*張志鵬 張惠華 王應然 李俊璋 蕭雅心 王仰高 ',
    url:'/course?teacher=吳炳慶 許釗凱 張雅雯*張志鵬 張惠華 王應然 李俊璋 蕭雅心 王仰高 '
  },
  {
    title: '標靶器官毒理學',
    url:'/course?course_name=標靶器官毒理學'
  },
  
  {
    title: '黃溫雅*',
    url:'/course?teacher=黃溫雅*'
  },
  {
    title: '核酸損害修復與疾病',
    url:'/course?course_name=核酸損害修復與疾病'
  },
  
  {
    title: '周楠華 張俊彥 羅傳堯 鄭宏祺 張雅雯 沈延盛 吳梨華*吳佳慶 ',
    url:'/course?teacher=周楠華 張俊彥 羅傳堯 鄭宏祺 張雅雯 沈延盛 吳梨華*吳佳慶 '
  },
  {
    title: '血管新生學',
    url:'/course?course_name=血管新生學'
  },
  
  {
    title: '陳彩雲 吳俊明 許志新 張育誌 張雅雯*蕭雅心 蔡曜聲 劉秉彥 ',
    url:'/course?teacher=陳彩雲 吳俊明 許志新 張育誌 張雅雯*蕭雅心 蔡曜聲 劉秉彥 '
  },
  {
    title: '循環系統藥理毒理學',
    url:'/course?course_name=循環系統藥理毒理學'
  },
  
  {
    title: '郭保麟 陳昌熙 莊季瑛 吳梨華 蔣輯武*張南山 郭余民 ',
    url:'/course?teacher=郭保麟 陳昌熙 莊季瑛 吳梨華 蔣輯武*張南山 郭余民 '
  },
  {
    title: '老化研究特論',
    url:'/course?course_name=老化研究特論'
  },
  
  {
    title: '鄭宏祺 姜學誠 顏賢章 凌　斌 張志鵬 郭余民*',
    url:'/course?teacher=鄭宏祺 姜學誠 顏賢章 凌　斌 張志鵬 郭余民*'
  },
  {
    title: '細胞生物學特論（二）',
    url:'/course?course_name=細胞生物學特論（二）'
  },
  
  {
    title: '賴明德*鄭宏祺 黃柏憲 張雋曦 張志鵬 吳梨華 ',
    url:'/course?teacher=賴明德*鄭宏祺 黃柏憲 張雋曦 張志鵬 吳梨華 '
  },
  {
    title: '腫瘤生物學',
    url:'/course?course_name=腫瘤生物學'
  },
  
  {
    title: '郭余民 黃步敏*吳佳慶 司君一 許鍾瑜 ',
    url:'/course?teacher=郭余民 黃步敏*吳佳慶 司君一 許鍾瑜 '
  },
  {
    title: '神經解剖學特論',
    url:'/course?course_name=神經解剖學特論'
  },
  
  {
    title: '張權發 陳毓宏 張文粲 張明熙*陳昌熙 黃柏憲 王憶卿 張雋曦 王淑鶯 蔡曜聲 許育祥 ',
    url:'/course?teacher=張權發 陳毓宏 張文粲 張明熙*陳昌熙 黃柏憲 王憶卿 張雋曦 王淑鶯 蔡曜聲 許育祥 '
  },
  {
    title: '應用分子生物學',
    url:'/course?course_name=應用分子生物學'
  },
  
  {
    title: '董東璟 ',
    url:'/course?teacher=董東璟 '
  },
  {
    title: '海洋觀測與資料分析',
    url:'/course?course_name=海洋觀測與資料分析'
  },
  
  {
    title: '蔡長泰 ',
    url:'/course?teacher=蔡長泰 '
  },
  {
    title: '防洪工程',
    url:'/course?course_name=防洪工程'
  },
  
  {
    title: '顏沛華 ',
    url:'/course?teacher=顏沛華 '
  },
  {
    title: '地下水',
    url:'/course?course_name=地下水'
  },
  
  {
    title: '唐啟釗 ',
    url:'/course?teacher=唐啟釗 '
  },
  {
    title: '管路水力學',
    url:'/course?course_name=管路水力學'
  },
  
  {
    title: '賴文基 ',
    url:'/course?teacher=賴文基 '
  },
  {
    title: '水土保持工程',
    url:'/course?course_name=水土保持工程'
  },
  
  {
    title: '蔡雅雯 ',
    url:'/course?teacher=蔡雅雯 '
  },
  {
    title: '營建及管理',
    url:'/course?course_name=營建及管理'
  },
  
  {
    title: '吳啟東 ',
    url:'/course?teacher=吳啟東 '
  },
  {
    title: '海港工程設計',
    url:'/course?course_name=海港工程設計'
  },
  
  {
    title: '蕭政宗 ',
    url:'/course?teacher=蕭政宗 '
  },
  {
    title: '工程經濟',
    url:'/course?course_name=工程經濟'
  },
  
  {
    title: '戴義欽 ',
    url:'/course?teacher=戴義欽 '
  },
  {
    title: '數值分析',
    url:'/course?course_name=數值分析'
  },
  
  {
    title: '蕭士俊 ',
    url:'/course?teacher=蕭士俊 '
  },
  {
    title: '工程數學（四）',
    url:'/course?course_name=工程數學（四）'
  },
  
  {
    title: '董東璟 ',
    url:'/course?teacher=董東璟 '
  },
  {
    title: '專題研究（一）',
    url:'/course?course_name=專題研究（一）'
  },
  
  {
    title: '蕭政宗 ',
    url:'/course?teacher=蕭政宗 '
  },
  {
    title: '工程統計學',
    url:'/course?course_name=工程統計學'
  },
  
  {
    title: '詹錢登 ',
    url:'/course?teacher=詹錢登 '
  },
  {
    title: '明渠水力學',
    url:'/course?course_name=明渠水力學'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '鋼筋混凝土學',
    url:'/course?course_name=鋼筋混凝土學'
  },
  
  {
    title: '吳嘉文*蔡惠峰 ',
    url:'/course?teacher=吳嘉文*蔡惠峰 '
  },
  {
    title: '水資訊概論',
    url:'/course?course_name=水資訊概論'
  },
  
  {
    title: '陳璋玲 ',
    url:'/course?teacher=陳璋玲 '
  },
  {
    title: '海洋科技事務概論',
    url:'/course?course_name=海洋科技事務概論'
  },
  
  {
    title: '張　懿 ',
    url:'/course?teacher=張　懿 '
  },
  {
    title: '遙測與地理資訊系統應用',
    url:'/course?course_name=遙測與地理資訊系統應用'
  },
  
  {
    title: '戴義欽 ',
    url:'/course?teacher=戴義欽 '
  },
  {
    title: '流體力學（二）',
    url:'/course?course_name=流體力學（二）'
  },
  
  {
    title: '曾宏正 ',
    url:'/course?teacher=曾宏正 '
  },
  {
    title: '測量學實習',
    url:'/course?course_name=測量學實習'
  },
  
  {
    title: '曾宏正 ',
    url:'/course?teacher=曾宏正 '
  },
  {
    title: '測量學',
    url:'/course?course_name=測量學'
  },
  
  {
    title: '蕭士俊 ',
    url:'/course?teacher=蕭士俊 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '羅偉誠 ',
    url:'/course?teacher=羅偉誠 '
  },
  {
    title: '材料力學',
    url:'/course?course_name=材料力學'
  },
  
  {
    title: '羅偉誠 ',
    url:'/course?teacher=羅偉誠 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '孫建平 ',
    url:'/course?teacher=孫建平 '
  },
  {
    title: '水文學',
    url:'/course?course_name=水文學'
  },
  
  {
    title: '楊展其 ',
    url:'/course?teacher=楊展其 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '周晁光 ',
    url:'/course?teacher=周晁光 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '粘珠鳳 ',
    url:'/course?teacher=粘珠鳳 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '蔡佩璇 ',
    url:'/course?teacher=蔡佩璇 '
  },
  {
    title: '即時系統',
    url:'/course?course_name=即時系統'
  },
  
  {
    title: '楊大和 ',
    url:'/course?teacher=楊大和 '
  },
  {
    title: '精實企業系統',
    url:'/course?course_name=精實企業系統'
  },
  
  {
    title: '李家岩 ',
    url:'/course?teacher=李家岩 '
  },
  {
    title: '企業參謀：思考的技術',
    url:'/course?course_name=企業參謀：思考的技術'
  },
  
  {
    title: '蔡佩璇 ',
    url:'/course?teacher=蔡佩璇 '
  },
  {
    title: '網宇實體系統',
    url:'/course?course_name=網宇實體系統'
  },
  
  {
    title: '陳朝鈞 ',
    url:'/course?teacher=陳朝鈞 '
  },
  {
    title: '行動計算與無線資料管理',
    url:'/course?course_name=行動計算與無線資料管理'
  },
  
  {
    title: '楊大和 ',
    url:'/course?teacher=楊大和 '
  },
  {
    title: '製造系統模擬',
    url:'/course?course_name=製造系統模擬'
  },
  
  {
    title: '陳響亮 ',
    url:'/course?teacher=陳響亮 '
  },
  {
    title: 'C#程式設計',
    url:'/course?course_name=C#程式設計'
  },
  
  {
    title: '陳響亮 ',
    url:'/course?teacher=陳響亮 '
  },
  {
    title: '電腦輔助製造',
    url:'/course?course_name=電腦輔助製造'
  },
  
  {
    title: '謝孫源 ',
    url:'/course?teacher=謝孫源 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '涂嘉恒 ',
    url:'/course?teacher=涂嘉恒 '
  },
  {
    title: '虛擬化與虛擬機器之概念與應用',
    url:'/course?course_name=虛擬化與虛擬機器之概念與應用'
  },
  
  {
    title: '胡敏君 ',
    url:'/course?teacher=胡敏君 '
  },
  {
    title: '人機互動技術之應用設計與系統開發',
    url:'/course?course_name=人機互動技術之應用設計與系統開發'
  },
  
  {
    title: '蔡孟勳 ',
    url:'/course?teacher=蔡孟勳 '
  },
  {
    title: '高階競技程式設計',
    url:'/course?course_name=高階競技程式設計'
  },
  
  {
    title: '楊士德 ',
    url:'/course?teacher=楊士德 '
  },
  {
    title: '計算系統醫學專論',
    url:'/course?course_name=計算系統醫學專論'
  },
  
  {
    title: '楊士德 ',
    url:'/course?teacher=楊士德 '
  },
  {
    title: '生物程式設計與巨量轉譯醫學資料分析',
    url:'/course?course_name=生物程式設計與巨量轉譯醫學資料分析'
  },
  
  {
    title: '趙梓程 ',
    url:'/course?teacher=趙梓程 '
  },
  {
    title: '磁共振影像重建與分析技術專論',
    url:'/course?course_name=磁共振影像重建與分析技術專論'
  },
  
  {
    title: '莊坤達 ',
    url:'/course?teacher=莊坤達 '
  },
  {
    title: '巨量圖數據資料庫分析專論',
    url:'/course?course_name=巨量圖數據資料庫分析專論'
  },
  
  {
    title: '林英超 ',
    url:'/course?teacher=林英超 '
  },
  {
    title: 'VLSI設計自動化專論',
    url:'/course?course_name=VLSI設計自動化專論'
  },
  
  {
    title: '藍崑展 ',
    url:'/course?teacher=藍崑展 '
  },
  {
    title: '從自由軟體到物聯網的實踐',
    url:'/course?course_name=從自由軟體到物聯網的實踐'
  },
  
  {
    title: '謝孫源 ',
    url:'/course?teacher=謝孫源 '
  },
  {
    title: '圖形理論',
    url:'/course?course_name=圖形理論'
  },
  
  {
    title: '王士豪 ',
    url:'/course?teacher=王士豪 '
  },
  {
    title: '生醫超音波系統專論',
    url:'/course?course_name=生醫超音波系統專論'
  },
  
  {
    title: '郭耀煌 ',
    url:'/course?teacher=郭耀煌 '
  },
  {
    title: '智慧感知雲端系統與應用設計',
    url:'/course?course_name=智慧感知雲端系統與應用設計'
  },
  
  {
    title: '張大緯 ',
    url:'/course?teacher=張大緯 '
  },
  {
    title: '輸出入裝置與驅動程式設計',
    url:'/course?course_name=輸出入裝置與驅動程式設計'
  },
  
  {
    title: '盧文祥 ',
    url:'/course?teacher=盧文祥 '
  },
  {
    title: '多語暨跨語資訊系統',
    url:'/course?course_name=多語暨跨語資訊系統'
  },
  
  {
    title: '梁勝富 ',
    url:'/course?teacher=梁勝富 '
  },
  {
    title: '神經運算與腦機介面專論',
    url:'/course?course_name=神經運算與腦機介面專論'
  },
  
  {
    title: '連震杰 ',
    url:'/course?teacher=連震杰 '
  },
  {
    title: '機器學習及圖形識別專論',
    url:'/course?course_name=機器學習及圖形識別專論'
  },
  
  {
    title: '張大緯 ',
    url:'/course?teacher=張大緯 '
  },
  {
    title: '作業系統與虛擬機器專論',
    url:'/course?course_name=作業系統與虛擬機器專論'
  },
  
  {
    title: '蕭宏章 ',
    url:'/course?teacher=蕭宏章 '
  },
  {
    title: '機率與算法專論',
    url:'/course?course_name=機率與算法專論'
  },
  
  {
    title: '蕭宏章 ',
    url:'/course?teacher=蕭宏章 '
  },
  {
    title: '分散式系統',
    url:'/course?course_name=分散式系統'
  },
  
  {
    title: '張燕光 ',
    url:'/course?teacher=張燕光 '
  },
  {
    title: '高效能路由器的架構與設計',
    url:'/course?course_name=高效能路由器的架構與設計'
  },
  
  {
    title: '鄭匡佑 ',
    url:'/course?teacher=鄭匡佑 '
  },
  {
    title: '最佳化設計：理論與運動產業及工程之應用',
    url:'/course?course_name=最佳化設計：理論與運動產業及工程之應用'
  },
  
  {
    title: '陳培殷 ',
    url:'/course?teacher=陳培殷 '
  },
  {
    title: '進階數位電路設計專論',
    url:'/course?course_name=進階數位電路設計專論'
  },
  
  {
    title: '蘇銓清 ',
    url:'/course?teacher=蘇銓清 '
  },
  {
    title: '物聯網核心網路技術',
    url:'/course?course_name=物聯網核心網路技術'
  },
  
  {
    title: '許靜芳 ',
    url:'/course?teacher=許靜芳 '
  },
  {
    title: '排隊理論',
    url:'/course?course_name=排隊理論'
  },
  
  {
    title: '蔣榮先 ',
    url:'/course?teacher=蔣榮先 '
  },
  {
    title: '資訊擷取專論',
    url:'/course?course_name=資訊擷取專論'
  },
  
  {
    title: '王駿發 ',
    url:'/course?teacher=王駿發 '
  },
  {
    title: '電腦語音處理專論',
    url:'/course?course_name=電腦語音處理專論'
  },
  
  {
    title: '謝孫源 ',
    url:'/course?teacher=謝孫源 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '黃宗立 ',
    url:'/course?teacher=黃宗立 '
  },
  {
    title: '高等密碼學專論',
    url:'/course?course_name=高等密碼學專論'
  },
  
  {
    title: '李　強 ',
    url:'/course?teacher=李　強 '
  },
  {
    title: '高等資料庫專論',
    url:'/course?course_name=高等資料庫專論'
  },
  
  {
    title: '鄭憲宗 ',
    url:'/course?teacher=鄭憲宗 '
  },
  {
    title: '數位家庭與數位電視科技專論',
    url:'/course?course_name=數位家庭與數位電視科技專論'
  },
  
  {
    title: '鄭憲宗 ',
    url:'/course?teacher=鄭憲宗 '
  },
  {
    title: '智慧感測與行動計算',
    url:'/course?course_name=智慧感測與行動計算'
  },
  
  {
    title: '孫永年 ',
    url:'/course?teacher=孫永年 '
  },
  {
    title: '電腦視覺專題',
    url:'/course?course_name=電腦視覺專題'
  },
  
  {
    title: '謝孫源 ',
    url:'/course?teacher=謝孫源 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '謝奇璋 許育祥*蘇文彬 ',
    url:'/course?teacher=謝奇璋 許育祥*蘇文彬 '
  },
  {
    title: '單株抗體的臨床運用－在癌症及免疫等疾病',
    url:'/course?course_name=單株抗體的臨床運用－在癌症及免疫等疾病'
  },
  
  {
    title: '呂佩融*陳明晟 ',
    url:'/course?teacher=呂佩融*陳明晟 '
  },
  {
    title: '科學論文寫作與報告',
    url:'/course?course_name=科學論文寫作與報告'
  },
  
  {
    title: '劉秉彥*',
    url:'/course?teacher=劉秉彥*'
  },
  {
    title: '心血管疾病機轉及治療趨勢概論',
    url:'/course?course_name=心血管疾病機轉及治療趨勢概論'
  },
  
  {
    title: '林聖翔*',
    url:'/course?teacher=林聖翔*'
  },
  {
    title: '臨床研究資料分析與軟體實務',
    url:'/course?course_name=臨床研究資料分析與軟體實務'
  },
  
  {
    title: '洪澤民 陳玉玲*',
    url:'/course?teacher=洪澤民 陳玉玲*'
  },
  {
    title: '分子腫瘤學書報討論（一）',
    url:'/course?course_name=分子腫瘤學書報討論（一）'
  },
  
  {
    title: '蔡坤哲*',
    url:'/course?teacher=蔡坤哲*'
  },
  {
    title: '神經退化致病機轉',
    url:'/course?course_name=神經退化致病機轉'
  },
  
  {
    title: '洪澤民*',
    url:'/course?teacher=洪澤民*'
  },
  {
    title: '腫瘤生物學特論',
    url:'/course?course_name=腫瘤生物學特論'
  },
  
  {
    title: '許耿福 呂佩融*林聖翔 江伯敏 ',
    url:'/course?teacher=許耿福 呂佩融*林聖翔 江伯敏 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '呂佩融*陳明晟 修臥龍 ',
    url:'/course?teacher=呂佩融*陳明晟 修臥龍 '
  },
  {
    title: '細胞訊息傳遞與新藥開發',
    url:'/course?course_name=細胞訊息傳遞與新藥開發'
  },
  
  {
    title: '張志欽 林聖翔*',
    url:'/course?teacher=張志欽 林聖翔*'
  },
  {
    title: '臨床研究方法(二)：研究設計與臨床應用',
    url:'/course?course_name=臨床研究方法(二)：研究設計與臨床應用'
  },
  
  {
    title: '黃玲惠 蔡坤哲*',
    url:'/course?teacher=黃玲惠 蔡坤哲*'
  },
  {
    title: '再生醫學技術',
    url:'/course?course_name=再生醫學技術'
  },
  
  {
    title: '謝奇璋*許育祥 ',
    url:'/course?teacher=謝奇璋*許育祥 '
  },
  {
    title: '細胞免疫',
    url:'/course?course_name=細胞免疫'
  },
  
  {
    title: '呂佩融*陳明晟 ',
    url:'/course?teacher=呂佩融*陳明晟 '
  },
  {
    title: '轉譯醫學與臨床試驗特論',
    url:'/course?course_name=轉譯醫學與臨床試驗特論'
  },
  
  {
    title: '許耿福 呂佩融*林聖翔 江伯敏 ',
    url:'/course?teacher=許耿福 呂佩融*林聖翔 江伯敏 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '許耿福 呂佩融*林聖翔 江伯敏 ',
    url:'/course?teacher=許耿福 呂佩融*林聖翔 江伯敏 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '洪澤民 蔡坤哲*',
    url:'/course?teacher=洪澤民 蔡坤哲*'
  },
  {
    title: '高等儀器分析（二）',
    url:'/course?course_name=高等儀器分析（二）'
  },
  
  {
    title: '蔡曜聲 蔡坤哲*',
    url:'/course?teacher=蔡曜聲 蔡坤哲*'
  },
  {
    title: '分子細胞學（二）',
    url:'/course?course_name=分子細胞學（二）'
  },
  
  {
    title: '謝奇璋 許育祥*蘇文彬 ',
    url:'/course?teacher=謝奇璋 許育祥*蘇文彬 '
  },
  {
    title: '單株抗體的臨床運用－在癌症及免疫等疾病',
    url:'/course?course_name=單株抗體的臨床運用－在癌症及免疫等疾病'
  },
  
  {
    title: '洪澤民 蔡坤哲*',
    url:'/course?teacher=洪澤民 蔡坤哲*'
  },
  {
    title: '高等儀器分析（二）',
    url:'/course?course_name=高等儀器分析（二）'
  },
  
  {
    title: '呂佩融*陳明晟 ',
    url:'/course?teacher=呂佩融*陳明晟 '
  },
  {
    title: '科學論文寫作與報告',
    url:'/course?course_name=科學論文寫作與報告'
  },
  
  {
    title: '洪澤民 陳玉玲*',
    url:'/course?teacher=洪澤民 陳玉玲*'
  },
  {
    title: '分子腫瘤學書報討論（一）',
    url:'/course?course_name=分子腫瘤學書報討論（一）'
  },
  
  {
    title: '林聖翔*',
    url:'/course?teacher=林聖翔*'
  },
  {
    title: '臨床研究資料分析與軟體實務',
    url:'/course?course_name=臨床研究資料分析與軟體實務'
  },
  
  {
    title: '蔡坤哲*',
    url:'/course?teacher=蔡坤哲*'
  },
  {
    title: '神經退化致病機轉',
    url:'/course?course_name=神經退化致病機轉'
  },
  
  {
    title: '洪澤民*',
    url:'/course?teacher=洪澤民*'
  },
  {
    title: '腫瘤生物學特論',
    url:'/course?course_name=腫瘤生物學特論'
  },
  
  {
    title: '張志欽 林聖翔*',
    url:'/course?teacher=張志欽 林聖翔*'
  },
  {
    title: '臨床研究方法(二)：研究設計與臨床應用',
    url:'/course?course_name=臨床研究方法(二)：研究設計與臨床應用'
  },
  
  {
    title: '劉秉彥*',
    url:'/course?teacher=劉秉彥*'
  },
  {
    title: '心血管疾病機轉及治療趨勢概論',
    url:'/course?course_name=心血管疾病機轉及治療趨勢概論'
  },
  
  {
    title: '謝奇璋*許育祥 ',
    url:'/course?teacher=謝奇璋*許育祥 '
  },
  {
    title: '細胞免疫',
    url:'/course?course_name=細胞免疫'
  },
  
  {
    title: '江伯敏 陳芃潔*',
    url:'/course?teacher=江伯敏 陳芃潔*'
  },
  {
    title: '生物技術特論（四）',
    url:'/course?course_name=生物技術特論（四）'
  },
  
  {
    title: '呂佩融*陳明晟 修臥龍 ',
    url:'/course?teacher=呂佩融*陳明晟 修臥龍 '
  },
  {
    title: '細胞訊息傳遞與新藥開發',
    url:'/course?course_name=細胞訊息傳遞與新藥開發'
  },
  
  {
    title: '鄭宏祺 姜學誠 顏賢章 凌　斌 張志鵬 郭余民*',
    url:'/course?teacher=鄭宏祺 姜學誠 顏賢章 凌　斌 張志鵬 郭余民*'
  },
  {
    title: '細胞生物學特論（二）',
    url:'/course?course_name=細胞生物學特論（二）'
  },
  
  {
    title: '郭浩然*張志欽 簡玉雯 ',
    url:'/course?teacher=郭浩然*張志欽 簡玉雯 '
  },
  {
    title: '實用流行病學',
    url:'/course?course_name=實用流行病學'
  },
  
  {
    title: '黃玲惠 蔡坤哲*',
    url:'/course?teacher=黃玲惠 蔡坤哲*'
  },
  {
    title: '再生醫學技術',
    url:'/course?course_name=再生醫學技術'
  },
  
  {
    title: '蔡曜聲 蔡坤哲*',
    url:'/course?teacher=蔡曜聲 蔡坤哲*'
  },
  {
    title: '分子細胞學（二）',
    url:'/course?course_name=分子細胞學（二）'
  },
  
  {
    title: '呂佩融*陳明晟 ',
    url:'/course?teacher=呂佩融*陳明晟 '
  },
  {
    title: '轉譯醫學與臨床試驗特論',
    url:'/course?course_name=轉譯醫學與臨床試驗特論'
  },
  
  {
    title: '蔡曜聲*沈延盛 許育祥 修臥龍 ',
    url:'/course?teacher=蔡曜聲*沈延盛 許育祥 修臥龍 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '張孔昭 顏家瑞 蔡坤哲 蘇文彬*',
    url:'/course?teacher=張孔昭 顏家瑞 蔡坤哲 蘇文彬*'
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '張孔昭 顏家瑞 蔡坤哲 蘇文彬*',
    url:'/course?teacher=張孔昭 顏家瑞 蔡坤哲 蘇文彬*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '張孔昭 顏家瑞 蔡坤哲 蘇文彬*',
    url:'/course?teacher=張孔昭 顏家瑞 蔡坤哲 蘇文彬*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '蔡曜聲*沈延盛 許育祥 修臥龍 ',
    url:'/course?teacher=蔡曜聲*沈延盛 許育祥 修臥龍 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '蔡曜聲*沈延盛 許育祥 修臥龍 ',
    url:'/course?teacher=蔡曜聲*沈延盛 許育祥 修臥龍 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '吳銘志 ',
    url:'/course?teacher=吳銘志 '
  },
  {
    title: '書報討論',
    url:'/course?course_name=書報討論'
  },
  
  {
    title: '羅尚德 ',
    url:'/course?teacher=羅尚德 '
  },
  {
    title: '分析地球化學',
    url:'/course?course_name=分析地球化學'
  },
  
  {
    title: '游鎮烽 ',
    url:'/course?teacher=游鎮烽 '
  },
  {
    title: '論文（二）',
    url:'/course?course_name=論文（二）'
  },
  
  {
    title: '袁彼得 ',
    url:'/course?teacher=袁彼得 '
  },
  {
    title: '沉積地層學',
    url:'/course?course_name=沉積地層學'
  },
  
  {
    title: '陳佳宏 ',
    url:'/course?teacher=陳佳宏 '
  },
  {
    title: '大氣資料處理、分析與展示',
    url:'/course?course_name=大氣資料處理、分析與展示'
  },
  
  {
    title: '吳銘志 ',
    url:'/course?teacher=吳銘志 '
  },
  {
    title: '環境地質工程',
    url:'/course?course_name=環境地質工程'
  },
  
  {
    title: '李恩瑞 ',
    url:'/course?teacher=李恩瑞 '
  },
  {
    title: '地球物理學概論',
    url:'/course?course_name=地球物理學概論'
  },
  
  {
    title: '游鎮烽 ',
    url:'/course?teacher=游鎮烽 '
  },
  {
    title: '地球化學',
    url:'/course?course_name=地球化學'
  },
  
  {
    title: '陳燕華 ',
    url:'/course?teacher=陳燕華 '
  },
  {
    title: '寶石礦物學',
    url:'/course?course_name=寶石礦物學'
  },
  
  {
    title: '許瑞榮 ',
    url:'/course?teacher=許瑞榮 '
  },
  {
    title: '天文學',
    url:'/course?course_name=天文學'
  },
  
  {
    title: '林冠瑋 李恩瑞 ',
    url:'/course?teacher=林冠瑋 李恩瑞 '
  },
  {
    title: '野外地質訓練(一)',
    url:'/course?course_name=野外地質訓練(一)'
  },
  
  {
    title: '吳銘志 ',
    url:'/course?teacher=吳銘志 '
  },
  {
    title: '地形學',
    url:'/course?course_name=地形學'
  },
  
  {
    title: '劉正千 ',
    url:'/course?teacher=劉正千 '
  },
  {
    title: '衛星遙測概論',
    url:'/course?course_name=衛星遙測概論'
  },
  
  {
    title: '江威德 ',
    url:'/course?teacher=江威德 '
  },
  {
    title: '礦物學實習（二）',
    url:'/course?course_name=礦物學實習（二）'
  },
  
  {
    title: '林慶偉 ',
    url:'/course?teacher=林慶偉 '
  },
  {
    title: '構造地質學實習',
    url:'/course?course_name=構造地質學實習'
  },
  
  {
    title: '林慶偉 ',
    url:'/course?teacher=林慶偉 '
  },
  {
    title: '構造地質學',
    url:'/course?course_name=構造地質學'
  },
  
  {
    title: '楊懷仁 ',
    url:'/course?teacher=楊懷仁 '
  },
  {
    title: '岩石學實習',
    url:'/course?course_name=岩石學實習'
  },
  
  {
    title: '楊懷仁*龔慧貞 ',
    url:'/course?teacher=楊懷仁*龔慧貞 '
  },
  {
    title: '岩石學',
    url:'/course?course_name=岩石學'
  },
  
  {
    title: '楊耿明 ',
    url:'/course?teacher=楊耿明 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '江孟蓉 ',
    url:'/course?teacher=江孟蓉 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '鄭沐政 ',
    url:'/course?teacher=鄭沐政 '
  },
  {
    title: '普通化學實驗（二）',
    url:'/course?course_name=普通化學實驗（二）'
  },
  
  {
    title: '黃福永*林弘萍 吳欣倫 ',
    url:'/course?teacher=黃福永*林弘萍 吳欣倫 '
  },
  {
    title: '普通化學（二）',
    url:'/course?course_name=普通化學（二）'
  },
  
  {
    title: '楊毅 ',
    url:'/course?teacher=楊毅 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '楊毅 ',
    url:'/course?teacher=楊毅 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '龔慧貞 林冠瑋 ',
    url:'/course?teacher=龔慧貞 林冠瑋 '
  },
  {
    title: '地球科學概論實習（二）',
    url:'/course?course_name=地球科學概論實習（二）'
  },
  
  {
    title: '龔慧貞 林冠瑋 ',
    url:'/course?teacher=龔慧貞 林冠瑋 '
  },
  {
    title: '地球科學概論（二）',
    url:'/course?course_name=地球科學概論（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '陳德祐 ',
    url:'/course?teacher=陳德祐 '
  },
  {
    title: '學習記憶神經生物學',
    url:'/course?course_name=學習記憶神經生物學'
  },
  
  {
    title: '黃柏僩 ',
    url:'/course?teacher=黃柏僩 '
  },
  {
    title: '統計機器學習與應用',
    url:'/course?course_name=統計機器學習與應用'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '助人技巧理論與實務',
    url:'/course?course_name=助人技巧理論與實務'
  },
  
  {
    title: '黃碧群 ',
    url:'/course?teacher=黃碧群 '
  },
  {
    title: '心理學家的MATLAB',
    url:'/course?course_name=心理學家的MATLAB'
  },
  
  {
    title: '龔俊嘉 ',
    url:'/course?teacher=龔俊嘉 '
  },
  {
    title: '認知神經科學與電影',
    url:'/course?course_name=認知神經科學與電影'
  },
  
  {
    title: '陳欣進 ',
    url:'/course?teacher=陳欣進 '
  },
  {
    title: 'Eprime程式設計與心理學儀器應用',
    url:'/course?course_name=Eprime程式設計與心理學儀器應用'
  },
  
  {
    title: '楊政達 ',
    url:'/course?teacher=楊政達 '
  },
  {
    title: '體驗劇場',
    url:'/course?course_name=體驗劇場'
  },
  
  {
    title: '郭乃文 黃惠玲 余睿羚 ',
    url:'/course?teacher=郭乃文 黃惠玲 余睿羚 '
  },
  {
    title: '變態心理學',
    url:'/course?course_name=變態心理學'
  },
  
  {
    title: '龔俊嘉 謝淑蘭*楊政達 林君昱 鄭中平 胡書榕 黃碧群 陳德祐 黃柏僩 ',
    url:'/course?teacher=龔俊嘉 謝淑蘭*楊政達 林君昱 鄭中平 胡書榕 黃碧群 陳德祐 黃柏僩 '
  },
  {
    title: '專題研究（二）',
    url:'/course?course_name=專題研究（二）'
  },
  
  {
    title: '周麗芳 ',
    url:'/course?teacher=周麗芳 '
  },
  {
    title: '社會心理學',
    url:'/course?course_name=社會心理學'
  },
  
  {
    title: '黃碧群 ',
    url:'/course?teacher=黃碧群 '
  },
  {
    title: '感覺與知覺',
    url:'/course?course_name=感覺與知覺'
  },
  
  {
    title: '邱文泰*張雅雯 ',
    url:'/course?teacher=邱文泰*張雅雯 '
  },
  {
    title: '生理學',
    url:'/course?course_name=生理學'
  },
  
  {
    title: '謝淑蘭 ',
    url:'/course?teacher=謝淑蘭 '
  },
  {
    title: '認知心理學',
    url:'/course?course_name=認知心理學'
  },
  
  {
    title: '胡中凡 ',
    url:'/course?teacher=胡中凡 '
  },
  {
    title: '發展心理學',
    url:'/course?course_name=發展心理學'
  },
  
  {
    title: '林君昱*吳瑞屯 ',
    url:'/course?teacher=林君昱*吳瑞屯 '
  },
  {
    title: '心理實驗法（二）',
    url:'/course?course_name=心理實驗法（二）'
  },
  
  {
    title: '胡書榕 邱文泰 ',
    url:'/course?teacher=胡書榕 邱文泰 '
  },
  {
    title: '普通生物學',
    url:'/course?course_name=普通生物學'
  },
  
  {
    title: '鄭中平 ',
    url:'/course?teacher=鄭中平 '
  },
  {
    title: '心理與教育統計學（二）',
    url:'/course?course_name=心理與教育統計學（二）'
  },
  
  {
    title: '謝淑蘭*周麗芳 胡中凡 陳德祐 黃柏僩 ',
    url:'/course?teacher=謝淑蘭*周麗芳 胡中凡 陳德祐 黃柏僩 '
  },
  {
    title: '心理學概論（二）',
    url:'/course?course_name=心理學概論（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '侯世章 ',
    url:'/course?teacher=侯世章 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '林敏雄 ',
    url:'/course?teacher=林敏雄 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '劉育佑 ',
    url:'/course?teacher=劉育佑 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '胡書榕 ',
    url:'/course?teacher=胡書榕 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '蔡俊鴻 ',
    url:'/course?teacher=蔡俊鴻 '
  },
  {
    title: '高科技產業安全與環境保護',
    url:'/course?course_name=高科技產業安全與環境保護'
  },
  
  {
    title: '周佩欣 ',
    url:'/course?teacher=周佩欣 '
  },
  {
    title: '環境毒物學',
    url:'/course?course_name=環境毒物學'
  },
  
  {
    title: '林財富 ',
    url:'/course?teacher=林財富 '
  },
  {
    title: '環工物理原理概論',
    url:'/course?course_name=環工物理原理概論'
  },
  
  {
    title: '黃良銘*侯文哲 ',
    url:'/course?teacher=黃良銘*侯文哲 '
  },
  {
    title: '水處理工程',
    url:'/course?course_name=水處理工程'
  },
  
  {
    title: '張祖恩 ',
    url:'/course?teacher=張祖恩 '
  },
  {
    title: '固體廢棄物工程',
    url:'/course?course_name=固體廢棄物工程'
  },
  
  {
    title: '侯琮欽 ',
    url:'/course?teacher=侯琮欽 '
  },
  {
    title: '鋼筋混凝土',
    url:'/course?course_name=鋼筋混凝土'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '論文（一）',
    url:'/course?course_name=論文（一）'
  },
  
  {
    title: '林達昌*陳如 ',
    url:'/course?teacher=林達昌*陳如 '
  },
  {
    title: '環境分析與實驗（一）',
    url:'/course?course_name=環境分析與實驗（一）'
  },
  
  {
    title: '林達昌*陳如 ',
    url:'/course?teacher=林達昌*陳如 '
  },
  {
    title: '環境分析與實驗（一）',
    url:'/course?course_name=環境分析與實驗（一）'
  },
  
  {
    title: '林達昌*陳如 ',
    url:'/course?teacher=林達昌*陳如 '
  },
  {
    title: '環境分析與實驗（一）',
    url:'/course?course_name=環境分析與實驗（一）'
  },
  
  {
    title: '林達昌*陳如 ',
    url:'/course?teacher=林達昌*陳如 '
  },
  {
    title: '環境分析與實驗（一）',
    url:'/course?course_name=環境分析與實驗（一）'
  },
  
  {
    title: '孫建平 ',
    url:'/course?teacher=孫建平 '
  },
  {
    title: '水文學',
    url:'/course?course_name=水文學'
  },
  
  {
    title: '呂珍謀 ',
    url:'/course?teacher=呂珍謀 '
  },
  {
    title: '流體力學實驗',
    url:'/course?course_name=流體力學實驗'
  },
  
  {
    title: '呂珍謀 ',
    url:'/course?teacher=呂珍謀 '
  },
  {
    title: '流體力學實驗',
    url:'/course?course_name=流體力學實驗'
  },
  
  {
    title: '盧達生 ',
    url:'/course?teacher=盧達生 '
  },
  {
    title: '電子及電工學',
    url:'/course?course_name=電子及電工學'
  },
  
  {
    title: '王彬 ',
    url:'/course?teacher=王彬 '
  },
  {
    title: '材料力學',
    url:'/course?course_name=材料力學'
  },
  
  {
    title: '吳義林 ',
    url:'/course?teacher=吳義林 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '黃良銘 ',
    url:'/course?teacher=黃良銘 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '張智華 ',
    url:'/course?teacher=張智華 '
  },
  {
    title: '計算機語言',
    url:'/course?course_name=計算機語言'
  },
  
  {
    title: '黃守仁 ',
    url:'/course?teacher=黃守仁 '
  },
  {
    title: '普通化學實驗（二）',
    url:'/course?course_name=普通化學實驗（二）'
  },
  
  {
    title: '林榮良*吳欣倫 ',
    url:'/course?teacher=林榮良*吳欣倫 '
  },
  {
    title: '普通化學（二）',
    url:'/course?course_name=普通化學（二）'
  },
  
  {
    title: '呂欽山 ',
    url:'/course?teacher=呂欽山 '
  },
  {
    title: '普通物理學實驗',
    url:'/course?course_name=普通物理學實驗'
  },
  
  {
    title: '呂欽山 ',
    url:'/course?teacher=呂欽山 '
  },
  {
    title: '普通物理學',
    url:'/course?course_name=普通物理學'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '楊世偉 ',
    url:'/course?teacher=楊世偉 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '能源策略',
    url:'/course?course_name=能源策略'
  },
  
  {
    title: '黃偉茹 ',
    url:'/course?teacher=黃偉茹 '
  },
  {
    title: '空間政治經濟學',
    url:'/course?course_name=空間政治經濟學'
  },
  
  {
    title: '劉正千 ',
    url:'/course?teacher=劉正千 '
  },
  {
    title: '衛星遙測概論',
    url:'/course?course_name=衛星遙測概論'
  },
  
  {
    title: '孔憲法 ',
    url:'/course?teacher=孔憲法 '
  },
  {
    title: '論文（二）',
    url:'/course?course_name=論文（二）'
  },
  
  {
    title: '趙子元 ',
    url:'/course?teacher=趙子元 '
  },
  {
    title: '校外實習',
    url:'/course?course_name=校外實習'
  },
  
  {
    title: '謝宏昌 趙子元*林漢良 ',
    url:'/course?teacher=謝宏昌 趙子元*林漢良 '
  },
  {
    title: '都市規劃與設計實習（五）',
    url:'/course?course_name=都市規劃與設計實習（五）'
  },
  
  {
    title: '謝宏昌 趙子元*林漢良 ',
    url:'/course?teacher=謝宏昌 趙子元*林漢良 '
  },
  {
    title: '都市規劃與設計實習（五）',
    url:'/course?course_name=都市規劃與設計實習（五）'
  },
  
  {
    title: '石豐宇 ',
    url:'/course?teacher=石豐宇 '
  },
  {
    title: '運輸系統經營管理',
    url:'/course?course_name=運輸系統經營管理'
  },
  
  {
    title: '黃泰霖 ',
    url:'/course?teacher=黃泰霖 '
  },
  {
    title: '都市防災',
    url:'/course?course_name=都市防災'
  },
  
  {
    title: '王煦中 ',
    url:'/course?teacher=王煦中 '
  },
  {
    title: '都市美學',
    url:'/course?course_name=都市美學'
  },
  
  {
    title: '趙子元 ',
    url:'/course?teacher=趙子元 '
  },
  {
    title: '都市及區域計劃法規',
    url:'/course?course_name=都市及區域計劃法規'
  },
  
  {
    title: '葉如萍 鄒克萬*',
    url:'/course?teacher=葉如萍 鄒克萬*'
  },
  {
    title: '都市財政學',
    url:'/course?course_name=都市財政學'
  },
  
  {
    title: '張學聖 葉如萍*蘇勤惠 ',
    url:'/course?teacher=張學聖 葉如萍*蘇勤惠 '
  },
  {
    title: '都市規劃與設計實習（三）',
    url:'/course?course_name=都市規劃與設計實習（三）'
  },
  
  {
    title: '張學聖 葉如萍*蘇勤惠 ',
    url:'/course?teacher=張學聖 葉如萍*蘇勤惠 '
  },
  {
    title: '都市規劃與設計實習（三）',
    url:'/course?course_name=都市規劃與設計實習（三）'
  },
  
  {
    title: '陳香綾 ',
    url:'/course?teacher=陳香綾 '
  },
  {
    title: '電腦繪圖',
    url:'/course?course_name=電腦繪圖'
  },
  
  {
    title: '吳銘志 ',
    url:'/course?teacher=吳銘志 '
  },
  {
    title: '地形學',
    url:'/course?course_name=地形學'
  },
  
  {
    title: '竇國昌 ',
    url:'/course?teacher=竇國昌 '
  },
  {
    title: '社區計劃',
    url:'/course?course_name=社區計劃'
  },
  
  {
    title: '孔憲法 ',
    url:'/course?teacher=孔憲法 '
  },
  {
    title: '都市發展史',
    url:'/course?course_name=都市發展史'
  },
  
  {
    title: '林漢良 ',
    url:'/course?teacher=林漢良 '
  },
  {
    title: '地理資訊系統概論',
    url:'/course?course_name=地理資訊系統概論'
  },
  
  {
    title: '李子璋 ',
    url:'/course?teacher=李子璋 '
  },
  {
    title: '都市交通計劃',
    url:'/course?course_name=都市交通計劃'
  },
  
  {
    title: '陳彥仲 ',
    url:'/course?teacher=陳彥仲 '
  },
  {
    title: '都市經濟學',
    url:'/course?course_name=都市經濟學'
  },
  
  {
    title: '李子璋*黃偉茹 胡太山 ',
    url:'/course?teacher=李子璋*黃偉茹 胡太山 '
  },
  {
    title: '都市規劃與設計實習（二）',
    url:'/course?course_name=都市規劃與設計實習（二）'
  },
  
  {
    title: '李子璋*黃偉茹 胡太山 ',
    url:'/course?teacher=李子璋*黃偉茹 胡太山 '
  },
  {
    title: '都市規劃與設計實習（二）',
    url:'/course?course_name=都市規劃與設計實習（二）'
  },
  
  {
    title: '陳日昇 ',
    url:'/course?teacher=陳日昇 '
  },
  {
    title: '計算機概論',
    url:'/course?course_name=計算機概論'
  },
  
  {
    title: '曾憲嫻 蔡振芳 陳志宏*黃泰霖 ',
    url:'/course?teacher=曾憲嫻 蔡振芳 陳志宏*黃泰霖 '
  },
  {
    title: '基本設計（二）',
    url:'/course?course_name=基本設計（二）'
  },
  
  {
    title: '曾憲嫻 蔡振芳 陳志宏*黃泰霖 ',
    url:'/course?teacher=曾憲嫻 蔡振芳 陳志宏*黃泰霖 '
  },
  {
    title: '基本設計（二）',
    url:'/course?course_name=基本設計（二）'
  },
  
  {
    title: '謝宏昌 ',
    url:'/course?teacher=謝宏昌 '
  },
  {
    title: '都市社會學',
    url:'/course?course_name=都市社會學'
  },
  
  {
    title: '石豐宇 ',
    url:'/course?teacher=石豐宇 '
  },
  {
    title: '統計學',
    url:'/course?course_name=統計學'
  },
  
  {
    title: '謝文真 ',
    url:'/course?teacher=謝文真 '
  },
  {
    title: '經濟學',
    url:'/course?course_name=經濟學'
  },
  
  {
    title: '陳志宏 ',
    url:'/course?teacher=陳志宏 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '稅法專題研究',
    url:'/course?course_name=稅法專題研究'
  },
  
  {
    title: '王士帆 ',
    url:'/course?teacher=王士帆 '
  },
  {
    title: '德國聯邦最高法院刑事裁判專題研究（一）',
    url:'/course?course_name=德國聯邦最高法院刑事裁判專題研究（一）'
  },
  
  {
    title: '葉婉如 ',
    url:'/course?teacher=葉婉如 '
  },
  {
    title: '民事責任法專題研究（三）',
    url:'/course?course_name=民事責任法專題研究（三）'
  },
  
  {
    title: '顏雅倫 ',
    url:'/course?teacher=顏雅倫 '
  },
  {
    title: '比較競爭法專題研究（二）',
    url:'/course?course_name=比較競爭法專題研究（二）'
  },
  
  {
    title: '邵靖惠 ',
    url:'/course?teacher=邵靖惠 '
  },
  {
    title: '法律經濟分析專題研究（一）',
    url:'/course?course_name=法律經濟分析專題研究（一）'
  },
  
  {
    title: '陳思廷 ',
    url:'/course?teacher=陳思廷 '
  },
  {
    title: '電影產業與法律專題研究（一）',
    url:'/course?course_name=電影產業與法律專題研究（一）'
  },
  
  {
    title: '陳怡凱 ',
    url:'/course?teacher=陳怡凱 '
  },
  {
    title: '國際人權法專題研究（一）',
    url:'/course?course_name=國際人權法專題研究（一）'
  },
  
  {
    title: '許登科 ',
    url:'/course?teacher=許登科 '
  },
  {
    title: '國家、科技社會與行政法專題研究（一）',
    url:'/course?course_name=國家、科技社會與行政法專題研究（一）'
  },
  
  {
    title: '古承宗 ',
    url:'/course?teacher=古承宗 '
  },
  {
    title: '刑事法與刑事政策專題研究（一）',
    url:'/course?course_name=刑事法與刑事政策專題研究（一）'
  },
  
  {
    title: '許澤天 ',
    url:'/course?teacher=許澤天 '
  },
  {
    title: '刑事法基礎理論專題研究（一）',
    url:'/course?course_name=刑事法基礎理論專題研究（一）'
  },
  
  {
    title: '林易典 ',
    url:'/course?teacher=林易典 '
  },
  {
    title: '身分法專題研究（四）',
    url:'/course?course_name=身分法專題研究（四）'
  },
  
  {
    title: '王毓正 ',
    url:'/course?teacher=王毓正 '
  },
  {
    title: '環境法專題研究（四）',
    url:'/course?course_name=環境法專題研究（四）'
  },
  
  {
    title: '郭書琴 ',
    url:'/course?teacher=郭書琴 '
  },
  {
    title: '民事訴訟法專題研究（三）',
    url:'/course?course_name=民事訴訟法專題研究（三）'
  },
  
  {
    title: '王效文 ',
    url:'/course?teacher=王效文 '
  },
  {
    title: '刑法專題研究（四）',
    url:'/course?course_name=刑法專題研究（四）'
  },
  
  {
    title: '李佳玟 ',
    url:'/course?teacher=李佳玟 '
  },
  {
    title: '刑事訴訟法專題研究（三）',
    url:'/course?course_name=刑事訴訟法專題研究（三）'
  },
  
  {
    title: '陳運財 ',
    url:'/course?teacher=陳運財 '
  },
  {
    title: '刑事證據法專題研究（二）',
    url:'/course?course_name=刑事證據法專題研究（二）'
  },
  
  {
    title: '侯英泠 ',
    url:'/course?teacher=侯英泠 '
  },
  {
    title: '醫事民法專題研究（二）',
    url:'/course?course_name=醫事民法專題研究（二）'
  },
  
  {
    title: '許忠信 ',
    url:'/course?teacher=許忠信 '
  },
  {
    title: '國際金融法專題研究（四）',
    url:'/course?course_name=國際金融法專題研究（四）'
  },
  
  {
    title: '許忠信 ',
    url:'/course?teacher=許忠信 '
  },
  {
    title: '智慧財產權法律與實務專題研究（四）',
    url:'/course?course_name=智慧財產權法律與實務專題研究（四）'
  },
  
  {
    title: '蔡維音 ',
    url:'/course?teacher=蔡維音 '
  },
  {
    title: '社會福利法專題研究（二）',
    url:'/course?course_name=社會福利法專題研究（二）'
  },
  
  {
    title: '陳俊仁 ',
    url:'/course?teacher=陳俊仁 '
  },
  {
    title: '證券交易法專題研究（一）',
    url:'/course?course_name=證券交易法專題研究（一）'
  },
  
  {
    title: '蔡志方 ',
    url:'/course?teacher=蔡志方 '
  },
  {
    title: '魚類養殖與捕魚之法律問題研究',
    url:'/course?course_name=魚類養殖與捕魚之法律問題研究'
  },
  
  {
    title: '蔡志方 ',
    url:'/course?teacher=蔡志方 '
  },
  {
    title: '法學方法論（二）',
    url:'/course?course_name=法學方法論（二）'
  },
  
  {
    title: '許育典 ',
    url:'/course?teacher=許育典 '
  },
  {
    title: '憲法專題研究（二）',
    url:'/course?course_name=憲法專題研究（二）'
  },
  
  {
    title: '陳俊郎 ',
    url:'/course?teacher=陳俊郎 '
  },
  {
    title: '日本法學名著選讀（二）',
    url:'/course?course_name=日本法學名著選讀（二）'
  },
  
  {
    title: '王士帆 ',
    url:'/course?teacher=王士帆 '
  },
  {
    title: '刑事法法學德文（四）',
    url:'/course?course_name=刑事法法學德文（四）'
  },
  
  {
    title: '陳思廷 ',
    url:'/course?teacher=陳思廷 '
  },
  {
    title: '法學法文（二）',
    url:'/course?course_name=法學法文（二）'
  },
  
  {
    title: '侯英泠 ',
    url:'/course?teacher=侯英泠 '
  },
  {
    title: '民商法法學德文（三）',
    url:'/course?course_name=民商法法學德文（三）'
  },
  
  {
    title: '陳運財 ',
    url:'/course?teacher=陳運財 '
  },
  {
    title: '日本司法權獨立重要案例選讀（二）',
    url:'/course?course_name=日本司法權獨立重要案例選讀（二）'
  },
  
  {
    title: '陳俊仁 ',
    url:'/course?teacher=陳俊仁 '
  },
  {
    title: '美國法學名著選讀（四）',
    url:'/course?course_name=美國法學名著選讀（四）'
  },
  
  {
    title: '許育典 ',
    url:'/course?teacher=許育典 '
  },
  {
    title: '德國法學名著選讀（三）',
    url:'/course?course_name=德國法學名著選讀（三）'
  },
  
  {
    title: '許登科 ',
    url:'/course?teacher=許登科 '
  },
  {
    title: '法律文件寫作（一）',
    url:'/course?course_name=法律文件寫作（一）'
  },
  
  {
    title: '陳思廷 ',
    url:'/course?teacher=陳思廷 '
  },
  {
    title: '智慧財產權與案例研究',
    url:'/course?course_name=智慧財產權與案例研究'
  },
  
  {
    title: '蔡維音 ',
    url:'/course?teacher=蔡維音 '
  },
  {
    title: '大法官解釋案例解析',
    url:'/course?course_name=大法官解釋案例解析'
  },
  
  {
    title: '陳俊仁 ',
    url:'/course?teacher=陳俊仁 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '張克勤 ',
    url:'/course?teacher=張克勤 '
  },
  {
    title: '工程分析',
    url:'/course?course_name=工程分析'
  },
  
  {
    title: '呂宗行 ',
    url:'/course?teacher=呂宗行 '
  },
  {
    title: '應用空氣動力學',
    url:'/course?course_name=應用空氣動力學'
  },
  
  {
    title: '夏育群 ',
    url:'/course?teacher=夏育群 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '夏育群 ',
    url:'/course?teacher=夏育群 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '夏育群 ',
    url:'/course?teacher=夏育群 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '鄭泗滄 ',
    url:'/course?teacher=鄭泗滄 '
  },
  {
    title: '複合材料力學',
    url:'/course?course_name=複合材料力學'
  },
  
  {
    title: '崔兆棠 ',
    url:'/course?teacher=崔兆棠 '
  },
  {
    title: '板殼理論',
    url:'/course?course_name=板殼理論'
  },
  
  {
    title: '胡潛濱 ',
    url:'/course?teacher=胡潛濱 '
  },
  {
    title: '結構最佳化設計',
    url:'/course?course_name=結構最佳化設計'
  },
  
  {
    title: '江達雲 ',
    url:'/course?teacher=江達雲 '
  },
  {
    title: '彈性力學',
    url:'/course?course_name=彈性力學'
  },
  
  {
    title: '楊世銘 ',
    url:'/course?teacher=楊世銘 '
  },
  {
    title: '智慧結構系統特論',
    url:'/course?course_name=智慧結構系統特論'
  },
  
  {
    title: '黃啟鐘 ',
    url:'/course?teacher=黃啟鐘 '
  },
  {
    title: '邊界層理論',
    url:'/course?course_name=邊界層理論'
  },
  
  {
    title: '陳文立 ',
    url:'/course?teacher=陳文立 '
  },
  {
    title: '氣體動力學',
    url:'/course?course_name=氣體動力學'
  },
  
  {
    title: '潘大知 ',
    url:'/course?teacher=潘大知 '
  },
  {
    title: '基因演算於工程最佳化之應用',
    url:'/course?course_name=基因演算於工程最佳化之應用'
  },
  
  {
    title: '陳世雄 ',
    url:'/course?teacher=陳世雄 '
  },
  {
    title: '航空發動機設計',
    url:'/course?course_name=航空發動機設計'
  },
  
  {
    title: '陳世雄 ',
    url:'/course?teacher=陳世雄 '
  },
  {
    title: '風能利用與風力發電',
    url:'/course?course_name=風能利用與風力發電'
  },
  
  {
    title: '陳文立 ',
    url:'/course?teacher=陳文立 '
  },
  {
    title: '數值分析',
    url:'/course?course_name=數值分析'
  },
  
  {
    title: '苗君易 ',
    url:'/course?teacher=苗君易 '
  },
  {
    title: '紊流學',
    url:'/course?course_name=紊流學'
  },
  
  {
    title: '林三益 ',
    url:'/course?teacher=林三益 '
  },
  {
    title: '計算流體力學（二）',
    url:'/course?course_name=計算流體力學（二）'
  },
  
  {
    title: '林穎裕 ',
    url:'/course?teacher=林穎裕 '
  },
  {
    title: '高等動力學',
    url:'/course?course_name=高等動力學'
  },
  
  {
    title: '許棟龍 ',
    url:'/course?teacher=許棟龍 '
  },
  {
    title: '飛具穩定控制',
    url:'/course?course_name=飛具穩定控制'
  },
  
  {
    title: '林穎裕 ',
    url:'/course?teacher=林穎裕 '
  },
  {
    title: '最佳控制原理',
    url:'/course?course_name=最佳控制原理'
  },
  
  {
    title: '譚俊豪 ',
    url:'/course?teacher=譚俊豪 '
  },
  {
    title: '高等線性系統',
    url:'/course?course_name=高等線性系統'
  },
  
  {
    title: '譚俊豪 ',
    url:'/course?teacher=譚俊豪 '
  },
  {
    title: '互動式學習理論與應用',
    url:'/course?course_name=互動式學習理論與應用'
  },
  
  {
    title: '楊憲東 ',
    url:'/course?teacher=楊憲東 '
  },
  {
    title: '量子控制',
    url:'/course?course_name=量子控制'
  },
  
  {
    title: '李定智 ',
    url:'/course?teacher=李定智 '
  },
  {
    title: '熱對流學',
    url:'/course?course_name=熱對流學'
  },
  
  {
    title: '王覺寬 ',
    url:'/course?teacher=王覺寬 '
  },
  {
    title: '物理氣體動力學',
    url:'/course?course_name=物理氣體動力學'
  },
  
  {
    title: '趙怡欽 ',
    url:'/course?teacher=趙怡欽 '
  },
  {
    title: '流場動態量測法',
    url:'/course?course_name=流場動態量測法'
  },
  
  {
    title: '趙怡欽 ',
    url:'/course?teacher=趙怡欽 '
  },
  {
    title: '燃燒理論（二）',
    url:'/course?course_name=燃燒理論（二）'
  },
  
  {
    title: '江滄柳 ',
    url:'/course?teacher=江滄柳 '
  },
  {
    title: '數值熱傳',
    url:'/course?course_name=數值熱傳'
  },
  
  {
    title: '江滄柳 ',
    url:'/course?teacher=江滄柳 '
  },
  {
    title: '火箭推進',
    url:'/course?course_name=火箭推進'
  },
  
  {
    title: '王覺寬 ',
    url:'/course?teacher=王覺寬 '
  },
  {
    title: '工程聲學（一）',
    url:'/course?course_name=工程聲學（一）'
  },
  
  {
    title: '王振源 ',
    url:'/course?teacher=王振源 '
  },
  {
    title: '微擾方法',
    url:'/course?course_name=微擾方法'
  },
  
  {
    title: '賴維祥 ',
    url:'/course?teacher=賴維祥 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '詹劭勳*景鴻鑫 ',
    url:'/course?teacher=詹劭勳*景鴻鑫 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陳世雄 江滄柳*',
    url:'/course?teacher=陳世雄 江滄柳*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '詹劭勳 ',
    url:'/course?teacher=詹劭勳 '
  },
  {
    title: '教學實習',
    url:'/course?course_name=教學實習'
  },
  
  {
    title: '劉任修 ',
    url:'/course?teacher=劉任修 '
  },
  {
    title: '雲端行動應用',
    url:'/course?course_name=雲端行動應用'
  },
  
  {
    title: '張秀雲 ',
    url:'/course?teacher=張秀雲 '
  },
  {
    title: '工程經濟',
    url:'/course?course_name=工程經濟'
  },
  
  {
    title: '鄭詩瑜 ',
    url:'/course?teacher=鄭詩瑜 '
  },
  {
    title: '人力資源管理',
    url:'/course?course_name=人力資源管理'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '工業與資訊管理專題（一）',
    url:'/course?course_name=工業與資訊管理專題（一）'
  },
  
  {
    title: '王泰裕 ',
    url:'/course?teacher=王泰裕 '
  },
  {
    title: '生產作業分析與改善',
    url:'/course?course_name=生產作業分析與改善'
  },
  
  {
    title: '黃宇翔 ',
    url:'/course?teacher=黃宇翔 '
  },
  {
    title: '策略定價',
    url:'/course?course_name=策略定價'
  },
  
  {
    title: '胡政宏 ',
    url:'/course?teacher=胡政宏 '
  },
  {
    title: '品質管理',
    url:'/course?course_name=品質管理'
  },
  
  {
    title: '林清河 ',
    url:'/course?teacher=林清河 '
  },
  {
    title: '行銷管理',
    url:'/course?course_name=行銷管理'
  },
  
  {
    title: '林明毅 ',
    url:'/course?teacher=林明毅 '
  },
  {
    title: '工作研究與設計',
    url:'/course?course_name=工作研究與設計'
  },
  
  {
    title: '李政勳 ',
    url:'/course?teacher=李政勳 '
  },
  {
    title: '管理會計',
    url:'/course?course_name=管理會計'
  },
  
  {
    title: '李賢得 ',
    url:'/course?teacher=李賢得 '
  },
  {
    title: '作業研究',
    url:'/course?course_name=作業研究'
  },
  
  {
    title: '翁慈宗 ',
    url:'/course?teacher=翁慈宗 '
  },
  {
    title: '資料庫管理',
    url:'/course?course_name=資料庫管理'
  },
  
  {
    title: '張裕清 ',
    url:'/course?teacher=張裕清 '
  },
  {
    title: '統計學（二）',
    url:'/course?course_name=統計學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '侯世章 ',
    url:'/course?teacher=侯世章 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '林敏雄 ',
    url:'/course?teacher=林敏雄 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '劉育佑 ',
    url:'/course?teacher=劉育佑 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '李昇暾 ',
    url:'/course?teacher=李昇暾 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '劉任修 ',
    url:'/course?teacher=劉任修 '
  },
  {
    title: '計算機程式及應用',
    url:'/course?course_name=計算機程式及應用'
  },
  
  {
    title: '王維聰 ',
    url:'/course?teacher=王維聰 '
  },
  {
    title: '資訊管理概論',
    url:'/course?course_name=資訊管理概論'
  },
  
  {
    title: '林常青 ',
    url:'/course?teacher=林常青 '
  },
  {
    title: '經濟學（二）',
    url:'/course?course_name=經濟學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '江凱偉 ',
    url:'/course?teacher=江凱偉 '
  },
  {
    title: '學士論文',
    url:'/course?course_name=學士論文'
  },
  
  {
    title: '洪榮宏 尤瑞哲 江凱偉 林昭宏 郭重言 曾義星 饒見有 朱宏杰 呂學展*',
    url:'/course?teacher=洪榮宏 尤瑞哲 江凱偉 林昭宏 郭重言 曾義星 饒見有 朱宏杰 呂學展*'
  },
  {
    title: '專題研究（一）',
    url:'/course?course_name=專題研究（一）'
  },
  
  {
    title: '潘南飛 ',
    url:'/course?teacher=潘南飛 '
  },
  {
    title: '工程品質與安全',
    url:'/course?course_name=工程品質與安全'
  },
  
  {
    title: '葉張基 ',
    url:'/course?teacher=葉張基 '
  },
  {
    title: '民法物權',
    url:'/course?course_name=民法物權'
  },
  
  {
    title: '吳相忠 ',
    url:'/course?teacher=吳相忠 '
  },
  {
    title: '地籍測量',
    url:'/course?course_name=地籍測量'
  },
  
  {
    title: '景國恩 ',
    url:'/course?teacher=景國恩 '
  },
  {
    title: '地質災害及其測量技術應用',
    url:'/course?course_name=地質災害及其測量技術應用'
  },
  
  {
    title: '王驥魁 ',
    url:'/course?teacher=王驥魁 '
  },
  {
    title: '遙感探測資料處理與實作',
    url:'/course?course_name=遙感探測資料處理與實作'
  },
  
  {
    title: '王驥魁 ',
    url:'/course?teacher=王驥魁 '
  },
  {
    title: '遙感探測資料處理與實作',
    url:'/course?course_name=遙感探測資料處理與實作'
  },
  
  {
    title: '蔡展榮 ',
    url:'/course?teacher=蔡展榮 '
  },
  {
    title: '攝影測量實習',
    url:'/course?course_name=攝影測量實習'
  },
  
  {
    title: '郭重言 ',
    url:'/course?teacher=郭重言 '
  },
  {
    title: '大地與衛星測量實習',
    url:'/course?course_name=大地與衛星測量實習'
  },
  
  {
    title: '王辰樹 ',
    url:'/course?teacher=王辰樹 '
  },
  {
    title: '應用線性代數',
    url:'/course?course_name=應用線性代數'
  },
  
  {
    title: '蔡展榮 ',
    url:'/course?teacher=蔡展榮 '
  },
  {
    title: '工程測量',
    url:'/course?course_name=工程測量'
  },
  
  {
    title: '林昭宏 ',
    url:'/course?teacher=林昭宏 '
  },
  {
    title: '網際網路地理資訊系統程式設計',
    url:'/course?course_name=網際網路地理資訊系統程式設計'
  },
  
  {
    title: '尤瑞哲 ',
    url:'/course?teacher=尤瑞哲 '
  },
  {
    title: '誤差理論',
    url:'/course?course_name=誤差理論'
  },
  
  {
    title: '饒見有 ',
    url:'/course?teacher=饒見有 '
  },
  {
    title: '數值製圖',
    url:'/course?course_name=數值製圖'
  },
  
  {
    title: '郭重言 ',
    url:'/course?teacher=郭重言 '
  },
  {
    title: '大地測量（二）',
    url:'/course?course_name=大地測量（二）'
  },
  
  {
    title: '楊　名 ',
    url:'/course?teacher=楊　名 '
  },
  {
    title: '衛星定位',
    url:'/course?course_name=衛星定位'
  },
  
  {
    title: '曾宏正 ',
    url:'/course?teacher=曾宏正 '
  },
  {
    title: '數值地形測量及實習',
    url:'/course?course_name=數值地形測量及實習'
  },
  
  {
    title: '曾宏正 ',
    url:'/course?teacher=曾宏正 '
  },
  {
    title: '數值地形測量及實習',
    url:'/course?course_name=數值地形測量及實習'
  },
  
  {
    title: '陳鴻益 ',
    url:'/course?teacher=陳鴻益 '
  },
  {
    title: '土地登記',
    url:'/course?course_name=土地登記'
  },
  
  {
    title: '饒見有 ',
    url:'/course?teacher=饒見有 '
  },
  {
    title: '航測及遙測基礎',
    url:'/course?course_name=航測及遙測基礎'
  },
  
  {
    title: '洪榮宏 ',
    url:'/course?teacher=洪榮宏 '
  },
  {
    title: '地理資訊基本原理',
    url:'/course?course_name=地理資訊基本原理'
  },
  
  {
    title: '曾宏正 ',
    url:'/course?teacher=曾宏正 '
  },
  {
    title: '測量平差',
    url:'/course?course_name=測量平差'
  },
  
  {
    title: '蔡展榮 ',
    url:'/course?teacher=蔡展榮 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '江凱偉 ',
    url:'/course?teacher=江凱偉 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '呂學展 ',
    url:'/course?teacher=呂學展 '
  },
  {
    title: '計算機程式設計',
    url:'/course?course_name=計算機程式設計'
  },
  
  {
    title: '楊　名 ',
    url:'/course?teacher=楊　名 '
  },
  {
    title: '基礎測量學實習（二）',
    url:'/course?course_name=基礎測量學實習（二）'
  },
  
  {
    title: '楊　名 ',
    url:'/course?teacher=楊　名 '
  },
  {
    title: '基礎測量學實習（二）',
    url:'/course?course_name=基礎測量學實習（二）'
  },
  
  {
    title: '楊　名 ',
    url:'/course?teacher=楊　名 '
  },
  {
    title: '基礎測量學（二）',
    url:'/course?course_name=基礎測量學（二）'
  },
  
  {
    title: '朱淑君 ',
    url:'/course?teacher=朱淑君 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '朱淑君 ',
    url:'/course?teacher=朱淑君 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '黃柏嶧 ',
    url:'/course?teacher=黃柏嶧 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '章源慶 ',
    url:'/course?teacher=章源慶 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '鄺國權 ',
    url:'/course?teacher=鄺國權 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '吳恭儉 ',
    url:'/course?teacher=吳恭儉 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '蕭仁傑 ',
    url:'/course?teacher=蕭仁傑 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '施光隆 ',
    url:'/course?teacher=施光隆 '
  },
  {
    title: '自由車（男女）',
    url:'/course?course_name=自由車（男女）'
  },
  
  {
    title: '李劍如 ',
    url:'/course?teacher=李劍如 '
  },
  {
    title: '硬網（男、女）',
    url:'/course?course_name=硬網（男、女）'
  },
  
  {
    title: '涂國誠 ',
    url:'/course?teacher=涂國誠 '
  },
  {
    title: '羽球（男、女）',
    url:'/course?course_name=羽球（男、女）'
  },
  
  {
    title: '黃鴻鈞 ',
    url:'/course?teacher=黃鴻鈞 '
  },
  {
    title: '體適能運動（男女）',
    url:'/course?course_name=體適能運動（男女）'
  },
  
  {
    title: '林欣仕 ',
    url:'/course?teacher=林欣仕 '
  },
  {
    title: '體適能運動（男）',
    url:'/course?course_name=體適能運動（男）'
  },
  
  {
    title: '潘慧雯 ',
    url:'/course?teacher=潘慧雯 '
  },
  {
    title: '體適能運動（男）',
    url:'/course?course_name=體適能運動（男）'
  },
  
  {
    title: '彭怡千 ',
    url:'/course?teacher=彭怡千 '
  },
  {
    title: '健訓（男）',
    url:'/course?course_name=健訓（男）'
  },
  
  {
    title: '黃滄海 ',
    url:'/course?teacher=黃滄海 '
  },
  {
    title: '健訓（男）',
    url:'/course?course_name=健訓（男）'
  },
  
  {
    title: '黃鴻鈞 ',
    url:'/course?teacher=黃鴻鈞 '
  },
  {
    title: '健訓（男）',
    url:'/course?course_name=健訓（男）'
  },
  
  {
    title: '黃鴻鈞 ',
    url:'/course?teacher=黃鴻鈞 '
  },
  {
    title: '健訓（男）',
    url:'/course?course_name=健訓（男）'
  },
  
  {
    title: '黃鴻鈞 ',
    url:'/course?teacher=黃鴻鈞 '
  },
  {
    title: '排球（男）',
    url:'/course?course_name=排球（男）'
  },
  
  {
    title: '黃鴻鈞 ',
    url:'/course?teacher=黃鴻鈞 '
  },
  {
    title: '排球（男）',
    url:'/course?course_name=排球（男）'
  },
  
  {
    title: '黃賢哲 ',
    url:'/course?teacher=黃賢哲 '
  },
  {
    title: '游泳（男）',
    url:'/course?course_name=游泳（男）'
  },
  
  {
    title: '黃賢哲 ',
    url:'/course?teacher=黃賢哲 '
  },
  {
    title: '游泳（男）',
    url:'/course?course_name=游泳（男）'
  },
  
  {
    title: '謝孟志 ',
    url:'/course?teacher=謝孟志 '
  },
  {
    title: '壘球（男）',
    url:'/course?course_name=壘球（男）'
  },
  
  {
    title: '謝孟志 ',
    url:'/course?teacher=謝孟志 '
  },
  {
    title: '壘球（男）',
    url:'/course?course_name=壘球（男）'
  },
  
  {
    title: '謝孟志 ',
    url:'/course?teacher=謝孟志 '
  },
  {
    title: '壘球（男）',
    url:'/course?course_name=壘球（男）'
  },
  
  {
    title: '謝孟志 ',
    url:'/course?teacher=謝孟志 '
  },
  {
    title: '壘球（男）',
    url:'/course?course_name=壘球（男）'
  },
  
  {
    title: '潘慧雯 ',
    url:'/course?teacher=潘慧雯 '
  },
  {
    title: '籃球（男）',
    url:'/course?course_name=籃球（男）'
  },
  
  {
    title: '黃彥慈 ',
    url:'/course?teacher=黃彥慈 '
  },
  {
    title: '籃球（男）',
    url:'/course?course_name=籃球（男）'
  },
  
  {
    title: '潘慧雯 ',
    url:'/course?teacher=潘慧雯 '
  },
  {
    title: '籃球（男）',
    url:'/course?course_name=籃球（男）'
  },
  
  {
    title: '黃彥慈 ',
    url:'/course?teacher=黃彥慈 '
  },
  {
    title: '籃球（男）',
    url:'/course?course_name=籃球（男）'
  },
  
  {
    title: '潘慧雯 ',
    url:'/course?teacher=潘慧雯 '
  },
  {
    title: '籃球（男）',
    url:'/course?course_name=籃球（男）'
  },
  
  {
    title: '潘慧雯 ',
    url:'/course?teacher=潘慧雯 '
  },
  {
    title: '籃球（男）',
    url:'/course?course_name=籃球（男）'
  },
  
  {
    title: '林欣仕 ',
    url:'/course?teacher=林欣仕 '
  },
  {
    title: '籃球（男）',
    url:'/course?course_name=籃球（男）'
  },
  
  {
    title: '許又文 ',
    url:'/course?teacher=許又文 '
  },
  {
    title: '國術（男女）',
    url:'/course?course_name=國術（男女）'
  },
  
  {
    title: '高華君 ',
    url:'/course?teacher=高華君 '
  },
  {
    title: '太極拳（男女）',
    url:'/course?course_name=太極拳（男女）'
  },
  
  {
    title: '高華君 ',
    url:'/course?teacher=高華君 '
  },
  {
    title: '太極拳（男女）',
    url:'/course?course_name=太極拳（男女）'
  },
  
  {
    title: '涂國誠 ',
    url:'/course?teacher=涂國誠 '
  },
  {
    title: '羽球（男女）',
    url:'/course?course_name=羽球（男女）'
  },
  
  {
    title: '涂國誠 ',
    url:'/course?teacher=涂國誠 '
  },
  {
    title: '羽球（男女）',
    url:'/course?course_name=羽球（男女）'
  },
  
  {
    title: '馬上鈞 ',
    url:'/course?teacher=馬上鈞 '
  },
  {
    title: '羽球（男）',
    url:'/course?course_name=羽球（男）'
  },
  
  {
    title: '黃鈴雯 ',
    url:'/course?teacher=黃鈴雯 '
  },
  {
    title: '直排輪（男女）',
    url:'/course?course_name=直排輪（男女）'
  },
  
  {
    title: '彭怡千 ',
    url:'/course?teacher=彭怡千 '
  },
  {
    title: '高爾夫球（男）',
    url:'/course?course_name=高爾夫球（男）'
  },
  
  {
    title: '彭怡千 ',
    url:'/course?teacher=彭怡千 '
  },
  {
    title: '高爾夫（男女）',
    url:'/course?course_name=高爾夫（男女）'
  },
  
  {
    title: '黃鈴雯 ',
    url:'/course?teacher=黃鈴雯 '
  },
  {
    title: '硬網（男）',
    url:'/course?course_name=硬網（男）'
  },
  
  {
    title: '李劍如 ',
    url:'/course?teacher=李劍如 '
  },
  {
    title: '硬網（男）',
    url:'/course?course_name=硬網（男）'
  },
  
  {
    title: '林欣仕 ',
    url:'/course?teacher=林欣仕 '
  },
  {
    title: '飛輪有氧（男）',
    url:'/course?course_name=飛輪有氧（男）'
  },
  
  {
    title: '鄭匡佑 ',
    url:'/course?teacher=鄭匡佑 '
  },
  {
    title: '國際標準舞（男女）',
    url:'/course?course_name=國際標準舞（男女）'
  },
  
  {
    title: '夏綠荷 ',
    url:'/course?teacher=夏綠荷 '
  },
  {
    title: '有氧舞蹈（男女）',
    url:'/course?course_name=有氧舞蹈（男女）'
  },
  
  {
    title: '許又文 ',
    url:'/course?teacher=許又文 '
  },
  {
    title: '拳擊有氧（男女）',
    url:'/course?course_name=拳擊有氧（男女）'
  },
  
  {
    title: '洪甄憶 ',
    url:'/course?teacher=洪甄憶 '
  },
  {
    title: '瑜伽（男女）',
    url:'/course?course_name=瑜伽（男女）'
  },
  
  {
    title: '王駿濠 ',
    url:'/course?teacher=王駿濠 '
  },
  {
    title: '足球（男）',
    url:'/course?course_name=足球（男）'
  },
  
  {
    title: '楊書銘 ',
    url:'/course?teacher=楊書銘 '
  },
  {
    title: '足球（男女）',
    url:'/course?course_name=足球（男女）'
  },
  
  {
    title: '陳敬能 ',
    url:'/course?teacher=陳敬能 '
  },
  {
    title: '桌球（男）',
    url:'/course?course_name=桌球（男）'
  },
  
  {
    title: '邱宏達 ',
    url:'/course?teacher=邱宏達 '
  },
  {
    title: '桌球（男女）',
    url:'/course?course_name=桌球（男女）'
  },
  
  {
    title: '陳敬能 ',
    url:'/course?teacher=陳敬能 '
  },
  {
    title: '桌球（男）',
    url:'/course?course_name=桌球（男）'
  },
  
  {
    title: '徐珊惠 ',
    url:'/course?teacher=徐珊惠 '
  },
  {
    title: '桌球（男女）',
    url:'/course?course_name=桌球（男女）'
  },
  
  {
    title: '黃彥慈 ',
    url:'/course?teacher=黃彥慈 '
  },
  {
    title: '適應體適能',
    url:'/course?course_name=適應體適能'
  },
  
  {
    title: '黃鴻鈞 ',
    url:'/course?teacher=黃鴻鈞 '
  },
  {
    title: '體適能運動（男女）',
    url:'/course?course_name=體適能運動（男女）'
  },
  
  {
    title: '黃彥慈 ',
    url:'/course?teacher=黃彥慈 '
  },
  {
    title: '體適能運動（女）',
    url:'/course?course_name=體適能運動（女）'
  },
  
  {
    title: '周學雯 ',
    url:'/course?teacher=周學雯 '
  },
  {
    title: '體適能運動（女）',
    url:'/course?course_name=體適能運動（女）'
  },
  
  {
    title: '王苓華 ',
    url:'/course?teacher=王苓華 '
  },
  {
    title: '硬網（女）',
    url:'/course?course_name=硬網（女）'
  },
  
  {
    title: '王苓華 ',
    url:'/course?teacher=王苓華 '
  },
  {
    title: '軟網（女）',
    url:'/course?course_name=軟網（女）'
  },
  
  {
    title: '黃賢哲 ',
    url:'/course?teacher=黃賢哲 '
  },
  {
    title: '排球（女）',
    url:'/course?course_name=排球（女）'
  },
  
  {
    title: '許又文 ',
    url:'/course?teacher=許又文 '
  },
  {
    title: '國術（男女）',
    url:'/course?course_name=國術（男女）'
  },
  
  {
    title: '高華君 ',
    url:'/course?teacher=高華君 '
  },
  {
    title: '太極拳（男女）',
    url:'/course?course_name=太極拳（男女）'
  },
  
  {
    title: '高華君 ',
    url:'/course?teacher=高華君 '
  },
  {
    title: '太極拳（男女）',
    url:'/course?course_name=太極拳（男女）'
  },
  
  {
    title: '黃鈴雯 ',
    url:'/course?teacher=黃鈴雯 '
  },
  {
    title: '羽球（女）',
    url:'/course?course_name=羽球（女）'
  },
  
  {
    title: '涂國誠 ',
    url:'/course?teacher=涂國誠 '
  },
  {
    title: '羽球（男女）',
    url:'/course?course_name=羽球（男女）'
  },
  
  {
    title: '涂國誠 ',
    url:'/course?teacher=涂國誠 '
  },
  {
    title: '羽球（男女）',
    url:'/course?course_name=羽球（男女）'
  },
  
  {
    title: '黃鈴雯 ',
    url:'/course?teacher=黃鈴雯 '
  },
  {
    title: '直排輪（男女）',
    url:'/course?course_name=直排輪（男女）'
  },
  
  {
    title: '彭怡千 ',
    url:'/course?teacher=彭怡千 '
  },
  {
    title: '高爾夫（男女）',
    url:'/course?course_name=高爾夫（男女）'
  },
  
  {
    title: '黃彥慈 ',
    url:'/course?teacher=黃彥慈 '
  },
  {
    title: '籃球（女）',
    url:'/course?course_name=籃球（女）'
  },
  
  {
    title: '許又文 ',
    url:'/course?teacher=許又文 '
  },
  {
    title: '拳擊有氧（男女）',
    url:'/course?course_name=拳擊有氧（男女）'
  },
  
  {
    title: '彭怡千 ',
    url:'/course?teacher=彭怡千 '
  },
  {
    title: '飛輪有氧（女）',
    url:'/course?course_name=飛輪有氧（女）'
  },
  
  {
    title: '彭怡千 ',
    url:'/course?teacher=彭怡千 '
  },
  {
    title: '飛輪有氧（女）',
    url:'/course?course_name=飛輪有氧（女）'
  },
  
  {
    title: '鄭匡佑 ',
    url:'/course?teacher=鄭匡佑 '
  },
  {
    title: '國際標準舞（男女）',
    url:'/course?course_name=國際標準舞（男女）'
  },
  
  {
    title: '夏綠荷 ',
    url:'/course?teacher=夏綠荷 '
  },
  {
    title: '有氧舞蹈（男女）',
    url:'/course?course_name=有氧舞蹈（男女）'
  },
  
  {
    title: '高華君 ',
    url:'/course?teacher=高華君 '
  },
  {
    title: '水中有氧（女）',
    url:'/course?course_name=水中有氧（女）'
  },
  
  {
    title: '周學雯 ',
    url:'/course?teacher=周學雯 '
  },
  {
    title: '游泳（女）',
    url:'/course?course_name=游泳（女）'
  },
  
  {
    title: '洪甄憶 ',
    url:'/course?teacher=洪甄憶 '
  },
  {
    title: '瑜伽（男女）',
    url:'/course?course_name=瑜伽（男女）'
  },
  
  {
    title: '洪甄憶 ',
    url:'/course?teacher=洪甄憶 '
  },
  {
    title: '瑜伽（女）',
    url:'/course?course_name=瑜伽（女）'
  },
  
  {
    title: '洪甄憶 ',
    url:'/course?teacher=洪甄憶 '
  },
  {
    title: '健康有氧（女）',
    url:'/course?course_name=健康有氧（女）'
  },
  
  {
    title: '洪甄憶 ',
    url:'/course?teacher=洪甄憶 '
  },
  {
    title: '健康有氧（女）',
    url:'/course?course_name=健康有氧（女）'
  },
  
  {
    title: '楊書銘 ',
    url:'/course?teacher=楊書銘 '
  },
  {
    title: '足球（男女）',
    url:'/course?course_name=足球（男女）'
  },
  
  {
    title: '施光隆 ',
    url:'/course?teacher=施光隆 '
  },
  {
    title: '自由車（男女）',
    url:'/course?course_name=自由車（男女）'
  },
  
  {
    title: '邱宏達 ',
    url:'/course?teacher=邱宏達 '
  },
  {
    title: '桌球（男女）',
    url:'/course?course_name=桌球（男女）'
  },
  
  {
    title: '徐珊惠 ',
    url:'/course?teacher=徐珊惠 '
  },
  {
    title: '桌球（男女）',
    url:'/course?course_name=桌球（男女）'
  },
  
  {
    title: '林欣仕 ',
    url:'/course?teacher=林欣仕 '
  },
  {
    title: '籃球與健康體能',
    url:'/course?course_name=籃球與健康體能'
  },
  
  {
    title: '謝孟志 ',
    url:'/course?teacher=謝孟志 '
  },
  {
    title: '男子壘球校隊（二）',
    url:'/course?course_name=男子壘球校隊（二）'
  },
  
  {
    title: '王苓華 ',
    url:'/course?teacher=王苓華 '
  },
  {
    title: '女子軟網校隊（二）',
    url:'/course?course_name=女子軟網校隊（二）'
  },
  
  {
    title: '王苓華 ',
    url:'/course?teacher=王苓華 '
  },
  {
    title: '男子軟網校隊（二）',
    url:'/course?course_name=男子軟網校隊（二）'
  },
  
  {
    title: '馬上鈞 ',
    url:'/course?teacher=馬上鈞 '
  },
  {
    title: '女子硬網校隊（二）',
    url:'/course?course_name=女子硬網校隊（二）'
  },
  
  {
    title: '李劍如 ',
    url:'/course?teacher=李劍如 '
  },
  {
    title: '男子硬網校隊（二）',
    url:'/course?course_name=男子硬網校隊（二）'
  },
  
  {
    title: '蔡佳良 ',
    url:'/course?teacher=蔡佳良 '
  },
  {
    title: '女子羽球校隊（二）',
    url:'/course?course_name=女子羽球校隊（二）'
  },
  
  {
    title: '涂國誠 ',
    url:'/course?teacher=涂國誠 '
  },
  {
    title: '男子羽球校隊（二）',
    url:'/course?course_name=男子羽球校隊（二）'
  },
  
  {
    title: '徐珊惠 ',
    url:'/course?teacher=徐珊惠 '
  },
  {
    title: '女子桌球校隊（二）',
    url:'/course?course_name=女子桌球校隊（二）'
  },
  
  {
    title: '邱宏達 ',
    url:'/course?teacher=邱宏達 '
  },
  {
    title: '男子桌球校隊（二）',
    url:'/course?course_name=男子桌球校隊（二）'
  },
  
  {
    title: '黃彥慈*彭怡千 ',
    url:'/course?teacher=黃彥慈*彭怡千 '
  },
  {
    title: '棒球校隊（二）',
    url:'/course?course_name=棒球校隊（二）'
  },
  
  {
    title: '鄭匡佑 ',
    url:'/course?teacher=鄭匡佑 '
  },
  {
    title: '橄欖球校隊（二）',
    url:'/course?course_name=橄欖球校隊（二）'
  },
  
  {
    title: '王駿濠 ',
    url:'/course?teacher=王駿濠 '
  },
  {
    title: '足球校隊（二）',
    url:'/course?course_name=足球校隊（二）'
  },
  
  {
    title: '黃賢哲 ',
    url:'/course?teacher=黃賢哲 '
  },
  {
    title: '女子排球校隊（二）',
    url:'/course?course_name=女子排球校隊（二）'
  },
  
  {
    title: '黃鴻鈞 ',
    url:'/course?teacher=黃鴻鈞 '
  },
  {
    title: '男子排球校隊（二）',
    url:'/course?course_name=男子排球校隊（二）'
  },
  
  {
    title: '高華君 ',
    url:'/course?teacher=高華君 '
  },
  {
    title: '女子籃球校隊（二）',
    url:'/course?course_name=女子籃球校隊（二）'
  },
  
  {
    title: '潘慧雯 ',
    url:'/course?teacher=潘慧雯 '
  },
  {
    title: '男子籃球校隊（二）',
    url:'/course?course_name=男子籃球校隊（二）'
  },
  
  {
    title: '周學雯 ',
    url:'/course?teacher=周學雯 '
  },
  {
    title: '女子游泳校隊（二）',
    url:'/course?course_name=女子游泳校隊（二）'
  },
  
  {
    title: '洪甄憶 ',
    url:'/course?teacher=洪甄憶 '
  },
  {
    title: '男子游泳校隊（二）',
    url:'/course?course_name=男子游泳校隊（二）'
  },
  
  {
    title: '黃滄海 ',
    url:'/course?teacher=黃滄海 '
  },
  {
    title: '女子田徑校隊（二）',
    url:'/course?course_name=女子田徑校隊（二）'
  },
  
  {
    title: '林麗娟 ',
    url:'/course?teacher=林麗娟 '
  },
  {
    title: '男子田徑校隊（二）',
    url:'/course?course_name=男子田徑校隊（二）'
  },
  
  {
    title: '黃鴻鈞 ',
    url:'/course?teacher=黃鴻鈞 '
  },
  {
    title: '排球與健康體能',
    url:'/course?course_name=排球與健康體能'
  },
  
  {
    title: '黃彥慈 ',
    url:'/course?teacher=黃彥慈 '
  },
  {
    title: '壘球與健康體能',
    url:'/course?course_name=壘球與健康體能'
  },
  
  {
    title: '謝孟志 ',
    url:'/course?teacher=謝孟志 '
  },
  {
    title: '壘球與健康體能',
    url:'/course?course_name=壘球與健康體能'
  },
  
  {
    title: '謝孟志 ',
    url:'/course?teacher=謝孟志 '
  },
  {
    title: '壘球與健康體能',
    url:'/course?course_name=壘球與健康體能'
  },
  
  {
    title: '黃彥慈 ',
    url:'/course?teacher=黃彥慈 '
  },
  {
    title: '籃球與健康體能',
    url:'/course?course_name=籃球與健康體能'
  },
  
  {
    title: '潘慧雯 ',
    url:'/course?teacher=潘慧雯 '
  },
  {
    title: '籃球與健康體能',
    url:'/course?course_name=籃球與健康體能'
  },
  
  {
    title: '潘慧雯 ',
    url:'/course?teacher=潘慧雯 '
  },
  {
    title: '籃球與健康體能',
    url:'/course?course_name=籃球與健康體能'
  },
  
  {
    title: '潘慧雯 ',
    url:'/course?teacher=潘慧雯 '
  },
  {
    title: '籃球與健康體能',
    url:'/course?course_name=籃球與健康體能'
  },
  
  {
    title: '黃彥慈 ',
    url:'/course?teacher=黃彥慈 '
  },
  {
    title: '籃球與健康體能',
    url:'/course?course_name=籃球與健康體能'
  },
  
  {
    title: '謝孟志 ',
    url:'/course?teacher=謝孟志 '
  },
  {
    title: '籃球與健康體能',
    url:'/course?course_name=籃球與健康體能'
  },
  
  {
    title: '李劍如 ',
    url:'/course?teacher=李劍如 '
  },
  {
    title: '籃球與健康體能',
    url:'/course?course_name=籃球與健康體能'
  },
  
  {
    title: '李劍如 ',
    url:'/course?teacher=李劍如 '
  },
  {
    title: '籃球與健康體能',
    url:'/course?course_name=籃球與健康體能'
  },
  
  {
    title: '邱宏達 ',
    url:'/course?teacher=邱宏達 '
  },
  {
    title: '桌球與健康體能',
    url:'/course?course_name=桌球與健康體能'
  },
  
  {
    title: '馬上鈞 ',
    url:'/course?teacher=馬上鈞 '
  },
  {
    title: '羽球與健康體能',
    url:'/course?course_name=羽球與健康體能'
  },
  
  {
    title: '涂國誠 ',
    url:'/course?teacher=涂國誠 '
  },
  {
    title: '羽球與健康體能',
    url:'/course?course_name=羽球與健康體能'
  },
  
  {
    title: '涂國誠 ',
    url:'/course?teacher=涂國誠 '
  },
  {
    title: '羽球與健康體能',
    url:'/course?course_name=羽球與健康體能'
  },
  
  {
    title: '王駿濠 ',
    url:'/course?teacher=王駿濠 '
  },
  {
    title: '足球與健康體能',
    url:'/course?course_name=足球與健康體能'
  },
  
  {
    title: '林欣仕 ',
    url:'/course?teacher=林欣仕 '
  },
  {
    title: '飛輪有氧與健康體能',
    url:'/course?course_name=飛輪有氧與健康體能'
  },
  
  {
    title: '彭怡千 ',
    url:'/course?teacher=彭怡千 '
  },
  {
    title: '飛輪有氧與健康體能',
    url:'/course?course_name=飛輪有氧與健康體能'
  },
  
  {
    title: '彭怡千 ',
    url:'/course?teacher=彭怡千 '
  },
  {
    title: '飛輪有氧與健康體能',
    url:'/course?course_name=飛輪有氧與健康體能'
  },
  
  {
    title: '彭怡千 ',
    url:'/course?teacher=彭怡千 '
  },
  {
    title: '體適能運動與健康體能',
    url:'/course?course_name=體適能運動與健康體能'
  },
  
  {
    title: '黃滄海 ',
    url:'/course?teacher=黃滄海 '
  },
  {
    title: '體適能運動與健康體能',
    url:'/course?course_name=體適能運動與健康體能'
  },
  
  {
    title: '王駿濠 ',
    url:'/course?teacher=王駿濠 '
  },
  {
    title: '健訓與健康體能',
    url:'/course?course_name=健訓與健康體能'
  },
  
  {
    title: '林欣仕 ',
    url:'/course?teacher=林欣仕 '
  },
  {
    title: '健訓與健康體能',
    url:'/course?course_name=健訓與健康體能'
  },
  
  {
    title: '涂國誠 ',
    url:'/course?teacher=涂國誠 '
  },
  {
    title: '體適能運動與健康體能',
    url:'/course?course_name=體適能運動與健康體能'
  },
  
  {
    title: '黃鴻鈞 ',
    url:'/course?teacher=黃鴻鈞 '
  },
  {
    title: '體適能運動與健康體能',
    url:'/course?course_name=體適能運動與健康體能'
  },
  
  {
    title: '黃鈴雯 ',
    url:'/course?teacher=黃鈴雯 '
  },
  {
    title: '直排輪與健康體能',
    url:'/course?course_name=直排輪與健康體能'
  },
  
  {
    title: '許又文 ',
    url:'/course?teacher=許又文 '
  },
  {
    title: '國術與健康體能',
    url:'/course?course_name=國術與健康體能'
  },
  
  {
    title: '鄭匡佑 ',
    url:'/course?teacher=鄭匡佑 '
  },
  {
    title: '國術與健康體能',
    url:'/course?course_name=國術與健康體能'
  },
  
  {
    title: '黃滄海 ',
    url:'/course?teacher=黃滄海 '
  },
  {
    title: '游泳與健康體能',
    url:'/course?course_name=游泳與健康體能'
  },
  
  {
    title: '黃賢哲 ',
    url:'/course?teacher=黃賢哲 '
  },
  {
    title: '游泳與健康體能',
    url:'/course?course_name=游泳與健康體能'
  },
  
  {
    title: '林麗娟 ',
    url:'/course?teacher=林麗娟 '
  },
  {
    title: '健康有氧與健康體能',
    url:'/course?course_name=健康有氧與健康體能'
  },
  
  {
    title: '許又文 ',
    url:'/course?teacher=許又文 '
  },
  {
    title: '拳擊有氧與健康體能',
    url:'/course?course_name=拳擊有氧與健康體能'
  },
  
  {
    title: '夏綠荷 ',
    url:'/course?teacher=夏綠荷 '
  },
  {
    title: '有氧舞蹈與健康體能',
    url:'/course?course_name=有氧舞蹈與健康體能'
  },
  
  {
    title: '李劍如 ',
    url:'/course?teacher=李劍如 '
  },
  {
    title: '硬網與健康體能',
    url:'/course?course_name=硬網與健康體能'
  },
  
  {
    title: '黃鈴雯 ',
    url:'/course?teacher=黃鈴雯 '
  },
  {
    title: '硬網與健康體能',
    url:'/course?course_name=硬網與健康體能'
  },
  
  {
    title: '馬上鈞 ',
    url:'/course?teacher=馬上鈞 '
  },
  {
    title: '硬網與健康體能',
    url:'/course?course_name=硬網與健康體能'
  },
  
  {
    title: '王苓華 ',
    url:'/course?teacher=王苓華 '
  },
  {
    title: '軟網與健康體能',
    url:'/course?course_name=軟網與健康體能'
  },
  
  {
    title: '鄭匡佑 ',
    url:'/course?teacher=鄭匡佑 '
  },
  {
    title: '國際標準舞與健康體能',
    url:'/course?course_name=國際標準舞與健康體能'
  },
  
  {
    title: '鄭匡佑 ',
    url:'/course?teacher=鄭匡佑 '
  },
  {
    title: '西洋劍與健康體能',
    url:'/course?course_name=西洋劍與健康體能'
  },
  
  {
    title: '施光隆 ',
    url:'/course?teacher=施光隆 '
  },
  {
    title: '自由車與健康體能',
    url:'/course?course_name=自由車與健康體能'
  },
  
  {
    title: '黃彥慈 ',
    url:'/course?teacher=黃彥慈 '
  },
  {
    title: '籃球與健康體能',
    url:'/course?course_name=籃球與健康體能'
  },
  
  {
    title: '邱宏達 ',
    url:'/course?teacher=邱宏達 '
  },
  {
    title: '桌球與健康體能',
    url:'/course?course_name=桌球與健康體能'
  },
  
  {
    title: '黃鈴雯 ',
    url:'/course?teacher=黃鈴雯 '
  },
  {
    title: '羽球與健康體能',
    url:'/course?course_name=羽球與健康體能'
  },
  
  {
    title: '馬上鈞 ',
    url:'/course?teacher=馬上鈞 '
  },
  {
    title: '羽球與健康體能',
    url:'/course?course_name=羽球與健康體能'
  },
  
  {
    title: '涂國誠 ',
    url:'/course?teacher=涂國誠 '
  },
  {
    title: '羽球與健康體能',
    url:'/course?course_name=羽球與健康體能'
  },
  
  {
    title: '黃鴻鈞 ',
    url:'/course?teacher=黃鴻鈞 '
  },
  {
    title: '排球與健康體能',
    url:'/course?course_name=排球與健康體能'
  },
  
  {
    title: '黃賢哲 ',
    url:'/course?teacher=黃賢哲 '
  },
  {
    title: '排球與健康體能',
    url:'/course?course_name=排球與健康體能'
  },
  
  {
    title: '林欣仕 ',
    url:'/course?teacher=林欣仕 '
  },
  {
    title: '飛輪有氧與健康體能',
    url:'/course?course_name=飛輪有氧與健康體能'
  },
  
  {
    title: '彭怡千 ',
    url:'/course?teacher=彭怡千 '
  },
  {
    title: '飛輪有氧與健康體能',
    url:'/course?course_name=飛輪有氧與健康體能'
  },
  
  {
    title: '王苓華 ',
    url:'/course?teacher=王苓華 '
  },
  {
    title: '軟網與健康體能',
    url:'/course?course_name=軟網與健康體能'
  },
  
  {
    title: '王苓華 ',
    url:'/course?teacher=王苓華 '
  },
  {
    title: '硬網與健康體能',
    url:'/course?course_name=硬網與健康體能'
  },
  
  {
    title: '馬上鈞 ',
    url:'/course?teacher=馬上鈞 '
  },
  {
    title: '硬網與健康體能',
    url:'/course?course_name=硬網與健康體能'
  },
  
  {
    title: '黃鈴雯 ',
    url:'/course?teacher=黃鈴雯 '
  },
  {
    title: '直排輪與健康體能',
    url:'/course?course_name=直排輪與健康體能'
  },
  
  {
    title: '許又文 ',
    url:'/course?teacher=許又文 '
  },
  {
    title: '國術與健康體能',
    url:'/course?course_name=國術與健康體能'
  },
  
  {
    title: '鄭匡佑 ',
    url:'/course?teacher=鄭匡佑 '
  },
  {
    title: '國術與健康體能',
    url:'/course?course_name=國術與健康體能'
  },
  
  {
    title: '周學雯 ',
    url:'/course?teacher=周學雯 '
  },
  {
    title: '游泳與健康體能',
    url:'/course?course_name=游泳與健康體能'
  },
  
  {
    title: '林欣仕 ',
    url:'/course?teacher=林欣仕 '
  },
  {
    title: '飛輪有氧與健康體能',
    url:'/course?course_name=飛輪有氧與健康體能'
  },
  
  {
    title: '林麗娟 ',
    url:'/course?teacher=林麗娟 '
  },
  {
    title: '健康有氧與健康體能',
    url:'/course?course_name=健康有氧與健康體能'
  },
  
  {
    title: '洪甄憶 ',
    url:'/course?teacher=洪甄憶 '
  },
  {
    title: '健康有氧與健康體能',
    url:'/course?course_name=健康有氧與健康體能'
  },
  
  {
    title: '許又文 ',
    url:'/course?teacher=許又文 '
  },
  {
    title: '拳擊有氧與健康體能',
    url:'/course?course_name=拳擊有氧與健康體能'
  },
  
  {
    title: '夏綠荷 ',
    url:'/course?teacher=夏綠荷 '
  },
  {
    title: '有氧舞蹈與健康體能',
    url:'/course?course_name=有氧舞蹈與健康體能'
  },
  
  {
    title: '洪甄憶 ',
    url:'/course?teacher=洪甄憶 '
  },
  {
    title: '瑜伽與健康體能',
    url:'/course?course_name=瑜伽與健康體能'
  },
  
  {
    title: '高華君 ',
    url:'/course?teacher=高華君 '
  },
  {
    title: '韻律與健康體能',
    url:'/course?course_name=韻律與健康體能'
  },
  
  {
    title: '高華君 ',
    url:'/course?teacher=高華君 '
  },
  {
    title: '韻律與健康體能',
    url:'/course?course_name=韻律與健康體能'
  },
  
  {
    title: '高華君 ',
    url:'/course?teacher=高華君 '
  },
  {
    title: '水中有氧與健康體能',
    url:'/course?course_name=水中有氧與健康體能'
  },
  
  {
    title: '鄭匡佑 ',
    url:'/course?teacher=鄭匡佑 '
  },
  {
    title: '國際標準舞與健康體能',
    url:'/course?course_name=國際標準舞與健康體能'
  },
  
  {
    title: '鄭匡佑 ',
    url:'/course?teacher=鄭匡佑 '
  },
  {
    title: '西洋劍與健康體能',
    url:'/course?course_name=西洋劍與健康體能'
  },
  
  {
    title: '施光隆 ',
    url:'/course?teacher=施光隆 '
  },
  {
    title: '自由車與健康體能',
    url:'/course?course_name=自由車與健康體能'
  },
  
  {
    title: '謝孟志 ',
    url:'/course?teacher=謝孟志 '
  },
  {
    title: '男子壘球校隊',
    url:'/course?course_name=男子壘球校隊'
  },
  
  {
    title: '王苓華 ',
    url:'/course?teacher=王苓華 '
  },
  {
    title: '女子軟網校隊',
    url:'/course?course_name=女子軟網校隊'
  },
  
  {
    title: '王苓華 ',
    url:'/course?teacher=王苓華 '
  },
  {
    title: '男子軟網校隊',
    url:'/course?course_name=男子軟網校隊'
  },
  
  {
    title: '馬上鈞 ',
    url:'/course?teacher=馬上鈞 '
  },
  {
    title: '女子硬網校隊',
    url:'/course?course_name=女子硬網校隊'
  },
  
  {
    title: '李劍如 ',
    url:'/course?teacher=李劍如 '
  },
  {
    title: '男子硬網校隊',
    url:'/course?course_name=男子硬網校隊'
  },
  
  {
    title: '蔡佳良 ',
    url:'/course?teacher=蔡佳良 '
  },
  {
    title: '女子羽球校隊',
    url:'/course?course_name=女子羽球校隊'
  },
  
  {
    title: '涂國誠 ',
    url:'/course?teacher=涂國誠 '
  },
  {
    title: '男子羽球校隊',
    url:'/course?course_name=男子羽球校隊'
  },
  
  {
    title: '徐珊惠 ',
    url:'/course?teacher=徐珊惠 '
  },
  {
    title: '女子桌球校隊',
    url:'/course?course_name=女子桌球校隊'
  },
  
  {
    title: '邱宏達 ',
    url:'/course?teacher=邱宏達 '
  },
  {
    title: '男子桌球校隊',
    url:'/course?course_name=男子桌球校隊'
  },
  
  {
    title: '黃彥慈*彭怡千 ',
    url:'/course?teacher=黃彥慈*彭怡千 '
  },
  {
    title: '棒球校隊',
    url:'/course?course_name=棒球校隊'
  },
  
  {
    title: '鄭匡佑 ',
    url:'/course?teacher=鄭匡佑 '
  },
  {
    title: '橄欖球校隊',
    url:'/course?course_name=橄欖球校隊'
  },
  
  {
    title: '王駿濠 ',
    url:'/course?teacher=王駿濠 '
  },
  {
    title: '足球校隊',
    url:'/course?course_name=足球校隊'
  },
  
  {
    title: '黃賢哲 ',
    url:'/course?teacher=黃賢哲 '
  },
  {
    title: '女子排球校隊',
    url:'/course?course_name=女子排球校隊'
  },
  
  {
    title: '黃鴻鈞 ',
    url:'/course?teacher=黃鴻鈞 '
  },
  {
    title: '男子排球校隊',
    url:'/course?course_name=男子排球校隊'
  },
  
  {
    title: '高華君 ',
    url:'/course?teacher=高華君 '
  },
  {
    title: '女子籃球校隊',
    url:'/course?course_name=女子籃球校隊'
  },
  
  {
    title: '潘慧雯 ',
    url:'/course?teacher=潘慧雯 '
  },
  {
    title: '男子籃球校隊',
    url:'/course?course_name=男子籃球校隊'
  },
  
  {
    title: '周學雯 ',
    url:'/course?teacher=周學雯 '
  },
  {
    title: '女子游泳校隊',
    url:'/course?course_name=女子游泳校隊'
  },
  
  {
    title: '洪甄憶 ',
    url:'/course?teacher=洪甄憶 '
  },
  {
    title: '男子游泳校隊',
    url:'/course?course_name=男子游泳校隊'
  },
  
  {
    title: '黃滄海 ',
    url:'/course?teacher=黃滄海 '
  },
  {
    title: '女子田徑校隊',
    url:'/course?course_name=女子田徑校隊'
  },
  
  {
    title: '林麗娟 ',
    url:'/course?teacher=林麗娟 '
  },
  {
    title: '男子田徑校隊',
    url:'/course?course_name=男子田徑校隊'
  },
  
  {
    title: '古承宗*馬哲儒 湯銘哲 ',
    url:'/course?teacher=古承宗*馬哲儒 湯銘哲 '
  },
  {
    title: '通識專題講座-大學導航',
    url:'/course?course_name=通識專題講座-大學導航'
  },
  
  {
    title: '古承宗 楊永年*',
    url:'/course?teacher=古承宗 楊永年*'
  },
  {
    title: '台灣綜合大學通識巡迴講座-公民素養',
    url:'/course?course_name=台灣綜合大學通識巡迴講座-公民素養'
  },
  
  {
    title: '陳文玲 ',
    url:'/course?teacher=陳文玲 '
  },
  {
    title: '日常疼痛控制',
    url:'/course?course_name=日常疼痛控制'
  },
  
  {
    title: '徐珊惠*古承宗*',
    url:'/course?teacher=徐珊惠*古承宗*'
  },
  {
    title: '通識教育生活實踐（丁）',
    url:'/course?course_name=通識教育生活實踐（丁）'
  },
  
  {
    title: '徐珊惠*古承宗*',
    url:'/course?teacher=徐珊惠*古承宗*'
  },
  {
    title: '通識教育生活實踐（丙）',
    url:'/course?course_name=通識教育生活實踐（丙）'
  },
  
  {
    title: '徐珊惠*古承宗*',
    url:'/course?teacher=徐珊惠*古承宗*'
  },
  {
    title: '通識教育生活實踐（乙）',
    url:'/course?course_name=通識教育生活實踐（乙）'
  },
  
  {
    title: '徐珊惠*古承宗*',
    url:'/course?teacher=徐珊惠*古承宗*'
  },
  {
    title: '通識教育生活實踐（甲）',
    url:'/course?course_name=通識教育生活實踐（甲）'
  },
  
  {
    title: '徐珊惠*古承宗*',
    url:'/course?teacher=徐珊惠*古承宗*'
  },
  {
    title: '通識教育生活實踐（一）',
    url:'/course?course_name=通識教育生活實踐（一）'
  },
  
  {
    title: '徐珊惠*古承宗*',
    url:'/course?teacher=徐珊惠*古承宗*'
  },
  {
    title: '通識教育生活實踐（三）',
    url:'/course?course_name=通識教育生活實踐（三）'
  },
  
  {
    title: '徐珊惠*古承宗*',
    url:'/course?teacher=徐珊惠*古承宗*'
  },
  {
    title: '通識教育生活實踐（二）',
    url:'/course?course_name=通識教育生活實踐（二）'
  },
  
  {
    title: '徐珊惠*古承宗*',
    url:'/course?teacher=徐珊惠*古承宗*'
  },
  {
    title: '通識教育生活實踐（一）',
    url:'/course?course_name=通識教育生活實踐（一）'
  },
  
  {
    title: '楊永年 利德江*',
    url:'/course?teacher=楊永年 利德江*'
  },
  {
    title: '通識領袖論壇',
    url:'/course?course_name=通識領袖論壇'
  },
  
  {
    title: '蔣鎮宇 陳少燕 宋皇模 何盧勳 張松彬*廖泓鈞 劉雅心 邱慈暉 陳一菁 李純純 仲澤剛史 彭怡禎 吳文鑾 王涵青 李瑞花 ',
    url:'/course?teacher=蔣鎮宇 陳少燕 宋皇模 何盧勳 張松彬*廖泓鈞 劉雅心 邱慈暉 陳一菁 李純純 仲澤剛史 彭怡禎 吳文鑾 王涵青 李瑞花 '
  },
  {
    title: '生命科學概論',
    url:'/course?course_name=生命科學概論'
  },
  
  {
    title: '蔡昆霖 ',
    url:'/course?teacher=蔡昆霖 '
  },
  {
    title: '健康促進',
    url:'/course?course_name=健康促進'
  },
  
  {
    title: '翁明宏 ',
    url:'/course?teacher=翁明宏 '
  },
  {
    title: '經濟學概論',
    url:'/course?course_name=經濟學概論'
  },
  
  {
    title: '翁明宏 ',
    url:'/course?teacher=翁明宏 '
  },
  {
    title: '經濟學概論',
    url:'/course?course_name=經濟學概論'
  },
  
  {
    title: '蔡文斌 ',
    url:'/course?teacher=蔡文斌 '
  },
  {
    title: '法學緒論',
    url:'/course?course_name=法學緒論'
  },
  
  {
    title: '林睿哲 王士豪 楊士德 張憲彰 張志涵 葉明龍*胡晉嘉 鄭國順 蘇芳慶 莊漢聲 黃執中 方佑華 林哲偉 涂庭源 ',
    url:'/course?teacher=林睿哲 王士豪 楊士德 張憲彰 張志涵 葉明龍*胡晉嘉 鄭國順 蘇芳慶 莊漢聲 黃執中 方佑華 林哲偉 涂庭源 '
  },
  {
    title: '生醫用工程學導論',
    url:'/course?course_name=生醫用工程學導論'
  },
  
  {
    title: '高實玫*鄒文莉 ',
    url:'/course?teacher=高實玫*鄒文莉 '
  },
  {
    title: '英語智能與社區服務',
    url:'/course?course_name=英語智能與社區服務'
  },
  
  {
    title: '林怡薇 ',
    url:'/course?teacher=林怡薇 '
  },
  {
    title: '音樂舞蹈戲劇',
    url:'/course?course_name=音樂舞蹈戲劇'
  },
  
  {
    title: '林怡薇 ',
    url:'/course?teacher=林怡薇 '
  },
  {
    title: '西方古典音樂',
    url:'/course?course_name=西方古典音樂'
  },
  
  {
    title: '朱宏杰 ',
    url:'/course?teacher=朱宏杰 '
  },
  {
    title: '開放資料與智慧生活',
    url:'/course?course_name=開放資料與智慧生活'
  },
  
  {
    title: '王維潔 ',
    url:'/course?teacher=王維潔 '
  },
  {
    title: '音樂與建築',
    url:'/course?course_name=音樂與建築'
  },
  
  {
    title: '林朝成*王筱雯*',
    url:'/course?teacher=林朝成*王筱雯*'
  },
  {
    title: '曾文溪流域綜論',
    url:'/course?course_name=曾文溪流域綜論'
  },
  
  {
    title: '釋見見 ',
    url:'/course?teacher=釋見見 '
  },
  {
    title: '佛學中的生活智慧',
    url:'/course?course_name=佛學中的生活智慧'
  },
  
  {
    title: '蔡幸娟 ',
    url:'/course?teacher=蔡幸娟 '
  },
  {
    title: '歷史通論',
    url:'/course?course_name=歷史通論'
  },
  
  {
    title: '李啟彰 ',
    url:'/course?teacher=李啟彰 '
  },
  {
    title: '歷史與文化',
    url:'/course?course_name=歷史與文化'
  },
  
  {
    title: '蔡幸娟 ',
    url:'/course?teacher=蔡幸娟 '
  },
  {
    title: '婦女史',
    url:'/course?course_name=婦女史'
  },
  
  {
    title: '陳弘學 ',
    url:'/course?teacher=陳弘學 '
  },
  {
    title: '法政哲學',
    url:'/course?course_name=法政哲學'
  },
  
  {
    title: '林美惠 ',
    url:'/course?teacher=林美惠 '
  },
  {
    title: '中國文學導論',
    url:'/course?course_name=中國文學導論'
  },
  
  {
    title: '陳弘學 ',
    url:'/course?teacher=陳弘學 '
  },
  {
    title: '哲學概論',
    url:'/course?course_name=哲學概論'
  },
  
  {
    title: '陳弘學 ',
    url:'/course?teacher=陳弘學 '
  },
  {
    title: '哲學概論',
    url:'/course?course_name=哲學概論'
  },
  
  {
    title: '王涵青 劉宗霖 洪建中 王育民 曾大千 陳炳焜 林鼎晏 洪良宜*羅玉枝 ',
    url:'/course?teacher=王涵青 劉宗霖 洪建中 王育民 曾大千 陳炳焜 林鼎晏 洪良宜*羅玉枝 '
  },
  {
    title: '諾貝爾生醫獎得主所改變的世界',
    url:'/course?course_name=諾貝爾生醫獎得主所改變的世界'
  },
  
  {
    title: '徐之昇 ',
    url:'/course?teacher=徐之昇 '
  },
  {
    title: '當代全球健康議題',
    url:'/course?course_name=當代全球健康議題'
  },
  
  {
    title: '蕭惠中 鍾怡婷 陳世明*翁裕峯 ',
    url:'/course?teacher=蕭惠中 鍾怡婷 陳世明*翁裕峯 '
  },
  {
    title: '人文創新與社會實踐',
    url:'/course?course_name=人文創新與社會實踐'
  },
  
  {
    title: '陳琬真 ',
    url:'/course?teacher=陳琬真 '
  },
  {
    title: '科技產業分析與應用',
    url:'/course?course_name=科技產業分析與應用'
  },
  
  {
    title: '林麗娟 ',
    url:'/course?teacher=林麗娟 '
  },
  {
    title: '運動與健康',
    url:'/course?course_name=運動與健康'
  },
  
  {
    title: '張文芸 ',
    url:'/course?teacher=張文芸 '
  },
  {
    title: '家庭與健康',
    url:'/course?course_name=家庭與健康'
  },
  
  {
    title: '辛致煒*林威辰 ',
    url:'/course?teacher=辛致煒*林威辰 '
  },
  {
    title: '動物寄生蟲與生活',
    url:'/course?course_name=動物寄生蟲與生活'
  },
  
  {
    title: '吳天賞 ',
    url:'/course?teacher=吳天賞 '
  },
  {
    title: '中藥與健康',
    url:'/course?course_name=中藥與健康'
  },
  
  {
    title: '邱宏達 ',
    url:'/course?teacher=邱宏達 '
  },
  {
    title: '運動與科學',
    url:'/course?course_name=運動與科學'
  },
  
  {
    title: '郭文良 ',
    url:'/course?teacher=郭文良 '
  },
  {
    title: '科技與國防',
    url:'/course?course_name=科技與國防'
  },
  
  {
    title: '涂宗呈 ',
    url:'/course?teacher=涂宗呈 '
  },
  {
    title: '考古發現與歷史新貌',
    url:'/course?course_name=考古發現與歷史新貌'
  },
  
  {
    title: '莊輝濤 ',
    url:'/course?teacher=莊輝濤 '
  },
  {
    title: '政治學概論',
    url:'/course?course_name=政治學概論'
  },
  
  {
    title: '莊輝濤 ',
    url:'/course?teacher=莊輝濤 '
  },
  {
    title: '法學緒論',
    url:'/course?course_name=法學緒論'
  },
  
  {
    title: '鄭淑惠 ',
    url:'/course?teacher=鄭淑惠 '
  },
  {
    title: '幸福學',
    url:'/course?course_name=幸福學'
  },
  
  {
    title: '周麗芳*胡中凡 ',
    url:'/course?teacher=周麗芳*胡中凡 '
  },
  {
    title: '心理學',
    url:'/course?course_name=心理學'
  },
  
  {
    title: '楊佳翰 ',
    url:'/course?teacher=楊佳翰 '
  },
  {
    title: '問題分析與專案管理規劃',
    url:'/course?course_name=問題分析與專案管理規劃'
  },
  
  {
    title: '邵揮洲 ',
    url:'/course?teacher=邵揮洲 '
  },
  {
    title: '工程師的職涯探索',
    url:'/course?course_name=工程師的職涯探索'
  },
  
  {
    title: '賴麗娟 ',
    url:'/course?teacher=賴麗娟 '
  },
  {
    title: '女性文學選讀',
    url:'/course?course_name=女性文學選讀'
  },
  
  {
    title: '陳怡凱 ',
    url:'/course?teacher=陳怡凱 '
  },
  {
    title: '國際戰爭法',
    url:'/course?course_name=國際戰爭法'
  },
  
  {
    title: '林美惠 ',
    url:'/course?teacher=林美惠 '
  },
  {
    title: '先秦兩漢儒家思想',
    url:'/course?course_name=先秦兩漢儒家思想'
  },
  
  {
    title: '葉如萍 ',
    url:'/course?teacher=葉如萍 '
  },
  {
    title: '都市與生活',
    url:'/course?course_name=都市與生活'
  },
  
  {
    title: '侯明欽 ',
    url:'/course?teacher=侯明欽 '
  },
  {
    title: '生技研發成果商品化導論',
    url:'/course?course_name=生技研發成果商品化導論'
  },
  
  {
    title: '賴麗娟 ',
    url:'/course?teacher=賴麗娟 '
  },
  {
    title: '臺灣古典文學',
    url:'/course?course_name=臺灣古典文學'
  },
  
  {
    title: '林裕城 ',
    url:'/course?teacher=林裕城 '
  },
  {
    title: '客家文化導論',
    url:'/course?course_name=客家文化導論'
  },
  
  {
    title: '王雅倫 ',
    url:'/course?teacher=王雅倫 '
  },
  {
    title: '藝術、設計與生活',
    url:'/course?course_name=藝術、設計與生活'
  },
  
  {
    title: '于維杰 ',
    url:'/course?teacher=于維杰 '
  },
  {
    title: '短篇小說選讀',
    url:'/course?course_name=短篇小說選讀'
  },
  
  {
    title: '高淑媛 ',
    url:'/course?teacher=高淑媛 '
  },
  {
    title: '社會經濟史',
    url:'/course?course_name=社會經濟史'
  },
  
  {
    title: '李欣怡 ',
    url:'/course?teacher=李欣怡 '
  },
  {
    title: '劇場表演與創意',
    url:'/course?course_name=劇場表演與創意'
  },
  
  {
    title: '楊芳枝 ',
    url:'/course?teacher=楊芳枝 '
  },
  {
    title: '語言，權力，與身份認同政治',
    url:'/course?course_name=語言，權力，與身份認同政治'
  },
  
  {
    title: '林德政 ',
    url:'/course?teacher=林德政 '
  },
  {
    title: '口述歷史',
    url:'/course?course_name=口述歷史'
  },
  
  {
    title: '陳弘學 ',
    url:'/course?teacher=陳弘學 '
  },
  {
    title: '中國哲學概論',
    url:'/course?course_name=中國哲學概論'
  },
  
  {
    title: '張勝柏 ',
    url:'/course?teacher=張勝柏 '
  },
  {
    title: '歷史與文化',
    url:'/course?course_name=歷史與文化'
  },
  
  {
    title: '陳弘學 ',
    url:'/course?teacher=陳弘學 '
  },
  {
    title: '學術倫理：理論、案例與應用',
    url:'/course?course_name=學術倫理：理論、案例與應用'
  },
  
  {
    title: '游素玲 ',
    url:'/course?teacher=游素玲 '
  },
  {
    title: '性別與社會',
    url:'/course?course_name=性別與社會'
  },
  
  {
    title: '陳慧琴 仲曉玲*',
    url:'/course?teacher=陳慧琴 仲曉玲*'
  },
  {
    title: '創意行銷:社區、文化與場域',
    url:'/course?course_name=創意行銷:社區、文化與場域'
  },
  
  {
    title: '邱啟洲 ',
    url:'/course?teacher=邱啟洲 '
  },
  {
    title: '基因改造食品的好與壞',
    url:'/course?course_name=基因改造食品的好與壞'
  },
  
  {
    title: '辛致煒 ',
    url:'/course?teacher=辛致煒 '
  },
  {
    title: '水產養殖與健康',
    url:'/course?course_name=水產養殖與健康'
  },
  
  {
    title: '郭瑋君 ',
    url:'/course?teacher=郭瑋君 '
  },
  {
    title: '生活園藝',
    url:'/course?course_name=生活園藝'
  },
  
  {
    title: '郭文良 ',
    url:'/course?teacher=郭文良 '
  },
  {
    title: '科技與國防',
    url:'/course?course_name=科技與國防'
  },
  
  {
    title: '陳明輝 ',
    url:'/course?teacher=陳明輝 '
  },
  {
    title: 'WWW網頁設計',
    url:'/course?course_name=WWW網頁設計'
  },
  
  {
    title: '常正之 林睿哲*',
    url:'/course?teacher=常正之 林睿哲*'
  },
  {
    title: '工程概論',
    url:'/course?course_name=工程概論'
  },
  
  {
    title: '郭文良 ',
    url:'/course?teacher=郭文良 '
  },
  {
    title: '科技與國防',
    url:'/course?course_name=科技與國防'
  },
  
  {
    title: '周佩欣 ',
    url:'/course?teacher=周佩欣 '
  },
  {
    title: '環境污染與防治',
    url:'/course?course_name=環境污染與防治'
  },
  
  {
    title: '卓彥廷 ',
    url:'/course?teacher=卓彥廷 '
  },
  {
    title: '智慧綠生活',
    url:'/course?course_name=智慧綠生活'
  },
  
  {
    title: '何培夫 ',
    url:'/course?teacher=何培夫 '
  },
  {
    title: '古蹟與文化',
    url:'/course?course_name=古蹟與文化'
  },
  
  {
    title: '高美華*林幸慧 秦嘉嫄 林明澤 顧　盼 劉南芳 朱芳慧 陳佳彬 李欣怡 ',
    url:'/course?teacher=高美華*林幸慧 秦嘉嫄 林明澤 顧　盼 劉南芳 朱芳慧 陳佳彬 李欣怡 '
  },
  {
    title: '戲劇賞析',
    url:'/course?course_name=戲劇賞析'
  },
  
  {
    title: '陳佳彬 ',
    url:'/course?teacher=陳佳彬 '
  },
  {
    title: '戲劇與小說',
    url:'/course?course_name=戲劇與小說'
  },
  
  {
    title: '徐珊惠 ',
    url:'/course?teacher=徐珊惠 '
  },
  {
    title: '性別行動導向學習',
    url:'/course?course_name=性別行動導向學習'
  },
  
  {
    title: '楊政達*林君昱 胡書榕 曾元琦 莊佳蓉 ',
    url:'/course?teacher=楊政達*林君昱 胡書榕 曾元琦 莊佳蓉 '
  },
  {
    title: '心理學',
    url:'/course?course_name=心理學'
  },
  
  {
    title: '潘台雄 ',
    url:'/course?teacher=潘台雄 '
  },
  {
    title: '憲政民主體制',
    url:'/course?course_name=憲政民主體制'
  },
  
  {
    title: '潘台雄 ',
    url:'/course?teacher=潘台雄 '
  },
  {
    title: '憲政民主體制',
    url:'/course?course_name=憲政民主體制'
  },
  
  {
    title: '徐珊惠 ',
    url:'/course?teacher=徐珊惠 '
  },
  {
    title: '女性與運動',
    url:'/course?course_name=女性與運動'
  },
  
  {
    title: '鄭淑惠 ',
    url:'/course?teacher=鄭淑惠 '
  },
  {
    title: '無障礙生活與環境',
    url:'/course?course_name=無障礙生活與環境'
  },
  
  {
    title: '呂金河 ',
    url:'/course?teacher=呂金河 '
  },
  {
    title: '統計的世界',
    url:'/course?course_name=統計的世界'
  },
  
  {
    title: '陳計堯 ',
    url:'/course?teacher=陳計堯 '
  },
  {
    title: '歷史與文化',
    url:'/course?course_name=歷史與文化'
  },
  
  {
    title: '陳計堯 ',
    url:'/course?teacher=陳計堯 '
  },
  {
    title: '歷史與文化',
    url:'/course?course_name=歷史與文化'
  },
  
  {
    title: '陳佳彬 ',
    url:'/course?teacher=陳佳彬 '
  },
  {
    title: '戲劇與電影',
    url:'/course?course_name=戲劇與電影'
  },
  
  {
    title: '郭耀昌 ',
    url:'/course?teacher=郭耀昌 '
  },
  {
    title: '環境\,職業與健康人生',
    url:'/course?course_name=環境\,職業與健康人生'
  },
  
  {
    title: '黃紀茸 李旺龍*',
    url:'/course?teacher=黃紀茸 李旺龍*'
  },
  {
    title: '科學行銷概論',
    url:'/course?course_name=科學行銷概論'
  },
  
  {
    title: '景鴻鑫 ',
    url:'/course?teacher=景鴻鑫 '
  },
  {
    title: '航空科技與文化',
    url:'/course?course_name=航空科技與文化'
  },
  
  {
    title: '蔡美玲 ',
    url:'/course?teacher=蔡美玲 '
  },
  {
    title: '全球化與人文關懷',
    url:'/course?course_name=全球化與人文關懷'
  },
  
  {
    title: '鄭匡佑 ',
    url:'/course?teacher=鄭匡佑 '
  },
  {
    title: '潛能開發-魅力學',
    url:'/course?course_name=潛能開發-魅力學'
  },
  
  {
    title: '陳玉峯 ',
    url:'/course?teacher=陳玉峯 '
  },
  {
    title: '自然與宗教觀',
    url:'/course?course_name=自然與宗教觀'
  },
  
  {
    title: '林怡薇 ',
    url:'/course?teacher=林怡薇 '
  },
  {
    title: '西方古典音樂',
    url:'/course?course_name=西方古典音樂'
  },
  
  {
    title: '林怡薇 ',
    url:'/course?teacher=林怡薇 '
  },
  {
    title: '西方古典音樂',
    url:'/course?course_name=西方古典音樂'
  },
  
  {
    title: '李欣怡 ',
    url:'/course?teacher=李欣怡 '
  },
  {
    title: '台灣傳統戲曲賞析',
    url:'/course?course_name=台灣傳統戲曲賞析'
  },
  
  {
    title: '林怡薇 ',
    url:'/course?teacher=林怡薇 '
  },
  {
    title: '西方古典音樂',
    url:'/course?course_name=西方古典音樂'
  },
  
  {
    title: '林德政 ',
    url:'/course?teacher=林德政 '
  },
  {
    title: '口述歷史',
    url:'/course?course_name=口述歷史'
  },
  
  {
    title: '林德政 ',
    url:'/course?teacher=林德政 '
  },
  {
    title: '口述歷史',
    url:'/course?course_name=口述歷史'
  },
  
  {
    title: '李欣怡 ',
    url:'/course?teacher=李欣怡 '
  },
  {
    title: '台灣傳統戲曲賞析',
    url:'/course?course_name=台灣傳統戲曲賞析'
  },
  
  {
    title: '吳文璋 ',
    url:'/course?teacher=吳文璋 '
  },
  {
    title: '先秦兩漢儒家思想',
    url:'/course?course_name=先秦兩漢儒家思想'
  },
  
  {
    title: '賴麗娟 ',
    url:'/course?teacher=賴麗娟 '
  },
  {
    title: '女性文學選讀',
    url:'/course?course_name=女性文學選讀'
  },
  
  {
    title: '洪菁霞 ',
    url:'/course?teacher=洪菁霞 '
  },
  {
    title: '無障礙智慧生活環境',
    url:'/course?course_name=無障礙智慧生活環境'
  },
  
  {
    title: '蔣麗君 ',
    url:'/course?teacher=蔣麗君 '
  },
  {
    title: '倫理與組織行為',
    url:'/course?course_name=倫理與組織行為'
  },
  
  {
    title: '王毓正 ',
    url:'/course?teacher=王毓正 '
  },
  {
    title: '食農關係之重構與社會企業',
    url:'/course?course_name=食農關係之重構與社會企業'
  },
  
  {
    title: '紀志賢 施欣怡*何宗憲 ',
    url:'/course?teacher=紀志賢 施欣怡*何宗憲 '
  },
  {
    title: '急難救助',
    url:'/course?course_name=急難救助'
  },
  
  {
    title: '黃雅淑*汪翠瀅 林玲伊 徐秀雲 黃百川 張雁晴 ',
    url:'/course?teacher=黃雅淑*汪翠瀅 林玲伊 徐秀雲 黃百川 張雁晴 '
  },
  {
    title: '職能治療與健康',
    url:'/course?course_name=職能治療與健康'
  },
  
  {
    title: '陳炳宏 ',
    url:'/course?teacher=陳炳宏 '
  },
  {
    title: '界面化學的生活應用',
    url:'/course?course_name=界面化學的生活應用'
  },
  
  {
    title: '樂鍇．祿璞 ',
    url:'/course?teacher=樂鍇．祿璞 '
  },
  {
    title: '認識地震',
    url:'/course?course_name=認識地震'
  },
  
  {
    title: '張凌昇 ',
    url:'/course?teacher=張凌昇 '
  },
  {
    title: '應用電學',
    url:'/course?course_name=應用電學'
  },
  
  {
    title: '張世慧 ',
    url:'/course?teacher=張世慧 '
  },
  {
    title: '光電科技導論',
    url:'/course?course_name=光電科技導論'
  },
  
  {
    title: '郭文良 ',
    url:'/course?teacher=郭文良 '
  },
  {
    title: '科技與國防',
    url:'/course?course_name=科技與國防'
  },
  
  {
    title: '常正之 林睿哲*',
    url:'/course?teacher=常正之 林睿哲*'
  },
  {
    title: '工程概論',
    url:'/course?course_name=工程概論'
  },
  
  {
    title: '陳培殷 ',
    url:'/course?teacher=陳培殷 '
  },
  {
    title: '資訊科技應用',
    url:'/course?course_name=資訊科技應用'
  },
  
  {
    title: '陳金雄 ',
    url:'/course?teacher=陳金雄 '
  },
  {
    title: '實用中文及寫作',
    url:'/course?course_name=實用中文及寫作'
  },
  
  {
    title: '涂宗呈 ',
    url:'/course?teacher=涂宗呈 '
  },
  {
    title: '死亡文化史',
    url:'/course?course_name=死亡文化史'
  },
  
  {
    title: '楊尹瑄 ',
    url:'/course?teacher=楊尹瑄 '
  },
  {
    title: '歷史與文化',
    url:'/course?course_name=歷史與文化'
  },
  
  {
    title: '簡巧珍 ',
    url:'/course?teacher=簡巧珍 '
  },
  {
    title: '音樂概論',
    url:'/course?course_name=音樂概論'
  },
  
  {
    title: '鍾怡婷 林朝成*',
    url:'/course?teacher=鍾怡婷 林朝成*'
  },
  {
    title: '農村社會與文化',
    url:'/course?course_name=農村社會與文化'
  },
  
  {
    title: '簡巧珍 ',
    url:'/course?teacher=簡巧珍 '
  },
  {
    title: '音樂概論',
    url:'/course?course_name=音樂概論'
  },
  
  {
    title: '葉海煙 ',
    url:'/course?teacher=葉海煙 '
  },
  {
    title: '哲學概論',
    url:'/course?course_name=哲學概論'
  },
  
  {
    title: '葉海煙 ',
    url:'/course?teacher=葉海煙 '
  },
  {
    title: '倫理學',
    url:'/course?course_name=倫理學'
  },
  
  {
    title: '梁文韜 ',
    url:'/course?teacher=梁文韜 '
  },
  {
    title: '創意思考',
    url:'/course?course_name=創意思考'
  },
  
  {
    title: '鄭淑惠 ',
    url:'/course?teacher=鄭淑惠 '
  },
  {
    title: '探索自我與開發天賦',
    url:'/course?course_name=探索自我與開發天賦'
  },
  
  {
    title: '王金壽 ',
    url:'/course?teacher=王金壽 '
  },
  {
    title: '社會與電影',
    url:'/course?course_name=社會與電影'
  },
  
  {
    title: '鄭碧娥 ',
    url:'/course?teacher=鄭碧娥 '
  },
  {
    title: '應用統計',
    url:'/course?course_name=應用統計'
  },
  
  {
    title: '吳文璋 ',
    url:'/course?teacher=吳文璋 '
  },
  {
    title: '先秦兩漢儒家思想',
    url:'/course?course_name=先秦兩漢儒家思想'
  },
  
  {
    title: '于維杰 ',
    url:'/course?teacher=于維杰 '
  },
  {
    title: '短篇小說選讀',
    url:'/course?course_name=短篇小說選讀'
  },
  
  {
    title: '林怡薇 ',
    url:'/course?teacher=林怡薇 '
  },
  {
    title: '音樂舞蹈戲劇',
    url:'/course?course_name=音樂舞蹈戲劇'
  },
  
  {
    title: '徐德修 ',
    url:'/course?teacher=徐德修 '
  },
  {
    title: '基督思想',
    url:'/course?course_name=基督思想'
  },
  
  {
    title: '林怡薇 ',
    url:'/course?teacher=林怡薇 '
  },
  {
    title: '音樂舞蹈戲劇',
    url:'/course?course_name=音樂舞蹈戲劇'
  },
  
  {
    title: '陳弘學 ',
    url:'/course?teacher=陳弘學 '
  },
  {
    title: '法政哲學',
    url:'/course?course_name=法政哲學'
  },
  
  {
    title: '李欣怡 ',
    url:'/course?teacher=李欣怡 '
  },
  {
    title: '劇場表演與創意',
    url:'/course?course_name=劇場表演與創意'
  },
  
  {
    title: '林德政 ',
    url:'/course?teacher=林德政 '
  },
  {
    title: '口述歷史',
    url:'/course?course_name=口述歷史'
  },
  
  {
    title: '林怡薇 ',
    url:'/course?teacher=林怡薇 '
  },
  {
    title: '音樂舞蹈戲劇',
    url:'/course?course_name=音樂舞蹈戲劇'
  },
  
  {
    title: '蕭瓊瑞 ',
    url:'/course?teacher=蕭瓊瑞 '
  },
  {
    title: '歷史與文化',
    url:'/course?course_name=歷史與文化'
  },
  
  {
    title: '蕭瓊瑞 ',
    url:'/course?teacher=蕭瓊瑞 '
  },
  {
    title: '藝術史與藝術批評',
    url:'/course?course_name=藝術史與藝術批評'
  },
  
  {
    title: '簡巧珍 ',
    url:'/course?teacher=簡巧珍 '
  },
  {
    title: '音樂概論',
    url:'/course?course_name=音樂概論'
  },
  
  {
    title: '張桂豪 ',
    url:'/course?teacher=張桂豪 '
  },
  {
    title: '從創意發明到專利保護',
    url:'/course?course_name=從創意發明到專利保護'
  },
  
  {
    title: '黃華瑋 ',
    url:'/course?teacher=黃華瑋 '
  },
  {
    title: '金融講堂',
    url:'/course?course_name=金融講堂'
  },
  
  {
    title: '呂執中 ',
    url:'/course?teacher=呂執中 '
  },
  {
    title: '資訊系統應用',
    url:'/course?course_name=資訊系統應用'
  },
  
  {
    title: '陳育堂 張金石*楊宜杰 ',
    url:'/course?teacher=陳育堂 張金石*楊宜杰 '
  },
  {
    title: '醫學與健康',
    url:'/course?course_name=醫學與健康'
  },
  
  {
    title: '吳勝男 ',
    url:'/course?teacher=吳勝男 '
  },
  {
    title: '心血管生理病理學概論',
    url:'/course?course_name=心血管生理病理學概論'
  },
  
  {
    title: '劉明道 ',
    url:'/course?teacher=劉明道 '
  },
  {
    title: '與婦產科醫師的對話',
    url:'/course?course_name=與婦產科醫師的對話'
  },
  
  {
    title: '郭素娥 ',
    url:'/course?teacher=郭素娥 '
  },
  {
    title: '食品營養與健康',
    url:'/course?course_name=食品營養與健康'
  },
  
  {
    title: '蕭世裕 廖泓鈞 陳宗嶽 張清俊 洪健睿 黃玲惠 陳逸民 王涵青 張純純*盧福翊 林士鳴 陳立人 陳俊榮 張文綺 ',
    url:'/course?teacher=蕭世裕 廖泓鈞 陳宗嶽 張清俊 洪健睿 黃玲惠 陳逸民 王涵青 張純純*盧福翊 林士鳴 陳立人 陳俊榮 張文綺 '
  },
  {
    title: '生物技術概論',
    url:'/course?course_name=生物技術概論'
  },
  
  {
    title: '楊燿榮 ',
    url:'/course?teacher=楊燿榮 '
  },
  {
    title: '兒童青少年的健康',
    url:'/course?course_name=兒童青少年的健康'
  },
  
  {
    title: '林威辰 ',
    url:'/course?teacher=林威辰 '
  },
  {
    title: '疾病媒介',
    url:'/course?course_name=疾病媒介'
  },
  
  {
    title: '張智仁 ',
    url:'/course?teacher=張智仁 '
  },
  {
    title: '身體結構與功能',
    url:'/course?course_name=身體結構與功能'
  },
  
  {
    title: '蔣鎮宇 陳少燕 王浩文 邱慈暉 陳一菁 仲澤剛史 麥愛堂*吳文鑾 楊永年 劉景煌 ',
    url:'/course?teacher=蔣鎮宇 陳少燕 王浩文 邱慈暉 陳一菁 仲澤剛史 麥愛堂*吳文鑾 楊永年 劉景煌 '
  },
  {
    title: '生物多樣性',
    url:'/course?course_name=生物多樣性'
  },
  
  {
    title: '楊家琛 ',
    url:'/course?teacher=楊家琛 '
  },
  {
    title: '向量繪圖設計入門',
    url:'/course?course_name=向量繪圖設計入門'
  },
  
  {
    title: '楊家琛 ',
    url:'/course?teacher=楊家琛 '
  },
  {
    title: '影像編修入門',
    url:'/course?course_name=影像編修入門'
  },
  
  {
    title: '郭文良 ',
    url:'/course?teacher=郭文良 '
  },
  {
    title: '科技與國防',
    url:'/course?course_name=科技與國防'
  },
  
  {
    title: '呂傳盛 ',
    url:'/course?teacher=呂傳盛 '
  },
  {
    title: '材料科技概論',
    url:'/course?course_name=材料科技概論'
  },
  
  {
    title: '顏鴻森 ',
    url:'/course?teacher=顏鴻森 '
  },
  {
    title: '創意性工程設計',
    url:'/course?course_name=創意性工程設計'
  },
  
  {
    title: '陳明輝 ',
    url:'/course?teacher=陳明輝 '
  },
  {
    title: '電腦入門與應用',
    url:'/course?course_name=電腦入門與應用'
  },
  
  {
    title: '馬哲儒 ',
    url:'/course?teacher=馬哲儒 '
  },
  {
    title: '大自然的規律',
    url:'/course?course_name=大自然的規律'
  },
  
  {
    title: '黃守仁 ',
    url:'/course?teacher=黃守仁 '
  },
  {
    title: '應用化學與實驗',
    url:'/course?course_name=應用化學與實驗'
  },
  
  {
    title: '郭美芳 ',
    url:'/course?teacher=郭美芳 '
  },
  {
    title: '博物館學導論',
    url:'/course?course_name=博物館學導論'
  },
  
  {
    title: '鄭淑惠 ',
    url:'/course?teacher=鄭淑惠 '
  },
  {
    title: '情緒與壓力管理',
    url:'/course?course_name=情緒與壓力管理'
  },
  
  {
    title: '蔡維音 ',
    url:'/course?teacher=蔡維音 '
  },
  {
    title: '公民社會',
    url:'/course?course_name=公民社會'
  },
  
  {
    title: '蔣為文 ',
    url:'/course?teacher=蔣為文 '
  },
  {
    title: '越南社會與文化',
    url:'/course?course_name=越南社會與文化'
  },
  
  {
    title: '張有恒 ',
    url:'/course?teacher=張有恒 '
  },
  {
    title: '宗教哲學',
    url:'/course?course_name=宗教哲學'
  },
  
  {
    title: '楊尹瑄 ',
    url:'/course?teacher=楊尹瑄 '
  },
  {
    title: '歷史與文化',
    url:'/course?course_name=歷史與文化'
  },
  
  {
    title: '劉正千 ',
    url:'/course?teacher=劉正千 '
  },
  {
    title: '全球暖化與極端氣候事件',
    url:'/course?course_name=全球暖化與極端氣候事件'
  },
  
  {
    title: '蔡南全 ',
    url:'/course?teacher=蔡南全 '
  },
  {
    title: '感測器與致動器',
    url:'/course?course_name=感測器與致動器'
  },
  
  {
    title: '陳家豪 ',
    url:'/course?teacher=陳家豪 '
  },
  {
    title: '田口式品質設計方法',
    url:'/course?course_name=田口式品質設計方法'
  },
  
  {
    title: '藍兆杰 ',
    url:'/course?teacher=藍兆杰 '
  },
  {
    title: '高等動力學',
    url:'/course?course_name=高等動力學'
  },
  
  {
    title: '吳明勳 ',
    url:'/course?teacher=吳明勳 '
  },
  {
    title: '燃燒學',
    url:'/course?course_name=燃燒學'
  },
  
  {
    title: '陳家豪 ',
    url:'/course?teacher=陳家豪 '
  },
  {
    title: '產品設計方法',
    url:'/course?course_name=產品設計方法'
  },
  
  {
    title: '蔡明俊 ',
    url:'/course?teacher=蔡明俊 '
  },
  {
    title: '機器視覺',
    url:'/course?course_name=機器視覺'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '論文（二）',
    url:'/course?course_name=論文（二）'
  },
  
  {
    title: '蔡明俊 ',
    url:'/course?teacher=蔡明俊 '
  },
  {
    title: '機器人系統設計',
    url:'/course?course_name=機器人系統設計'
  },
  
  {
    title: '梁燕輝 ',
    url:'/course?teacher=梁燕輝 '
  },
  {
    title: '汽車學',
    url:'/course?course_name=汽車學'
  },
  
  {
    title: '陳嘉元*王明習 陳永裕 賴維祥 郭榮富 ',
    url:'/course?teacher=陳嘉元*王明習 陳永裕 賴維祥 郭榮富 '
  },
  {
    title: '機電創新實作（一）',
    url:'/course?course_name=機電創新實作（一）'
  },
  
  {
    title: '陳嘉元*王明習 陳永裕 賴維祥 郭榮富 ',
    url:'/course?teacher=陳嘉元*王明習 陳永裕 賴維祥 郭榮富 '
  },
  {
    title: '機電創新實作（一）',
    url:'/course?course_name=機電創新實作（一）'
  },
  
  {
    title: '蔡明祺 ',
    url:'/course?teacher=蔡明祺 '
  },
  {
    title: '伺服控制',
    url:'/course?course_name=伺服控制'
  },
  
  {
    title: '陳元方 ',
    url:'/course?teacher=陳元方 '
  },
  {
    title: '應力分析',
    url:'/course?course_name=應力分析'
  },
  
  {
    title: '陳國聲 ',
    url:'/course?teacher=陳國聲 '
  },
  {
    title: '系統動態分析與模擬',
    url:'/course?course_name=系統動態分析與模擬'
  },
  
  {
    title: '溫昌達 ',
    url:'/course?teacher=溫昌達 '
  },
  {
    title: '能源科技概論',
    url:'/course?course_name=能源科技概論'
  },
  
  {
    title: '施明璋 ',
    url:'/course?teacher=施明璋 '
  },
  {
    title: '油氣壓工程',
    url:'/course?course_name=油氣壓工程'
  },
  
  {
    title: '陳聯文 ',
    url:'/course?teacher=陳聯文 '
  },
  {
    title: '機械振動學',
    url:'/course?course_name=機械振動學'
  },
  
  {
    title: '吳俊煌 ',
    url:'/course?teacher=吳俊煌 '
  },
  {
    title: '工具設計',
    url:'/course?course_name=工具設計'
  },
  
  {
    title: '陳國聲 ',
    url:'/course?teacher=陳國聲 '
  },
  {
    title: '高等材料力學',
    url:'/course?course_name=高等材料力學'
  },
  
  {
    title: '顏鴻森 ',
    url:'/course?teacher=顏鴻森 '
  },
  {
    title: '創意性工程設計',
    url:'/course?course_name=創意性工程設計'
  },
  
  {
    title: '李驊登 ',
    url:'/course?teacher=李驊登 '
  },
  {
    title: '科技日文',
    url:'/course?course_name=科技日文'
  },
  
  {
    title: '李驊登 ',
    url:'/course?teacher=李驊登 '
  },
  {
    title: '鋼鐵材料',
    url:'/course?course_name=鋼鐵材料'
  },
  
  {
    title: '何清政 ',
    url:'/course?teacher=何清政 '
  },
  {
    title: '熱傳學',
    url:'/course?course_name=熱傳學'
  },
  
  {
    title: '吳明勳 ',
    url:'/course?teacher=吳明勳 '
  },
  {
    title: '機械工程實驗（三）',
    url:'/course?course_name=機械工程實驗（三）'
  },
  
  {
    title: '張錦裕 ',
    url:'/course?teacher=張錦裕 '
  },
  {
    title: '機械工程實驗（三）',
    url:'/course?course_name=機械工程實驗（三）'
  },
  
  {
    title: '劉彥辰 ',
    url:'/course?teacher=劉彥辰 '
  },
  {
    title: '機械專題實作',
    url:'/course?course_name=機械專題實作'
  },
  
  {
    title: '劉彥辰 ',
    url:'/course?teacher=劉彥辰 '
  },
  {
    title: '機械專題實作',
    url:'/course?course_name=機械專題實作'
  },
  
  {
    title: '陳嘉元 ',
    url:'/course?teacher=陳嘉元 '
  },
  {
    title: '熱傳學',
    url:'/course?course_name=熱傳學'
  },
  
  {
    title: '吳明勳 ',
    url:'/course?teacher=吳明勳 '
  },
  {
    title: '機械工程實驗（三）',
    url:'/course?course_name=機械工程實驗（三）'
  },
  
  {
    title: '溫昌達 ',
    url:'/course?teacher=溫昌達 '
  },
  {
    title: '機械工程實驗（三）',
    url:'/course?course_name=機械工程實驗（三）'
  },
  
  {
    title: '林啟倫 ',
    url:'/course?teacher=林啟倫 '
  },
  {
    title: '機械專題實作',
    url:'/course?course_name=機械專題實作'
  },
  
  {
    title: '林啟倫 ',
    url:'/course?teacher=林啟倫 '
  },
  {
    title: '機械專題實作',
    url:'/course?course_name=機械專題實作'
  },
  
  {
    title: '陳嘉元 ',
    url:'/course?teacher=陳嘉元 '
  },
  {
    title: '熱傳學',
    url:'/course?course_name=熱傳學'
  },
  
  {
    title: '張錦裕 ',
    url:'/course?teacher=張錦裕 '
  },
  {
    title: '機械工程實驗（三）',
    url:'/course?course_name=機械工程實驗（三）'
  },
  
  {
    title: '溫昌達 ',
    url:'/course?teacher=溫昌達 '
  },
  {
    title: '機械工程實驗（三）',
    url:'/course?course_name=機械工程實驗（三）'
  },
  
  {
    title: '劉至行 ',
    url:'/course?teacher=劉至行 '
  },
  {
    title: '機械專題實作',
    url:'/course?course_name=機械專題實作'
  },
  
  {
    title: '劉至行 ',
    url:'/course?teacher=劉至行 '
  },
  {
    title: '機械專題實作',
    url:'/course?course_name=機械專題實作'
  },
  
  {
    title: '屈子正 ',
    url:'/course?teacher=屈子正 '
  },
  {
    title: '材料力學（二）',
    url:'/course?course_name=材料力學（二）'
  },
  
  {
    title: '褚晴暉 ',
    url:'/course?teacher=褚晴暉 '
  },
  {
    title: '材料力學（二）',
    url:'/course?course_name=材料力學（二）'
  },
  
  {
    title: '方晶晶 ',
    url:'/course?teacher=方晶晶 '
  },
  {
    title: '程式設計',
    url:'/course?course_name=程式設計'
  },
  
  {
    title: '蘇演良 ',
    url:'/course?teacher=蘇演良 '
  },
  {
    title: '機械工程實驗（一）',
    url:'/course?course_name=機械工程實驗（一）'
  },
  
  {
    title: '李永春 ',
    url:'/course?teacher=李永春 '
  },
  {
    title: '機械工程實驗（一）',
    url:'/course?course_name=機械工程實驗（一）'
  },
  
  {
    title: '林昌進 ',
    url:'/course?teacher=林昌進 '
  },
  {
    title: '工場實習（二）',
    url:'/course?course_name=工場實習（二）'
  },
  
  {
    title: '藍兆杰 ',
    url:'/course?teacher=藍兆杰 '
  },
  {
    title: '工場實習（二）',
    url:'/course?course_name=工場實習（二）'
  },
  
  {
    title: '藍兆杰 ',
    url:'/course?teacher=藍兆杰 '
  },
  {
    title: '機動學（二）',
    url:'/course?course_name=機動學（二）'
  },
  
  {
    title: '藍兆杰 ',
    url:'/course?teacher=藍兆杰 '
  },
  {
    title: '機動學（二）',
    url:'/course?course_name=機動學（二）'
  },
  
  {
    title: '溫昌達 ',
    url:'/course?teacher=溫昌達 '
  },
  {
    title: '熱力學（二）',
    url:'/course?course_name=熱力學（二）'
  },
  
  {
    title: '王俊志 ',
    url:'/course?teacher=王俊志 '
  },
  {
    title: '機械製造',
    url:'/course?course_name=機械製造'
  },
  
  {
    title: '田思齊 ',
    url:'/course?teacher=田思齊 '
  },
  {
    title: '電工學',
    url:'/course?course_name=電工學'
  },
  
  {
    title: '陳鐵城 ',
    url:'/course?teacher=陳鐵城 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '蘇演良 ',
    url:'/course?teacher=蘇演良 '
  },
  {
    title: '機械工程實驗（一）',
    url:'/course?course_name=機械工程實驗（一）'
  },
  
  {
    title: '羅裕龍 ',
    url:'/course?teacher=羅裕龍 '
  },
  {
    title: '機械工程實驗（一）',
    url:'/course?course_name=機械工程實驗（一）'
  },
  
  {
    title: '黃文敏 ',
    url:'/course?teacher=黃文敏 '
  },
  {
    title: '工場實習（二）',
    url:'/course?course_name=工場實習（二）'
  },
  
  {
    title: '林昌進 ',
    url:'/course?teacher=林昌進 '
  },
  {
    title: '工場實習（二）',
    url:'/course?course_name=工場實習（二）'
  },
  
  {
    title: '藍兆杰 ',
    url:'/course?teacher=藍兆杰 '
  },
  {
    title: '機動學（二）',
    url:'/course?course_name=機動學（二）'
  },
  
  {
    title: '藍兆杰 ',
    url:'/course?teacher=藍兆杰 '
  },
  {
    title: '機動學（二）',
    url:'/course?course_name=機動學（二）'
  },
  
  {
    title: '吳志陽 ',
    url:'/course?teacher=吳志陽 '
  },
  {
    title: '熱力學（二）',
    url:'/course?course_name=熱力學（二）'
  },
  
  {
    title: '李榮顯 ',
    url:'/course?teacher=李榮顯 '
  },
  {
    title: '機械製造',
    url:'/course?course_name=機械製造'
  },
  
  {
    title: '施士塵 ',
    url:'/course?teacher=施士塵 '
  },
  {
    title: '電工學',
    url:'/course?course_name=電工學'
  },
  
  {
    title: '王逸君 ',
    url:'/course?teacher=王逸君 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '屈子正 ',
    url:'/course?teacher=屈子正 '
  },
  {
    title: '機械工程實驗（一）',
    url:'/course?course_name=機械工程實驗（一）'
  },
  
  {
    title: '屈子正 ',
    url:'/course?teacher=屈子正 '
  },
  {
    title: '機械工程實驗（一）',
    url:'/course?course_name=機械工程實驗（一）'
  },
  
  {
    title: '黃聖杰 ',
    url:'/course?teacher=黃聖杰 '
  },
  {
    title: '工場實習（二）',
    url:'/course?course_name=工場實習（二）'
  },
  
  {
    title: '李森墉 ',
    url:'/course?teacher=李森墉 '
  },
  {
    title: '工場實習（二）',
    url:'/course?course_name=工場實習（二）'
  },
  
  {
    title: '林啟倫 ',
    url:'/course?teacher=林啟倫 '
  },
  {
    title: '機動學（二）',
    url:'/course?course_name=機動學（二）'
  },
  
  {
    title: '林啟倫 ',
    url:'/course?teacher=林啟倫 '
  },
  {
    title: '機動學（二）',
    url:'/course?course_name=機動學（二）'
  },
  
  {
    title: '張錦裕 ',
    url:'/course?teacher=張錦裕 '
  },
  {
    title: '熱力學（二）',
    url:'/course?course_name=熱力學（二）'
  },
  
  {
    title: '林震銘 ',
    url:'/course?teacher=林震銘 '
  },
  {
    title: '機械製造',
    url:'/course?course_name=機械製造'
  },
  
  {
    title: '劉彥辰 ',
    url:'/course?teacher=劉彥辰 '
  },
  {
    title: '電工學',
    url:'/course?course_name=電工學'
  },
  
  {
    title: '王逸君 ',
    url:'/course?teacher=王逸君 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '李森墉 ',
    url:'/course?teacher=李森墉 '
  },
  {
    title: '應用力學（二）',
    url:'/course?course_name=應用力學（二）'
  },
  
  {
    title: '林啟倫 ',
    url:'/course?teacher=林啟倫 '
  },
  {
    title: '計算機概論',
    url:'/course?course_name=計算機概論'
  },
  
  {
    title: '林啟倫 ',
    url:'/course?teacher=林啟倫 '
  },
  {
    title: '計算機概論',
    url:'/course?course_name=計算機概論'
  },
  
  {
    title: '吳博雄 ',
    url:'/course?teacher=吳博雄 '
  },
  {
    title: '工程圖學（二）',
    url:'/course?course_name=工程圖學（二）'
  },
  
  {
    title: '吳博雄 ',
    url:'/course?teacher=吳博雄 '
  },
  {
    title: '工程圖學（二）',
    url:'/course?course_name=工程圖學（二）'
  },
  
  {
    title: '陳宜君 ',
    url:'/course?teacher=陳宜君 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '陳宜君 ',
    url:'/course?teacher=陳宜君 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '李偉賢 ',
    url:'/course?teacher=李偉賢 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '吳恭儉 ',
    url:'/course?teacher=吳恭儉 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '朱銘祥 ',
    url:'/course?teacher=朱銘祥 '
  },
  {
    title: '應用力學（二）',
    url:'/course?course_name=應用力學（二）'
  },
  
  {
    title: '方晶晶 ',
    url:'/course?teacher=方晶晶 '
  },
  {
    title: '計算機概論',
    url:'/course?course_name=計算機概論'
  },
  
  {
    title: '方晶晶 ',
    url:'/course?teacher=方晶晶 '
  },
  {
    title: '計算機概論',
    url:'/course?course_name=計算機概論'
  },
  
  {
    title: '林昌進 ',
    url:'/course?teacher=林昌進 '
  },
  {
    title: '工程圖學（二）',
    url:'/course?course_name=工程圖學（二）'
  },
  
  {
    title: '林昌進 ',
    url:'/course?teacher=林昌進 '
  },
  {
    title: '工程圖學（二）',
    url:'/course?course_name=工程圖學（二）'
  },
  
  {
    title: '許祖斌 ',
    url:'/course?teacher=許祖斌 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '黃文宏 ',
    url:'/course?teacher=黃文宏 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '羅裕龍 ',
    url:'/course?teacher=羅裕龍 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '陳重德 ',
    url:'/course?teacher=陳重德 '
  },
  {
    title: '應用力學（二）',
    url:'/course?course_name=應用力學（二）'
  },
  
  {
    title: '施士塵 ',
    url:'/course?teacher=施士塵 '
  },
  {
    title: '計算機概論',
    url:'/course?course_name=計算機概論'
  },
  
  {
    title: '施士塵 ',
    url:'/course?teacher=施士塵 '
  },
  {
    title: '計算機概論',
    url:'/course?course_name=計算機概論'
  },
  
  {
    title: '黃才烱 ',
    url:'/course?teacher=黃才烱 '
  },
  {
    title: '工程圖學（二）',
    url:'/course?course_name=工程圖學（二）'
  },
  
  {
    title: '黃才烱 ',
    url:'/course?teacher=黃才烱 '
  },
  {
    title: '工程圖學（二）',
    url:'/course?course_name=工程圖學（二）'
  },
  
  {
    title: '蔡永東 ',
    url:'/course?teacher=蔡永東 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '蔡永東 ',
    url:'/course?teacher=蔡永東 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '郭鴻文 ',
    url:'/course?teacher=郭鴻文 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '羅裕龍 ',
    url:'/course?teacher=羅裕龍 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '陳慧琴 高郁婷*',
    url:'/course?teacher=陳慧琴 高郁婷*'
  },
  {
    title: '研究所專業英語：工程及科學領域',
    url:'/course?course_name=研究所專業英語：工程及科學領域'
  },
  
  {
    title: '陳慧琴*高郁婷 ',
    url:'/course?teacher=陳慧琴*高郁婷 '
  },
  {
    title: '研究所專業英語：工程及科學領域',
    url:'/course?course_name=研究所專業英語：工程及科學領域'
  },
  
  {
    title: '陳慧琴 ',
    url:'/course?teacher=陳慧琴 '
  },
  {
    title: '研究所線上英文',
    url:'/course?course_name=研究所線上英文'
  },
  
  {
    title: '曾惠鈴 杜佩璇*賴諭萱 許富貴 ',
    url:'/course?teacher=曾惠鈴 杜佩璇*賴諭萱 許富貴 '
  },
  {
    title: '線上補強英文',
    url:'/course?course_name=線上補強英文'
  },
  
  {
    title: '蔣為文 ',
    url:'/course?teacher=蔣為文 '
  },
  {
    title: '越南語（二）',
    url:'/course?course_name=越南語（二）'
  },
  
  {
    title: '白芳怡 ',
    url:'/course?teacher=白芳怡 '
  },
  {
    title: '西班牙文（四）',
    url:'/course?course_name=西班牙文（四）'
  },
  
  {
    title: '白芳怡 ',
    url:'/course?teacher=白芳怡 '
  },
  {
    title: '西班牙文（二）',
    url:'/course?course_name=西班牙文（二）'
  },
  
  {
    title: '白芳怡 ',
    url:'/course?teacher=白芳怡 '
  },
  {
    title: '西班牙文（二）',
    url:'/course?course_name=西班牙文（二）'
  },
  
  {
    title: '白芳怡 ',
    url:'/course?teacher=白芳怡 '
  },
  {
    title: '西班牙文（二）',
    url:'/course?course_name=西班牙文（二）'
  },
  
  {
    title: '白芳怡 ',
    url:'/course?teacher=白芳怡 '
  },
  {
    title: '西班牙文（二）',
    url:'/course?course_name=西班牙文（二）'
  },
  
  {
    title: '白芳怡 ',
    url:'/course?teacher=白芳怡 '
  },
  {
    title: '西班牙文（二）',
    url:'/course?course_name=西班牙文（二）'
  },
  
  {
    title: '張淑慧 ',
    url:'/course?teacher=張淑慧 '
  },
  {
    title: '德文（六）',
    url:'/course?course_name=德文（六）'
  },
  
  {
    title: '張淑慧 ',
    url:'/course?teacher=張淑慧 '
  },
  {
    title: '德文（四）',
    url:'/course?course_name=德文（四）'
  },
  
  {
    title: '張淑慧 ',
    url:'/course?teacher=張淑慧 '
  },
  {
    title: '德文（四）',
    url:'/course?course_name=德文（四）'
  },
  
  {
    title: '張淑慧 ',
    url:'/course?teacher=張淑慧 '
  },
  {
    title: '德文（二）',
    url:'/course?course_name=德文（二）'
  },
  
  {
    title: '張淑慧 ',
    url:'/course?teacher=張淑慧 '
  },
  {
    title: '德文（二）',
    url:'/course?course_name=德文（二）'
  },
  
  {
    title: '張淑慧 ',
    url:'/course?teacher=張淑慧 '
  },
  {
    title: '德文（二）',
    url:'/course?course_name=德文（二）'
  },
  
  {
    title: '張淑慧 ',
    url:'/course?teacher=張淑慧 '
  },
  {
    title: '德文（二）',
    url:'/course?course_name=德文（二）'
  },
  
  {
    title: '張淑慧 ',
    url:'/course?teacher=張淑慧 '
  },
  {
    title: '德文（二）',
    url:'/course?course_name=德文（二）'
  },
  
  {
    title: '林蜀媛 ',
    url:'/course?teacher=林蜀媛 '
  },
  {
    title: '法文（六）',
    url:'/course?course_name=法文（六）'
  },
  
  {
    title: '林蜀媛 ',
    url:'/course?teacher=林蜀媛 '
  },
  {
    title: '法文（四）',
    url:'/course?course_name=法文（四）'
  },
  
  {
    title: '林蜀媛 ',
    url:'/course?teacher=林蜀媛 '
  },
  {
    title: '法文（四）',
    url:'/course?course_name=法文（四）'
  },
  
  {
    title: '林蜀媛 ',
    url:'/course?teacher=林蜀媛 '
  },
  {
    title: '法文（二）',
    url:'/course?course_name=法文（二）'
  },
  
  {
    title: '林蜀媛 ',
    url:'/course?teacher=林蜀媛 '
  },
  {
    title: '法文（二）',
    url:'/course?course_name=法文（二）'
  },
  
  {
    title: '林蜀媛 ',
    url:'/course?teacher=林蜀媛 '
  },
  {
    title: '法文（二）',
    url:'/course?course_name=法文（二）'
  },
  
  {
    title: '林蜀媛 ',
    url:'/course?teacher=林蜀媛 '
  },
  {
    title: '法文（二）',
    url:'/course?course_name=法文（二）'
  },
  
  {
    title: '林蜀媛 ',
    url:'/course?teacher=林蜀媛 '
  },
  {
    title: '法文（二）',
    url:'/course?course_name=法文（二）'
  },
  
  {
    title: '林蜀媛 ',
    url:'/course?teacher=林蜀媛 '
  },
  {
    title: '法文（二）',
    url:'/course?course_name=法文（二）'
  },
  
  {
    title: '林蜀媛 ',
    url:'/course?teacher=林蜀媛 '
  },
  {
    title: '法文（二）',
    url:'/course?course_name=法文（二）'
  },
  
  {
    title: '張巧螓 ',
    url:'/course?teacher=張巧螓 '
  },
  {
    title: '日文（八）',
    url:'/course?course_name=日文（八）'
  },
  
  {
    title: '井上智鶴 ',
    url:'/course?teacher=井上智鶴 '
  },
  {
    title: '日文（八）',
    url:'/course?course_name=日文（八）'
  },
  
  {
    title: '張巧螓 ',
    url:'/course?teacher=張巧螓 '
  },
  {
    title: '日文（六）',
    url:'/course?course_name=日文（六）'
  },
  
  {
    title: '井上智鶴 ',
    url:'/course?teacher=井上智鶴 '
  },
  {
    title: '日文（六）',
    url:'/course?course_name=日文（六）'
  },
  
  {
    title: '張巧螓 ',
    url:'/course?teacher=張巧螓 '
  },
  {
    title: '日文（六）',
    url:'/course?course_name=日文（六）'
  },
  
  {
    title: '朱戎梅 ',
    url:'/course?teacher=朱戎梅 '
  },
  {
    title: '日文（六）',
    url:'/course?course_name=日文（六）'
  },
  
  {
    title: '張巧螓 ',
    url:'/course?teacher=張巧螓 '
  },
  {
    title: '日文（四）',
    url:'/course?course_name=日文（四）'
  },
  
  {
    title: '張巧螓 ',
    url:'/course?teacher=張巧螓 '
  },
  {
    title: '日文（四）',
    url:'/course?course_name=日文（四）'
  },
  
  {
    title: '朱戎梅 ',
    url:'/course?teacher=朱戎梅 '
  },
  {
    title: '日文（四）',
    url:'/course?course_name=日文（四）'
  },
  
  {
    title: '張巧螓 ',
    url:'/course?teacher=張巧螓 '
  },
  {
    title: '日文（四）',
    url:'/course?course_name=日文（四）'
  },
  
  {
    title: '張巧螓 ',
    url:'/course?teacher=張巧螓 '
  },
  {
    title: '日文（四）',
    url:'/course?course_name=日文（四）'
  },
  
  {
    title: '井上智鶴 ',
    url:'/course?teacher=井上智鶴 '
  },
  {
    title: '日文（四）',
    url:'/course?course_name=日文（四）'
  },
  
  {
    title: '張巧螓 ',
    url:'/course?teacher=張巧螓 '
  },
  {
    title: '日文（四）',
    url:'/course?course_name=日文（四）'
  },
  
  {
    title: '張巧螓 ',
    url:'/course?teacher=張巧螓 '
  },
  {
    title: '日文（四）',
    url:'/course?course_name=日文（四）'
  },
  
  {
    title: '朱戎梅 ',
    url:'/course?teacher=朱戎梅 '
  },
  {
    title: '日文（四）',
    url:'/course?course_name=日文（四）'
  },
  
  {
    title: '井上智鶴 ',
    url:'/course?teacher=井上智鶴 '
  },
  {
    title: '日文（四）',
    url:'/course?course_name=日文（四）'
  },
  
  {
    title: '井上智鶴 ',
    url:'/course?teacher=井上智鶴 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '井上智鶴 ',
    url:'/course?teacher=井上智鶴 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '井上智鶴 ',
    url:'/course?teacher=井上智鶴 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '朱戎梅 ',
    url:'/course?teacher=朱戎梅 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '井上智鶴 ',
    url:'/course?teacher=井上智鶴 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '井上智鶴 ',
    url:'/course?teacher=井上智鶴 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '井上智鶴 ',
    url:'/course?teacher=井上智鶴 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '朱戎梅 ',
    url:'/course?teacher=朱戎梅 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '朱戎梅 ',
    url:'/course?teacher=朱戎梅 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '張巧螓 ',
    url:'/course?teacher=張巧螓 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '張巧螓 ',
    url:'/course?teacher=張巧螓 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '井上智鶴 ',
    url:'/course?teacher=井上智鶴 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '朱戎梅 ',
    url:'/course?teacher=朱戎梅 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '張巧螓 ',
    url:'/course?teacher=張巧螓 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '井上智鶴 ',
    url:'/course?teacher=井上智鶴 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '井上智鶴 ',
    url:'/course?teacher=井上智鶴 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '張巧螓 ',
    url:'/course?teacher=張巧螓 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '井上智鶴 ',
    url:'/course?teacher=井上智鶴 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '許富貴 ',
    url:'/course?teacher=許富貴 '
  },
  {
    title: '創意產業英文',
    url:'/course?course_name=創意產業英文'
  },
  
  {
    title: '柯瓊琪 ',
    url:'/course?teacher=柯瓊琪 '
  },
  {
    title: '人文醫學英文',
    url:'/course?course_name=人文醫學英文'
  },
  
  {
    title: '吳少方 ',
    url:'/course?teacher=吳少方 '
  },
  {
    title: '聽力與摘記練習',
    url:'/course?course_name=聽力與摘記練習'
  },
  
  {
    title: '杜佩璇 ',
    url:'/course?teacher=杜佩璇 '
  },
  {
    title: '跨文化溝通',
    url:'/course?course_name=跨文化溝通'
  },
  
  {
    title: '辛佳玲 ',
    url:'/course?teacher=辛佳玲 '
  },
  {
    title: '基礎學術英文',
    url:'/course?course_name=基礎學術英文'
  },
  
  {
    title: '陳世威 ',
    url:'/course?teacher=陳世威 '
  },
  {
    title: '英語解說與發表',
    url:'/course?course_name=英語解說與發表'
  },
  
  {
    title: '林明澤 ',
    url:'/course?teacher=林明澤 '
  },
  {
    title: '閱讀文學與文化',
    url:'/course?course_name=閱讀文學與文化'
  },
  
  {
    title: '葉靜怡 ',
    url:'/course?teacher=葉靜怡 '
  },
  {
    title: '職場英文',
    url:'/course?course_name=職場英文'
  },
  
  {
    title: '柯瓊琪 ',
    url:'/course?teacher=柯瓊琪 '
  },
  {
    title: '資訊英文',
    url:'/course?course_name=資訊英文'
  },
  
  {
    title: '曾惠鈴 ',
    url:'/course?teacher=曾惠鈴 '
  },
  {
    title: '餐旅英文',
    url:'/course?course_name=餐旅英文'
  },
  
  {
    title: '唐遜宜 ',
    url:'/course?teacher=唐遜宜 '
  },
  {
    title: '聽力與摘記練習',
    url:'/course?course_name=聽力與摘記練習'
  },
  
  {
    title: '杜佩璇 ',
    url:'/course?teacher=杜佩璇 '
  },
  {
    title: '跨文化溝通',
    url:'/course?course_name=跨文化溝通'
  },
  
  {
    title: '賴諭萱 ',
    url:'/course?teacher=賴諭萱 '
  },
  {
    title: '基礎學術溝通',
    url:'/course?course_name=基礎學術溝通'
  },
  
  {
    title: '陳慧琴 ',
    url:'/course?teacher=陳慧琴 '
  },
  {
    title: '英語解說與發表',
    url:'/course?course_name=英語解說與發表'
  },
  
  {
    title: '陳安純 ',
    url:'/course?teacher=陳安純 '
  },
  {
    title: '國際禮儀與溝通',
    url:'/course?course_name=國際禮儀與溝通'
  },
  
  {
    title: '賴諭萱 ',
    url:'/course?teacher=賴諭萱 '
  },
  {
    title: '餐旅英文',
    url:'/course?course_name=餐旅英文'
  },
  
  {
    title: '曾惠鈴 ',
    url:'/course?teacher=曾惠鈴 '
  },
  {
    title: '職場英文',
    url:'/course?course_name=職場英文'
  },
  
  {
    title: '柯瓊琪 ',
    url:'/course?teacher=柯瓊琪 '
  },
  {
    title: '人文醫學英文',
    url:'/course?course_name=人文醫學英文'
  },
  
  {
    title: '許富貴 ',
    url:'/course?teacher=許富貴 '
  },
  {
    title: '商業溝通英文',
    url:'/course?course_name=商業溝通英文'
  },
  
  {
    title: '葉靜怡 ',
    url:'/course?teacher=葉靜怡 '
  },
  {
    title: '生物科技英文',
    url:'/course?course_name=生物科技英文'
  },
  
  {
    title: '吳少方 ',
    url:'/course?teacher=吳少方 '
  },
  {
    title: '聽力與摘記練習',
    url:'/course?course_name=聽力與摘記練習'
  },
  
  {
    title: '辛佳玲 ',
    url:'/course?teacher=辛佳玲 '
  },
  {
    title: '基礎學術英文',
    url:'/course?course_name=基礎學術英文'
  },
  
  {
    title: '高郁婷 ',
    url:'/course?teacher=高郁婷 '
  },
  {
    title: '基礎英文寫作',
    url:'/course?course_name=基礎英文寫作'
  },
  
  {
    title: '陳安純 ',
    url:'/course?teacher=陳安純 '
  },
  {
    title: '國際禮儀與溝通',
    url:'/course?course_name=國際禮儀與溝通'
  },
  
  {
    title: '陳慧琴 ',
    url:'/course?teacher=陳慧琴 '
  },
  {
    title: '商管英文',
    url:'/course?course_name=商管英文'
  },
  
  {
    title: '吳少方 ',
    url:'/course?teacher=吳少方 '
  },
  {
    title: '高科技產業英文',
    url:'/course?course_name=高科技產業英文'
  },
  
  {
    title: '杜佩璇 ',
    url:'/course?teacher=杜佩璇 '
  },
  {
    title: '基礎科學英文',
    url:'/course?course_name=基礎科學英文'
  },
  
  {
    title: '葉靜怡 ',
    url:'/course?teacher=葉靜怡 '
  },
  {
    title: '基礎學術溝通',
    url:'/course?course_name=基礎學術溝通'
  },
  
  {
    title: '許富貴 ',
    url:'/course?teacher=許富貴 '
  },
  {
    title: '跨文化溝通',
    url:'/course?course_name=跨文化溝通'
  },
  
  {
    title: '陳俐文 ',
    url:'/course?teacher=陳俐文 '
  },
  {
    title: '基礎學術英文',
    url:'/course?course_name=基礎學術英文'
  },
  
  {
    title: '阮素菁 ',
    url:'/course?teacher=阮素菁 '
  },
  {
    title: '基礎英文寫作',
    url:'/course?course_name=基礎英文寫作'
  },
  
  {
    title: '賴諭萱 ',
    url:'/course?teacher=賴諭萱 '
  },
  {
    title: '商業溝通英文',
    url:'/course?course_name=商業溝通英文'
  },
  
  {
    title: '曾惠鈴 ',
    url:'/course?teacher=曾惠鈴 '
  },
  {
    title: '基礎學術英文',
    url:'/course?course_name=基礎學術英文'
  },
  
  {
    title: '陳慧琴 ',
    url:'/course?teacher=陳慧琴 '
  },
  {
    title: '經貿英文',
    url:'/course?course_name=經貿英文'
  },
  
  {
    title: '杜佩璇 ',
    url:'/course?teacher=杜佩璇 '
  },
  {
    title: '資訊英文',
    url:'/course?course_name=資訊英文'
  },
  
  {
    title: '許富貴 ',
    url:'/course?teacher=許富貴 '
  },
  {
    title: '跨文化溝通',
    url:'/course?course_name=跨文化溝通'
  },
  
  {
    title: '吳少方 ',
    url:'/course?teacher=吳少方 '
  },
  {
    title: '聽力與摘記練習',
    url:'/course?course_name=聽力與摘記練習'
  },
  
  {
    title: '柯瓊琪 ',
    url:'/course?teacher=柯瓊琪 '
  },
  {
    title: '基礎學術溝通',
    url:'/course?course_name=基礎學術溝通'
  },
  
  {
    title: '葉靜怡 ',
    url:'/course?teacher=葉靜怡 '
  },
  {
    title: '英語解說與發表',
    url:'/course?course_name=英語解說與發表'
  },
  
  {
    title: '高郁婷 ',
    url:'/course?teacher=高郁婷 '
  },
  {
    title: '學術英文寫作',
    url:'/course?course_name=學術英文寫作'
  },
  
  {
    title: '辛佳玲 ',
    url:'/course?teacher=辛佳玲 '
  },
  {
    title: '創意產業英文',
    url:'/course?course_name=創意產業英文'
  },
  
  {
    title: '柯瓊琪 ',
    url:'/course?teacher=柯瓊琪 '
  },
  {
    title: '人文醫學英文',
    url:'/course?course_name=人文醫學英文'
  },
  
  {
    title: '賴諭萱 ',
    url:'/course?teacher=賴諭萱 '
  },
  {
    title: '餐旅英文',
    url:'/course?course_name=餐旅英文'
  },
  
  {
    title: '唐遜宜 ',
    url:'/course?teacher=唐遜宜 '
  },
  {
    title: '聽力與摘記練習',
    url:'/course?course_name=聽力與摘記練習'
  },
  
  {
    title: '曾惠鈴 ',
    url:'/course?teacher=曾惠鈴 '
  },
  {
    title: '基礎學術英文',
    url:'/course?course_name=基礎學術英文'
  },
  
  {
    title: '杜佩璇 ',
    url:'/course?teacher=杜佩璇 '
  },
  {
    title: '資訊英文',
    url:'/course?course_name=資訊英文'
  },
  
  {
    title: '許富貴 ',
    url:'/course?teacher=許富貴 '
  },
  {
    title: '跨文化溝通',
    url:'/course?course_name=跨文化溝通'
  },
  
  {
    title: '柯瓊琪 ',
    url:'/course?teacher=柯瓊琪 '
  },
  {
    title: '基礎學術溝通',
    url:'/course?course_name=基礎學術溝通'
  },
  
  {
    title: '吳少方 ',
    url:'/course?teacher=吳少方 '
  },
  {
    title: '學術英文寫作',
    url:'/course?course_name=學術英文寫作'
  },
  
  {
    title: '高郁婷 ',
    url:'/course?teacher=高郁婷 '
  },
  {
    title: '英語解說與發表',
    url:'/course?course_name=英語解說與發表'
  },
  
  {
    title: '葉靜怡 ',
    url:'/course?teacher=葉靜怡 '
  },
  {
    title: '職場英文',
    url:'/course?course_name=職場英文'
  },
  
  {
    title: '杜佩璇 ',
    url:'/course?teacher=杜佩璇 '
  },
  {
    title: '基礎科學英文',
    url:'/course?course_name=基礎科學英文'
  },
  
  {
    title: '辛佳玲 ',
    url:'/course?teacher=辛佳玲 '
  },
  {
    title: '基礎工程英文',
    url:'/course?course_name=基礎工程英文'
  },
  
  {
    title: '曾惠鈴 ',
    url:'/course?teacher=曾惠鈴 '
  },
  {
    title: '基礎學術英文',
    url:'/course?course_name=基礎學術英文'
  },
  
  {
    title: '賴諭萱 ',
    url:'/course?teacher=賴諭萱 '
  },
  {
    title: '基礎學術溝通',
    url:'/course?course_name=基礎學術溝通'
  },
  
  {
    title: '阮素菁 ',
    url:'/course?teacher=阮素菁 '
  },
  {
    title: '聽力與摘記練習',
    url:'/course?course_name=聽力與摘記練習'
  },
  
  {
    title: '辛佳玲 ',
    url:'/course?teacher=辛佳玲 '
  },
  {
    title: '英語解說與發表',
    url:'/course?course_name=英語解說與發表'
  },
  
  {
    title: '許富貴 ',
    url:'/course?teacher=許富貴 '
  },
  {
    title: '創意產業英文',
    url:'/course?course_name=創意產業英文'
  },
  
  {
    title: '葉靜怡 ',
    url:'/course?teacher=葉靜怡 '
  },
  {
    title: '生物科技英文',
    url:'/course?course_name=生物科技英文'
  },
  
  {
    title: '吳少方 ',
    url:'/course?teacher=吳少方 '
  },
  {
    title: '聽力與摘記練習',
    url:'/course?course_name=聽力與摘記練習'
  },
  
  {
    title: '賴諭萱 ',
    url:'/course?teacher=賴諭萱 '
  },
  {
    title: '基礎學術溝通',
    url:'/course?course_name=基礎學術溝通'
  },
  
  {
    title: '曾惠鈴 ',
    url:'/course?teacher=曾惠鈴 '
  },
  {
    title: '英語解說與發表',
    url:'/course?course_name=英語解說與發表'
  },
  
  {
    title: '林明澤 ',
    url:'/course?teacher=林明澤 '
  },
  {
    title: '閱讀文學與文化',
    url:'/course?course_name=閱讀文學與文化'
  },
  
  {
    title: '辛佳玲 ',
    url:'/course?teacher=辛佳玲 '
  },
  {
    title: '基礎工程英文',
    url:'/course?course_name=基礎工程英文'
  },
  
  {
    title: '許富貴 ',
    url:'/course?teacher=許富貴 '
  },
  {
    title: '創意產業英文',
    url:'/course?course_name=創意產業英文'
  },
  
  {
    title: '杜佩璇 ',
    url:'/course?teacher=杜佩璇 '
  },
  {
    title: '基礎科學英文',
    url:'/course?course_name=基礎科學英文'
  },
  
  {
    title: '吳少方 ',
    url:'/course?teacher=吳少方 '
  },
  {
    title: '生物科技英文',
    url:'/course?course_name=生物科技英文'
  },
  
  {
    title: '葉靜怡 ',
    url:'/course?teacher=葉靜怡 '
  },
  {
    title: '跨文化溝通',
    url:'/course?course_name=跨文化溝通'
  },
  
  {
    title: '鍾淑玫 ',
    url:'/course?teacher=鍾淑玫 '
  },
  {
    title: '基礎學術英文',
    url:'/course?course_name=基礎學術英文'
  },
  
  {
    title: '阮素菁 ',
    url:'/course?teacher=阮素菁 '
  },
  {
    title: '聽力與摘記練習',
    url:'/course?course_name=聽力與摘記練習'
  },
  
  {
    title: '柯瓊琪 ',
    url:'/course?teacher=柯瓊琪 '
  },
  {
    title: '基礎學術溝通',
    url:'/course?course_name=基礎學術溝通'
  },
  
  {
    title: '曾惠鈴 ',
    url:'/course?teacher=曾惠鈴 '
  },
  {
    title: '餐旅英文',
    url:'/course?course_name=餐旅英文'
  },
  
  {
    title: '辛佳玲 ',
    url:'/course?teacher=辛佳玲 '
  },
  {
    title: '基礎工程英文',
    url:'/course?course_name=基礎工程英文'
  },
  
  {
    title: '賴諭萱 ',
    url:'/course?teacher=賴諭萱 '
  },
  {
    title: '基礎學術溝通',
    url:'/course?course_name=基礎學術溝通'
  },
  
  {
    title: '鍾淑玫 ',
    url:'/course?teacher=鍾淑玫 '
  },
  {
    title: '基礎學術英文',
    url:'/course?course_name=基礎學術英文'
  },
  
  {
    title: '林永明 ',
    url:'/course?teacher=林永明 '
  },
  {
    title: '泌尿科實習',
    url:'/course?course_name=泌尿科實習'
  },
  
  {
    title: '姚維仁*',
    url:'/course?teacher=姚維仁*'
  },
  {
    title: '國外實習（二）',
    url:'/course?course_name=國外實習（二）'
  },
  
  {
    title: '姚維仁*',
    url:'/course?teacher=姚維仁*'
  },
  {
    title: '國外實習（一）',
    url:'/course?course_name=國外實習（一）'
  },
  
  {
    title: '姚維仁*',
    url:'/course?teacher=姚維仁*'
  },
  {
    title: '院外實習（二）',
    url:'/course?course_name=院外實習（二）'
  },
  
  {
    title: '姚維仁*',
    url:'/course?teacher=姚維仁*'
  },
  {
    title: '院外實習（一）',
    url:'/course?course_name=院外實習（一）'
  },
  
  {
    title: '莊佳璋*',
    url:'/course?teacher=莊佳璋*'
  },
  {
    title: '急診科實習',
    url:'/course?course_name=急診科實習'
  },
  
  {
    title: '吳政龍*',
    url:'/course?teacher=吳政龍*'
  },
  {
    title: '職業環境醫學科實習',
    url:'/course?course_name=職業環境醫學科實習'
  },
  
  {
    title: '吳晉祥*',
    url:'/course?teacher=吳晉祥*'
  },
  {
    title: '家庭醫學科實習',
    url:'/course?course_name=家庭醫學科實習'
  },
  
  {
    title: '王建國*',
    url:'/course?teacher=王建國*'
  },
  {
    title: '放射科實習',
    url:'/course?course_name=放射科實習'
  },
  
  {
    title: '張孔昭*',
    url:'/course?teacher=張孔昭*'
  },
  {
    title: '病理科實習',
    url:'/course?course_name=病理科實習'
  },
  
  {
    title: '陳柏熹*張維紘 ',
    url:'/course?teacher=陳柏熹*張維紘 '
  },
  {
    title: '精神科實習',
    url:'/course?course_name=精神科實習'
  },
  
  {
    title: '蕭振仁*',
    url:'/course?teacher=蕭振仁*'
  },
  {
    title: '耳鼻喉科實習',
    url:'/course?course_name=耳鼻喉科實習'
  },
  
  {
    title: '許聖民*',
    url:'/course?teacher=許聖民*'
  },
  {
    title: '眼科實習',
    url:'/course?course_name=眼科實習'
  },
  
  {
    title: '蘇維仁*',
    url:'/course?teacher=蘇維仁*'
  },
  {
    title: '骨科實習',
    url:'/course?course_name=骨科實習'
  },
  
  {
    title: '林宙晴 ',
    url:'/course?teacher=林宙晴 '
  },
  {
    title: '神經科實習',
    url:'/course?course_name=神經科實習'
  },
  
  {
    title: '趙曉秋*',
    url:'/course?teacher=趙曉秋*'
  },
  {
    title: '皮膚科實習',
    url:'/course?course_name=皮膚科實習'
  },
  
  {
    title: '官大紳*',
    url:'/course?teacher=官大紳*'
  },
  {
    title: '復健科實習',
    url:'/course?course_name=復健科實習'
  },
  
  {
    title: '曾稼志*',
    url:'/course?teacher=曾稼志*'
  },
  {
    title: '麻醉科實習',
    url:'/course?course_name=麻醉科實習'
  },
  
  {
    title: '楊燿榮*',
    url:'/course?teacher=楊燿榮*'
  },
  {
    title: '小兒科實習',
    url:'/course?course_name=小兒科實習'
  },
  
  {
    title: '吳孟興*',
    url:'/course?teacher=吳孟興*'
  },
  {
    title: '婦產科實習',
    url:'/course?course_name=婦產科實習'
  },
  
  {
    title: '李經維*',
    url:'/course?teacher=李經維*'
  },
  {
    title: '外科實習',
    url:'/course?course_name=外科實習'
  },
  
  {
    title: '劉明煇 ',
    url:'/course?teacher=劉明煇 '
  },
  {
    title: '內科實習',
    url:'/course?course_name=內科實習'
  },
  
  {
    title: '何月仁*',
    url:'/course?teacher=何月仁*'
  },
  {
    title: '臨床推理特論',
    url:'/course?course_name=臨床推理特論'
  },
  
  {
    title: '官大紳*',
    url:'/course?teacher=官大紳*'
  },
  {
    title: '復健科實習一',
    url:'/course?course_name=復健科實習一'
  },
  
  {
    title: '官大紳*',
    url:'/course?teacher=官大紳*'
  },
  {
    title: '復健醫學',
    url:'/course?course_name=復健醫學'
  },
  
  {
    title: '林宙晴 ',
    url:'/course?teacher=林宙晴 '
  },
  {
    title: '神經科實習一',
    url:'/course?course_name=神經科實習一'
  },
  
  {
    title: '林宙晴 ',
    url:'/course?teacher=林宙晴 '
  },
  {
    title: '神經科學',
    url:'/course?course_name=神經科學'
  },
  
  {
    title: '蘇維仁*',
    url:'/course?teacher=蘇維仁*'
  },
  {
    title: '骨科實習一',
    url:'/course?course_name=骨科實習一'
  },
  
  {
    title: '蘇維仁*',
    url:'/course?teacher=蘇維仁*'
  },
  {
    title: '骨科學',
    url:'/course?course_name=骨科學'
  },
  
  {
    title: '莊佳璋*',
    url:'/course?teacher=莊佳璋*'
  },
  {
    title: '急診醫學科實習一',
    url:'/course?course_name=急診醫學科實習一'
  },
  
  {
    title: '莊佳璋*',
    url:'/course?teacher=莊佳璋*'
  },
  {
    title: '急診醫學',
    url:'/course?course_name=急診醫學'
  },
  
  {
    title: '劉明煇*',
    url:'/course?teacher=劉明煇*'
  },
  {
    title: '內科實習（二）',
    url:'/course?course_name=內科實習（二）'
  },
  
  {
    title: '劉明煇*',
    url:'/course?teacher=劉明煇*'
  },
  {
    title: '內科學（四）',
    url:'/course?course_name=內科學（四）'
  },
  
  {
    title: '蕭振仁*',
    url:'/course?teacher=蕭振仁*'
  },
  {
    title: '耳鼻喉科實習一',
    url:'/course?course_name=耳鼻喉科實習一'
  },
  
  {
    title: '蕭振仁*',
    url:'/course?teacher=蕭振仁*'
  },
  {
    title: '耳鼻喉科學',
    url:'/course?course_name=耳鼻喉科學'
  },
  
  {
    title: '許聖民*',
    url:'/course?teacher=許聖民*'
  },
  {
    title: '眼科實習一',
    url:'/course?course_name=眼科實習一'
  },
  
  {
    title: '許聖民*',
    url:'/course?teacher=許聖民*'
  },
  {
    title: '眼科學',
    url:'/course?course_name=眼科學'
  },
  
  {
    title: '趙曉秋*',
    url:'/course?teacher=趙曉秋*'
  },
  {
    title: '皮膚科實習一',
    url:'/course?course_name=皮膚科實習一'
  },
  
  {
    title: '趙曉秋*',
    url:'/course?teacher=趙曉秋*'
  },
  {
    title: '皮膚科學',
    url:'/course?course_name=皮膚科學'
  },
  
  {
    title: '李經維 ',
    url:'/course?teacher=李經維 '
  },
  {
    title: '外科實習（二）',
    url:'/course?course_name=外科實習（二）'
  },
  
  {
    title: '李經維*',
    url:'/course?teacher=李經維*'
  },
  {
    title: '外科學（三）',
    url:'/course?course_name=外科學（三）'
  },
  
  {
    title: '林永明*',
    url:'/course?teacher=林永明*'
  },
  {
    title: '泌尿科實習一',
    url:'/course?course_name=泌尿科實習一'
  },
  
  {
    title: '林永明*',
    url:'/course?teacher=林永明*'
  },
  {
    title: '泌尿科學',
    url:'/course?course_name=泌尿科學'
  },
  
  {
    title: '曾稼志*',
    url:'/course?teacher=曾稼志*'
  },
  {
    title: '麻醉科實習一',
    url:'/course?course_name=麻醉科實習一'
  },
  
  {
    title: '曾稼志*',
    url:'/course?teacher=曾稼志*'
  },
  {
    title: '麻醉學',
    url:'/course?course_name=麻醉學'
  },
  
  {
    title: '李經維 ',
    url:'/course?teacher=李經維 '
  },
  {
    title: '外科腫瘤學',
    url:'/course?course_name=外科腫瘤學'
  },
  
  {
    title: '楊燿榮 ',
    url:'/course?teacher=楊燿榮 '
  },
  {
    title: '小兒科學特論',
    url:'/course?course_name=小兒科學特論'
  },
  
  {
    title: '蘇芳慶 林啟禎 楊俊佑 賴國安 謝式洲 蘇維仁*張志偉 黃國淵 戴大為 吳柏廷 ',
    url:'/course?teacher=蘇芳慶 林啟禎 楊俊佑 賴國安 謝式洲 蘇維仁*張志偉 黃國淵 戴大為 吳柏廷 '
  },
  {
    title: '骨外科特論',
    url:'/course?course_name=骨外科特論'
  },
  
  {
    title: '林宙晴*林志勝 ',
    url:'/course?teacher=林宙晴*林志勝 '
  },
  {
    title: '神經學專題討論',
    url:'/course?course_name=神經學專題討論'
  },
  
  {
    title: '張雋曦*',
    url:'/course?teacher=張雋曦*'
  },
  {
    title: '國際臨床案例研討',
    url:'/course?course_name=國際臨床案例研討'
  },
  
  {
    title: '郭保麟 劉明煇 林鵬展 林毓志 邱威鑫 ',
    url:'/course?teacher=郭保麟 劉明煇 林鵬展 林毓志 邱威鑫 '
  },
  {
    title: '醫學倫理學',
    url:'/course?course_name=醫學倫理學'
  },
  
  {
    title: '張孔昭*',
    url:'/course?teacher=張孔昭*'
  },
  {
    title: '臨床病理討論',
    url:'/course?course_name=臨床病理討論'
  },
  
  {
    title: '郭耀昌*',
    url:'/course?teacher=郭耀昌*'
  },
  {
    title: '職業環境醫學科實習一',
    url:'/course?course_name=職業環境醫學科實習一'
  },
  
  {
    title: '李經維*',
    url:'/course?teacher=李經維*'
  },
  {
    title: '外科實習（一）',
    url:'/course?course_name=外科實習（一）'
  },
  
  {
    title: '王建國*',
    url:'/course?teacher=王建國*'
  },
  {
    title: '放射線科實習一',
    url:'/course?course_name=放射線科實習一'
  },
  
  {
    title: '吳晉祥*',
    url:'/course?teacher=吳晉祥*'
  },
  {
    title: '家庭醫學科實習一',
    url:'/course?course_name=家庭醫學科實習一'
  },
  
  {
    title: '吳晉祥*',
    url:'/course?teacher=吳晉祥*'
  },
  {
    title: '家庭醫學',
    url:'/course?course_name=家庭醫學'
  },
  
  {
    title: '劉明煇*',
    url:'/course?teacher=劉明煇*'
  },
  {
    title: '內科實習（一）',
    url:'/course?course_name=內科實習（一）'
  },
  
  {
    title: '劉明煇*',
    url:'/course?teacher=劉明煇*'
  },
  {
    title: '內科學（三）',
    url:'/course?course_name=內科學（三）'
  },
  
  {
    title: '吳孟興*',
    url:'/course?teacher=吳孟興*'
  },
  {
    title: '婦產科實習一',
    url:'/course?course_name=婦產科實習一'
  },
  
  {
    title: '楊燿榮*',
    url:'/course?teacher=楊燿榮*'
  },
  {
    title: '小兒科實習一',
    url:'/course?course_name=小兒科實習一'
  },
  
  {
    title: '陳高欽*',
    url:'/course?teacher=陳高欽*'
  },
  {
    title: '精神科實習一',
    url:'/course?course_name=精神科實習一'
  },
  
  {
    title: '陳高欽*',
    url:'/course?teacher=陳高欽*'
  },
  {
    title: '精神醫學',
    url:'/course?course_name=精神醫學'
  },
  
  {
    title: '郭保麟*吳致杰 ',
    url:'/course?teacher=郭保麟*吳致杰 '
  },
  {
    title: '醫學遺傳學',
    url:'/course?course_name=醫學遺傳學'
  },
  
  {
    title: '吳晉祥 黃于玲*',
    url:'/course?teacher=吳晉祥 黃于玲*'
  },
  {
    title: '醫療與文化',
    url:'/course?course_name=醫療與文化'
  },
  
  {
    title: '何月仁*',
    url:'/course?teacher=何月仁*'
  },
  {
    title: '臨床思路',
    url:'/course?course_name=臨床思路'
  },
  
  {
    title: '陳俞沛*',
    url:'/course?teacher=陳俞沛*'
  },
  {
    title: '中醫概論',
    url:'/course?course_name=中醫概論'
  },
  
  {
    title: '李貽恒 蔡惟全 吳俊明 李政翰 陳儒逸 劉嚴文 詹世鴻 許志新 趙庭興*林志展 陳柏升 林立人 劉秉彥 ',
    url:'/course?teacher=李貽恒 蔡惟全 吳俊明 李政翰 陳儒逸 劉嚴文 詹世鴻 許志新 趙庭興*林志展 陳柏升 林立人 劉秉彥 '
  },
  {
    title: '心電圖判讀',
    url:'/course?course_name=心電圖判讀'
  },
  
  {
    title: '沈延盛*',
    url:'/course?teacher=沈延盛*'
  },
  {
    title: '臨床營養',
    url:'/course?course_name=臨床營養'
  },
  
  {
    title: '蔡美慧*',
    url:'/course?teacher=蔡美慧*'
  },
  {
    title: '醫用台語（中階）',
    url:'/course?course_name=醫用台語（中階）'
  },
  
  {
    title: '黃振勳 袁　國 許修銘 劉佳觀*莊淑芬 王東堯 張禎容 ',
    url:'/course?teacher=黃振勳 袁　國 許修銘 劉佳觀*莊淑芬 王東堯 張禎容 '
  },
  {
    title: '口腔學概論',
    url:'/course?course_name=口腔學概論'
  },
  
  {
    title: '張烱心 周振陽 吳孟興*鄭雅敏 游振祥 許耿福 蔡佩穎 蘇美慈 康琳 黃于芳 沈孟儒 ',
    url:'/course?teacher=張烱心 周振陽 吳孟興*鄭雅敏 游振祥 許耿福 蔡佩穎 蘇美慈 康琳 黃于芳 沈孟儒 '
  },
  {
    title: '婦產科學',
    url:'/course?course_name=婦產科學'
  },
  
  {
    title: '陳建旭 林其和 劉清泉 吳俊明 楊燿榮*林毓志 杜伊芳 王世敏 周言穎 蔡孟哲 ',
    url:'/course?teacher=陳建旭 林其和 劉清泉 吳俊明 楊燿榮*林毓志 杜伊芳 王世敏 周言穎 蔡孟哲 '
  },
  {
    title: '小兒科學',
    url:'/course?course_name=小兒科學'
  },
  
  {
    title: '李怡慧*紀美宏 ',
    url:'/course?teacher=李怡慧*紀美宏 '
  },
  {
    title: '醫學心理',
    url:'/course?course_name=醫學心理'
  },
  
  {
    title: '陳海雯*',
    url:'/course?teacher=陳海雯*'
  },
  {
    title: '放射治療學',
    url:'/course?course_name=放射治療學'
  },
  
  {
    title: '蔡宏名 邱南津 姚維仁 王建國*莊明宗 劉益勝 呂佳興 ',
    url:'/course?teacher=蔡宏名 邱南津 姚維仁 王建國*莊明宗 劉益勝 呂佳興 '
  },
  {
    title: '影像診斷學',
    url:'/course?course_name=影像診斷學'
  },
  
  {
    title: '顏經洲 ',
    url:'/course?teacher=顏經洲 '
  },
  {
    title: '病理學（含實驗）（二）',
    url:'/course?course_name=病理學（含實驗）（二）'
  },
  
  {
    title: '蘇益仁 張孔昭*何中良 楊曉白 蔡弘文 李忠達 陳文宗 張珍 司君一 ',
    url:'/course?teacher=蘇益仁 張孔昭*何中良 楊曉白 蔡弘文 李忠達 陳文宗 張珍 司君一 '
  },
  {
    title: '病理學（含實驗）（二）',
    url:'/course?course_name=病理學（含實驗）（二）'
  },
  
  {
    title: '陳炳焜 蘇五洲 蔡玉娟 張智仁 劉彥青 方詩元 呂增宏 簡偉明 許桂森 沈孟儒*簡伯武 張雋曦 陳韻雯 姜學誠 ',
    url:'/course?teacher=陳炳焜 蘇五洲 蔡玉娟 張智仁 劉彥青 方詩元 呂增宏 簡偉明 許桂森 沈孟儒*簡伯武 張雋曦 陳韻雯 姜學誠 '
  },
  {
    title: '藥理學（二）',
    url:'/course?course_name=藥理學（二）'
  },
  
  {
    title: '張孔昭 呂政展*何中良 周楠華 蔡弘文 ',
    url:'/course?teacher=張孔昭 呂政展*何中良 周楠華 蔡弘文 '
  },
  {
    title: '實驗診斷學及實驗（二）',
    url:'/course?course_name=實驗診斷學及實驗（二）'
  },
  
  {
    title: '王明誠*',
    url:'/course?teacher=王明誠*'
  },
  {
    title: '臨床診斷學實習',
    url:'/course?course_name=臨床診斷學實習'
  },
  
  {
    title: '王明誠*',
    url:'/course?teacher=王明誠*'
  },
  {
    title: '臨床診斷學（二）',
    url:'/course?course_name=臨床診斷學（二）'
  },
  
  {
    title: '胥直利 陳儒逸 阮俊能 ',
    url:'/course?teacher=胥直利 陳儒逸 阮俊能 '
  },
  {
    title: '病態生理學討論（二）',
    url:'/course?course_name=病態生理學討論（二）'
  },
  
  {
    title: '許志新 江謝雅芬 ',
    url:'/course?teacher=許志新 江謝雅芬 '
  },
  {
    title: '病態生理學討論（二）',
    url:'/course?course_name=病態生理學討論（二）'
  },
  
  {
    title: '蔡弘文 蔡佩穎 ',
    url:'/course?teacher=蔡弘文 蔡佩穎 '
  },
  {
    title: '病態生理學討論（二）',
    url:'/course?course_name=病態生理學討論（二）'
  },
  
  {
    title: '顏賢章 ',
    url:'/course?teacher=顏賢章 '
  },
  {
    title: '病態生理學討論（二）',
    url:'/course?course_name=病態生理學討論（二）'
  },
  
  {
    title: '陳芃潔 劉秉彥 ',
    url:'/course?teacher=陳芃潔 劉秉彥 '
  },
  {
    title: '病態生理學討論（二）',
    url:'/course?course_name=病態生理學討論（二）'
  },
  
  {
    title: '莊喬雄 何月仁 ',
    url:'/course?teacher=莊喬雄 何月仁 '
  },
  {
    title: '病態生理學討論（二）',
    url:'/course?course_name=病態生理學討論（二）'
  },
  
  {
    title: '王崇任 陳毓宏 ',
    url:'/course?teacher=王崇任 陳毓宏 '
  },
  {
    title: '病態生理學討論（二）',
    url:'/course?course_name=病態生理學討論（二）'
  },
  
  {
    title: '胥直利 紀志賢*劉嚴文 蔡弘文 許志新 阮俊能 陳毓宏 蔡佩穎 何月仁 顏賢章 江伯敏 陳芃潔 劉秉彥 ',
    url:'/course?teacher=胥直利 紀志賢*劉嚴文 蔡弘文 許志新 阮俊能 陳毓宏 蔡佩穎 何月仁 顏賢章 江伯敏 陳芃潔 劉秉彥 '
  },
  {
    title: '病態生理學討論（二）',
    url:'/course?course_name=病態生理學討論（二）'
  },
  
  {
    title: '李經維*',
    url:'/course?teacher=李經維*'
  },
  {
    title: '外科學（二）',
    url:'/course?course_name=外科學（二）'
  },
  
  {
    title: '陳彩雲 許博翔 陳炯瑜 張定宗 蔡子同 劉明煇*吳達仁 鄭斌男 顏家瑞 呂佩融 ',
    url:'/course?teacher=陳彩雲 許博翔 陳炯瑜 張定宗 蔡子同 劉明煇*吳達仁 鄭斌男 顏家瑞 呂佩融 '
  },
  {
    title: '內科學（二）',
    url:'/course?course_name=內科學（二）'
  },
  
  {
    title: '趙曉秋 吳晉祥 林志勝*姚維仁 謝式洲 張俊彥 邱元佑 沈延盛 劉秉彥 ',
    url:'/course?teacher=趙曉秋 吳晉祥 林志勝*姚維仁 謝式洲 張俊彥 邱元佑 沈延盛 劉秉彥 '
  },
  {
    title: '習醫之道－醫師專業養成與體驗（八）',
    url:'/course?course_name=習醫之道－醫師專業養成與體驗（八）'
  },
  
  {
    title: '姚維仁 張俊彥 許桂森*',
    url:'/course?teacher=姚維仁 張俊彥 許桂森*'
  },
  {
    title: '醫學科學研究（六）',
    url:'/course?course_name=醫學科學研究（六）'
  },
  
  {
    title: '吳勝男*',
    url:'/course?teacher=吳勝男*'
  },
  {
    title: '心血管生理病理學概論',
    url:'/course?course_name=心血管生理病理學概論'
  },
  
  {
    title: '郭余民 黃步敏 吳佳慶 司君一 許鍾瑜 ',
    url:'/course?teacher=郭余民 黃步敏 吳佳慶 司君一 許鍾瑜 '
  },
  {
    title: '神經解剖學（含實驗）',
    url:'/course?course_name=神經解剖學（含實驗）'
  },
  
  {
    title: '郭余民 黃步敏*吳佳慶 司君一 許鍾瑜 ',
    url:'/course?teacher=郭余民 黃步敏*吳佳慶 司君一 許鍾瑜 '
  },
  {
    title: '神經解剖學（含實驗）',
    url:'/course?course_name=神經解剖學（含實驗）'
  },
  
  {
    title: '辛致煒 胥直利 林威辰 ',
    url:'/course?teacher=辛致煒 胥直利 林威辰 '
  },
  {
    title: '寄生蟲學（含實驗）',
    url:'/course?course_name=寄生蟲學（含實驗）'
  },
  
  {
    title: '辛致煒*胥直利 林威辰 ',
    url:'/course?teacher=辛致煒*胥直利 林威辰 '
  },
  {
    title: '寄生蟲學（含實驗）',
    url:'/course?course_name=寄生蟲學（含實驗）'
  },
  
  {
    title: '湯銘哲*',
    url:'/course?teacher=湯銘哲*'
  },
  {
    title: '生理學(含實驗)',
    url:'/course?course_name=生理學(含實驗)'
  },
  
  {
    title: '湯銘哲*莊季瑛 黃阿敏 李碧雪 楊尚訓 ',
    url:'/course?teacher=湯銘哲*莊季瑛 黃阿敏 李碧雪 楊尚訓 '
  },
  {
    title: '生理學(含實驗)',
    url:'/course?course_name=生理學(含實驗)'
  },
  
  {
    title: '蕭璦莉*',
    url:'/course?teacher=蕭璦莉*'
  },
  {
    title: '微生物學及免疫學（含實驗）',
    url:'/course?course_name=微生物學及免疫學（含實驗）'
  },
  
  {
    title: '陳炯瑜 劉清泉 王德華 何宗憲 王世敏 陳柏齡 楊倍昌 余俊強 陳舜華 何漣漪 蕭璦莉*凌　斌 王淑鶯 黃一修 謝奇璋 ',
    url:'/course?teacher=陳炯瑜 劉清泉 王德華 何宗憲 王世敏 陳柏齡 楊倍昌 余俊強 陳舜華 何漣漪 蕭璦莉*凌　斌 王淑鶯 黃一修 謝奇璋 '
  },
  {
    title: '微生物學及免疫學（含實驗）',
    url:'/course?course_name=微生物學及免疫學（含實驗）'
  },
  
  {
    title: '趙曉秋 吳晉祥 林志勝*姚維仁 謝式洲 張俊彥 邱元佑 沈延盛 劉秉彥 ',
    url:'/course?teacher=趙曉秋 吳晉祥 林志勝*姚維仁 謝式洲 張俊彥 邱元佑 沈延盛 劉秉彥 '
  },
  {
    title: '習醫之道－醫師專業養成與體驗（六）',
    url:'/course?course_name=習醫之道－醫師專業養成與體驗（六）'
  },
  
  {
    title: '楊倍昌*',
    url:'/course?teacher=楊倍昌*'
  },
  {
    title: '科技溝通：觀念與參與',
    url:'/course?course_name=科技溝通：觀念與參與'
  },
  
  {
    title: '黃于玲*',
    url:'/course?teacher=黃于玲*'
  },
  {
    title: '醫學、科技與社會導論',
    url:'/course?course_name=醫學、科技與社會導論'
  },
  
  {
    title: '姚維仁 張俊彥 許桂森*',
    url:'/course?teacher=姚維仁 張俊彥 許桂森*'
  },
  {
    title: '醫學科學研究（四）',
    url:'/course?course_name=醫學科學研究（四）'
  },
  
  {
    title: '蔡美玲 陳麗光 翁慧卿 ',
    url:'/course?teacher=蔡美玲 陳麗光 翁慧卿 '
  },
  {
    title: '全球化與人文關懷',
    url:'/course?course_name=全球化與人文關懷'
  },
  
  {
    title: '翁裕峯 徐之昇 蔡美玲*陳麗光 翁慧卿 ',
    url:'/course?teacher=翁裕峯 徐之昇 蔡美玲*陳麗光 翁慧卿 '
  },
  {
    title: '全球化與人文關懷',
    url:'/course?course_name=全球化與人文關懷'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '體育（四）',
    url:'/course?course_name=體育（四）'
  },
  
  {
    title: '孫孝芳*',
    url:'/course?teacher=孫孝芳*'
  },
  {
    title: '分子基因體學',
    url:'/course?course_name=分子基因體學'
  },
  
  {
    title: '黃柏憲*',
    url:'/course?teacher=黃柏憲*'
  },
  {
    title: '生物化學（含實驗）（二）',
    url:'/course?course_name=生物化學（含實驗）（二）'
  },
  
  {
    title: '黃柏憲*',
    url:'/course?teacher=黃柏憲*'
  },
  {
    title: '生物化學（含實驗）（二）',
    url:'/course?course_name=生物化學（含實驗）（二）'
  },
  
  {
    title: '林宙晴 王伯智 郭耀昌 郭浩然 蘇慧貞 李俊璋 蔡朋枝 林明彥*吳致杰 ',
    url:'/course?teacher=林宙晴 王伯智 郭耀昌 郭浩然 蘇慧貞 李俊璋 蔡朋枝 林明彥*吳致杰 '
  },
  {
    title: '公共衛生學（二）',
    url:'/course?course_name=公共衛生學（二）'
  },
  
  {
    title: '趙曉秋 吳晉祥 林志勝*姚維仁 謝式洲 張俊彥 邱元佑 沈延盛 劉秉彥 ',
    url:'/course?teacher=趙曉秋 吳晉祥 林志勝*姚維仁 謝式洲 張俊彥 邱元佑 沈延盛 劉秉彥 '
  },
  {
    title: '習醫之道－醫師專業養成與體驗（四）',
    url:'/course?course_name=習醫之道－醫師專業養成與體驗（四）'
  },
  
  {
    title: '翁裕峯 林志豪 許以霖 施欣怡 張雋曦 蔡美玲*林明彥 吳致杰 莊佳蓉 ',
    url:'/course?teacher=翁裕峯 林志豪 許以霖 施欣怡 張雋曦 蔡美玲*林明彥 吳致杰 莊佳蓉 '
  },
  {
    title: '全球衛生簡介',
    url:'/course?course_name=全球衛生簡介'
  },
  
  {
    title: '楊延光*吳晉祥 吳俊明 ',
    url:'/course?teacher=楊延光*吳晉祥 吳俊明 '
  },
  {
    title: '醫療專業與生死',
    url:'/course?course_name=醫療專業與生死'
  },
  
  {
    title: '紀志賢 林志豪 施欣怡*李忠勳 莊佳璋 ',
    url:'/course?teacher=紀志賢 林志豪 施欣怡*李忠勳 莊佳璋 '
  },
  {
    title: '公共衛生危機準備與災難應變',
    url:'/course?course_name=公共衛生危機準備與災難應變'
  },
  
  {
    title: '張雋曦*',
    url:'/course?teacher=張雋曦*'
  },
  {
    title: '全球視野與溝通',
    url:'/course?course_name=全球視野與溝通'
  },
  
  {
    title: '姚維仁 張俊彥 許桂森*',
    url:'/course?teacher=姚維仁 張俊彥 許桂森*'
  },
  {
    title: '醫學科學研究（二）',
    url:'/course?course_name=醫學科學研究（二）'
  },
  
  {
    title: '許博翔 張俊彥 沈孟儒 陳立宗 沈延盛*謝奇璋 江伯敏 劉秉彥 ',
    url:'/course?teacher=許博翔 張俊彥 沈孟儒 陳立宗 沈延盛*謝奇璋 江伯敏 劉秉彥 '
  },
  {
    title: '醫師科學家',
    url:'/course?course_name=醫師科學家'
  },
  
  {
    title: '黃于玲*',
    url:'/course?teacher=黃于玲*'
  },
  {
    title: '公民素養與社會',
    url:'/course?course_name=公民素養與社會'
  },
  
  {
    title: '陳毓宏*',
    url:'/course?teacher=陳毓宏*'
  },
  {
    title: '有機化學',
    url:'/course?course_name=有機化學'
  },
  
  {
    title: '吳文鑾 胥直利*任卓穎 顏賢章 蔣輯武 江美治 ',
    url:'/course?teacher=吳文鑾 胥直利*任卓穎 顏賢章 蔣輯武 江美治 '
  },
  {
    title: '生物學（二）',
    url:'/course?course_name=生物學（二）'
  },
  
  {
    title: '謝式洲*',
    url:'/course?teacher=謝式洲*'
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基礎國文（二）',
    url:'/course?course_name=基礎國文（二）'
  },
  
  {
    title: '趙曉秋 吳晉祥 林志勝*姚維仁 謝式洲 張俊彥 邱元佑 沈延盛 劉秉彥 ',
    url:'/course?teacher=趙曉秋 吳晉祥 林志勝*姚維仁 謝式洲 張俊彥 邱元佑 沈延盛 劉秉彥 '
  },
  {
    title: '習醫之道－醫師專業養成與體驗（二）',
    url:'/course?course_name=習醫之道－醫師專業養成與體驗（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '解巽評 ',
    url:'/course?teacher=解巽評 '
  },
  {
    title: '資料庫',
    url:'/course?course_name=資料庫'
  },
  
  {
    title: '盧達生 ',
    url:'/course?teacher=盧達生 '
  },
  {
    title: '半導體元件數值模擬',
    url:'/course?course_name=半導體元件數值模擬'
  },
  
  {
    title: '楊慶隆 ',
    url:'/course?teacher=楊慶隆 '
  },
  {
    title: '電子電路系統設計',
    url:'/course?course_name=電子電路系統設計'
  },
  
  {
    title: '陳　敬 ',
    url:'/course?teacher=陳　敬 '
  },
  {
    title: '系統程式',
    url:'/course?course_name=系統程式'
  },
  
  {
    title: '戴政祺 林志隆 ',
    url:'/course?teacher=戴政祺 林志隆 '
  },
  {
    title: '單晶片系統設計與應用',
    url:'/course?course_name=單晶片系統設計與應用'
  },
  
  {
    title: '戴政祺*林志隆 ',
    url:'/course?teacher=戴政祺*林志隆 '
  },
  {
    title: '單晶片系統設計與應用',
    url:'/course?course_name=單晶片系統設計與應用'
  },
  
  {
    title: '梁從主 ',
    url:'/course?teacher=梁從主 '
  },
  {
    title: '電源轉換器設計',
    url:'/course?course_name=電源轉換器設計'
  },
  
  {
    title: '陳中和 ',
    url:'/course?teacher=陳中和 '
  },
  {
    title: '電腦與通訊學群畢業專題（一）',
    url:'/course?course_name=電腦與通訊學群畢業專題（一）'
  },
  
  {
    title: '謝明得 ',
    url:'/course?teacher=謝明得 '
  },
  {
    title: '電路與系統學群畢業專題（一）',
    url:'/course?course_name=電路與系統學群畢業專題（一）'
  },
  
  {
    title: '蔡宗祐 ',
    url:'/course?teacher=蔡宗祐 '
  },
  {
    title: '電子與材料學群畢業專題（一）',
    url:'/course?course_name=電子與材料學群畢業專題（一）'
  },
  
  {
    title: '李昆忠 ',
    url:'/course?teacher=李昆忠 '
  },
  {
    title: '計算機演算法',
    url:'/course?course_name=計算機演算法'
  },
  
  {
    title: '陳建富 ',
    url:'/course?teacher=陳建富 '
  },
  {
    title: '電機機械',
    url:'/course?course_name=電機機械'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '張守進 ',
    url:'/course?teacher=張守進 '
  },
  {
    title: '電子學實驗（二）',
    url:'/course?course_name=電子學實驗（二）'
  },
  
  {
    title: '江孟學 ',
    url:'/course?teacher=江孟學 '
  },
  {
    title: '電子學實驗（二）',
    url:'/course?course_name=電子學實驗（二）'
  },
  
  {
    title: '李嘉猷 ',
    url:'/course?teacher=李嘉猷 '
  },
  {
    title: '控制工程實驗',
    url:'/course?course_name=控制工程實驗'
  },
  
  {
    title: '李嘉猷 ',
    url:'/course?teacher=李嘉猷 '
  },
  {
    title: '控制工程實驗',
    url:'/course?course_name=控制工程實驗'
  },
  
  {
    title: '黃尊禧 ',
    url:'/course?teacher=黃尊禧 '
  },
  {
    title: '電磁學（二）',
    url:'/course?course_name=電磁學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '李順裕 ',
    url:'/course?teacher=李順裕 '
  },
  {
    title: '電子學實驗（二）',
    url:'/course?course_name=電子學實驗（二）'
  },
  
  {
    title: '劉文超 ',
    url:'/course?teacher=劉文超 '
  },
  {
    title: '電子學實驗（二）',
    url:'/course?course_name=電子學實驗（二）'
  },
  
  {
    title: '鄭銘揚 ',
    url:'/course?teacher=鄭銘揚 '
  },
  {
    title: '控制工程實驗',
    url:'/course?course_name=控制工程實驗'
  },
  
  {
    title: '鄭銘揚 ',
    url:'/course?teacher=鄭銘揚 '
  },
  {
    title: '控制工程實驗',
    url:'/course?course_name=控制工程實驗'
  },
  
  {
    title: '蔡智明 ',
    url:'/course?teacher=蔡智明 '
  },
  {
    title: '電磁學（二）',
    url:'/course?course_name=電磁學（二）'
  },
  
  {
    title: '張簡樂仁 ',
    url:'/course?teacher=張簡樂仁 '
  },
  {
    title: '電力系統導論',
    url:'/course?course_name=電力系統導論'
  },
  
  {
    title: '鄭光偉 ',
    url:'/course?teacher=鄭光偉 '
  },
  {
    title: '軟體無線電導論與實作',
    url:'/course?course_name=軟體無線電導論與實作'
  },
  
  {
    title: '鄭光偉 ',
    url:'/course?teacher=鄭光偉 '
  },
  {
    title: '軟體無線電導論與實作',
    url:'/course?course_name=軟體無線電導論與實作'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '李清庭 ',
    url:'/course?teacher=李清庭 '
  },
  {
    title: '電子學實驗（二）',
    url:'/course?course_name=電子學實驗（二）'
  },
  
  {
    title: '邱瀝毅 ',
    url:'/course?teacher=邱瀝毅 '
  },
  {
    title: '電子學實驗（二）',
    url:'/course?course_name=電子學實驗（二）'
  },
  
  {
    title: '莊智清 ',
    url:'/course?teacher=莊智清 '
  },
  {
    title: '控制工程實驗',
    url:'/course?course_name=控制工程實驗'
  },
  
  {
    title: '莊智清 ',
    url:'/course?teacher=莊智清 '
  },
  {
    title: '控制工程實驗',
    url:'/course?course_name=控制工程實驗'
  },
  
  {
    title: '李炳鈞 ',
    url:'/course?teacher=李炳鈞 '
  },
  {
    title: '電磁學（二）',
    url:'/course?course_name=電磁學（二）'
  },
  
  {
    title: '楊慶隆 ',
    url:'/course?teacher=楊慶隆 '
  },
  {
    title: '無線系統之技術與應用',
    url:'/course?course_name=無線系統之技術與應用'
  },
  
  {
    title: '李文熙 ',
    url:'/course?teacher=李文熙 '
  },
  {
    title: '電子材料概論',
    url:'/course?course_name=電子材料概論'
  },
  
  {
    title: '張志文 ',
    url:'/course?teacher=張志文 '
  },
  {
    title: '數位通訊',
    url:'/course?course_name=數位通訊'
  },
  
  {
    title: '楊竹星 ',
    url:'/course?teacher=楊竹星 '
  },
  {
    title: '作業系統',
    url:'/course?course_name=作業系統'
  },
  
  {
    title: '詹寶珠 ',
    url:'/course?teacher=詹寶珠 '
  },
  {
    title: '影像處理',
    url:'/course?course_name=影像處理'
  },
  
  {
    title: '彭洞清 ',
    url:'/course?teacher=彭洞清 '
  },
  {
    title: '光電與半導體概論',
    url:'/course?course_name=光電與半導體概論'
  },
  
  {
    title: '卜令楷 ',
    url:'/course?teacher=卜令楷 '
  },
  {
    title: '創業與創新課程',
    url:'/course?course_name=創業與創新課程'
  },
  
  {
    title: '張天豪 ',
    url:'/course?teacher=張天豪 '
  },
  {
    title: '使用者介面設計與開發',
    url:'/course?course_name=使用者介面設計與開發'
  },
  
  {
    title: '王振興 ',
    url:'/course?teacher=王振興 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '陳中和 ',
    url:'/course?teacher=陳中和 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '蔡宗祐 ',
    url:'/course?teacher=蔡宗祐 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '李國君 ',
    url:'/course?teacher=李國君 '
  },
  {
    title: '訊號與系統',
    url:'/course?course_name=訊號與系統'
  },
  
  {
    title: '郭文光 ',
    url:'/course?teacher=郭文光 '
  },
  {
    title: '訊號與系統',
    url:'/course?course_name=訊號與系統'
  },
  
  {
    title: '雷曉方*邱瀝毅 ',
    url:'/course?teacher=雷曉方*邱瀝毅 '
  },
  {
    title: '超大型積體電路電腦輔助設計概論',
    url:'/course?course_name=超大型積體電路電腦輔助設計概論'
  },
  
  {
    title: '解巽評 ',
    url:'/course?teacher=解巽評 '
  },
  {
    title: '離散數學',
    url:'/course?course_name=離散數學'
  },
  
  {
    title: '林家民 ',
    url:'/course?teacher=林家民 '
  },
  {
    title: '資料結構緒論',
    url:'/course?course_name=資料結構緒論'
  },
  
  {
    title: '陳立祥 ',
    url:'/course?teacher=陳立祥 '
  },
  {
    title: '資料結構緒論',
    url:'/course?course_name=資料結構緒論'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '劉濱達 ',
    url:'/course?teacher=劉濱達 '
  },
  {
    title: '電路學實驗',
    url:'/course?course_name=電路學實驗'
  },
  
  {
    title: '劉濱達 ',
    url:'/course?teacher=劉濱達 '
  },
  {
    title: '電路學實驗',
    url:'/course?course_name=電路學實驗'
  },
  
  {
    title: '張簡樂仁 ',
    url:'/course?teacher=張簡樂仁 '
  },
  {
    title: '電機概論',
    url:'/course?course_name=電機概論'
  },
  
  {
    title: '江孟學 ',
    url:'/course?teacher=江孟學 '
  },
  {
    title: '電子學（二）',
    url:'/course?course_name=電子學（二）'
  },
  
  {
    title: '劉濱達 ',
    url:'/course?teacher=劉濱達 '
  },
  {
    title: '電路學（二）',
    url:'/course?course_name=電路學（二）'
  },
  
  {
    title: '劉光浩 ',
    url:'/course?teacher=劉光浩 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '王　醴 ',
    url:'/course?teacher=王　醴 '
  },
  {
    title: '電路學實驗',
    url:'/course?course_name=電路學實驗'
  },
  
  {
    title: '王　醴 ',
    url:'/course?teacher=王　醴 '
  },
  {
    title: '電路學實驗',
    url:'/course?course_name=電路學實驗'
  },
  
  {
    title: '林瑞禮 ',
    url:'/course?teacher=林瑞禮 '
  },
  {
    title: '電機概論',
    url:'/course?course_name=電機概論'
  },
  
  {
    title: '李順裕 ',
    url:'/course?teacher=李順裕 '
  },
  {
    title: '電子學（二）',
    url:'/course?course_name=電子學（二）'
  },
  
  {
    title: '王　醴 ',
    url:'/course?teacher=王　醴 '
  },
  {
    title: '電路學（二）',
    url:'/course?course_name=電路學（二）'
  },
  
  {
    title: '張志文 ',
    url:'/course?teacher=張志文 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '朱聖緣 ',
    url:'/course?teacher=朱聖緣 '
  },
  {
    title: '電路學實驗',
    url:'/course?course_name=電路學實驗'
  },
  
  {
    title: '朱聖緣 ',
    url:'/course?teacher=朱聖緣 '
  },
  {
    title: '電路學實驗',
    url:'/course?course_name=電路學實驗'
  },
  
  {
    title: '楊宏澤 ',
    url:'/course?teacher=楊宏澤 '
  },
  {
    title: '電機概論',
    url:'/course?course_name=電機概論'
  },
  
  {
    title: '邱瀝毅 ',
    url:'/course?teacher=邱瀝毅 '
  },
  {
    title: '電子學（二）',
    url:'/course?course_name=電子學（二）'
  },
  
  {
    title: '朱聖緣 ',
    url:'/course?teacher=朱聖緣 '
  },
  {
    title: '電路學（二）',
    url:'/course?course_name=電路學（二）'
  },
  
  {
    title: '鄭銘揚 ',
    url:'/course?teacher=鄭銘揚 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '蘇賜麟 ',
    url:'/course?teacher=蘇賜麟 '
  },
  {
    title: '通訊導論',
    url:'/course?course_name=通訊導論'
  },
  
  {
    title: '高國興 ',
    url:'/course?teacher=高國興 '
  },
  {
    title: '量子物理學',
    url:'/course?course_name=量子物理學'
  },
  
  {
    title: '周哲民 ',
    url:'/course?teacher=周哲民 '
  },
  {
    title: '邏輯系統實習',
    url:'/course?course_name=邏輯系統實習'
  },
  
  {
    title: '周哲民 ',
    url:'/course?teacher=周哲民 '
  },
  {
    title: '邏輯系統實習',
    url:'/course?course_name=邏輯系統實習'
  },
  
  {
    title: '陳中和 ',
    url:'/course?teacher=陳中和 '
  },
  {
    title: '邏輯系統實習',
    url:'/course?course_name=邏輯系統實習'
  },
  
  {
    title: '陳中和 ',
    url:'/course?teacher=陳中和 '
  },
  {
    title: '邏輯系統實習',
    url:'/course?course_name=邏輯系統實習'
  },
  
  {
    title: '林輝堂 ',
    url:'/course?teacher=林輝堂 '
  },
  {
    title: '邏輯系統實習',
    url:'/course?course_name=邏輯系統實習'
  },
  
  {
    title: '林輝堂 ',
    url:'/course?teacher=林輝堂 '
  },
  {
    title: '邏輯系統實習',
    url:'/course?course_name=邏輯系統實習'
  },
  
  {
    title: '周哲民 ',
    url:'/course?teacher=周哲民 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '體育（二）',
    url:'/course?course_name=體育（二）'
  },
  
  {
    title: '張名先 ',
    url:'/course?teacher=張名先 '
  },
  {
    title: '線性代數',
    url:'/course?course_name=線性代數'
  },
  
  {
    title: '周哲民 ',
    url:'/course?teacher=周哲民 '
  },
  {
    title: '邏輯系統',
    url:'/course?course_name=邏輯系統'
  },
  
  {
    title: '陳盈如 ',
    url:'/course?teacher=陳盈如 '
  },
  {
    title: '計算機概論（二）',
    url:'/course?course_name=計算機概論（二）'
  },
  
  {
    title: '陳則銘 ',
    url:'/course?teacher=陳則銘 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '張書銓 ',
    url:'/course?teacher=張書銓 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基礎國文（二）',
    url:'/course?course_name=基礎國文（二）'
  },
  
  {
    title: '邱瀝毅 ',
    url:'/course?teacher=邱瀝毅 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '體育（二）',
    url:'/course?course_name=體育（二）'
  },
  
  {
    title: '謝明得 ',
    url:'/course?teacher=謝明得 '
  },
  {
    title: '線性代數',
    url:'/course?course_name=線性代數'
  },
  
  {
    title: '陳中和 ',
    url:'/course?teacher=陳中和 '
  },
  {
    title: '邏輯系統',
    url:'/course?course_name=邏輯系統'
  },
  
  {
    title: '斯國峰 ',
    url:'/course?teacher=斯國峰 '
  },
  {
    title: '計算機概論（二）',
    url:'/course?course_name=計算機概論（二）'
  },
  
  {
    title: '陳泳帆 ',
    url:'/course?teacher=陳泳帆 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '張書銓 ',
    url:'/course?teacher=張書銓 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '林育竹 ',
    url:'/course?teacher=林育竹 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基礎國文（二）',
    url:'/course?course_name=基礎國文（二）'
  },
  
  {
    title: '焦惠津 ',
    url:'/course?teacher=焦惠津 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '體育（二）',
    url:'/course?course_name=體育（二）'
  },
  
  {
    title: '王振興 ',
    url:'/course?teacher=王振興 '
  },
  {
    title: '線性代數',
    url:'/course?course_name=線性代數'
  },
  
  {
    title: '林輝堂 ',
    url:'/course?teacher=林輝堂 '
  },
  {
    title: '邏輯系統',
    url:'/course?course_name=邏輯系統'
  },
  
  {
    title: '黃仁暐 ',
    url:'/course?teacher=黃仁暐 '
  },
  {
    title: '計算機概論（二）',
    url:'/course?course_name=計算機概論（二）'
  },
  
  {
    title: '羅光耀 ',
    url:'/course?teacher=羅光耀 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '張書銓 ',
    url:'/course?teacher=張書銓 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '劉珈銘 ',
    url:'/course?teacher=劉珈銘 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基礎國文（二）',
    url:'/course?course_name=基礎國文（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '超臨界流體技術',
    url:'/course?course_name=超臨界流體技術'
  },
  
  {
    title: '楊明長 ',
    url:'/course?teacher=楊明長 '
  },
  {
    title: '工業電化學',
    url:'/course?course_name=工業電化學'
  },
  
  {
    title: '吳文中 ',
    url:'/course?teacher=吳文中 '
  },
  {
    title: '高分子加工概論',
    url:'/course?course_name=高分子加工概論'
  },
  
  {
    title: '陳志勇 ',
    url:'/course?teacher=陳志勇 '
  },
  {
    title: '綠色材料',
    url:'/course?course_name=綠色材料'
  },
  
  {
    title: '張鑑祥 林睿哲*魏憲鴻 ',
    url:'/course?teacher=張鑑祥 林睿哲*魏憲鴻 '
  },
  {
    title: '生醫工程概論',
    url:'/course?course_name=生醫工程概論'
  },
  
  {
    title: '鄧熙聖 ',
    url:'/course?teacher=鄧熙聖 '
  },
  {
    title: '基礎固態化學',
    url:'/course?course_name=基礎固態化學'
  },
  
  {
    title: '吳季珍 ',
    url:'/course?teacher=吳季珍 '
  },
  {
    title: '半導體材料與製程',
    url:'/course?course_name=半導體材料與製程'
  },
  
  {
    title: '吳意珣 林裕川*',
    url:'/course?teacher=吳意珣 林裕川*'
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '林睿哲 ',
    url:'/course?teacher=林睿哲 '
  },
  {
    title: '單元操作實驗',
    url:'/course?course_name=單元操作實驗'
  },
  
  {
    title: '黃耀輝 林建功*',
    url:'/course?teacher=黃耀輝 林建功*'
  },
  {
    title: '化工程序實驗',
    url:'/course?course_name=化工程序實驗'
  },
  
  {
    title: '李玉郎 ',
    url:'/course?teacher=李玉郎 '
  },
  {
    title: '單元操作實驗',
    url:'/course?course_name=單元操作實驗'
  },
  
  {
    title: '張鑑祥 黃耀輝 林建功*',
    url:'/course?teacher=張鑑祥 黃耀輝 林建功*'
  },
  {
    title: '化工程序實驗',
    url:'/course?course_name=化工程序實驗'
  },
  
  {
    title: '黃耀輝*李明遠 ',
    url:'/course?teacher=黃耀輝*李明遠 '
  },
  {
    title: '環境、工業安全與衛生',
    url:'/course?course_name=環境、工業安全與衛生'
  },
  
  {
    title: '李玉郎 ',
    url:'/course?teacher=李玉郎 '
  },
  {
    title: '單元操作實驗',
    url:'/course?course_name=單元操作實驗'
  },
  
  {
    title: '林建功*陳志勇 ',
    url:'/course?teacher=林建功*陳志勇 '
  },
  {
    title: '化工程序實驗',
    url:'/course?course_name=化工程序實驗'
  },
  
  {
    title: '王　紀 ',
    url:'/course?teacher=王　紀 '
  },
  {
    title: '高分子物理',
    url:'/course?course_name=高分子物理'
  },
  
  {
    title: '',
    url:'/course?teacher='
  },
  {
    title: '論文（二）',
    url:'/course?course_name=論文（二）'
  },
  
  {
    title: '吳季珍 ',
    url:'/course?teacher=吳季珍 '
  },
  {
    title: '儀器分析實驗',
    url:'/course?course_name=儀器分析實驗'
  },
  
  {
    title: '吳季珍 ',
    url:'/course?teacher=吳季珍 '
  },
  {
    title: '儀器分析實驗',
    url:'/course?course_name=儀器分析實驗'
  },
  
  {
    title: '黃世宏 ',
    url:'/course?teacher=黃世宏 '
  },
  {
    title: '程序控制實驗',
    url:'/course?course_name=程序控制實驗'
  },
  
  {
    title: '張珏庭 ',
    url:'/course?teacher=張珏庭 '
  },
  {
    title: '程序控制實驗',
    url:'/course?course_name=程序控制實驗'
  },
  
  {
    title: '鄧熙聖 陳美瑾 林裕川*',
    url:'/course?teacher=鄧熙聖 陳美瑾 林裕川*'
  },
  {
    title: '化學反應工程',
    url:'/course?course_name=化學反應工程'
  },
  
  {
    title: '吳逸謨 ',
    url:'/course?teacher=吳逸謨 '
  },
  {
    title: '儀器分析實驗',
    url:'/course?course_name=儀器分析實驗'
  },
  
  {
    title: '吳逸謨 ',
    url:'/course?teacher=吳逸謨 '
  },
  {
    title: '儀器分析實驗',
    url:'/course?course_name=儀器分析實驗'
  },
  
  {
    title: '黃世宏 ',
    url:'/course?teacher=黃世宏 '
  },
  {
    title: '程序控制實驗',
    url:'/course?course_name=程序控制實驗'
  },
  
  {
    title: '張珏庭 ',
    url:'/course?teacher=張珏庭 '
  },
  {
    title: '程序控制實驗',
    url:'/course?course_name=程序控制實驗'
  },
  
  {
    title: '鄧熙聖 陳美瑾 林裕川*',
    url:'/course?teacher=鄧熙聖 陳美瑾 林裕川*'
  },
  {
    title: '化學反應工程',
    url:'/course?course_name=化學反應工程'
  },
  
  {
    title: '李玉郎 羅介聰*',
    url:'/course?teacher=李玉郎 羅介聰*'
  },
  {
    title: '單元操作（三）',
    url:'/course?course_name=單元操作（三）'
  },
  
  {
    title: '陳　雲 ',
    url:'/course?teacher=陳　雲 '
  },
  {
    title: '儀器分析實驗',
    url:'/course?course_name=儀器分析實驗'
  },
  
  {
    title: '陳　雲 ',
    url:'/course?teacher=陳　雲 '
  },
  {
    title: '儀器分析實驗',
    url:'/course?course_name=儀器分析實驗'
  },
  
  {
    title: '吳　煒 ',
    url:'/course?teacher=吳　煒 '
  },
  {
    title: '程序控制實驗',
    url:'/course?course_name=程序控制實驗'
  },
  
  {
    title: '吳　煒 ',
    url:'/course?teacher=吳　煒 '
  },
  {
    title: '程序控制實驗',
    url:'/course?course_name=程序控制實驗'
  },
  
  {
    title: '李玉郎 羅介聰*',
    url:'/course?teacher=李玉郎 羅介聰*'
  },
  {
    title: '單元操作（三）',
    url:'/course?course_name=單元操作（三）'
  },
  
  {
    title: '鄧熙聖 陳美瑾 林裕川*',
    url:'/course?teacher=鄧熙聖 陳美瑾 林裕川*'
  },
  {
    title: '化學反應工程',
    url:'/course?course_name=化學反應工程'
  },
  
  {
    title: '吳意珣 ',
    url:'/course?teacher=吳意珣 '
  },
  {
    title: '合成生物學概論',
    url:'/course?course_name=合成生物學概論'
  },
  
  {
    title: '林建功 ',
    url:'/course?teacher=林建功 '
  },
  {
    title: '高分子科學',
    url:'/course?course_name=高分子科學'
  },
  
  {
    title: '邱繼正 ',
    url:'/course?teacher=邱繼正 '
  },
  {
    title: '生物化學',
    url:'/course?course_name=生物化學'
  },
  
  {
    title: '莊怡哲 ',
    url:'/course?teacher=莊怡哲 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '陳東煌 ',
    url:'/course?teacher=陳東煌 '
  },
  {
    title: '物理化學實驗（一）',
    url:'/course?course_name=物理化學實驗（一）'
  },
  
  {
    title: '陳炳宏 ',
    url:'/course?teacher=陳炳宏 '
  },
  {
    title: '有機化學實驗（二）',
    url:'/course?course_name=有機化學實驗（二）'
  },
  
  {
    title: '劉瑞祥 ',
    url:'/course?teacher=劉瑞祥 '
  },
  {
    title: '有機化學（二）',
    url:'/course?course_name=有機化學（二）'
  },
  
  {
    title: '許梅娟 鍾賢龍 詹正雄*',
    url:'/course?teacher=許梅娟 鍾賢龍 詹正雄*'
  },
  {
    title: '單元操作（一）',
    url:'/course?course_name=單元操作（一）'
  },
  
  {
    title: '黃世宏 ',
    url:'/course?teacher=黃世宏 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '陳慧英 ',
    url:'/course?teacher=陳慧英 '
  },
  {
    title: '物理化學實驗（一）',
    url:'/course?course_name=物理化學實驗（一）'
  },
  
  {
    title: '許梅娟 鍾賢龍 詹正雄*',
    url:'/course?teacher=許梅娟 鍾賢龍 詹正雄*'
  },
  {
    title: '單元操作（一）',
    url:'/course?course_name=單元操作（一）'
  },
  
  {
    title: '侯聖澍 ',
    url:'/course?teacher=侯聖澍 '
  },
  {
    title: '有機化學實驗（二）',
    url:'/course?course_name=有機化學實驗（二）'
  },
  
  {
    title: '侯聖澍 ',
    url:'/course?teacher=侯聖澍 '
  },
  {
    title: '有機化學（二）',
    url:'/course?course_name=有機化學（二）'
  },
  
  {
    title: '陳慧英 ',
    url:'/course?teacher=陳慧英 '
  },
  {
    title: '物理化學（二）',
    url:'/course?course_name=物理化學（二）'
  },
  
  {
    title: '詹正雄 ',
    url:'/course?teacher=詹正雄 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '陳東煌 ',
    url:'/course?teacher=陳東煌 '
  },
  {
    title: '物理化學實驗（一）',
    url:'/course?course_name=物理化學實驗（一）'
  },
  
  {
    title: '陳東煌 ',
    url:'/course?teacher=陳東煌 '
  },
  {
    title: '物理化學（二）',
    url:'/course?course_name=物理化學（二）'
  },
  
  {
    title: '郭炳林 ',
    url:'/course?teacher=郭炳林 '
  },
  {
    title: '有機化學實驗（二）',
    url:'/course?course_name=有機化學實驗（二）'
  },
  
  {
    title: '郭炳林 ',
    url:'/course?teacher=郭炳林 '
  },
  {
    title: '有機化學（二）',
    url:'/course?course_name=有機化學（二）'
  },
  
  {
    title: '許梅娟 鍾賢龍 詹正雄*',
    url:'/course?teacher=許梅娟 鍾賢龍 詹正雄*'
  },
  {
    title: '單元操作（一）',
    url:'/course?course_name=單元操作（一）'
  },
  
  {
    title: '楊明長 ',
    url:'/course?teacher=楊明長 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '吳恭儉 ',
    url:'/course?teacher=吳恭儉 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '楊明長 ',
    url:'/course?teacher=楊明長 '
  },
  {
    title: '質能均衡',
    url:'/course?course_name=質能均衡'
  },
  
  {
    title: '鄭沐政 ',
    url:'/course?teacher=鄭沐政 '
  },
  {
    title: '普通化學實驗（二）',
    url:'/course?course_name=普通化學實驗（二）'
  },
  
  {
    title: '黃榮俊 ',
    url:'/course?teacher=黃榮俊 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '蔡永東 ',
    url:'/course?teacher=蔡永東 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '陳炳宏 ',
    url:'/course?teacher=陳炳宏 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '張嘉修 ',
    url:'/course?teacher=張嘉修 '
  },
  {
    title: '質能均衡',
    url:'/course?course_name=質能均衡'
  },
  
  {
    title: '許鏵芬 ',
    url:'/course?teacher=許鏵芬 '
  },
  {
    title: '普通化學實驗（二）',
    url:'/course?course_name=普通化學實驗（二）'
  },
  
  {
    title: '唐富欽 ',
    url:'/course?teacher=唐富欽 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '唐富欽 ',
    url:'/course?teacher=唐富欽 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '林睿哲 ',
    url:'/course?teacher=林睿哲 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '王　紀 ',
    url:'/course?teacher=王　紀 '
  },
  {
    title: '質能均衡',
    url:'/course?course_name=質能均衡'
  },
  
  {
    title: '周鶴軒 ',
    url:'/course?teacher=周鶴軒 '
  },
  {
    title: '普通化學實驗（二）',
    url:'/course?course_name=普通化學實驗（二）'
  },
  
  {
    title: '許鏵芬*李介仁 施良垣 ',
    url:'/course?teacher=許鏵芬*李介仁 施良垣 '
  },
  {
    title: '普通化學（二）',
    url:'/course?course_name=普通化學（二）'
  },
  
  {
    title: '陳泳帆 ',
    url:'/course?teacher=陳泳帆 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '苗舜培 ',
    url:'/course?teacher=苗舜培 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '鄺國權 ',
    url:'/course?teacher=鄺國權 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '朱聖浩 ',
    url:'/course?teacher=朱聖浩 '
  },
  {
    title: '土木工程設計實務（一）',
    url:'/course?course_name=土木工程設計實務（一）'
  },
  
  {
    title: '黃錦旗 ',
    url:'/course?teacher=黃錦旗 '
  },
  {
    title: '結構系統',
    url:'/course?course_name=結構系統'
  },
  
  {
    title: '楊士賢 ',
    url:'/course?teacher=楊士賢 '
  },
  {
    title: '永續交通設施',
    url:'/course?course_name=永續交通設施'
  },
  
  {
    title: '徐德修 ',
    url:'/course?teacher=徐德修 '
  },
  {
    title: '工程倫理',
    url:'/course?course_name=工程倫理'
  },
  
  {
    title: '胡宣德 ',
    url:'/course?teacher=胡宣德 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '洪　瀞 ',
    url:'/course?teacher=洪　瀞 '
  },
  {
    title: '專題研究',
    url:'/course?course_name=專題研究'
  },
  
  {
    title: '洪　瀞 ',
    url:'/course?teacher=洪　瀞 '
  },
  {
    title: '論文寫作',
    url:'/course?course_name=論文寫作'
  },
  
  {
    title: '鍾興陽*周泰隆 ',
    url:'/course?teacher=鍾興陽*周泰隆 '
  },
  {
    title: '鋼結構',
    url:'/course?course_name=鋼結構'
  },
  
  {
    title: '吳建宏 ',
    url:'/course?teacher=吳建宏 '
  },
  {
    title: '基礎工程學',
    url:'/course?course_name=基礎工程學'
  },
  
  {
    title: '吳致平 ',
    url:'/course?teacher=吳致平 '
  },
  {
    title: '結構學（二）',
    url:'/course?course_name=結構學（二）'
  },
  
  {
    title: '鍾興陽*周泰隆 ',
    url:'/course?teacher=鍾興陽*周泰隆 '
  },
  {
    title: '鋼結構',
    url:'/course?course_name=鋼結構'
  },
  
  {
    title: '黃景川 ',
    url:'/course?teacher=黃景川 '
  },
  {
    title: '基礎工程學',
    url:'/course?course_name=基礎工程學'
  },
  
  {
    title: '王彬 ',
    url:'/course?teacher=王彬 '
  },
  {
    title: '結構學（二）',
    url:'/course?course_name=結構學（二）'
  },
  
  {
    title: '蔡錦松 ',
    url:'/course?teacher=蔡錦松 '
  },
  {
    title: '土木建築設計',
    url:'/course?course_name=土木建築設計'
  },
  
  {
    title: '馮重偉 ',
    url:'/course?teacher=馮重偉 '
  },
  {
    title: '工程經濟',
    url:'/course?course_name=工程經濟'
  },
  
  {
    title: '潘南飛 ',
    url:'/course?teacher=潘南飛 '
  },
  {
    title: '工程品質與安全',
    url:'/course?course_name=工程品質與安全'
  },
  
  {
    title: '方一匡 ',
    url:'/course?teacher=方一匡 '
  },
  {
    title: '預力混凝土學',
    url:'/course?course_name=預力混凝土學'
  },
  
  {
    title: '黃忠信 ',
    url:'/course?teacher=黃忠信 '
  },
  {
    title: '混凝土配合設計',
    url:'/course?course_name=混凝土配合設計'
  },
  
  {
    title: '黃忠信 ',
    url:'/course?teacher=黃忠信 '
  },
  {
    title: '混凝土配合設計',
    url:'/course?course_name=混凝土配合設計'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '軌道養護實務',
    url:'/course?course_name=軌道養護實務'
  },
  
  {
    title: '蕭志銘 ',
    url:'/course?teacher=蕭志銘 '
  },
  {
    title: '瀝青材料實驗',
    url:'/course?course_name=瀝青材料實驗'
  },
  
  {
    title: '蕭志銘 ',
    url:'/course?teacher=蕭志銘 '
  },
  {
    title: '瀝青材料實驗',
    url:'/course?course_name=瀝青材料實驗'
  },
  
  {
    title: '陳建旭 ',
    url:'/course?teacher=陳建旭 '
  },
  {
    title: '公路工程學',
    url:'/course?course_name=公路工程學'
  },
  
  {
    title: '方文志 呂介斌 黃裔炎*',
    url:'/course?teacher=方文志 呂介斌 黃裔炎*'
  },
  {
    title: '公路工程實務',
    url:'/course?course_name=公路工程實務'
  },
  
  {
    title: '吳建宏 ',
    url:'/course?teacher=吳建宏 '
  },
  {
    title: '隧道工程學',
    url:'/course?course_name=隧道工程學'
  },
  
  {
    title: '顏崇斌 ',
    url:'/course?teacher=顏崇斌 '
  },
  {
    title: '振動力學',
    url:'/course?course_name=振動力學'
  },
  
  {
    title: '洪李陵 ',
    url:'/course?teacher=洪李陵 '
  },
  {
    title: '工程或然率',
    url:'/course?course_name=工程或然率'
  },
  
  {
    title: '王彬 ',
    url:'/course?teacher=王彬 '
  },
  {
    title: '數值分析',
    url:'/course?course_name=數值分析'
  },
  
  {
    title: '譚建國 ',
    url:'/course?teacher=譚建國 '
  },
  {
    title: '工程數學（四）',
    url:'/course?course_name=工程數學（四）'
  },
  
  {
    title: '陳景文 ',
    url:'/course?teacher=陳景文 '
  },
  {
    title: '服務學習（三）',
    url:'/course?course_name=服務學習（三）'
  },
  
  {
    title: '王雲哲 ',
    url:'/course?teacher=王雲哲 '
  },
  {
    title: '工程材料學實驗',
    url:'/course?course_name=工程材料學實驗'
  },
  
  {
    title: '林育芸 ',
    url:'/course?teacher=林育芸 '
  },
  {
    title: '工程材料學',
    url:'/course?course_name=工程材料學'
  },
  
  {
    title: '倪勝火 ',
    url:'/course?teacher=倪勝火 '
  },
  {
    title: '工程地質學',
    url:'/course?course_name=工程地質學'
  },
  
  {
    title: '方　中 ',
    url:'/course?teacher=方　中 '
  },
  {
    title: '流體力學',
    url:'/course?course_name=流體力學'
  },
  
  {
    title: '宋見春 ',
    url:'/course?teacher=宋見春 '
  },
  {
    title: '材料力學（二）',
    url:'/course?course_name=材料力學（二）'
  },
  
  {
    title: '顏崇斌 ',
    url:'/course?teacher=顏崇斌 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '王雲哲 ',
    url:'/course?teacher=王雲哲 '
  },
  {
    title: '工程材料學實驗',
    url:'/course?course_name=工程材料學實驗'
  },
  
  {
    title: '林育芸 ',
    url:'/course?teacher=林育芸 '
  },
  {
    title: '工程材料學',
    url:'/course?course_name=工程材料學'
  },
  
  {
    title: '陳景文 ',
    url:'/course?teacher=陳景文 '
  },
  {
    title: '工程地質學',
    url:'/course?course_name=工程地質學'
  },
  
  {
    title: '方　中 ',
    url:'/course?teacher=方　中 '
  },
  {
    title: '流體力學',
    url:'/course?course_name=流體力學'
  },
  
  {
    title: '胡宣德 ',
    url:'/course?teacher=胡宣德 '
  },
  {
    title: '材料力學（二）',
    url:'/course?course_name=材料力學（二）'
  },
  
  {
    title: '王永明 ',
    url:'/course?teacher=王永明 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '郭振銘 ',
    url:'/course?teacher=郭振銘 '
  },
  {
    title: '鐵路工程學',
    url:'/course?course_name=鐵路工程學'
  },
  
  {
    title: '吳哲宏 ',
    url:'/course?teacher=吳哲宏 '
  },
  {
    title: '環境工程學',
    url:'/course?course_name=環境工程學'
  },
  
  {
    title: '陳景文 ',
    url:'/course?teacher=陳景文 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '王永明 ',
    url:'/course?teacher=王永明 '
  },
  {
    title: '計算機應用',
    url:'/course?course_name=計算機應用'
  },
  
  {
    title: '盧煉元 ',
    url:'/course?teacher=盧煉元 '
  },
  {
    title: '應用力學',
    url:'/course?course_name=應用力學'
  },
  
  {
    title: '賴啟銘 ',
    url:'/course?teacher=賴啟銘 '
  },
  {
    title: '工程圖學（二）',
    url:'/course?course_name=工程圖學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '盧炎田 ',
    url:'/course?teacher=盧炎田 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '盧炎田 ',
    url:'/course?teacher=盧炎田 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基礎國文（二）',
    url:'/course?course_name=基礎國文（二）'
  },
  
  {
    title: '蔡錦松 ',
    url:'/course?teacher=蔡錦松 '
  },
  {
    title: '土木工程實作設計',
    url:'/course?course_name=土木工程實作設計'
  },
  
  {
    title: '陳景文 ',
    url:'/course?teacher=陳景文 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '李宇欣 ',
    url:'/course?teacher=李宇欣 '
  },
  {
    title: '計算機應用',
    url:'/course?course_name=計算機應用'
  },
  
  {
    title: '顏崇斌 ',
    url:'/course?teacher=顏崇斌 '
  },
  {
    title: '應用力學',
    url:'/course?course_name=應用力學'
  },
  
  {
    title: '賴啟銘 ',
    url:'/course?teacher=賴啟銘 '
  },
  {
    title: '工程圖學（二）',
    url:'/course?course_name=工程圖學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '黃榮俊 ',
    url:'/course?teacher=黃榮俊 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '唐富欽 ',
    url:'/course?teacher=唐富欽 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基礎國文（二）',
    url:'/course?course_name=基礎國文（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '劉聚仁 ',
    url:'/course?teacher=劉聚仁 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '林蜀媛 ',
    url:'/course?teacher=林蜀媛 '
  },
  {
    title: '應用第二外語暨戲劇表演（二）',
    url:'/course?course_name=應用第二外語暨戲劇表演（二）'
  },
  
  {
    title: '黃淑妙 ',
    url:'/course?teacher=黃淑妙 '
  },
  {
    title: '應用第二外語暨戲劇表演（二）',
    url:'/course?course_name=應用第二外語暨戲劇表演（二）'
  },
  
  {
    title: '陳安純 ',
    url:'/course?teacher=陳安純 '
  },
  {
    title: '新聞英文閱讀與習作',
    url:'/course?course_name=新聞英文閱讀與習作'
  },
  
  {
    title: '蔡美慧 ',
    url:'/course?teacher=蔡美慧 '
  },
  {
    title: '英文醫療選讀：醫療系統與溝通',
    url:'/course?course_name=英文醫療選讀：醫療系統與溝通'
  },
  
  {
    title: '閔慧慈 ',
    url:'/course?teacher=閔慧慈 '
  },
  {
    title: '英語教學法概論',
    url:'/course?course_name=英語教學法概論'
  },
  
  {
    title: '金傑夫 ',
    url:'/course?teacher=金傑夫 '
  },
  {
    title: '歐洲文學',
    url:'/course?course_name=歐洲文學'
  },
  
  {
    title: '賴俊雄 ',
    url:'/course?teacher=賴俊雄 '
  },
  {
    title: '文學理論與詮釋（二）',
    url:'/course?course_name=文學理論與詮釋（二）'
  },
  
  {
    title: '蔡美慧 ',
    url:'/course?teacher=蔡美慧 '
  },
  {
    title: '社會語言學導讀：宏觀篇',
    url:'/course?course_name=社會語言學導讀：宏觀篇'
  },
  
  {
    title: '閔慧慈 ',
    url:'/course?teacher=閔慧慈 '
  },
  {
    title: '英語演講',
    url:'/course?course_name=英語演講'
  },
  
  {
    title: '陳世威 ',
    url:'/course?teacher=陳世威 '
  },
  {
    title: '英語基礎讀寫教學與自然發音法',
    url:'/course?course_name=英語基礎讀寫教學與自然發音法'
  },
  
  {
    title: '李惠琦 ',
    url:'/course?teacher=李惠琦 '
  },
  {
    title: '語法學',
    url:'/course?course_name=語法學'
  },
  
  {
    title: '王穎 ',
    url:'/course?teacher=王穎 '
  },
  {
    title: '美國文學（二）',
    url:'/course?course_name=美國文學（二）'
  },
  
  {
    title: '陳昭芳 ',
    url:'/course?teacher=陳昭芳 '
  },
  {
    title: '英國文學（四）',
    url:'/course?course_name=英國文學（四）'
  },
  
  {
    title: '馬約羅夫 ',
    url:'/course?teacher=馬約羅夫 '
  },
  {
    title: '俄語會話（四）',
    url:'/course?course_name=俄語會話（四）'
  },
  
  {
    title: '馬約羅夫 ',
    url:'/course?teacher=馬約羅夫 '
  },
  {
    title: '俄文（四）',
    url:'/course?course_name=俄文（四）'
  },
  
  {
    title: '陳仁德 ',
    url:'/course?teacher=陳仁德 '
  },
  {
    title: '德語會話（四）',
    url:'/course?course_name=德語會話（四）'
  },
  
  {
    title: '陳仁德 ',
    url:'/course?teacher=陳仁德 '
  },
  {
    title: '德文（四）',
    url:'/course?course_name=德文（四）'
  },
  
  {
    title: '白芳怡 ',
    url:'/course?teacher=白芳怡 '
  },
  {
    title: '西班牙語會話（四）',
    url:'/course?course_name=西班牙語會話（四）'
  },
  
  {
    title: '盧慧娟 ',
    url:'/course?teacher=盧慧娟 '
  },
  {
    title: '西班牙文（四）',
    url:'/course?course_name=西班牙文（四）'
  },
  
  {
    title: '陳健宏 ',
    url:'/course?teacher=陳健宏 '
  },
  {
    title: '法語會話（四）',
    url:'/course?course_name=法語會話（四）'
  },
  
  {
    title: '陳健宏 ',
    url:'/course?teacher=陳健宏 '
  },
  {
    title: '法文（四）',
    url:'/course?course_name=法文（四）'
  },
  
  {
    title: '井上智鶴 ',
    url:'/course?teacher=井上智鶴 '
  },
  {
    title: '日語會話（四）',
    url:'/course?course_name=日語會話（四）'
  },
  
  {
    title: '黃淑妙 ',
    url:'/course?teacher=黃淑妙 '
  },
  {
    title: '日文（四）',
    url:'/course?course_name=日文（四）'
  },
  
  {
    title: '陳裕隆 ',
    url:'/course?teacher=陳裕隆 '
  },
  {
    title: '中英翻譯與習作（二）',
    url:'/course?course_name=中英翻譯與習作（二）'
  },
  
  {
    title: '陳安純 ',
    url:'/course?teacher=陳安純 '
  },
  {
    title: '中英翻譯與習作（二）',
    url:'/course?course_name=中英翻譯與習作（二）'
  },
  
  {
    title: '陳麗美 ',
    url:'/course?teacher=陳麗美 '
  },
  {
    title: '英文作文（六）',
    url:'/course?course_name=英文作文（六）'
  },
  
  {
    title: '金傑夫 ',
    url:'/course?teacher=金傑夫 '
  },
  {
    title: '英文作文（六）',
    url:'/course?course_name=英文作文（六）'
  },
  
  {
    title: '羅勤正 ',
    url:'/course?teacher=羅勤正 '
  },
  {
    title: '英文作文（六）',
    url:'/course?course_name=英文作文（六）'
  },
  
  {
    title: '李惠琦 ',
    url:'/course?teacher=李惠琦 '
  },
  {
    title: '英文作文（六）',
    url:'/course?course_name=英文作文（六）'
  },
  
  {
    title: '馬約羅夫 ',
    url:'/course?teacher=馬約羅夫 '
  },
  {
    title: '俄國研究',
    url:'/course?course_name=俄國研究'
  },
  
  {
    title: '陳麗美 ',
    url:'/course?teacher=陳麗美 '
  },
  {
    title: '兒童語言',
    url:'/course?course_name=兒童語言'
  },
  
  {
    title: '石苓 ',
    url:'/course?teacher=石苓 '
  },
  {
    title: '英國文學（二）',
    url:'/course?course_name=英國文學（二）'
  },
  
  {
    title: '謝菁玉 ',
    url:'/course?teacher=謝菁玉 '
  },
  {
    title: '德文（四）',
    url:'/course?course_name=德文（四）'
  },
  
  {
    title: '盧慧娟 ',
    url:'/course?teacher=盧慧娟 '
  },
  {
    title: '西班牙文（四）',
    url:'/course?course_name=西班牙文（四）'
  },
  
  {
    title: '陳健宏 ',
    url:'/course?teacher=陳健宏 '
  },
  {
    title: '法文（四）',
    url:'/course?course_name=法文（四）'
  },
  
  {
    title: '黃淑妙 ',
    url:'/course?teacher=黃淑妙 '
  },
  {
    title: '日文（四）',
    url:'/course?course_name=日文（四）'
  },
  
  {
    title: '游素玲 ',
    url:'/course?teacher=游素玲 '
  },
  {
    title: '英文作文（四）',
    url:'/course?course_name=英文作文（四）'
  },
  
  {
    title: '鄒文莉 ',
    url:'/course?teacher=鄒文莉 '
  },
  {
    title: '英文作文（四）',
    url:'/course?course_name=英文作文（四）'
  },
  
  {
    title: '陳昭芳 ',
    url:'/course?teacher=陳昭芳 '
  },
  {
    title: '英文作文（四）',
    url:'/course?course_name=英文作文（四）'
  },
  
  {
    title: '閔慧慈 ',
    url:'/course?teacher=閔慧慈 '
  },
  {
    title: '英文作文（四）',
    url:'/course?course_name=英文作文（四）'
  },
  
  {
    title: '游素玲 ',
    url:'/course?teacher=游素玲 '
  },
  {
    title: '英語口語訓練（四）',
    url:'/course?course_name=英語口語訓練（四）'
  },
  
  {
    title: '石苓 ',
    url:'/course?teacher=石苓 '
  },
  {
    title: '英語口語訓練（四）',
    url:'/course?course_name=英語口語訓練（四）'
  },
  
  {
    title: '王穎 ',
    url:'/course?teacher=王穎 '
  },
  {
    title: '英語口語訓練（四）',
    url:'/course?course_name=英語口語訓練（四）'
  },
  
  {
    title: '羅勤正 ',
    url:'/course?teacher=羅勤正 '
  },
  {
    title: '英文修辭學',
    url:'/course?course_name=英文修辭學'
  },
  
  {
    title: '馬約羅夫 ',
    url:'/course?teacher=馬約羅夫 '
  },
  {
    title: '俄文（二）',
    url:'/course?course_name=俄文（二）'
  },
  
  {
    title: '盧慧娟 ',
    url:'/course?teacher=盧慧娟 '
  },
  {
    title: '西班牙文（二）',
    url:'/course?course_name=西班牙文（二）'
  },
  
  {
    title: '謝菁玉 ',
    url:'/course?teacher=謝菁玉 '
  },
  {
    title: '德文（二）',
    url:'/course?course_name=德文（二）'
  },
  
  {
    title: '陳健宏 ',
    url:'/course?teacher=陳健宏 '
  },
  {
    title: '法文（二）',
    url:'/course?course_name=法文（二）'
  },
  
  {
    title: '黃淑妙 ',
    url:'/course?teacher=黃淑妙 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '賴俊雄 ',
    url:'/course?teacher=賴俊雄 '
  },
  {
    title: '英文作文（二）',
    url:'/course?course_name=英文作文（二）'
  },
  
  {
    title: '林明澤 ',
    url:'/course?teacher=林明澤 '
  },
  {
    title: '英文作文（二）',
    url:'/course?course_name=英文作文（二）'
  },
  
  {
    title: '廖培真 ',
    url:'/course?teacher=廖培真 '
  },
  {
    title: '英文作文（二）',
    url:'/course?course_name=英文作文（二）'
  },
  
  {
    title: '高實玫 ',
    url:'/course?teacher=高實玫 '
  },
  {
    title: '英文作文（二）',
    url:'/course?course_name=英文作文（二）'
  },
  
  {
    title: '高郁婷 ',
    url:'/course?teacher=高郁婷 '
  },
  {
    title: '英語口語訓練（二）',
    url:'/course?course_name=英語口語訓練（二）'
  },
  
  {
    title: '廖培真 ',
    url:'/course?teacher=廖培真 '
  },
  {
    title: '英語口語訓練（二）',
    url:'/course?course_name=英語口語訓練（二）'
  },
  
  {
    title: '陳昭芳 ',
    url:'/course?teacher=陳昭芳 '
  },
  {
    title: '英語口語訓練（二）',
    url:'/course?course_name=英語口語訓練（二）'
  },
  
  {
    title: '蔡美慧 ',
    url:'/course?teacher=蔡美慧 '
  },
  {
    title: '語言學概論（二）',
    url:'/course?course_name=語言學概論（二）'
  },
  
  {
    title: '廖培真 ',
    url:'/course?teacher=廖培真 '
  },
  {
    title: '文學作品導讀',
    url:'/course?course_name=文學作品導讀'
  },
  
  {
    title: '林明澤 ',
    url:'/course?teacher=林明澤 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '陳立祥 ',
    url:'/course?teacher=陳立祥 '
  },
  {
    title: '多媒體網際網路應用專論',
    url:'/course?course_name=多媒體網際網路應用專論'
  },
  
  {
    title: '王駿發 ',
    url:'/course?teacher=王駿發 '
  },
  {
    title: '電腦語音處理專論',
    url:'/course?course_name=電腦語音處理專論'
  },
  
  {
    title: '戴政祺 ',
    url:'/course?teacher=戴政祺 '
  },
  {
    title: '生物電子系統',
    url:'/course?course_name=生物電子系統'
  },
  
  {
    title: '黃慶連 ',
    url:'/course?teacher=黃慶連 '
  },
  {
    title: '高電壓工程特論',
    url:'/course?course_name=高電壓工程特論'
  },
  
  {
    title: '黃慶連 ',
    url:'/course?teacher=黃慶連 '
  },
  {
    title: '配電系統自動化',
    url:'/course?course_name=配電系統自動化'
  },
  
  {
    title: '蕭純育 ',
    url:'/course?teacher=蕭純育 '
  },
  {
    title: '電力系統規劃',
    url:'/course?course_name=電力系統規劃'
  },
  
  {
    title: '謝明得 ',
    url:'/course?teacher=謝明得 '
  },
  {
    title: '專題研討（四）',
    url:'/course?course_name=專題研討（四）'
  },
  
  {
    title: '謝明得 ',
    url:'/course?teacher=謝明得 '
  },
  {
    title: '專題研討（二）',
    url:'/course?course_name=專題研討（二）'
  },
  
  {
    title: '吳謂勝 ',
    url:'/course?teacher=吳謂勝 '
  },
  {
    title: '生物資料整合與分析',
    url:'/course?course_name=生物資料整合與分析'
  },
  
  {
    title: '王英郎 ',
    url:'/course?teacher=王英郎 '
  },
  {
    title: '半導體及先進奈米化製程技術概論（二）',
    url:'/course?course_name=半導體及先進奈米化製程技術概論（二）'
  },
  
  {
    title: '謝旻甫 ',
    url:'/course?teacher=謝旻甫 '
  },
  {
    title: '電動機設計',
    url:'/course?course_name=電動機設計'
  },
  
  {
    title: '黃尊禧 ',
    url:'/course?teacher=黃尊禧 '
  },
  {
    title: '獵能電子設計導論',
    url:'/course?course_name=獵能電子設計導論'
  },
  
  {
    title: '王　醴 ',
    url:'/course?teacher=王　醴 '
  },
  {
    title: '電力系統控制與穩定度',
    url:'/course?course_name=電力系統控制與穩定度'
  },
  
  {
    title: '周哲民 ',
    url:'/course?teacher=周哲民 '
  },
  {
    title: '網路ＩＣ分析與設計專論',
    url:'/course?course_name=網路ＩＣ分析與設計專論'
  },
  
  {
    title: '吳謂勝 ',
    url:'/course?teacher=吳謂勝 '
  },
  {
    title: '計算系統生物學研究',
    url:'/course?course_name=計算系統生物學研究'
  },
  
  {
    title: '蔡建泓 ',
    url:'/course?teacher=蔡建泓 '
  },
  {
    title: '混合訊號式矽智財設計',
    url:'/course?course_name=混合訊號式矽智財設計'
  },
  
  {
    title: '蕭純育 ',
    url:'/course?teacher=蕭純育 '
  },
  {
    title: '電力系統規劃',
    url:'/course?course_name=電力系統規劃'
  },
  
  {
    title: '王駿發 ',
    url:'/course?teacher=王駿發 '
  },
  {
    title: '電腦語音處理專論',
    url:'/course?course_name=電腦語音處理專論'
  },
  
  {
    title: '林瑞禮 ',
    url:'/course?teacher=林瑞禮 '
  },
  {
    title: '共振式電能轉換器設計',
    url:'/course?course_name=共振式電能轉換器設計'
  },
  
  {
    title: '黃慶連 ',
    url:'/course?teacher=黃慶連 '
  },
  {
    title: '配電系統自動化',
    url:'/course?course_name=配電系統自動化'
  },
  
  {
    title: '李炳鈞 ',
    url:'/course?teacher=李炳鈞 '
  },
  {
    title: '固態熱力學',
    url:'/course?course_name=固態熱力學'
  },
  
  {
    title: '陳盈如 ',
    url:'/course?teacher=陳盈如 '
  },
  {
    title: '圖形理論',
    url:'/course?course_name=圖形理論'
  },
  
  {
    title: '施權峰 ',
    url:'/course?teacher=施權峰 '
  },
  {
    title: '材料物理特論',
    url:'/course?course_name=材料物理特論'
  },
  
  {
    title: '楊慶隆 ',
    url:'/course?teacher=楊慶隆 '
  },
  {
    title: '電子電路系統設計',
    url:'/course?course_name=電子電路系統設計'
  },
  
  {
    title: '魏嘉玲 ',
    url:'/course?teacher=魏嘉玲 '
  },
  {
    title: '生醫積體電路設計',
    url:'/course?course_name=生醫積體電路設計'
  },
  
  {
    title: '彭洞清 ',
    url:'/course?teacher=彭洞清 '
  },
  {
    title: '奈米世代半導體製程概論',
    url:'/course?course_name=奈米世代半導體製程概論'
  },
  
  {
    title: '郭致宏 ',
    url:'/course?teacher=郭致宏 '
  },
  {
    title: '數位訊號電路設計專論',
    url:'/course?course_name=數位訊號電路設計專論'
  },
  
  {
    title: '林志隆 ',
    url:'/course?teacher=林志隆 '
  },
  {
    title: '顯示器線路設計專論',
    url:'/course?course_name=顯示器線路設計專論'
  },
  
  {
    title: '李祖聖 ',
    url:'/course?teacher=李祖聖 '
  },
  {
    title: '智慧型控制專論',
    url:'/course?course_name=智慧型控制專論'
  },
  
  {
    title: '張凌昇 ',
    url:'/course?teacher=張凌昇 '
  },
  {
    title: '生物微機電專論',
    url:'/course?course_name=生物微機電專論'
  },
  
  {
    title: '林瑞禮 ',
    url:'/course?teacher=林瑞禮 '
  },
  {
    title: '電源轉換系統分析',
    url:'/course?course_name=電源轉換系統分析'
  },
  
  {
    title: '李嘉猷 ',
    url:'/course?teacher=李嘉猷 '
  },
  {
    title: '電磁相容學',
    url:'/course?course_name=電磁相容學'
  },
  
  {
    title: '雷曉方 ',
    url:'/course?teacher=雷曉方 '
  },
  {
    title: '數位訊號處理積體電路',
    url:'/course?course_name=數位訊號處理積體電路'
  },
  
  {
    title: '戴政祺 ',
    url:'/course?teacher=戴政祺 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '梁從主 ',
    url:'/course?teacher=梁從主 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '李嘉猷 ',
    url:'/course?teacher=李嘉猷 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '李國君*劉濱達 ',
    url:'/course?teacher=李國君*劉濱達 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '黃正亮 李文熙*',
    url:'/course?teacher=黃正亮 李文熙*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '張凌昇 ',
    url:'/course?teacher=張凌昇 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '黃世杰 ',
    url:'/course?teacher=黃世杰 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '李祖聖 ',
    url:'/course?teacher=李祖聖 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '李昆忠*邱瀝毅 ',
    url:'/course?teacher=李昆忠*邱瀝毅 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '黃正亮 朱聖緣*',
    url:'/course?teacher=黃正亮 朱聖緣*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '黃慶連 ',
    url:'/course?teacher=黃慶連 '
  },
  {
    title: '高電壓工程特論',
    url:'/course?course_name=高電壓工程特論'
  },
  
  {
    title: '鄭光偉 ',
    url:'/course?teacher=鄭光偉 '
  },
  {
    title: 'PLL/DLL設計與應用',
    url:'/course?course_name=PLL/DLL設計與應用'
  },
  
  {
    title: '戴政祺 ',
    url:'/course?teacher=戴政祺 '
  },
  {
    title: '生物電子系統',
    url:'/course?course_name=生物電子系統'
  },
  
  {
    title: '黃正亮 ',
    url:'/course?teacher=黃正亮 '
  },
  {
    title: '電子陶瓷專論',
    url:'/course?course_name=電子陶瓷專論'
  },
  
  {
    title: '黃世杰 ',
    url:'/course?teacher=黃世杰 '
  },
  {
    title: '電能運轉與控制專論',
    url:'/course?course_name=電能運轉與控制專論'
  },
  
  {
    title: '毛齊武 ',
    url:'/course?teacher=毛齊武 '
  },
  {
    title: '數位影像處理',
    url:'/course?course_name=數位影像處理'
  },
  
  {
    title: '莊智清 ',
    url:'/course?teacher=莊智清 '
  },
  {
    title: '電子導航',
    url:'/course?course_name=電子導航'
  },
  
  {
    title: '林志隆 ',
    url:'/course?teacher=林志隆 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '楊宏澤*陳建富 ',
    url:'/course?teacher=楊宏澤*陳建富 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '莊智清 ',
    url:'/course?teacher=莊智清 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '郭致宏 ',
    url:'/course?teacher=郭致宏 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '黃正亮 李炳鈞*',
    url:'/course?teacher=黃正亮 李炳鈞*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '張天豪*楊慶隆 ',
    url:'/course?teacher=張天豪*楊慶隆 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '林瑞禮*張簡樂仁 ',
    url:'/course?teacher=林瑞禮*張簡樂仁 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '吳謂勝 ',
    url:'/course?teacher=吳謂勝 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '郭泰豪*黃尊禧 ',
    url:'/course?teacher=郭泰豪*黃尊禧 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '施權峰*黃正亮 ',
    url:'/course?teacher=施權峰*黃正亮 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '沈芳瀅 ',
    url:'/course?teacher=沈芳瀅 '
  },
  {
    title: '工程組織與績效',
    url:'/course?course_name=工程組織與績效'
  },
  
  {
    title: '潘南飛 ',
    url:'/course?teacher=潘南飛 '
  },
  {
    title: '安全與維護管理',
    url:'/course?course_name=安全與維護管理'
  },
  
  {
    title: '馮重偉 ',
    url:'/course?teacher=馮重偉 '
  },
  {
    title: '工程時程控制',
    url:'/course?course_name=工程時程控制'
  },
  
  {
    title: '王雲哲 ',
    url:'/course?teacher=王雲哲 '
  },
  {
    title: '材料變形機制',
    url:'/course?course_name=材料變形機制'
  },
  
  {
    title: '黃忠信 ',
    url:'/course?teacher=黃忠信 '
  },
  {
    title: '材料機械性質',
    url:'/course?course_name=材料機械性質'
  },
  
  {
    title: '郭振銘*楊士賢 ',
    url:'/course?teacher=郭振銘*楊士賢 '
  },
  {
    title: '交通設施實驗與分析',
    url:'/course?course_name=交通設施實驗與分析'
  },
  
  {
    title: '蕭志銘 ',
    url:'/course?teacher=蕭志銘 '
  },
  {
    title: '鋪面管理系統',
    url:'/course?course_name=鋪面管理系統'
  },
  
  {
    title: '陳建旭 ',
    url:'/course?teacher=陳建旭 '
  },
  {
    title: '瀝青配合設計',
    url:'/course?course_name=瀝青配合設計'
  },
  
  {
    title: '陳建旭 ',
    url:'/course?teacher=陳建旭 '
  },
  {
    title: '瀝青配合設計',
    url:'/course?course_name=瀝青配合設計'
  },
  
  {
    title: '楊士賢 ',
    url:'/course?teacher=楊士賢 '
  },
  {
    title: '永續交通設施',
    url:'/course?course_name=永續交通設施'
  },
  
  {
    title: '洪　瀞 ',
    url:'/course?teacher=洪　瀞 '
  },
  {
    title: '深開挖基礎工程學',
    url:'/course?course_name=深開挖基礎工程學'
  },
  
  {
    title: '李德河 ',
    url:'/course?teacher=李德河 '
  },
  {
    title: '高等岩石力學',
    url:'/course?course_name=高等岩石力學'
  },
  
  {
    title: '黃景川 ',
    url:'/course?teacher=黃景川 '
  },
  {
    title: '地工合成物之應用與發展',
    url:'/course?course_name=地工合成物之應用與發展'
  },
  
  {
    title: '胡邵敏 ',
    url:'/course?teacher=胡邵敏 '
  },
  {
    title: '大地工程技術',
    url:'/course?course_name=大地工程技術'
  },
  
  {
    title: '張文忠 ',
    url:'/course?teacher=張文忠 '
  },
  {
    title: '大地地震工程學',
    url:'/course?course_name=大地地震工程學'
  },
  
  {
    title: '張文忠 ',
    url:'/course?teacher=張文忠 '
  },
  {
    title: '高等土壤力學',
    url:'/course?course_name=高等土壤力學'
  },
  
  {
    title: '洪崇展 ',
    url:'/course?teacher=洪崇展 '
  },
  {
    title: '纖維混凝土',
    url:'/course?course_name=纖維混凝土'
  },
  
  {
    title: '賴啟銘 ',
    url:'/course?teacher=賴啟銘 '
  },
  {
    title: '建築機電系統',
    url:'/course?course_name=建築機電系統'
  },
  
  {
    title: '盧煉元 ',
    url:'/course?teacher=盧煉元 '
  },
  {
    title: '高等結構分析',
    url:'/course?course_name=高等結構分析'
  },
  
  {
    title: '林育芸 ',
    url:'/course?teacher=林育芸 '
  },
  {
    title: '黏彈性力學',
    url:'/course?course_name=黏彈性力學'
  },
  
  {
    title: '吳致平 ',
    url:'/course?teacher=吳致平 '
  },
  {
    title: '有限元素法',
    url:'/course?course_name=有限元素法'
  },
  
  {
    title: '朱世禹 ',
    url:'/course?teacher=朱世禹 '
  },
  {
    title: '地震工程',
    url:'/course?course_name=地震工程'
  },
  
  {
    title: '陳東陽 ',
    url:'/course?teacher=陳東陽 '
  },
  {
    title: '固體力學特論',
    url:'/course?course_name=固體力學特論'
  },
  
  {
    title: '王永明 ',
    url:'/course?teacher=王永明 '
  },
  {
    title: '數值模擬法',
    url:'/course?course_name=數值模擬法'
  },
  
  {
    title: '吳建宏 ',
    url:'/course?teacher=吳建宏 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '吳建宏 ',
    url:'/course?teacher=吳建宏 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '胡宣德 ',
    url:'/course?teacher=胡宣德 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '沈芳瀅 ',
    url:'/course?teacher=沈芳瀅 '
  },
  {
    title: '工程組織與績效',
    url:'/course?course_name=工程組織與績效'
  },
  
  {
    title: '潘南飛 ',
    url:'/course?teacher=潘南飛 '
  },
  {
    title: '安全與維護管理',
    url:'/course?course_name=安全與維護管理'
  },
  
  {
    title: '馮重偉 ',
    url:'/course?teacher=馮重偉 '
  },
  {
    title: '工程時程控制',
    url:'/course?course_name=工程時程控制'
  },
  
  {
    title: '王雲哲 ',
    url:'/course?teacher=王雲哲 '
  },
  {
    title: '材料變形機制',
    url:'/course?course_name=材料變形機制'
  },
  
  {
    title: '黃忠信 ',
    url:'/course?teacher=黃忠信 '
  },
  {
    title: '材料機械性質',
    url:'/course?course_name=材料機械性質'
  },
  
  {
    title: '郭振銘*楊士賢 ',
    url:'/course?teacher=郭振銘*楊士賢 '
  },
  {
    title: '交通設施實驗與分析',
    url:'/course?course_name=交通設施實驗與分析'
  },
  
  {
    title: '蕭志銘 ',
    url:'/course?teacher=蕭志銘 '
  },
  {
    title: '鋪面管理系統',
    url:'/course?course_name=鋪面管理系統'
  },
  
  {
    title: '陳建旭 ',
    url:'/course?teacher=陳建旭 '
  },
  {
    title: '瀝青配合設計',
    url:'/course?course_name=瀝青配合設計'
  },
  
  {
    title: '陳建旭 ',
    url:'/course?teacher=陳建旭 '
  },
  {
    title: '瀝青配合設計',
    url:'/course?course_name=瀝青配合設計'
  },
  
  {
    title: '楊士賢 ',
    url:'/course?teacher=楊士賢 '
  },
  {
    title: '永續交通設施',
    url:'/course?course_name=永續交通設施'
  },
  
  {
    title: '洪　瀞 ',
    url:'/course?teacher=洪　瀞 '
  },
  {
    title: '深開挖基礎工程學',
    url:'/course?course_name=深開挖基礎工程學'
  },
  
  {
    title: '李德河 ',
    url:'/course?teacher=李德河 '
  },
  {
    title: '高等岩石力學',
    url:'/course?course_name=高等岩石力學'
  },
  
  {
    title: '黃景川 ',
    url:'/course?teacher=黃景川 '
  },
  {
    title: '地工合成物之應用與發展',
    url:'/course?course_name=地工合成物之應用與發展'
  },
  
  {
    title: '胡邵敏 ',
    url:'/course?teacher=胡邵敏 '
  },
  {
    title: '大地工程技術',
    url:'/course?course_name=大地工程技術'
  },
  
  {
    title: '張文忠 ',
    url:'/course?teacher=張文忠 '
  },
  {
    title: '大地地震工程學',
    url:'/course?course_name=大地地震工程學'
  },
  
  {
    title: '張文忠 ',
    url:'/course?teacher=張文忠 '
  },
  {
    title: '高等土壤力學',
    url:'/course?course_name=高等土壤力學'
  },
  
  {
    title: '洪崇展 ',
    url:'/course?teacher=洪崇展 '
  },
  {
    title: '纖維混凝土',
    url:'/course?course_name=纖維混凝土'
  },
  
  {
    title: '賴啟銘 ',
    url:'/course?teacher=賴啟銘 '
  },
  {
    title: '建築機電系統',
    url:'/course?course_name=建築機電系統'
  },
  
  {
    title: '盧煉元 ',
    url:'/course?teacher=盧煉元 '
  },
  {
    title: '高等結構分析',
    url:'/course?course_name=高等結構分析'
  },
  
  {
    title: '林育芸 ',
    url:'/course?teacher=林育芸 '
  },
  {
    title: '黏彈性力學',
    url:'/course?course_name=黏彈性力學'
  },
  
  {
    title: '吳致平 ',
    url:'/course?teacher=吳致平 '
  },
  {
    title: '有限元素法',
    url:'/course?course_name=有限元素法'
  },
  
  {
    title: '朱世禹 ',
    url:'/course?teacher=朱世禹 '
  },
  {
    title: '地震工程',
    url:'/course?course_name=地震工程'
  },
  
  {
    title: '陳東陽 ',
    url:'/course?teacher=陳東陽 '
  },
  {
    title: '固體力學特論',
    url:'/course?course_name=固體力學特論'
  },
  
  {
    title: '王永明 ',
    url:'/course?teacher=王永明 '
  },
  {
    title: '數值模擬法',
    url:'/course?course_name=數值模擬法'
  },
  
  {
    title: '胡宣德 ',
    url:'/course?teacher=胡宣德 '
  },
  {
    title: '教學實習（四）',
    url:'/course?course_name=教學實習（四）'
  },
  
  {
    title: '胡宣德 ',
    url:'/course?teacher=胡宣德 '
  },
  {
    title: '教學實習（二）',
    url:'/course?course_name=教學實習（二）'
  },
  
  {
    title: '張行道 馮重偉*',
    url:'/course?teacher=張行道 馮重偉*'
  },
  {
    title: '工程管理專題討論（四）',
    url:'/course?course_name=工程管理專題討論（四）'
  },
  
  {
    title: '張行道*馮重偉 ',
    url:'/course?teacher=張行道*馮重偉 '
  },
  {
    title: '工程管理專題討論（二）',
    url:'/course?course_name=工程管理專題討論（二）'
  },
  
  {
    title: '鍾興陽 ',
    url:'/course?teacher=鍾興陽 '
  },
  {
    title: '結構材料專題討論（四）',
    url:'/course?course_name=結構材料專題討論（四）'
  },
  
  {
    title: '鍾興陽 ',
    url:'/course?teacher=鍾興陽 '
  },
  {
    title: '結構材料專題討論（二）',
    url:'/course?course_name=結構材料專題討論（二）'
  },
  
  {
    title: '郭振銘 蕭志銘*',
    url:'/course?teacher=郭振銘 蕭志銘*'
  },
  {
    title: '交通工程專題討論（四）',
    url:'/course?course_name=交通工程專題討論（四）'
  },
  
  {
    title: '郭振銘*蕭志銘 ',
    url:'/course?teacher=郭振銘*蕭志銘 '
  },
  {
    title: '交通工程專題討論（二）',
    url:'/course?course_name=交通工程專題討論（二）'
  },
  
  {
    title: '倪勝火*李德河 ',
    url:'/course?teacher=倪勝火*李德河 '
  },
  {
    title: '大地工程專題討論（四）',
    url:'/course?course_name=大地工程專題討論（四）'
  },
  
  {
    title: '倪勝火 李德河*',
    url:'/course?teacher=倪勝火 李德河*'
  },
  {
    title: '大地工程專題討論（二）',
    url:'/course?course_name=大地工程專題討論（二）'
  },
  
  {
    title: '洪崇展 ',
    url:'/course?teacher=洪崇展 '
  },
  {
    title: '結構工程專題討論（四）',
    url:'/course?course_name=結構工程專題討論（四）'
  },
  
  {
    title: '洪崇展 ',
    url:'/course?teacher=洪崇展 '
  },
  {
    title: '結構工程專題討論（二）',
    url:'/course?course_name=結構工程專題討論（二）'
  },
  
  {
    title: '胡宣德 ',
    url:'/course?teacher=胡宣德 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '蔡文達 ',
    url:'/course?teacher=蔡文達 '
  },
  {
    title: '耐蝕材料',
    url:'/course?course_name=耐蝕材料'
  },
  
  {
    title: '劉浩志 ',
    url:'/course?teacher=劉浩志 '
  },
  {
    title: '掃描探針技術特論',
    url:'/course?course_name=掃描探針技術特論'
  },
  
  {
    title: '劉全璞 ',
    url:'/course?teacher=劉全璞 '
  },
  {
    title: '高解析式電子顯微鏡',
    url:'/course?course_name=高解析式電子顯微鏡'
  },
  
  {
    title: '齊孝定 ',
    url:'/course?teacher=齊孝定 '
  },
  {
    title: '無機固體光譜學概論',
    url:'/course?course_name=無機固體光譜學概論'
  },
  
  {
    title: '陳貞夙 ',
    url:'/course?teacher=陳貞夙 '
  },
  {
    title: '半導體材料及元件理論',
    url:'/course?course_name=半導體材料及元件理論'
  },
  
  {
    title: '李輝隆 黃啟祥*',
    url:'/course?teacher=李輝隆 黃啟祥*'
  },
  {
    title: '粉末工程',
    url:'/course?course_name=粉末工程'
  },
  
  {
    title: '林光隆 ',
    url:'/course?teacher=林光隆 '
  },
  {
    title: '電子構裝材料',
    url:'/course?course_name=電子構裝材料'
  },
  
  {
    title: '黃啟祥 ',
    url:'/course?teacher=黃啟祥 '
  },
  {
    title: '陶瓷製程',
    url:'/course?course_name=陶瓷製程'
  },
  
  {
    title: '陳引幹 ',
    url:'/course?teacher=陳引幹 '
  },
  {
    title: '光電材料導論',
    url:'/course?course_name=光電材料導論'
  },
  
  {
    title: '方冠榮 ',
    url:'/course?teacher=方冠榮 '
  },
  {
    title: '陶瓷學',
    url:'/course?course_name=陶瓷學'
  },
  
  {
    title: '許文東 林士剛*李旺龍 ',
    url:'/course?teacher=許文東 林士剛*李旺龍 '
  },
  {
    title: '計算材料科學',
    url:'/course?course_name=計算材料科學'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '論文（二）',
    url:'/course?course_name=論文（二）'
  },
  
  {
    title: '呂傳盛 ',
    url:'/course?teacher=呂傳盛 '
  },
  {
    title: '鋼鐵冶金（二）',
    url:'/course?course_name=鋼鐵冶金（二）'
  },
  
  {
    title: '林士剛 ',
    url:'/course?teacher=林士剛 '
  },
  {
    title: '材料熱力學（二）',
    url:'/course?course_name=材料熱力學（二）'
  },
  
  {
    title: '郭瑞昭 ',
    url:'/course?teacher=郭瑞昭 '
  },
  {
    title: '材料實驗（二）',
    url:'/course?course_name=材料實驗（二）'
  },
  
  {
    title: '郭瑞昭 ',
    url:'/course?teacher=郭瑞昭 '
  },
  {
    title: '材料實驗（二）',
    url:'/course?course_name=材料實驗（二）'
  },
  
  {
    title: '許聯崇 ',
    url:'/course?teacher=許聯崇 '
  },
  {
    title: '有機化學導論',
    url:'/course?course_name=有機化學導論'
  },
  
  {
    title: '張高碩 ',
    url:'/course?teacher=張高碩 '
  },
  {
    title: '晶體結構與缺陷',
    url:'/course?course_name=晶體結構與缺陷'
  },
  
  {
    title: '李旺龍 ',
    url:'/course?teacher=李旺龍 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '林光隆 ',
    url:'/course?teacher=林光隆 '
  },
  {
    title: '材料熱力學（二）',
    url:'/course?course_name=材料熱力學（二）'
  },
  
  {
    title: '黃啟祥 ',
    url:'/course?teacher=黃啟祥 '
  },
  {
    title: '材料實驗（二）',
    url:'/course?course_name=材料實驗（二）'
  },
  
  {
    title: '黃啟祥 ',
    url:'/course?teacher=黃啟祥 '
  },
  {
    title: '材料實驗（二）',
    url:'/course?course_name=材料實驗（二）'
  },
  
  {
    title: '郭昌恕 ',
    url:'/course?teacher=郭昌恕 '
  },
  {
    title: '有機化學導論',
    url:'/course?course_name=有機化學導論'
  },
  
  {
    title: '方滄澤 ',
    url:'/course?teacher=方滄澤 '
  },
  {
    title: '晶體結構與缺陷',
    url:'/course?course_name=晶體結構與缺陷'
  },
  
  {
    title: '許文東 ',
    url:'/course?teacher=許文東 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '許聯崇 ',
    url:'/course?teacher=許聯崇 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '郭瑞昭 ',
    url:'/course?teacher=郭瑞昭 '
  },
  {
    title: '材料工程力學',
    url:'/course?course_name=材料工程力學'
  },
  
  {
    title: '周鶴軒 ',
    url:'/course?teacher=周鶴軒 '
  },
  {
    title: '普通化學實驗（二）',
    url:'/course?course_name=普通化學實驗（二）'
  },
  
  {
    title: '田興龍 ',
    url:'/course?teacher=田興龍 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '田興龍 ',
    url:'/course?teacher=田興龍 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '許聯崇 ',
    url:'/course?teacher=許聯崇 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '洪飛義 ',
    url:'/course?teacher=洪飛義 '
  },
  {
    title: '材料工程力學',
    url:'/course?course_name=材料工程力學'
  },
  
  {
    title: '黃福永 ',
    url:'/course?teacher=黃福永 '
  },
  {
    title: '普通化學實驗（二）',
    url:'/course?course_name=普通化學實驗（二）'
  },
  
  {
    title: '陳巧貞*蘇世剛 ',
    url:'/course?teacher=陳巧貞*蘇世剛 '
  },
  {
    title: '普通化學（二）',
    url:'/course?course_name=普通化學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '呂佳諭 ',
    url:'/course?teacher=呂佳諭 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '李國明 ',
    url:'/course?teacher=李國明 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '傅子芳*',
    url:'/course?teacher=傅子芳*'
  },
  {
    title: '生物技術應用及發展',
    url:'/course?course_name=生物技術應用及發展'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '實驗室品管',
    url:'/course?course_name=實驗室品管'
  },
  
  {
    title: '張權發 黃暉升*',
    url:'/course?teacher=張權發 黃暉升*'
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '黃暉升 ',
    url:'/course?teacher=黃暉升 '
  },
  {
    title: '毒物學',
    url:'/course?course_name=毒物學'
  },
  
  {
    title: '王貞仁 黃溫雅*',
    url:'/course?teacher=王貞仁 黃溫雅*'
  },
  {
    title: '醫學分子檢驗學',
    url:'/course?course_name=醫學分子檢驗學'
  },
  
  {
    title: '王貞仁 ',
    url:'/course?teacher=王貞仁 '
  },
  {
    title: '臨床病毒學實驗',
    url:'/course?course_name=臨床病毒學實驗'
  },
  
  {
    title: '王貞仁 ',
    url:'/course?teacher=王貞仁 '
  },
  {
    title: '臨床病毒學實驗',
    url:'/course?course_name=臨床病毒學實驗'
  },
  
  {
    title: '王貞仁 ',
    url:'/course?teacher=王貞仁 '
  },
  {
    title: '臨床病毒學',
    url:'/course?course_name=臨床病毒學'
  },
  
  {
    title: '黃暉升*陳百昇 ',
    url:'/course?teacher=黃暉升*陳百昇 '
  },
  {
    title: '臨床生化實驗',
    url:'/course?course_name=臨床生化實驗'
  },
  
  {
    title: '黃暉升*陳百昇 ',
    url:'/course?teacher=黃暉升*陳百昇 '
  },
  {
    title: '臨床生化實驗',
    url:'/course?course_name=臨床生化實驗'
  },
  
  {
    title: '黃暉升*',
    url:'/course?teacher=黃暉升*'
  },
  {
    title: '臨床生化學',
    url:'/course?course_name=臨床生化學'
  },
  
  {
    title: '蔡佩珍 陳呈堯 ',
    url:'/course?teacher=蔡佩珍 陳呈堯 '
  },
  {
    title: '臨床微生物學實驗',
    url:'/course?course_name=臨床微生物學實驗'
  },
  
  {
    title: '蔡佩珍 陳呈堯 ',
    url:'/course?teacher=蔡佩珍 陳呈堯 '
  },
  {
    title: '臨床微生物學實驗',
    url:'/course?course_name=臨床微生物學實驗'
  },
  
  {
    title: '蔡佩珍*陳呈堯 ',
    url:'/course?teacher=蔡佩珍*陳呈堯 '
  },
  {
    title: '臨床微生物學',
    url:'/course?course_name=臨床微生物學'
  },
  
  {
    title: '葉才明 ',
    url:'/course?teacher=葉才明 '
  },
  {
    title: '臨床血清免疫學實驗',
    url:'/course?course_name=臨床血清免疫學實驗'
  },
  
  {
    title: '葉才明 ',
    url:'/course?teacher=葉才明 '
  },
  {
    title: '臨床血清免疫學實驗',
    url:'/course?course_name=臨床血清免疫學實驗'
  },
  
  {
    title: '葉才明 ',
    url:'/course?teacher=葉才明 '
  },
  {
    title: '臨床血清免疫學',
    url:'/course?course_name=臨床血清免疫學'
  },
  
  {
    title: '徐麗君 ',
    url:'/course?teacher=徐麗君 '
  },
  {
    title: '服務學習（三）',
    url:'/course?course_name=服務學習（三）'
  },
  
  {
    title: '徐麗君 ',
    url:'/course?teacher=徐麗君 '
  },
  {
    title: '基礎生物技術',
    url:'/course?course_name=基礎生物技術'
  },
  
  {
    title: '張志鵬 ',
    url:'/course?teacher=張志鵬 '
  },
  {
    title: '免疫學（含實驗）',
    url:'/course?course_name=免疫學（含實驗）'
  },
  
  {
    title: '徐麗君 何宗憲 王世敏 凌　斌 張志鵬*',
    url:'/course?teacher=徐麗君 何宗憲 王世敏 凌　斌 張志鵬*'
  },
  {
    title: '免疫學（含實驗）',
    url:'/course?course_name=免疫學（含實驗）'
  },
  
  {
    title: '何月仁 ',
    url:'/course?teacher=何月仁 '
  },
  {
    title: '生物化學（含實驗）',
    url:'/course?course_name=生物化學（含實驗）'
  },
  
  {
    title: '陳毓宏 吳昭良 莊偉哲 張文粲 何月仁 吳華林 鄭宏祺 陳昌熙 黃柏憲*',
    url:'/course?teacher=陳毓宏 吳昭良 莊偉哲 張文粲 何月仁 吳華林 鄭宏祺 陳昌熙 黃柏憲*'
  },
  {
    title: '生物化學（含實驗）',
    url:'/course?course_name=生物化學（含實驗）'
  },
  
  {
    title: '楊孔嘉 陳百昇 ',
    url:'/course?teacher=楊孔嘉 陳百昇 '
  },
  {
    title: '臨床鏡檢學（含實驗）',
    url:'/course?course_name=臨床鏡檢學（含實驗）'
  },
  
  {
    title: '楊孔嘉*陳百昇 ',
    url:'/course?teacher=楊孔嘉*陳百昇 '
  },
  {
    title: '臨床鏡檢學（含實驗）',
    url:'/course?course_name=臨床鏡檢學（含實驗）'
  },
  
  {
    title: '辛致煒 胥直利 林威辰 ',
    url:'/course?teacher=辛致煒 胥直利 林威辰 '
  },
  {
    title: '寄生蟲學含實驗',
    url:'/course?course_name=寄生蟲學含實驗'
  },
  
  {
    title: '辛致煒 胥直利 林威辰*',
    url:'/course?teacher=辛致煒 胥直利 林威辰*'
  },
  {
    title: '寄生蟲學含實驗',
    url:'/course?course_name=寄生蟲學含實驗'
  },
  
  {
    title: '王貞仁 ',
    url:'/course?teacher=王貞仁 '
  },
  {
    title: '專題研究實驗（一）',
    url:'/course?course_name=專題研究實驗（一）'
  },
  
  {
    title: '蔡美慧 ',
    url:'/course?teacher=蔡美慧 '
  },
  {
    title: '醫用台語（中階）',
    url:'/course?course_name=醫用台語（中階）'
  },
  
  {
    title: '王亮懿 ',
    url:'/course?teacher=王亮懿 '
  },
  {
    title: '生物統計',
    url:'/course?course_name=生物統計'
  },
  
  {
    title: '陳旻宏 ',
    url:'/course?teacher=陳旻宏 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '王業凱 ',
    url:'/course?teacher=王業凱 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '張權發 ',
    url:'/course?teacher=張權發 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '游輝樟 ',
    url:'/course?teacher=游輝樟 '
  },
  {
    title: '普通物理學',
    url:'/course?course_name=普通物理學'
  },
  
  {
    title: '楊孔嘉 傅子芳*',
    url:'/course?teacher=楊孔嘉 傅子芳*'
  },
  {
    title: '細胞生物學',
    url:'/course?course_name=細胞生物學'
  },
  
  {
    title: '張權發 ',
    url:'/course?teacher=張權發 '
  },
  {
    title: '有機化學',
    url:'/course?course_name=有機化學'
  },
  
  {
    title: '黃暉升 ',
    url:'/course?teacher=黃暉升 '
  },
  {
    title: '分析化學含實驗',
    url:'/course?course_name=分析化學含實驗'
  },
  
  {
    title: '張權發 ',
    url:'/course?teacher=張權發 '
  },
  {
    title: '分析化學含實驗',
    url:'/course?course_name=分析化學含實驗'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '卓瓊鈺 林桑伊 成戎珠 楊政峰 黃英修 洪菁霞 林呈鳳 徐碧真 蔡一如 李佩紜*蔡昆霖 郭怡良 ',
    url:'/course?teacher=卓瓊鈺 林桑伊 成戎珠 楊政峰 黃英修 洪菁霞 林呈鳳 徐碧真 蔡一如 李佩紜*蔡昆霖 郭怡良 '
  },
  {
    title: '物理治療專題討論',
    url:'/course?course_name=物理治療專題討論'
  },
  
  {
    title: '卓瓊鈺 ',
    url:'/course?teacher=卓瓊鈺 '
  },
  {
    title: '物理治療海外實習',
    url:'/course?course_name=物理治療海外實習'
  },
  
  {
    title: '卓瓊鈺 林桑伊 李佩紜 郭怡良*',
    url:'/course?teacher=卓瓊鈺 林桑伊 李佩紜 郭怡良*'
  },
  {
    title: '物理治療臨床實習（六）',
    url:'/course?course_name=物理治療臨床實習（六）'
  },
  
  {
    title: '洪菁霞 林呈鳳*徐碧真 蔡一如 ',
    url:'/course?teacher=洪菁霞 林呈鳳*徐碧真 蔡一如 '
  },
  {
    title: '物理治療臨床實習（五）',
    url:'/course?course_name=物理治療臨床實習（五）'
  },
  
  {
    title: '成戎珠 楊政峰 黃英修 蔡昆霖*',
    url:'/course?teacher=成戎珠 楊政峰 黃英修 蔡昆霖*'
  },
  {
    title: '物理治療臨床實習（四）',
    url:'/course?course_name=物理治療臨床實習（四）'
  },
  
  {
    title: '徐碧真 ',
    url:'/course?teacher=徐碧真 '
  },
  {
    title: '問題為導向的幼兒及成人神經物理治療探討',
    url:'/course?course_name=問題為導向的幼兒及成人神經物理治療探討'
  },
  
  {
    title: '蔡一如 ',
    url:'/course?teacher=蔡一如 '
  },
  {
    title: '運動傷害防護處理',
    url:'/course?course_name=運動傷害防護處理'
  },
  
  {
    title: '林桑伊 ',
    url:'/course?teacher=林桑伊 '
  },
  {
    title: '物理治療文獻搜尋與評讀',
    url:'/course?course_name=物理治療文獻搜尋與評讀'
  },
  
  {
    title: '卓瓊鈺 林桑伊 成戎珠 楊政峰 黃英修 洪菁霞*林呈鳳 徐碧真 蔡一如 李佩紜 蔡昆霖 郭怡良 ',
    url:'/course?teacher=卓瓊鈺 林桑伊 成戎珠 楊政峰 黃英修 洪菁霞*林呈鳳 徐碧真 蔡一如 李佩紜 蔡昆霖 郭怡良 '
  },
  {
    title: '物理治療臨床見習',
    url:'/course?course_name=物理治療臨床見習'
  },
  
  {
    title: '蔡一如*',
    url:'/course?teacher=蔡一如*'
  },
  {
    title: '論文',
    url:'/course?course_name=論文'
  },
  
  {
    title: '楊政峰 ',
    url:'/course?teacher=楊政峰 '
  },
  {
    title: '物理治療倫理學',
    url:'/course?course_name=物理治療倫理學'
  },
  
  {
    title: '卓瓊鈺 林桑伊 黃英修*李佩紜 ',
    url:'/course?teacher=卓瓊鈺 林桑伊 黃英修*李佩紜 '
  },
  {
    title: '神經科物理治療學實習（二）',
    url:'/course?course_name=神經科物理治療學實習（二）'
  },
  
  {
    title: '卓瓊鈺 林桑伊 黃英修*李佩紜 ',
    url:'/course?teacher=卓瓊鈺 林桑伊 黃英修*李佩紜 '
  },
  {
    title: '神經科物理治療學（二）',
    url:'/course?course_name=神經科物理治療學（二）'
  },
  
  {
    title: '洪菁霞*蔡昆霖 ',
    url:'/course?teacher=洪菁霞*蔡昆霖 '
  },
  {
    title: '心肺物理治療學及實習（二）',
    url:'/course?course_name=心肺物理治療學及實習（二）'
  },
  
  {
    title: '洪菁霞 蔡昆霖*',
    url:'/course?teacher=洪菁霞 蔡昆霖*'
  },
  {
    title: '心肺物理治療學及實習（二）',
    url:'/course?course_name=心肺物理治療學及實習（二）'
  },
  
  {
    title: '成戎珠*徐碧真 ',
    url:'/course?teacher=成戎珠*徐碧真 '
  },
  {
    title: '小兒物理治療學及實習（二）',
    url:'/course?course_name=小兒物理治療學及實習（二）'
  },
  
  {
    title: '成戎珠*徐碧真 ',
    url:'/course?teacher=成戎珠*徐碧真 '
  },
  {
    title: '小兒物理治療學及實習（二）',
    url:'/course?course_name=小兒物理治療學及實習（二）'
  },
  
  {
    title: '楊政峰 ',
    url:'/course?teacher=楊政峰 '
  },
  {
    title: '物理治療管理學',
    url:'/course?course_name=物理治療管理學'
  },
  
  {
    title: '蔡一如*郭怡良 ',
    url:'/course?teacher=蔡一如*郭怡良 '
  },
  {
    title: '骨科物理治療學實習（二）',
    url:'/course?course_name=骨科物理治療學實習（二）'
  },
  
  {
    title: '蔡一如*郭怡良 ',
    url:'/course?teacher=蔡一如*郭怡良 '
  },
  {
    title: '骨科物理治療學（二）',
    url:'/course?course_name=骨科物理治療學（二）'
  },
  
  {
    title: '宋俊明 柯文謙 陳炯瑜 蔡惟全 張漢煜 鄭斌男 王崇任 李政翰 劉秉彥 陳儒逸 歐弘毅 莊喬雄 詹世鴻 林建中 林立人 蘇文彬 ',
    url:'/course?teacher=宋俊明 柯文謙 陳炯瑜 蔡惟全 張漢煜 鄭斌男 王崇任 李政翰 劉秉彥 陳儒逸 歐弘毅 莊喬雄 詹世鴻 林建中 林立人 蘇文彬 '
  },
  {
    title: '內科學概論',
    url:'/course?course_name=內科學概論'
  },
  
  {
    title: '官大紳*程琡敏 陳若佟 林裕晴 ',
    url:'/course?teacher=官大紳*程琡敏 陳若佟 林裕晴 '
  },
  {
    title: '復健醫學',
    url:'/course?course_name=復健醫學'
  },
  
  {
    title: '徐碧真 ',
    url:'/course?teacher=徐碧真 '
  },
  {
    title: '行動導向學習-特殊發展幼童的遊戲介入',
    url:'/course?course_name=行動導向學習-特殊發展幼童的遊戲介入'
  },
  
  {
    title: '陳文玲 成戎珠 林呈鳳 蔡一如 李佩紜*',
    url:'/course?teacher=陳文玲 成戎珠 林呈鳳 蔡一如 李佩紜*'
  },
  {
    title: '操作治療學實習',
    url:'/course?course_name=操作治療學實習'
  },
  
  {
    title: '成戎珠 林呈鳳 蔡一如 李佩紜*',
    url:'/course?teacher=成戎珠 林呈鳳 蔡一如 李佩紜*'
  },
  {
    title: '操作治療學',
    url:'/course?course_name=操作治療學'
  },
  
  {
    title: '洪菁霞*蔡昆霖 ',
    url:'/course?teacher=洪菁霞*蔡昆霖 '
  },
  {
    title: '運動生理學',
    url:'/course?course_name=運動生理學'
  },
  
  {
    title: '徐碧真 ',
    url:'/course?teacher=徐碧真 '
  },
  {
    title: '特殊發展幼童的遊戲介入',
    url:'/course?course_name=特殊發展幼童的遊戲介入'
  },
  
  {
    title: '蔡昆霖 ',
    url:'/course?teacher=蔡昆霖 '
  },
  {
    title: '運動處方',
    url:'/course?course_name=運動處方'
  },
  
  {
    title: '林桑伊 ',
    url:'/course?teacher=林桑伊 '
  },
  {
    title: '人體動作控制概論與基本運用',
    url:'/course?course_name=人體動作控制概論與基本運用'
  },
  
  {
    title: '卓瓊鈺 黃英修*洪菁霞 李佩紜 蔡昆霖 ',
    url:'/course?teacher=卓瓊鈺 黃英修*洪菁霞 李佩紜 蔡昆霖 '
  },
  {
    title: '物理因子學實習',
    url:'/course?course_name=物理因子學實習'
  },
  
  {
    title: '卓瓊鈺 黃英修*洪菁霞 李佩紜 蔡昆霖 ',
    url:'/course?teacher=卓瓊鈺 黃英修*洪菁霞 李佩紜 蔡昆霖 '
  },
  {
    title: '物理因子學',
    url:'/course?course_name=物理因子學'
  },
  
  {
    title: '王亮懿 ',
    url:'/course?teacher=王亮懿 '
  },
  {
    title: '生物統計學',
    url:'/course?course_name=生物統計學'
  },
  
  {
    title: '卓瓊鈺*林桑伊 成戎珠 黃英修 洪菁霞 蔡一如 李佩紜 蔡昆霖 郭怡良 ',
    url:'/course?teacher=卓瓊鈺*林桑伊 成戎珠 黃英修 洪菁霞 蔡一如 李佩紜 蔡昆霖 郭怡良 '
  },
  {
    title: '基礎物理治療學實習',
    url:'/course?course_name=基礎物理治療學實習'
  },
  
  {
    title: '卓瓊鈺*林桑伊 成戎珠 黃英修 洪菁霞 蔡一如 李佩紜 蔡昆霖 郭怡良 ',
    url:'/course?teacher=卓瓊鈺*林桑伊 成戎珠 黃英修 洪菁霞 蔡一如 李佩紜 蔡昆霖 郭怡良 '
  },
  {
    title: '基礎物理治療學',
    url:'/course?course_name=基礎物理治療學'
  },
  
  {
    title: '楊政峰 ',
    url:'/course?teacher=楊政峰 '
  },
  {
    title: '神經解剖學',
    url:'/course?course_name=神經解剖學'
  },
  
  {
    title: '成戎珠 蔡一如 李佩紜 蔡昆霖*郭怡良 ',
    url:'/course?teacher=成戎珠 蔡一如 李佩紜 蔡昆霖*郭怡良 '
  },
  {
    title: '肌動學',
    url:'/course?course_name=肌動學'
  },
  
  {
    title: '郭怡良 ',
    url:'/course?teacher=郭怡良 '
  },
  {
    title: '表體解剖學',
    url:'/course?course_name=表體解剖學'
  },
  
  {
    title: '黃于玲 ',
    url:'/course?teacher=黃于玲 '
  },
  {
    title: '社會學',
    url:'/course?course_name=社會學'
  },
  
  {
    title: '徐碧真 ',
    url:'/course?teacher=徐碧真 '
  },
  {
    title: '服務學習（二）─ 物理治療中心',
    url:'/course?course_name=服務學習（二）─ 物理治療中心'
  },
  
  {
    title: '洪菁霞 ',
    url:'/course?teacher=洪菁霞 '
  },
  {
    title: '服務學習（二）－無障礙之家',
    url:'/course?course_name=服務學習（二）－無障礙之家'
  },
  
  {
    title: '林呈鳳 徐碧真 郭怡良*',
    url:'/course?teacher=林呈鳳 徐碧真 郭怡良*'
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '普通物理學實驗',
    url:'/course?course_name=普通物理學實驗'
  },
  
  {
    title: '游輝樟 ',
    url:'/course?teacher=游輝樟 '
  },
  {
    title: '普通物理學',
    url:'/course?course_name=普通物理學'
  },
  
  {
    title: '李亞夫 王浩文 何盧勳 邱慈暉*陳一菁 李純純 彭怡禎 ',
    url:'/course?teacher=李亞夫 王浩文 何盧勳 邱慈暉*陳一菁 李純純 彭怡禎 '
  },
  {
    title: '普通生物學實驗（二）',
    url:'/course?course_name=普通生物學實驗（二）'
  },
  
  {
    title: '王浩文 何盧勳 邱慈暉*李純純 彭怡禎 ',
    url:'/course?teacher=王浩文 何盧勳 邱慈暉*李純純 彭怡禎 '
  },
  {
    title: '普通生物學（二）',
    url:'/course?course_name=普通生物學（二）'
  },
  
  {
    title: '游一龍*郭乃文 黃惠玲 余睿羚 ',
    url:'/course?teacher=游一龍*郭乃文 黃惠玲 余睿羚 '
  },
  {
    title: '普通心理學',
    url:'/course?course_name=普通心理學'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '王業凱 ',
    url:'/course?teacher=王業凱 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '萬胥亭 ',
    url:'/course?teacher=萬胥亭 '
  },
  {
    title: '文學評論與影評寫作',
    url:'/course?course_name=文學評論與影評寫作'
  },
  
  {
    title: '林耀潾 ',
    url:'/course?teacher=林耀潾 '
  },
  {
    title: '應用文（二）',
    url:'/course?course_name=應用文（二）'
  },
  
  {
    title: '林朝成 ',
    url:'/course?teacher=林朝成 '
  },
  {
    title: '佛學概論（二）',
    url:'/course?course_name=佛學概論（二）'
  },
  
  {
    title: '黃聖松 ',
    url:'/course?teacher=黃聖松 '
  },
  {
    title: '尚書（二）',
    url:'/course?course_name=尚書（二）'
  },
  
  {
    title: '陳怡良 ',
    url:'/course?teacher=陳怡良 '
  },
  {
    title: '楚辭（二）',
    url:'/course?course_name=楚辭（二）'
  },
  
  {
    title: '林幸慧 ',
    url:'/course?teacher=林幸慧 '
  },
  {
    title: '劇本選讀（二）',
    url:'/course?course_name=劇本選讀（二）'
  },
  
  {
    title: '賴麗娟 ',
    url:'/course?teacher=賴麗娟 '
  },
  {
    title: '臺灣文學史（二）',
    url:'/course?course_name=臺灣文學史（二）'
  },
  
  {
    title: '陳昌明 ',
    url:'/course?teacher=陳昌明 '
  },
  {
    title: '中國古典短篇小說',
    url:'/course?course_name=中國古典短篇小說'
  },
  
  {
    title: '侯美珍 ',
    url:'/course?teacher=侯美珍 '
  },
  {
    title: '明清小品文（二）',
    url:'/course?course_name=明清小品文（二）'
  },
  
  {
    title: '高美華 ',
    url:'/course?teacher=高美華 '
  },
  {
    title: '曲選及習作',
    url:'/course?course_name=曲選及習作'
  },
  
  {
    title: '高美華 ',
    url:'/course?teacher=高美華 '
  },
  {
    title: '曲選及習作',
    url:'/course?course_name=曲選及習作'
  },
  
  {
    title: '林朝成 ',
    url:'/course?teacher=林朝成 '
  },
  {
    title: '中國思想史（二）',
    url:'/course?course_name=中國思想史（二）'
  },
  
  {
    title: '蘇偉貞 ',
    url:'/course?teacher=蘇偉貞 '
  },
  {
    title: '現代小說欣賞及習作（二）',
    url:'/course?course_name=現代小說欣賞及習作（二）'
  },
  
  {
    title: '蘇敏逸 ',
    url:'/course?teacher=蘇敏逸 '
  },
  {
    title: '現代小說欣賞及習作（二）',
    url:'/course?course_name=現代小說欣賞及習作（二）'
  },
  
  {
    title: '陳梅香 ',
    url:'/course?teacher=陳梅香 '
  },
  {
    title: '聲韻學（二）',
    url:'/course?course_name=聲韻學（二）'
  },
  
  {
    title: '高美華 ',
    url:'/course?teacher=高美華 '
  },
  {
    title: '詞選及習作（二）',
    url:'/course?course_name=詞選及習作（二）'
  },
  
  {
    title: '高美華 ',
    url:'/course?teacher=高美華 '
  },
  {
    title: '詞選及習作（二）',
    url:'/course?course_name=詞選及習作（二）'
  },
  
  {
    title: '萬胥亭 ',
    url:'/course?teacher=萬胥亭 '
  },
  {
    title: '人生哲學',
    url:'/course?course_name=人生哲學'
  },
  
  {
    title: '仇小屏 ',
    url:'/course?teacher=仇小屏 '
  },
  {
    title: '修辭學',
    url:'/course?course_name=修辭學'
  },
  
  {
    title: '蘇敏逸 ',
    url:'/course?teacher=蘇敏逸 '
  },
  {
    title: '現代散文欣賞及習作（二）',
    url:'/course?course_name=現代散文欣賞及習作（二）'
  },
  
  {
    title: '翁文嫻 ',
    url:'/course?teacher=翁文嫻 '
  },
  {
    title: '現代詩欣賞及習作（二）',
    url:'/course?course_name=現代詩欣賞及習作（二）'
  },
  
  {
    title: '林素娟 ',
    url:'/course?teacher=林素娟 '
  },
  {
    title: '禮學名著選讀（二）',
    url:'/course?course_name=禮學名著選讀（二）'
  },
  
  {
    title: '陳昌明 ',
    url:'/course?teacher=陳昌明 '
  },
  {
    title: '中國文學史（二）',
    url:'/course?course_name=中國文學史（二）'
  },
  
  {
    title: '高佑仁 ',
    url:'/course?teacher=高佑仁 '
  },
  {
    title: '文字學（二）',
    url:'/course?course_name=文字學（二）'
  },
  
  {
    title: '陳家煌 ',
    url:'/course?teacher=陳家煌 '
  },
  {
    title: '詩選及習作（二）',
    url:'/course?course_name=詩選及習作（二）'
  },
  
  {
    title: '陳家煌 ',
    url:'/course?teacher=陳家煌 '
  },
  {
    title: '詩選及習作（二）',
    url:'/course?course_name=詩選及習作（二）'
  },
  
  {
    title: '林耀潾 ',
    url:'/course?teacher=林耀潾 '
  },
  {
    title: '歷代文選及習作（二）',
    url:'/course?course_name=歷代文選及習作（二）'
  },
  
  {
    title: '侯美珍 ',
    url:'/course?teacher=侯美珍 '
  },
  {
    title: '歷代文選及習作（二）',
    url:'/course?course_name=歷代文選及習作（二）'
  },
  
  {
    title: '高美華 ',
    url:'/course?teacher=高美華 '
  },
  {
    title: '古典戲曲評賞',
    url:'/course?course_name=古典戲曲評賞'
  },
  
  {
    title: '王翠玲 ',
    url:'/course?teacher=王翠玲 '
  },
  {
    title: '日文（二）',
    url:'/course?course_name=日文（二）'
  },
  
  {
    title: '陳梅香 ',
    url:'/course?teacher=陳梅香 '
  },
  {
    title: '國語語音學',
    url:'/course?course_name=國語語音學'
  },
  
  {
    title: '吳文璋 ',
    url:'/course?teacher=吳文璋 '
  },
  {
    title: '四書（二）',
    url:'/course?course_name=四書（二）'
  },
  
  {
    title: '翁文嫻 ',
    url:'/course?teacher=翁文嫻 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '秦嘉嫄 ',
    url:'/course?teacher=秦嘉嫄 '
  },
  {
    title: '現代戲劇欣賞及習作（二）',
    url:'/course?course_name=現代戲劇欣賞及習作（二）'
  },
  
  {
    title: '秦嘉嫄 ',
    url:'/course?teacher=秦嘉嫄 '
  },
  {
    title: '現代戲劇欣賞及習作（二）',
    url:'/course?course_name=現代戲劇欣賞及習作（二）'
  },
  
  {
    title: '翁文嫻 ',
    url:'/course?teacher=翁文嫻 '
  },
  {
    title: '文學概論（二）',
    url:'/course?course_name=文學概論（二）'
  },
  
  {
    title: '陳昌明 ',
    url:'/course?teacher=陳昌明 '
  },
  {
    title: '文學概論（二）',
    url:'/course?course_name=文學概論（二）'
  },
  
  {
    title: '王翠玲 ',
    url:'/course?teacher=王翠玲 '
  },
  {
    title: '國學導讀（二）',
    url:'/course?course_name=國學導讀（二）'
  },
  
  {
    title: '林美惠 ',
    url:'/course?teacher=林美惠 '
  },
  {
    title: '各體文選及習作（二）',
    url:'/course?course_name=各體文選及習作（二）'
  },
  
  {
    title: '陳益源 ',
    url:'/course?teacher=陳益源 '
  },
  {
    title: '各體文選及習作（二）',
    url:'/course?course_name=各體文選及習作（二）'
  },
  
  {
    title: '陳震宇 ',
    url:'/course?teacher=陳震宇 '
  },
  {
    title: '建築改修特論',
    url:'/course?course_name=建築改修特論'
  },
  
  {
    title: '陳震宇 ',
    url:'/course?teacher=陳震宇 '
  },
  {
    title: '構法計畫特論',
    url:'/course?course_name=構法計畫特論'
  },
  
  {
    title: '王維潔 ',
    url:'/course?teacher=王維潔 '
  },
  {
    title: '歷史建築特論',
    url:'/course?course_name=歷史建築特論'
  },
  
  {
    title: '鄭泰昇 ',
    url:'/course?teacher=鄭泰昇 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '陳耀光 ',
    url:'/course?teacher=陳耀光 '
  },
  {
    title: '建築研究專題討論（二）',
    url:'/course?course_name=建築研究專題討論（二）'
  },
  
  {
    title: '鄭泰昇 ',
    url:'/course?teacher=鄭泰昇 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '鄭泰昇 ',
    url:'/course?teacher=鄭泰昇 '
  },
  {
    title: '服務學習專題討論（二）',
    url:'/course?course_name=服務學習專題討論（二）'
  },
  
  {
    title: '林子平 ',
    url:'/course?teacher=林子平 '
  },
  {
    title: '戶外環境效益模擬與解析（一）',
    url:'/course?course_name=戶外環境效益模擬與解析（一）'
  },
  
  {
    title: '林憲德 ',
    url:'/course?teacher=林憲德 '
  },
  {
    title: '東南亞生態地理與民居變貌',
    url:'/course?course_name=東南亞生態地理與民居變貌'
  },
  
  {
    title: '林憲德 ',
    url:'/course?teacher=林憲德 '
  },
  {
    title: '東南亞生態地理與民居變貌',
    url:'/course?course_name=東南亞生態地理與民居變貌'
  },
  
  {
    title: '張　珩 ',
    url:'/course?teacher=張　珩 '
  },
  {
    title: '環境行為研究方法(二)',
    url:'/course?course_name=環境行為研究方法(二)'
  },
  
  {
    title: '蔡耀賢 ',
    url:'/course?teacher=蔡耀賢 '
  },
  {
    title: '建築環境控制系統特論',
    url:'/course?course_name=建築環境控制系統特論'
  },
  
  {
    title: '蔡耀賢 ',
    url:'/course?teacher=蔡耀賢 '
  },
  {
    title: '建築環境控制系統特論',
    url:'/course?course_name=建築環境控制系統特論'
  },
  
  {
    title: '蔡耀賢 ',
    url:'/course?teacher=蔡耀賢 '
  },
  {
    title: '室內環境品質模擬與解析（二）',
    url:'/course?course_name=室內環境品質模擬與解析（二）'
  },
  
  {
    title: '蔡耀賢 ',
    url:'/course?teacher=蔡耀賢 '
  },
  {
    title: '室內環境品質模擬與解析（二）',
    url:'/course?course_name=室內環境品質模擬與解析（二）'
  },
  
  {
    title: '葉玉祥 ',
    url:'/course?teacher=葉玉祥 '
  },
  {
    title: '建築構造生命週期分析',
    url:'/course?course_name=建築構造生命週期分析'
  },
  
  {
    title: '陳震宇 ',
    url:'/course?teacher=陳震宇 '
  },
  {
    title: '建築改修特論',
    url:'/course?course_name=建築改修特論'
  },
  
  {
    title: '陳震宇 ',
    url:'/course?teacher=陳震宇 '
  },
  {
    title: '構法計畫特論',
    url:'/course?course_name=構法計畫特論'
  },
  
  {
    title: '陳純森 ',
    url:'/course?teacher=陳純森 '
  },
  {
    title: '建築工程結構性事件之鑑識',
    url:'/course?course_name=建築工程結構性事件之鑑識'
  },
  
  {
    title: '陳純森 ',
    url:'/course?teacher=陳純森 '
  },
  {
    title: '建築工程結構性事件之鑑識',
    url:'/course?course_name=建築工程結構性事件之鑑識'
  },
  
  {
    title: '鍾育霖 ',
    url:'/course?teacher=鍾育霖 '
  },
  {
    title: '地震工程特論',
    url:'/course?course_name=地震工程特論'
  },
  
  {
    title: '鍾育霖 ',
    url:'/course?teacher=鍾育霖 '
  },
  {
    title: '電腦輔助結構分析',
    url:'/course?course_name=電腦輔助結構分析'
  },
  
  {
    title: '杜怡萱 ',
    url:'/course?teacher=杜怡萱 '
  },
  {
    title: '房屋結構設計',
    url:'/course?course_name=房屋結構設計'
  },
  
  {
    title: '姚昭智 ',
    url:'/course?teacher=姚昭智 '
  },
  {
    title: '地震工程學',
    url:'/course?course_name=地震工程學'
  },
  
  {
    title: '杜怡萱 ',
    url:'/course?teacher=杜怡萱 '
  },
  {
    title: '建築結構與造型整合設計',
    url:'/course?course_name=建築結構與造型整合設計'
  },
  
  {
    title: '杜怡萱 ',
    url:'/course?teacher=杜怡萱 '
  },
  {
    title: '建築結構與造型整合設計',
    url:'/course?course_name=建築結構與造型整合設計'
  },
  
  {
    title: '恩宇 ',
    url:'/course?teacher=恩宇 '
  },
  {
    title: '神聖空間專題討論',
    url:'/course?course_name=神聖空間專題討論'
  },
  
  {
    title: '吳秉聲 ',
    url:'/course?teacher=吳秉聲 '
  },
  {
    title: '建築史之研究方法',
    url:'/course?course_name=建築史之研究方法'
  },
  
  {
    title: '傅朝卿 ',
    url:'/course?teacher=傅朝卿 '
  },
  {
    title: '文化遺產保存維護理論與實務',
    url:'/course?course_name=文化遺產保存維護理論與實務'
  },
  
  {
    title: '吳秉聲*恩宇*',
    url:'/course?teacher=吳秉聲*恩宇*'
  },
  {
    title: '歷史建築保存與再利用設計',
    url:'/course?course_name=歷史建築保存與再利用設計'
  },
  
  {
    title: '陳世明 ',
    url:'/course?teacher=陳世明 '
  },
  {
    title: '社區營造的理論與實務',
    url:'/course?course_name=社區營造的理論與實務'
  },
  
  {
    title: '洪傳祥 ',
    url:'/course?teacher=洪傳祥 '
  },
  {
    title: '台灣都市的空間構成',
    url:'/course?course_name=台灣都市的空間構成'
  },
  
  {
    title: '吳玉成 ',
    url:'/course?teacher=吳玉成 '
  },
  {
    title: '環境美學－理論與規劃實踐',
    url:'/course?course_name=環境美學－理論與規劃實踐'
  },
  
  {
    title: '吳光庭 ',
    url:'/course?teacher=吳光庭 '
  },
  {
    title: '1945年後台灣當代建築專題討論',
    url:'/course?course_name=1945年後台灣當代建築專題討論'
  },
  
  {
    title: '吳光庭 ',
    url:'/course?teacher=吳光庭 '
  },
  {
    title: '1945年後台灣當代建築專題討論',
    url:'/course?course_name=1945年後台灣當代建築專題討論'
  },
  
  {
    title: '王維潔 ',
    url:'/course?teacher=王維潔 '
  },
  {
    title: '歷史建築特論',
    url:'/course?course_name=歷史建築特論'
  },
  
  {
    title: '薛丞倫 ',
    url:'/course?teacher=薛丞倫 '
  },
  {
    title: '影像與建築',
    url:'/course?course_name=影像與建築'
  },
  
  {
    title: '薛丞倫*鄭泰昇*顏茂倉*吳光庭*王維潔*',
    url:'/course?teacher=薛丞倫*鄭泰昇*顏茂倉*吳光庭*王維潔*'
  },
  {
    title: '專題研究（二）',
    url:'/course?course_name=專題研究（二）'
  },
  
  {
    title: '蔡元良 ',
    url:'/course?teacher=蔡元良 '
  },
  {
    title: '建築與環境設計（二）',
    url:'/course?course_name=建築與環境設計（二）'
  },
  
  {
    title: '洪傳祥*吳玉成*',
    url:'/course?teacher=洪傳祥*吳玉成*'
  },
  {
    title: '建築與環境設計（二）',
    url:'/course?course_name=建築與環境設計（二）'
  },
  
  {
    title: '薛丞倫 ',
    url:'/course?teacher=薛丞倫 '
  },
  {
    title: '國際工作營',
    url:'/course?course_name=國際工作營'
  },
  
  {
    title: '薛丞倫 ',
    url:'/course?teacher=薛丞倫 '
  },
  {
    title: '國際工作營',
    url:'/course?course_name=國際工作營'
  },
  
  {
    title: '杜怡萱 鄭泰昇 劉舜仁 ',
    url:'/course?teacher=杜怡萱 鄭泰昇 劉舜仁 '
  },
  {
    title: '設計整合研究',
    url:'/course?course_name=設計整合研究'
  },
  
  {
    title: '杜怡萱*鄭泰昇*劉舜仁*',
    url:'/course?teacher=杜怡萱*鄭泰昇*劉舜仁*'
  },
  {
    title: '設計整合研究',
    url:'/course?course_name=設計整合研究'
  },
  
  {
    title: '王建力 ',
    url:'/course?teacher=王建力 '
  },
  {
    title: '論文（一）',
    url:'/course?course_name=論文（一）'
  },
  
  {
    title: '申永輝 ',
    url:'/course?teacher=申永輝 '
  },
  {
    title: '論文（一）',
    url:'/course?course_name=論文（一）'
  },
  
  {
    title: '李振誥 ',
    url:'/course?teacher=李振誥 '
  },
  {
    title: '論文（一）',
    url:'/course?course_name=論文（一）'
  },
  
  {
    title: '吳榮華 ',
    url:'/course?teacher=吳榮華 '
  },
  {
    title: '論文（一）',
    url:'/course?course_name=論文（一）'
  },
  
  {
    title: '郭明錦 ',
    url:'/course?teacher=郭明錦 '
  },
  {
    title: '論文（一）',
    url:'/course?course_name=論文（一）'
  },
  
  {
    title: '陳偉聖 ',
    url:'/course?teacher=陳偉聖 '
  },
  {
    title: '論文（一）',
    url:'/course?course_name=論文（一）'
  },
  
  {
    title: '葉信富 ',
    url:'/course?teacher=葉信富 '
  },
  {
    title: '論文（一）',
    url:'/course?course_name=論文（一）'
  },
  
  {
    title: '黃啟原 ',
    url:'/course?teacher=黃啟原 '
  },
  {
    title: '論文（一）',
    url:'/course?course_name=論文（一）'
  },
  
  {
    title: '徐國錦 ',
    url:'/course?teacher=徐國錦 '
  },
  {
    title: '論文（一）',
    url:'/course?course_name=論文（一）'
  },
  
  {
    title: '陳昭旭 ',
    url:'/course?teacher=陳昭旭 '
  },
  {
    title: '論文（一）',
    url:'/course?course_name=論文（一）'
  },
  
  {
    title: '謝秉志 ',
    url:'/course?teacher=謝秉志 '
  },
  {
    title: '論文（一）',
    url:'/course?course_name=論文（一）'
  },
  
  {
    title: '施勵行 ',
    url:'/course?teacher=施勵行 '
  },
  {
    title: '論文（一）',
    url:'/course?course_name=論文（一）'
  },
  
  {
    title: '吳毓純 ',
    url:'/course?teacher=吳毓純 '
  },
  {
    title: '論文（一）',
    url:'/course?course_name=論文（一）'
  },
  
  {
    title: '向性一 ',
    url:'/course?teacher=向性一 '
  },
  {
    title: '論文（一）',
    url:'/course?course_name=論文（一）'
  },
  
  {
    title: '余騰鐸 ',
    url:'/course?teacher=余騰鐸 '
  },
  {
    title: '論文（一）',
    url:'/course?course_name=論文（一）'
  },
  
  {
    title: '謝秉志 ',
    url:'/course?teacher=謝秉志 '
  },
  {
    title: '油層工程',
    url:'/course?course_name=油層工程'
  },
  
  {
    title: '陳昭旭 ',
    url:'/course?teacher=陳昭旭 '
  },
  {
    title: '基礎工程',
    url:'/course?course_name=基礎工程'
  },
  
  {
    title: '向性一 ',
    url:'/course?teacher=向性一 '
  },
  {
    title: '陶瓷工程及實驗',
    url:'/course?course_name=陶瓷工程及實驗'
  },
  
  {
    title: '向性一 ',
    url:'/course?teacher=向性一 '
  },
  {
    title: '陶瓷工程及實驗',
    url:'/course?course_name=陶瓷工程及實驗'
  },
  
  {
    title: '謝秉志 陳昭旭*陳偉聖 ',
    url:'/course?teacher=謝秉志 陳昭旭*陳偉聖 '
  },
  {
    title: '資源工程整合實作',
    url:'/course?course_name=資源工程整合實作'
  },
  
  {
    title: '謝秉志 陳昭旭*陳偉聖 ',
    url:'/course?teacher=謝秉志 陳昭旭*陳偉聖 '
  },
  {
    title: '資源工程整合實作',
    url:'/course?course_name=資源工程整合實作'
  },
  
  {
    title: '劉啟清 ',
    url:'/course?teacher=劉啟清 '
  },
  {
    title: '測量學',
    url:'/course?course_name=測量學'
  },
  
  {
    title: '陳偉聖*',
    url:'/course?teacher=陳偉聖*'
  },
  {
    title: '資源處理工程',
    url:'/course?course_name=資源處理工程'
  },
  
  {
    title: '陳偉聖*',
    url:'/course?teacher=陳偉聖*'
  },
  {
    title: '資源處理工程',
    url:'/course?course_name=資源處理工程'
  },
  
  {
    title: '葉信富 ',
    url:'/course?teacher=葉信富 '
  },
  {
    title: '構造地質',
    url:'/course?course_name=構造地質'
  },
  
  {
    title: '葉信富 ',
    url:'/course?teacher=葉信富 '
  },
  {
    title: '構造地質',
    url:'/course?course_name=構造地質'
  },
  
  {
    title: '吳育生 ',
    url:'/course?teacher=吳育生 '
  },
  {
    title: '環境污染水文地質學',
    url:'/course?course_name=環境污染水文地質學'
  },
  
  {
    title: '郭明錦 ',
    url:'/course?teacher=郭明錦 '
  },
  {
    title: '環境工程概論',
    url:'/course?course_name=環境工程概論'
  },
  
  {
    title: '黃啟原 ',
    url:'/course?teacher=黃啟原 '
  },
  {
    title: '礦物材料導論',
    url:'/course?course_name=礦物材料導論'
  },
  
  {
    title: '吳毓純 ',
    url:'/course?teacher=吳毓純 '
  },
  {
    title: '岩石學',
    url:'/course?course_name=岩石學'
  },
  
  {
    title: '吳毓純 ',
    url:'/course?teacher=吳毓純 '
  },
  {
    title: '岩石學',
    url:'/course?course_name=岩石學'
  },
  
  {
    title: '施勵行 ',
    url:'/course?teacher=施勵行 '
  },
  {
    title: '工程統計',
    url:'/course?course_name=工程統計'
  },
  
  {
    title: '徐國錦 ',
    url:'/course?teacher=徐國錦 '
  },
  {
    title: '材料力學',
    url:'/course?course_name=材料力學'
  },
  
  {
    title: '王建力 ',
    url:'/course?teacher=王建力 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '吳毓純 ',
    url:'/course?teacher=吳毓純 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '許桂芳 ',
    url:'/course?teacher=許桂芳 '
  },
  {
    title: '普通化學實驗（二）',
    url:'/course?course_name=普通化學實驗（二）'
  },
  
  {
    title: '林榮良*吳欣倫 ',
    url:'/course?teacher=林榮良*吳欣倫 '
  },
  {
    title: '普通化學（二）',
    url:'/course?course_name=普通化學（二）'
  },
  
  {
    title: '楊展其 ',
    url:'/course?teacher=楊展其 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '楊展其 ',
    url:'/course?teacher=楊展其 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '楊世偉 ',
    url:'/course?teacher=楊世偉 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '余騰鐸 ',
    url:'/course?teacher=余騰鐸 '
  },
  {
    title: '地質學',
    url:'/course?course_name=地質學'
  },
  
  {
    title: '余騰鐸 ',
    url:'/course?teacher=余騰鐸 '
  },
  {
    title: '地質學',
    url:'/course?course_name=地質學'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '陳玉霖 薛丞倫 曾　瑋 吳光庭*古爵誌 方俊凱 郭旭原 ',
    url:'/course?teacher=陳玉霖 薛丞倫 曾　瑋 吳光庭*古爵誌 方俊凱 郭旭原 '
  },
  {
    title: '建築設計（九）',
    url:'/course?course_name=建築設計（九）'
  },
  
  {
    title: '顏茂倉 ',
    url:'/course?teacher=顏茂倉 '
  },
  {
    title: '敷地計劃',
    url:'/course?course_name=敷地計劃'
  },
  
  {
    title: '顏茂倉 ',
    url:'/course?teacher=顏茂倉 '
  },
  {
    title: '建築設計整合',
    url:'/course?course_name=建築設計整合'
  },
  
  {
    title: '王維潔 ',
    url:'/course?teacher=王維潔 '
  },
  {
    title: '音樂與建築',
    url:'/course?course_name=音樂與建築'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '建築法規',
    url:'/course?course_name=建築法規'
  },
  
  {
    title: '鍾育霖 ',
    url:'/course?teacher=鍾育霖 '
  },
  {
    title: '校外實習',
    url:'/course?course_name=校外實習'
  },
  
  {
    title: '陳穎澤 ',
    url:'/course?teacher=陳穎澤 '
  },
  {
    title: '校外實習',
    url:'/course?course_name=校外實習'
  },
  
  {
    title: '陳震宇 ',
    url:'/course?teacher=陳震宇 '
  },
  {
    title: '建築構法計畫',
    url:'/course?course_name=建築構法計畫'
  },
  
  {
    title: '未定 簡聖芬*黃若珣 柳川肯 簡志穎 魏子鈞 陳冠帆 ',
    url:'/course?teacher=未定 簡聖芬*黃若珣 柳川肯 簡志穎 魏子鈞 陳冠帆 '
  },
  {
    title: '建築設計（七）',
    url:'/course?course_name=建築設計（七）'
  },
  
  {
    title: '薛丞倫*陳穎澤*',
    url:'/course?teacher=薛丞倫*陳穎澤*'
  },
  {
    title: '建築職業倫理',
    url:'/course?course_name=建築職業倫理'
  },
  
  {
    title: '宋立文 ',
    url:'/course?teacher=宋立文 '
  },
  {
    title: '現代主義後的建築思潮',
    url:'/course?course_name=現代主義後的建築思潮'
  },
  
  {
    title: '張　珩 ',
    url:'/course?teacher=張　珩 '
  },
  {
    title: '環境與行為',
    url:'/course?course_name=環境與行為'
  },
  
  {
    title: '柳川肯 ',
    url:'/course?teacher=柳川肯 '
  },
  {
    title: '性能導向參數化設計',
    url:'/course?course_name=性能導向參數化設計'
  },
  
  {
    title: '柳川肯 ',
    url:'/course?teacher=柳川肯 '
  },
  {
    title: '性能導向參數化設計',
    url:'/course?course_name=性能導向參數化設計'
  },
  
  {
    title: '柳川肯 ',
    url:'/course?teacher=柳川肯 '
  },
  {
    title: '性能導向參數化設計',
    url:'/course?course_name=性能導向參數化設計'
  },
  
  {
    title: '林憲德 ',
    url:'/course?teacher=林憲德 '
  },
  {
    title: '綠色建築計劃',
    url:'/course?course_name=綠色建築計劃'
  },
  
  {
    title: '洪傳祥 ',
    url:'/course?teacher=洪傳祥 '
  },
  {
    title: '社區規劃',
    url:'/course?course_name=社區規劃'
  },
  
  {
    title: '洪傳祥 ',
    url:'/course?teacher=洪傳祥 '
  },
  {
    title: '社區規劃',
    url:'/course?course_name=社區規劃'
  },
  
  {
    title: '林子平 ',
    url:'/course?teacher=林子平 '
  },
  {
    title: '建築環境控制系統（二）',
    url:'/course?course_name=建築環境控制系統（二）'
  },
  
  {
    title: '姚昭智 ',
    url:'/course?teacher=姚昭智 '
  },
  {
    title: '鋼筋混凝土及鋼骨結構',
    url:'/course?course_name=鋼筋混凝土及鋼骨結構'
  },
  
  {
    title: '吳玉成 ',
    url:'/course?teacher=吳玉成 '
  },
  {
    title: '都市設計概論',
    url:'/course?course_name=都市設計概論'
  },
  
  {
    title: '吳秉聲 ',
    url:'/course?teacher=吳秉聲 '
  },
  {
    title: '台灣建築史',
    url:'/course?course_name=台灣建築史'
  },
  
  {
    title: '陳世明 ',
    url:'/course?teacher=陳世明 '
  },
  {
    title: '建築計劃',
    url:'/course?course_name=建築計劃'
  },
  
  {
    title: '卓建光 陳柏年 顏茂倉*姜樂靜 林宛蓁 趙元鴻 黃介二 ',
    url:'/course?teacher=卓建光 陳柏年 顏茂倉*姜樂靜 林宛蓁 趙元鴻 黃介二 '
  },
  {
    title: '建築設計（六）',
    url:'/course?course_name=建築設計（六）'
  },
  
  {
    title: '薛丞倫 ',
    url:'/course?teacher=薛丞倫 '
  },
  {
    title: '閱讀與設計思考',
    url:'/course?course_name=閱讀與設計思考'
  },
  
  {
    title: '杜怡萱 ',
    url:'/course?teacher=杜怡萱 '
  },
  {
    title: '結構學',
    url:'/course?course_name=結構學'
  },
  
  {
    title: '陳震宇 ',
    url:'/course?teacher=陳震宇 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '葉玉祥 ',
    url:'/course?teacher=葉玉祥 '
  },
  {
    title: '建築構造（一）',
    url:'/course?course_name=建築構造（一）'
  },
  
  {
    title: '蔡耀賢 ',
    url:'/course?teacher=蔡耀賢 '
  },
  {
    title: '建築物理環境（二）',
    url:'/course?course_name=建築物理環境（二）'
  },
  
  {
    title: '吳秉聲 沈弘軒 恩宇 辛柏毅 陳彥伶 吳建志 陳穎澤*',
    url:'/course?teacher=吳秉聲 沈弘軒 恩宇 辛柏毅 陳彥伶 吳建志 陳穎澤*'
  },
  {
    title: '建築設計（四）',
    url:'/course?course_name=建築設計（四）'
  },
  
  {
    title: '黃步青 ',
    url:'/course?teacher=黃步青 '
  },
  {
    title: '繪畫（二）',
    url:'/course?course_name=繪畫（二）'
  },
  
  {
    title: '陳品蓁 ',
    url:'/course?teacher=陳品蓁 '
  },
  {
    title: '設計思考與實作',
    url:'/course?course_name=設計思考與實作'
  },
  
  {
    title: '陳品蓁 ',
    url:'/course?teacher=陳品蓁 '
  },
  {
    title: '設計思考與實作',
    url:'/course?course_name=設計思考與實作'
  },
  
  {
    title: '陳穎澤 ',
    url:'/course?teacher=陳穎澤 '
  },
  {
    title: '建築圖與表現法',
    url:'/course?course_name=建築圖與表現法'
  },
  
  {
    title: '鍾育霖 ',
    url:'/course?teacher=鍾育霖 '
  },
  {
    title: '工程力學',
    url:'/course?course_name=工程力學'
  },
  
  {
    title: '林煌迪 顏世樺 陳恥德 葉玉祥 陳品蓁 宋立文*',
    url:'/course?teacher=林煌迪 顏世樺 陳恥德 葉玉祥 陳品蓁 宋立文*'
  },
  {
    title: '建築設計（二）',
    url:'/course?course_name=建築設計（二）'
  },
  
  {
    title: '林煌迪 顏世樺 陳恥德 葉玉祥 陳品蓁 宋立文*',
    url:'/course?teacher=林煌迪 顏世樺 陳恥德 葉玉祥 陳品蓁 宋立文*'
  },
  {
    title: '建築設計（二）',
    url:'/course?course_name=建築設計（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基礎國文（二）',
    url:'/course?course_name=基礎國文（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '賴維祥 ',
    url:'/course?teacher=賴維祥 '
  },
  {
    title: '航太工程實作（二）',
    url:'/course?course_name=航太工程實作（二）'
  },
  
  {
    title: '賴維祥 ',
    url:'/course?teacher=賴維祥 '
  },
  {
    title: '航太工程實作（二）',
    url:'/course?course_name=航太工程實作（二）'
  },
  
  {
    title: '彭家瑞 ',
    url:'/course?teacher=彭家瑞 '
  },
  {
    title: '航機維修實習（二）',
    url:'/course?course_name=航機維修實習（二）'
  },
  
  {
    title: '譚俊豪 ',
    url:'/course?teacher=譚俊豪 '
  },
  {
    title: '自主式無人載具系統概論',
    url:'/course?course_name=自主式無人載具系統概論'
  },
  
  {
    title: '李君謨 ',
    url:'/course?teacher=李君謨 '
  },
  {
    title: '回授系統電腦控制理論',
    url:'/course?course_name=回授系統電腦控制理論'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '陳嘉元*王明習 陳永裕 賴維祥 郭榮富 ',
    url:'/course?teacher=陳嘉元*王明習 陳永裕 賴維祥 郭榮富 '
  },
  {
    title: '機電創新實作（一）',
    url:'/course?course_name=機電創新實作（一）'
  },
  
  {
    title: '陳嘉元*王明習 陳永裕 賴維祥 郭榮富 ',
    url:'/course?teacher=陳嘉元*王明習 陳永裕 賴維祥 郭榮富 '
  },
  {
    title: '機電創新實作（一）',
    url:'/course?course_name=機電創新實作（一）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '論文（一）',
    url:'/course?course_name=論文（一）'
  },
  
  {
    title: '彭家瑞 ',
    url:'/course?teacher=彭家瑞 '
  },
  {
    title: '飛機次系統與運作',
    url:'/course?course_name=飛機次系統與運作'
  },
  
  {
    title: '楊世銘 ',
    url:'/course?teacher=楊世銘 '
  },
  {
    title: '振動學',
    url:'/course?course_name=振動學'
  },
  
  {
    title: '詹劭勳 ',
    url:'/course?teacher=詹劭勳 '
  },
  {
    title: '通訊概論',
    url:'/course?course_name=通訊概論'
  },
  
  {
    title: '夏育群 ',
    url:'/course?teacher=夏育群 '
  },
  {
    title: '飛機設計',
    url:'/course?course_name=飛機設計'
  },
  
  {
    title: '夏育群 ',
    url:'/course?teacher=夏育群 '
  },
  {
    title: '飛機設計',
    url:'/course?course_name=飛機設計'
  },
  
  {
    title: '潘大知 ',
    url:'/course?teacher=潘大知 '
  },
  {
    title: '電磁學',
    url:'/course?course_name=電磁學'
  },
  
  {
    title: '呂宗行 ',
    url:'/course?teacher=呂宗行 '
  },
  {
    title: '空氣動力學（二）',
    url:'/course?course_name=空氣動力學（二）'
  },
  
  {
    title: '許棟龍 ',
    url:'/course?teacher=許棟龍 '
  },
  {
    title: '飛行力學',
    url:'/course?course_name=飛行力學'
  },
  
  {
    title: '陳介力 ',
    url:'/course?teacher=陳介力 '
  },
  {
    title: '導航控制實驗',
    url:'/course?course_name=導航控制實驗'
  },
  
  {
    title: '陳介力 ',
    url:'/course?teacher=陳介力 '
  },
  {
    title: '導航控制實驗',
    url:'/course?course_name=導航控制實驗'
  },
  
  {
    title: '賴維祥 ',
    url:'/course?teacher=賴維祥 '
  },
  {
    title: '航空發動機',
    url:'/course?course_name=航空發動機'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '吳毓庭 李約亨*',
    url:'/course?teacher=吳毓庭 李約亨*'
  },
  {
    title: '風力發電',
    url:'/course?course_name=風力發電'
  },
  
  {
    title: '張克勤 ',
    url:'/course?teacher=張克勤 '
  },
  {
    title: '太陽熱能',
    url:'/course?course_name=太陽熱能'
  },
  
  {
    title: '鄭金祥 ',
    url:'/course?teacher=鄭金祥 '
  },
  {
    title: '燃料電池',
    url:'/course?course_name=燃料電池'
  },
  
  {
    title: '陳維新 ',
    url:'/course?teacher=陳維新 '
  },
  {
    title: '生質能源',
    url:'/course?course_name=生質能源'
  },
  
  {
    title: '王振源 ',
    url:'/course?teacher=王振源 '
  },
  {
    title: '熱力學（二）',
    url:'/course?course_name=熱力學（二）'
  },
  
  {
    title: '李君謨 ',
    url:'/course?teacher=李君謨 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '楊世銘*夏育群 ',
    url:'/course?teacher=楊世銘*夏育群 '
  },
  {
    title: '結構材料實驗',
    url:'/course?course_name=結構材料實驗'
  },
  
  {
    title: '楊世銘*夏育群 ',
    url:'/course?teacher=楊世銘*夏育群 '
  },
  {
    title: '結構材料實驗',
    url:'/course?course_name=結構材料實驗'
  },
  
  {
    title: '胡潛濱 ',
    url:'/course?teacher=胡潛濱 '
  },
  {
    title: '材料力學',
    url:'/course?course_name=材料力學'
  },
  
  {
    title: '苗君易 ',
    url:'/course?teacher=苗君易 '
  },
  {
    title: '流體力學',
    url:'/course?course_name=流體力學'
  },
  
  {
    title: '王偉成 ',
    url:'/course?teacher=王偉成 '
  },
  {
    title: '機械畫',
    url:'/course?course_name=機械畫'
  },
  
  {
    title: '王偉成 ',
    url:'/course?teacher=王偉成 '
  },
  {
    title: '機械畫',
    url:'/course?course_name=機械畫'
  },
  
  {
    title: '鄭泗滄 ',
    url:'/course?teacher=鄭泗滄 '
  },
  {
    title: '工程材料科學',
    url:'/course?course_name=工程材料科學'
  },
  
  {
    title: '夏育群 ',
    url:'/course?teacher=夏育群 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '夏育群 ',
    url:'/course?teacher=夏育群 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '江達雲 ',
    url:'/course?teacher=江達雲 '
  },
  {
    title: '靜力學',
    url:'/course?course_name=靜力學'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基礎國文（二）',
    url:'/course?course_name=基礎國文（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '周忠憲 ',
    url:'/course?teacher=周忠憲 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '粘珠鳳 ',
    url:'/course?teacher=粘珠鳳 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '謝孟達*何俊亨*',
    url:'/course?teacher=謝孟達*何俊亨*'
  },
  {
    title: '專題設計（二）',
    url:'/course?course_name=專題設計（二）'
  },
  
  {
    title: '馬敏元 ',
    url:'/course?teacher=馬敏元 '
  },
  {
    title: '專題設計（二）',
    url:'/course?course_name=專題設計（二）'
  },
  
  {
    title: '陳璽任 ',
    url:'/course?teacher=陳璽任 '
  },
  {
    title: '專題設計（二）',
    url:'/course?course_name=專題設計（二）'
  },
  
  {
    title: '吳豐光 ',
    url:'/course?teacher=吳豐光 '
  },
  {
    title: '專題設計（二）',
    url:'/course?course_name=專題設計（二）'
  },
  
  {
    title: '曾劍峰 ',
    url:'/course?teacher=曾劍峰 '
  },
  {
    title: '展示設計',
    url:'/course?course_name=展示設計'
  },
  
  {
    title: '曾劍峰 ',
    url:'/course?teacher=曾劍峰 '
  },
  {
    title: '流行商品展銷與策略',
    url:'/course?course_name=流行商品展銷與策略'
  },
  
  {
    title: '陸定邦 ',
    url:'/course?teacher=陸定邦 '
  },
  {
    title: '經營管理與國際行銷',
    url:'/course?course_name=經營管理與國際行銷'
  },
  
  {
    title: '陳中聖 ',
    url:'/course?teacher=陳中聖 '
  },
  {
    title: '設計實務',
    url:'/course?course_name=設計實務'
  },
  
  {
    title: '曾劍峰 ',
    url:'/course?teacher=曾劍峰 '
  },
  {
    title: '設計與教育',
    url:'/course?course_name=設計與教育'
  },
  
  {
    title: '曾元琦 ',
    url:'/course?teacher=曾元琦 '
  },
  {
    title: '設計認知',
    url:'/course?course_name=設計認知'
  },
  
  {
    title: '莊惠棋 ',
    url:'/course?teacher=莊惠棋 '
  },
  {
    title: '商業編排設計',
    url:'/course?course_name=商業編排設計'
  },
  
  {
    title: '劉說芳 ',
    url:'/course?teacher=劉說芳 '
  },
  {
    title: '工業設計（二）',
    url:'/course?course_name=工業設計（二）'
  },
  
  {
    title: '蕭世文 ',
    url:'/course?teacher=蕭世文 '
  },
  {
    title: '工業設計（二）',
    url:'/course?course_name=工業設計（二）'
  },
  
  {
    title: '曾劍峰 ',
    url:'/course?teacher=曾劍峰 '
  },
  {
    title: '工業設計（二）',
    url:'/course?course_name=工業設計（二）'
  },
  
  {
    title: '陳璽任 ',
    url:'/course?teacher=陳璽任 '
  },
  {
    title: '設計史',
    url:'/course?course_name=設計史'
  },
  
  {
    title: '魏仲君 ',
    url:'/course?teacher=魏仲君 '
  },
  {
    title: '機械設計原理',
    url:'/course?course_name=機械設計原理'
  },
  
  {
    title: '羅逸文 ',
    url:'/course?teacher=羅逸文 '
  },
  {
    title: '電腦輔助設計與製造',
    url:'/course?course_name=電腦輔助設計與製造'
  },
  
  {
    title: '羅逸文 ',
    url:'/course?teacher=羅逸文 '
  },
  {
    title: '電腦輔助設計與製造',
    url:'/course?course_name=電腦輔助設計與製造'
  },
  
  {
    title: '洪郁修 ',
    url:'/course?teacher=洪郁修 '
  },
  {
    title: '人類因素學',
    url:'/course?course_name=人類因素學'
  },
  
  {
    title: '吳豐光 ',
    url:'/course?teacher=吳豐光 '
  },
  {
    title: '產品設計（二）',
    url:'/course?course_name=產品設計（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '產品設計（二）',
    url:'/course?course_name=產品設計（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '產品設計（二）',
    url:'/course?course_name=產品設計（二）'
  },
  
  {
    title: '魏仲君 ',
    url:'/course?teacher=魏仲君 '
  },
  {
    title: '專題模型製作',
    url:'/course?course_name=專題模型製作'
  },
  
  {
    title: '魏仲君 ',
    url:'/course?teacher=魏仲君 '
  },
  {
    title: '專題模型製作',
    url:'/course?course_name=專題模型製作'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '普通物理學',
    url:'/course?course_name=普通物理學'
  },
  
  {
    title: '周君瑞 ',
    url:'/course?teacher=周君瑞 '
  },
  {
    title: '色彩學',
    url:'/course?course_name=色彩學'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '計算機概論',
    url:'/course?course_name=計算機概論'
  },
  
  {
    title: '陳璽任 ',
    url:'/course?teacher=陳璽任 '
  },
  {
    title: '基本設計（二）',
    url:'/course?course_name=基本設計（二）'
  },
  
  {
    title: '陳劭農 ',
    url:'/course?teacher=陳劭農 '
  },
  {
    title: '基本設計（二）',
    url:'/course?course_name=基本設計（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基本設計（二）',
    url:'/course?course_name=基本設計（二）'
  },
  
  {
    title: '何俊亨 ',
    url:'/course?teacher=何俊亨 '
  },
  {
    title: '表現技法',
    url:'/course?course_name=表現技法'
  },
  
  {
    title: '何俊亨 ',
    url:'/course?teacher=何俊亨 '
  },
  {
    title: '表現技法',
    url:'/course?course_name=表現技法'
  },
  
  {
    title: '陳劭農 ',
    url:'/course?teacher=陳劭農 '
  },
  {
    title: '表現技法',
    url:'/course?course_name=表現技法'
  },
  
  {
    title: '陳劭農 ',
    url:'/course?teacher=陳劭農 '
  },
  {
    title: '表現技法',
    url:'/course?course_name=表現技法'
  },
  
  {
    title: '何俊亨 ',
    url:'/course?teacher=何俊亨 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '孫永年 ',
    url:'/course?teacher=孫永年 '
  },
  {
    title: '醫學影像概論',
    url:'/course?course_name=醫學影像概論'
  },
  
  {
    title: '藍崑展 ',
    url:'/course?teacher=藍崑展 '
  },
  {
    title: '從自由軟體到物聯網的實踐',
    url:'/course?course_name=從自由軟體到物聯網的實踐'
  },
  
  {
    title: '蕭宏章 ',
    url:'/course?teacher=蕭宏章 '
  },
  {
    title: '分散式系統',
    url:'/course?course_name=分散式系統'
  },
  
  {
    title: '李　強 ',
    url:'/course?teacher=李　強 '
  },
  {
    title: '資料庫系統導論',
    url:'/course?course_name=資料庫系統導論'
  },
  
  {
    title: '蘇文鈺*王新民 ',
    url:'/course?teacher=蘇文鈺*王新民 '
  },
  {
    title: '訊號與系統',
    url:'/course?course_name=訊號與系統'
  },
  
  {
    title: '謝孫源 ',
    url:'/course?teacher=謝孫源 '
  },
  {
    title: '資訊專題（一）',
    url:'/course?course_name=資訊專題（一）'
  },
  
  {
    title: '黃敬群 ',
    url:'/course?teacher=黃敬群 '
  },
  {
    title: '嵌入式作業系統設計、實作與移植',
    url:'/course?course_name=嵌入式作業系統設計、實作與移植'
  },
  
  {
    title: '莊坤達 ',
    url:'/course?teacher=莊坤達 '
  },
  {
    title: '計算理論',
    url:'/course?course_name=計算理論'
  },
  
  {
    title: '涂嘉恒 ',
    url:'/course?teacher=涂嘉恒 '
  },
  {
    title: '編譯系統',
    url:'/course?course_name=編譯系統'
  },
  
  {
    title: '胡敏君 ',
    url:'/course?teacher=胡敏君 '
  },
  {
    title: '程式語言',
    url:'/course?course_name=程式語言'
  },
  
  {
    title: '黃崇明 ',
    url:'/course?teacher=黃崇明 '
  },
  {
    title: '電腦通訊網路',
    url:'/course?course_name=電腦通訊網路'
  },
  
  {
    title: '楊中平*盧文祥 ',
    url:'/course?teacher=楊中平*盧文祥 '
  },
  {
    title: '自由軟體開發與社群發展',
    url:'/course?course_name=自由軟體開發與社群發展'
  },
  
  {
    title: '謝孫源 ',
    url:'/course?teacher=謝孫源 '
  },
  {
    title: '資訊工程倫理與生涯規劃',
    url:'/course?course_name=資訊工程倫理與生涯規劃'
  },
  
  {
    title: '蘇文鈺 ',
    url:'/course?teacher=蘇文鈺 '
  },
  {
    title: '類比電子電路實作',
    url:'/course?course_name=類比電子電路實作'
  },
  
  {
    title: '李信杰 ',
    url:'/course?teacher=李信杰 '
  },
  {
    title: 'JAVA軟體開發',
    url:'/course?course_name=JAVA軟體開發'
  },
  
  {
    title: '張瑞紘 ',
    url:'/course?teacher=張瑞紘 '
  },
  {
    title: '視窗程式設計',
    url:'/course?course_name=視窗程式設計'
  },
  
  {
    title: '謝孫源 ',
    url:'/course?teacher=謝孫源 '
  },
  {
    title: '演算法',
    url:'/course?course_name=演算法'
  },
  
  {
    title: '盧文祥 ',
    url:'/course?teacher=盧文祥 '
  },
  {
    title: '機率與統計',
    url:'/course?course_name=機率與統計'
  },
  
  {
    title: '林英超 ',
    url:'/course?teacher=林英超 '
  },
  {
    title: '計算機組織',
    url:'/course?course_name=計算機組織'
  },
  
  {
    title: '高宏宇 ',
    url:'/course?teacher=高宏宇 '
  },
  {
    title: '離散數學',
    url:'/course?course_name=離散數學'
  },
  
  {
    title: '許靜芳 ',
    url:'/course?teacher=許靜芳 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '許靜芳 ',
    url:'/course?teacher=許靜芳 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '梁勝富 ',
    url:'/course?teacher=梁勝富 '
  },
  {
    title: '數位電路導論',
    url:'/course?course_name=數位電路導論'
  },
  
  {
    title: '蔡孟勳 ',
    url:'/course?teacher=蔡孟勳 '
  },
  {
    title: '程式設計（二）',
    url:'/course?course_name=程式設計（二）'
  },
  
  {
    title: '陳朝鈞 ',
    url:'/course?teacher=陳朝鈞 '
  },
  {
    title: '線性代數',
    url:'/course?course_name=線性代數'
  },
  
  {
    title: '章源慶 ',
    url:'/course?teacher=章源慶 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '蕭仁傑 ',
    url:'/course?teacher=蕭仁傑 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '舒宇宸 ',
    url:'/course?teacher=舒宇宸 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '鄺國權 ',
    url:'/course?teacher=鄺國權 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '黃柏嶧 ',
    url:'/course?teacher=黃柏嶧 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '趙梓程 ',
    url:'/course?teacher=趙梓程 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '黃進坤 ',
    url:'/course?teacher=黃進坤 '
  },
  {
    title: '實用河川工程',
    url:'/course?course_name=實用河川工程'
  },
  
  {
    title: '黃元照 ',
    url:'/course?teacher=黃元照 '
  },
  {
    title: '海洋環境監測與生態調查技術',
    url:'/course?course_name=海洋環境監測與生態調查技術'
  },
  
  {
    title: '李方中 ',
    url:'/course?teacher=李方中 '
  },
  {
    title: '比較水法與國際水法',
    url:'/course?course_name=比較水法與國際水法'
  },
  
  {
    title: '楊豐榮 ',
    url:'/course?teacher=楊豐榮 '
  },
  {
    title: '流域水土資源綜合管理',
    url:'/course?course_name=流域水土資源綜合管理'
  },
  
  {
    title: '陳璋玲*施義哲 ',
    url:'/course?teacher=陳璋玲*施義哲 '
  },
  {
    title: '海岸保護與利用',
    url:'/course?course_name=海岸保護與利用'
  },
  
  {
    title: '顏沛華 ',
    url:'/course?teacher=顏沛華 '
  },
  {
    title: '實用水文學',
    url:'/course?course_name=實用水文學'
  },
  
  {
    title: '呂珍謀 ',
    url:'/course?teacher=呂珍謀 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '呂珍謀 ',
    url:'/course?teacher=呂珍謀 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '呂珍謀 ',
    url:'/course?teacher=呂珍謀 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '羅偉誠 ',
    url:'/course?teacher=羅偉誠 '
  },
  {
    title: '教學實習',
    url:'/course?course_name=教學實習'
  },
  
  {
    title: '顏沛華 ',
    url:'/course?teacher=顏沛華 '
  },
  {
    title: '地下水',
    url:'/course?course_name=地下水'
  },
  
  {
    title: '蔡長泰 ',
    url:'/course?teacher=蔡長泰 '
  },
  {
    title: '防洪工程',
    url:'/course?course_name=防洪工程'
  },
  
  {
    title: '唐啟釗 ',
    url:'/course?teacher=唐啟釗 '
  },
  {
    title: '管路水力學',
    url:'/course?course_name=管路水力學'
  },
  
  {
    title: '王筱雯 ',
    url:'/course?teacher=王筱雯 '
  },
  {
    title: '英文論文寫作',
    url:'/course?course_name=英文論文寫作'
  },
  
  {
    title: '高家俊 ',
    url:'/course?teacher=高家俊 '
  },
  {
    title: '德文（二）',
    url:'/course?course_name=德文（二）'
  },
  
  {
    title: '黃煌煇 ',
    url:'/course?teacher=黃煌煇 '
  },
  {
    title: '非線性波動力學',
    url:'/course?course_name=非線性波動力學'
  },
  
  {
    title: '黃清哲 董東璟 蕭士俊 郭玉樹*莊士賢 張　懿 ',
    url:'/course?teacher=黃清哲 董東璟 蕭士俊 郭玉樹*莊士賢 張　懿 '
  },
  {
    title: '離岸風機支撐結構設計',
    url:'/course?course_name=離岸風機支撐結構設計'
  },
  
  {
    title: '李兆芳 ',
    url:'/course?teacher=李兆芳 '
  },
  {
    title: '海洋工程',
    url:'/course?course_name=海洋工程'
  },
  
  {
    title: '郭玉樹 ',
    url:'/course?teacher=郭玉樹 '
  },
  {
    title: '海洋能源',
    url:'/course?course_name=海洋能源'
  },
  
  {
    title: '董東璟 ',
    url:'/course?teacher=董東璟 '
  },
  {
    title: '海岸保護',
    url:'/course?course_name=海岸保護'
  },
  
  {
    title: '李兆芳 ',
    url:'/course?teacher=李兆芳 '
  },
  {
    title: '邊界元素法',
    url:'/course?course_name=邊界元素法'
  },
  
  {
    title: '陳陽益 ',
    url:'/course?teacher=陳陽益 '
  },
  {
    title: '高等波浪理論（一）',
    url:'/course?course_name=高等波浪理論（一）'
  },
  
  {
    title: '王筱雯 ',
    url:'/course?teacher=王筱雯 '
  },
  {
    title: '水資源工程專題討論',
    url:'/course?course_name=水資源工程專題討論'
  },
  
  {
    title: '唐啟釗 ',
    url:'/course?teacher=唐啟釗 '
  },
  {
    title: '計算水力學',
    url:'/course?course_name=計算水力學'
  },
  
  {
    title: '王曉中 謝正倫*',
    url:'/course?teacher=王曉中 謝正倫*'
  },
  {
    title: '地區防災計畫',
    url:'/course?course_name=地區防災計畫'
  },
  
  {
    title: '王曉中 尹孝元 謝正倫*',
    url:'/course?teacher=王曉中 尹孝元 謝正倫*'
  },
  {
    title: '防災實務',
    url:'/course?course_name=防災實務'
  },
  
  {
    title: '黃清哲 ',
    url:'/course?teacher=黃清哲 '
  },
  {
    title: '邊界層理論',
    url:'/course?course_name=邊界層理論'
  },
  
  {
    title: '黃清哲 ',
    url:'/course?teacher=黃清哲 '
  },
  {
    title: '水中聲學',
    url:'/course?course_name=水中聲學'
  },
  
  {
    title: '賴悅仁 ',
    url:'/course?teacher=賴悅仁 '
  },
  {
    title: '河道水力學',
    url:'/course?course_name=河道水力學'
  },
  
  {
    title: '徐義人 ',
    url:'/course?teacher=徐義人 '
  },
  {
    title: '逕流模式解析',
    url:'/course?course_name=逕流模式解析'
  },
  
  {
    title: '謝正倫 ',
    url:'/course?teacher=謝正倫 '
  },
  {
    title: '高等水土保持',
    url:'/course?course_name=高等水土保持'
  },
  
  {
    title: '陳佳琳 ',
    url:'/course?teacher=陳佳琳 '
  },
  {
    title: '海域物理學',
    url:'/course?course_name=海域物理學'
  },
  
  {
    title: '羅偉誠*吳嘉文 郭振民 ',
    url:'/course?teacher=羅偉誠*吳嘉文 郭振民 '
  },
  {
    title: '中等水文學',
    url:'/course?course_name=中等水文學'
  },
  
  {
    title: '羅偉誠 ',
    url:'/course?teacher=羅偉誠 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '唐啟釗 ',
    url:'/course?teacher=唐啟釗 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '蕭士俊 ',
    url:'/course?teacher=蕭士俊 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '羅偉誠 ',
    url:'/course?teacher=羅偉誠 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '賴悅仁 ',
    url:'/course?teacher=賴悅仁 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '蕭政宗 ',
    url:'/course?teacher=蕭政宗 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陳佳琳 ',
    url:'/course?teacher=陳佳琳 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '唐啟釗 ',
    url:'/course?teacher=唐啟釗 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '蕭士俊 ',
    url:'/course?teacher=蕭士俊 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '羅偉誠 ',
    url:'/course?teacher=羅偉誠 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '賴悅仁 ',
    url:'/course?teacher=賴悅仁 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '蕭政宗 ',
    url:'/course?teacher=蕭政宗 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '陳佳琳 ',
    url:'/course?teacher=陳佳琳 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '張哲豪 黃雅淑 林玲伊 張玲慧*陳官琳 黃百川 ',
    url:'/course?teacher=張哲豪 黃雅淑 林玲伊 張玲慧*陳官琳 黃百川 '
  },
  {
    title: '社區職能治療實習',
    url:'/course?course_name=社區職能治療實習'
  },
  
  {
    title: '蔡佩倫 張哲豪 黃雅淑 汪翠瀅 林玲伊 馬慧英 張玲慧 陳官琳*黃百川 張雁晴 ',
    url:'/course?teacher=蔡佩倫 張哲豪 黃雅淑 汪翠瀅 林玲伊 馬慧英 張玲慧 陳官琳*黃百川 張雁晴 '
  },
  {
    title: '兒童職能治療臨床實習（二）',
    url:'/course?course_name=兒童職能治療臨床實習（二）'
  },
  
  {
    title: '蔡佩倫 張哲豪 黃雅淑 汪翠瀅 林玲伊 馬慧英 張玲慧 陳官琳*黃百川 張雁晴 ',
    url:'/course?teacher=蔡佩倫 張哲豪 黃雅淑 汪翠瀅 林玲伊 馬慧英 張玲慧 陳官琳*黃百川 張雁晴 '
  },
  {
    title: '兒童職能治療臨床實習（一）',
    url:'/course?course_name=兒童職能治療臨床實習（一）'
  },
  
  {
    title: '蔡佩倫 張哲豪 黃雅淑 汪翠瀅 林玲伊 徐秀雲 馬慧英*張玲慧 陳官琳 黃百川 張雁晴 ',
    url:'/course?teacher=蔡佩倫 張哲豪 黃雅淑 汪翠瀅 林玲伊 徐秀雲 馬慧英*張玲慧 陳官琳 黃百川 張雁晴 '
  },
  {
    title: '生理疾病職能治療臨床實習（二）',
    url:'/course?course_name=生理疾病職能治療臨床實習（二）'
  },
  
  {
    title: '蔡佩倫 張哲豪 黃雅淑 汪翠瀅 林玲伊 徐秀雲 馬慧英*張玲慧 陳官琳 黃百川 張雁晴 ',
    url:'/course?teacher=蔡佩倫 張哲豪 黃雅淑 汪翠瀅 林玲伊 徐秀雲 馬慧英*張玲慧 陳官琳 黃百川 張雁晴 '
  },
  {
    title: '生理疾病職能治療臨床實習（一）',
    url:'/course?course_name=生理疾病職能治療臨床實習（一）'
  },
  
  {
    title: '蔡佩倫 張哲豪 黃雅淑 汪翠瀅*林玲伊 馬慧英 張玲慧 陳官琳 黃百川 張雁晴 ',
    url:'/course?teacher=蔡佩倫 張哲豪 黃雅淑 汪翠瀅*林玲伊 馬慧英 張玲慧 陳官琳 黃百川 張雁晴 '
  },
  {
    title: '心理疾病職能治療臨床實習（二）',
    url:'/course?course_name=心理疾病職能治療臨床實習（二）'
  },
  
  {
    title: '蔡佩倫 張哲豪 黃雅淑 汪翠瀅*林玲伊 馬慧英 張玲慧 陳官琳 黃百川 張雁晴 ',
    url:'/course?teacher=蔡佩倫 張哲豪 黃雅淑 汪翠瀅*林玲伊 馬慧英 張玲慧 陳官琳 黃百川 張雁晴 '
  },
  {
    title: '心理疾病職能治療臨床實習（一）',
    url:'/course?course_name=心理疾病職能治療臨床實習（一）'
  },
  
  {
    title: '蔡佩倫 張哲豪*黃雅淑 汪翠瀅 林玲伊 馬慧英 張玲慧 陳官琳 黃百川 張雁晴 ',
    url:'/course?teacher=蔡佩倫 張哲豪*黃雅淑 汪翠瀅 林玲伊 馬慧英 張玲慧 陳官琳 黃百川 張雁晴 '
  },
  {
    title: '職能治療專題討論（二）',
    url:'/course?course_name=職能治療專題討論（二）'
  },
  
  {
    title: '張雁晴*',
    url:'/course?teacher=張雁晴*'
  },
  {
    title: '實證職能治療導論',
    url:'/course?course_name=實證職能治療導論'
  },
  
  {
    title: '張玲慧*',
    url:'/course?teacher=張玲慧*'
  },
  {
    title: '社區職能治療學',
    url:'/course?course_name=社區職能治療學'
  },
  
  {
    title: '張哲豪*林玲伊 ',
    url:'/course?teacher=張哲豪*林玲伊 '
  },
  {
    title: '職能治療與職業重建',
    url:'/course?course_name=職能治療與職業重建'
  },
  
  {
    title: '張哲豪 林玲伊*',
    url:'/course?teacher=張哲豪 林玲伊*'
  },
  {
    title: '治療活動運用實作',
    url:'/course?course_name=治療活動運用實作'
  },
  
  {
    title: '張哲豪 林玲伊*',
    url:'/course?teacher=張哲豪 林玲伊*'
  },
  {
    title: '治療活動運用',
    url:'/course?course_name=治療活動運用'
  },
  
  {
    title: '蔡佩倫 張哲豪 黃雅淑*汪翠瀅 林玲伊 徐秀雲 黃百川 張雁晴 ',
    url:'/course?teacher=蔡佩倫 張哲豪 黃雅淑*汪翠瀅 林玲伊 徐秀雲 黃百川 張雁晴 '
  },
  {
    title: '職能治療臨床實習',
    url:'/course?course_name=職能治療臨床實習'
  },
  
  {
    title: '蔡佩倫 張哲豪 黃雅淑*汪翠瀅 林玲伊 徐秀雲 黃百川 張雁晴 ',
    url:'/course?teacher=蔡佩倫 張哲豪 黃雅淑*汪翠瀅 林玲伊 徐秀雲 黃百川 張雁晴 '
  },
  {
    title: '職能治療臨床實習',
    url:'/course?course_name=職能治療臨床實習'
  },
  
  {
    title: '黃雅淑 張玲慧 陳官琳*',
    url:'/course?teacher=黃雅淑 張玲慧 陳官琳*'
  },
  {
    title: '論文',
    url:'/course?course_name=論文'
  },
  
  {
    title: '蔡佩倫 汪翠瀅*徐秀雲 黃百川 楊琇晴 ',
    url:'/course?teacher=蔡佩倫 汪翠瀅*徐秀雲 黃百川 楊琇晴 '
  },
  {
    title: '職能治療技術學（二）',
    url:'/course?course_name=職能治療技術學（二）'
  },
  
  {
    title: '蔡佩倫*張哲豪 徐秀雲 馬慧英 黃百川 ',
    url:'/course?teacher=蔡佩倫*張哲豪 徐秀雲 馬慧英 黃百川 '
  },
  {
    title: '生理疾病職能治療學實習',
    url:'/course?course_name=生理疾病職能治療學實習'
  },
  
  {
    title: '蔡佩倫*張哲豪 徐秀雲 馬慧英 黃百川 ',
    url:'/course?teacher=蔡佩倫*張哲豪 徐秀雲 馬慧英 黃百川 '
  },
  {
    title: '生理疾病職能治療學',
    url:'/course?course_name=生理疾病職能治療學'
  },
  
  {
    title: '張哲豪 劉怡佳 徐秀雲 張雁晴*',
    url:'/course?teacher=張哲豪 劉怡佳 徐秀雲 張雁晴*'
  },
  {
    title: '職能治療管理學',
    url:'/course?course_name=職能治療管理學'
  },
  
  {
    title: '蔡佩倫 張哲豪 汪翠瀅 林玲伊*陳官琳 黃百川 ',
    url:'/course?teacher=蔡佩倫 張哲豪 汪翠瀅 林玲伊*陳官琳 黃百川 '
  },
  {
    title: '人類職能重建及調適實習',
    url:'/course?course_name=人類職能重建及調適實習'
  },
  
  {
    title: '蔡佩倫 張哲豪 汪翠瀅 林玲伊*陳官琳 黃百川 ',
    url:'/course?teacher=蔡佩倫 張哲豪 汪翠瀅 林玲伊*陳官琳 黃百川 '
  },
  {
    title: '人類職能重建及調適',
    url:'/course?course_name=人類職能重建及調適'
  },
  
  {
    title: '蔡佩倫 張哲豪*',
    url:'/course?teacher=蔡佩倫 張哲豪*'
  },
  {
    title: '職業重建總論',
    url:'/course?course_name=職業重建總論'
  },
  
  {
    title: '宋俊明 柯文謙 陳炯瑜 蔡惟全 張漢煜 鄭斌男 王崇任 李政翰 劉秉彥 陳儒逸 歐弘毅 莊喬雄 詹世鴻 林建中 林立人 蘇文彬 ',
    url:'/course?teacher=宋俊明 柯文謙 陳炯瑜 蔡惟全 張漢煜 鄭斌男 王崇任 李政翰 劉秉彥 陳儒逸 歐弘毅 莊喬雄 詹世鴻 林建中 林立人 蘇文彬 '
  },
  {
    title: '內科學概論',
    url:'/course?course_name=內科學概論'
  },
  
  {
    title: '官大紳*程琡敏 陳若佟 林裕晴 ',
    url:'/course?teacher=官大紳*程琡敏 陳若佟 林裕晴 '
  },
  {
    title: '復健醫學',
    url:'/course?course_name=復健醫學'
  },
  
  {
    title: '張玲慧*',
    url:'/course?teacher=張玲慧*'
  },
  {
    title: '職能活動分析',
    url:'/course?course_name=職能活動分析'
  },
  
  {
    title: '蔡佩倫*張哲豪 黃雅淑 林玲伊 馬慧英 黃百川 ',
    url:'/course?teacher=蔡佩倫*張哲豪 黃雅淑 林玲伊 馬慧英 黃百川 '
  },
  {
    title: '職能治療技術學實習',
    url:'/course?course_name=職能治療技術學實習'
  },
  
  {
    title: '蔡佩倫*張哲豪 黃雅淑 林玲伊 馬慧英 黃百川 ',
    url:'/course?teacher=蔡佩倫*張哲豪 黃雅淑 林玲伊 馬慧英 黃百川 '
  },
  {
    title: '職能治療技術學（一）',
    url:'/course?course_name=職能治療技術學（一）'
  },
  
  {
    title: '馬慧英*張玲慧 陳官琳 ',
    url:'/course?teacher=馬慧英*張玲慧 陳官琳 '
  },
  {
    title: '職能治療研究方法導論',
    url:'/course?course_name=職能治療研究方法導論'
  },
  
  {
    title: '蔡佩倫 黃雅淑*汪翠瀅 陳官琳 ',
    url:'/course?teacher=蔡佩倫 黃雅淑*汪翠瀅 陳官琳 '
  },
  {
    title: '職能治療評估學實習',
    url:'/course?course_name=職能治療評估學實習'
  },
  
  {
    title: '蔡佩倫 黃雅淑*汪翠瀅 陳官琳 ',
    url:'/course?teacher=蔡佩倫 黃雅淑*汪翠瀅 陳官琳 '
  },
  {
    title: '職能治療評估學',
    url:'/course?course_name=職能治療評估學'
  },
  
  {
    title: '林玲伊 黃百川 ',
    url:'/course?teacher=林玲伊 黃百川 '
  },
  {
    title: '服務學習（三）',
    url:'/course?course_name=服務學習（三）'
  },
  
  {
    title: '王亮懿 ',
    url:'/course?teacher=王亮懿 '
  },
  {
    title: '生物統計學',
    url:'/course?course_name=生物統計學'
  },
  
  {
    title: '蔡佩倫 張哲豪*黃雅淑 馬慧英 ',
    url:'/course?teacher=蔡佩倫 張哲豪*黃雅淑 馬慧英 '
  },
  {
    title: '應用肌動學',
    url:'/course?course_name=應用肌動學'
  },
  
  {
    title: '陳柏熹 ',
    url:'/course?teacher=陳柏熹 '
  },
  {
    title: '精神科學概論',
    url:'/course?course_name=精神科學概論'
  },
  
  {
    title: '黃百川*',
    url:'/course?teacher=黃百川*'
  },
  {
    title: '職能治療文獻閱讀',
    url:'/course?course_name=職能治療文獻閱讀'
  },
  
  {
    title: '馬慧英 陳官琳*黃百川 ',
    url:'/course?teacher=馬慧英 陳官琳*黃百川 '
  },
  {
    title: '職能治療世界趨勢與生涯發展',
    url:'/course?course_name=職能治療世界趨勢與生涯發展'
  },
  
  {
    title: '黃于玲 ',
    url:'/course?teacher=黃于玲 '
  },
  {
    title: '社會學',
    url:'/course?course_name=社會學'
  },
  
  {
    title: '張玲慧*',
    url:'/course?teacher=張玲慧*'
  },
  {
    title: '職能與健康促進',
    url:'/course?course_name=職能與健康促進'
  },
  
  {
    title: '蔡佩倫 張哲豪 黃雅淑 汪翠瀅 林玲伊 黃百川*張雁晴 ',
    url:'/course?teacher=蔡佩倫 張哲豪 黃雅淑 汪翠瀅 林玲伊 黃百川*張雁晴 '
  },
  {
    title: '職能治療臨床見習',
    url:'/course?course_name=職能治療臨床見習'
  },
  
  {
    title: '蔡佩倫 張哲豪 黃雅淑 汪翠瀅 林玲伊 黃百川*張雁晴 ',
    url:'/course?teacher=蔡佩倫 張哲豪 黃雅淑 汪翠瀅 林玲伊 黃百川*張雁晴 '
  },
  {
    title: '職能治療臨床見習',
    url:'/course?course_name=職能治療臨床見習'
  },
  
  {
    title: '蔡佩倫 汪翠瀅*林玲伊 黃百川 ',
    url:'/course?teacher=蔡佩倫 汪翠瀅*林玲伊 黃百川 '
  },
  {
    title: '職能治療學理論',
    url:'/course?course_name=職能治療學理論'
  },
  
  {
    title: '馬慧英 張玲慧 張雁晴 ',
    url:'/course?teacher=馬慧英 張玲慧 張雁晴 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '游一龍*郭乃文 黃惠玲 余睿羚 ',
    url:'/course?teacher=游一龍*郭乃文 黃惠玲 余睿羚 '
  },
  {
    title: '普通心理學',
    url:'/course?course_name=普通心理學'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '黃悅民 ',
    url:'/course?teacher=黃悅民 '
  },
  {
    title: '嵌入式異質多核心系統',
    url:'/course?course_name=嵌入式異質多核心系統'
  },
  
  {
    title: '王明習 ',
    url:'/course?teacher=王明習 '
  },
  {
    title: '資料隱藏技術',
    url:'/course?course_name=資料隱藏技術'
  },
  
  {
    title: '趙隆山 ',
    url:'/course?teacher=趙隆山 '
  },
  {
    title: '電子構裝熱傳分析',
    url:'/course?course_name=電子構裝熱傳分析'
  },
  
  {
    title: '鄧維光 ',
    url:'/course?teacher=鄧維光 '
  },
  {
    title: '資料庫系統',
    url:'/course?course_name=資料庫系統'
  },
  
  {
    title: '侯廷偉 ',
    url:'/course?teacher=侯廷偉 '
  },
  {
    title: '數位家庭：技術與應用',
    url:'/course?course_name=數位家庭：技術與應用'
  },
  
  {
    title: '周榮華 ',
    url:'/course?teacher=周榮華 '
  },
  {
    title: '創新與產業趨勢',
    url:'/course?course_name=創新與產業趨勢'
  },
  
  {
    title: '陳澤生 ',
    url:'/course?teacher=陳澤生 '
  },
  {
    title: '知識管理',
    url:'/course?course_name=知識管理'
  },
  
  {
    title: '王宗一 ',
    url:'/course?teacher=王宗一 '
  },
  {
    title: '網路程式設計',
    url:'/course?course_name=網路程式設計'
  },
  
  {
    title: '潘文峰 ',
    url:'/course?teacher=潘文峰 '
  },
  {
    title: '封裝固力導論',
    url:'/course?course_name=封裝固力導論'
  },
  
  {
    title: '林裕城 ',
    url:'/course?teacher=林裕城 '
  },
  {
    title: '微機電製程技術',
    url:'/course?course_name=微機電製程技術'
  },
  
  {
    title: '李輝煌 ',
    url:'/course?teacher=李輝煌 '
  },
  {
    title: '田口式品質設計方法',
    url:'/course?course_name=田口式品質設計方法'
  },
  
  {
    title: '侯廷偉*王宗一 ',
    url:'/course?teacher=侯廷偉*王宗一 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '趙隆山 ',
    url:'/course?teacher=趙隆山 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '王明習 ',
    url:'/course?teacher=王明習 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '趙隆山 ',
    url:'/course?teacher=趙隆山 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '王明習 ',
    url:'/course?teacher=王明習 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '王榮泰 ',
    url:'/course?teacher=王榮泰 '
  },
  {
    title: '振動力學',
    url:'/course?course_name=振動力學'
  },
  
  {
    title: '陳家進*張憲彰 葉明龍 胡晉嘉 鄭國順 蘇芳慶 莊漢聲 邱文泰 周有禮 黃執中 郭榮富 楊岱樺 涂庭源 ',
    url:'/course?teacher=陳家進*張憲彰 葉明龍 胡晉嘉 鄭國順 蘇芳慶 莊漢聲 邱文泰 周有禮 黃執中 郭榮富 楊岱樺 涂庭源 '
  },
  {
    title: '醫學工程概論',
    url:'/course?course_name=醫學工程概論'
  },
  
  {
    title: '黃吉川 ',
    url:'/course?teacher=黃吉川 '
  },
  {
    title: '深度學習',
    url:'/course?course_name=深度學習'
  },
  
  {
    title: '李輝煌 ',
    url:'/course?teacher=李輝煌 '
  },
  {
    title: '田口式品質設計方法',
    url:'/course?course_name=田口式品質設計方法'
  },
  
  {
    title: '賴槿峰 ',
    url:'/course?teacher=賴槿峰 '
  },
  {
    title: '創意物聯網應用設計',
    url:'/course?course_name=創意物聯網應用設計'
  },
  
  {
    title: '周榮華 ',
    url:'/course?teacher=周榮華 '
  },
  {
    title: '流場控制學',
    url:'/course?course_name=流場控制學'
  },
  
  {
    title: '黃悅民 ',
    url:'/course?teacher=黃悅民 '
  },
  {
    title: '數位學習專論',
    url:'/course?course_name=數位學習專論'
  },
  
  {
    title: '賴槿峰 ',
    url:'/course?teacher=賴槿峰 '
  },
  {
    title: '異質系統架構程式設計與實作',
    url:'/course?course_name=異質系統架構程式設計與實作'
  },
  
  {
    title: '劉中堅 ',
    url:'/course?teacher=劉中堅 '
  },
  {
    title: '應用熱力學',
    url:'/course?course_name=應用熱力學'
  },
  
  {
    title: '鄧維光 ',
    url:'/course?teacher=鄧維光 '
  },
  {
    title: '資料探勘',
    url:'/course?course_name=資料探勘'
  },
  
  {
    title: '楊瑞珍 ',
    url:'/course?teacher=楊瑞珍 '
  },
  {
    title: '微奈米尺度輸送現象',
    url:'/course?course_name=微奈米尺度輸送現象'
  },
  
  {
    title: '趙隆山 ',
    url:'/course?teacher=趙隆山 '
  },
  {
    title: '計算熱流學',
    url:'/course?course_name=計算熱流學'
  },
  
  {
    title: '李哲明 ',
    url:'/course?teacher=李哲明 '
  },
  {
    title: '量子資訊處理',
    url:'/course?course_name=量子資訊處理'
  },
  
  {
    title: '王明習 ',
    url:'/course?teacher=王明習 '
  },
  {
    title: '圖訊識別',
    url:'/course?course_name=圖訊識別'
  },
  
  {
    title: '陳蓉珊 ',
    url:'/course?teacher=陳蓉珊 '
  },
  {
    title: '有限元素法（一）',
    url:'/course?course_name=有限元素法（一）'
  },
  
  {
    title: '王榮泰 ',
    url:'/course?teacher=王榮泰 '
  },
  {
    title: '複合材料力學',
    url:'/course?course_name=複合材料力學'
  },
  
  {
    title: '林光儀 ',
    url:'/course?teacher=林光儀 '
  },
  {
    title: '奈米材料分析與實作',
    url:'/course?course_name=奈米材料分析與實作'
  },
  
  {
    title: '侯廷偉 ',
    url:'/course?teacher=侯廷偉 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '黃吉川 ',
    url:'/course?teacher=黃吉川 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '楊瑞珍 ',
    url:'/course?teacher=楊瑞珍 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '潘文峰 ',
    url:'/course?teacher=潘文峰 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '賴槿峰 ',
    url:'/course?teacher=賴槿峰 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陳昭羽 ',
    url:'/course?teacher=陳昭羽 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '黃吉川 ',
    url:'/course?teacher=黃吉川 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '楊瑞珍 ',
    url:'/course?teacher=楊瑞珍 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '潘文峰 ',
    url:'/course?teacher=潘文峰 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '賴槿峰 ',
    url:'/course?teacher=賴槿峰 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '陳昭羽 ',
    url:'/course?teacher=陳昭羽 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '林榮良 ',
    url:'/course?teacher=林榮良 '
  },
  {
    title: '表面科學概論',
    url:'/course?course_name=表面科學概論'
  },
  
  {
    title: '李介仁 ',
    url:'/course?teacher=李介仁 '
  },
  {
    title: '表面修飾技術',
    url:'/course?course_name=表面修飾技術'
  },
  
  {
    title: '宋光生 ',
    url:'/course?teacher=宋光生 '
  },
  {
    title: '物理有機化學',
    url:'/course?course_name=物理有機化學'
  },
  
  {
    title: '葉晨聖 ',
    url:'/course?teacher=葉晨聖 '
  },
  {
    title: '奈米科學導論',
    url:'/course?course_name=奈米科學導論'
  },
  
  {
    title: '施良垣 ',
    url:'/course?teacher=施良垣 '
  },
  {
    title: '高分子化學',
    url:'/course?course_name=高分子化學'
  },
  
  {
    title: '周鶴軒 ',
    url:'/course?teacher=周鶴軒 '
  },
  {
    title: '有機光譜',
    url:'/course?course_name=有機光譜'
  },
  
  {
    title: '黃福永 ',
    url:'/course?teacher=黃福永 '
  },
  {
    title: '生物化學（二）',
    url:'/course?course_name=生物化學（二）'
  },
  
  {
    title: '陳淑慧 ',
    url:'/course?teacher=陳淑慧 '
  },
  {
    title: '分析化學實驗（一）',
    url:'/course?course_name=分析化學實驗（一）'
  },
  
  {
    title: '陳巧貞 ',
    url:'/course?teacher=陳巧貞 '
  },
  {
    title: '分析化學實驗（一）',
    url:'/course?course_name=分析化學實驗（一）'
  },
  
  {
    title: '陳淑慧 ',
    url:'/course?teacher=陳淑慧 '
  },
  {
    title: '分析化學實驗（一）',
    url:'/course?course_name=分析化學實驗（一）'
  },
  
  {
    title: '黃守仁 ',
    url:'/course?teacher=黃守仁 '
  },
  {
    title: '專題研究（二）',
    url:'/course?course_name=專題研究（二）'
  },
  
  {
    title: '施良垣 ',
    url:'/course?teacher=施良垣 '
  },
  {
    title: '物理化學實驗（二）',
    url:'/course?course_name=物理化學實驗（二）'
  },
  
  {
    title: '葉晨聖 ',
    url:'/course?teacher=葉晨聖 '
  },
  {
    title: '物理化學實驗（二）',
    url:'/course?course_name=物理化學實驗（二）'
  },
  
  {
    title: '施良垣 ',
    url:'/course?teacher=施良垣 '
  },
  {
    title: '物理化學實驗（二）',
    url:'/course?course_name=物理化學實驗（二）'
  },
  
  {
    title: '周鶴軒 ',
    url:'/course?teacher=周鶴軒 '
  },
  {
    title: '書報討論（一）',
    url:'/course?course_name=書報討論（一）'
  },
  
  {
    title: '林榮良 ',
    url:'/course?teacher=林榮良 '
  },
  {
    title: '書報討論（一）',
    url:'/course?course_name=書報討論（一）'
  },
  
  {
    title: '蔡惠蓮 ',
    url:'/course?teacher=蔡惠蓮 '
  },
  {
    title: '無機化學（二）',
    url:'/course?course_name=無機化學（二）'
  },
  
  {
    title: '陳淑慧 李介仁 陳巧貞 ',
    url:'/course?teacher=陳淑慧 李介仁 陳巧貞 '
  },
  {
    title: '分析化學（二）',
    url:'/course?course_name=分析化學（二）'
  },
  
  {
    title: '陳曾化 ',
    url:'/course?teacher=陳曾化 '
  },
  {
    title: '電化學',
    url:'/course?course_name=電化學'
  },
  
  {
    title: '吳耀庭 ',
    url:'/course?teacher=吳耀庭 '
  },
  {
    title: '有機化學技術（二）',
    url:'/course?course_name=有機化學技術（二）'
  },
  
  {
    title: '邱顯泰 ',
    url:'/course?teacher=邱顯泰 '
  },
  {
    title: '化學生物學',
    url:'/course?course_name=化學生物學'
  },
  
  {
    title: '陳曾化 ',
    url:'/course?teacher=陳曾化 '
  },
  {
    title: '應用化學（二）',
    url:'/course?course_name=應用化學（二）'
  },
  
  {
    title: '莊治平 ',
    url:'/course?teacher=莊治平 '
  },
  {
    title: '有機化學實驗（二）',
    url:'/course?course_name=有機化學實驗（二）'
  },
  
  {
    title: '宋光生 周鶴軒*',
    url:'/course?teacher=宋光生 周鶴軒*'
  },
  {
    title: '有機化學實驗（二）',
    url:'/course?course_name=有機化學實驗（二）'
  },
  
  {
    title: '吳耀庭 ',
    url:'/course?teacher=吳耀庭 '
  },
  {
    title: '有機化學實驗（二）',
    url:'/course?course_name=有機化學實驗（二）'
  },
  
  {
    title: '吳耀庭 ',
    url:'/course?teacher=吳耀庭 '
  },
  {
    title: '有機化學（二）',
    url:'/course?course_name=有機化學（二）'
  },
  
  {
    title: '鄭沐政 ',
    url:'/course?teacher=鄭沐政 '
  },
  {
    title: '物理化學（二）',
    url:'/course?course_name=物理化學（二）'
  },
  
  {
    title: '黃守仁 ',
    url:'/course?teacher=黃守仁 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '蘇世剛 ',
    url:'/course?teacher=蘇世剛 '
  },
  {
    title: '化學數學',
    url:'/course?course_name=化學數學'
  },
  
  {
    title: '蘇世剛 ',
    url:'/course?teacher=蘇世剛 '
  },
  {
    title: '普通化學實驗（二）',
    url:'/course?course_name=普通化學實驗（二）'
  },
  
  {
    title: '林弘萍 ',
    url:'/course?teacher=林弘萍 '
  },
  {
    title: '普通化學實驗（二）',
    url:'/course?course_name=普通化學實驗（二）'
  },
  
  {
    title: '黃福永*林弘萍 吳欣倫 ',
    url:'/course?teacher=黃福永*林弘萍 吳欣倫 '
  },
  {
    title: '普通化學（二）',
    url:'/course?course_name=普通化學（二）'
  },
  
  {
    title: '許瑞榮 ',
    url:'/course?teacher=許瑞榮 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '許瑞榮 ',
    url:'/course?teacher=許瑞榮 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '江孟蓉 ',
    url:'/course?teacher=江孟蓉 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '謝文真 ',
    url:'/course?teacher=謝文真 '
  },
  {
    title: '經濟發展與幸福經濟',
    url:'/course?course_name=經濟發展與幸福經濟'
  },
  
  {
    title: '李宗穎 ',
    url:'/course?teacher=李宗穎 '
  },
  {
    title: '風險管理',
    url:'/course?course_name=風險管理'
  },
  
  {
    title: '張秀雲 ',
    url:'/course?teacher=張秀雲 '
  },
  {
    title: '工程經濟',
    url:'/course?course_name=工程經濟'
  },
  
  {
    title: '劉亞明 ',
    url:'/course?teacher=劉亞明 '
  },
  {
    title: '健康經濟學',
    url:'/course?course_name=健康經濟學'
  },
  
  {
    title: '區俊傑 ',
    url:'/course?teacher=區俊傑 '
  },
  {
    title: '產業經濟學',
    url:'/course?course_name=產業經濟學'
  },
  
  {
    title: '翁明宏 ',
    url:'/course?teacher=翁明宏 '
  },
  {
    title: '神經經濟學',
    url:'/course?course_name=神經經濟學'
  },
  
  {
    title: '王金壽 ',
    url:'/course?teacher=王金壽 '
  },
  {
    title: '社會學概論',
    url:'/course?course_name=社會學概論'
  },
  
  {
    title: '胡政成 ',
    url:'/course?teacher=胡政成 '
  },
  {
    title: '數理經濟學',
    url:'/course?course_name=數理經濟學'
  },
  
  {
    title: '伍弘歷 ',
    url:'/course?teacher=伍弘歷 '
  },
  {
    title: '經濟成長',
    url:'/course?course_name=經濟成長'
  },
  
  {
    title: '蔡仰虔 ',
    url:'/course?teacher=蔡仰虔 '
  },
  {
    title: '經濟思想史',
    url:'/course?course_name=經濟思想史'
  },
  
  {
    title: '范錦明 ',
    url:'/course?teacher=范錦明 '
  },
  {
    title: '兩岸經濟研究',
    url:'/course?course_name=兩岸經濟研究'
  },
  
  {
    title: '郭彥廉 ',
    url:'/course?teacher=郭彥廉 '
  },
  {
    title: '資源與環境經濟學',
    url:'/course?course_name=資源與環境經濟學'
  },
  
  {
    title: '蔡群立 ',
    url:'/course?teacher=蔡群立 '
  },
  {
    title: '國際金融',
    url:'/course?course_name=國際金融'
  },
  
  {
    title: '王富美 ',
    url:'/course?teacher=王富美 '
  },
  {
    title: '貨幣銀行學',
    url:'/course?course_name=貨幣銀行學'
  },
  
  {
    title: '蔡仰虔 ',
    url:'/course?teacher=蔡仰虔 '
  },
  {
    title: '台灣經濟發展史論',
    url:'/course?course_name=台灣經濟發展史論'
  },
  
  {
    title: '陳奕奇 ',
    url:'/course?teacher=陳奕奇 '
  },
  {
    title: '計量經濟學（一）',
    url:'/course?course_name=計量經濟學（一）'
  },
  
  {
    title: '劉亞明 ',
    url:'/course?teacher=劉亞明 '
  },
  {
    title: '社會科學方法論',
    url:'/course?course_name=社會科學方法論'
  },
  
  {
    title: '翁明宏 ',
    url:'/course?teacher=翁明宏 '
  },
  {
    title: '個體經濟學（二）',
    url:'/course?course_name=個體經濟學（二）'
  },
  
  {
    title: '翁明宏 ',
    url:'/course?teacher=翁明宏 '
  },
  {
    title: '個體經濟學（二）',
    url:'/course?course_name=個體經濟學（二）'
  },
  
  {
    title: '許永河 ',
    url:'/course?teacher=許永河 '
  },
  {
    title: '總體經濟學（二）',
    url:'/course?course_name=總體經濟學（二）'
  },
  
  {
    title: '許永河 ',
    url:'/course?teacher=許永河 '
  },
  {
    title: '總體經濟學（二）',
    url:'/course?course_name=總體經濟學（二）'
  },
  
  {
    title: '區俊傑 ',
    url:'/course?teacher=區俊傑 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '區俊傑 ',
    url:'/course?teacher=區俊傑 '
  },
  {
    title: '經濟學原理（二）',
    url:'/course?course_name=經濟學原理（二）'
  },
  
  {
    title: '區俊傑 ',
    url:'/course?teacher=區俊傑 '
  },
  {
    title: '經濟學原理（二）',
    url:'/course?course_name=經濟學原理（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '侯世章 ',
    url:'/course?teacher=侯世章 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '林敏雄 ',
    url:'/course?teacher=林敏雄 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '劉育佑 ',
    url:'/course?teacher=劉育佑 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '施坤宏 ',
    url:'/course?teacher=施坤宏 '
  },
  {
    title: '會計學（二）',
    url:'/course?course_name=會計學（二）'
  },
  
  {
    title: '溫敏杰 ',
    url:'/course?teacher=溫敏杰 '
  },
  {
    title: '統計學（二）',
    url:'/course?course_name=統計學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '醫療與保險專題研究',
    url:'/course?course_name=醫療與保險專題研究'
  },
  
  {
    title: '林英志 ',
    url:'/course?teacher=林英志 '
  },
  {
    title: '刑事訴訟法專題研究',
    url:'/course?course_name=刑事訴訟法專題研究'
  },
  
  {
    title: '陳怡凱 ',
    url:'/course?teacher=陳怡凱 '
  },
  {
    title: '國家學（二）',
    url:'/course?course_name=國家學（二）'
  },
  
  {
    title: '陳怡凱 ',
    url:'/course?teacher=陳怡凱 '
  },
  {
    title: '國際公法',
    url:'/course?course_name=國際公法'
  },
  
  {
    title: '郭書琴 ',
    url:'/course?teacher=郭書琴 '
  },
  {
    title: '美國法學名著選讀（一）',
    url:'/course?course_name=美國法學名著選讀（一）'
  },
  
  {
    title: '陳俊仁 ',
    url:'/course?teacher=陳俊仁 '
  },
  {
    title: '證券交易法專題研究（二）',
    url:'/course?course_name=證券交易法專題研究（二）'
  },
  
  {
    title: '陳思廷 ',
    url:'/course?teacher=陳思廷 '
  },
  {
    title: '著作權法',
    url:'/course?course_name=著作權法'
  },
  
  {
    title: '王毓正 ',
    url:'/course?teacher=王毓正 '
  },
  {
    title: '環境法、制度與案例研究',
    url:'/course?course_name=環境法、制度與案例研究'
  },
  
  {
    title: '林易典 ',
    url:'/course?teacher=林易典 '
  },
  {
    title: '身分法理論與訴訟實務（一）',
    url:'/course?course_name=身分法理論與訴訟實務（一）'
  },
  
  {
    title: '王效文 ',
    url:'/course?teacher=王效文 '
  },
  {
    title: '法理學（二）',
    url:'/course?course_name=法理學（二）'
  },
  
  {
    title: '陳俊仁 ',
    url:'/course?teacher=陳俊仁 '
  },
  {
    title: '保險法',
    url:'/course?course_name=保險法'
  },
  
  {
    title: '許忠信 ',
    url:'/course?teacher=許忠信 '
  },
  {
    title: '公司法',
    url:'/course?course_name=公司法'
  },
  
  {
    title: '邵靖惠 ',
    url:'/course?teacher=邵靖惠 '
  },
  {
    title: '民事訴訟法（二）',
    url:'/course?course_name=民事訴訟法（二）'
  },
  
  {
    title: '郭書琴 ',
    url:'/course?teacher=郭書琴 '
  },
  {
    title: '民事訴訟法（二）',
    url:'/course?course_name=民事訴訟法（二）'
  },
  
  {
    title: '陳運財 ',
    url:'/course?teacher=陳運財 '
  },
  {
    title: '刑事訴訟法（二）',
    url:'/course?course_name=刑事訴訟法（二）'
  },
  
  {
    title: '侯英泠 ',
    url:'/course?teacher=侯英泠 '
  },
  {
    title: '民法債編各論（二）',
    url:'/course?course_name=民法債編各論（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '稅法總論',
    url:'/course?course_name=稅法總論'
  },
  
  {
    title: '古承宗 ',
    url:'/course?teacher=古承宗 '
  },
  {
    title: '刑法案例研習（二）',
    url:'/course?course_name=刑法案例研習（二）'
  },
  
  {
    title: '許澤天 ',
    url:'/course?teacher=許澤天 '
  },
  {
    title: '進階刑法分則',
    url:'/course?course_name=進階刑法分則'
  },
  
  {
    title: '林易典 ',
    url:'/course?teacher=林易典 '
  },
  {
    title: '商標法',
    url:'/course?course_name=商標法'
  },
  
  {
    title: '李佳玟 ',
    url:'/course?teacher=李佳玟 '
  },
  {
    title: '犯罪學',
    url:'/course?course_name=犯罪學'
  },
  
  {
    title: '侯英泠*陳思廷 ',
    url:'/course?teacher=侯英泠*陳思廷 '
  },
  {
    title: '勞務契約法',
    url:'/course?course_name=勞務契約法'
  },
  
  {
    title: '許育典*陳思廷 蒙志成 林常青 陳世明 ',
    url:'/course?teacher=許育典*陳思廷 蒙志成 林常青 陳世明 '
  },
  {
    title: '台灣社會的法律實踐（二）',
    url:'/course?course_name=台灣社會的法律實踐（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '民法物權編',
    url:'/course?course_name=民法物權編'
  },
  
  {
    title: '葉婉如 ',
    url:'/course?teacher=葉婉如 '
  },
  {
    title: '民法物權編',
    url:'/course?course_name=民法物權編'
  },
  
  {
    title: '李佳玟 ',
    url:'/course?teacher=李佳玟 '
  },
  {
    title: '刑事訴訟法',
    url:'/course?course_name=刑事訴訟法'
  },
  
  {
    title: '許登科 ',
    url:'/course?teacher=許登科 '
  },
  {
    title: '行政法',
    url:'/course?course_name=行政法'
  },
  
  {
    title: '蔡志方 ',
    url:'/course?teacher=蔡志方 '
  },
  {
    title: '行政法',
    url:'/course?course_name=行政法'
  },
  
  {
    title: '林易典 ',
    url:'/course?teacher=林易典 '
  },
  {
    title: '公平交易法',
    url:'/course?course_name=公平交易法'
  },
  
  {
    title: '王效文 ',
    url:'/course?teacher=王效文 '
  },
  {
    title: '刑法總則',
    url:'/course?course_name=刑法總則'
  },
  
  {
    title: '王士帆 ',
    url:'/course?teacher=王士帆 '
  },
  {
    title: '刑法總則',
    url:'/course?course_name=刑法總則'
  },
  
  {
    title: '顏雅倫 ',
    url:'/course?teacher=顏雅倫 '
  },
  {
    title: '民法債編總論',
    url:'/course?course_name=民法債編總論'
  },
  
  {
    title: '林易典 ',
    url:'/course?teacher=林易典 '
  },
  {
    title: '民法債編總論',
    url:'/course?course_name=民法債編總論'
  },
  
  {
    title: '陳俊仁 ',
    url:'/course?teacher=陳俊仁 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '李威勳 ',
    url:'/course?teacher=李威勳 '
  },
  {
    title: '資料庫',
    url:'/course?course_name=資料庫'
  },
  
  {
    title: '黃國平 ',
    url:'/course?teacher=黃國平 '
  },
  {
    title: '交通管理與控制',
    url:'/course?course_name=交通管理與控制'
  },
  
  {
    title: '林佐鼎 ',
    url:'/course?teacher=林佐鼎 '
  },
  {
    title: '運輸規劃',
    url:'/course?course_name=運輸規劃'
  },
  
  {
    title: '黃國平 ',
    url:'/course?teacher=黃國平 '
  },
  {
    title: '管理資訊系統',
    url:'/course?course_name=管理資訊系統'
  },
  
  {
    title: '蔡東峻 ',
    url:'/course?teacher=蔡東峻 '
  },
  {
    title: '服務業行銷',
    url:'/course?course_name=服務業行銷'
  },
  
  {
    title: '林珮珺 戴佐敏 胡守任 林正章 廖俊雄*鄭永祥 陳勁甫 胡大瀛 張有恒 黃國平 張瀞之 黃光渠 林東盈 李威勳 孫雅彥 黃郁雯 沈宗緯 林佐鼎 蔡東峻 ',
    url:'/course?teacher=林珮珺 戴佐敏 胡守任 林正章 廖俊雄*鄭永祥 陳勁甫 胡大瀛 張有恒 黃國平 張瀞之 黃光渠 林東盈 李威勳 孫雅彥 黃郁雯 沈宗緯 林佐鼎 蔡東峻 '
  },
  {
    title: '專題研究（一）',
    url:'/course?course_name=專題研究（一）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '運轉理論',
    url:'/course?course_name=運轉理論'
  },
  
  {
    title: '沈宗緯 ',
    url:'/course?teacher=沈宗緯 '
  },
  {
    title: '國際物流',
    url:'/course?course_name=國際物流'
  },
  
  {
    title: '張有恒 ',
    url:'/course?teacher=張有恒 '
  },
  {
    title: '運輸管理',
    url:'/course?course_name=運輸管理'
  },
  
  {
    title: '李威勳 ',
    url:'/course?teacher=李威勳 '
  },
  {
    title: '通訊導論',
    url:'/course?course_name=通訊導論'
  },
  
  {
    title: '張瀞之 ',
    url:'/course?teacher=張瀞之 '
  },
  {
    title: '國際貿易',
    url:'/course?course_name=國際貿易'
  },
  
  {
    title: '鄭永祥 ',
    url:'/course?teacher=鄭永祥 '
  },
  {
    title: '公共運輸',
    url:'/course?course_name=公共運輸'
  },
  
  {
    title: '林佐鼎 ',
    url:'/course?teacher=林佐鼎 '
  },
  {
    title: '運輸安全',
    url:'/course?course_name=運輸安全'
  },
  
  {
    title: '林正章 ',
    url:'/course?teacher=林正章 '
  },
  {
    title: '作業研究（二）',
    url:'/course?course_name=作業研究（二）'
  },
  
  {
    title: '戴佐敏 ',
    url:'/course?teacher=戴佐敏 '
  },
  {
    title: '航空運輸',
    url:'/course?course_name=航空運輸'
  },
  
  {
    title: '黃郁雯 ',
    url:'/course?teacher=黃郁雯 '
  },
  {
    title: '商事法',
    url:'/course?course_name=商事法'
  },
  
  {
    title: '林佐鼎 ',
    url:'/course?teacher=林佐鼎 '
  },
  {
    title: '運輸工程',
    url:'/course?course_name=運輸工程'
  },
  
  {
    title: '林佐鼎 ',
    url:'/course?teacher=林佐鼎 '
  },
  {
    title: '統計學（二）',
    url:'/course?course_name=統計學（二）'
  },
  
  {
    title: '林東盈 ',
    url:'/course?teacher=林東盈 '
  },
  {
    title: '計算機程式',
    url:'/course?course_name=計算機程式'
  },
  
  {
    title: '謝喻婷 ',
    url:'/course?teacher=謝喻婷 '
  },
  {
    title: '會計學（二）',
    url:'/course?course_name=會計學（二）'
  },
  
  {
    title: '沈宗緯 ',
    url:'/course?teacher=沈宗緯 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '侯世章 ',
    url:'/course?teacher=侯世章 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '林敏雄 ',
    url:'/course?teacher=林敏雄 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '劉育佑 ',
    url:'/course?teacher=劉育佑 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '黃光渠 ',
    url:'/course?teacher=黃光渠 '
  },
  {
    title: '運輸學（二）',
    url:'/course?course_name=運輸學（二）'
  },
  
  {
    title: '孫雅彥 ',
    url:'/course?teacher=孫雅彥 '
  },
  {
    title: '經濟學（二）',
    url:'/course?course_name=經濟學（二）'
  },
  
  {
    title: '林志隆 ',
    url:'/course?teacher=林志隆 '
  },
  {
    title: '土地稅法與遺產及贈與稅法',
    url:'/course?course_name=土地稅法與遺產及贈與稅法'
  },
  
  {
    title: '李憲達 ',
    url:'/course?teacher=李憲達 '
  },
  {
    title: '領導學',
    url:'/course?course_name=領導學'
  },
  
  {
    title: '劉任修 ',
    url:'/course?teacher=劉任修 '
  },
  {
    title: '雲端行動應用',
    url:'/course?course_name=雲端行動應用'
  },
  
  {
    title: '鄭詩瑜 ',
    url:'/course?teacher=鄭詩瑜 '
  },
  {
    title: '人力資源管理',
    url:'/course?course_name=人力資源管理'
  },
  
  {
    title: '李宏志 ',
    url:'/course?teacher=李宏志 '
  },
  {
    title: '國際財務管理',
    url:'/course?course_name=國際財務管理'
  },
  
  {
    title: '許順雄 ',
    url:'/course?teacher=許順雄 '
  },
  {
    title: '鑑識會計學理論與實務研討',
    url:'/course?course_name=鑑識會計學理論與實務研討'
  },
  
  {
    title: '林軒竹 ',
    url:'/course?teacher=林軒竹 '
  },
  {
    title: '財務報表分析',
    url:'/course?course_name=財務報表分析'
  },
  
  {
    title: '黃郁雯 ',
    url:'/course?teacher=黃郁雯 '
  },
  {
    title: '商事法',
    url:'/course?course_name=商事法'
  },
  
  {
    title: '張瀞之 ',
    url:'/course?teacher=張瀞之 '
  },
  {
    title: '國際貿易',
    url:'/course?course_name=國際貿易'
  },
  
  {
    title: '顏盟峯 ',
    url:'/course?teacher=顏盟峯 '
  },
  {
    title: '商業應用軟體',
    url:'/course?course_name=商業應用軟體'
  },
  
  {
    title: '蘇義洲 ',
    url:'/course?teacher=蘇義洲 '
  },
  {
    title: '證券交易法',
    url:'/course?course_name=證券交易法'
  },
  
  {
    title: '楊明宗 ',
    url:'/course?teacher=楊明宗 '
  },
  {
    title: '政府會計',
    url:'/course?course_name=政府會計'
  },
  
  {
    title: '劉裕宏 ',
    url:'/course?teacher=劉裕宏 '
  },
  {
    title: '衍生性金融商品導論',
    url:'/course?course_name=衍生性金融商品導論'
  },
  
  {
    title: '林囿成 ',
    url:'/course?teacher=林囿成 '
  },
  {
    title: '審計學（一）',
    url:'/course?course_name=審計學（一）'
  },
  
  {
    title: '林囿成 ',
    url:'/course?teacher=林囿成 '
  },
  {
    title: '審計學（一）',
    url:'/course?course_name=審計學（一）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '高級會計學（二）',
    url:'/course?course_name=高級會計學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '高級會計學（二）',
    url:'/course?course_name=高級會計學（二）'
  },
  
  {
    title: '徐立群 ',
    url:'/course?teacher=徐立群 '
  },
  {
    title: '企業資源規劃與資料探勘',
    url:'/course?course_name=企業資源規劃與資料探勘'
  },
  
  {
    title: '謝喻婷 ',
    url:'/course?teacher=謝喻婷 '
  },
  {
    title: '中級會計學（二）',
    url:'/course?course_name=中級會計學（二）'
  },
  
  {
    title: '謝喻婷 ',
    url:'/course?teacher=謝喻婷 '
  },
  {
    title: '中級會計學（二）',
    url:'/course?course_name=中級會計學（二）'
  },
  
  {
    title: '陳淑惠 ',
    url:'/course?teacher=陳淑惠 '
  },
  {
    title: '管理學',
    url:'/course?course_name=管理學'
  },
  
  {
    title: '梁少懷 ',
    url:'/course?teacher=梁少懷 '
  },
  {
    title: '基本財務學',
    url:'/course?course_name=基本財務學'
  },
  
  {
    title: '詹世煌 ',
    url:'/course?teacher=詹世煌 '
  },
  {
    title: '統計學（二）',
    url:'/course?course_name=統計學（二）'
  },
  
  {
    title: '周庭楷 ',
    url:'/course?teacher=周庭楷 '
  },
  {
    title: '中級會計學（二）',
    url:'/course?course_name=中級會計學（二）'
  },
  
  {
    title: '周庭楷 ',
    url:'/course?teacher=周庭楷 '
  },
  {
    title: '中級會計學（二）',
    url:'/course?course_name=中級會計學（二）'
  },
  
  {
    title: '李政勳 ',
    url:'/course?teacher=李政勳 '
  },
  {
    title: '成本會計（二）',
    url:'/course?course_name=成本會計（二）'
  },
  
  {
    title: '李政勳 ',
    url:'/course?teacher=李政勳 '
  },
  {
    title: '成本會計（二）',
    url:'/course?course_name=成本會計（二）'
  },
  
  {
    title: '許育綝 ',
    url:'/course?teacher=許育綝 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '任眉眉 ',
    url:'/course?teacher=任眉眉 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '伍弘歷 ',
    url:'/course?teacher=伍弘歷 '
  },
  {
    title: '經濟學（二）',
    url:'/course?course_name=經濟學（二）'
  },
  
  {
    title: '林囿成 ',
    url:'/course?teacher=林囿成 '
  },
  {
    title: '初級會計學（二）',
    url:'/course?course_name=初級會計學（二）'
  },
  
  {
    title: '林囿成 ',
    url:'/course?teacher=林囿成 '
  },
  {
    title: '初級會計學（二）',
    url:'/course?course_name=初級會計學（二）'
  },
  
  {
    title: '劉裕宏 ',
    url:'/course?teacher=劉裕宏 '
  },
  {
    title: '計算機概論',
    url:'/course?course_name=計算機概論'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '蘇偉貞 ',
    url:'/course?teacher=蘇偉貞 '
  },
  {
    title: '基礎國文(現代小說)（二）',
    url:'/course?course_name=基礎國文(現代小說)（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '王翠玲 ',
    url:'/course?teacher=王翠玲 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '蔡玫姿 ',
    url:'/course?teacher=蔡玫姿 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '李京珮 ',
    url:'/course?teacher=李京珮 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '李淑如 ',
    url:'/course?teacher=李淑如 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '蘇偉貞 ',
    url:'/course?teacher=蘇偉貞 '
  },
  {
    title: '基礎國文(現代小說)（二）',
    url:'/course?course_name=基礎國文(現代小說)（二）'
  },
  
  {
    title: '侯美珍 ',
    url:'/course?teacher=侯美珍 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '翁文嫻 ',
    url:'/course?teacher=翁文嫻 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '王翠玲 ',
    url:'/course?teacher=王翠玲 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '林幸慧 ',
    url:'/course?teacher=林幸慧 '
  },
  {
    title: '基礎國文(古典戲劇)（二）',
    url:'/course?course_name=基礎國文(古典戲劇)（二）'
  },
  
  {
    title: '蔡玫姿 ',
    url:'/course?teacher=蔡玫姿 '
  },
  {
    title: '基礎國文(現代小說)（二）',
    url:'/course?course_name=基礎國文(現代小說)（二）'
  },
  
  {
    title: '賴麗娟 ',
    url:'/course?teacher=賴麗娟 '
  },
  {
    title: '基礎國文(古典詩詞)（二）',
    url:'/course?course_name=基礎國文(古典詩詞)（二）'
  },
  
  {
    title: '高佑仁 ',
    url:'/course?teacher=高佑仁 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '林美惠 ',
    url:'/course?teacher=林美惠 '
  },
  {
    title: '基礎國文(古典詩詞)（二）',
    url:'/course?course_name=基礎國文(古典詩詞)（二）'
  },
  
  {
    title: '李京珮 ',
    url:'/course?teacher=李京珮 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '李淑如 ',
    url:'/course?teacher=李淑如 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '林耀潾 ',
    url:'/course?teacher=林耀潾 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '林素娟 ',
    url:'/course?teacher=林素娟 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '秦嘉嫄 ',
    url:'/course?teacher=秦嘉嫄 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '賴麗娟 ',
    url:'/course?teacher=賴麗娟 '
  },
  {
    title: '基礎國文(古典詩詞)（二）',
    url:'/course?course_name=基礎國文(古典詩詞)（二）'
  },
  
  {
    title: '林美惠 ',
    url:'/course?teacher=林美惠 '
  },
  {
    title: '基礎國文(史傳文學)（二）',
    url:'/course?course_name=基礎國文(史傳文學)（二）'
  },
  
  {
    title: '林幸慧 ',
    url:'/course?teacher=林幸慧 '
  },
  {
    title: '基礎國文(古典戲劇)（二）',
    url:'/course?course_name=基礎國文(古典戲劇)（二）'
  },
  
  {
    title: '蘇敏逸 ',
    url:'/course?teacher=蘇敏逸 '
  },
  {
    title: '基礎國文(現代小說)（二）',
    url:'/course?course_name=基礎國文(現代小說)（二）'
  },
  
  {
    title: '李京珮 ',
    url:'/course?teacher=李京珮 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '李淑如 ',
    url:'/course?teacher=李淑如 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '李京珮 ',
    url:'/course?teacher=李京珮 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '李淑如 ',
    url:'/course?teacher=李淑如 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '陳弘學 ',
    url:'/course?teacher=陳弘學 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '陳家煌 ',
    url:'/course?teacher=陳家煌 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '高佑仁 ',
    url:'/course?teacher=高佑仁 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '萬胥亭 ',
    url:'/course?teacher=萬胥亭 '
  },
  {
    title: '基礎國文(現代詩)（二）',
    url:'/course?course_name=基礎國文(現代詩)（二）'
  },
  
  {
    title: '仇小屏 ',
    url:'/course?teacher=仇小屏 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '陳梅香 ',
    url:'/course?teacher=陳梅香 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '蘇敏逸 ',
    url:'/course?teacher=蘇敏逸 '
  },
  {
    title: '基礎國文(現代小說)（二）',
    url:'/course?course_name=基礎國文(現代小說)（二）'
  },
  
  {
    title: '林美惠 ',
    url:'/course?teacher=林美惠 '
  },
  {
    title: '基礎國文(古典散文)（二）',
    url:'/course?course_name=基礎國文(古典散文)（二）'
  },
  
  {
    title: '吳文璋 ',
    url:'/course?teacher=吳文璋 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '李京珮 ',
    url:'/course?teacher=李京珮 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '李淑如 ',
    url:'/course?teacher=李淑如 '
  },
  {
    title: '基礎國文(綜合文類)（二）',
    url:'/course?course_name=基礎國文(綜合文類)（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '論文（二）',
    url:'/course?course_name=論文（二）'
  },
  
  {
    title: '曾淑芬*何盧勳 李純純 ',
    url:'/course?teacher=曾淑芬*何盧勳 李純純 '
  },
  {
    title: '免疫學',
    url:'/course?course_name=免疫學'
  },
  
  {
    title: '陳虹樺*王浩文 ',
    url:'/course?teacher=陳虹樺*王浩文 '
  },
  {
    title: '生命科學與諾貝爾獎',
    url:'/course?course_name=生命科學與諾貝爾獎'
  },
  
  {
    title: '李亞夫 何盧勳 陳一菁 彭怡禎*',
    url:'/course?teacher=李亞夫 何盧勳 陳一菁 彭怡禎*'
  },
  {
    title: '生命科學專題研究（二）',
    url:'/course?course_name=生命科學專題研究（二）'
  },
  
  {
    title: '黃浩仁 宋皇模*洪建中 李瑞花 ',
    url:'/course?teacher=黃浩仁 宋皇模*洪建中 李瑞花 '
  },
  {
    title: '分子生物學',
    url:'/course?course_name=分子生物學'
  },
  
  {
    title: '蔣鎮宇 宋皇模*廖泓鈞 劉雅心 王涵青 張文綺 李瑞花 ',
    url:'/course?teacher=蔣鎮宇 宋皇模*廖泓鈞 劉雅心 王涵青 張文綺 李瑞花 '
  },
  {
    title: '基因體與生物技術理論與實作',
    url:'/course?course_name=基因體與生物技術理論與實作'
  },
  
  {
    title: '張文綺 ',
    url:'/course?teacher=張文綺 '
  },
  {
    title: '生物資料庫簡介與實作',
    url:'/course?course_name=生物資料庫簡介與實作'
  },
  
  {
    title: '陳虹樺*李純純 彭怡禎 黃玲惠 ',
    url:'/course?teacher=陳虹樺*李純純 彭怡禎 黃玲惠 '
  },
  {
    title: '細胞生物學',
    url:'/course?course_name=細胞生物學'
  },
  
  {
    title: '張素瓊*彭怡禎 ',
    url:'/course?teacher=張素瓊*彭怡禎 '
  },
  {
    title: '營養學',
    url:'/course?course_name=營養學'
  },
  
  {
    title: '李亞夫*陳一菁 ',
    url:'/course?teacher=李亞夫*陳一菁 '
  },
  {
    title: '生態學實驗',
    url:'/course?course_name=生態學實驗'
  },
  
  {
    title: '李亞夫*陳一菁 仲澤剛史 ',
    url:'/course?teacher=李亞夫*陳一菁 仲澤剛史 '
  },
  {
    title: '生態學',
    url:'/course?course_name=生態學'
  },
  
  {
    title: '邱顯泰 林玉麒*',
    url:'/course?teacher=邱顯泰 林玉麒*'
  },
  {
    title: '生物有機化學',
    url:'/course?course_name=生物有機化學'
  },
  
  {
    title: '陳文輝 陳虹樺*吳文鑾 張清俊 蔡文杰 ',
    url:'/course?teacher=陳文輝 陳虹樺*吳文鑾 張清俊 蔡文杰 '
  },
  {
    title: '蘭花生物科技學',
    url:'/course?course_name=蘭花生物科技學'
  },
  
  {
    title: '張松彬*邱啟洲 ',
    url:'/course?teacher=張松彬*邱啟洲 '
  },
  {
    title: '植物形態與解剖學',
    url:'/course?course_name=植物形態與解剖學'
  },
  
  {
    title: '曾淑芬 何盧勳*廖泓鈞 彭怡禎 ',
    url:'/course?teacher=曾淑芬 何盧勳*廖泓鈞 彭怡禎 '
  },
  {
    title: '代謝生化學',
    url:'/course?course_name=代謝生化學'
  },
  
  {
    title: '宋皇模*劉宗霖 ',
    url:'/course?teacher=宋皇模*劉宗霖 '
  },
  {
    title: '生物資訊學導論',
    url:'/course?course_name=生物資訊學導論'
  },
  
  {
    title: '王辰樹 ',
    url:'/course?teacher=王辰樹 '
  },
  {
    title: '應用線性代數',
    url:'/course?course_name=應用線性代數'
  },
  
  {
    title: '李瑞花 ',
    url:'/course?teacher=李瑞花 '
  },
  {
    title: '植物細胞與組織培養',
    url:'/course?course_name=植物細胞與組織培養'
  },
  
  {
    title: '王建平 ',
    url:'/course?teacher=王建平 '
  },
  {
    title: '動物組織學',
    url:'/course?course_name=動物組織學'
  },
  
  {
    title: '蔣鎮宇 李亞夫*',
    url:'/course?teacher=蔣鎮宇 李亞夫*'
  },
  {
    title: '演化生物學',
    url:'/course?course_name=演化生物學'
  },
  
  {
    title: '張松彬 廖泓鈞 劉雅心 仲澤剛史*',
    url:'/course?teacher=張松彬 廖泓鈞 劉雅心 仲澤剛史*'
  },
  {
    title: '服務學習（四）',
    url:'/course?course_name=服務學習（四）'
  },
  
  {
    title: '張松彬 廖泓鈞 劉雅心*仲澤剛史 ',
    url:'/course?teacher=張松彬 廖泓鈞 劉雅心*仲澤剛史 '
  },
  {
    title: '實驗室實習（二）',
    url:'/course?course_name=實驗室實習（二）'
  },
  
  {
    title: '劉雅心 吳文鑾*',
    url:'/course?teacher=劉雅心 吳文鑾*'
  },
  {
    title: '遺傳學實驗',
    url:'/course?course_name=遺傳學實驗'
  },
  
  {
    title: '蔣鎮宇 宋皇模 劉雅心 吳文鑾*',
    url:'/course?teacher=蔣鎮宇 宋皇模 劉雅心 吳文鑾*'
  },
  {
    title: '遺傳學',
    url:'/course?course_name=遺傳學'
  },
  
  {
    title: '陳一菁*小島健司 ',
    url:'/course?teacher=陳一菁*小島健司 '
  },
  {
    title: '生命科學討論（二）',
    url:'/course?course_name=生命科學討論（二）'
  },
  
  {
    title: '蔣鎮宇 黃浩仁 宋皇模*吳文鑾 ',
    url:'/course?teacher=蔣鎮宇 黃浩仁 宋皇模*吳文鑾 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '李亞夫 王浩文 何盧勳 邱慈暉 陳一菁 李純純 彭怡禎*',
    url:'/course?teacher=李亞夫 王浩文 何盧勳 邱慈暉 陳一菁 李純純 彭怡禎*'
  },
  {
    title: '普通生物學實驗（二）',
    url:'/course?course_name=普通生物學實驗（二）'
  },
  
  {
    title: '曾淑芬 李亞夫 張素瓊 王浩文 何盧勳 邱慈暉 陳一菁*李純純 仲澤剛史 ',
    url:'/course?teacher=曾淑芬 李亞夫 張素瓊 王浩文 何盧勳 邱慈暉 陳一菁*李純純 仲澤剛史 '
  },
  {
    title: '普通生物學（二）',
    url:'/course?course_name=普通生物學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '普通物理學實驗',
    url:'/course?course_name=普通物理學實驗'
  },
  
  {
    title: '呂欽山 ',
    url:'/course?teacher=呂欽山 '
  },
  {
    title: '普通物理學',
    url:'/course?course_name=普通物理學'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '關汝琳 ',
    url:'/course?teacher=關汝琳 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '饒瑞鈞 ',
    url:'/course?teacher=饒瑞鈞 '
  },
  {
    title: '科學論文寫作及報告',
    url:'/course?course_name=科學論文寫作及報告'
  },
  
  {
    title: '樂鍇．祿璞 ',
    url:'/course?teacher=樂鍇．祿璞 '
  },
  {
    title: '地震災害分析',
    url:'/course?course_name=地震災害分析'
  },
  
  {
    title: '蔡金郎 ',
    url:'/course?teacher=蔡金郎 '
  },
  {
    title: '地球物質學',
    url:'/course?course_name=地球物質學'
  },
  
  {
    title: '紀文榮 ',
    url:'/course?teacher=紀文榮 '
  },
  {
    title: '能源地質與探勘（二）',
    url:'/course?course_name=能源地質與探勘（二）'
  },
  
  {
    title: '吳銘志 ',
    url:'/course?teacher=吳銘志 '
  },
  {
    title: '地質與工程環境',
    url:'/course?course_name=地質與工程環境'
  },
  
  {
    title: '羅尚德 ',
    url:'/course?teacher=羅尚德 '
  },
  {
    title: '現代分析地球化學',
    url:'/course?course_name=現代分析地球化學'
  },
  
  {
    title: '林冠瑋 ',
    url:'/course?teacher=林冠瑋 '
  },
  {
    title: '高等臺灣地質學',
    url:'/course?course_name=高等臺灣地質學'
  },
  
  {
    title: '吳銘志*龔慧貞 ',
    url:'/course?teacher=吳銘志*龔慧貞 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '饒瑞鈞*羅尚德 ',
    url:'/course?teacher=饒瑞鈞*羅尚德 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '楊耿明 ',
    url:'/course?teacher=楊耿明 '
  },
  {
    title: '石油地質',
    url:'/course?course_name=石油地質'
  },
  
  {
    title: '呂明達 ',
    url:'/course?teacher=呂明達 '
  },
  {
    title: '震測岩性學',
    url:'/course?course_name=震測岩性學'
  },
  
  {
    title: '宋偉國 ',
    url:'/course?teacher=宋偉國 '
  },
  {
    title: '氣象學特論',
    url:'/course?course_name=氣象學特論'
  },
  
  {
    title: '游鎮烽 ',
    url:'/course?teacher=游鎮烽 '
  },
  {
    title: '同位素地球化學特論（一）',
    url:'/course?course_name=同位素地球化學特論（一）'
  },
  
  {
    title: '饒瑞鈞 ',
    url:'/course?teacher=饒瑞鈞 '
  },
  {
    title: '地震訊號與噪訊分析',
    url:'/course?course_name=地震訊號與噪訊分析'
  },
  
  {
    title: '吳榮章 ',
    url:'/course?teacher=吳榮章 '
  },
  {
    title: '古生物學及其在資源探勘之應用',
    url:'/course?course_name=古生物學及其在資源探勘之應用'
  },
  
  {
    title: '紀文榮 ',
    url:'/course?teacher=紀文榮 '
  },
  {
    title: '超微體化石分類、鑑定與生物地層及實習',
    url:'/course?course_name=超微體化石分類、鑑定與生物地層及實習'
  },
  
  {
    title: '紀文榮 ',
    url:'/course?teacher=紀文榮 '
  },
  {
    title: '超微體化石分類、鑑定與生物地層及實習',
    url:'/course?course_name=超微體化石分類、鑑定與生物地層及實習'
  },
  
  {
    title: '羅尚德 ',
    url:'/course?teacher=羅尚德 '
  },
  {
    title: '生物地球化學',
    url:'/course?course_name=生物地球化學'
  },
  
  {
    title: '江威德 ',
    url:'/course?teacher=江威德 '
  },
  {
    title: '穿透式電子顯微鏡之應用',
    url:'/course?course_name=穿透式電子顯微鏡之應用'
  },
  
  {
    title: '陳燕華 ',
    url:'/course?teacher=陳燕華 '
  },
  {
    title: '表面分析與奈米檢測技術',
    url:'/course?course_name=表面分析與奈米檢測技術'
  },
  
  {
    title: '龔慧貞 ',
    url:'/course?teacher=龔慧貞 '
  },
  {
    title: 'Ｘ光結晶學',
    url:'/course?course_name=Ｘ光結晶學'
  },
  
  {
    title: '李恩瑞 ',
    url:'/course?teacher=李恩瑞 '
  },
  {
    title: '專題討論—地震資料處理（四）',
    url:'/course?course_name=專題討論—地震資料處理（四）'
  },
  
  {
    title: '林冠瑋 ',
    url:'/course?teacher=林冠瑋 '
  },
  {
    title: '專題討論─工程地質（四）',
    url:'/course?course_name=專題討論─工程地質（四）'
  },
  
  {
    title: '梁碧清 ',
    url:'/course?teacher=梁碧清 '
  },
  {
    title: '專題討論─生物地質全球變遷（四）',
    url:'/course?course_name=專題討論─生物地質全球變遷（四）'
  },
  
  {
    title: '樂鍇．祿璞 ',
    url:'/course?teacher=樂鍇．祿璞 '
  },
  {
    title: '專題討論─地震研究（四）',
    url:'/course?course_name=專題討論─地震研究（四）'
  },
  
  {
    title: '林建宏 ',
    url:'/course?teacher=林建宏 '
  },
  {
    title: '專題討論─大氣科學（四）',
    url:'/course?course_name=專題討論─大氣科學（四）'
  },
  
  {
    title: '龔慧貞 ',
    url:'/course?teacher=龔慧貞 '
  },
  {
    title: '專題討論─岩石物理及其應用（四）',
    url:'/course?course_name=專題討論─岩石物理及其應用（四）'
  },
  
  {
    title: '陳燕華 ',
    url:'/course?teacher=陳燕華 '
  },
  {
    title: '專題討論─礦物應用（四）',
    url:'/course?course_name=專題討論─礦物應用（四）'
  },
  
  {
    title: '楊耿明 ',
    url:'/course?teacher=楊耿明 '
  },
  {
    title: '專題討論─沈積盆地的地體構造（四）',
    url:'/course?course_name=專題討論─沈積盆地的地體構造（四）'
  },
  
  {
    title: '楊懷仁 ',
    url:'/course?teacher=楊懷仁 '
  },
  {
    title: '專題討論─地球化學（四）',
    url:'/course?course_name=專題討論─地球化學（四）'
  },
  
  {
    title: '吳銘志 ',
    url:'/course?teacher=吳銘志 '
  },
  {
    title: '專題討論─環境地質與工程技術（四）',
    url:'/course?course_name=專題討論─環境地質與工程技術（四）'
  },
  
  {
    title: '江威德 ',
    url:'/course?teacher=江威德 '
  },
  {
    title: '專題討論─礦物學（四）',
    url:'/course?course_name=專題討論─礦物學（四）'
  },
  
  {
    title: '饒瑞鈞 ',
    url:'/course?teacher=饒瑞鈞 '
  },
  {
    title: '專題討論─地震地體構造（四）',
    url:'/course?course_name=專題討論─地震地體構造（四）'
  },
  
  {
    title: '劉正千 ',
    url:'/course?teacher=劉正千 '
  },
  {
    title: '專題討論─遙感探測（四）',
    url:'/course?course_name=專題討論─遙感探測（四）'
  },
  
  {
    title: '林慶偉 ',
    url:'/course?teacher=林慶偉 '
  },
  {
    title: '專題討論─大規模崩塌判釋與調查（四）',
    url:'/course?course_name=專題討論─大規模崩塌判釋與調查（四）'
  },
  
  {
    title: '羅尚德 ',
    url:'/course?teacher=羅尚德 '
  },
  {
    title: '專題討論─現代地球化學（四）',
    url:'/course?course_name=專題討論─現代地球化學（四）'
  },
  
  {
    title: '游鎮烽 ',
    url:'/course?teacher=游鎮烽 '
  },
  {
    title: '專題討論─同位素地球化學（四）',
    url:'/course?course_name=專題討論─同位素地球化學（四）'
  },
  
  {
    title: '江威德*劉正千 ',
    url:'/course?teacher=江威德*劉正千 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陳燕華*林冠瑋 ',
    url:'/course?teacher=陳燕華*林冠瑋 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '楊懷仁 李恩瑞*',
    url:'/course?teacher=楊懷仁 李恩瑞*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '游鎮烽*樂鍇．祿璞 ',
    url:'/course?teacher=游鎮烽*樂鍇．祿璞 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '林哲偉 ',
    url:'/course?teacher=林哲偉 '
  },
  {
    title: '嵌入式系統',
    url:'/course?course_name=嵌入式系統'
  },
  
  {
    title: '陳毓宏 洪欣儀*',
    url:'/course?teacher=陳毓宏 洪欣儀*'
  },
  {
    title: '有機化學（一）',
    url:'/course?course_name=有機化學（一）'
  },
  
  {
    title: '方佑華 ',
    url:'/course?teacher=方佑華 '
  },
  {
    title: '數位影像處理',
    url:'/course?course_name=數位影像處理'
  },
  
  {
    title: '陳嘉元*王明習 陳永裕 賴維祥 郭榮富 ',
    url:'/course?teacher=陳嘉元*王明習 陳永裕 賴維祥 郭榮富 '
  },
  {
    title: '機電創新實作（一）',
    url:'/course?course_name=機電創新實作（一）'
  },
  
  {
    title: '陳嘉元*王明習 陳永裕 賴維祥 郭榮富 ',
    url:'/course?teacher=陳嘉元*王明習 陳永裕 賴維祥 郭榮富 '
  },
  {
    title: '機電創新實作（一）',
    url:'/course?course_name=機電創新實作（一）'
  },
  
  {
    title: '胡晉嘉 黃執中*',
    url:'/course?teacher=胡晉嘉 黃執中*'
  },
  {
    title: '科技論文導讀（二）',
    url:'/course?course_name=科技論文導讀（二）'
  },
  
  {
    title: '陳家進 陳天送 張憲彰 張志涵 葉明龍 胡晉嘉*鄭國順 蘇芳慶 莊漢聲 邱文泰 黃執中*郭榮富 方佑華 吳炳慶 陳芃婷 林哲偉 楊岱樺 涂庭源 ',
    url:'/course?teacher=陳家進 陳天送 張憲彰 張志涵 葉明龍 胡晉嘉*鄭國順 蘇芳慶 莊漢聲 邱文泰 黃執中*郭榮富 方佑華 吳炳慶 陳芃婷 林哲偉 楊岱樺 涂庭源 '
  },
  {
    title: '專題研究（二）',
    url:'/course?course_name=專題研究（二）'
  },
  
  {
    title: '吳炳慶*楊岱樺 涂庭源 ',
    url:'/course?teacher=吳炳慶*楊岱樺 涂庭源 '
  },
  {
    title: '細胞生物學',
    url:'/course?course_name=細胞生物學'
  },
  
  {
    title: '莊漢聲 ',
    url:'/course?teacher=莊漢聲 '
  },
  {
    title: '流體力學',
    url:'/course?course_name=流體力學'
  },
  
  {
    title: '楊岱樺 ',
    url:'/course?teacher=楊岱樺 '
  },
  {
    title: '生物統計學',
    url:'/course?course_name=生物統計學'
  },
  
  {
    title: '黃執中 ',
    url:'/course?teacher=黃執中 '
  },
  {
    title: '醫學儀表與量測',
    url:'/course?course_name=醫學儀表與量測'
  },
  
  {
    title: '林哲偉 ',
    url:'/course?teacher=林哲偉 '
  },
  {
    title: '電子學與實驗（一）',
    url:'/course?course_name=電子學與實驗（一）'
  },
  
  {
    title: '林哲偉 ',
    url:'/course?teacher=林哲偉 '
  },
  {
    title: '電子學與實驗（一）',
    url:'/course?course_name=電子學與實驗（一）'
  },
  
  {
    title: '葉明龍 ',
    url:'/course?teacher=葉明龍 '
  },
  {
    title: '材料與力學實驗',
    url:'/course?course_name=材料與力學實驗'
  },
  
  {
    title: '涂庭源 ',
    url:'/course?teacher=涂庭源 '
  },
  {
    title: '動力學',
    url:'/course?course_name=動力學'
  },
  
  {
    title: '張志涵 ',
    url:'/course?teacher=張志涵 '
  },
  {
    title: '工程圖學',
    url:'/course?course_name=工程圖學'
  },
  
  {
    title: '葉明龍 ',
    url:'/course?teacher=葉明龍 '
  },
  {
    title: '材料科學導論',
    url:'/course?course_name=材料科學導論'
  },
  
  {
    title: '邱文泰 ',
    url:'/course?teacher=邱文泰 '
  },
  {
    title: '生理學實驗',
    url:'/course?course_name=生理學實驗'
  },
  
  {
    title: '蕭富仁 邱文泰*張雅雯 ',
    url:'/course?teacher=蕭富仁 邱文泰*張雅雯 '
  },
  {
    title: '生理學',
    url:'/course?course_name=生理學'
  },
  
  {
    title: '陳天送 ',
    url:'/course?teacher=陳天送 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '體育（四）',
    url:'/course?course_name=體育（四）'
  },
  
  {
    title: '張志涵 吳炳慶*',
    url:'/course?teacher=張志涵 吳炳慶*'
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '陳家進 陳天送 張憲彰 張志涵 鄭國順 黃執中 方佑華*林哲偉 ',
    url:'/course?teacher=陳家進 陳天送 張憲彰 張志涵 鄭國順 黃執中 方佑華*林哲偉 '
  },
  {
    title: '醫學工程實驗',
    url:'/course?course_name=醫學工程實驗'
  },
  
  {
    title: '方佑華 ',
    url:'/course?teacher=方佑華 '
  },
  {
    title: '程式語言',
    url:'/course?course_name=程式語言'
  },
  
  {
    title: '胡書榕 邱文泰*',
    url:'/course?teacher=胡書榕 邱文泰*'
  },
  {
    title: '普通生物學',
    url:'/course?course_name=普通生物學'
  },
  
  {
    title: '陳寬任 ',
    url:'/course?teacher=陳寬任 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '黃柏嶧 ',
    url:'/course?teacher=黃柏嶧 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '章源慶 ',
    url:'/course?teacher=章源慶 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '鄺國權 ',
    url:'/course?teacher=鄺國權 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '吳恭儉 ',
    url:'/course?teacher=吳恭儉 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '蕭仁傑 ',
    url:'/course?teacher=蕭仁傑 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '體育（二）',
    url:'/course?course_name=體育（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基礎國文（二）',
    url:'/course?course_name=基礎國文（二）'
  },
  
  {
    title: '陳正忠 ',
    url:'/course?teacher=陳正忠 '
  },
  {
    title: '企業研究方法',
    url:'/course?course_name=企業研究方法'
  },
  
  {
    title: '張巍勳 ',
    url:'/course?teacher=張巍勳 '
  },
  {
    title: '供應鏈風險管理',
    url:'/course?course_name=供應鏈風險管理'
  },
  
  {
    title: '陳俊男 ',
    url:'/course?teacher=陳俊男 '
  },
  {
    title: '投資學',
    url:'/course?course_name=投資學'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '電子商務',
    url:'/course?course_name=電子商務'
  },
  
  {
    title: '陳正忠 ',
    url:'/course?teacher=陳正忠 '
  },
  {
    title: '研究方法（一）',
    url:'/course?course_name=研究方法（一）'
  },
  
  {
    title: '陳俊仁 ',
    url:'/course?teacher=陳俊仁 '
  },
  {
    title: '企業倫理與法律',
    url:'/course?course_name=企業倫理與法律'
  },
  
  {
    title: '吳萬益 ',
    url:'/course?teacher=吳萬益 '
  },
  {
    title: '組織理論與管理',
    url:'/course?course_name=組織理論與管理'
  },
  
  {
    title: '王慕容 ',
    url:'/course?teacher=王慕容 '
  },
  {
    title: '質性研究方法',
    url:'/course?course_name=質性研究方法'
  },
  
  {
    title: '王澤世 ',
    url:'/course?teacher=王澤世 '
  },
  {
    title: '衍生性金融商品',
    url:'/course?course_name=衍生性金融商品'
  },
  
  {
    title: '高如妃 ',
    url:'/course?teacher=高如妃 '
  },
  {
    title: '行銷模式',
    url:'/course?course_name=行銷模式'
  },
  
  {
    title: '陳正忠 ',
    url:'/course?teacher=陳正忠 '
  },
  {
    title: '電子商務',
    url:'/course?course_name=電子商務'
  },
  
  {
    title: '謝惠璟 ',
    url:'/course?teacher=謝惠璟 '
  },
  {
    title: '不動產財務',
    url:'/course?course_name=不動產財務'
  },
  
  {
    title: '張巍勳 ',
    url:'/course?teacher=張巍勳 '
  },
  {
    title: '企業電子化與供應鏈管理',
    url:'/course?course_name=企業電子化與供應鏈管理'
  },
  
  {
    title: '張巍勳 ',
    url:'/course?teacher=張巍勳 '
  },
  {
    title: '供應鏈風險管理',
    url:'/course?course_name=供應鏈風險管理'
  },
  
  {
    title: '謝惠璟 ',
    url:'/course?teacher=謝惠璟 '
  },
  {
    title: '公司理財',
    url:'/course?course_name=公司理財'
  },
  
  {
    title: '王鈿 ',
    url:'/course?teacher=王鈿 '
  },
  {
    title: '數位行銷',
    url:'/course?course_name=數位行銷'
  },
  
  {
    title: '楊曉瑩 ',
    url:'/course?teacher=楊曉瑩 '
  },
  {
    title: '財金理論',
    url:'/course?course_name=財金理論'
  },
  
  {
    title: '高如妃 ',
    url:'/course?teacher=高如妃 '
  },
  {
    title: '品牌文創策略',
    url:'/course?course_name=品牌文創策略'
  },
  
  {
    title: '王鈿 ',
    url:'/course?teacher=王鈿 '
  },
  {
    title: '國際行銷管理',
    url:'/course?course_name=國際行銷管理'
  },
  
  {
    title: '楊曉瑩 ',
    url:'/course?teacher=楊曉瑩 '
  },
  {
    title: '投資學',
    url:'/course?course_name=投資學'
  },
  
  {
    title: '陳正忠 ',
    url:'/course?teacher=陳正忠 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '陳正忠 ',
    url:'/course?teacher=陳正忠 '
  },
  {
    title: '研究方法（一）',
    url:'/course?course_name=研究方法（一）'
  },
  
  {
    title: '陳俊仁 ',
    url:'/course?teacher=陳俊仁 '
  },
  {
    title: '企業倫理與法律',
    url:'/course?course_name=企業倫理與法律'
  },
  
  {
    title: '吳萬益 ',
    url:'/course?teacher=吳萬益 '
  },
  {
    title: '組織理論與管理',
    url:'/course?course_name=組織理論與管理'
  },
  
  {
    title: '王慕容 ',
    url:'/course?teacher=王慕容 '
  },
  {
    title: '質性研究方法',
    url:'/course?course_name=質性研究方法'
  },
  
  {
    title: '王澤世 ',
    url:'/course?teacher=王澤世 '
  },
  {
    title: '衍生性金融商品',
    url:'/course?course_name=衍生性金融商品'
  },
  
  {
    title: '高如妃 ',
    url:'/course?teacher=高如妃 '
  },
  {
    title: '行銷模式',
    url:'/course?course_name=行銷模式'
  },
  
  {
    title: '陳正忠 ',
    url:'/course?teacher=陳正忠 '
  },
  {
    title: '電子商務',
    url:'/course?course_name=電子商務'
  },
  
  {
    title: '謝惠璟 ',
    url:'/course?teacher=謝惠璟 '
  },
  {
    title: '不動產財務',
    url:'/course?course_name=不動產財務'
  },
  
  {
    title: '陳正忠 ',
    url:'/course?teacher=陳正忠 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陳正忠 ',
    url:'/course?teacher=陳正忠 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '張巍勳 ',
    url:'/course?teacher=張巍勳 '
  },
  {
    title: '企業電子化與供應鏈管理',
    url:'/course?course_name=企業電子化與供應鏈管理'
  },
  
  {
    title: '張巍勳 ',
    url:'/course?teacher=張巍勳 '
  },
  {
    title: '供應鏈風險管理',
    url:'/course?course_name=供應鏈風險管理'
  },
  
  {
    title: '謝惠璟 ',
    url:'/course?teacher=謝惠璟 '
  },
  {
    title: '公司理財',
    url:'/course?course_name=公司理財'
  },
  
  {
    title: '王鈿 ',
    url:'/course?teacher=王鈿 '
  },
  {
    title: '數位行銷',
    url:'/course?course_name=數位行銷'
  },
  
  {
    title: '楊曉瑩 ',
    url:'/course?teacher=楊曉瑩 '
  },
  {
    title: '財金理論',
    url:'/course?course_name=財金理論'
  },
  
  {
    title: '高如妃 ',
    url:'/course?teacher=高如妃 '
  },
  {
    title: '品牌文創策略',
    url:'/course?course_name=品牌文創策略'
  },
  
  {
    title: '王鈿 ',
    url:'/course?teacher=王鈿 '
  },
  {
    title: '國際行銷管理',
    url:'/course?course_name=國際行銷管理'
  },
  
  {
    title: '楊曉瑩 ',
    url:'/course?teacher=楊曉瑩 '
  },
  {
    title: '投資學',
    url:'/course?course_name=投資學'
  },
  
  {
    title: '陳正忠*楊曉瑩 王鈿 謝惠璟 高如妃 張巍勳 許介文 ',
    url:'/course?teacher=陳正忠*楊曉瑩 王鈿 謝惠璟 高如妃 張巍勳 許介文 '
  },
  {
    title: '專題討論（五）',
    url:'/course?course_name=專題討論（五）'
  },
  
  {
    title: '陳正忠 ',
    url:'/course?teacher=陳正忠 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '巫義淵 ',
    url:'/course?teacher=巫義淵 '
  },
  {
    title: '台語歌仔冊選讀',
    url:'/course?course_name=台語歌仔冊選讀'
  },
  
  {
    title: '廖淑芳 ',
    url:'/course?teacher=廖淑芳 '
  },
  {
    title: '台灣歷史小說選讀',
    url:'/course?course_name=台灣歷史小說選讀'
  },
  
  {
    title: '吳玫瑛 ',
    url:'/course?teacher=吳玫瑛 '
  },
  {
    title: '繪本專題：理論與實務',
    url:'/course?course_name=繪本專題：理論與實務'
  },
  
  {
    title: '李承機 ',
    url:'/course?teacher=李承機 '
  },
  {
    title: '日文讀解（二）',
    url:'/course?course_name=日文讀解（二）'
  },
  
  {
    title: '吳毓琪 ',
    url:'/course?teacher=吳毓琪 '
  },
  {
    title: '臺灣海洋文化與文學',
    url:'/course?course_name=臺灣海洋文化與文學'
  },
  
  {
    title: '陳玉峯 ',
    url:'/course?teacher=陳玉峯 '
  },
  {
    title: '印度佛教史',
    url:'/course?course_name=印度佛教史'
  },
  
  {
    title: '巫義淵 ',
    url:'/course?teacher=巫義淵 '
  },
  {
    title: '台語閱讀與寫作',
    url:'/course?course_name=台語閱讀與寫作'
  },
  
  {
    title: '蔡明諺 ',
    url:'/course?teacher=蔡明諺 '
  },
  {
    title: '日治時期小說選讀',
    url:'/course?course_name=日治時期小說選讀'
  },
  
  {
    title: '陳麗君 ',
    url:'/course?teacher=陳麗君 '
  },
  {
    title: '台語教材與教法',
    url:'/course?course_name=台語教材與教法'
  },
  
  {
    title: '蔡明諺 ',
    url:'/course?teacher=蔡明諺 '
  },
  {
    title: '台灣當代新詩選讀',
    url:'/course?course_name=台灣當代新詩選讀'
  },
  
  {
    title: '陳麗君 ',
    url:'/course?teacher=陳麗君 '
  },
  {
    title: '第二外語（日文）（四）',
    url:'/course?course_name=第二外語（日文）（四）'
  },
  
  {
    title: '楊芳枝 ',
    url:'/course?teacher=楊芳枝 '
  },
  {
    title: '文化研究',
    url:'/course?course_name=文化研究'
  },
  
  {
    title: '劉乃慈 ',
    url:'/course?teacher=劉乃慈 '
  },
  {
    title: '文學理論與批評（二）',
    url:'/course?course_name=文學理論與批評（二）'
  },
  
  {
    title: '呂毅新 ',
    url:'/course?teacher=呂毅新 '
  },
  {
    title: '兒童劇場創作與實務',
    url:'/course?course_name=兒童劇場創作與實務'
  },
  
  {
    title: '柳柳美 ',
    url:'/course?teacher=柳柳美 '
  },
  {
    title: '原住民排灣族語言特色與應用',
    url:'/course?course_name=原住民排灣族語言特色與應用'
  },
  
  {
    title: '劉乃慈 ',
    url:'/course?teacher=劉乃慈 '
  },
  {
    title: '性別意識與台灣文學建構',
    url:'/course?course_name=性別意識與台灣文學建構'
  },
  
  {
    title: '劉南芳 ',
    url:'/course?teacher=劉南芳 '
  },
  {
    title: '台語劇本導讀與習作',
    url:'/course?course_name=台語劇本導讀與習作'
  },
  
  {
    title: '劉南芳 ',
    url:'/course?teacher=劉南芳 '
  },
  {
    title: '劇本創作（二）',
    url:'/course?course_name=劇本創作（二）'
  },
  
  {
    title: '吳玫瑛 ',
    url:'/course?teacher=吳玫瑛 '
  },
  {
    title: '臺灣文學與童年',
    url:'/course?course_name=臺灣文學與童年'
  },
  
  {
    title: '吳毓琪 ',
    url:'/course?teacher=吳毓琪 '
  },
  {
    title: '日治時期臺灣女性文學與文化',
    url:'/course?course_name=日治時期臺灣女性文學與文化'
  },
  
  {
    title: '陳麗君 ',
    url:'/course?teacher=陳麗君 '
  },
  {
    title: '第二外語（日文）（二）',
    url:'/course?course_name=第二外語（日文）（二）'
  },
  
  {
    title: '陳麗君 ',
    url:'/course?teacher=陳麗君 '
  },
  {
    title: '語言學概論（二）',
    url:'/course?course_name=語言學概論（二）'
  },
  
  {
    title: '游勝冠 ',
    url:'/course?teacher=游勝冠 '
  },
  {
    title: '台灣文學史（二）',
    url:'/course?course_name=台灣文學史（二）'
  },
  
  {
    title: '吳毓琪 ',
    url:'/course?teacher=吳毓琪 '
  },
  {
    title: '臺灣旅遊文學',
    url:'/course?course_name=臺灣旅遊文學'
  },
  
  {
    title: '陳玉峯 ',
    url:'/course?teacher=陳玉峯 '
  },
  {
    title: '台灣的自然與傳統宗教',
    url:'/course?course_name=台灣的自然與傳統宗教'
  },
  
  {
    title: '廖淑芳 ',
    url:'/course?teacher=廖淑芳 '
  },
  {
    title: '現代小說（二）',
    url:'/course?course_name=現代小說（二）'
  },
  
  {
    title: '鍾秀梅 ',
    url:'/course?teacher=鍾秀梅 '
  },
  {
    title: '文化與社會基本議題',
    url:'/course?course_name=文化與社會基本議題'
  },
  
  {
    title: '曾昌發 ',
    url:'/course?teacher=曾昌發 '
  },
  {
    title: '台灣語言基礎及寫作（客語）（二）',
    url:'/course?course_name=台灣語言基礎及寫作（客語）（二）'
  },
  
  {
    title: '柳柳美 ',
    url:'/course?teacher=柳柳美 '
  },
  {
    title: '台灣語言基礎及寫作（原住民語）（二）',
    url:'/course?course_name=台灣語言基礎及寫作（原住民語）（二）'
  },
  
  {
    title: '蔣為文 ',
    url:'/course?teacher=蔣為文 '
  },
  {
    title: '台灣語言基礎及寫作（台語）（二）',
    url:'/course?course_name=台灣語言基礎及寫作（台語）（二）'
  },
  
  {
    title: '簡義明 ',
    url:'/course?teacher=簡義明 '
  },
  {
    title: '文學文本解讀',
    url:'/course?course_name=文學文本解讀'
  },
  
  {
    title: '吳毓琪 ',
    url:'/course?teacher=吳毓琪 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '吳毓庭 李約亨*',
    url:'/course?teacher=吳毓庭 李約亨*'
  },
  {
    title: '風力發電',
    url:'/course?course_name=風力發電'
  },
  
  {
    title: '周榮華 ',
    url:'/course?teacher=周榮華 '
  },
  {
    title: '仿生與智慧系統整合',
    url:'/course?course_name=仿生與智慧系統整合'
  },
  
  {
    title: '鄧維光 ',
    url:'/course?teacher=鄧維光 '
  },
  {
    title: '資料庫系統',
    url:'/course?course_name=資料庫系統'
  },
  
  {
    title: '侯廷偉*黃悅民 廖德祿 楊瑞珍 何明字 鄧維光 卿文龍 吳毓庭 王宗一 潘文峰 ',
    url:'/course?teacher=侯廷偉*黃悅民 廖德祿 楊瑞珍 何明字 鄧維光 卿文龍 吳毓庭 王宗一 潘文峰 '
  },
  {
    title: '專題研究（二）',
    url:'/course?course_name=專題研究（二）'
  },
  
  {
    title: '何明字 ',
    url:'/course?teacher=何明字 '
  },
  {
    title: '控制理論',
    url:'/course?course_name=控制理論'
  },
  
  {
    title: '侯廷偉 ',
    url:'/course?teacher=侯廷偉 '
  },
  {
    title: '微處理機與介面設計(含實習)',
    url:'/course?course_name=微處理機與介面設計(含實習)'
  },
  
  {
    title: '侯廷偉 ',
    url:'/course?teacher=侯廷偉 '
  },
  {
    title: '微處理機與介面設計(含實習)',
    url:'/course?course_name=微處理機與介面設計(含實習)'
  },
  
  {
    title: '陳嘉元*王明習 陳永裕 賴維祥 郭榮富 ',
    url:'/course?teacher=陳嘉元*王明習 陳永裕 賴維祥 郭榮富 '
  },
  {
    title: '機電創新實作（一）',
    url:'/course?course_name=機電創新實作（一）'
  },
  
  {
    title: '陳嘉元*王明習 陳永裕 賴維祥 郭榮富 ',
    url:'/course?teacher=陳嘉元*王明習 陳永裕 賴維祥 郭榮富 '
  },
  {
    title: '機電創新實作（一）',
    url:'/course?course_name=機電創新實作（一）'
  },
  
  {
    title: '陳昭羽 ',
    url:'/course?teacher=陳昭羽 '
  },
  {
    title: '機率與統計',
    url:'/course?course_name=機率與統計'
  },
  
  {
    title: '侯廷偉 何明字 周榮華*陳蓉珊 王明習 ',
    url:'/course?teacher=侯廷偉 何明字 周榮華*陳蓉珊 王明習 '
  },
  {
    title: '機器人原理',
    url:'/course?course_name=機器人原理'
  },
  
  {
    title: '李哲明 ',
    url:'/course?teacher=李哲明 '
  },
  {
    title: '高等電磁學',
    url:'/course?course_name=高等電磁學'
  },
  
  {
    title: '趙隆山 ',
    url:'/course?teacher=趙隆山 '
  },
  {
    title: '熱傳學',
    url:'/course?course_name=熱傳學'
  },
  
  {
    title: '吳毓庭 ',
    url:'/course?teacher=吳毓庭 '
  },
  {
    title: '數值方法',
    url:'/course?course_name=數值方法'
  },
  
  {
    title: '廖德祿 ',
    url:'/course?teacher=廖德祿 '
  },
  {
    title: '電子學實驗',
    url:'/course?course_name=電子學實驗'
  },
  
  {
    title: '廖德祿 ',
    url:'/course?teacher=廖德祿 '
  },
  {
    title: '電子學實驗',
    url:'/course?course_name=電子學實驗'
  },
  
  {
    title: '王明習 ',
    url:'/course?teacher=王明習 '
  },
  {
    title: '邏輯設計',
    url:'/course?course_name=邏輯設計'
  },
  
  {
    title: '侯廷偉 ',
    url:'/course?teacher=侯廷偉 '
  },
  {
    title: '離散數學',
    url:'/course?course_name=離散數學'
  },
  
  {
    title: '陳昭羽 ',
    url:'/course?teacher=陳昭羽 '
  },
  {
    title: '電路分析',
    url:'/course?course_name=電路分析'
  },
  
  {
    title: '卿文龍 ',
    url:'/course?teacher=卿文龍 '
  },
  {
    title: '電子學',
    url:'/course?course_name=電子學'
  },
  
  {
    title: '周榮華 ',
    url:'/course?teacher=周榮華 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '侯廷偉*林裕城 周榮華 ',
    url:'/course?teacher=侯廷偉*林裕城 周榮華 '
  },
  {
    title: '工程科學暨創新概論',
    url:'/course?course_name=工程科學暨創新概論'
  },
  
  {
    title: '廖德祿 ',
    url:'/course?teacher=廖德祿 '
  },
  {
    title: '線性代數',
    url:'/course?course_name=線性代數'
  },
  
  {
    title: '侯廷偉 ',
    url:'/course?teacher=侯廷偉 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '王宗一 ',
    url:'/course?teacher=王宗一 '
  },
  {
    title: '程式設計',
    url:'/course?course_name=程式設計'
  },
  
  {
    title: '李輝煌 ',
    url:'/course?teacher=李輝煌 '
  },
  {
    title: '工程動力學',
    url:'/course?course_name=工程動力學'
  },
  
  {
    title: '陳蓉珊 ',
    url:'/course?teacher=陳蓉珊 '
  },
  {
    title: '材料力學（一）',
    url:'/course?course_name=材料力學（一）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '舒宇宸 ',
    url:'/course?teacher=舒宇宸 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '楊毅 陳炳志*',
    url:'/course?teacher=楊毅 陳炳志*'
  },
  {
    title: '太空科學與工程導論',
    url:'/course?course_name=太空科學與工程導論'
  },
  
  {
    title: '蔡錦俊 ',
    url:'/course?teacher=蔡錦俊 '
  },
  {
    title: '專題（二）',
    url:'/course?course_name=專題（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '近代光學實驗',
    url:'/course?course_name=近代光學實驗'
  },
  
  {
    title: '陳則銘 ',
    url:'/course?teacher=陳則銘 '
  },
  {
    title: '前沿物理發展介紹',
    url:'/course?course_name=前沿物理發展介紹'
  },
  
  {
    title: '張為民 ',
    url:'/course?teacher=張為民 '
  },
  {
    title: '統計力學導論',
    url:'/course?course_name=統計力學導論'
  },
  
  {
    title: '吳忠霖*',
    url:'/course?teacher=吳忠霖*'
  },
  {
    title: '近代物理實驗（一）',
    url:'/course?course_name=近代物理實驗（一）'
  },
  
  {
    title: '吳忠霖*',
    url:'/course?teacher=吳忠霖*'
  },
  {
    title: '近代物理實驗（一）',
    url:'/course?course_name=近代物理實驗（一）'
  },
  
  {
    title: '陳泳帆 ',
    url:'/course?teacher=陳泳帆 '
  },
  {
    title: '量子物理（二）',
    url:'/course?course_name=量子物理（二）'
  },
  
  {
    title: '蔡錦俊 ',
    url:'/course?teacher=蔡錦俊 '
  },
  {
    title: '近代光學',
    url:'/course?course_name=近代光學'
  },
  
  {
    title: '陳家駒 ',
    url:'/course?teacher=陳家駒 '
  },
  {
    title: '近代物理概論',
    url:'/course?course_name=近代物理概論'
  },
  
  {
    title: '盧炎田 ',
    url:'/course?teacher=盧炎田 '
  },
  {
    title: '物理數學（三）',
    url:'/course?course_name=物理數學（三）'
  },
  
  {
    title: '許祖斌 ',
    url:'/course?teacher=許祖斌 '
  },
  {
    title: '力學（二）',
    url:'/course?course_name=力學（二）'
  },
  
  {
    title: '黃榮俊 ',
    url:'/course?teacher=黃榮俊 '
  },
  {
    title: '電磁學（二）',
    url:'/course?course_name=電磁學（二）'
  },
  
  {
    title: '陳則銘 ',
    url:'/course?teacher=陳則銘 '
  },
  {
    title: '電磁實驗',
    url:'/course?course_name=電磁實驗'
  },
  
  {
    title: '陳則銘 ',
    url:'/course?teacher=陳則銘 '
  },
  {
    title: '電磁實驗',
    url:'/course?course_name=電磁實驗'
  },
  
  {
    title: '陳則銘 ',
    url:'/course?teacher=陳則銘 '
  },
  {
    title: '電子學實驗（二）',
    url:'/course?course_name=電子學實驗（二）'
  },
  
  {
    title: '陳則銘 ',
    url:'/course?teacher=陳則銘 '
  },
  {
    title: '電子學實驗（二）',
    url:'/course?course_name=電子學實驗（二）'
  },
  
  {
    title: '羅光耀 ',
    url:'/course?teacher=羅光耀 '
  },
  {
    title: '電子學（二）',
    url:'/course?course_name=電子學（二）'
  },
  
  {
    title: '許瑞榮 ',
    url:'/course?teacher=許瑞榮 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '周忠憲 ',
    url:'/course?teacher=周忠憲 '
  },
  {
    title: '物理數學（一）',
    url:'/course?course_name=物理數學（一）'
  },
  
  {
    title: '吳忠霖 ',
    url:'/course?teacher=吳忠霖 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '吳欣倫 ',
    url:'/course?teacher=吳欣倫 '
  },
  {
    title: '普通化學實驗（二）',
    url:'/course?course_name=普通化學實驗（二）'
  },
  
  {
    title: '黃福永*林弘萍 吳欣倫 ',
    url:'/course?teacher=黃福永*林弘萍 吳欣倫 '
  },
  {
    title: '普通化學（二）',
    url:'/course?course_name=普通化學（二）'
  },
  
  {
    title: '羅光耀 ',
    url:'/course?teacher=羅光耀 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '洪英志 ',
    url:'/course?teacher=洪英志 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '張文芸*高綺吟 ',
    url:'/course?teacher=張文芸*高綺吟 '
  },
  {
    title: '綜合臨床護理學實習（二）',
    url:'/course?course_name=綜合臨床護理學實習（二）'
  },
  
  {
    title: '張文芸 ',
    url:'/course?teacher=張文芸 '
  },
  {
    title: '論文寫作',
    url:'/course?course_name=論文寫作'
  },
  
  {
    title: '王靜枝*胡芳文 ',
    url:'/course?teacher=王靜枝*胡芳文 '
  },
  {
    title: '臨床護理專業選習',
    url:'/course?course_name=臨床護理專業選習'
  },
  
  {
    title: '張瑩如 顏妙芬 王維芳 ',
    url:'/course?teacher=張瑩如 顏妙芬 王維芳 '
  },
  {
    title: '護理行政實習',
    url:'/course?course_name=護理行政實習'
  },
  
  {
    title: '馬先芝 張瑩如 顏妙芬*黃維珍 ',
    url:'/course?teacher=馬先芝 張瑩如 顏妙芬*黃維珍 '
  },
  {
    title: '護理行政概論',
    url:'/course?course_name=護理行政概論'
  },
  
  {
    title: '王瑤華 張瑩如*',
    url:'/course?teacher=王瑤華 張瑩如*'
  },
  {
    title: '專業問題研討',
    url:'/course?course_name=專業問題研討'
  },
  
  {
    title: '郭耀昌 ',
    url:'/course?teacher=郭耀昌 '
  },
  {
    title: '職業安全衛生',
    url:'/course?course_name=職業安全衛生'
  },
  
  {
    title: '張文芸*盧豐華 ',
    url:'/course?teacher=張文芸*盧豐華 '
  },
  {
    title: '老人護理',
    url:'/course?course_name=老人護理'
  },
  
  {
    title: '王瑤華*賴維淑 簡偉明 ',
    url:'/course?teacher=王瑤華*賴維淑 簡偉明 '
  },
  {
    title: '生命倫理與護理',
    url:'/course?course_name=生命倫理與護理'
  },
  
  {
    title: '林靜蘭*許惠珠 ',
    url:'/course?teacher=林靜蘭*許惠珠 '
  },
  {
    title: '綜合臨床護理學實習（一）',
    url:'/course?course_name=綜合臨床護理學實習（一）'
  },
  
  {
    title: '張文芸*方素瓔 陳幸眉 賴維淑 ',
    url:'/course?teacher=張文芸*方素瓔 陳幸眉 賴維淑 '
  },
  {
    title: '成人護理學實習（二）',
    url:'/course?course_name=成人護理學實習（二）'
  },
  
  {
    title: '張文芸*柯乃熒 方素瓔 陳幸眉 賴維淑 陳炯瑜 劉明煇 吳俊良 黃福進 曾堯麟 林毅志 邱威鑫 謝棟漢 ',
    url:'/course?teacher=張文芸*柯乃熒 方素瓔 陳幸眉 賴維淑 陳炯瑜 劉明煇 吳俊良 黃福進 曾堯麟 林毅志 邱威鑫 謝棟漢 '
  },
  {
    title: '成人護理學（二）',
    url:'/course?course_name=成人護理學（二）'
  },
  
  {
    title: '黃美智 馮瑞鶯 高綺吟 陳宜 ',
    url:'/course?teacher=黃美智 馮瑞鶯 高綺吟 陳宜 '
  },
  {
    title: '兒科護理學實習',
    url:'/course?course_name=兒科護理學實習'
  },
  
  {
    title: '黃美智 馮瑞鶯 高綺吟*陳建旭 林啟禎 林其和 劉清泉 吳俊明 邱元佑 楊燿榮 杜伊芳 周言穎 徐碧真 ',
    url:'/course?teacher=黃美智 馮瑞鶯 高綺吟*陳建旭 林啟禎 林其和 劉清泉 吳俊明 邱元佑 楊燿榮 杜伊芳 周言穎 徐碧真 '
  },
  {
    title: '兒科護理學',
    url:'/course?course_name=兒科護理學'
  },
  
  {
    title: '陳幸眉 ',
    url:'/course?teacher=陳幸眉 '
  },
  {
    title: '跨文化護理臨床見習',
    url:'/course?course_name=跨文化護理臨床見習'
  },
  
  {
    title: '紀志賢 林志豪*許以霖 施欣怡 何宗憲 王世敏 李忠勳 洪明原 莊佳璋*',
    url:'/course?teacher=紀志賢 林志豪*許以霖 施欣怡 何宗憲 王世敏 李忠勳 洪明原 莊佳璋*'
  },
  {
    title: '急診醫學',
    url:'/course?course_name=急診醫學'
  },
  
  {
    title: '王亮懿 ',
    url:'/course?teacher=王亮懿 '
  },
  {
    title: '生物統計學',
    url:'/course?course_name=生物統計學'
  },
  
  {
    title: '簡偉明*',
    url:'/course?teacher=簡偉明*'
  },
  {
    title: '藥理學',
    url:'/course?course_name=藥理學'
  },
  
  {
    title: '王瑤華*林梅鳳 許玉雲 林靜蘭 鄭雅方 謝曉燕 ',
    url:'/course?teacher=王瑤華*林梅鳳 許玉雲 林靜蘭 鄭雅方 謝曉燕 '
  },
  {
    title: '基本護理學實習',
    url:'/course?course_name=基本護理學實習'
  },
  
  {
    title: '王瑤華*林梅鳳 許玉雲 林靜蘭 謝曉燕 ',
    url:'/course?teacher=王瑤華*林梅鳳 許玉雲 林靜蘭 謝曉燕 '
  },
  {
    title: '基本護理學',
    url:'/course?course_name=基本護理學'
  },
  
  {
    title: '王瑤華*',
    url:'/course?teacher=王瑤華*'
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '王琪珍*',
    url:'/course?teacher=王琪珍*'
  },
  {
    title: '健康促進與健康生活營造',
    url:'/course?course_name=健康促進與健康生活營造'
  },
  
  {
    title: '游一龍*郭乃文 黃惠玲 余睿羚 ',
    url:'/course?teacher=游一龍*郭乃文 黃惠玲 余睿羚 '
  },
  {
    title: '心理學',
    url:'/course?course_name=心理學'
  },
  
  {
    title: '莊季瑛*楊尚訓 陳珮君 張雅雯 ',
    url:'/course?teacher=莊季瑛*楊尚訓 陳珮君 張雅雯 '
  },
  {
    title: '生理學',
    url:'/course?course_name=生理學'
  },
  
  {
    title: '周承珍*賴維淑 ',
    url:'/course?teacher=周承珍*賴維淑 '
  },
  {
    title: '人類發展學（含實習）',
    url:'/course?course_name=人類發展學（含實習）'
  },
  
  {
    title: '馮瑞鶯*高綺吟 賴維淑 ',
    url:'/course?teacher=馮瑞鶯*高綺吟 賴維淑 '
  },
  {
    title: '人類發展學（含實習）',
    url:'/course?course_name=人類發展學（含實習）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '翁嘉聲 ',
    url:'/course?teacher=翁嘉聲 '
  },
  {
    title: '史學專題講座',
    url:'/course?course_name=史學專題講座'
  },
  
  {
    title: '李鑑慧 ',
    url:'/course?teacher=李鑑慧 '
  },
  {
    title: '社會學習領域概論',
    url:'/course?course_name=社會學習領域概論'
  },
  
  {
    title: '鄭　梓 ',
    url:'/course?teacher=鄭　梓 '
  },
  {
    title: '新聞評論',
    url:'/course?course_name=新聞評論'
  },
  
  {
    title: '李鑑慧 ',
    url:'/course?teacher=李鑑慧 '
  },
  {
    title: '「世紀末」英國社會與文化',
    url:'/course?course_name=「世紀末」英國社會與文化'
  },
  
  {
    title: '鄭　梓 ',
    url:'/course?teacher=鄭　梓 '
  },
  {
    title: '影視史學與圖像傳播（二）',
    url:'/course?course_name=影視史學與圖像傳播（二）'
  },
  
  {
    title: '翁嘉聲 ',
    url:'/course?teacher=翁嘉聲 '
  },
  {
    title: '古代希臘史776 BCE-323 BCE',
    url:'/course?course_name=古代希臘史776 BCE-323 BCE'
  },
  
  {
    title: '江達智 ',
    url:'/course?teacher=江達智 '
  },
  {
    title: '中國喪葬史',
    url:'/course?course_name=中國喪葬史'
  },
  
  {
    title: '許守泯 ',
    url:'/course?teacher=許守泯 '
  },
  {
    title: '遼金的社會經濟與文化',
    url:'/course?course_name=遼金的社會經濟與文化'
  },
  
  {
    title: '涂宗呈 ',
    url:'/course?teacher=涂宗呈 '
  },
  {
    title: '考古發現所見的中國中古史',
    url:'/course?course_name=考古發現所見的中國中古史'
  },
  
  {
    title: '劉益昌 ',
    url:'/course?teacher=劉益昌 '
  },
  {
    title: '臺灣考古學',
    url:'/course?course_name=臺灣考古學'
  },
  
  {
    title: '楊尹瑄 ',
    url:'/course?teacher=楊尹瑄 '
  },
  {
    title: '法國文化與藝術史（二）',
    url:'/course?course_name=法國文化與藝術史（二）'
  },
  
  {
    title: '許守泯 ',
    url:'/course?teacher=許守泯 '
  },
  {
    title: '史學名著導讀',
    url:'/course?course_name=史學名著導讀'
  },
  
  {
    title: '陳文松 ',
    url:'/course?teacher=陳文松 '
  },
  {
    title: '台灣現代史',
    url:'/course?course_name=台灣現代史'
  },
  
  {
    title: '鄭永常 ',
    url:'/course?teacher=鄭永常 '
  },
  {
    title: '東南亞華人史',
    url:'/course?course_name=東南亞華人史'
  },
  
  {
    title: '王文霞 ',
    url:'/course?teacher=王文霞 '
  },
  {
    title: '英國近代史',
    url:'/course?course_name=英國近代史'
  },
  
  {
    title: '顧　盼 ',
    url:'/course?teacher=顧　盼 '
  },
  {
    title: '日本視覺藝術史',
    url:'/course?course_name=日本視覺藝術史'
  },
  
  {
    title: '張勝柏 ',
    url:'/course?teacher=張勝柏 '
  },
  {
    title: '生態史',
    url:'/course?course_name=生態史'
  },
  
  {
    title: '高淑媛 ',
    url:'/course?teacher=高淑媛 '
  },
  {
    title: '日治時期臺灣史（二）',
    url:'/course?course_name=日治時期臺灣史（二）'
  },
  
  {
    title: '謝美娥 ',
    url:'/course?teacher=謝美娥 '
  },
  {
    title: '十八世紀新清帝國的圖像表述',
    url:'/course?course_name=十八世紀新清帝國的圖像表述'
  },
  
  {
    title: '蔡幸娟 ',
    url:'/course?teacher=蔡幸娟 '
  },
  {
    title: '魏晉南北朝史（二）',
    url:'/course?course_name=魏晉南北朝史（二）'
  },
  
  {
    title: '林長寬 ',
    url:'/course?teacher=林長寬 '
  },
  {
    title: '初級阿拉伯文（二）',
    url:'/course?course_name=初級阿拉伯文（二）'
  },
  
  {
    title: '何培夫 ',
    url:'/course?teacher=何培夫 '
  },
  {
    title: '歷史文物的管理與研究（二）',
    url:'/course?course_name=歷史文物的管理與研究（二）'
  },
  
  {
    title: '蕭瓊瑞 ',
    url:'/course?teacher=蕭瓊瑞 '
  },
  {
    title: '台灣美術史（二）',
    url:'/course?course_name=台灣美術史（二）'
  },
  
  {
    title: '陳計堯 ',
    url:'/course?teacher=陳計堯 '
  },
  {
    title: '史學理論與方法（二）',
    url:'/course?course_name=史學理論與方法（二）'
  },
  
  {
    title: '江達智 ',
    url:'/course?teacher=江達智 '
  },
  {
    title: '中國上古史（二）',
    url:'/course?course_name=中國上古史（二）'
  },
  
  {
    title: '翁嘉聲 ',
    url:'/course?teacher=翁嘉聲 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '高淑媛 ',
    url:'/course?teacher=高淑媛 '
  },
  {
    title: '台灣史（二）',
    url:'/course?course_name=台灣史（二）'
  },
  
  {
    title: '王健文 ',
    url:'/course?teacher=王健文 '
  },
  {
    title: '中國通史（二）',
    url:'/course?course_name=中國通史（二）'
  },
  
  {
    title: '林長寬 ',
    url:'/course?teacher=林長寬 '
  },
  {
    title: '世界文化史（二）',
    url:'/course?course_name=世界文化史（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '蘇義洲 ',
    url:'/course?teacher=蘇義洲 '
  },
  {
    title: '證券交易法',
    url:'/course?course_name=證券交易法'
  },
  
  {
    title: '李宏志 ',
    url:'/course?teacher=李宏志 '
  },
  {
    title: '國際財務管理',
    url:'/course?course_name=國際財務管理'
  },
  
  {
    title: '楊明宗 ',
    url:'/course?teacher=楊明宗 '
  },
  {
    title: '統計實務',
    url:'/course?course_name=統計實務'
  },
  
  {
    title: '鄭順林 ',
    url:'/course?teacher=鄭順林 '
  },
  {
    title: '巨量資料分析',
    url:'/course?course_name=巨量資料分析'
  },
  
  {
    title: '陳奕奇 ',
    url:'/course?teacher=陳奕奇 '
  },
  {
    title: '總體經濟學',
    url:'/course?course_name=總體經濟學'
  },
  
  {
    title: '李俊毅 ',
    url:'/course?teacher=李俊毅 '
  },
  {
    title: '統計調查實務',
    url:'/course?course_name=統計調查實務'
  },
  
  {
    title: '康信鴻 ',
    url:'/course?teacher=康信鴻 '
  },
  {
    title: '國際金融',
    url:'/course?course_name=國際金融'
  },
  
  {
    title: '張升懋 ',
    url:'/course?teacher=張升懋 '
  },
  {
    title: '財務統計',
    url:'/course?course_name=財務統計'
  },
  
  {
    title: '陳瑞彬 ',
    url:'/course?teacher=陳瑞彬 '
  },
  {
    title: '機器學習',
    url:'/course?course_name=機器學習'
  },
  
  {
    title: '吳宗正 ',
    url:'/course?teacher=吳宗正 '
  },
  {
    title: '投資分析',
    url:'/course?course_name=投資分析'
  },
  
  {
    title: '蘇佩芳 ',
    url:'/course?teacher=蘇佩芳 '
  },
  {
    title: '類別資料分析',
    url:'/course?course_name=類別資料分析'
  },
  
  {
    title: '詹世煌 ',
    url:'/course?teacher=詹世煌 '
  },
  {
    title: '多變量分析',
    url:'/course?course_name=多變量分析'
  },
  
  {
    title: '許秀麗 ',
    url:'/course?teacher=許秀麗 '
  },
  {
    title: '保險數學',
    url:'/course?course_name=保險數學'
  },
  
  {
    title: '張欣民 ',
    url:'/course?teacher=張欣民 '
  },
  {
    title: '統計軟體與繪圖',
    url:'/course?course_name=統計軟體與繪圖'
  },
  
  {
    title: '趙昌泰 ',
    url:'/course?teacher=趙昌泰 '
  },
  {
    title: '抽樣調查',
    url:'/course?course_name=抽樣調查'
  },
  
  {
    title: '潘浙楠 ',
    url:'/course?teacher=潘浙楠 '
  },
  {
    title: '品質管制',
    url:'/course?course_name=品質管制'
  },
  
  {
    title: '施坤宏 ',
    url:'/course?teacher=施坤宏 '
  },
  {
    title: '會計學（二）',
    url:'/course?course_name=會計學（二）'
  },
  
  {
    title: '張升懋 ',
    url:'/course?teacher=張升懋 '
  },
  {
    title: '迴歸分析',
    url:'/course?course_name=迴歸分析'
  },
  
  {
    title: '李國榮 ',
    url:'/course?teacher=李國榮 '
  },
  {
    title: '數理統計（二）',
    url:'/course?course_name=數理統計（二）'
  },
  
  {
    title: '李政德 ',
    url:'/course?teacher=李政德 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '郭彥廉 ',
    url:'/course?teacher=郭彥廉 '
  },
  {
    title: '經濟學（二）',
    url:'/course?course_name=經濟學（二）'
  },
  
  {
    title: '任眉眉 ',
    url:'/course?teacher=任眉眉 '
  },
  {
    title: '線性代數（二）',
    url:'/course?course_name=線性代數（二）'
  },
  
  {
    title: '陳瑞彬 ',
    url:'/course?teacher=陳瑞彬 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '溫敏杰 ',
    url:'/course?teacher=溫敏杰 '
  },
  {
    title: '統計學（二）',
    url:'/course?course_name=統計學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '西村泰太郎 ',
    url:'/course?teacher=西村泰太郎 '
  },
  {
    title: '電動力學與電漿物理之數值模擬',
    url:'/course?course_name=電動力學與電漿物理之數值模擬'
  },
  
  {
    title: '西村泰太郎*',
    url:'/course?teacher=西村泰太郎*'
  },
  {
    title: '混沌與非平衡統計力學',
    url:'/course?course_name=混沌與非平衡統計力學'
  },
  
  {
    title: '田思齊 ',
    url:'/course?teacher=田思齊 '
  },
  {
    title: '前饋控制',
    url:'/course?course_name=前饋控制'
  },
  
  {
    title: '吳馬丁 ',
    url:'/course?teacher=吳馬丁 '
  },
  {
    title: '工程研究的科學信息收集和處理',
    url:'/course?course_name=工程研究的科學信息收集和處理'
  },
  
  {
    title: '吳馬丁 ',
    url:'/course?teacher=吳馬丁 '
  },
  {
    title: '工程研究的科學信息收集和處理',
    url:'/course?course_name=工程研究的科學信息收集和處理'
  },
  
  {
    title: '朱銘祥 ',
    url:'/course?teacher=朱銘祥 '
  },
  {
    title: '適應控制',
    url:'/course?course_name=適應控制'
  },
  
  {
    title: '吳馬丁 ',
    url:'/course?teacher=吳馬丁 '
  },
  {
    title: '最佳控制',
    url:'/course?course_name=最佳控制'
  },
  
  {
    title: '蔡清元 ',
    url:'/course?teacher=蔡清元 '
  },
  {
    title: '非線性控制及其應用',
    url:'/course?course_name=非線性控制及其應用'
  },
  
  {
    title: '蔡南全 ',
    url:'/course?teacher=蔡南全 '
  },
  {
    title: '感測器與致動器',
    url:'/course?course_name=感測器與致動器'
  },
  
  {
    title: '王俊志 ',
    url:'/course?teacher=王俊志 '
  },
  {
    title: '工具機動力學',
    url:'/course?course_name=工具機動力學'
  },
  
  {
    title: '鍾震桂 ',
    url:'/course?teacher=鍾震桂 '
  },
  {
    title: '奈米技術概論',
    url:'/course?course_name=奈米技術概論'
  },
  
  {
    title: '李榮顯 ',
    url:'/course?teacher=李榮顯 '
  },
  {
    title: '塑性加工學',
    url:'/course?course_name=塑性加工學'
  },
  
  {
    title: '林震銘 ',
    url:'/course?teacher=林震銘 '
  },
  {
    title: '雷射加工系統導論',
    url:'/course?course_name=雷射加工系統導論'
  },
  
  {
    title: '黃才烱 ',
    url:'/course?teacher=黃才烱 '
  },
  {
    title: '碰撞人偶的發展與應用',
    url:'/course?course_name=碰撞人偶的發展與應用'
  },
  
  {
    title: '陳家豪 ',
    url:'/course?teacher=陳家豪 '
  },
  {
    title: '田口式品質設計方法',
    url:'/course?course_name=田口式品質設計方法'
  },
  
  {
    title: '陳家豪 ',
    url:'/course?teacher=陳家豪 '
  },
  {
    title: '產品設計方法',
    url:'/course?course_name=產品設計方法'
  },
  
  {
    title: '蔡明俊 ',
    url:'/course?teacher=蔡明俊 '
  },
  {
    title: '機器視覺',
    url:'/course?course_name=機器視覺'
  },
  
  {
    title: '蔡明俊 ',
    url:'/course?teacher=蔡明俊 '
  },
  {
    title: '機器人系統設計',
    url:'/course?course_name=機器人系統設計'
  },
  
  {
    title: '藍兆杰 ',
    url:'/course?teacher=藍兆杰 '
  },
  {
    title: '高等動力學',
    url:'/course?course_name=高等動力學'
  },
  
  {
    title: '陳重德 ',
    url:'/course?teacher=陳重德 '
  },
  {
    title: '壓電材料力學及智能材料應用',
    url:'/course?course_name=壓電材料力學及智能材料應用'
  },
  
  {
    title: '屈子正 ',
    url:'/course?teacher=屈子正 '
  },
  {
    title: '破壞力學',
    url:'/course?course_name=破壞力學'
  },
  
  {
    title: '李永春 ',
    url:'/course?teacher=李永春 '
  },
  {
    title: '工程電磁學',
    url:'/course?course_name=工程電磁學'
  },
  
  {
    title: '陳寒濤 ',
    url:'/course?teacher=陳寒濤 '
  },
  {
    title: '數值熱傳學',
    url:'/course?course_name=數值熱傳學'
  },
  
  {
    title: '何清政 ',
    url:'/course?teacher=何清政 '
  },
  {
    title: '高等計算流體力學',
    url:'/course?course_name=高等計算流體力學'
  },
  
  {
    title: '吳俊煌 ',
    url:'/course?teacher=吳俊煌 '
  },
  {
    title: '塑膠流變原理與應用',
    url:'/course?course_name=塑膠流變原理與應用'
  },
  
  {
    title: '陳嘉元 ',
    url:'/course?teacher=陳嘉元 '
  },
  {
    title: '生物流體力學',
    url:'/course?course_name=生物流體力學'
  },
  
  {
    title: '楊天祥 ',
    url:'/course?teacher=楊天祥 '
  },
  {
    title: '流體力學導論',
    url:'/course?course_name=流體力學導論'
  },
  
  {
    title: '吳明勳 ',
    url:'/course?teacher=吳明勳 '
  },
  {
    title: '燃燒學',
    url:'/course?course_name=燃燒學'
  },
  
  {
    title: '陳朝光 ',
    url:'/course?teacher=陳朝光 '
  },
  {
    title: '熱對流學',
    url:'/course?course_name=熱對流學'
  },
  
  {
    title: '林仁輝 ',
    url:'/course?teacher=林仁輝 '
  },
  {
    title: '微機電系統磨潤研究',
    url:'/course?course_name=微機電系統磨潤研究'
  },
  
  {
    title: '黃聖杰 ',
    url:'/course?teacher=黃聖杰 '
  },
  {
    title: '高等高分子材料加工',
    url:'/course?course_name=高等高分子材料加工'
  },
  
  {
    title: '李汶樺 陳嘉元*',
    url:'/course?teacher=李汶樺 陳嘉元*'
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '林啟倫 ',
    url:'/course?teacher=林啟倫 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '羅裕龍 ',
    url:'/course?teacher=羅裕龍 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '邱顯堂 ',
    url:'/course?teacher=邱顯堂 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '林仁輝 ',
    url:'/course?teacher=林仁輝 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '邱顯堂 ',
    url:'/course?teacher=邱顯堂 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '林仁輝 ',
    url:'/course?teacher=林仁輝 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '陳政宏 謝旻甫*',
    url:'/course?teacher=陳政宏 謝旻甫*'
  },
  {
    title: '船舶與機電設計實務（二）',
    url:'/course?course_name=船舶與機電設計實務（二）'
  },
  
  {
    title: '李坤洲 ',
    url:'/course?teacher=李坤洲 '
  },
  {
    title: '資訊與通訊概論',
    url:'/course?course_name=資訊與通訊概論'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '陳嘉元*王明習 陳永裕 賴維祥 郭榮富 ',
    url:'/course?teacher=陳嘉元*王明習 陳永裕 賴維祥 郭榮富 '
  },
  {
    title: '機電創新實作（一）',
    url:'/course?course_name=機電創新實作（一）'
  },
  
  {
    title: '陳嘉元*王明習 陳永裕 賴維祥 郭榮富 ',
    url:'/course?teacher=陳嘉元*王明習 陳永裕 賴維祥 郭榮富 '
  },
  {
    title: '機電創新實作（一）',
    url:'/course?course_name=機電創新實作（一）'
  },
  
  {
    title: '沈聖智 ',
    url:'/course?teacher=沈聖智 '
  },
  {
    title: '論文（二）',
    url:'/course?course_name=論文（二）'
  },
  
  {
    title: '李建興 ',
    url:'/course?teacher=李建興 '
  },
  {
    title: '電機機械',
    url:'/course?course_name=電機機械'
  },
  
  {
    title: '謝旻甫 ',
    url:'/course?teacher=謝旻甫 '
  },
  {
    title: '機電系統整合',
    url:'/course?course_name=機電系統整合'
  },
  
  {
    title: '李建興 ',
    url:'/course?teacher=李建興 '
  },
  {
    title: '電力系統',
    url:'/course?course_name=電力系統'
  },
  
  {
    title: '趙儒民 陳政宏 謝旻甫 沈聖智*',
    url:'/course?teacher=趙儒民 陳政宏 謝旻甫 沈聖智*'
  },
  {
    title: '綜合實驗',
    url:'/course?course_name=綜合實驗'
  },
  
  {
    title: '陳永裕 ',
    url:'/course?teacher=陳永裕 '
  },
  {
    title: '系統設計理論',
    url:'/course?course_name=系統設計理論'
  },
  
  {
    title: '黃正弘 ',
    url:'/course?teacher=黃正弘 '
  },
  {
    title: '船舶輔機',
    url:'/course?course_name=船舶輔機'
  },
  
  {
    title: '林宇銜 ',
    url:'/course?teacher=林宇銜 '
  },
  {
    title: '船舶阻力與推進',
    url:'/course?course_name=船舶阻力與推進'
  },
  
  {
    title: '吳鴻文 ',
    url:'/course?teacher=吳鴻文 '
  },
  {
    title: '造機設計原理',
    url:'/course?course_name=造機設計原理'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '黃正能 ',
    url:'/course?teacher=黃正能 '
  },
  {
    title: '自動控制',
    url:'/course?course_name=自動控制'
  },
  
  {
    title: '陳長鈕 ',
    url:'/course?teacher=陳長鈕 '
  },
  {
    title: '數值分析',
    url:'/course?course_name=數值分析'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '邵揮洲 ',
    url:'/course?teacher=邵揮洲 '
  },
  {
    title: '流體力學（一）',
    url:'/course?course_name=流體力學（一）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '體育（四）',
    url:'/course?course_name=體育（四）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '林宇銜 ',
    url:'/course?teacher=林宇銜 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '趙儒民 ',
    url:'/course?teacher=趙儒民 '
  },
  {
    title: '材料力學',
    url:'/course?course_name=材料力學'
  },
  
  {
    title: '李坤洲 ',
    url:'/course?teacher=李坤洲 '
  },
  {
    title: 'C++程式語言設計',
    url:'/course?course_name=C++程式語言設計'
  },
  
  {
    title: '涂季平 ',
    url:'/course?teacher=涂季平 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '體育（二）',
    url:'/course?course_name=體育（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '林忠宏 ',
    url:'/course?teacher=林忠宏 '
  },
  {
    title: '應用力學（一）',
    url:'/course?course_name=應用力學（一）'
  },
  
  {
    title: '張烈錚 ',
    url:'/course?teacher=張烈錚 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '張烈錚 ',
    url:'/course?teacher=張烈錚 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '舒宇宸 ',
    url:'/course?teacher=舒宇宸 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '陳政宏 沈聖智*',
    url:'/course?teacher=陳政宏 沈聖智*'
  },
  {
    title: '系統及船舶機電概論',
    url:'/course?course_name=系統及船舶機電概論'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基礎國文（二）',
    url:'/course?course_name=基礎國文（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '專題論文',
    url:'/course?course_name=專題論文'
  },
  
  {
    title: '平思寧 ',
    url:'/course?teacher=平思寧 '
  },
  {
    title: '內戰與國際關係',
    url:'/course?course_name=內戰與國際關係'
  },
  
  {
    title: '丁仁方 ',
    url:'/course?teacher=丁仁方 '
  },
  {
    title: '專題研究：比較地方治理',
    url:'/course?course_name=專題研究：比較地方治理'
  },
  
  {
    title: '蔣麗君*楊永年 鍾兆真 ',
    url:'/course?teacher=蔣麗君*楊永年 鍾兆真 '
  },
  {
    title: '政策實務',
    url:'/course?course_name=政策實務'
  },
  
  {
    title: '李國維 ',
    url:'/course?teacher=李國維 '
  },
  {
    title: '中國政治思想史',
    url:'/course?course_name=中國政治思想史'
  },
  
  {
    title: '王宏仁 ',
    url:'/course?teacher=王宏仁 '
  },
  {
    title: '中共外交政策',
    url:'/course?course_name=中共外交政策'
  },
  
  {
    title: '陳欣之 ',
    url:'/course?teacher=陳欣之 '
  },
  {
    title: '國際關係史（二）',
    url:'/course?course_name=國際關係史（二）'
  },
  
  {
    title: '王奕婷 ',
    url:'/course?teacher=王奕婷 '
  },
  {
    title: '比較民主制度',
    url:'/course?course_name=比較民主制度'
  },
  
  {
    title: '王宏仁 ',
    url:'/course?teacher=王宏仁 '
  },
  {
    title: '美國政府與政治',
    url:'/course?course_name=美國政府與政治'
  },
  
  {
    title: '莊輝濤 ',
    url:'/course?teacher=莊輝濤 '
  },
  {
    title: '行政法',
    url:'/course?course_name=行政法'
  },
  
  {
    title: '陳欣之*丁仁方 王宏仁 ',
    url:'/course?teacher=陳欣之*丁仁方 王宏仁 '
  },
  {
    title: '兩岸關係',
    url:'/course?course_name=兩岸關係'
  },
  
  {
    title: '蒙志成 ',
    url:'/course?teacher=蒙志成 '
  },
  {
    title: '政治學方法論（二）',
    url:'/course?course_name=政治學方法論（二）'
  },
  
  {
    title: '王金壽 ',
    url:'/course?teacher=王金壽 '
  },
  {
    title: '社會運動',
    url:'/course?course_name=社會運動'
  },
  
  {
    title: '梁文韜*李國維 ',
    url:'/course?teacher=梁文韜*李國維 '
  },
  {
    title: '公民政治與市民社會',
    url:'/course?course_name=公民政治與市民社會'
  },
  
  {
    title: '楊永年 ',
    url:'/course?teacher=楊永年 '
  },
  {
    title: '公共政策',
    url:'/course?course_name=公共政策'
  },
  
  {
    title: '王奕婷 ',
    url:'/course?teacher=王奕婷 '
  },
  {
    title: '應用統計',
    url:'/course?course_name=應用統計'
  },
  
  {
    title: '梁文韜 李國維*',
    url:'/course?teacher=梁文韜 李國維*'
  },
  {
    title: '政治哲學概論',
    url:'/course?course_name=政治哲學概論'
  },
  
  {
    title: '鍾兆真 ',
    url:'/course?teacher=鍾兆真 '
  },
  {
    title: '服務學習（三）',
    url:'/course?course_name=服務學習（三）'
  },
  
  {
    title: '陳欣之 ',
    url:'/course?teacher=陳欣之 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '王金壽 ',
    url:'/course?teacher=王金壽 '
  },
  {
    title: '社會學概論',
    url:'/course?course_name=社會學概論'
  },
  
  {
    title: '莊輝濤 ',
    url:'/course?teacher=莊輝濤 '
  },
  {
    title: '中華民國憲法與政府（二）',
    url:'/course?course_name=中華民國憲法與政府（二）'
  },
  
  {
    title: '田維華 ',
    url:'/course?teacher=田維華 '
  },
  {
    title: '經濟學原理（二）',
    url:'/course?course_name=經濟學原理（二）'
  },
  
  {
    title: '李國維 ',
    url:'/course?teacher=李國維 '
  },
  {
    title: '政治學概論（二）',
    url:'/course?course_name=政治學概論（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '陸定邦 ',
    url:'/course?teacher=陸定邦 '
  },
  {
    title: '設計實務特論',
    url:'/course?course_name=設計實務特論'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '設計倫理與哲理',
    url:'/course?course_name=設計倫理與哲理'
  },
  
  {
    title: '謝孟達 ',
    url:'/course?teacher=謝孟達 '
  },
  {
    title: '網路科技與應用',
    url:'/course?course_name=網路科技與應用'
  },
  
  {
    title: '陳璽任 ',
    url:'/course?teacher=陳璽任 '
  },
  {
    title: '社會文化與設計',
    url:'/course?course_name=社會文化與設計'
  },
  
  {
    title: '曾元琦 ',
    url:'/course?teacher=曾元琦 '
  },
  {
    title: '人本資訊系統與互動經驗設計',
    url:'/course?course_name=人本資訊系統與互動經驗設計'
  },
  
  {
    title: '洪郁修 ',
    url:'/course?teacher=洪郁修 '
  },
  {
    title: '社群網站研究',
    url:'/course?course_name=社群網站研究'
  },
  
  {
    title: '周君瑞 ',
    url:'/course?teacher=周君瑞 '
  },
  {
    title: '仁品設計研究',
    url:'/course?course_name=仁品設計研究'
  },
  
  {
    title: '劉說芳 ',
    url:'/course?teacher=劉說芳 '
  },
  {
    title: '品質機能展開',
    url:'/course?course_name=品質機能展開'
  },
  
  {
    title: '蕭世文 ',
    url:'/course?teacher=蕭世文 '
  },
  {
    title: '數量化決策理論與應用',
    url:'/course?course_name=數量化決策理論與應用'
  },
  
  {
    title: '馬敏元 ',
    url:'/course?teacher=馬敏元 '
  },
  {
    title: '魅力工學',
    url:'/course?course_name=魅力工學'
  },
  
  {
    title: '陳連福 ',
    url:'/course?teacher=陳連福 '
  },
  {
    title: '設計管理個案研究',
    url:'/course?course_name=設計管理個案研究'
  },
  
  {
    title: '馬敏元*何俊亨*曾元琦*',
    url:'/course?teacher=馬敏元*何俊亨*曾元琦*'
  },
  {
    title: '感性設計研究（二）',
    url:'/course?course_name=感性設計研究（二）'
  },
  
  {
    title: '蕭世文*謝孟達*',
    url:'/course?teacher=蕭世文*謝孟達*'
  },
  {
    title: '同步設計研究（二）',
    url:'/course?course_name=同步設計研究（二）'
  },
  
  {
    title: '洪郁修*吳豐光*',
    url:'/course?teacher=洪郁修*吳豐光*'
  },
  {
    title: '人本設計研究（二）',
    url:'/course?course_name=人本設計研究（二）'
  },
  
  {
    title: '陸定邦*劉說芳*周君瑞*',
    url:'/course?teacher=陸定邦*劉說芳*周君瑞*'
  },
  {
    title: '整合設計研究（二）',
    url:'/course?course_name=整合設計研究（二）'
  },
  
  {
    title: '馬敏元*何俊亨*曾元琦*陳璽任*',
    url:'/course?teacher=馬敏元*何俊亨*曾元琦*陳璽任*'
  },
  {
    title: '傳達設計(二)',
    url:'/course?course_name=傳達設計(二)'
  },
  
  {
    title: '馬敏元*何俊亨*曾元琦*陳璽任*',
    url:'/course?teacher=馬敏元*何俊亨*曾元琦*陳璽任*'
  },
  {
    title: '傳達設計(二)',
    url:'/course?course_name=傳達設計(二)'
  },
  
  {
    title: '蕭世文*謝孟達*',
    url:'/course?teacher=蕭世文*謝孟達*'
  },
  {
    title: '同步設計(二)',
    url:'/course?course_name=同步設計(二)'
  },
  
  {
    title: '蕭世文*謝孟達*',
    url:'/course?teacher=蕭世文*謝孟達*'
  },
  {
    title: '同步設計(二)',
    url:'/course?course_name=同步設計(二)'
  },
  
  {
    title: '洪郁修*吳豐光*',
    url:'/course?teacher=洪郁修*吳豐光*'
  },
  {
    title: '人本設計(二)',
    url:'/course?course_name=人本設計(二)'
  },
  
  {
    title: '洪郁修*吳豐光*',
    url:'/course?teacher=洪郁修*吳豐光*'
  },
  {
    title: '人本設計(二)',
    url:'/course?course_name=人本設計(二)'
  },
  
  {
    title: '陸定邦*劉說芳*周君瑞*',
    url:'/course?teacher=陸定邦*劉說芳*周君瑞*'
  },
  {
    title: '整合設計(二)',
    url:'/course?course_name=整合設計(二)'
  },
  
  {
    title: '陸定邦*劉說芳*周君瑞*',
    url:'/course?teacher=陸定邦*劉說芳*周君瑞*'
  },
  {
    title: '整合設計(二)',
    url:'/course?course_name=整合設計(二)'
  },
  
  {
    title: '馬敏元*何俊亨*曾元琦*',
    url:'/course?teacher=馬敏元*何俊亨*曾元琦*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '蕭世文*謝孟達*',
    url:'/course?teacher=蕭世文*謝孟達*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '洪郁修*吳豐光*',
    url:'/course?teacher=洪郁修*吳豐光*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陸定邦*劉說芳*周君瑞*',
    url:'/course?teacher=陸定邦*劉說芳*周君瑞*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '馬敏元*何俊亨*曾元琦*陳璽任*',
    url:'/course?teacher=馬敏元*何俊亨*曾元琦*陳璽任*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '蕭世文*謝孟達*',
    url:'/course?teacher=蕭世文*謝孟達*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '洪郁修*吳豐光*',
    url:'/course?teacher=洪郁修*吳豐光*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '陸定邦*劉說芳*周君瑞*',
    url:'/course?teacher=陸定邦*劉說芳*周君瑞*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '何俊亨 ',
    url:'/course?teacher=何俊亨 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '洪素蘋 ',
    url:'/course?teacher=洪素蘋 '
  },
  {
    title: '綜合活動領域輔導活動實習輔導',
    url:'/course?course_name=綜合活動領域輔導活動實習輔導'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '歷史／社會領域歷史實習輔導',
    url:'/course?course_name=歷史／社會領域歷史實習輔導'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '數學／數學領域實習輔導',
    url:'/course?course_name=數學／數學領域實習輔導'
  },
  
  {
    title: '陳宜君 ',
    url:'/course?teacher=陳宜君 '
  },
  {
    title: '物理／自然與生活科技物理實習輔導',
    url:'/course?course_name=物理／自然與生活科技物理實習輔導'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文／語文領域英語實習輔導',
    url:'/course?course_name=英文／語文領域英語實習輔導'
  },
  
  {
    title: '仇小屏 ',
    url:'/course?teacher=仇小屏 '
  },
  {
    title: '國文／語文領域本國語文實習輔導',
    url:'/course?course_name=國文／語文領域本國語文實習輔導'
  },
  
  {
    title: '施士塵 ',
    url:'/course?teacher=施士塵 '
  },
  {
    title: '機械學群教學實習',
    url:'/course?course_name=機械學群教學實習'
  },
  
  {
    title: '吳奕芳 ',
    url:'/course?teacher=吳奕芳 '
  },
  {
    title: '藝術生活科-視覺應用藝術教學實習',
    url:'/course?course_name=藝術生活科-視覺應用藝術教學實習'
  },
  
  {
    title: '陳少燕 ',
    url:'/course?teacher=陳少燕 '
  },
  {
    title: '生物／自然與生活科技生物教學實習',
    url:'/course?course_name=生物／自然與生活科技生物教學實習'
  },
  
  {
    title: '洪素蘋 ',
    url:'/course?teacher=洪素蘋 '
  },
  {
    title: '綜合活動領域輔導活動教學實習',
    url:'/course?course_name=綜合活動領域輔導活動教學實習'
  },
  
  {
    title: '郭旭展 ',
    url:'/course?teacher=郭旭展 '
  },
  {
    title: '輔導原理與實務',
    url:'/course?course_name=輔導原理與實務'
  },
  
  {
    title: '楊琬琳 ',
    url:'/course?teacher=楊琬琳 '
  },
  {
    title: '教育概論',
    url:'/course?course_name=教育概論'
  },
  
  {
    title: '饒夢霞 ',
    url:'/course?teacher=饒夢霞 '
  },
  {
    title: '班級經營',
    url:'/course?course_name=班級經營'
  },
  
  {
    title: '于富雲 ',
    url:'/course?teacher=于富雲 '
  },
  {
    title: '教學原理',
    url:'/course?course_name=教學原理'
  },
  
  {
    title: '湯　堯 ',
    url:'/course?teacher=湯　堯 '
  },
  {
    title: '教育哲學',
    url:'/course?course_name=教育哲學'
  },
  
  {
    title: '郭旭展 ',
    url:'/course?teacher=郭旭展 '
  },
  {
    title: '人際關係與溝通',
    url:'/course?course_name=人際關係與溝通'
  },
  
  {
    title: '鄭淑惠 ',
    url:'/course?teacher=鄭淑惠 '
  },
  {
    title: '學校輔導工作',
    url:'/course?course_name=學校輔導工作'
  },
  
  {
    title: '趙梅如 ',
    url:'/course?teacher=趙梅如 '
  },
  {
    title: '家庭發展',
    url:'/course?course_name=家庭發展'
  },
  
  {
    title: '洪素蘋 ',
    url:'/course?teacher=洪素蘋 '
  },
  {
    title: '綜合活動學習領域課程設計與實施',
    url:'/course?course_name=綜合活動學習領域課程設計與實施'
  },
  
  {
    title: '彭淑玲 ',
    url:'/course?teacher=彭淑玲 '
  },
  {
    title: '教育議題專題',
    url:'/course?course_name=教育議題專題'
  },
  
  {
    title: '朱朝煌 ',
    url:'/course?teacher=朱朝煌 '
  },
  {
    title: '童軍教育',
    url:'/course?course_name=童軍教育'
  },
  
  {
    title: '楊琬琳 ',
    url:'/course?teacher=楊琬琳 '
  },
  {
    title: '教學方法與策略',
    url:'/course?course_name=教學方法與策略'
  },
  
  {
    title: '彭淑玲 ',
    url:'/course?teacher=彭淑玲 '
  },
  {
    title: '學習與教學',
    url:'/course?course_name=學習與教學'
  },
  
  {
    title: '饒夢霞 ',
    url:'/course?teacher=饒夢霞 '
  },
  {
    title: '青少年心理學',
    url:'/course?course_name=青少年心理學'
  },
  
  {
    title: '許澤天 王士帆*',
    url:'/course?teacher=許澤天 王士帆*'
  },
  {
    title: '公民與社會/社會領域公民教學實習',
    url:'/course?course_name=公民與社會/社會領域公民教學實習'
  },
  
  {
    title: '楊懷仁 ',
    url:'/course?teacher=楊懷仁 '
  },
  {
    title: '地球科學／自然與生活科技地球科學教學實習',
    url:'/course?course_name=地球科學／自然與生活科技地球科學教學實習'
  },
  
  {
    title: '黃守仁 ',
    url:'/course?teacher=黃守仁 '
  },
  {
    title: '化學／自然與生活科技化學教學實習',
    url:'/course?course_name=化學／自然與生活科技化學教學實習'
  },
  
  {
    title: '陳宜君 ',
    url:'/course?teacher=陳宜君 '
  },
  {
    title: '物理／自然與生活科技物理教學實習',
    url:'/course?course_name=物理／自然與生活科技物理教學實習'
  },
  
  {
    title: '許守泯 陳恒安*謝美娥 楊尹瑄 ',
    url:'/course?teacher=許守泯 陳恒安*謝美娥 楊尹瑄 '
  },
  {
    title: '歷史／社會領域歷史教學實習',
    url:'/course?course_name=歷史／社會領域歷史教學實習'
  },
  
  {
    title: '林景隆 ',
    url:'/course?teacher=林景隆 '
  },
  {
    title: '數學／數學領域教學實習',
    url:'/course?course_name=數學／數學領域教學實習'
  },
  
  {
    title: '鄒文莉 ',
    url:'/course?teacher=鄒文莉 '
  },
  {
    title: '英文／語文領域英語教學實習',
    url:'/course?course_name=英文／語文領域英語教學實習'
  },
  
  {
    title: '仇小屏 ',
    url:'/course?teacher=仇小屏 '
  },
  {
    title: '國文／語文領域本國語文教學實習',
    url:'/course?course_name=國文／語文領域本國語文教學實習'
  },
  
  {
    title: '郭致宏 ',
    url:'/course?teacher=郭致宏 '
  },
  {
    title: '資料壓縮',
    url:'/course?course_name=資料壓縮'
  },
  
  {
    title: '王英郎 ',
    url:'/course?teacher=王英郎 '
  },
  {
    title: '半導體及先進奈米化製程技術概論（二）',
    url:'/course?course_name=半導體及先進奈米化製程技術概論（二）'
  },
  
  {
    title: '黃慶連 ',
    url:'/course?teacher=黃慶連 '
  },
  {
    title: '配電系統自動化',
    url:'/course?course_name=配電系統自動化'
  },
  
  {
    title: '黃慶連 ',
    url:'/course?teacher=黃慶連 '
  },
  {
    title: '高電壓工程特論',
    url:'/course?course_name=高電壓工程特論'
  },
  
  {
    title: '黃仁暐 ',
    url:'/course?teacher=黃仁暐 '
  },
  {
    title: '資料探勘與社群網路分析',
    url:'/course?course_name=資料探勘與社群網路分析'
  },
  
  {
    title: '賴癸江 ',
    url:'/course?teacher=賴癸江 '
  },
  {
    title: '通信相關信號處理演算法專論',
    url:'/course?course_name=通信相關信號處理演算法專論'
  },
  
  {
    title: '蘇淑茵 ',
    url:'/course?teacher=蘇淑茵 '
  },
  {
    title: '計算機網路之隨機分析',
    url:'/course?course_name=計算機網路之隨機分析'
  },
  
  {
    title: '陳進興 ',
    url:'/course?teacher=陳進興 '
  },
  {
    title: '矩陣理論與計算',
    url:'/course?course_name=矩陣理論與計算'
  },
  
  {
    title: '賴癸江 ',
    url:'/course?teacher=賴癸江 '
  },
  {
    title: '偵測與評估理論',
    url:'/course?course_name=偵測與評估理論'
  },
  
  {
    title: '黃振發 ',
    url:'/course?teacher=黃振發 '
  },
  {
    title: '光纖至府接取網路專論',
    url:'/course?course_name=光纖至府接取網路專論'
  },
  
  {
    title: '莊惠如 ',
    url:'/course?teacher=莊惠如 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '蘇淑茵*',
    url:'/course?teacher=蘇淑茵*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '楊竹星 ',
    url:'/course?teacher=楊竹星 '
  },
  {
    title: '網路安全',
    url:'/course?course_name=網路安全'
  },
  
  {
    title: '郭文光 ',
    url:'/course?teacher=郭文光 '
  },
  {
    title: '無線網路與應用',
    url:'/course?course_name=無線網路與應用'
  },
  
  {
    title: '李忠憲 ',
    url:'/course?teacher=李忠憲 '
  },
  {
    title: '通訊網路專論',
    url:'/course?course_name=通訊網路專論'
  },
  
  {
    title: '蔡智明*張名先 ',
    url:'/course?teacher=蔡智明*張名先 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '黃仁暐 ',
    url:'/course?teacher=黃仁暐 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '張志文*蘇賜麟 ',
    url:'/course?teacher=張志文*蘇賜麟 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '解巽評*謝錫堃 ',
    url:'/course?teacher=解巽評*謝錫堃 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '斯國峰 ',
    url:'/course?teacher=斯國峰 '
  },
  {
    title: '容錯系統',
    url:'/course?course_name=容錯系統'
  },
  
  {
    title: '鄭光偉 ',
    url:'/course?teacher=鄭光偉 '
  },
  {
    title: 'PLL/DLL設計與應用',
    url:'/course?course_name=PLL/DLL設計與應用'
  },
  
  {
    title: '陳　敬 ',
    url:'/course?teacher=陳　敬 '
  },
  {
    title: '系統程式',
    url:'/course?course_name=系統程式'
  },
  
  {
    title: '焦惠津 ',
    url:'/course?teacher=焦惠津 '
  },
  {
    title: '系統分析與設計理論',
    url:'/course?course_name=系統分析與設計理論'
  },
  
  {
    title: '莊惠如 ',
    url:'/course?teacher=莊惠如 '
  },
  {
    title: '射頻微波通訊電路設計',
    url:'/course?course_name=射頻微波通訊電路設計'
  },
  
  {
    title: '陳立祥 ',
    url:'/course?teacher=陳立祥 '
  },
  {
    title: '多媒體網際網路應用專論',
    url:'/course?course_name=多媒體網際網路應用專論'
  },
  
  {
    title: '張名先 ',
    url:'/course?teacher=張名先 '
  },
  {
    title: '適應性信號處理',
    url:'/course?course_name=適應性信號處理'
  },
  
  {
    title: '李忠憲 ',
    url:'/course?teacher=李忠憲 '
  },
  {
    title: '排隊理論',
    url:'/course?course_name=排隊理論'
  },
  
  {
    title: '楊家輝 ',
    url:'/course?teacher=楊家輝 '
  },
  {
    title: '數位三維視訊',
    url:'/course?course_name=數位三維視訊'
  },
  
  {
    title: '楊家輝 ',
    url:'/course?teacher=楊家輝 '
  },
  {
    title: '媒體訊號處理與實作專論',
    url:'/course?course_name=媒體訊號處理與實作專論'
  },
  
  {
    title: '蘇賜麟 ',
    url:'/course?teacher=蘇賜麟 '
  },
  {
    title: '錯誤控制編碼',
    url:'/course?course_name=錯誤控制編碼'
  },
  
  {
    title: '郭文光*劉光浩 ',
    url:'/course?teacher=郭文光*劉光浩 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '陳　敬 ',
    url:'/course?teacher=陳　敬 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '蔡瑞真 ',
    url:'/course?teacher=蔡瑞真 '
  },
  {
    title: '藥劑學（二）',
    url:'/course?course_name=藥劑學（二）'
  },
  
  {
    title: '郭賓崇 ',
    url:'/course?teacher=郭賓崇 '
  },
  {
    title: '藥物分析（二）',
    url:'/course?course_name=藥物分析（二）'
  },
  
  {
    title: '蔡瑞真 ',
    url:'/course?teacher=蔡瑞真 '
  },
  {
    title: '藥劑學實驗（二）',
    url:'/course?course_name=藥劑學實驗（二）'
  },
  
  {
    title: '郭賓崇 ',
    url:'/course?teacher=郭賓崇 '
  },
  {
    title: '藥物分析實驗',
    url:'/course?course_name=藥物分析實驗'
  },
  
  {
    title: '洪欣儀 ',
    url:'/course?teacher=洪欣儀 '
  },
  {
    title: '藥物化學實驗',
    url:'/course?course_name=藥物化學實驗'
  },
  
  {
    title: '張惠華 ',
    url:'/course?teacher=張惠華 '
  },
  {
    title: '藥理學 （二）',
    url:'/course?course_name=藥理學 （二）'
  },
  
  {
    title: '蔡瑞真 周辰熹*張惠華 ',
    url:'/course?teacher=蔡瑞真 周辰熹*張惠華 '
  },
  {
    title: '生物藥劑學',
    url:'/course?course_name=生物藥劑學'
  },
  
  {
    title: '洪欣儀 ',
    url:'/course?teacher=洪欣儀 '
  },
  {
    title: '藥物化學（二）',
    url:'/course?course_name=藥物化學（二）'
  },
  
  {
    title: '郭賓崇 ',
    url:'/course?teacher=郭賓崇 '
  },
  {
    title: '分析化學',
    url:'/course?course_name=分析化學'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '體育（四）',
    url:'/course?course_name=體育（四）'
  },
  
  {
    title: '徐之昇 歐凰姿 ',
    url:'/course?teacher=徐之昇 歐凰姿 '
  },
  {
    title: '醫學論文研究',
    url:'/course?course_name=醫學論文研究'
  },
  
  {
    title: '洪欣儀 ',
    url:'/course?teacher=洪欣儀 '
  },
  {
    title: '藥物化學專題研究（二）',
    url:'/course?course_name=藥物化學專題研究（二）'
  },
  
  {
    title: '張志鵬 ',
    url:'/course?teacher=張志鵬 '
  },
  {
    title: '免疫學（含實驗）',
    url:'/course?course_name=免疫學（含實驗）'
  },
  
  {
    title: '徐麗君 何宗憲 王世敏 凌　斌 張志鵬*',
    url:'/course?teacher=徐麗君 何宗憲 王世敏 凌　斌 張志鵬*'
  },
  {
    title: '免疫學（含實驗）',
    url:'/course?course_name=免疫學（含實驗）'
  },
  
  {
    title: '戴淑華 高雅慧*高淑敏 林嘉音 ',
    url:'/course?teacher=戴淑華 高雅慧*高淑敏 林嘉音 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '洪欣儀 吳天賞*',
    url:'/course?teacher=洪欣儀 吳天賞*'
  },
  {
    title: '生藥暨中藥學（二）',
    url:'/course?course_name=生藥暨中藥學（二）'
  },
  
  {
    title: '黃柏憲 ',
    url:'/course?teacher=黃柏憲 '
  },
  {
    title: '生物化學實驗',
    url:'/course?course_name=生物化學實驗'
  },
  
  {
    title: '邱顯泰 陳俊榮 吳昭良 莊偉哲 張文粲 何月仁 吳華林 鄭宏祺 陳昌熙 黃柏憲 ',
    url:'/course?teacher=邱顯泰 陳俊榮 吳昭良 莊偉哲 張文粲 何月仁 吳華林 鄭宏祺 陳昌熙 黃柏憲 '
  },
  {
    title: '生物化學（含分子生物學）',
    url:'/course?course_name=生物化學（含分子生物學）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '陳毓宏 洪欣儀*',
    url:'/course?teacher=陳毓宏 洪欣儀*'
  },
  {
    title: '有機化學（一）',
    url:'/course?course_name=有機化學（一）'
  },
  
  {
    title: '吳天賞 ',
    url:'/course?teacher=吳天賞 '
  },
  {
    title: '中藥概論',
    url:'/course?course_name=中藥概論'
  },
  
  {
    title: '林文亮 高雅慧*黃金鼎 ',
    url:'/course?teacher=林文亮 高雅慧*黃金鼎 '
  },
  {
    title: '藥學生涯',
    url:'/course?course_name=藥學生涯'
  },
  
  {
    title: '王浩文 何盧勳 邱慈暉*李純純 彭怡禎 ',
    url:'/course?teacher=王浩文 何盧勳 邱慈暉*李純純 彭怡禎 '
  },
  {
    title: '普通生物學（二）',
    url:'/course?course_name=普通生物學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '體育（二）',
    url:'/course?course_name=體育（二）'
  },
  
  {
    title: '孫亦文 ',
    url:'/course?teacher=孫亦文 '
  },
  {
    title: '普通化學實驗',
    url:'/course?course_name=普通化學實驗'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '王業凱 ',
    url:'/course?teacher=王業凱 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '通識課程',
    url:'/course?course_name=通識課程'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '黃世昌 ',
    url:'/course?teacher=黃世昌 '
  },
  {
    title: '群表現導論',
    url:'/course?course_name=群表現導論'
  },
  
  {
    title: '沈士育 ',
    url:'/course?teacher=沈士育 '
  },
  {
    title: '數值微分方程導論',
    url:'/course?course_name=數值微分方程導論'
  },
  
  {
    title: '關汝琳 ',
    url:'/course?teacher=關汝琳 '
  },
  {
    title: '傅立葉分析與應用',
    url:'/course?course_name=傅立葉分析與應用'
  },
  
  {
    title: '林　牛 ',
    url:'/course?teacher=林　牛 '
  },
  {
    title: '伽羅瓦理論入門',
    url:'/course?course_name=伽羅瓦理論入門'
  },
  
  {
    title: '許瑞麟 ',
    url:'/course?teacher=許瑞麟 '
  },
  {
    title: '統計導論',
    url:'/course?course_name=統計導論'
  },
  
  {
    title: '陳若淳 ',
    url:'/course?teacher=陳若淳 '
  },
  {
    title: '複變數函數論',
    url:'/course?course_name=複變數函數論'
  },
  
  {
    title: '林育竹 ',
    url:'/course?teacher=林育竹 '
  },
  {
    title: '應用分析',
    url:'/course?course_name=應用分析'
  },
  
  {
    title: '王業凱 ',
    url:'/course?teacher=王業凱 '
  },
  {
    title: '幾何學（一）',
    url:'/course?course_name=幾何學（一）'
  },
  
  {
    title: '王辰樹 ',
    url:'/course?teacher=王辰樹 '
  },
  {
    title: '應用線性代數',
    url:'/course?course_name=應用線性代數'
  },
  
  {
    title: '鄺國權 ',
    url:'/course?teacher=鄺國權 '
  },
  {
    title: '向量分析',
    url:'/course?course_name=向量分析'
  },
  
  {
    title: '章源慶 ',
    url:'/course?teacher=章源慶 '
  },
  {
    title: '代數學（一）',
    url:'/course?course_name=代數學（一）'
  },
  
  {
    title: '章源慶 ',
    url:'/course?teacher=章源慶 '
  },
  {
    title: '代數學（一）',
    url:'/course?course_name=代數學（一）'
  },
  
  {
    title: '方永富 ',
    url:'/course?teacher=方永富 '
  },
  {
    title: '微分方程導論',
    url:'/course?course_name=微分方程導論'
  },
  
  {
    title: '方永富 ',
    url:'/course?teacher=方永富 '
  },
  {
    title: '微分方程導論',
    url:'/course?course_name=微分方程導論'
  },
  
  {
    title: '史習偉 ',
    url:'/course?teacher=史習偉 '
  },
  {
    title: '高等微積分（二）',
    url:'/course?course_name=高等微積分（二）'
  },
  
  {
    title: '史習偉 ',
    url:'/course?teacher=史習偉 '
  },
  {
    title: '高等微積分（二）',
    url:'/course?course_name=高等微積分（二）'
  },
  
  {
    title: '舒宇宸 ',
    url:'/course?teacher=舒宇宸 '
  },
  {
    title: '計算機概論與程式語言',
    url:'/course?course_name=計算機概論與程式語言'
  },
  
  {
    title: '田興龍 ',
    url:'/course?teacher=田興龍 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '黃世昌 ',
    url:'/course?teacher=黃世昌 '
  },
  {
    title: '線性代數（一）',
    url:'/course?course_name=線性代數（一）'
  },
  
  {
    title: '黃世昌 ',
    url:'/course?teacher=黃世昌 '
  },
  {
    title: '線性代數（一）',
    url:'/course?course_name=線性代數（一）'
  },
  
  {
    title: '劉之中 ',
    url:'/course?teacher=劉之中 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '劉之中 ',
    url:'/course?teacher=劉之中 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '劉之中 ',
    url:'/course?teacher=劉之中 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '魏健宏 廖俊雄 鄭永祥 張瀞之 孫雅彥 黃郁雯 林佐鼎 ',
    url:'/course?teacher=魏健宏 廖俊雄 鄭永祥 張瀞之 孫雅彥 黃郁雯 林佐鼎 '
  },
  {
    title: '獨立研究（二）',
    url:'/course?course_name=獨立研究（二）'
  },
  
  {
    title: '戴佐敏*韓梁中 ',
    url:'/course?teacher=戴佐敏*韓梁中 '
  },
  {
    title: '民航經濟與財務管理',
    url:'/course?course_name=民航經濟與財務管理'
  },
  
  {
    title: '張有恒 ',
    url:'/course?teacher=張有恒 '
  },
  {
    title: '飛航安全管理',
    url:'/course?course_name=飛航安全管理'
  },
  
  {
    title: '黃國平 ',
    url:'/course?teacher=黃國平 '
  },
  {
    title: '運輸業風險與危機管理',
    url:'/course?course_name=運輸業風險與危機管理'
  },
  
  {
    title: '胡守任 ',
    url:'/course?teacher=胡守任 '
  },
  {
    title: '交通工程與實務',
    url:'/course?course_name=交通工程與實務'
  },
  
  {
    title: '胡大瀛 ',
    url:'/course?teacher=胡大瀛 '
  },
  {
    title: '運輸規劃實務與應用',
    url:'/course?course_name=運輸規劃實務與應用'
  },
  
  {
    title: '鄭永祥 ',
    url:'/course?teacher=鄭永祥 '
  },
  {
    title: '交通管理實務',
    url:'/course?course_name=交通管理實務'
  },
  
  {
    title: '黃光渠 ',
    url:'/course?teacher=黃光渠 '
  },
  {
    title: '物聯網應用與安全',
    url:'/course?course_name=物聯網應用與安全'
  },
  
  {
    title: '蔡東峻 ',
    url:'/course?teacher=蔡東峻 '
  },
  {
    title: '服務業行銷策略',
    url:'/course?course_name=服務業行銷策略'
  },
  
  {
    title: '胡大瀛 ',
    url:'/course?teacher=胡大瀛 '
  },
  {
    title: '高等交通管理與控制',
    url:'/course?course_name=高等交通管理與控制'
  },
  
  {
    title: '鄭永祥 ',
    url:'/course?teacher=鄭永祥 '
  },
  {
    title: '軌道運輸業經營與管理',
    url:'/course?course_name=軌道運輸業經營與管理'
  },
  
  {
    title: '戴佐敏*韓梁中 ',
    url:'/course?teacher=戴佐敏*韓梁中 '
  },
  {
    title: '民航經濟與財務管理',
    url:'/course?course_name=民航經濟與財務管理'
  },
  
  {
    title: '林珮珺 戴佐敏 胡守任 廖俊雄*鄭永祥 陳勁甫 胡大瀛 張有恒 黃國平 張瀞之 黃光渠 林東盈 李威勳 孫雅彥 黃郁雯 沈宗緯 林佐鼎 蔡東峻 ',
    url:'/course?teacher=林珮珺 戴佐敏 胡守任 廖俊雄*鄭永祥 陳勁甫 胡大瀛 張有恒 黃國平 張瀞之 黃光渠 林東盈 李威勳 孫雅彥 黃郁雯 沈宗緯 林佐鼎 蔡東峻 '
  },
  {
    title: '教學實習',
    url:'/course?course_name=教學實習'
  },
  
  {
    title: '張有恒 ',
    url:'/course?teacher=張有恒 '
  },
  {
    title: '飛航安全管理',
    url:'/course?course_name=飛航安全管理'
  },
  
  {
    title: '孫雅彥 ',
    url:'/course?teacher=孫雅彥 '
  },
  {
    title: '區域經濟發展評估',
    url:'/course?course_name=區域經濟發展評估'
  },
  
  {
    title: '林珮珺 ',
    url:'/course?teacher=林珮珺 '
  },
  {
    title: '供應鏈最佳化',
    url:'/course?course_name=供應鏈最佳化'
  },
  
  {
    title: '陳勁甫 ',
    url:'/course?teacher=陳勁甫 '
  },
  {
    title: '運輸經濟',
    url:'/course?course_name=運輸經濟'
  },
  
  {
    title: '林東盈 ',
    url:'/course?teacher=林東盈 '
  },
  {
    title: '運輸網路均衡模式',
    url:'/course?course_name=運輸網路均衡模式'
  },
  
  {
    title: '戴佐敏 ',
    url:'/course?teacher=戴佐敏 '
  },
  {
    title: '民航法規',
    url:'/course?course_name=民航法規'
  },
  
  {
    title: '胡守任 ',
    url:'/course?teacher=胡守任 '
  },
  {
    title: '運輸需求分析與預測',
    url:'/course?course_name=運輸需求分析與預測'
  },
  
  {
    title: '張瀞之 ',
    url:'/course?teacher=張瀞之 '
  },
  {
    title: '國際經濟與財務',
    url:'/course?course_name=國際經濟與財務'
  },
  
  {
    title: '黃郁雯 ',
    url:'/course?teacher=黃郁雯 '
  },
  {
    title: '電信政策與法規',
    url:'/course?course_name=電信政策與法規'
  },
  
  {
    title: '胡大瀛 ',
    url:'/course?teacher=胡大瀛 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '胡大瀛 ',
    url:'/course?teacher=胡大瀛 '
  },
  {
    title: '交通專題研討（四）',
    url:'/course?course_name=交通專題研討（四）'
  },
  
  {
    title: '胡守任 ',
    url:'/course?teacher=胡守任 '
  },
  {
    title: '運輸工程與科技',
    url:'/course?course_name=運輸工程與科技'
  },
  
  {
    title: '胡守任 ',
    url:'/course?teacher=胡守任 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '沈宗緯 ',
    url:'/course?teacher=沈宗緯 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '李威勳 ',
    url:'/course?teacher=李威勳 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '胡守任 ',
    url:'/course?teacher=胡守任 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '沈宗緯 ',
    url:'/course?teacher=沈宗緯 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '李威勳 ',
    url:'/course?teacher=李威勳 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '王惠嘉 ',
    url:'/course?teacher=王惠嘉 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '王惠嘉 ',
    url:'/course?teacher=王惠嘉 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陳梁軒 王泰裕 林明毅*利德江 ',
    url:'/course?teacher=陳梁軒 王泰裕 林明毅*利德江 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '王惠嘉 ',
    url:'/course?teacher=王惠嘉 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '李昇暾 ',
    url:'/course?teacher=李昇暾 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '林明毅 ',
    url:'/course?teacher=林明毅 '
  },
  {
    title: '實體性人因工程',
    url:'/course?course_name=實體性人因工程'
  },
  
  {
    title: '鄭詩瑜 ',
    url:'/course?teacher=鄭詩瑜 '
  },
  {
    title: '組織行為',
    url:'/course?course_name=組織行為'
  },
  
  {
    title: '謝中奇 ',
    url:'/course?teacher=謝中奇 '
  },
  {
    title: '可靠度管理',
    url:'/course?course_name=可靠度管理'
  },
  
  {
    title: '王泰裕 ',
    url:'/course?teacher=王泰裕 '
  },
  {
    title: '實驗設計',
    url:'/course?course_name=實驗設計'
  },
  
  {
    title: '利德江 ',
    url:'/course?teacher=利德江 '
  },
  {
    title: '領導理論',
    url:'/course?course_name=領導理論'
  },
  
  {
    title: '林清河 ',
    url:'/course?teacher=林清河 '
  },
  {
    title: '品質經營管理',
    url:'/course?course_name=品質經營管理'
  },
  
  {
    title: '陳梁軒 王泰裕 李賢得 謝中奇 黃宇翔 王惠嘉 翁慈宗 李昇暾*張秀雲 王維聰 呂執中 鄭詩瑜 林明毅 張裕清 劉任修 胡政宏 林清河 高　強 利德江 ',
    url:'/course?teacher=陳梁軒 王泰裕 李賢得 謝中奇 黃宇翔 王惠嘉 翁慈宗 李昇暾*張秀雲 王維聰 呂執中 鄭詩瑜 林明毅 張裕清 劉任修 胡政宏 林清河 高　強 利德江 '
  },
  {
    title: '教學實習',
    url:'/course?course_name=教學實習'
  },
  
  {
    title: '高　強 ',
    url:'/course?teacher=高　強 '
  },
  {
    title: '隨機模式',
    url:'/course?course_name=隨機模式'
  },
  
  {
    title: '胡政宏 ',
    url:'/course?teacher=胡政宏 '
  },
  {
    title: '結構方程模型',
    url:'/course?course_name=結構方程模型'
  },
  
  {
    title: '張裕清 ',
    url:'/course?teacher=張裕清 '
  },
  {
    title: '品質工程',
    url:'/course?course_name=品質工程'
  },
  
  {
    title: '林明毅 ',
    url:'/course?teacher=林明毅 '
  },
  {
    title: '實體性人因工程',
    url:'/course?course_name=實體性人因工程'
  },
  
  {
    title: '鄭詩瑜 ',
    url:'/course?teacher=鄭詩瑜 '
  },
  {
    title: '組織發展',
    url:'/course?course_name=組織發展'
  },
  
  {
    title: '張秀雲 ',
    url:'/course?teacher=張秀雲 '
  },
  {
    title: '排程理論',
    url:'/course?course_name=排程理論'
  },
  
  {
    title: '王維聰 ',
    url:'/course?teacher=王維聰 '
  },
  {
    title: '電子商務',
    url:'/course?course_name=電子商務'
  },
  
  {
    title: '王惠嘉 ',
    url:'/course?teacher=王惠嘉 '
  },
  {
    title: '高等資料庫管理',
    url:'/course?course_name=高等資料庫管理'
  },
  
  {
    title: '翁慈宗 ',
    url:'/course?teacher=翁慈宗 '
  },
  {
    title: '機器學習',
    url:'/course?course_name=機器學習'
  },
  
  {
    title: '黃宇翔 ',
    url:'/course?teacher=黃宇翔 '
  },
  {
    title: '管理決策分析',
    url:'/course?course_name=管理決策分析'
  },
  
  {
    title: '謝中奇 ',
    url:'/course?teacher=謝中奇 '
  },
  {
    title: '策略競局',
    url:'/course?course_name=策略競局'
  },
  
  {
    title: '李賢得 ',
    url:'/course?teacher=李賢得 '
  },
  {
    title: '實驗設計',
    url:'/course?course_name=實驗設計'
  },
  
  {
    title: '王泰裕 ',
    url:'/course?teacher=王泰裕 '
  },
  {
    title: '類神經網路應用',
    url:'/course?course_name=類神經網路應用'
  },
  
  {
    title: '呂執中 ',
    url:'/course?teacher=呂執中 '
  },
  {
    title: '國際品管',
    url:'/course?course_name=國際品管'
  },
  
  {
    title: '陳梁軒 ',
    url:'/course?teacher=陳梁軒 '
  },
  {
    title: '不確定模式與管理',
    url:'/course?course_name=不確定模式與管理'
  },
  
  {
    title: '林清河 ',
    url:'/course?teacher=林清河 '
  },
  {
    title: '企業研究方法',
    url:'/course?course_name=企業研究方法'
  },
  
  {
    title: '利德江 ',
    url:'/course?teacher=利德江 '
  },
  {
    title: '領導理論',
    url:'/course?course_name=領導理論'
  },
  
  {
    title: '高　強 ',
    url:'/course?teacher=高　強 '
  },
  {
    title: '多目標決策分析',
    url:'/course?course_name=多目標決策分析'
  },
  
  {
    title: '鄭詩瑜 ',
    url:'/course?teacher=鄭詩瑜 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '黃志嘉 ',
    url:'/course?teacher=黃志嘉 '
  },
  {
    title: '生醫光電導論',
    url:'/course?course_name=生醫光電導論'
  },
  
  {
    title: '郭宗枋 ',
    url:'/course?teacher=郭宗枋 '
  },
  {
    title: '光電材料物理',
    url:'/course?course_name=光電材料物理'
  },
  
  {
    title: '徐旭政 ',
    url:'/course?teacher=徐旭政 '
  },
  {
    title: '光電子學導論（二）',
    url:'/course?course_name=光電子學導論（二）'
  },
  
  {
    title: '張世慧 ',
    url:'/course?teacher=張世慧 '
  },
  {
    title: '光電專題（二）',
    url:'/course?course_name=光電專題（二）'
  },
  
  {
    title: '李國君 ',
    url:'/course?teacher=李國君 '
  },
  {
    title: '訊號與系統',
    url:'/course?course_name=訊號與系統'
  },
  
  {
    title: '張志文 ',
    url:'/course?teacher=張志文 '
  },
  {
    title: '數位通訊',
    url:'/course?course_name=數位通訊'
  },
  
  {
    title: '李佳榮 ',
    url:'/course?teacher=李佳榮 '
  },
  {
    title: '光學（二）',
    url:'/course?course_name=光學（二）'
  },
  
  {
    title: '黃勝廣 ',
    url:'/course?teacher=黃勝廣 '
  },
  {
    title: '電磁學（二）',
    url:'/course?course_name=電磁學（二）'
  },
  
  {
    title: '魏明達 ',
    url:'/course?teacher=魏明達 '
  },
  {
    title: '工程數學（三）',
    url:'/course?course_name=工程數學（三）'
  },
  
  {
    title: '李欣縈 ',
    url:'/course?teacher=李欣縈 '
  },
  {
    title: '電子學（二）',
    url:'/course?course_name=電子學（二）'
  },
  
  {
    title: '李欣縈 ',
    url:'/course?teacher=李欣縈 '
  },
  {
    title: '電子學實驗（一）',
    url:'/course?course_name=電子學實驗（一）'
  },
  
  {
    title: '李欣縈 ',
    url:'/course?teacher=李欣縈 '
  },
  {
    title: '電子學實驗（一）',
    url:'/course?course_name=電子學實驗（一）'
  },
  
  {
    title: '徐旭政 ',
    url:'/course?teacher=徐旭政 '
  },
  {
    title: '光電實驗（一）',
    url:'/course?course_name=光電實驗（一）'
  },
  
  {
    title: '李佳榮 ',
    url:'/course?teacher=李佳榮 '
  },
  {
    title: '光電實驗（一）',
    url:'/course?course_name=光電實驗（一）'
  },
  
  {
    title: '鄭弘隆 ',
    url:'/course?teacher=鄭弘隆 '
  },
  {
    title: '普通化學（二）',
    url:'/course?course_name=普通化學（二）'
  },
  
  {
    title: '林俊宏 ',
    url:'/course?teacher=林俊宏 '
  },
  {
    title: '工程數學（一）',
    url:'/course?course_name=工程數學（一）'
  },
  
  {
    title: '曾盛豪 ',
    url:'/course?teacher=曾盛豪 '
  },
  {
    title: '計算機概論',
    url:'/course?course_name=計算機概論'
  },
  
  {
    title: '許進恭 ',
    url:'/course?teacher=許進恭 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '洪英志 ',
    url:'/course?teacher=洪英志 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '陳岳男 ',
    url:'/course?teacher=陳岳男 '
  },
  {
    title: '普通物理學實驗（二）',
    url:'/course?course_name=普通物理學實驗（二）'
  },
  
  {
    title: '周維揚 ',
    url:'/course?teacher=周維揚 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '黃尊禧 ',
    url:'/course?teacher=黃尊禧 '
  },
  {
    title: '獵能電子設計導論',
    url:'/course?course_name=獵能電子設計導論'
  },
  
  {
    title: '蔡建泓 ',
    url:'/course?teacher=蔡建泓 '
  },
  {
    title: '混合訊號式矽智財設計',
    url:'/course?course_name=混合訊號式矽智財設計'
  },
  
  {
    title: '陳盈如 ',
    url:'/course?teacher=陳盈如 '
  },
  {
    title: '圖形理論',
    url:'/course?course_name=圖形理論'
  },
  
  {
    title: '楊慶隆 ',
    url:'/course?teacher=楊慶隆 '
  },
  {
    title: '電子電路系統設計',
    url:'/course?course_name=電子電路系統設計'
  },
  
  {
    title: '魏嘉玲 ',
    url:'/course?teacher=魏嘉玲 '
  },
  {
    title: '生醫積體電路設計',
    url:'/course?course_name=生醫積體電路設計'
  },
  
  {
    title: '雷曉方 ',
    url:'/course?teacher=雷曉方 '
  },
  {
    title: '數位訊號處理積體電路',
    url:'/course?course_name=數位訊號處理積體電路'
  },
  
  {
    title: '戴政祺 ',
    url:'/course?teacher=戴政祺 '
  },
  {
    title: '生物電子系統',
    url:'/course?course_name=生物電子系統'
  },
  
  {
    title: '毛齊武 ',
    url:'/course?teacher=毛齊武 '
  },
  {
    title: '數位影像處理',
    url:'/course?course_name=數位影像處理'
  },
  
  {
    title: '郭致宏 ',
    url:'/course?teacher=郭致宏 '
  },
  {
    title: '資料壓縮',
    url:'/course?course_name=資料壓縮'
  },
  
  {
    title: '黃仁暐 ',
    url:'/course?teacher=黃仁暐 '
  },
  {
    title: '資料探勘與社群網路分析',
    url:'/course?course_name=資料探勘與社群網路分析'
  },
  
  {
    title: '蘇淑茵 ',
    url:'/course?teacher=蘇淑茵 '
  },
  {
    title: '計算機網路之隨機分析',
    url:'/course?course_name=計算機網路之隨機分析'
  },
  
  {
    title: '賴癸江 ',
    url:'/course?teacher=賴癸江 '
  },
  {
    title: '偵測與評估理論',
    url:'/course?course_name=偵測與評估理論'
  },
  
  {
    title: '楊竹星 ',
    url:'/course?teacher=楊竹星 '
  },
  {
    title: '網路安全',
    url:'/course?course_name=網路安全'
  },
  
  {
    title: '郭文光 ',
    url:'/course?teacher=郭文光 '
  },
  {
    title: '無線網路與應用',
    url:'/course?course_name=無線網路與應用'
  },
  
  {
    title: '斯國峰 ',
    url:'/course?teacher=斯國峰 '
  },
  {
    title: '容錯系統',
    url:'/course?course_name=容錯系統'
  },
  
  {
    title: '鄭光偉 ',
    url:'/course?teacher=鄭光偉 '
  },
  {
    title: 'PLL/DLL設計與應用',
    url:'/course?course_name=PLL/DLL設計與應用'
  },
  
  {
    title: '張名先 ',
    url:'/course?teacher=張名先 '
  },
  {
    title: '適應性信號處理',
    url:'/course?course_name=適應性信號處理'
  },
  
  {
    title: '李忠憲 ',
    url:'/course?teacher=李忠憲 '
  },
  {
    title: '排隊理論',
    url:'/course?course_name=排隊理論'
  },
  
  {
    title: '楊家輝 ',
    url:'/course?teacher=楊家輝 '
  },
  {
    title: '數位三維視訊',
    url:'/course?course_name=數位三維視訊'
  },
  
  {
    title: '洪茂峰 ',
    url:'/course?teacher=洪茂峰 '
  },
  {
    title: '光電元件物理',
    url:'/course?course_name=光電元件物理'
  },
  
  {
    title: '黃慶連 ',
    url:'/course?teacher=黃慶連 '
  },
  {
    title: '配電系統自動化',
    url:'/course?course_name=配電系統自動化'
  },
  
  {
    title: '黃慶連 ',
    url:'/course?teacher=黃慶連 '
  },
  {
    title: '高電壓工程特論',
    url:'/course?course_name=高電壓工程特論'
  },
  
  {
    title: '王水進 ',
    url:'/course?teacher=王水進 '
  },
  {
    title: '功率半導體元件概論',
    url:'/course?course_name=功率半導體元件概論'
  },
  
  {
    title: '王英郎 ',
    url:'/course?teacher=王英郎 '
  },
  {
    title: '半導體及先進奈米化製程技術概論（二）',
    url:'/course?course_name=半導體及先進奈米化製程技術概論（二）'
  },
  
  {
    title: '彭洞清 ',
    url:'/course?teacher=彭洞清 '
  },
  {
    title: '奈米世代半導體製程概論',
    url:'/course?course_name=奈米世代半導體製程概論'
  },
  
  {
    title: '陳一浸 ',
    url:'/course?teacher=陳一浸 '
  },
  {
    title: '半導體元件,應用,和可靠度',
    url:'/course?course_name=半導體元件,應用,和可靠度'
  },
  
  {
    title: '莊文魁 ',
    url:'/course?teacher=莊文魁 '
  },
  {
    title: '光學導論',
    url:'/course?course_name=光學導論'
  },
  
  {
    title: '郭泰豪*黃尊禧 ',
    url:'/course?teacher=郭泰豪*黃尊禧 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '陳　敬 ',
    url:'/course?teacher=陳　敬 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '高國興 ',
    url:'/course?teacher=高國興 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '林俊宏 ',
    url:'/course?teacher=林俊宏 '
  },
  {
    title: '奈米製程專題（二）',
    url:'/course?course_name=奈米製程專題（二）'
  },
  
  {
    title: '鄭弘隆 ',
    url:'/course?teacher=鄭弘隆 '
  },
  {
    title: '先進光電材料分析專題（二）',
    url:'/course?course_name=先進光電材料分析專題（二）'
  },
  
  {
    title: '陳昭宇 ',
    url:'/course?teacher=陳昭宇 '
  },
  {
    title: '光伏元件與材料專題（二）',
    url:'/course?course_name=光伏元件與材料專題（二）'
  },
  
  {
    title: '李佳榮 ',
    url:'/course?teacher=李佳榮 '
  },
  {
    title: '液晶光電專題（二）',
    url:'/course?course_name=液晶光電專題（二）'
  },
  
  {
    title: '許進恭 ',
    url:'/course?teacher=許進恭 '
  },
  {
    title: '光電半導體製程技術專題（二）',
    url:'/course?course_name=光電半導體製程技術專題（二）'
  },
  
  {
    title: '郭宗枋 ',
    url:'/course?teacher=郭宗枋 '
  },
  {
    title: '有機發光二極體專題',
    url:'/course?course_name=有機發光二極體專題'
  },
  
  {
    title: '王英郎 ',
    url:'/course?teacher=王英郎 '
  },
  {
    title: '半導體及先進奈米化製程技術概論（二）',
    url:'/course?course_name=半導體及先進奈米化製程技術概論（二）'
  },
  
  {
    title: '陳昭宇 ',
    url:'/course?teacher=陳昭宇 '
  },
  {
    title: '太陽能光電化學',
    url:'/course?course_name=太陽能光電化學'
  },
  
  {
    title: '林時彥 ',
    url:'/course?teacher=林時彥 '
  },
  {
    title: '光偵測器原理與技術',
    url:'/course?course_name=光偵測器原理與技術'
  },
  
  {
    title: '李汪洋 ',
    url:'/course?teacher=李汪洋 '
  },
  {
    title: '顯示器色彩學',
    url:'/course?course_name=顯示器色彩學'
  },
  
  {
    title: '傅永貴 ',
    url:'/course?teacher=傅永貴 '
  },
  {
    title: '液晶材料及顯示技術',
    url:'/course?course_name=液晶材料及顯示技術'
  },
  
  {
    title: '黃志嘉 ',
    url:'/course?teacher=黃志嘉 '
  },
  {
    title: '奈米生醫光電',
    url:'/course?course_name=奈米生醫光電'
  },
  
  {
    title: '陳宣燁 ',
    url:'/course?teacher=陳宣燁 '
  },
  {
    title: '生醫材料',
    url:'/course?course_name=生醫材料'
  },
  
  {
    title: '林俊宏 ',
    url:'/course?teacher=林俊宏 '
  },
  {
    title: '奈米製程技術',
    url:'/course?course_name=奈米製程技術'
  },
  
  {
    title: '曾碩彥 ',
    url:'/course?teacher=曾碩彥 '
  },
  {
    title: '量子物理',
    url:'/course?course_name=量子物理'
  },
  
  {
    title: '呂佳諭 ',
    url:'/course?teacher=呂佳諭 '
  },
  {
    title: '光電量測技術',
    url:'/course?course_name=光電量測技術'
  },
  
  {
    title: '陳昭宇 ',
    url:'/course?teacher=陳昭宇 '
  },
  {
    title: '材料光學',
    url:'/course?course_name=材料光學'
  },
  
  {
    title: '許家榮 ',
    url:'/course?teacher=許家榮 '
  },
  {
    title: '3D顯示技術',
    url:'/course?course_name=3D顯示技術'
  },
  
  {
    title: '鄭弘隆 ',
    url:'/course?teacher=鄭弘隆 '
  },
  {
    title: '高等有機半導體物理',
    url:'/course?course_name=高等有機半導體物理'
  },
  
  {
    title: '許進恭 ',
    url:'/course?teacher=許進恭 '
  },
  {
    title: '固態照明',
    url:'/course?course_name=固態照明'
  },
  
  {
    title: '曾盛豪 ',
    url:'/course?teacher=曾盛豪 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '曾盛豪 ',
    url:'/course?teacher=曾盛豪 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '曾盛豪 ',
    url:'/course?teacher=曾盛豪 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '曾盛豪 ',
    url:'/course?teacher=曾盛豪 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '李佳榮 ',
    url:'/course?teacher=李佳榮 '
  },
  {
    title: '光電實驗（二）',
    url:'/course?course_name=光電實驗（二）'
  },
  
  {
    title: '崔祥辰 ',
    url:'/course?teacher=崔祥辰 '
  },
  {
    title: '光電實驗（二）',
    url:'/course?course_name=光電實驗（二）'
  },
  
  {
    title: '崔祥辰 ',
    url:'/course?teacher=崔祥辰 '
  },
  {
    title: '光電實驗（二）',
    url:'/course?course_name=光電實驗（二）'
  },
  
  {
    title: '崔祥辰 ',
    url:'/course?teacher=崔祥辰 '
  },
  {
    title: '光電子學（二）',
    url:'/course?course_name=光電子學（二）'
  },
  
  {
    title: '史習偉 ',
    url:'/course?teacher=史習偉 '
  },
  {
    title: '數學教學專題討論（二）',
    url:'/course?course_name=數學教學專題討論（二）'
  },
  
  {
    title: '陳若淳 ',
    url:'/course?teacher=陳若淳 '
  },
  {
    title: '數學教學專題討論（一）',
    url:'/course?course_name=數學教學專題討論（一）'
  },
  
  {
    title: '郭鴻文 ',
    url:'/course?teacher=郭鴻文 '
  },
  {
    title: '偏微分方程專題討論',
    url:'/course?course_name=偏微分方程專題討論'
  },
  
  {
    title: '劉珈銘 ',
    url:'/course?teacher=劉珈銘 '
  },
  {
    title: '代數幾何專題討論',
    url:'/course?course_name=代數幾何專題討論'
  },
  
  {
    title: '方永富 ',
    url:'/course?teacher=方永富 '
  },
  {
    title: '方程專題討論',
    url:'/course?course_name=方程專題討論'
  },
  
  {
    title: '史習偉 ',
    url:'/course?teacher=史習偉 '
  },
  {
    title: '分析專題討論',
    url:'/course?course_name=分析專題討論'
  },
  
  {
    title: '舒宇宸 ',
    url:'/course?teacher=舒宇宸 '
  },
  {
    title: '快速計算法專題討論',
    url:'/course?course_name=快速計算法專題討論'
  },
  
  {
    title: '柯文峰 ',
    url:'/course?teacher=柯文峰 '
  },
  {
    title: '代數專題討論',
    url:'/course?course_name=代數專題討論'
  },
  
  {
    title: '黃柏嶧 ',
    url:'/course?teacher=黃柏嶧 '
  },
  {
    title: '數論專題討論',
    url:'/course?course_name=數論專題討論'
  },
  
  {
    title: '黃世昌 ',
    url:'/course?teacher=黃世昌 '
  },
  {
    title: '群表現導論',
    url:'/course?course_name=群表現導論'
  },
  
  {
    title: '關汝琳 ',
    url:'/course?teacher=關汝琳 '
  },
  {
    title: '傅立葉分析與應用',
    url:'/course?course_name=傅立葉分析與應用'
  },
  
  {
    title: '林　牛 ',
    url:'/course?teacher=林　牛 '
  },
  {
    title: '伽羅瓦理論入門',
    url:'/course?course_name=伽羅瓦理論入門'
  },
  
  {
    title: '陳若淳 ',
    url:'/course?teacher=陳若淳 '
  },
  {
    title: '複變數函數論',
    url:'/course?course_name=複變數函數論'
  },
  
  {
    title: '林育竹 ',
    url:'/course?teacher=林育竹 '
  },
  {
    title: '應用分析',
    url:'/course?course_name=應用分析'
  },
  
  {
    title: '王業凱 ',
    url:'/course?teacher=王業凱 '
  },
  {
    title: '幾何學（一）',
    url:'/course?course_name=幾何學（一）'
  },
  
  {
    title: '侯世章 ',
    url:'/course?teacher=侯世章 '
  },
  {
    title: '數值偏微分方程（一）',
    url:'/course?course_name=數值偏微分方程（一）'
  },
  
  {
    title: '王辰樹 ',
    url:'/course?teacher=王辰樹 '
  },
  {
    title: '數值線性代數',
    url:'/course?course_name=數值線性代數'
  },
  
  {
    title: '陳旻宏 ',
    url:'/course?teacher=陳旻宏 '
  },
  {
    title: '不連續有限元素法',
    url:'/course?course_name=不連續有限元素法'
  },
  
  {
    title: '陳旻宏 ',
    url:'/course?teacher=陳旻宏 '
  },
  {
    title: '高效能計算',
    url:'/course?course_name=高效能計算'
  },
  
  {
    title: '許瑞麟 ',
    url:'/course?teacher=許瑞麟 '
  },
  {
    title: '隨機過程',
    url:'/course?course_name=隨機過程'
  },
  
  {
    title: '黃柏嶧 ',
    url:'/course?teacher=黃柏嶧 '
  },
  {
    title: '密碼學',
    url:'/course?course_name=密碼學'
  },
  
  {
    title: '連文璟 ',
    url:'/course?teacher=連文璟 '
  },
  {
    title: '分析通論（二）',
    url:'/course?course_name=分析通論（二）'
  },
  
  {
    title: '江孟蓉 ',
    url:'/course?teacher=江孟蓉 '
  },
  {
    title: '高等線性代數',
    url:'/course?course_name=高等線性代數'
  },
  
  {
    title: '方永富 ',
    url:'/course?teacher=方永富 '
  },
  {
    title: '偏微分方程（一）',
    url:'/course?course_name=偏微分方程（一）'
  },
  
  {
    title: '陳若淳 ',
    url:'/course?teacher=陳若淳 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '陳若淳 ',
    url:'/course?teacher=陳若淳 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陳若淳 ',
    url:'/course?teacher=陳若淳 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '陳若淳 ',
    url:'/course?teacher=陳若淳 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陳若淳 ',
    url:'/course?teacher=陳若淳 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '李宏志 ',
    url:'/course?teacher=李宏志 '
  },
  {
    title: '國際財務管理',
    url:'/course?course_name=國際財務管理'
  },
  
  {
    title: '蔡燿全 ',
    url:'/course?teacher=蔡燿全 '
  },
  {
    title: '金融市場技術分析',
    url:'/course?course_name=金融市場技術分析'
  },
  
  {
    title: '李憲達 ',
    url:'/course?teacher=李憲達 '
  },
  {
    title: '領導學',
    url:'/course?course_name=領導學'
  },
  
  {
    title: '吳宗正 ',
    url:'/course?teacher=吳宗正 '
  },
  {
    title: '投資分析',
    url:'/course?course_name=投資分析'
  },
  
  {
    title: '周信輝 ',
    url:'/course?teacher=周信輝 '
  },
  {
    title: '創新管理',
    url:'/course?course_name=創新管理'
  },
  
  {
    title: '賴孟寬 ',
    url:'/course?teacher=賴孟寬 '
  },
  {
    title: '消費者行為',
    url:'/course?course_name=消費者行為'
  },
  
  {
    title: '康信鴻 ',
    url:'/course?teacher=康信鴻 '
  },
  {
    title: '國際金融',
    url:'/course?course_name=國際金融'
  },
  
  {
    title: '黃瀞瑩 ',
    url:'/course?teacher=黃瀞瑩 '
  },
  {
    title: '作業管理',
    url:'/course?course_name=作業管理'
  },
  
  {
    title: '王瑜琳 ',
    url:'/course?teacher=王瑜琳 '
  },
  {
    title: '人力資源管理',
    url:'/course?course_name=人力資源管理'
  },
  
  {
    title: '王耀斌 ',
    url:'/course?teacher=王耀斌 '
  },
  {
    title: '經濟問題探究',
    url:'/course?course_name=經濟問題探究'
  },
  
  {
    title: '劉清和 ',
    url:'/course?teacher=劉清和 '
  },
  {
    title: '組織溝通',
    url:'/course?course_name=組織溝通'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '國際企業管理',
    url:'/course?course_name=國際企業管理'
  },
  
  {
    title: '莊雙喜 ',
    url:'/course?teacher=莊雙喜 '
  },
  {
    title: '組織行為',
    url:'/course?course_name=組織行為'
  },
  
  {
    title: '蔡惠婷 ',
    url:'/course?teacher=蔡惠婷 '
  },
  {
    title: '行銷管理',
    url:'/course?course_name=行銷管理'
  },
  
  {
    title: '葉桂珍 ',
    url:'/course?teacher=葉桂珍 '
  },
  {
    title: '統計學（二）',
    url:'/course?course_name=統計學（二）'
  },
  
  {
    title: '東惠瑛 ',
    url:'/course?teacher=東惠瑛 '
  },
  {
    title: '企業聯繫',
    url:'/course?course_name=企業聯繫'
  },
  
  {
    title: '葉桂珍 ',
    url:'/course?teacher=葉桂珍 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '方世杰 ',
    url:'/course?teacher=方世杰 '
  },
  {
    title: '經濟學（二）',
    url:'/course?course_name=經濟學（二）'
  },
  
  {
    title: '孫文琦 ',
    url:'/course?teacher=孫文琦 '
  },
  {
    title: '會計學（二）',
    url:'/course?course_name=會計學（二）'
  },
  
  {
    title: '李俊毅 ',
    url:'/course?teacher=李俊毅 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '郭浩然 ',
    url:'/course?teacher=郭浩然 '
  },
  {
    title: '環境與職業醫學實例討論（四）',
    url:'/course?course_name=環境與職業醫學實例討論（四）'
  },
  
  {
    title: '郭浩然 ',
    url:'/course?teacher=郭浩然 '
  },
  {
    title: '環境與職業醫學實例討論（二）',
    url:'/course?course_name=環境與職業醫學實例討論（二）'
  },
  
  {
    title: '郭浩然 ',
    url:'/course?teacher=郭浩然 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '王應然 ',
    url:'/course?teacher=王應然 '
  },
  {
    title: '教學實習（四）',
    url:'/course?course_name=教學實習（四）'
  },
  
  {
    title: '郭浩然 ',
    url:'/course?teacher=郭浩然 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '王應然 ',
    url:'/course?teacher=王應然 '
  },
  {
    title: '教學實習（二）',
    url:'/course?course_name=教學實習（二）'
  },
  
  {
    title: '郭浩然 ',
    url:'/course?teacher=郭浩然 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '郭浩然 ',
    url:'/course?teacher=郭浩然 '
  },
  {
    title: '環境與職業醫學實習（四）',
    url:'/course?course_name=環境與職業醫學實習（四）'
  },
  
  {
    title: '郭浩然 ',
    url:'/course?teacher=郭浩然 '
  },
  {
    title: '環境與職業醫學實習（二）',
    url:'/course?course_name=環境與職業醫學實習（二）'
  },
  
  {
    title: '郭浩然 ',
    url:'/course?teacher=郭浩然 '
  },
  {
    title: '職業病個案診斷研究（四）',
    url:'/course?course_name=職業病個案診斷研究（四）'
  },
  
  {
    title: '郭浩然 ',
    url:'/course?teacher=郭浩然 '
  },
  {
    title: '職業病個案診斷研究（二）',
    url:'/course?course_name=職業病個案診斷研究（二）'
  },
  
  {
    title: '郭浩然*張志欽 ',
    url:'/course?teacher=郭浩然*張志欽 '
  },
  {
    title: '環境與職業流行病學',
    url:'/course?course_name=環境與職業流行病學'
  },
  
  {
    title: '吳致杰 ',
    url:'/course?teacher=吳致杰 '
  },
  {
    title: '高等生物統計',
    url:'/course?course_name=高等生物統計'
  },
  
  {
    title: '郭浩然 劉明毅 ',
    url:'/course?teacher=郭浩然 劉明毅 '
  },
  {
    title: '研究結果的整理及報告',
    url:'/course?course_name=研究結果的整理及報告'
  },
  
  {
    title: '張志欽 ',
    url:'/course?teacher=張志欽 '
  },
  {
    title: '分子流行病學',
    url:'/course?course_name=分子流行病學'
  },
  
  {
    title: '郭浩然*張志欽 簡玉雯 ',
    url:'/course?teacher=郭浩然*張志欽 簡玉雯 '
  },
  {
    title: '實用流行病學',
    url:'/course?course_name=實用流行病學'
  },
  
  {
    title: '王應然 ',
    url:'/course?teacher=王應然 '
  },
  {
    title: '實驗毒理學（二）',
    url:'/course?course_name=實驗毒理學（二）'
  },
  
  {
    title: '吳政龍 郭浩然 廖寶琦 王應然*李俊璋 劉明毅 林明彥 ',
    url:'/course?teacher=吳政龍 郭浩然 廖寶琦 王應然*李俊璋 劉明毅 林明彥 '
  },
  {
    title: '進階毒理學（一）',
    url:'/course?course_name=進階毒理學（一）'
  },
  
  {
    title: '廖寶琦 ',
    url:'/course?teacher=廖寶琦 '
  },
  {
    title: '質譜技術在生物醫學上的應用',
    url:'/course?course_name=質譜技術在生物醫學上的應用'
  },
  
  {
    title: '廖寶琦*王應然 張志欽 劉明毅 ',
    url:'/course?teacher=廖寶琦*王應然 張志欽 劉明毅 '
  },
  {
    title: '儀器分析',
    url:'/course?course_name=儀器分析'
  },
  
  {
    title: '顏秀慧 ',
    url:'/course?teacher=顏秀慧 '
  },
  {
    title: '環境保護法規',
    url:'/course?course_name=環境保護法規'
  },
  
  {
    title: '李俊璋 ',
    url:'/course?teacher=李俊璋 '
  },
  {
    title: '空氣污染物採樣分析（含實驗）',
    url:'/course?course_name=空氣污染物採樣分析（含實驗）'
  },
  
  {
    title: '李俊璋 ',
    url:'/course?teacher=李俊璋 '
  },
  {
    title: '空氣污染物採樣分析（含實驗）',
    url:'/course?course_name=空氣污染物採樣分析（含實驗）'
  },
  
  {
    title: '蘇慧貞 李俊璋 蔡朋枝 林明彥*',
    url:'/course?teacher=蘇慧貞 李俊璋 蔡朋枝 林明彥*'
  },
  {
    title: '空氣污染物特性分析',
    url:'/course?course_name=空氣污染物特性分析'
  },
  
  {
    title: '蔡朋枝*林明彥 ',
    url:'/course?teacher=蔡朋枝*林明彥 '
  },
  {
    title: '暴露模式推估特論',
    url:'/course?course_name=暴露模式推估特論'
  },
  
  {
    title: '蔡朋枝 林明彥*',
    url:'/course?teacher=蔡朋枝 林明彥*'
  },
  {
    title: '高等作業環境測定（二）',
    url:'/course?course_name=高等作業環境測定（二）'
  },
  
  {
    title: '郭浩然 ',
    url:'/course?teacher=郭浩然 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '郭浩然 ',
    url:'/course?teacher=郭浩然 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '郭浩然 ',
    url:'/course?teacher=郭浩然 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '中小企業經營與管理',
    url:'/course?course_name=中小企業經營與管理'
  },
  
  {
    title: '周信輝 ',
    url:'/course?teacher=周信輝 '
  },
  {
    title: '企業經營與診斷',
    url:'/course?course_name=企業經營與診斷'
  },
  
  {
    title: '蔡東峻 ',
    url:'/course?teacher=蔡東峻 '
  },
  {
    title: '服務業行銷策略',
    url:'/course?course_name=服務業行銷策略'
  },
  
  {
    title: '方世杰 ',
    url:'/course?teacher=方世杰 '
  },
  {
    title: '價值共創策略',
    url:'/course?course_name=價值共創策略'
  },
  
  {
    title: '蔡燿全 ',
    url:'/course?teacher=蔡燿全 '
  },
  {
    title: '網際網路行銷與電子商務',
    url:'/course?course_name=網際網路行銷與電子商務'
  },
  
  {
    title: '王瑜琳 ',
    url:'/course?teacher=王瑜琳 '
  },
  {
    title: '組織發展與變革',
    url:'/course?course_name=組織發展與變革'
  },
  
  {
    title: '周信輝 ',
    url:'/course?teacher=周信輝 '
  },
  {
    title: '新產品開發與管理',
    url:'/course?course_name=新產品開發與管理'
  },
  
  {
    title: '陳淑惠 ',
    url:'/course?teacher=陳淑惠 '
  },
  {
    title: '跨領域創新與管理',
    url:'/course?course_name=跨領域創新與管理'
  },
  
  {
    title: '顏盟峯 ',
    url:'/course?teacher=顏盟峯 '
  },
  {
    title: '企業社會責任與社會責任投資',
    url:'/course?course_name=企業社會責任與社會責任投資'
  },
  
  {
    title: '黃華瑋 ',
    url:'/course?teacher=黃華瑋 '
  },
  {
    title: '公司治理研究',
    url:'/course?course_name=公司治理研究'
  },
  
  {
    title: '許育綝 ',
    url:'/course?teacher=許育綝 '
  },
  {
    title: '高級財務會計學',
    url:'/course?course_name=高級財務會計學'
  },
  
  {
    title: '徐立群 ',
    url:'/course?teacher=徐立群 '
  },
  {
    title: '資訊科技與創新及競爭優勢',
    url:'/course?course_name=資訊科技與創新及競爭優勢'
  },
  
  {
    title: '王澤世 ',
    url:'/course?teacher=王澤世 '
  },
  {
    title: '計量經濟學',
    url:'/course?course_name=計量經濟學'
  },
  
  {
    title: '史習安 ',
    url:'/course?teacher=史習安 '
  },
  {
    title: '國際人力資源管理',
    url:'/course?course_name=國際人力資源管理'
  },
  
  {
    title: '張紹基 ',
    url:'/course?teacher=張紹基 '
  },
  {
    title: '國際財務管理專題研討',
    url:'/course?course_name=國際財務管理專題研討'
  },
  
  {
    title: '張紹基*',
    url:'/course?teacher=張紹基*'
  },
  {
    title: '企業管理個案探討',
    url:'/course?course_name=企業管理個案探討'
  },
  
  {
    title: '江明憲 ',
    url:'/course?teacher=江明憲 '
  },
  {
    title: '國際投資理論',
    url:'/course?course_name=國際投資理論'
  },
  
  {
    title: '呂執中 ',
    url:'/course?teacher=呂執中 '
  },
  {
    title: '國際品管',
    url:'/course?course_name=國際品管'
  },
  
  {
    title: '謝中奇 ',
    url:'/course?teacher=謝中奇 '
  },
  {
    title: '策略競局',
    url:'/course?course_name=策略競局'
  },
  
  {
    title: '林明毅 ',
    url:'/course?teacher=林明毅 '
  },
  {
    title: '實體性人因工程',
    url:'/course?course_name=實體性人因工程'
  },
  
  {
    title: '王維聰 ',
    url:'/course?teacher=王維聰 '
  },
  {
    title: '電子商務',
    url:'/course?course_name=電子商務'
  },
  
  {
    title: '鄭詩瑜 ',
    url:'/course?teacher=鄭詩瑜 '
  },
  {
    title: '組織發展',
    url:'/course?course_name=組織發展'
  },
  
  {
    title: '王泰裕 ',
    url:'/course?teacher=王泰裕 '
  },
  {
    title: '類神經網路應用',
    url:'/course?course_name=類神經網路應用'
  },
  
  {
    title: '利德江 ',
    url:'/course?teacher=利德江 '
  },
  {
    title: '領導理論',
    url:'/course?course_name=領導理論'
  },
  
  {
    title: '曾瓊慧 ',
    url:'/course?teacher=曾瓊慧 '
  },
  {
    title: '策略管理',
    url:'/course?course_name=策略管理'
  },
  
  {
    title: '王瑜琳 ',
    url:'/course?teacher=王瑜琳 '
  },
  {
    title: '人力資源管理',
    url:'/course?course_name=人力資源管理'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '葉永田 ',
    url:'/course?teacher=葉永田 '
  },
  {
    title: '工程地震學',
    url:'/course?course_name=工程地震學'
  },
  
  {
    title: '林再興 ',
    url:'/course?teacher=林再興 '
  },
  {
    title: '地下儲氣工程特論',
    url:'/course?course_name=地下儲氣工程特論'
  },
  
  {
    title: '申永輝 ',
    url:'/course?teacher=申永輝 '
  },
  {
    title: '高等溼法冶金',
    url:'/course?course_name=高等溼法冶金'
  },
  
  {
    title: '廖學誠 ',
    url:'/course?teacher=廖學誠 '
  },
  {
    title: '資源與材料開發',
    url:'/course?course_name=資源與材料開發'
  },
  
  {
    title: '李振誥 ',
    url:'/course?teacher=李振誥 '
  },
  {
    title: '高等水文地質',
    url:'/course?course_name=高等水文地質'
  },
  
  {
    title: '葉信富 ',
    url:'/course?teacher=葉信富 '
  },
  {
    title: '邊坡水文與穩定',
    url:'/course?course_name=邊坡水文與穩定'
  },
  
  {
    title: '余騰鐸 ',
    url:'/course?teacher=余騰鐸 '
  },
  {
    title: '遙感探測',
    url:'/course?course_name=遙感探測'
  },
  
  {
    title: '王建力 ',
    url:'/course?teacher=王建力 '
  },
  {
    title: '數值分析',
    url:'/course?course_name=數值分析'
  },
  
  {
    title: '謝秉志 ',
    url:'/course?teacher=謝秉志 '
  },
  {
    title: '高等油層工程',
    url:'/course?course_name=高等油層工程'
  },
  
  {
    title: '徐國錦 ',
    url:'/course?teacher=徐國錦 '
  },
  {
    title: '地質統計學',
    url:'/course?course_name=地質統計學'
  },
  
  {
    title: '吳榮華 ',
    url:'/course?teacher=吳榮華 '
  },
  {
    title: '計劃評估與管理',
    url:'/course?course_name=計劃評估與管理'
  },
  
  {
    title: '施勵行 ',
    url:'/course?teacher=施勵行 '
  },
  {
    title: '創新與科技管理',
    url:'/course?course_name=創新與科技管理'
  },
  
  {
    title: '吳榮華 ',
    url:'/course?teacher=吳榮華 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '黃啟原 ',
    url:'/course?teacher=黃啟原 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '葉信富 ',
    url:'/course?teacher=葉信富 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '吳榮華 ',
    url:'/course?teacher=吳榮華 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '黃啟原 ',
    url:'/course?teacher=黃啟原 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '葉信富 ',
    url:'/course?teacher=葉信富 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '吳榮華 ',
    url:'/course?teacher=吳榮華 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '黃啟原 ',
    url:'/course?teacher=黃啟原 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '葉信富 ',
    url:'/course?teacher=葉信富 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '吳榮華 ',
    url:'/course?teacher=吳榮華 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '黃啟原 ',
    url:'/course?teacher=黃啟原 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '葉信富 ',
    url:'/course?teacher=葉信富 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '吳榮華 ',
    url:'/course?teacher=吳榮華 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '黃啟原 ',
    url:'/course?teacher=黃啟原 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '葉信富 ',
    url:'/course?teacher=葉信富 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '蔡文達 ',
    url:'/course?teacher=蔡文達 '
  },
  {
    title: '耐蝕材料',
    url:'/course?course_name=耐蝕材料'
  },
  
  {
    title: '李輝隆 黃啟祥*',
    url:'/course?teacher=李輝隆 黃啟祥*'
  },
  {
    title: '粉末工程',
    url:'/course?course_name=粉末工程'
  },
  
  {
    title: '陳貞夙 ',
    url:'/course?teacher=陳貞夙 '
  },
  {
    title: '半導體材料及元件理論',
    url:'/course?course_name=半導體材料及元件理論'
  },
  
  {
    title: '劉全璞 ',
    url:'/course?teacher=劉全璞 '
  },
  {
    title: '高解析式電子顯微鏡',
    url:'/course?course_name=高解析式電子顯微鏡'
  },
  
  {
    title: '齊孝定 ',
    url:'/course?teacher=齊孝定 '
  },
  {
    title: '無機固體光譜學概論',
    url:'/course?course_name=無機固體光譜學概論'
  },
  
  {
    title: '劉浩志 ',
    url:'/course?teacher=劉浩志 '
  },
  {
    title: '掃描探針技術特論',
    url:'/course?course_name=掃描探針技術特論'
  },
  
  {
    title: '謝馬利歐 ',
    url:'/course?teacher=謝馬利歐 '
  },
  {
    title: '材料科技英文寫作',
    url:'/course?course_name=材料科技英文寫作'
  },
  
  {
    title: '蘇彥勳 ',
    url:'/course?teacher=蘇彥勳 '
  },
  {
    title: '材料光電子學應用',
    url:'/course?course_name=材料光電子學應用'
  },
  
  {
    title: '林士剛 ',
    url:'/course?teacher=林士剛 '
  },
  {
    title: '固態熱力學',
    url:'/course?course_name=固態熱力學'
  },
  
  {
    title: '蘇彥勳 ',
    url:'/course?teacher=蘇彥勳 '
  },
  {
    title: '固態熱力學',
    url:'/course?course_name=固態熱力學'
  },
  
  {
    title: '方冠榮*黃啟祥 ',
    url:'/course?teacher=方冠榮*黃啟祥 '
  },
  {
    title: '材料動力學',
    url:'/course?course_name=材料動力學'
  },
  
  {
    title: '謝馬利歐 ',
    url:'/course?teacher=謝馬利歐 '
  },
  {
    title: '高等固態物理（二）',
    url:'/course?course_name=高等固態物理（二）'
  },
  
  {
    title: '郭昌恕 ',
    url:'/course?teacher=郭昌恕 '
  },
  {
    title: '高分子物理',
    url:'/course?course_name=高分子物理'
  },
  
  {
    title: '朱建平 ',
    url:'/course?teacher=朱建平 '
  },
  {
    title: '固體熱力學',
    url:'/course?course_name=固體熱力學'
  },
  
  {
    title: '方冠榮*朱建平 ',
    url:'/course?teacher=方冠榮*朱建平 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '方冠榮*朱建平 ',
    url:'/course?teacher=方冠榮*朱建平 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '方冠榮*朱建平 ',
    url:'/course?teacher=方冠榮*朱建平 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '方冠榮*朱建平 ',
    url:'/course?teacher=方冠榮*朱建平 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '阮至正 ',
    url:'/course?teacher=阮至正 '
  },
  {
    title: '高分子結晶特論',
    url:'/course?course_name=高分子結晶特論'
  },
  
  {
    title: '朱建平 ',
    url:'/course?teacher=朱建平 '
  },
  {
    title: '碳基摩擦材料',
    url:'/course?course_name=碳基摩擦材料'
  },
  
  {
    title: '陳瑾惠 ',
    url:'/course?teacher=陳瑾惠 '
  },
  {
    title: '生醫材料特論',
    url:'/course?course_name=生醫材料特論'
  },
  
  {
    title: '齊孝定 ',
    url:'/course?teacher=齊孝定 '
  },
  {
    title: '薄膜材料學',
    url:'/course?course_name=薄膜材料學'
  },
  
  {
    title: '丁志明 ',
    url:'/course?teacher=丁志明 '
  },
  {
    title: '薄膜工程',
    url:'/course?course_name=薄膜工程'
  },
  
  {
    title: '李世欽 ',
    url:'/course?teacher=李世欽 '
  },
  {
    title: '金屬表面硬化熱處理',
    url:'/course?course_name=金屬表面硬化熱處理'
  },
  
  {
    title: '呂國彰 ',
    url:'/course?teacher=呂國彰 '
  },
  {
    title: '應用材料科學（二）',
    url:'/course?course_name=應用材料科學（二）'
  },
  
  {
    title: '方冠榮*朱建平 ',
    url:'/course?teacher=方冠榮*朱建平 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '能源策略',
    url:'/course?course_name=能源策略'
  },
  
  {
    title: '楊世銘 ',
    url:'/course?teacher=楊世銘 '
  },
  {
    title: '振動學',
    url:'/course?course_name=振動學'
  },
  
  {
    title: '呂宗行 張克勤 楊世銘 陳維新 李約亨*賴維祥 ',
    url:'/course?teacher=呂宗行 張克勤 楊世銘 陳維新 李約亨*賴維祥 '
  },
  {
    title: '專題論文（一）',
    url:'/course?course_name=專題論文（一）'
  },
  
  {
    title: '張克勤 ',
    url:'/course?teacher=張克勤 '
  },
  {
    title: '太陽熱能',
    url:'/course?course_name=太陽熱能'
  },
  
  {
    title: '吳毓庭 李約亨*',
    url:'/course?teacher=吳毓庭 李約亨*'
  },
  {
    title: '風力發電',
    url:'/course?course_name=風力發電'
  },
  
  {
    title: '賴維祥 ',
    url:'/course?teacher=賴維祥 '
  },
  {
    title: '能源系統設計規劃',
    url:'/course?course_name=能源系統設計規劃'
  },
  
  {
    title: '陳維新*王偉成 ',
    url:'/course?teacher=陳維新*王偉成 '
  },
  {
    title: '能源實驗（一）',
    url:'/course?course_name=能源實驗（一）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '電力系統',
    url:'/course?course_name=電力系統'
  },
  
  {
    title: '崔兆棠 ',
    url:'/course?teacher=崔兆棠 '
  },
  {
    title: '材料力學',
    url:'/course?course_name=材料力學'
  },
  
  {
    title: '鄭金祥 ',
    url:'/course?teacher=鄭金祥 '
  },
  {
    title: '燃料電池',
    url:'/course?course_name=燃料電池'
  },
  
  {
    title: '鄭金祥 ',
    url:'/course?teacher=鄭金祥 '
  },
  {
    title: '熱機學',
    url:'/course?course_name=熱機學'
  },
  
  {
    title: '陳維新 ',
    url:'/course?teacher=陳維新 '
  },
  {
    title: '生質能源',
    url:'/course?course_name=生質能源'
  },
  
  {
    title: '彭兆仲 ',
    url:'/course?teacher=彭兆仲 '
  },
  {
    title: '儀器量測與訊號處理',
    url:'/course?course_name=儀器量測與訊號處理'
  },
  
  {
    title: '王偉成 ',
    url:'/course?teacher=王偉成 '
  },
  {
    title: '工程數學（二）',
    url:'/course?course_name=工程數學（二）'
  },
  
  {
    title: '夏育群 ',
    url:'/course?teacher=夏育群 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '崔兆棠 ',
    url:'/course?teacher=崔兆棠 '
  },
  {
    title: '應用力學',
    url:'/course?course_name=應用力學'
  },
  
  {
    title: '陳維新 ',
    url:'/course?teacher=陳維新 '
  },
  {
    title: '工程材料科學',
    url:'/course?course_name=工程材料科學'
  },
  
  {
    title: '夏育群 ',
    url:'/course?teacher=夏育群 '
  },
  {
    title: '電腦輔助設計',
    url:'/course?course_name=電腦輔助設計'
  },
  
  {
    title: '夏　杼 ',
    url:'/course?teacher=夏　杼 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '夏　杼 ',
    url:'/course?teacher=夏　杼 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '王惠嘉 ',
    url:'/course?teacher=王惠嘉 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '王惠嘉 ',
    url:'/course?teacher=王惠嘉 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '謝中奇 黃宇翔*呂執中 謝佩璇 ',
    url:'/course?teacher=謝中奇 黃宇翔*呂執中 謝佩璇 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '王惠嘉 ',
    url:'/course?teacher=王惠嘉 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '劉任修 ',
    url:'/course?teacher=劉任修 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '陳梁軒 王泰裕 李賢得 謝中奇 黃宇翔 王惠嘉 翁慈宗 李昇暾*張秀雲 王維聰 呂執中 鄭詩瑜 林明毅 張裕清 劉任修 胡政宏 林清河 高　強 利德江 ',
    url:'/course?teacher=陳梁軒 王泰裕 李賢得 謝中奇 黃宇翔 王惠嘉 翁慈宗 李昇暾*張秀雲 王維聰 呂執中 鄭詩瑜 林明毅 張裕清 劉任修 胡政宏 林清河 高　強 利德江 '
  },
  {
    title: '教學實習',
    url:'/course?course_name=教學實習'
  },
  
  {
    title: '高　強 ',
    url:'/course?teacher=高　強 '
  },
  {
    title: '隨機模式',
    url:'/course?course_name=隨機模式'
  },
  
  {
    title: '胡政宏 ',
    url:'/course?teacher=胡政宏 '
  },
  {
    title: '結構方程模型',
    url:'/course?course_name=結構方程模型'
  },
  
  {
    title: '張裕清 ',
    url:'/course?teacher=張裕清 '
  },
  {
    title: '品質工程',
    url:'/course?course_name=品質工程'
  },
  
  {
    title: '林明毅 ',
    url:'/course?teacher=林明毅 '
  },
  {
    title: '實體性人因工程',
    url:'/course?course_name=實體性人因工程'
  },
  
  {
    title: '鄭詩瑜 ',
    url:'/course?teacher=鄭詩瑜 '
  },
  {
    title: '組織發展',
    url:'/course?course_name=組織發展'
  },
  
  {
    title: '張秀雲 ',
    url:'/course?teacher=張秀雲 '
  },
  {
    title: '排程理論',
    url:'/course?course_name=排程理論'
  },
  
  {
    title: '王維聰 ',
    url:'/course?teacher=王維聰 '
  },
  {
    title: '電子商務',
    url:'/course?course_name=電子商務'
  },
  
  {
    title: '王惠嘉 ',
    url:'/course?teacher=王惠嘉 '
  },
  {
    title: '高等資料庫管理',
    url:'/course?course_name=高等資料庫管理'
  },
  
  {
    title: '翁慈宗 ',
    url:'/course?teacher=翁慈宗 '
  },
  {
    title: '機器學習',
    url:'/course?course_name=機器學習'
  },
  
  {
    title: '黃宇翔 ',
    url:'/course?teacher=黃宇翔 '
  },
  {
    title: '管理決策分析',
    url:'/course?course_name=管理決策分析'
  },
  
  {
    title: '謝中奇 ',
    url:'/course?teacher=謝中奇 '
  },
  {
    title: '策略競局',
    url:'/course?course_name=策略競局'
  },
  
  {
    title: '李賢得 ',
    url:'/course?teacher=李賢得 '
  },
  {
    title: '實驗設計',
    url:'/course?course_name=實驗設計'
  },
  
  {
    title: '王泰裕 ',
    url:'/course?teacher=王泰裕 '
  },
  {
    title: '類神經網路應用',
    url:'/course?course_name=類神經網路應用'
  },
  
  {
    title: '呂執中 ',
    url:'/course?teacher=呂執中 '
  },
  {
    title: '國際品管',
    url:'/course?course_name=國際品管'
  },
  
  {
    title: '陳梁軒 ',
    url:'/course?teacher=陳梁軒 '
  },
  {
    title: '不確定模式與管理',
    url:'/course?course_name=不確定模式與管理'
  },
  
  {
    title: '林清河 ',
    url:'/course?teacher=林清河 '
  },
  {
    title: '企業研究方法',
    url:'/course?course_name=企業研究方法'
  },
  
  {
    title: '利德江 ',
    url:'/course?teacher=利德江 '
  },
  {
    title: '領導理論',
    url:'/course?course_name=領導理論'
  },
  
  {
    title: '高　強 ',
    url:'/course?teacher=高　強 '
  },
  {
    title: '多目標決策分析',
    url:'/course?course_name=多目標決策分析'
  },
  
  {
    title: '陳欣之 ',
    url:'/course?teacher=陳欣之 '
  },
  {
    title: '專題研究',
    url:'/course?course_name=專題研究'
  },
  
  {
    title: '陳欣之 ',
    url:'/course?teacher=陳欣之 '
  },
  {
    title: '國際戰略決策分析',
    url:'/course?course_name=國際戰略決策分析'
  },
  
  {
    title: '洪敬富 ',
    url:'/course?teacher=洪敬富 '
  },
  {
    title: '中國大陸政經專題',
    url:'/course?course_name=中國大陸政經專題'
  },
  
  {
    title: '蒙志成 ',
    url:'/course?teacher=蒙志成 '
  },
  {
    title: '兩岸政經關係',
    url:'/course?course_name=兩岸政經關係'
  },
  
  {
    title: '楊永年 ',
    url:'/course?teacher=楊永年 '
  },
  {
    title: '政治治理與發展專題 :官僚體系',
    url:'/course?course_name=政治治理與發展專題 :官僚體系'
  },
  
  {
    title: '丁仁方 ',
    url:'/course?teacher=丁仁方 '
  },
  {
    title: '地方政治經濟',
    url:'/course?course_name=地方政治經濟'
  },
  
  {
    title: '王金壽 ',
    url:'/course?teacher=王金壽 '
  },
  {
    title: '西方政治學譯注選讀',
    url:'/course?course_name=西方政治學譯注選讀'
  },
  
  {
    title: '洪敬富*鍾兆真*王宏仁*王奕婷*',
    url:'/course?teacher=洪敬富*鍾兆真*王宏仁*王奕婷*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '蔣麗君*楊永年*',
    url:'/course?teacher=蔣麗君*楊永年*'
  },
  {
    title: '政策分析',
    url:'/course?course_name=政策分析'
  },
  
  {
    title: '蒙志成 ',
    url:'/course?teacher=蒙志成 '
  },
  {
    title: '政治經濟學（二）',
    url:'/course?course_name=政治經濟學（二）'
  },
  
  {
    title: '陳欣之 ',
    url:'/course?teacher=陳欣之 '
  },
  {
    title: '專題研究',
    url:'/course?course_name=專題研究'
  },
  
  {
    title: '陳欣之 ',
    url:'/course?teacher=陳欣之 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '陳欣之 ',
    url:'/course?teacher=陳欣之 '
  },
  {
    title: '國際關係理論',
    url:'/course?course_name=國際關係理論'
  },
  
  {
    title: '謝文真 ',
    url:'/course?teacher=謝文真 '
  },
  {
    title: '經濟發展與幸福經濟',
    url:'/course?course_name=經濟發展與幸福經濟'
  },
  
  {
    title: '洪敬富 ',
    url:'/course?teacher=洪敬富 '
  },
  {
    title: '網路政治與社會',
    url:'/course?course_name=網路政治與社會'
  },
  
  {
    title: '許永河 ',
    url:'/course?teacher=許永河 '
  },
  {
    title: '高齡經濟分析',
    url:'/course?course_name=高齡經濟分析'
  },
  
  {
    title: '王金壽 ',
    url:'/course?teacher=王金壽 '
  },
  {
    title: '西方政治學譯注選讀',
    url:'/course?course_name=西方政治學譯注選讀'
  },
  
  {
    title: '丁仁方 ',
    url:'/course?teacher=丁仁方 '
  },
  {
    title: '地方政治經濟',
    url:'/course?course_name=地方政治經濟'
  },
  
  {
    title: '鍾兆真*王奕婷*',
    url:'/course?teacher=鍾兆真*王奕婷*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '蒙志成 ',
    url:'/course?teacher=蒙志成 '
  },
  {
    title: '政經發展與政策',
    url:'/course?course_name=政經發展與政策'
  },
  
  {
    title: '王宏仁*平思寧*',
    url:'/course?teacher=王宏仁*平思寧*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '蔣麗君 ',
    url:'/course?teacher=蔣麗君 '
  },
  {
    title: '政策分析',
    url:'/course?course_name=政策分析'
  },
  
  {
    title: '平思寧 ',
    url:'/course?teacher=平思寧 '
  },
  {
    title: '政治經濟學（二）',
    url:'/course?course_name=政治經濟學（二）'
  },
  
  {
    title: '高雅慧*鄭靜蘭 ',
    url:'/course?teacher=高雅慧*鄭靜蘭 '
  },
  {
    title: '實證醫學與研究設計',
    url:'/course?course_name=實證醫學與研究設計'
  },
  
  {
    title: '蔡瑞真 ',
    url:'/course?teacher=蔡瑞真 '
  },
  {
    title: '教學實習（二）',
    url:'/course?course_name=教學實習（二）'
  },
  
  {
    title: '高雅慧*鄭靜蘭 ',
    url:'/course?teacher=高雅慧*鄭靜蘭 '
  },
  {
    title: '藥物流行病學特論',
    url:'/course?course_name=藥物流行病學特論'
  },
  
  {
    title: '徐之昇 ',
    url:'/course?teacher=徐之昇 '
  },
  {
    title: '社會醫學研究方法',
    url:'/course?course_name=社會醫學研究方法'
  },
  
  {
    title: '張惠華 ',
    url:'/course?teacher=張惠華 '
  },
  {
    title: '藥物基因體資料庫之分析與應用（一）',
    url:'/course?course_name=藥物基因體資料庫之分析與應用（一）'
  },
  
  {
    title: '張惠華 ',
    url:'/course?teacher=張惠華 '
  },
  {
    title: '藥物基因體學特論',
    url:'/course?course_name=藥物基因體學特論'
  },
  
  {
    title: '歐凰姿 ',
    url:'/course?teacher=歐凰姿 '
  },
  {
    title: '藥物經濟學特論',
    url:'/course?course_name=藥物經濟學特論'
  },
  
  {
    title: '高雅慧 ',
    url:'/course?teacher=高雅慧 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '洪欣儀 郭賓崇 吳天賞 蔡瑞真 周辰熹*黃金鼎 張惠華 ',
    url:'/course?teacher=洪欣儀 郭賓崇 吳天賞 蔡瑞真 周辰熹*黃金鼎 張惠華 '
  },
  {
    title: '藥品動態書報討論（四）',
    url:'/course?course_name=藥品動態書報討論（四）'
  },
  
  {
    title: '徐之昇 洪欣儀 郭賓崇 吳天賞 賴嘉鎮 高雅慧*蔡瑞真 周辰熹 王明誠 鄭靜蘭 歐凰姿 張惠華 ',
    url:'/course?teacher=徐之昇 洪欣儀 郭賓崇 吳天賞 賴嘉鎮 高雅慧*蔡瑞真 周辰熹 王明誠 鄭靜蘭 歐凰姿 張惠華 '
  },
  {
    title: '臨床藥學專題討論（四）',
    url:'/course?course_name=臨床藥學專題討論（四）'
  },
  
  {
    title: '周辰熹 ',
    url:'/course?teacher=周辰熹 '
  },
  {
    title: '藥動學應用軟體概論',
    url:'/course?course_name=藥動學應用軟體概論'
  },
  
  {
    title: '張俊彥 徐之昇 洪欣儀 吳天賞 賴嘉鎮 高雅慧*蔡瑞真 周辰熹 王明誠 陳本忠 郭靜娟 陳立宗 劉柯俊 鄭靜蘭 歐凰姿 黃金鼎 林立人 張惠華 ',
    url:'/course?teacher=張俊彥 徐之昇 洪欣儀 吳天賞 賴嘉鎮 高雅慧*蔡瑞真 周辰熹 王明誠 陳本忠 郭靜娟 陳立宗 劉柯俊 鄭靜蘭 歐凰姿 黃金鼎 林立人 張惠華 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '張俊彥 徐之昇 洪欣儀 郭賓崇 吳天賞 高雅慧 蔡瑞真*周辰熹 王明誠 陳本忠 郭靜娟 陳立宗 劉柯俊 鄭靜蘭 歐凰姿 黃金鼎 林立人 張惠華 ',
    url:'/course?teacher=張俊彥 徐之昇 洪欣儀 郭賓崇 吳天賞 高雅慧 蔡瑞真*周辰熹 王明誠 陳本忠 郭靜娟 陳立宗 劉柯俊 鄭靜蘭 歐凰姿 黃金鼎 林立人 張惠華 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '高雅慧*王明誠 ',
    url:'/course?teacher=高雅慧*王明誠 '
  },
  {
    title: '藥物治療專題討論（一）',
    url:'/course?course_name=藥物治療專題討論（一）'
  },
  
  {
    title: '高雅慧*王明誠 ',
    url:'/course?teacher=高雅慧*王明誠 '
  },
  {
    title: '藥物不良反應專題討論（一）',
    url:'/course?course_name=藥物不良反應專題討論（一）'
  },
  
  {
    title: '蔡瑞真 ',
    url:'/course?teacher=蔡瑞真 '
  },
  {
    title: '藥品生體輸送',
    url:'/course?course_name=藥品生體輸送'
  },
  
  {
    title: '周辰熹 ',
    url:'/course?teacher=周辰熹 '
  },
  {
    title: '臨床藥品動態學',
    url:'/course?course_name=臨床藥品動態學'
  },
  
  {
    title: '周辰熹 黃金鼎 ',
    url:'/course?teacher=周辰熹 黃金鼎 '
  },
  {
    title: '臨床藥品動態學',
    url:'/course?course_name=臨床藥品動態學'
  },
  
  {
    title: '黃金鼎 ',
    url:'/course?teacher=黃金鼎 '
  },
  {
    title: '藥物發展實習（四）',
    url:'/course?course_name=藥物發展實習（四）'
  },
  
  {
    title: '黃金鼎 ',
    url:'/course?teacher=黃金鼎 '
  },
  {
    title: '藥物發展實習（二）',
    url:'/course?course_name=藥物發展實習（二）'
  },
  
  {
    title: '高淑敏 許美英 林嘉音 ',
    url:'/course?teacher=高淑敏 許美英 林嘉音 '
  },
  {
    title: '臨床實習（一）',
    url:'/course?course_name=臨床實習（一）'
  },
  
  {
    title: '洪欣儀 郭賓崇 吳天賞 蔡瑞真 周辰熹*黃金鼎 張惠華 ',
    url:'/course?teacher=洪欣儀 郭賓崇 吳天賞 蔡瑞真 周辰熹*黃金鼎 張惠華 '
  },
  {
    title: '藥品動態書報討論（二）',
    url:'/course?course_name=藥品動態書報討論（二）'
  },
  
  {
    title: '徐之昇 洪欣儀 郭賓崇 吳天賞 賴嘉鎮 高雅慧*蔡瑞真 周辰熹 王明誠 鄭靜蘭 歐凰姿 張惠華 ',
    url:'/course?teacher=徐之昇 洪欣儀 郭賓崇 吳天賞 賴嘉鎮 高雅慧*蔡瑞真 周辰熹 王明誠 鄭靜蘭 歐凰姿 張惠華 '
  },
  {
    title: '臨床藥學專題討論（二）',
    url:'/course?course_name=臨床藥學專題討論（二）'
  },
  
  {
    title: '吳炳慶*謝達斌 ',
    url:'/course?teacher=吳炳慶*謝達斌 '
  },
  {
    title: '轉譯生醫奈米導論（二）',
    url:'/course?course_name=轉譯生醫奈米導論（二）'
  },
  
  {
    title: '陳家進 葉明龍 蘇芳慶 吳炳慶 陳芃婷*林哲偉 楊岱樺 李澤民 ',
    url:'/course?teacher=陳家進 葉明龍 蘇芳慶 吳炳慶 陳芃婷*林哲偉 楊岱樺 李澤民 '
  },
  {
    title: '醫療器材創新設計（二）',
    url:'/course?course_name=醫療器材創新設計（二）'
  },
  
  {
    title: '陳芃婷 ',
    url:'/course?teacher=陳芃婷 '
  },
  {
    title: '科技創業與投資管理',
    url:'/course?course_name=科技創業與投資管理'
  },
  
  {
    title: '莊漢聲 ',
    url:'/course?teacher=莊漢聲 '
  },
  {
    title: '生醫流體光學量測技術',
    url:'/course?course_name=生醫流體光學量測技術'
  },
  
  {
    title: '陳家進 ',
    url:'/course?teacher=陳家進 '
  },
  {
    title: '生物醫學信號處理',
    url:'/course?course_name=生物醫學信號處理'
  },
  
  {
    title: '胡晉嘉 ',
    url:'/course?teacher=胡晉嘉 '
  },
  {
    title: '軟組織組織工程特論',
    url:'/course?course_name=軟組織組織工程特論'
  },
  
  {
    title: '張志涵 葉明龍*黃振勳 李澤民 許修銘 劉佳觀 謝達斌 莊淑芬 王東堯 張川陽 陳永崇 曾春祺 ',
    url:'/course?teacher=張志涵 葉明龍*黃振勳 李澤民 許修銘 劉佳觀 謝達斌 莊淑芬 王東堯 張川陽 陳永崇 曾春祺 '
  },
  {
    title: '牙科臨床工程',
    url:'/course?course_name=牙科臨床工程'
  },
  
  {
    title: '胡晉嘉 ',
    url:'/course?teacher=胡晉嘉 '
  },
  {
    title: '血管力學',
    url:'/course?course_name=血管力學'
  },
  
  {
    title: '鄭國順 ',
    url:'/course?teacher=鄭國順 '
  },
  {
    title: '醫學影像分析',
    url:'/course?course_name=醫學影像分析'
  },
  
  {
    title: '郭榮富 ',
    url:'/course?teacher=郭榮富 '
  },
  {
    title: '有限元素法',
    url:'/course?course_name=有限元素法'
  },
  
  {
    title: '蘇芳慶 ',
    url:'/course?teacher=蘇芳慶 '
  },
  {
    title: '人體動態分析',
    url:'/course?course_name=人體動態分析'
  },
  
  {
    title: '陳家進 陳天送 張憲彰 鄭國順 黃執中 郭榮富 方佑華*林哲偉 ',
    url:'/course?teacher=陳家進 陳天送 張憲彰 鄭國順 黃執中 郭榮富 方佑華*林哲偉 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '張志涵 葉明龍 胡晉嘉 蘇芳慶 莊漢聲*邱文泰 林宙晴 吳炳慶 陳芃婷 楊岱樺 涂庭源 ',
    url:'/course?teacher=張志涵 葉明龍 胡晉嘉 蘇芳慶 莊漢聲*邱文泰 林宙晴 吳炳慶 陳芃婷 楊岱樺 涂庭源 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '陳家進 ',
    url:'/course?teacher=陳家進 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '陳家進 陳天送 張憲彰 鄭國順 黃執中 方佑華*陳芃婷 林哲偉 ',
    url:'/course?teacher=陳家進 陳天送 張憲彰 鄭國順 黃執中 方佑華*陳芃婷 林哲偉 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '張志涵 葉明龍 胡晉嘉 蘇芳慶 莊漢聲*邱文泰 林宙晴 郭榮富 吳炳慶 楊岱樺 涂庭源 ',
    url:'/course?teacher=張志涵 葉明龍 胡晉嘉 蘇芳慶 莊漢聲*邱文泰 林宙晴 郭榮富 吳炳慶 楊岱樺 涂庭源 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '陳家進 陳天送 張憲彰 鄭國順 黃執中 方佑華*陳芃婷 林哲偉 ',
    url:'/course?teacher=陳家進 陳天送 張憲彰 鄭國順 黃執中 方佑華*陳芃婷 林哲偉 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '張志涵 葉明龍 胡晉嘉 蘇芳慶 莊漢聲*邱文泰 林宙晴 郭榮富 吳炳慶 楊岱樺 涂庭源 ',
    url:'/course?teacher=張志涵 葉明龍 胡晉嘉 蘇芳慶 莊漢聲*邱文泰 林宙晴 郭榮富 吳炳慶 楊岱樺 涂庭源 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陳家進 陳天送 張憲彰 鄭國順 黃執中 方佑華*陳芃婷 林哲偉 ',
    url:'/course?teacher=陳家進 陳天送 張憲彰 鄭國順 黃執中 方佑華*陳芃婷 林哲偉 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '張志涵 葉明龍 胡晉嘉 蘇芳慶 莊漢聲*邱文泰 林宙晴 郭榮富 吳炳慶 楊岱樺 涂庭源 ',
    url:'/course?teacher=張志涵 葉明龍 胡晉嘉 蘇芳慶 莊漢聲*邱文泰 林宙晴 郭榮富 吳炳慶 楊岱樺 涂庭源 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '楊岱樺 ',
    url:'/course?teacher=楊岱樺 '
  },
  {
    title: '工程生理學',
    url:'/course?course_name=工程生理學'
  },
  
  {
    title: '蔡明世 ',
    url:'/course?teacher=蔡明世 '
  },
  {
    title: '醫療管理與法規',
    url:'/course?course_name=醫療管理與法規'
  },
  
  {
    title: '陳家進*張憲彰 葉明龍 胡晉嘉 鄭國順 蘇芳慶 莊漢聲 邱文泰 周有禮 黃執中 郭榮富 楊岱樺 涂庭源 ',
    url:'/course?teacher=陳家進*張憲彰 葉明龍 胡晉嘉 鄭國順 蘇芳慶 莊漢聲 邱文泰 周有禮 黃執中 郭榮富 楊岱樺 涂庭源 '
  },
  {
    title: '醫學工程概論',
    url:'/course?course_name=醫學工程概論'
  },
  
  {
    title: '陳天送 ',
    url:'/course?teacher=陳天送 '
  },
  {
    title: '醫用數學（二）',
    url:'/course?course_name=醫用數學（二）'
  },
  
  {
    title: '張憲彰 ',
    url:'/course?teacher=張憲彰 '
  },
  {
    title: '生醫感測器',
    url:'/course?course_name=生醫感測器'
  },
  
  {
    title: '蕭志坤 ',
    url:'/course?teacher=蕭志坤 '
  },
  {
    title: '生物材料力學',
    url:'/course?course_name=生物材料力學'
  },
  
  {
    title: '黃玲惠 蔡坤哲*',
    url:'/course?teacher=黃玲惠 蔡坤哲*'
  },
  {
    title: '再生醫學技術',
    url:'/course?course_name=再生醫學技術'
  },
  
  {
    title: '張純純 ',
    url:'/course?teacher=張純純 '
  },
  {
    title: '發育生物學特論',
    url:'/course?course_name=發育生物學特論'
  },
  
  {
    title: '王浩文 洪健睿 黃玲惠 張純純 洪建中 林鼎晏 洪良宜*李瑞花 ',
    url:'/course?teacher=王浩文 洪健睿 黃玲惠 張純純 洪建中 林鼎晏 洪良宜*李瑞花 '
  },
  {
    title: '高等細胞生物學',
    url:'/course?course_name=高等細胞生物學'
  },
  
  {
    title: '王涵青 林士鳴 ',
    url:'/course?teacher=王涵青 林士鳴 '
  },
  {
    title: '轉譯生物學',
    url:'/course?course_name=轉譯生物學'
  },
  
  {
    title: '陳逸民 ',
    url:'/course?teacher=陳逸民 '
  },
  {
    title: '蛋白質純化與分析',
    url:'/course?course_name=蛋白質純化與分析'
  },
  
  {
    title: '黃玲惠 ',
    url:'/course?teacher=黃玲惠 '
  },
  {
    title: '高等生物醫學技術',
    url:'/course?course_name=高等生物醫學技術'
  },
  
  {
    title: '張純純 ',
    url:'/course?teacher=張純純 '
  },
  {
    title: '研究特論（一）',
    url:'/course?course_name=研究特論（一）'
  },
  
  {
    title: '黃玲惠 王涵青*',
    url:'/course?teacher=黃玲惠 王涵青*'
  },
  {
    title: '研究特論（二）',
    url:'/course?course_name=研究特論（二）'
  },
  
  {
    title: '陳逸民 ',
    url:'/course?teacher=陳逸民 '
  },
  {
    title: '研究特論（一）',
    url:'/course?course_name=研究特論（一）'
  },
  
  {
    title: '陳宗嶽 盧福翊*',
    url:'/course?teacher=陳宗嶽 盧福翊*'
  },
  {
    title: '書報討論（四）',
    url:'/course?course_name=書報討論（四）'
  },
  
  {
    title: '陳宗嶽 ',
    url:'/course?teacher=陳宗嶽 '
  },
  {
    title: '蛋白體學技術實驗',
    url:'/course?course_name=蛋白體學技術實驗'
  },
  
  {
    title: '張清俊 ',
    url:'/course?teacher=張清俊 '
  },
  {
    title: '植物分子生物學特論',
    url:'/course?course_name=植物分子生物學特論'
  },
  
  {
    title: '洪健睿 ',
    url:'/course?teacher=洪健睿 '
  },
  {
    title: '分子免疫學',
    url:'/course?course_name=分子免疫學'
  },
  
  {
    title: '盧福翊 ',
    url:'/course?teacher=盧福翊 '
  },
  {
    title: '書報討論（二）',
    url:'/course?course_name=書報討論（二）'
  },
  
  {
    title: '張清俊 張純純*',
    url:'/course?teacher=張清俊 張純純*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '陳宗嶽 ',
    url:'/course?teacher=陳宗嶽 '
  },
  {
    title: '蛋白生物技術特論',
    url:'/course?course_name=蛋白生物技術特論'
  },
  
  {
    title: '陳宗嶽*陳立人 陳俊榮 ',
    url:'/course?teacher=陳宗嶽*陳立人 陳俊榮 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '洪健睿 林士鳴*',
    url:'/course?teacher=洪健睿 林士鳴*'
  },
  {
    title: '書報討論（四）',
    url:'/course?course_name=書報討論（四）'
  },
  
  {
    title: '張清俊 洪健睿 黃玲惠 張純純 林士鳴*',
    url:'/course?teacher=張清俊 洪健睿 黃玲惠 張純純 林士鳴*'
  },
  {
    title: '書報討論（二）',
    url:'/course?course_name=書報討論（二）'
  },
  
  {
    title: '蕭世裕 廖泓鈞 陳宗嶽 張清俊 洪健睿 黃玲惠 林翰佑 陳逸民 王涵青 張純純*盧福翊 林士鳴 陳立人 陳俊榮 張文綺 李瑞花 ',
    url:'/course?teacher=蕭世裕 廖泓鈞 陳宗嶽 張清俊 洪健睿 黃玲惠 林翰佑 陳逸民 王涵青 張純純*盧福翊 林士鳴 陳立人 陳俊榮 張文綺 李瑞花 '
  },
  {
    title: '生物技術學（二）',
    url:'/course?course_name=生物技術學（二）'
  },
  
  {
    title: '林士鳴 ',
    url:'/course?teacher=林士鳴 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陳逸民*王涵青 ',
    url:'/course?teacher=陳逸民*王涵青 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陳宗嶽 陳逸民 王涵青 盧福翊 林士鳴*',
    url:'/course?teacher=陳宗嶽 陳逸民 王涵青 盧福翊 林士鳴*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '王澤世 ',
    url:'/course?teacher=王澤世 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '王澤世 ',
    url:'/course?teacher=王澤世 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '黃華瑋 ',
    url:'/course?teacher=黃華瑋 '
  },
  {
    title: '公司治理研究',
    url:'/course?course_name=公司治理研究'
  },
  
  {
    title: '顏盟峯 ',
    url:'/course?teacher=顏盟峯 '
  },
  {
    title: '企業社會責任與社會責任投資',
    url:'/course?course_name=企業社會責任與社會責任投資'
  },
  
  {
    title: '徐立群 ',
    url:'/course?teacher=徐立群 '
  },
  {
    title: '資訊科技與創新及競爭優勢',
    url:'/course?course_name=資訊科技與創新及競爭優勢'
  },
  
  {
    title: '劉裕宏 ',
    url:'/course?teacher=劉裕宏 '
  },
  {
    title: '金融資產證券化',
    url:'/course?course_name=金融資產證券化'
  },
  
  {
    title: '王澤世 ',
    url:'/course?teacher=王澤世 '
  },
  {
    title: '計量經濟學',
    url:'/course?course_name=計量經濟學'
  },
  
  {
    title: '謝喻婷 ',
    url:'/course?teacher=謝喻婷 '
  },
  {
    title: '財務會計原理',
    url:'/course?course_name=財務會計原理'
  },
  
  {
    title: '周庭楷 ',
    url:'/course?teacher=周庭楷 '
  },
  {
    title: '中級會計學',
    url:'/course?course_name=中級會計學'
  },
  
  {
    title: '楊朝旭 ',
    url:'/course?teacher=楊朝旭 '
  },
  {
    title: '高級管理會計學',
    url:'/course?course_name=高級管理會計學'
  },
  
  {
    title: '黃炳勳 ',
    url:'/course?teacher=黃炳勳 '
  },
  {
    title: '投資學理論',
    url:'/course?course_name=投資學理論'
  },
  
  {
    title: '楊朝旭 ',
    url:'/course?teacher=楊朝旭 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '楊朝旭 ',
    url:'/course?teacher=楊朝旭 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '薛明賢 ',
    url:'/course?teacher=薛明賢 '
  },
  {
    title: '財務個案研究',
    url:'/course?course_name=財務個案研究'
  },
  
  {
    title: '梁少懷 ',
    url:'/course?teacher=梁少懷 '
  },
  {
    title: '財務經濟學',
    url:'/course?course_name=財務經濟學'
  },
  
  {
    title: '周庭楷 ',
    url:'/course?teacher=周庭楷 '
  },
  {
    title: '會計及財務研究方法',
    url:'/course?course_name=會計及財務研究方法'
  },
  
  {
    title: '許育綝 ',
    url:'/course?teacher=許育綝 '
  },
  {
    title: '計量經濟學',
    url:'/course?course_name=計量經濟學'
  },
  
  {
    title: '梁少懷 ',
    url:'/course?teacher=梁少懷 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '黃華瑋 ',
    url:'/course?teacher=黃華瑋 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '王明隆*林志隆*',
    url:'/course?teacher=王明隆*林志隆*'
  },
  {
    title: '金融投資與創新商品交易策略實務',
    url:'/course?course_name=金融投資與創新商品交易策略實務'
  },
  
  {
    title: '吳清在 ',
    url:'/course?teacher=吳清在 '
  },
  {
    title: '大陸稅法研究',
    url:'/course?course_name=大陸稅法研究'
  },
  
  {
    title: '顏盟峯 ',
    url:'/course?teacher=顏盟峯 '
  },
  {
    title: '企業社會責任與社會責任投資',
    url:'/course?course_name=企業社會責任與社會責任投資'
  },
  
  {
    title: '李宏志 ',
    url:'/course?teacher=李宏志 '
  },
  {
    title: '國際財務管理',
    url:'/course?course_name=國際財務管理'
  },
  
  {
    title: '林軒竹 ',
    url:'/course?teacher=林軒竹 '
  },
  {
    title: '財務報告分析與研究',
    url:'/course?course_name=財務報告分析與研究'
  },
  
  {
    title: '小島健司 ',
    url:'/course?teacher=小島健司 '
  },
  {
    title: '基因組演化',
    url:'/course?course_name=基因組演化'
  },
  
  {
    title: '廖泓鈞 ',
    url:'/course?teacher=廖泓鈞 '
  },
  {
    title: '微生物基因體學與實作',
    url:'/course?course_name=微生物基因體學與實作'
  },
  
  {
    title: '仲澤剛史 ',
    url:'/course?teacher=仲澤剛史 '
  },
  {
    title: '理論生態學',
    url:'/course?course_name=理論生態學'
  },
  
  {
    title: '劉雅心 邱慈暉*',
    url:'/course?teacher=劉雅心 邱慈暉*'
  },
  {
    title: '視覺科學',
    url:'/course?course_name=視覺科學'
  },
  
  {
    title: '張松彬 郭瑋君*',
    url:'/course?teacher=張松彬 郭瑋君*'
  },
  {
    title: '植物逆境生物學',
    url:'/course?course_name=植物逆境生物學'
  },
  
  {
    title: '吳文鑾 ',
    url:'/course?teacher=吳文鑾 '
  },
  {
    title: '分子遺傳學特論',
    url:'/course?course_name=分子遺傳學特論'
  },
  
  {
    title: '陳一菁 仲澤剛史*',
    url:'/course?teacher=陳一菁 仲澤剛史*'
  },
  {
    title: '生態系統特論',
    url:'/course?course_name=生態系統特論'
  },
  
  {
    title: '劉雅心 ',
    url:'/course?teacher=劉雅心 '
  },
  {
    title: '果蠅胚胎發育學獨立研究',
    url:'/course?course_name=果蠅胚胎發育學獨立研究'
  },
  
  {
    title: '李瑞花 ',
    url:'/course?teacher=李瑞花 '
  },
  {
    title: '植物生物科技',
    url:'/course?course_name=植物生物科技'
  },
  
  {
    title: '王浩文 洪健睿 黃玲惠 張純純 洪建中 林鼎晏 洪良宜*李瑞花 ',
    url:'/course?teacher=王浩文 洪健睿 黃玲惠 張純純 洪建中 林鼎晏 洪良宜*李瑞花 '
  },
  {
    title: '高等細胞生物學',
    url:'/course?course_name=高等細胞生物學'
  },
  
  {
    title: '麥愛堂 ',
    url:'/course?teacher=麥愛堂 '
  },
  {
    title: '細胞新陳代謝調控',
    url:'/course?course_name=細胞新陳代謝調控'
  },
  
  {
    title: '李亞夫 王浩文 何盧勳 邱慈暉*陳一菁 李純純 彭怡禎 ',
    url:'/course?teacher=李亞夫 王浩文 何盧勳 邱慈暉*陳一菁 李純純 彭怡禎 '
  },
  {
    title: '普通生物學實驗教學（二）',
    url:'/course?course_name=普通生物學實驗教學（二）'
  },
  
  {
    title: '宋皇模 ',
    url:'/course?teacher=宋皇模 '
  },
  {
    title: '比較基因體學',
    url:'/course?course_name=比較基因體學'
  },
  
  {
    title: '邱慈暉 ',
    url:'/course?teacher=邱慈暉 '
  },
  {
    title: '海洋及河口生物生理生態',
    url:'/course?course_name=海洋及河口生物生理生態'
  },
  
  {
    title: '蔣鎮宇*',
    url:'/course?teacher=蔣鎮宇*'
  },
  {
    title: '族群遺傳學',
    url:'/course?course_name=族群遺傳學'
  },
  
  {
    title: '陳文輝 張松彬 ',
    url:'/course?teacher=陳文輝 張松彬 '
  },
  {
    title: '作物育種與生物技術',
    url:'/course?course_name=作物育種與生物技術'
  },
  
  {
    title: '仲澤剛史 小島健司*',
    url:'/course?teacher=仲澤剛史 小島健司*'
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '仲澤剛史 小島健司*',
    url:'/course?teacher=仲澤剛史 小島健司*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '邱慈暉 陳一菁*',
    url:'/course?teacher=邱慈暉 陳一菁*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '廖泓鈞*劉雅心 ',
    url:'/course?teacher=廖泓鈞*劉雅心 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '廖泓鈞*劉雅心 ',
    url:'/course?teacher=廖泓鈞*劉雅心 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '李純純*彭怡禎 ',
    url:'/course?teacher=李純純*彭怡禎 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '陳文輝 陳虹樺*吳文鑾 張清俊 蔡文杰 ',
    url:'/course?teacher=陳文輝 陳虹樺*吳文鑾 張清俊 蔡文杰 '
  },
  {
    title: '蘭花生物科技學',
    url:'/course?course_name=蘭花生物科技學'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '體育（四）',
    url:'/course?course_name=體育（四）'
  },
  
  {
    title: '張清俊*',
    url:'/course?teacher=張清俊*'
  },
  {
    title: '植物生理學',
    url:'/course?course_name=植物生理學'
  },
  
  {
    title: '張純純*',
    url:'/course?teacher=張純純*'
  },
  {
    title: '發育遺傳學',
    url:'/course?course_name=發育遺傳學'
  },
  
  {
    title: '洪建中*',
    url:'/course?teacher=洪建中*'
  },
  {
    title: '遺傳工程技術',
    url:'/course?course_name=遺傳工程技術'
  },
  
  {
    title: '劉宗霖*曾大千 ',
    url:'/course?teacher=劉宗霖*曾大千 '
  },
  {
    title: '基因體學與生物資料分析（一）',
    url:'/course?course_name=基因體學與生物資料分析（一）'
  },
  
  {
    title: '陳宗嶽 張清俊 洪健睿 陳逸民 王涵青*羅竹芳 盧福翊 林士鳴 ',
    url:'/course?teacher=陳宗嶽 張清俊 洪健睿 陳逸民 王涵青*羅竹芳 盧福翊 林士鳴 '
  },
  {
    title: '農業及海洋生技與產業概論',
    url:'/course?course_name=農業及海洋生技與產業概論'
  },
  
  {
    title: '張純純 洪建中 林鼎晏 洪良宜*',
    url:'/course?teacher=張純純 洪建中 林鼎晏 洪良宜*'
  },
  {
    title: '細胞生物學',
    url:'/course?course_name=細胞生物學'
  },
  
  {
    title: '陳逸民*王涵青 洪良宜 ',
    url:'/course?teacher=陳逸民*王涵青 洪良宜 '
  },
  {
    title: '生物技術核心實驗（二）',
    url:'/course?course_name=生物技術核心實驗（二）'
  },
  
  {
    title: '張清俊*陳逸民 羅玉枝 林士鳴 ',
    url:'/course?teacher=張清俊*陳逸民 羅玉枝 林士鳴 '
  },
  {
    title: '生物化學（二）',
    url:'/course?course_name=生物化學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '體育（二）',
    url:'/course?course_name=體育（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基礎國文（二）',
    url:'/course?course_name=基礎國文（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '關汝琳 ',
    url:'/course?teacher=關汝琳 '
  },
  {
    title: '微積分（二）',
    url:'/course?course_name=微積分（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '普通物理學實驗',
    url:'/course?course_name=普通物理學實驗'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '普通物理學',
    url:'/course?course_name=普通物理學'
  },
  
  {
    title: '王涵青 劉宗霖*曾大千 林士鳴 ',
    url:'/course?teacher=王涵青 劉宗霖*曾大千 林士鳴 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '張純純 林鼎晏 洪良宜*郭瑋君 ',
    url:'/course?teacher=張純純 林鼎晏 洪良宜*郭瑋君 '
  },
  {
    title: '普通生物學實驗（二）',
    url:'/course?course_name=普通生物學實驗（二）'
  },
  
  {
    title: '王涵青 張純純 林鼎晏 洪良宜*郭瑋君 ',
    url:'/course?teacher=王涵青 張純純 林鼎晏 洪良宜*郭瑋君 '
  },
  {
    title: '普通生物學（二）',
    url:'/course?course_name=普通生物學（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '精神藥物學（一）',
    url:'/course?course_name=精神藥物學（一）'
  },
  
  {
    title: '簡伯武 蕭雅心*',
    url:'/course?teacher=簡伯武 蕭雅心*'
  },
  {
    title: '失智與老化研究',
    url:'/course?course_name=失智與老化研究'
  },
  
  {
    title: '游一龍*蕭雅心 ',
    url:'/course?teacher=游一龍*蕭雅心 '
  },
  {
    title: '行為神經科學及研究法',
    url:'/course?course_name=行為神經科學及研究法'
  },
  
  {
    title: '游一龍*蕭雅心 ',
    url:'/course?teacher=游一龍*蕭雅心 '
  },
  {
    title: '物質濫用專題（二）',
    url:'/course?course_name=物質濫用專題（二）'
  },
  
  {
    title: '游一龍*蕭雅心 ',
    url:'/course?teacher=游一龍*蕭雅心 '
  },
  {
    title: '行為神經藥物學',
    url:'/course?course_name=行為神經藥物學'
  },
  
  {
    title: '郭乃文 黃惠玲 余睿羚*',
    url:'/course?teacher=郭乃文 黃惠玲 余睿羚*'
  },
  {
    title: '臨床心理實習（二）',
    url:'/course?course_name=臨床心理實習（二）'
  },
  
  {
    title: '郭乃文*黃惠玲 余睿羚 ',
    url:'/course?teacher=郭乃文*黃惠玲 余睿羚 '
  },
  {
    title: '臨床心理實務',
    url:'/course?course_name=臨床心理實務'
  },
  
  {
    title: '余睿羚 ',
    url:'/course?teacher=余睿羚 '
  },
  {
    title: '心智功能缺損之心理衡鑑',
    url:'/course?course_name=心智功能缺損之心理衡鑑'
  },
  
  {
    title: '柯慧貞 ',
    url:'/course?teacher=柯慧貞 '
  },
  {
    title: '團體心理諮商與治療：理論與實務',
    url:'/course?course_name=團體心理諮商與治療：理論與實務'
  },
  
  {
    title: '郭乃文 ',
    url:'/course?teacher=郭乃文 '
  },
  {
    title: '心理健康雲端經營專題（四）',
    url:'/course?course_name=心理健康雲端經營專題（四）'
  },
  
  {
    title: '郭乃文 ',
    url:'/course?teacher=郭乃文 '
  },
  {
    title: '神經心理治療走向之團體治療',
    url:'/course?course_name=神經心理治療走向之團體治療'
  },
  
  {
    title: '郭乃文 ',
    url:'/course?teacher=郭乃文 '
  },
  {
    title: '神經心理衡鑑',
    url:'/course?course_name=神經心理衡鑑'
  },
  
  {
    title: '郭乃文 ',
    url:'/course?teacher=郭乃文 '
  },
  {
    title: '神經心理治療',
    url:'/course?course_name=神經心理治療'
  },
  
  {
    title: '郭乃文 黃惠玲 余睿羚*',
    url:'/course?teacher=郭乃文 黃惠玲 余睿羚*'
  },
  {
    title: '臨床心理衡鑑',
    url:'/course?course_name=臨床心理衡鑑'
  },
  
  {
    title: '黃惠玲 ',
    url:'/course?teacher=黃惠玲 '
  },
  {
    title: '兒童心理治療',
    url:'/course?course_name=兒童心理治療'
  },
  
  {
    title: '黃惠玲 ',
    url:'/course?teacher=黃惠玲 '
  },
  {
    title: '發展心理病理學',
    url:'/course?course_name=發展心理病理學'
  },
  
  {
    title: '林君昱 楊延光 游一龍 柯慧貞 郭乃文*黃惠玲 余睿羚 ',
    url:'/course?teacher=林君昱 楊延光 游一龍 柯慧貞 郭乃文*黃惠玲 余睿羚 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '林君昱 楊延光 郭乃文*黃惠玲 余睿羚 ',
    url:'/course?teacher=林君昱 楊延光 郭乃文*黃惠玲 余睿羚 '
  },
  {
    title: '專題研究（四）',
    url:'/course?course_name=專題研究（四）'
  },
  
  {
    title: '林君昱 游一龍 郭乃文*黃惠玲 余睿羚 蕭雅心 ',
    url:'/course?teacher=林君昱 游一龍 郭乃文*黃惠玲 余睿羚 蕭雅心 '
  },
  {
    title: '專題研究（二）',
    url:'/course?course_name=專題研究（二）'
  },
  
  {
    title: '郭乃文*黃惠玲 余睿羚 ',
    url:'/course?teacher=郭乃文*黃惠玲 余睿羚 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '游一龍*蕭雅心 ',
    url:'/course?teacher=游一龍*蕭雅心 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '郭乃文*黃惠玲 余睿羚 ',
    url:'/course?teacher=郭乃文*黃惠玲 余睿羚 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '藍崑展 ',
    url:'/course?teacher=藍崑展 '
  },
  {
    title: '從自由軟體到物聯網的實踐',
    url:'/course?course_name=從自由軟體到物聯網的實踐'
  },
  
  {
    title: '蘇銓清 ',
    url:'/course?teacher=蘇銓清 '
  },
  {
    title: '物聯網核心網路技術',
    url:'/course?course_name=物聯網核心網路技術'
  },
  
  {
    title: '張大緯 ',
    url:'/course?teacher=張大緯 '
  },
  {
    title: '輸出入裝置與驅動程式設計',
    url:'/course?course_name=輸出入裝置與驅動程式設計'
  },
  
  {
    title: '謝孫源 ',
    url:'/course?teacher=謝孫源 '
  },
  {
    title: '圖形理論',
    url:'/course?course_name=圖形理論'
  },
  
  {
    title: '陳響亮 ',
    url:'/course?teacher=陳響亮 '
  },
  {
    title: 'C#程式設計',
    url:'/course?course_name=C#程式設計'
  },
  
  {
    title: '陳響亮 ',
    url:'/course?teacher=陳響亮 '
  },
  {
    title: '電腦輔助製造',
    url:'/course?course_name=電腦輔助製造'
  },
  
  {
    title: '鄭憲宗 ',
    url:'/course?teacher=鄭憲宗 '
  },
  {
    title: '智慧感測與行動計算',
    url:'/course?course_name=智慧感測與行動計算'
  },
  
  {
    title: '盧文祥 ',
    url:'/course?teacher=盧文祥 '
  },
  {
    title: '多語暨跨語資訊系統',
    url:'/course?course_name=多語暨跨語資訊系統'
  },
  
  {
    title: '許靜芳 ',
    url:'/course?teacher=許靜芳 '
  },
  {
    title: '排隊理論',
    url:'/course?course_name=排隊理論'
  },
  
  {
    title: '鄭匡佑 ',
    url:'/course?teacher=鄭匡佑 '
  },
  {
    title: '最佳化設計：理論與運動產業及工程之應用',
    url:'/course?course_name=最佳化設計：理論與運動產業及工程之應用'
  },
  
  {
    title: '陳朝鈞 ',
    url:'/course?teacher=陳朝鈞 '
  },
  {
    title: '行動計算與無線資料管理',
    url:'/course?course_name=行動計算與無線資料管理'
  },
  
  {
    title: '李家岩 ',
    url:'/course?teacher=李家岩 '
  },
  {
    title: '企業參謀：思考的技術',
    url:'/course?course_name=企業參謀：思考的技術'
  },
  
  {
    title: '蔡佩璇 ',
    url:'/course?teacher=蔡佩璇 '
  },
  {
    title: '即時系統',
    url:'/course?course_name=即時系統'
  },
  
  {
    title: '蔡佩璇 ',
    url:'/course?teacher=蔡佩璇 '
  },
  {
    title: '網宇實體系統',
    url:'/course?course_name=網宇實體系統'
  },
  
  {
    title: '楊大和 ',
    url:'/course?teacher=楊大和 '
  },
  {
    title: '精實企業系統',
    url:'/course?course_name=精實企業系統'
  },
  
  {
    title: '楊大和 ',
    url:'/course?teacher=楊大和 '
  },
  {
    title: '製造系統模擬',
    url:'/course?course_name=製造系統模擬'
  },
  
  {
    title: '鄭芳田 ',
    url:'/course?teacher=鄭芳田 '
  },
  {
    title: '高等自動化理論與實作',
    url:'/course?course_name=高等自動化理論與實作'
  },
  
  {
    title: '鄭芳田 ',
    url:'/course?teacher=鄭芳田 '
  },
  {
    title: '高等自動化理論與實作',
    url:'/course?course_name=高等自動化理論與實作'
  },
  
  {
    title: '鄭芳田 ',
    url:'/course?teacher=鄭芳田 '
  },
  {
    title: '產業自動化與電子化實作',
    url:'/course?course_name=產業自動化與電子化實作'
  },
  
  {
    title: '鄭芳田 ',
    url:'/course?teacher=鄭芳田 '
  },
  {
    title: '產業自動化與電子化實作',
    url:'/course?course_name=產業自動化與電子化實作'
  },
  
  {
    title: '陳響亮 鄭芳田 楊大和 陳朝鈞*蔡佩璇 李家岩 ',
    url:'/course?teacher=陳響亮 鄭芳田 楊大和 陳朝鈞*蔡佩璇 李家岩 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陳響亮 鄭芳田 楊大和 陳朝鈞*蔡佩璇 李家岩 ',
    url:'/course?teacher=陳響亮 鄭芳田 楊大和 陳朝鈞*蔡佩璇 李家岩 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '白明奇*',
    url:'/course?teacher=白明奇*'
  },
  {
    title: '失智症特論',
    url:'/course?course_name=失智症特論'
  },
  
  {
    title: '陳麗光*',
    url:'/course?teacher=陳麗光*'
  },
  {
    title: '高齡教育',
    url:'/course?course_name=高齡教育'
  },
  
  {
    title: '陳麗光 ',
    url:'/course?teacher=陳麗光 '
  },
  {
    title: '高齡者的教育與學習',
    url:'/course?course_name=高齡者的教育與學習'
  },
  
  {
    title: '郭素娥 邱靜如 ',
    url:'/course?teacher=郭素娥 邱靜如 '
  },
  {
    title: '高齡者的食物與營養',
    url:'/course?course_name=高齡者的食物與營養'
  },
  
  {
    title: '林麗娟 魏健宏 蔡一如 李佩紜 張雅雯 陳柏宗 翁慧卿 ',
    url:'/course?teacher=林麗娟 魏健宏 蔡一如 李佩紜 張雅雯 陳柏宗 翁慧卿 '
  },
  {
    title: '高齡者的行動與交通',
    url:'/course?course_name=高齡者的行動與交通'
  },
  
  {
    title: '王榮德 ',
    url:'/course?teacher=王榮德 '
  },
  {
    title: '醫藥衛生中的生活品質與成本效果評估',
    url:'/course?course_name=醫藥衛生中的生活品質與成本效果評估'
  },
  
  {
    title: '林聖翔 王亮懿*',
    url:'/course?teacher=林聖翔 王亮懿*'
  },
  {
    title: '進階生物統計學',
    url:'/course?course_name=進階生物統計學'
  },
  
  {
    title: '翁慧卿 ',
    url:'/course?teacher=翁慧卿 '
  },
  {
    title: '晚境文學與老化研究意涵',
    url:'/course?course_name=晚境文學與老化研究意涵'
  },
  
  {
    title: '劉立凡 ',
    url:'/course?teacher=劉立凡 '
  },
  {
    title: '個案管理與社區照護',
    url:'/course?course_name=個案管理與社區照護'
  },
  
  {
    title: '范聖育 ',
    url:'/course?teacher=范聖育 '
  },
  {
    title: '基礎學術論文寫作',
    url:'/course?course_name=基礎學術論文寫作'
  },
  
  {
    title: '李世代 ',
    url:'/course?teacher=李世代 '
  },
  {
    title: '老年學研究特論',
    url:'/course?course_name=老年學研究特論'
  },
  
  {
    title: '王新台 ',
    url:'/course?teacher=王新台 '
  },
  {
    title: '跨領域統計實務',
    url:'/course?course_name=跨領域統計實務'
  },
  
  {
    title: '郭素娥 ',
    url:'/course?teacher=郭素娥 '
  },
  {
    title: '老年營養概論',
    url:'/course?course_name=老年營養概論'
  },
  
  {
    title: '陳柏宗 ',
    url:'/course?teacher=陳柏宗 '
  },
  {
    title: '老人居住環境規劃與實務',
    url:'/course?course_name=老人居住環境規劃與實務'
  },
  
  {
    title: '張家銘 范聖育 ',
    url:'/course?teacher=張家銘 范聖育 '
  },
  {
    title: '老年學實習（二）',
    url:'/course?course_name=老年學實習（二）'
  },
  
  {
    title: '劉立凡 ',
    url:'/course?teacher=劉立凡 '
  },
  {
    title: '高齡政策與服務傳遞',
    url:'/course?course_name=高齡政策與服務傳遞'
  },
  
  {
    title: '范聖育 ',
    url:'/course?teacher=范聖育 '
  },
  {
    title: '老年心理學',
    url:'/course?course_name=老年心理學'
  },
  
  {
    title: '翁慧卿 ',
    url:'/course?teacher=翁慧卿 '
  },
  {
    title: '老年學個案整合研究',
    url:'/course?course_name=老年學個案整合研究'
  },
  
  {
    title: '盧豐華 劉立凡 陳麗光 邱靜如 王新台 范聖育 翁慧卿 ',
    url:'/course?teacher=盧豐華 劉立凡 陳麗光 邱靜如 王新台 范聖育 翁慧卿 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '盧豐華 劉立凡 陳麗光 邱靜如 王新台 范聖育 翁慧卿 ',
    url:'/course?teacher=盧豐華 劉立凡 陳麗光 邱靜如 王新台 范聖育 翁慧卿 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '盧豐華 劉立凡 陳麗光 邱靜如 王新台 范聖育 翁慧卿 ',
    url:'/course?teacher=盧豐華 劉立凡 陳麗光 邱靜如 王新台 范聖育 翁慧卿 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '林睿哲 ',
    url:'/course?teacher=林睿哲 '
  },
  {
    title: '教學實習（二）',
    url:'/course?course_name=教學實習（二）'
  },
  
  {
    title: '陳　雲 ',
    url:'/course?teacher=陳　雲 '
  },
  {
    title: '高等高分子化學',
    url:'/course?course_name=高等高分子化學'
  },
  
  {
    title: '張珏庭 ',
    url:'/course?teacher=張珏庭 '
  },
  {
    title: '製程最適化',
    url:'/course?course_name=製程最適化'
  },
  
  {
    title: '楊宏澤 楊明長*郭炳林 陳偉聖 方冠榮 林士剛 ',
    url:'/course?teacher=楊宏澤 楊明長*郭炳林 陳偉聖 方冠榮 林士剛 '
  },
  {
    title: '鋰電池製作及應用',
    url:'/course?course_name=鋰電池製作及應用'
  },
  
  {
    title: '邱繼正 ',
    url:'/course?teacher=邱繼正 '
  },
  {
    title: '分子模擬',
    url:'/course?course_name=分子模擬'
  },
  
  {
    title: '吳　煒 ',
    url:'/course?teacher=吳　煒 '
  },
  {
    title: '程序模擬應用',
    url:'/course?course_name=程序模擬應用'
  },
  
  {
    title: '吳文中*吳意珣 ',
    url:'/course?teacher=吳文中*吳意珣 '
  },
  {
    title: '化學工程（二）',
    url:'/course?course_name=化學工程（二）'
  },
  
  {
    title: '林弘萍 許梅娟*黃耀輝 陳炳宏 侯聖澍 羅介聰 陳志勇 ',
    url:'/course?teacher=林弘萍 許梅娟*黃耀輝 陳炳宏 侯聖澍 羅介聰 陳志勇 '
  },
  {
    title: '工業觸媒特論（二）',
    url:'/course?course_name=工業觸媒特論（二）'
  },
  
  {
    title: '吳逸謨 ',
    url:'/course?teacher=吳逸謨 '
  },
  {
    title: '高等高分子物理',
    url:'/course?course_name=高等高分子物理'
  },
  
  {
    title: '張鑑祥 陳炳宏*郭炳林 ',
    url:'/course?teacher=張鑑祥 陳炳宏*郭炳林 '
  },
  {
    title: '界面活性劑原理與應用',
    url:'/course?course_name=界面活性劑原理與應用'
  },
  
  {
    title: '林睿哲 詹正雄 陳美瑾*',
    url:'/course?teacher=林睿哲 詹正雄 陳美瑾*'
  },
  {
    title: '生物材料特論',
    url:'/course?course_name=生物材料特論'
  },
  
  {
    title: '曾建臻 ',
    url:'/course?teacher=曾建臻 '
  },
  {
    title: '化學工廠技術與管理實務（二）',
    url:'/course?course_name=化學工廠技術與管理實務（二）'
  },
  
  {
    title: '鍾賢龍 ',
    url:'/course?teacher=鍾賢龍 '
  },
  {
    title: '奈米材料與合成科技',
    url:'/course?course_name=奈米材料與合成科技'
  },
  
  {
    title: '林裕川*翁鴻山 ',
    url:'/course?teacher=林裕川*翁鴻山 '
  },
  {
    title: '觸媒之發展及應用',
    url:'/course?course_name=觸媒之發展及應用'
  },
  
  {
    title: '郭人鳳 ',
    url:'/course?teacher=郭人鳳 '
  },
  {
    title: '高分子構造、性質與應用',
    url:'/course?course_name=高分子構造、性質與應用'
  },
  
  {
    title: '黃世宏 ',
    url:'/course?teacher=黃世宏 '
  },
  {
    title: '高等輸送現象',
    url:'/course?course_name=高等輸送現象'
  },
  
  {
    title: '魏憲鴻 ',
    url:'/course?teacher=魏憲鴻 '
  },
  {
    title: '高等輸送現象',
    url:'/course?course_name=高等輸送現象'
  },
  
  {
    title: '黃定加 吳文中*',
    url:'/course?teacher=黃定加 吳文中*'
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '吳　煒 林家裕*',
    url:'/course?teacher=吳　煒 林家裕*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '吳文中 邱繼正*',
    url:'/course?teacher=吳文中 邱繼正*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '張學聖 張秀慈*',
    url:'/course?teacher=張學聖 張秀慈*'
  },
  {
    title: '規劃專題研討（四）',
    url:'/course?course_name=規劃專題研討（四）'
  },
  
  {
    title: '張學聖 張秀慈*',
    url:'/course?teacher=張學聖 張秀慈*'
  },
  {
    title: '規劃專題研討（二）',
    url:'/course?course_name=規劃專題研討（二）'
  },
  
  {
    title: '孔憲法 ',
    url:'/course?teacher=孔憲法 '
  },
  {
    title: '都市研究名著選讀（二）',
    url:'/course?course_name=都市研究名著選讀（二）'
  },
  
  {
    title: '趙子元 胡淑貞*',
    url:'/course?teacher=趙子元 胡淑貞*'
  },
  {
    title: '健康城市與社區營造',
    url:'/course?course_name=健康城市與社區營造'
  },
  
  {
    title: '胡太山 ',
    url:'/course?teacher=胡太山 '
  },
  {
    title: '區域經濟發展',
    url:'/course?course_name=區域經濟發展'
  },
  
  {
    title: '張秀慈 ',
    url:'/course?teacher=張秀慈 '
  },
  {
    title: '法規與都市形式',
    url:'/course?course_name=法規與都市形式'
  },
  
  {
    title: '陳志宏 ',
    url:'/course?teacher=陳志宏 '
  },
  {
    title: '都市形態學',
    url:'/course?course_name=都市形態學'
  },
  
  {
    title: '曾憲嫻 ',
    url:'/course?teacher=曾憲嫻 '
  },
  {
    title: '歷史環境再生特論',
    url:'/course?course_name=歷史環境再生特論'
  },
  
  {
    title: '張學聖 ',
    url:'/course?teacher=張學聖 '
  },
  {
    title: '環境規劃及設計',
    url:'/course?course_name=環境規劃及設計'
  },
  
  {
    title: '林漢良 ',
    url:'/course?teacher=林漢良 '
  },
  {
    title: '防災資訊系統',
    url:'/course?course_name=防災資訊系統'
  },
  
  {
    title: '林峰田 ',
    url:'/course?teacher=林峰田 '
  },
  {
    title: '研究方法：科學哲學',
    url:'/course?course_name=研究方法：科學哲學'
  },
  
  {
    title: '陳彥仲 ',
    url:'/course?teacher=陳彥仲 '
  },
  {
    title: '住宅經濟及不動產分析方法特論',
    url:'/course?course_name=住宅經濟及不動產分析方法特論'
  },
  
  {
    title: '石豐宇 ',
    url:'/course?teacher=石豐宇 '
  },
  {
    title: '都市作業研究',
    url:'/course?course_name=都市作業研究'
  },
  
  {
    title: '謝宏昌 ',
    url:'/course?teacher=謝宏昌 '
  },
  {
    title: '類別資料統計與社會網絡分析',
    url:'/course?course_name=類別資料統計與社會網絡分析'
  },
  
  {
    title: '張秀慈*徐中強 鄒克萬 ',
    url:'/course?teacher=張秀慈*徐中強 鄒克萬 '
  },
  {
    title: '都市計劃實習',
    url:'/course?course_name=都市計劃實習'
  },
  
  {
    title: '張秀慈*徐中強 鄒克萬 ',
    url:'/course?teacher=張秀慈*徐中強 鄒克萬 '
  },
  {
    title: '都市計劃實習',
    url:'/course?course_name=都市計劃實習'
  },
  
  {
    title: '孔憲法 ',
    url:'/course?teacher=孔憲法 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '李子璋 ',
    url:'/course?teacher=李子璋 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陳志宏 ',
    url:'/course?teacher=陳志宏 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '陳淑惠 ',
    url:'/course?teacher=陳淑惠 '
  },
  {
    title: '跨領域創新與管理',
    url:'/course?course_name=跨領域創新與管理'
  },
  
  {
    title: '周信輝 ',
    url:'/course?teacher=周信輝 '
  },
  {
    title: '質性研究方法',
    url:'/course?course_name=質性研究方法'
  },
  
  {
    title: '賴孟寬 ',
    url:'/course?teacher=賴孟寬 '
  },
  {
    title: '消費者行為',
    url:'/course?course_name=消費者行為'
  },
  
  {
    title: '莊雙喜 ',
    url:'/course?teacher=莊雙喜 '
  },
  {
    title: '企業組織行為',
    url:'/course?course_name=企業組織行為'
  },
  
  {
    title: '方世杰 ',
    url:'/course?teacher=方世杰 '
  },
  {
    title: '價值共創策略',
    url:'/course?course_name=價值共創策略'
  },
  
  {
    title: '蔡燿全 ',
    url:'/course?teacher=蔡燿全 '
  },
  {
    title: '網際網路行銷與電子商務',
    url:'/course?course_name=網際網路行銷與電子商務'
  },
  
  {
    title: '葉桂珍 ',
    url:'/course?teacher=葉桂珍 '
  },
  {
    title: '產業競爭分析',
    url:'/course?course_name=產業競爭分析'
  },
  
  {
    title: '陳淑惠 王瑜琳*',
    url:'/course?teacher=陳淑惠 王瑜琳*'
  },
  {
    title: '專題研究',
    url:'/course?course_name=專題研究'
  },
  
  {
    title: '葉桂珍 ',
    url:'/course?teacher=葉桂珍 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '張巍勳 ',
    url:'/course?teacher=張巍勳 '
  },
  {
    title: '企業電子化與供應鏈管理',
    url:'/course?course_name=企業電子化與供應鏈管理'
  },
  
  {
    title: '謝惠璟 ',
    url:'/course?teacher=謝惠璟 '
  },
  {
    title: '不動產財務',
    url:'/course?course_name=不動產財務'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '創新管理專題',
    url:'/course?course_name=創新管理專題'
  },
  
  {
    title: '黃瀞瑩 ',
    url:'/course?teacher=黃瀞瑩 '
  },
  {
    title: '管理數量方法',
    url:'/course?course_name=管理數量方法'
  },
  
  {
    title: '陳淑惠 ',
    url:'/course?teacher=陳淑惠 '
  },
  {
    title: '跨領域創新與管理',
    url:'/course?course_name=跨領域創新與管理'
  },
  
  {
    title: '賴孟寬 ',
    url:'/course?teacher=賴孟寬 '
  },
  {
    title: '消費者行為',
    url:'/course?course_name=消費者行為'
  },
  
  {
    title: '方世杰 ',
    url:'/course?teacher=方世杰 '
  },
  {
    title: '價值共創策略',
    url:'/course?course_name=價值共創策略'
  },
  
  {
    title: '周信輝 ',
    url:'/course?teacher=周信輝 '
  },
  {
    title: '新產品開發與管理',
    url:'/course?course_name=新產品開發與管理'
  },
  
  {
    title: '蔡惠婷 ',
    url:'/course?teacher=蔡惠婷 '
  },
  {
    title: '多國籍企業專題',
    url:'/course?course_name=多國籍企業專題'
  },
  
  {
    title: '王瑜琳 ',
    url:'/course?teacher=王瑜琳 '
  },
  {
    title: '組織發展與變革',
    url:'/course?course_name=組織發展與變革'
  },
  
  {
    title: '莊雙喜 ',
    url:'/course?teacher=莊雙喜 '
  },
  {
    title: '組織理論與管理',
    url:'/course?course_name=組織理論與管理'
  },
  
  {
    title: '蔡燿全 ',
    url:'/course?teacher=蔡燿全 '
  },
  {
    title: '網際網路行銷與電子商務',
    url:'/course?course_name=網際網路行銷與電子商務'
  },
  
  {
    title: '葉桂珍 ',
    url:'/course?teacher=葉桂珍 '
  },
  {
    title: '資料分析方法',
    url:'/course?course_name=資料分析方法'
  },
  
  {
    title: '李憲達 ',
    url:'/course?teacher=李憲達 '
  },
  {
    title: '人力資源管理',
    url:'/course?course_name=人力資源管理'
  },
  
  {
    title: '王育民*陳炳焜 ',
    url:'/course?teacher=王育民*陳炳焜 '
  },
  {
    title: '分子炎症特論',
    url:'/course?course_name=分子炎症特論'
  },
  
  {
    title: '劉宗霖*',
    url:'/course?teacher=劉宗霖*'
  },
  {
    title: '分子生物演算法',
    url:'/course?course_name=分子生物演算法'
  },
  
  {
    title: '洪良宜*',
    url:'/course?teacher=洪良宜*'
  },
  {
    title: '細胞分裂激脢特論',
    url:'/course?course_name=細胞分裂激脢特論'
  },
  
  {
    title: '劉宗霖 洪建中 王育民 曾大千 陳炳焜 林鼎晏 洪良宜*羅玉枝 ',
    url:'/course?teacher=劉宗霖 洪建中 王育民 曾大千 陳炳焜 林鼎晏 洪良宜*羅玉枝 '
  },
  {
    title: '細胞訊息與調控特論',
    url:'/course?course_name=細胞訊息與調控特論'
  },
  
  {
    title: '劉宗霖*',
    url:'/course?teacher=劉宗霖*'
  },
  {
    title: '下世代序列資料分析',
    url:'/course?course_name=下世代序列資料分析'
  },
  
  {
    title: '王育民 陳炳焜*林鼎晏 ',
    url:'/course?teacher=王育民 陳炳焜*林鼎晏 '
  },
  {
    title: '癌症治療與抗藥性機轉',
    url:'/course?course_name=癌症治療與抗藥性機轉'
  },
  
  {
    title: '羅玉枝*',
    url:'/course?teacher=羅玉枝*'
  },
  {
    title: '訊息傳遞蛋白的結構與功能特論',
    url:'/course?course_name=訊息傳遞蛋白的結構與功能特論'
  },
  
  {
    title: '洪建中*',
    url:'/course?teacher=洪建中*'
  },
  {
    title: '高等病毒學',
    url:'/course?course_name=高等病毒學'
  },
  
  {
    title: '曾大千*',
    url:'/course?teacher=曾大千*'
  },
  {
    title: '非編碼核醣核酸學',
    url:'/course?course_name=非編碼核醣核酸學'
  },
  
  {
    title: '林鼎晏*',
    url:'/course?teacher=林鼎晏*'
  },
  {
    title: '端粒與端粒?特論',
    url:'/course?course_name=端粒與端粒?特論'
  },
  
  {
    title: '劉宗霖*陳炳焜 羅玉枝 ',
    url:'/course?teacher=劉宗霖*陳炳焜 羅玉枝 '
  },
  {
    title: '科學研究寫作',
    url:'/course?course_name=科學研究寫作'
  },
  
  {
    title: '王浩文 洪健睿 黃玲惠 張純純 洪建中 林鼎晏 洪良宜*李瑞花 ',
    url:'/course?teacher=王浩文 洪健睿 黃玲惠 張純純 洪建中 林鼎晏 洪良宜*李瑞花 '
  },
  {
    title: '高等細胞生物學',
    url:'/course?course_name=高等細胞生物學'
  },
  
  {
    title: '洪建中*陳炳焜 ',
    url:'/course?teacher=洪建中*陳炳焜 '
  },
  {
    title: '書報討論（四）',
    url:'/course?course_name=書報討論（四）'
  },
  
  {
    title: '劉宗霖*林鼎晏 ',
    url:'/course?teacher=劉宗霖*林鼎晏 '
  },
  {
    title: '書報討論（四）',
    url:'/course?course_name=書報討論（四）'
  },
  
  {
    title: '洪建中*陳炳焜 ',
    url:'/course?teacher=洪建中*陳炳焜 '
  },
  {
    title: '書報討論（二）',
    url:'/course?course_name=書報討論（二）'
  },
  
  {
    title: '劉宗霖*林鼎晏 ',
    url:'/course?teacher=劉宗霖*林鼎晏 '
  },
  {
    title: '書報討論（二）',
    url:'/course?course_name=書報討論（二）'
  },
  
  {
    title: '劉宗霖 洪建中 王育民 曾大千 陳炳焜 林鼎晏 洪良宜*羅玉枝 ',
    url:'/course?teacher=劉宗霖 洪建中 王育民 曾大千 陳炳焜 林鼎晏 洪良宜*羅玉枝 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '羅竹芳 洪良宜*',
    url:'/course?teacher=羅竹芳 洪良宜*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '曾大千*羅玉枝 ',
    url:'/course?teacher=曾大千*羅玉枝 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '王育民 洪良宜*',
    url:'/course?teacher=王育民 洪良宜*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '曾大千*羅玉枝 ',
    url:'/course?teacher=曾大千*羅玉枝 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '周楠華 張俊彥 羅傳堯 鄭宏祺 張雅雯 沈延盛 吳梨華*吳佳慶 ',
    url:'/course?teacher=周楠華 張俊彥 羅傳堯 鄭宏祺 張雅雯 沈延盛 吳梨華*吳佳慶 '
  },
  {
    title: '血管新生學',
    url:'/course?course_name=血管新生學'
  },
  
  {
    title: '楊士德 ',
    url:'/course?teacher=楊士德 '
  },
  {
    title: '生物程式設計與巨量轉譯醫學資料分析',
    url:'/course?course_name=生物程式設計與巨量轉譯醫學資料分析'
  },
  
  {
    title: '陳家進 葉明龍 蘇芳慶 吳炳慶 陳芃婷*林哲偉 楊岱樺 李澤民 ',
    url:'/course?teacher=陳家進 葉明龍 蘇芳慶 吳炳慶 陳芃婷*林哲偉 楊岱樺 李澤民 '
  },
  {
    title: '醫療器材創新設計（二）',
    url:'/course?course_name=醫療器材創新設計（二）'
  },
  
  {
    title: '吳炳慶*謝達斌 ',
    url:'/course?teacher=吳炳慶*謝達斌 '
  },
  {
    title: '轉譯生醫奈米導論（二）',
    url:'/course?course_name=轉譯生醫奈米導論（二）'
  },
  
  {
    title: '吳尚蓉 ',
    url:'/course?teacher=吳尚蓉 '
  },
  {
    title: '蛋白質結構與影像分析之實作',
    url:'/course?course_name=蛋白質結構與影像分析之實作'
  },
  
  {
    title: '蕭志坤 ',
    url:'/course?teacher=蕭志坤 '
  },
  {
    title: '生物材料力學',
    url:'/course?course_name=生物材料力學'
  },
  
  {
    title: '陳永崇 ',
    url:'/course?teacher=陳永崇 '
  },
  {
    title: '牙科生物力學',
    url:'/course?course_name=牙科生物力學'
  },
  
  {
    title: '',
    url:'/course?teacher='
  },
  {
    title: '生醫金屬書報討論',
    url:'/course?course_name=生醫金屬書報討論'
  },
  
  {
    title: '黃振勳 袁　國 劉佳觀 謝達斌 莊淑芬 王東堯 黃則達*陳永崇 ',
    url:'/course?teacher=黃振勳 袁　國 劉佳觀 謝達斌 莊淑芬 王東堯 黃則達*陳永崇 '
  },
  {
    title: '臨床牙醫學（四）',
    url:'/course?course_name=臨床牙醫學（四）'
  },
  
  {
    title: '陳玉玲*黃則達 ',
    url:'/course?teacher=陳玉玲*黃則達 '
  },
  {
    title: '分子細胞生物學',
    url:'/course?course_name=分子細胞生物學'
  },
  
  {
    title: '洪澤民 陳玉玲*',
    url:'/course?teacher=洪澤民 陳玉玲*'
  },
  {
    title: '分子腫瘤學書報討論（一）',
    url:'/course?course_name=分子腫瘤學書報討論（一）'
  },
  
  {
    title: '黃振勳 袁　國 許修銘 劉佳觀 莊淑芬 王東堯 黃則達 ',
    url:'/course?teacher=黃振勳 袁　國 許修銘 劉佳觀 莊淑芬 王東堯 黃則達 '
  },
  {
    title: '臨床牙科實習（四）',
    url:'/course?course_name=臨床牙科實習（四）'
  },
  
  {
    title: '黃振勳 袁　國 許修銘 劉佳觀 莊淑芬 王東堯 黃則達 陳永崇*',
    url:'/course?teacher=黃振勳 袁　國 許修銘 劉佳觀 莊淑芬 王東堯 黃則達 陳永崇*'
  },
  {
    title: '臨床文獻討論（四）',
    url:'/course?course_name=臨床文獻討論（四）'
  },
  
  {
    title: '黃振勳 袁　國 許修銘 劉佳觀*莊淑芬 王東堯 黃則達 陳永崇 ',
    url:'/course?teacher=黃振勳 袁　國 許修銘 劉佳觀*莊淑芬 王東堯 黃則達 陳永崇 '
  },
  {
    title: '臨床病例討論（四）',
    url:'/course?course_name=臨床病例討論（四）'
  },
  
  {
    title: '謝達斌 莊淑芬 吳尚蓉*',
    url:'/course?teacher=謝達斌 莊淑芬 吳尚蓉*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '賴明德*鄭宏祺 黃柏憲 張雋曦 張志鵬 吳梨華 ',
    url:'/course?teacher=賴明德*鄭宏祺 黃柏憲 張雋曦 張志鵬 吳梨華 '
  },
  {
    title: '腫瘤生物學',
    url:'/course?course_name=腫瘤生物學'
  },
  
  {
    title: '黃振勳 袁　國 許修銘 劉佳觀 莊淑芬*王東堯 黃則達 陳永崇 ',
    url:'/course?teacher=黃振勳 袁　國 許修銘 劉佳觀 莊淑芬*王東堯 黃則達 陳永崇 '
  },
  {
    title: '臨床牙科實習（二）',
    url:'/course?course_name=臨床牙科實習（二）'
  },
  
  {
    title: '未定 黃振勳 袁　國*許修銘 劉佳觀 莊淑芬 王東堯 黃則達 陳永崇 ',
    url:'/course?teacher=未定 黃振勳 袁　國*許修銘 劉佳觀 莊淑芬 王東堯 黃則達 陳永崇 '
  },
  {
    title: '臨床文獻討論（二）',
    url:'/course?course_name=臨床文獻討論（二）'
  },
  
  {
    title: '黃振勳 袁　國 許修銘 劉佳觀 莊淑芬 王東堯*黃則達 陳永崇 ',
    url:'/course?teacher=黃振勳 袁　國 許修銘 劉佳觀 莊淑芬 王東堯*黃則達 陳永崇 '
  },
  {
    title: '臨床病例討論（二）',
    url:'/course?course_name=臨床病例討論（二）'
  },
  
  {
    title: '未定 黃振勳*袁　國 許修銘 劉佳觀 謝達斌 莊淑芬 王東堯 黃則達 陳永崇 ',
    url:'/course?teacher=未定 黃振勳*袁　國 許修銘 劉佳觀 謝達斌 莊淑芬 王東堯 黃則達 陳永崇 '
  },
  {
    title: '臨床牙醫學（二）',
    url:'/course?course_name=臨床牙醫學（二）'
  },
  
  {
    title: '陳玉玲*莊淑芬 吳尚蓉 ',
    url:'/course?teacher=陳玉玲*莊淑芬 吳尚蓉 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '楊岱樺 ',
    url:'/course?teacher=楊岱樺 '
  },
  {
    title: '工程生理學',
    url:'/course?course_name=工程生理學'
  },
  
  {
    title: '曾大千*',
    url:'/course?teacher=曾大千*'
  },
  {
    title: '非編碼核醣核酸學',
    url:'/course?course_name=非編碼核醣核酸學'
  },
  
  {
    title: '楊士德 ',
    url:'/course?teacher=楊士德 '
  },
  {
    title: '計算系統醫學專論',
    url:'/course?course_name=計算系統醫學專論'
  },
  
  {
    title: '楊士德 ',
    url:'/course?teacher=楊士德 '
  },
  {
    title: '生物程式設計與巨量轉譯醫學資料分析',
    url:'/course?course_name=生物程式設計與巨量轉譯醫學資料分析'
  },
  
  {
    title: '莊坤達 ',
    url:'/course?teacher=莊坤達 '
  },
  {
    title: '巨量圖數據資料庫分析專論',
    url:'/course?course_name=巨量圖數據資料庫分析專論'
  },
  
  {
    title: '藍崑展 ',
    url:'/course?teacher=藍崑展 '
  },
  {
    title: '從自由軟體到物聯網的實踐',
    url:'/course?course_name=從自由軟體到物聯網的實踐'
  },
  
  {
    title: '趙梓程 ',
    url:'/course?teacher=趙梓程 '
  },
  {
    title: '磁共振影像重建與分析技術專論',
    url:'/course?course_name=磁共振影像重建與分析技術專論'
  },
  
  {
    title: '郭耀煌 ',
    url:'/course?teacher=郭耀煌 '
  },
  {
    title: '智慧感知雲端系統與應用設計',
    url:'/course?course_name=智慧感知雲端系統與應用設計'
  },
  
  {
    title: '王士豪 ',
    url:'/course?teacher=王士豪 '
  },
  {
    title: '生醫超音波系統專論',
    url:'/course?course_name=生醫超音波系統專論'
  },
  
  {
    title: '梁勝富 ',
    url:'/course?teacher=梁勝富 '
  },
  {
    title: '神經運算與腦機介面專論',
    url:'/course?course_name=神經運算與腦機介面專論'
  },
  
  {
    title: '盧文祥 ',
    url:'/course?teacher=盧文祥 '
  },
  {
    title: '多語暨跨語資訊系統',
    url:'/course?course_name=多語暨跨語資訊系統'
  },
  
  {
    title: '謝孫源 ',
    url:'/course?teacher=謝孫源 '
  },
  {
    title: '圖形理論',
    url:'/course?course_name=圖形理論'
  },
  
  {
    title: '連震杰 ',
    url:'/course?teacher=連震杰 '
  },
  {
    title: '機器學習及圖形識別專論',
    url:'/course?course_name=機器學習及圖形識別專論'
  },
  
  {
    title: '鄭匡佑 ',
    url:'/course?teacher=鄭匡佑 '
  },
  {
    title: '最佳化設計：理論與運動產業及工程之應用',
    url:'/course?course_name=最佳化設計：理論與運動產業及工程之應用'
  },
  
  {
    title: '孫永年 ',
    url:'/course?teacher=孫永年 '
  },
  {
    title: '電腦視覺專題',
    url:'/course?course_name=電腦視覺專題'
  },
  
  {
    title: '蔣榮先 ',
    url:'/course?teacher=蔣榮先 '
  },
  {
    title: '資訊擷取專論',
    url:'/course?course_name=資訊擷取專論'
  },
  
  {
    title: '鄭憲宗 ',
    url:'/course?teacher=鄭憲宗 '
  },
  {
    title: '智慧感測與行動計算',
    url:'/course?course_name=智慧感測與行動計算'
  },
  
  {
    title: '謝孫源 ',
    url:'/course?teacher=謝孫源 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '謝孫源 ',
    url:'/course?teacher=謝孫源 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '傅永貴 ',
    url:'/course?teacher=傅永貴 '
  },
  {
    title: '液晶材料及顯示技術',
    url:'/course?course_name=液晶材料及顯示技術'
  },
  
  {
    title: '唐富欽*黃榮俊 楊緒濃 陳家駒 田興龍 林明發 陳寬任 蔡錦俊 張為民 呂欽山 陳泉宏 張書銓 陳宜君 游輝樟 朱淑君 陳岳男 盧炎田 周忠憲 陳泳帆 吳忠霖 陳則銘 張烈錚 羅光耀 苗舜培 楊毅 梁永成 黃文宏 許瑞榮 蘇漢宗 蔡永東 ',
    url:'/course?teacher=唐富欽*黃榮俊 楊緒濃 陳家駒 田興龍 林明發 陳寬任 蔡錦俊 張為民 呂欽山 陳泉宏 張書銓 陳宜君 游輝樟 朱淑君 陳岳男 盧炎田 周忠憲 陳泳帆 吳忠霖 陳則銘 張烈錚 羅光耀 苗舜培 楊毅 梁永成 黃文宏 許瑞榮 蘇漢宗 蔡永東 '
  },
  {
    title: '物理教學專題討論',
    url:'/course?course_name=物理教學專題討論'
  },
  
  {
    title: '陳家駒 ',
    url:'/course?teacher=陳家駒 '
  },
  {
    title: '高等量子力學',
    url:'/course?course_name=高等量子力學'
  },
  
  {
    title: '陳寬任 ',
    url:'/course?teacher=陳寬任 '
  },
  {
    title: '電漿與模擬專題討論（二）',
    url:'/course?course_name=電漿與模擬專題討論（二）'
  },
  
  {
    title: '陳泉宏 ',
    url:'/course?teacher=陳泉宏 '
  },
  {
    title: '量子場論（二）',
    url:'/course?course_name=量子場論（二）'
  },
  
  {
    title: '許祖斌 ',
    url:'/course?teacher=許祖斌 '
  },
  {
    title: '廣義相對論（一）',
    url:'/course?course_name=廣義相對論（一）'
  },
  
  {
    title: '黃文宏 ',
    url:'/course?teacher=黃文宏 '
  },
  {
    title: '相變理論',
    url:'/course?course_name=相變理論'
  },
  
  {
    title: '楊毅 ',
    url:'/course?teacher=楊毅 '
  },
  {
    title: '粒子物理（二）',
    url:'/course?course_name=粒子物理（二）'
  },
  
  {
    title: '陳岳男*周忠憲 ',
    url:'/course?teacher=陳岳男*周忠憲 '
  },
  {
    title: '量子資訊專題討論（二）',
    url:'/course?course_name=量子資訊專題討論（二）'
  },
  
  {
    title: '張烈錚 ',
    url:'/course?teacher=張烈錚 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '張烈錚 ',
    url:'/course?teacher=張烈錚 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '張烈錚 ',
    url:'/course?teacher=張烈錚 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '張烈錚 ',
    url:'/course?teacher=張烈錚 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '張烈錚 ',
    url:'/course?teacher=張烈錚 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '張烈錚 ',
    url:'/course?teacher=張烈錚 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '林明發 ',
    url:'/course?teacher=林明發 '
  },
  {
    title: '電動力學（二）',
    url:'/course?course_name=電動力學（二）'
  },
  
  {
    title: '張為民 ',
    url:'/course?teacher=張為民 '
  },
  {
    title: '統計力學',
    url:'/course?course_name=統計力學'
  },
  
  {
    title: '陳岳男 ',
    url:'/course?teacher=陳岳男 '
  },
  {
    title: '量子力學（二）',
    url:'/course?course_name=量子力學（二）'
  },
  
  {
    title: '張智華 蔡俊鴻*',
    url:'/course?teacher=張智華 蔡俊鴻*'
  },
  {
    title: '空氣、水資源管理暨氣候變遷',
    url:'/course?course_name=空氣、水資源管理暨氣候變遷'
  },
  
  {
    title: '王鴻博*劉守恒 ',
    url:'/course?teacher=王鴻博*劉守恒 '
  },
  {
    title: '綠色能源技術',
    url:'/course?course_name=綠色能源技術'
  },
  
  {
    title: '張智華 ',
    url:'/course?teacher=張智華 '
  },
  {
    title: '水質管理',
    url:'/course?course_name=水質管理'
  },
  
  {
    title: '劉守恒 ',
    url:'/course?teacher=劉守恒 '
  },
  {
    title: '污染預防與永續物料管理',
    url:'/course?course_name=污染預防與永續物料管理'
  },
  
  {
    title: '陳如 ',
    url:'/course?teacher=陳如 '
  },
  {
    title: '土壤化學與分析',
    url:'/course?course_name=土壤化學與分析'
  },
  
  {
    title: '葉宣顯 ',
    url:'/course?teacher=葉宣顯 '
  },
  {
    title: '水處理工程特論',
    url:'/course?course_name=水處理工程特論'
  },
  
  {
    title: '鄭幸雄 ',
    url:'/course?teacher=鄭幸雄 '
  },
  {
    title: '廢水高級處理',
    url:'/course?course_name=廢水高級處理'
  },
  
  {
    title: '朱　信 ',
    url:'/course?teacher=朱　信 '
  },
  {
    title: '燃燒原理與控制',
    url:'/course?course_name=燃燒原理與控制'
  },
  
  {
    title: '林達昌 ',
    url:'/course?teacher=林達昌 '
  },
  {
    title: '微量化學分析',
    url:'/course?course_name=微量化學分析'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '邱成財 ',
    url:'/course?teacher=邱成財 '
  },
  {
    title: '環境有機化學',
    url:'/course?course_name=環境有機化學'
  },
  
  {
    title: '顏秀慧 ',
    url:'/course?teacher=顏秀慧 '
  },
  {
    title: '環境保護法規',
    url:'/course?course_name=環境保護法規'
  },
  
  {
    title: '黃良銘 ',
    url:'/course?teacher=黃良銘 '
  },
  {
    title: '水處理技術',
    url:'/course?course_name=水處理技術'
  },
  
  {
    title: '侯文哲 ',
    url:'/course?teacher=侯文哲 '
  },
  {
    title: '環工化學原理',
    url:'/course?course_name=環工化學原理'
  },
  
  {
    title: '吳義林 ',
    url:'/course?teacher=吳義林 '
  },
  {
    title: '大氣污染化學與應用',
    url:'/course?course_name=大氣污染化學與應用'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '王鴻博 黃良銘*侯文哲 劉守恒 ',
    url:'/course?teacher=王鴻博 黃良銘*侯文哲 劉守恒 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '王鴻博 黃良銘*侯文哲 劉守恒 ',
    url:'/course?teacher=王鴻博 黃良銘*侯文哲 劉守恒 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '林朝成 ',
    url:'/course?teacher=林朝成 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '蔡玫姿 ',
    url:'/course?teacher=蔡玫姿 '
  },
  {
    title: '女性主義理論與文本實踐',
    url:'/course?course_name=女性主義理論與文本實踐'
  },
  
  {
    title: '萬胥亭 ',
    url:'/course?teacher=萬胥亭 '
  },
  {
    title: '法國當代文藝系譜學研究',
    url:'/course?course_name=法國當代文藝系譜學研究'
  },
  
  {
    title: '蘇偉貞 ',
    url:'/course?teacher=蘇偉貞 '
  },
  {
    title: '現代華文小說專題（二）',
    url:'/course?course_name=現代華文小說專題（二）'
  },
  
  {
    title: '翁文嫻 ',
    url:'/course?teacher=翁文嫻 '
  },
  {
    title: '現代詩學（二）',
    url:'/course?course_name=現代詩學（二）'
  },
  
  {
    title: '蔡玫姿 ',
    url:'/course?teacher=蔡玫姿 '
  },
  {
    title: '現代漢學英文選讀（二）',
    url:'/course?course_name=現代漢學英文選讀（二）'
  },
  
  {
    title: '仇小屏 ',
    url:'/course?teacher=仇小屏 '
  },
  {
    title: '修辭學專題研究',
    url:'/course?course_name=修辭學專題研究'
  },
  
  {
    title: '陳梅香 ',
    url:'/course?teacher=陳梅香 '
  },
  {
    title: '漢語音韻學',
    url:'/course?course_name=漢語音韻學'
  },
  
  {
    title: '林幸慧 ',
    url:'/course?teacher=林幸慧 '
  },
  {
    title: '中國當代戲曲專題研究',
    url:'/course?course_name=中國當代戲曲專題研究'
  },
  
  {
    title: '陳益源 ',
    url:'/course?teacher=陳益源 '
  },
  {
    title: '中國古典小說專題（二）',
    url:'/course?course_name=中國古典小說專題（二）'
  },
  
  {
    title: '侯美珍 ',
    url:'/course?teacher=侯美珍 '
  },
  {
    title: '科舉與經學專題研究',
    url:'/course?course_name=科舉與經學專題研究'
  },
  
  {
    title: '江建俊 ',
    url:'/course?teacher=江建俊 '
  },
  {
    title: '世說新語專題研究',
    url:'/course?course_name=世說新語專題研究'
  },
  
  {
    title: '黃聖松 ',
    url:'/course?teacher=黃聖松 '
  },
  {
    title: '《左傳》專題研究（二）',
    url:'/course?course_name=《左傳》專題研究（二）'
  },
  
  {
    title: '宋鼎宗 ',
    url:'/course?teacher=宋鼎宗 '
  },
  {
    title: '中國經學史研究（二）',
    url:'/course?course_name=中國經學史研究（二）'
  },
  
  {
    title: '陳怡良 ',
    url:'/course?teacher=陳怡良 '
  },
  {
    title: '楚辭與中國神話專題研究（二）',
    url:'/course?course_name=楚辭與中國神話專題研究（二）'
  },
  
  {
    title: '秦嘉嫄 ',
    url:'/course?teacher=秦嘉嫄 '
  },
  {
    title: '漢學英文（二）',
    url:'/course?course_name=漢學英文（二）'
  },
  
  {
    title: '林朝成 ',
    url:'/course?teacher=林朝成 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '黃聖松 ',
    url:'/course?teacher=黃聖松 '
  },
  {
    title: '學術討論（二）',
    url:'/course?course_name=學術討論（二）'
  },
  
  {
    title: '林瑞禮 ',
    url:'/course?teacher=林瑞禮 '
  },
  {
    title: '共振式電能轉換器設計',
    url:'/course?course_name=共振式電能轉換器設計'
  },
  
  {
    title: '林瑞禮 ',
    url:'/course?teacher=林瑞禮 '
  },
  {
    title: '電源轉換系統分析',
    url:'/course?course_name=電源轉換系統分析'
  },
  
  {
    title: '李嘉猷 ',
    url:'/course?teacher=李嘉猷 '
  },
  {
    title: '電磁相容學',
    url:'/course?course_name=電磁相容學'
  },
  
  {
    title: '謝旻甫 ',
    url:'/course?teacher=謝旻甫 '
  },
  {
    title: '電動機設計',
    url:'/course?course_name=電動機設計'
  },
  
  {
    title: '李嘉猷 ',
    url:'/course?teacher=李嘉猷 '
  },
  {
    title: '論文研討',
    url:'/course?course_name=論文研討'
  },
  
  {
    title: '李嘉猷 ',
    url:'/course?teacher=李嘉猷 '
  },
  {
    title: '論文研討（二）',
    url:'/course?course_name=論文研討（二）'
  },
  
  {
    title: '李嘉猷*李祖聖 ',
    url:'/course?teacher=李嘉猷*李祖聖 '
  },
  {
    title: '系統控制分析與模擬',
    url:'/course?course_name=系統控制分析與模擬'
  },
  
  {
    title: '李祖聖 ',
    url:'/course?teacher=李祖聖 '
  },
  {
    title: '智慧型控制專論',
    url:'/course?course_name=智慧型控制專論'
  },
  
  {
    title: '黃世杰 ',
    url:'/course?teacher=黃世杰 '
  },
  {
    title: '電能運轉與控制專論',
    url:'/course?course_name=電能運轉與控制專論'
  },
  
  {
    title: '莊智清 ',
    url:'/course?teacher=莊智清 '
  },
  {
    title: '電子導航',
    url:'/course?course_name=電子導航'
  },
  
  {
    title: '楊宏澤*陳建富 ',
    url:'/course?teacher=楊宏澤*陳建富 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '林瑞禮*張簡樂仁 ',
    url:'/course?teacher=林瑞禮*張簡樂仁 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '王　醴 ',
    url:'/course?teacher=王　醴 '
  },
  {
    title: '電力系統控制與穩定度',
    url:'/course?course_name=電力系統控制與穩定度'
  },
  
  {
    title: '黃慶連 ',
    url:'/course?teacher=黃慶連 '
  },
  {
    title: '高電壓工程特論',
    url:'/course?course_name=高電壓工程特論'
  },
  
  {
    title: '黃慶連 ',
    url:'/course?teacher=黃慶連 '
  },
  {
    title: '配電系統自動化',
    url:'/course?course_name=配電系統自動化'
  },
  
  {
    title: '莊智清 ',
    url:'/course?teacher=莊智清 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '吳謂勝 ',
    url:'/course?teacher=吳謂勝 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '李嘉猷*李祖聖 ',
    url:'/course?teacher=李嘉猷*李祖聖 '
  },
  {
    title: '系統控制技術',
    url:'/course?course_name=系統控制技術'
  },
  
  {
    title: '許清芳 ',
    url:'/course?teacher=許清芳 '
  },
  {
    title: '資料管理',
    url:'/course?course_name=資料管理'
  },
  
  {
    title: '許清芳 ',
    url:'/course?teacher=許清芳 '
  },
  {
    title: '決策與判斷',
    url:'/course?course_name=決策與判斷'
  },
  
  {
    title: '黃柏僩 ',
    url:'/course?teacher=黃柏僩 '
  },
  {
    title: '統計機器學習與應用',
    url:'/course?course_name=統計機器學習與應用'
  },
  
  {
    title: '楊政達*',
    url:'/course?teacher=楊政達*'
  },
  {
    title: '健身運動與認知神經科學專題研究',
    url:'/course?course_name=健身運動與認知神經科學專題研究'
  },
  
  {
    title: '陳德祐 ',
    url:'/course?teacher=陳德祐 '
  },
  {
    title: '學習記憶神經生物學',
    url:'/course?course_name=學習記憶神經生物學'
  },
  
  {
    title: '胡書榕 ',
    url:'/course?teacher=胡書榕 '
  },
  {
    title: '物質濫用導論',
    url:'/course?course_name=物質濫用導論'
  },
  
  {
    title: '胡書榕 ',
    url:'/course?teacher=胡書榕 '
  },
  {
    title: '神經科學綜論(二)',
    url:'/course?course_name=神經科學綜論(二)'
  },
  
  {
    title: '林君昱 ',
    url:'/course?teacher=林君昱 '
  },
  {
    title: '記憶研究特論(一)',
    url:'/course?course_name=記憶研究特論(一)'
  },
  
  {
    title: '胡中凡 ',
    url:'/course?teacher=胡中凡 '
  },
  {
    title: '發展科學進階研究',
    url:'/course?course_name=發展科學進階研究'
  },
  
  {
    title: '謝淑蘭 ',
    url:'/course?teacher=謝淑蘭 '
  },
  {
    title: '老化認知神經科學',
    url:'/course?course_name=老化認知神經科學'
  },
  
  {
    title: '龔俊嘉 ',
    url:'/course?teacher=龔俊嘉 '
  },
  {
    title: '心理學工具程式集在認知科學上的應用',
    url:'/course?course_name=心理學工具程式集在認知科學上的應用'
  },
  
  {
    title: '陳德祐 ',
    url:'/course?teacher=陳德祐 '
  },
  {
    title: '情緒與記憶專題研究（二）',
    url:'/course?course_name=情緒與記憶專題研究（二）'
  },
  
  {
    title: '周麗芳 ',
    url:'/course?teacher=周麗芳 '
  },
  {
    title: '華人組織行為',
    url:'/course?course_name=華人組織行為'
  },
  
  {
    title: '周麗芳 ',
    url:'/course?teacher=周麗芳 '
  },
  {
    title: '行為科學研究法',
    url:'/course?course_name=行為科學研究法'
  },
  
  {
    title: '龔俊嘉 謝淑蘭*楊政達 周麗芳 林君昱 胡中凡 鄭中平 胡書榕 黃碧群 陳德祐 黃柏僩 ',
    url:'/course?teacher=龔俊嘉 謝淑蘭*楊政達 周麗芳 林君昱 胡中凡 鄭中平 胡書榕 黃碧群 陳德祐 黃柏僩 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '龔俊嘉 謝淑蘭*楊政達 周麗芳 林君昱 胡中凡 鄭中平 胡書榕 黃碧群 陳德祐 黃柏僩 ',
    url:'/course?teacher=龔俊嘉 謝淑蘭*楊政達 周麗芳 林君昱 胡中凡 鄭中平 胡書榕 黃碧群 陳德祐 黃柏僩 '
  },
  {
    title: '教學實習（二）',
    url:'/course?course_name=教學實習（二）'
  },
  
  {
    title: '周麗芳 ',
    url:'/course?teacher=周麗芳 '
  },
  {
    title: '認知科學議題研討（四）',
    url:'/course?course_name=認知科學議題研討（四）'
  },
  
  {
    title: '周麗芳 ',
    url:'/course?teacher=周麗芳 '
  },
  {
    title: '認知科學議題研討（二）',
    url:'/course?course_name=認知科學議題研討（二）'
  },
  
  {
    title: '董旭英 ',
    url:'/course?teacher=董旭英 '
  },
  {
    title: '教育行政與教學實習',
    url:'/course?course_name=教育行政與教學實習'
  },
  
  {
    title: '程炳林 楊雅婷*',
    url:'/course?teacher=程炳林 楊雅婷*'
  },
  {
    title: '專業實習（二）',
    url:'/course?course_name=專業實習（二）'
  },
  
  {
    title: '饒夢霞 楊雅婷*',
    url:'/course?teacher=饒夢霞 楊雅婷*'
  },
  {
    title: '獨立研究（二）',
    url:'/course?course_name=獨立研究（二）'
  },
  
  {
    title: '陸偉明 ',
    url:'/course?teacher=陸偉明 '
  },
  {
    title: '英文研究論文寫作',
    url:'/course?course_name=英文研究論文寫作'
  },
  
  {
    title: '湯　堯 ',
    url:'/course?teacher=湯　堯 '
  },
  {
    title: '教育行政學專題研究',
    url:'/course?course_name=教育行政學專題研究'
  },
  
  {
    title: '饒夢霞 ',
    url:'/course?teacher=饒夢霞 '
  },
  {
    title: '情緒心理學',
    url:'/course?course_name=情緒心理學'
  },
  
  {
    title: '陸偉明 ',
    url:'/course?teacher=陸偉明 '
  },
  {
    title: '迴歸分析',
    url:'/course?course_name=迴歸分析'
  },
  
  {
    title: '董旭英 ',
    url:'/course?teacher=董旭英 '
  },
  {
    title: '教育社會學專題研究',
    url:'/course?course_name=教育社會學專題研究'
  },
  
  {
    title: '楊雅婷 ',
    url:'/course?teacher=楊雅婷 '
  },
  {
    title: '教育科技之研究議題與方法',
    url:'/course?course_name=教育科技之研究議題與方法'
  },
  
  {
    title: '趙梅如 ',
    url:'/course?teacher=趙梅如 '
  },
  {
    title: '諮商理論與技術專題研究',
    url:'/course?course_name=諮商理論與技術專題研究'
  },
  
  {
    title: '許清芳 ',
    url:'/course?teacher=許清芳 '
  },
  {
    title: '資料管理',
    url:'/course?course_name=資料管理'
  },
  
  {
    title: '許清芳 ',
    url:'/course?teacher=許清芳 '
  },
  {
    title: '決策與判斷',
    url:'/course?course_name=決策與判斷'
  },
  
  {
    title: '程炳林 ',
    url:'/course?teacher=程炳林 '
  },
  {
    title: '動機心理學專題研究',
    url:'/course?course_name=動機心理學專題研究'
  },
  
  {
    title: '彭淑玲 洪素蘋*程炳林 ',
    url:'/course?teacher=彭淑玲 洪素蘋*程炳林 '
  },
  {
    title: '心理測驗編製與應用專題',
    url:'/course?course_name=心理測驗編製與應用專題'
  },
  
  {
    title: '于富雲 ',
    url:'/course?teacher=于富雲 '
  },
  {
    title: '專題研討',
    url:'/course?course_name=專題研討'
  },
  
  {
    title: '于富雲 ',
    url:'/course?teacher=于富雲 '
  },
  {
    title: '學生出題教學設計',
    url:'/course?course_name=學生出題教學設計'
  },
  
  {
    title: '吳鴻文 ',
    url:'/course?teacher=吳鴻文 '
  },
  {
    title: '內燃機燃燒學',
    url:'/course?course_name=內燃機燃燒學'
  },
  
  {
    title: '謝旻甫 ',
    url:'/course?teacher=謝旻甫 '
  },
  {
    title: '電動機設計',
    url:'/course?course_name=電動機設計'
  },
  
  {
    title: '陳政宏 沈聖智*',
    url:'/course?teacher=陳政宏 沈聖智*'
  },
  {
    title: '船艦設計實務',
    url:'/course?course_name=船艦設計實務'
  },
  
  {
    title: '方銘川 ',
    url:'/course?teacher=方銘川 '
  },
  {
    title: '船舶操縱與控制',
    url:'/course?course_name=船舶操縱與控制'
  },
  
  {
    title: '林忠宏 ',
    url:'/course?teacher=林忠宏 '
  },
  {
    title: '疲勞強度學',
    url:'/course?course_name=疲勞強度學'
  },
  
  {
    title: '陳永裕 ',
    url:'/course?teacher=陳永裕 '
  },
  {
    title: '類神經及模糊系統',
    url:'/course?course_name=類神經及模糊系統'
  },
  
  {
    title: '陳永裕 ',
    url:'/course?teacher=陳永裕 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陳永裕 ',
    url:'/course?teacher=陳永裕 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '陳永裕 ',
    url:'/course?teacher=陳永裕 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陳永裕 ',
    url:'/course?teacher=陳永裕 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '陳永裕 ',
    url:'/course?teacher=陳永裕 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '涂季平 ',
    url:'/course?teacher=涂季平 '
  },
  {
    title: '噪音控制',
    url:'/course?course_name=噪音控制'
  },
  
  {
    title: '林宇銜 ',
    url:'/course?teacher=林宇銜 '
  },
  {
    title: '海洋工程',
    url:'/course?course_name=海洋工程'
  },
  
  {
    title: '黃正能 ',
    url:'/course?teacher=黃正能 '
  },
  {
    title: '非線性系統分析',
    url:'/course?course_name=非線性系統分析'
  },
  
  {
    title: '吳重雄 ',
    url:'/course?teacher=吳重雄 '
  },
  {
    title: '船舶振動學',
    url:'/course?course_name=船舶振動學'
  },
  
  {
    title: '陳長鈕 ',
    url:'/course?teacher=陳長鈕 '
  },
  {
    title: '結構穩定學',
    url:'/course?course_name=結構穩定學'
  },
  
  {
    title: '陳政宏 ',
    url:'/course?teacher=陳政宏 '
  },
  {
    title: '船舶推進理論',
    url:'/course?course_name=船舶推進理論'
  },
  
  {
    title: '許育綝 ',
    url:'/course?teacher=許育綝 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '許育綝 ',
    url:'/course?teacher=許育綝 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '薛明賢 ',
    url:'/course?teacher=薛明賢 '
  },
  {
    title: '財務個案研究',
    url:'/course?course_name=財務個案研究'
  },
  
  {
    title: '周庭楷 ',
    url:'/course?teacher=周庭楷 '
  },
  {
    title: '會計及財務研究方法',
    url:'/course?course_name=會計及財務研究方法'
  },
  
  {
    title: '黃華瑋 ',
    url:'/course?teacher=黃華瑋 '
  },
  {
    title: '審計理論研討（一）',
    url:'/course?course_name=審計理論研討（一）'
  },
  
  {
    title: '王澤世 ',
    url:'/course?teacher=王澤世 '
  },
  {
    title: '計量經濟學',
    url:'/course?course_name=計量經濟學'
  },
  
  {
    title: '周庭楷 ',
    url:'/course?teacher=周庭楷 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '周庭楷 ',
    url:'/course?teacher=周庭楷 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '謝喻婷 ',
    url:'/course?teacher=謝喻婷 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '吳清在 ',
    url:'/course?teacher=吳清在 '
  },
  {
    title: '大陸稅法研究',
    url:'/course?course_name=大陸稅法研究'
  },
  
  {
    title: '顏盟峯 ',
    url:'/course?teacher=顏盟峯 '
  },
  {
    title: '企業社會責任與社會責任投資',
    url:'/course?course_name=企業社會責任與社會責任投資'
  },
  
  {
    title: '王明隆*林志隆*',
    url:'/course?teacher=王明隆*林志隆*'
  },
  {
    title: '金融投資與創新商品交易策略實務',
    url:'/course?course_name=金融投資與創新商品交易策略實務'
  },
  
  {
    title: '楊朝旭 ',
    url:'/course?teacher=楊朝旭 '
  },
  {
    title: '高級管理會計學',
    url:'/course?course_name=高級管理會計學'
  },
  
  {
    title: '賴秀卿 ',
    url:'/course?teacher=賴秀卿 '
  },
  {
    title: '高級會計資訊系統',
    url:'/course?course_name=高級會計資訊系統'
  },
  
  {
    title: '徐立群 ',
    url:'/course?teacher=徐立群 '
  },
  {
    title: '電腦審計與安全',
    url:'/course?course_name=電腦審計與安全'
  },
  
  {
    title: '許育綝 ',
    url:'/course?teacher=許育綝 '
  },
  {
    title: '高級財務會計學',
    url:'/course?course_name=高級財務會計學'
  },
  
  {
    title: '仲曉玲 ',
    url:'/course?teacher=仲曉玲 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '仲曉玲 ',
    url:'/course?teacher=仲曉玲 '
  },
  {
    title: '創意產業體驗（二）',
    url:'/course?course_name=創意產業體驗（二）'
  },
  
  {
    title: '仲曉玲 ',
    url:'/course?teacher=仲曉玲 '
  },
  {
    title: '創意產業研析（二）',
    url:'/course?course_name=創意產業研析（二）'
  },
  
  {
    title: '謝孟達 ',
    url:'/course?teacher=謝孟達 '
  },
  {
    title: '品牌與行銷',
    url:'/course?course_name=品牌與行銷'
  },
  
  {
    title: '楊佳翰 ',
    url:'/course?teacher=楊佳翰 '
  },
  {
    title: '智財法規專論',
    url:'/course?course_name=智財法規專論'
  },
  
  {
    title: '仲曉玲 ',
    url:'/course?teacher=仲曉玲 '
  },
  {
    title: '創意設計管理',
    url:'/course?course_name=創意設計管理'
  },
  
  {
    title: '陳明惠 ',
    url:'/course?teacher=陳明惠 '
  },
  {
    title: '當代展覽策劃：理論與實踐',
    url:'/course?course_name=當代展覽策劃：理論與實踐'
  },
  
  {
    title: '仲曉玲 ',
    url:'/course?teacher=仲曉玲 '
  },
  {
    title: '產業研究規劃與方法',
    url:'/course?course_name=產業研究規劃與方法'
  },
  
  {
    title: '卓彥廷 ',
    url:'/course?teacher=卓彥廷 '
  },
  {
    title: '創意數位設計',
    url:'/course?course_name=創意數位設計'
  },
  
  {
    title: '卓彥廷 ',
    url:'/course?teacher=卓彥廷 '
  },
  {
    title: '創意數位設計',
    url:'/course?course_name=創意數位設計'
  },
  
  {
    title: '劉世南 ',
    url:'/course?teacher=劉世南 '
  },
  {
    title: '消費者行為',
    url:'/course?course_name=消費者行為'
  },
  
  {
    title: '卓彥廷 ',
    url:'/course?teacher=卓彥廷 '
  },
  {
    title: '內容行銷',
    url:'/course?course_name=內容行銷'
  },
  
  {
    title: '林蕙玟*楊佳翰 ',
    url:'/course?teacher=林蕙玟*楊佳翰 '
  },
  {
    title: '創意產業調查研究',
    url:'/course?course_name=創意產業調查研究'
  },
  
  {
    title: '劉世南 ',
    url:'/course?teacher=劉世南 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '楊佳翰 ',
    url:'/course?teacher=楊佳翰 '
  },
  {
    title: '產業設計實務',
    url:'/course?course_name=產業設計實務'
  },
  
  {
    title: '林蕙玟 ',
    url:'/course?teacher=林蕙玟 '
  },
  {
    title: '質性研究',
    url:'/course?course_name=質性研究'
  },
  
  {
    title: '許玉雲 ',
    url:'/course?teacher=許玉雲 '
  },
  {
    title: '婦幼衛生照護議題研討',
    url:'/course?course_name=婦幼衛生照護議題研討'
  },
  
  {
    title: '陳幸眉 ',
    url:'/course?teacher=陳幸眉 '
  },
  {
    title: '教學實習',
    url:'/course?course_name=教學實習'
  },
  
  {
    title: '顏妙芬*胡芳文 ',
    url:'/course?teacher=顏妙芬*胡芳文 '
  },
  {
    title: '科學研究寫作',
    url:'/course?course_name=科學研究寫作'
  },
  
  {
    title: '張瑩如 黃美智 陳幸眉 陳彰惠*陳麗光 ',
    url:'/course?teacher=張瑩如 黃美智 陳幸眉 陳彰惠*陳麗光 '
  },
  {
    title: '護理教育研討',
    url:'/course?course_name=護理教育研討'
  },
  
  {
    title: '陳幸眉*王新台 ',
    url:'/course?teacher=陳幸眉*王新台 '
  },
  {
    title: '健康資料管理及分析',
    url:'/course?course_name=健康資料管理及分析'
  },
  
  {
    title: '張瑩如*胡芳文 ',
    url:'/course?teacher=張瑩如*胡芳文 '
  },
  {
    title: '實證健康照護',
    url:'/course?course_name=實證健康照護'
  },
  
  {
    title: '王瑤華 張文芸 徐畢卿 顏妙芬 柯乃熒 陳靜敏 林靜蘭 方素瓔 陳幸眉 陳彰惠 ',
    url:'/course?teacher=王瑤華 張文芸 徐畢卿 顏妙芬 柯乃熒 陳靜敏 林靜蘭 方素瓔 陳幸眉 陳彰惠 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '王瑤華 黃美智*',
    url:'/course?teacher=王瑤華 黃美智*'
  },
  {
    title: '具文化適切性之健康照護',
    url:'/course?course_name=具文化適切性之健康照護'
  },
  
  {
    title: '王琪珍 王靜枝*',
    url:'/course?teacher=王琪珍 王靜枝*'
  },
  {
    title: '進階社區護理學',
    url:'/course?course_name=進階社區護理學'
  },
  
  {
    title: '高綺吟*張雋曦 黃一修 ',
    url:'/course?teacher=高綺吟*張雋曦 黃一修 '
  },
  {
    title: '泛文化護理研討',
    url:'/course?course_name=泛文化護理研討'
  },
  
  {
    title: '方素瓔 ',
    url:'/course?teacher=方素瓔 '
  },
  {
    title: '護理文獻評論（二）',
    url:'/course?course_name=護理文獻評論（二）'
  },
  
  {
    title: '許玉雲 ',
    url:'/course?teacher=許玉雲 '
  },
  {
    title: '護理文獻評論（二）',
    url:'/course?course_name=護理文獻評論（二）'
  },
  
  {
    title: '林梅鳳 張瑩如 顏妙芬 黃美智 柯乃熒 馮瑞鶯 王靜枝 方素瓔 陳幸眉 ',
    url:'/course?teacher=林梅鳳 張瑩如 顏妙芬 黃美智 柯乃熒 馮瑞鶯 王靜枝 方素瓔 陳幸眉 '
  },
  {
    title: '進階護理學實習（二）',
    url:'/course?course_name=進階護理學實習（二）'
  },
  
  {
    title: '林梅鳳 徐畢卿*林靜蘭 ',
    url:'/course?teacher=林梅鳳 徐畢卿*林靜蘭 '
  },
  {
    title: '進階精神衛生護理學',
    url:'/course?course_name=進階精神衛生護理學'
  },
  
  {
    title: '王瑤華 張瑩如 黃美智 許玉雲 馮瑞鶯*高綺吟 ',
    url:'/course?teacher=王瑤華 張瑩如 黃美智 許玉雲 馮瑞鶯*高綺吟 '
  },
  {
    title: '進階產兒科護理學',
    url:'/course?course_name=進階產兒科護理學'
  },
  
  {
    title: '柯乃熒 方素瓔*陳幸眉 ',
    url:'/course?teacher=柯乃熒 方素瓔*陳幸眉 '
  },
  {
    title: '進階成人護理學',
    url:'/course?course_name=進階成人護理學'
  },
  
  {
    title: '柯乃熒*方素瓔 賴維淑 ',
    url:'/course?teacher=柯乃熒*方素瓔 賴維淑 '
  },
  {
    title: '護理研究',
    url:'/course?course_name=護理研究'
  },
  
  {
    title: '盧達生 ',
    url:'/course?teacher=盧達生 '
  },
  {
    title: '半導體元件數值模擬',
    url:'/course?course_name=半導體元件數值模擬'
  },
  
  {
    title: '黃慶連 ',
    url:'/course?teacher=黃慶連 '
  },
  {
    title: '配電系統自動化',
    url:'/course?course_name=配電系統自動化'
  },
  
  {
    title: '黃慶連 ',
    url:'/course?teacher=黃慶連 '
  },
  {
    title: '高電壓工程特論',
    url:'/course?course_name=高電壓工程特論'
  },
  
  {
    title: '王水進 ',
    url:'/course?teacher=王水進 '
  },
  {
    title: '功率半導體元件概論',
    url:'/course?course_name=功率半導體元件概論'
  },
  
  {
    title: '王英郎 ',
    url:'/course?teacher=王英郎 '
  },
  {
    title: '半導體及先進奈米化製程技術概論（二）',
    url:'/course?course_name=半導體及先進奈米化製程技術概論（二）'
  },
  
  {
    title: '彭洞清 ',
    url:'/course?teacher=彭洞清 '
  },
  {
    title: '奈米世代半導體製程概論',
    url:'/course?course_name=奈米世代半導體製程概論'
  },
  
  {
    title: '陳一浸 ',
    url:'/course?teacher=陳一浸 '
  },
  {
    title: '半導體元件,應用,和可靠度',
    url:'/course?course_name=半導體元件,應用,和可靠度'
  },
  
  {
    title: '洪茂峰 ',
    url:'/course?teacher=洪茂峰 '
  },
  {
    title: '光電元件物理',
    url:'/course?course_name=光電元件物理'
  },
  
  {
    title: '莊文魁 ',
    url:'/course?teacher=莊文魁 '
  },
  {
    title: '光學導論',
    url:'/course?course_name=光學導論'
  },
  
  {
    title: '莊文魁 ',
    url:'/course?teacher=莊文魁 '
  },
  {
    title: '積體光學元件專論',
    url:'/course?course_name=積體光學元件專論'
  },
  
  {
    title: '陳志方 ',
    url:'/course?teacher=陳志方 '
  },
  {
    title: '半導體元件可靠性專論',
    url:'/course?course_name=半導體元件可靠性專論'
  },
  
  {
    title: '許渭州 劉文超*',
    url:'/course?teacher=許渭州 劉文超*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '洪茂峰 ',
    url:'/course?teacher=洪茂峰 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陳志方*王永和 ',
    url:'/course?teacher=陳志方*王永和 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '張守進 ',
    url:'/course?teacher=張守進 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '陳建瑞 ',
    url:'/course?teacher=陳建瑞 '
  },
  {
    title: '表面技術分析',
    url:'/course?course_name=表面技術分析'
  },
  
  {
    title: '莊季瑛 ',
    url:'/course?teacher=莊季瑛 '
  },
  {
    title: '教學實習',
    url:'/course?course_name=教學實習'
  },
  
  {
    title: '張雅雯*',
    url:'/course?teacher=張雅雯*'
  },
  {
    title: '以問題為導向學習循環系統恆定（一）',
    url:'/course?course_name=以問題為導向學習循環系統恆定（一）'
  },
  
  {
    title: '陳彩雲 吳俊明 許志新 張育誌 張雅雯*蕭雅心 蔡曜聲 劉秉彥 ',
    url:'/course?teacher=陳彩雲 吳俊明 許志新 張育誌 張雅雯*蕭雅心 蔡曜聲 劉秉彥 '
  },
  {
    title: '循環系統藥理毒理學',
    url:'/course?course_name=循環系統藥理毒理學'
  },
  
  {
    title: '莊季瑛 黃阿敏 楊尚訓 陳珮君 張雅雯*',
    url:'/course?teacher=莊季瑛 黃阿敏 楊尚訓 陳珮君 張雅雯*'
  },
  {
    title: '神經生理學書報討論（二）',
    url:'/course?course_name=神經生理學書報討論（二）'
  },
  
  {
    title: '湯銘哲 ',
    url:'/course?teacher=湯銘哲 '
  },
  {
    title: '細胞及分子生理學書報討論（二）',
    url:'/course?course_name=細胞及分子生理學書報討論（二）'
  },
  
  {
    title: '湯銘哲 莊季瑛 黃阿敏 楊尚訓*顏賢章 陳珮君 張雅雯 ',
    url:'/course?teacher=湯銘哲 莊季瑛 黃阿敏 楊尚訓*顏賢章 陳珮君 張雅雯 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '蔡少正 ',
    url:'/course?teacher=蔡少正 '
  },
  {
    title: '表觀遺傳學特論（二）',
    url:'/course?course_name=表觀遺傳學特論（二）'
  },
  
  {
    title: '陳柏熹 莊季瑛*凌　斌 游一龍 郭余民 ',
    url:'/course?teacher=陳柏熹 莊季瑛*凌　斌 游一龍 郭余民 '
  },
  {
    title: '神經訊息傳遞特論',
    url:'/course?course_name=神經訊息傳遞特論'
  },
  
  {
    title: '楊尚訓*',
    url:'/course?teacher=楊尚訓*'
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '吳炳慶 許釗凱 張雅雯*張志鵬 張惠華 王應然 李俊璋 蕭雅心 王仰高 ',
    url:'/course?teacher=吳炳慶 許釗凱 張雅雯*張志鵬 張惠華 王應然 李俊璋 蕭雅心 王仰高 '
  },
  {
    title: '標靶器官毒理學',
    url:'/course?course_name=標靶器官毒理學'
  },
  
  {
    title: '顏賢章*',
    url:'/course?teacher=顏賢章*'
  },
  {
    title: '分子老年學特論（二）',
    url:'/course?course_name=分子老年學特論（二）'
  },
  
  {
    title: '黃阿敏 顏賢章*陳珮君 ',
    url:'/course?teacher=黃阿敏 顏賢章*陳珮君 '
  },
  {
    title: '細胞生物學',
    url:'/course?course_name=細胞生物學'
  },
  
  {
    title: '蔡美玲 顏賢章 ',
    url:'/course?teacher=蔡美玲 顏賢章 '
  },
  {
    title: '病態生理學',
    url:'/course?course_name=病態生理學'
  },
  
  {
    title: '湯銘哲 莊季瑛 黃阿敏 楊尚訓*顏賢章 陳珮君 張雅雯 ',
    url:'/course?teacher=湯銘哲 莊季瑛 黃阿敏 楊尚訓*顏賢章 陳珮君 張雅雯 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '黃阿敏 楊尚訓*陳珮君 張雅雯 ',
    url:'/course?teacher=黃阿敏 楊尚訓*陳珮君 張雅雯 '
  },
  {
    title: '分子生物學',
    url:'/course?course_name=分子生物學'
  },
  
  {
    title: '黃滄海 ',
    url:'/course?teacher=黃滄海 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '黃滄海 ',
    url:'/course?teacher=黃滄海 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '馬上鈞*王駿濠 ',
    url:'/course?teacher=馬上鈞*王駿濠 '
  },
  {
    title: '教育統計與電腦應用',
    url:'/course?course_name=教育統計與電腦應用'
  },
  
  {
    title: '黃賢哲 馬上鈞*',
    url:'/course?teacher=黃賢哲 馬上鈞*'
  },
  {
    title: '運動與遊憩賽會管理專題討論',
    url:'/course?course_name=運動與遊憩賽會管理專題討論'
  },
  
  {
    title: '林麗娟*黃滄海 王駿濠 ',
    url:'/course?teacher=林麗娟*黃滄海 王駿濠 '
  },
  {
    title: '健康促進管理',
    url:'/course?course_name=健康促進管理'
  },
  
  {
    title: '周學雯 ',
    url:'/course?teacher=周學雯 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '馬上鈞*王駿濠 ',
    url:'/course?teacher=馬上鈞*王駿濠 '
  },
  {
    title: '教育統計與電腦應用',
    url:'/course?course_name=教育統計與電腦應用'
  },
  
  {
    title: '鄭匡佑 ',
    url:'/course?teacher=鄭匡佑 '
  },
  {
    title: '動作科學專題研究',
    url:'/course?course_name=動作科學專題研究'
  },
  
  {
    title: '黃滄海 ',
    url:'/course?teacher=黃滄海 '
  },
  {
    title: '碩士論文（二）',
    url:'/course?course_name=碩士論文（二）'
  },
  
  {
    title: '黃賢哲 馬上鈞*',
    url:'/course?teacher=黃賢哲 馬上鈞*'
  },
  {
    title: '運動與遊憩賽會管理專題討論',
    url:'/course?course_name=運動與遊憩賽會管理專題討論'
  },
  
  {
    title: '徐珊惠 ',
    url:'/course?teacher=徐珊惠 '
  },
  {
    title: '休閒、文化、運動專題研究',
    url:'/course?course_name=休閒、文化、運動專題研究'
  },
  
  {
    title: '鄭匡佑 ',
    url:'/course?teacher=鄭匡佑 '
  },
  {
    title: '最佳化設計：理論與運動產業及工程之應用',
    url:'/course?course_name=最佳化設計：理論與運動產業及工程之應用'
  },
  
  {
    title: '王駿濠 ',
    url:'/course?teacher=王駿濠 '
  },
  {
    title: '運動健康管理與認知行為科學專題研究',
    url:'/course?course_name=運動健康管理與認知行為科學專題研究'
  },
  
  {
    title: '黃滄海 ',
    url:'/course?teacher=黃滄海 '
  },
  {
    title: '運動訓練科學專題研究',
    url:'/course?course_name=運動訓練科學專題研究'
  },
  
  {
    title: '林麗娟 ',
    url:'/course?teacher=林麗娟 '
  },
  {
    title: '活躍老化健康產業專題討論',
    url:'/course?course_name=活躍老化健康產業專題討論'
  },
  
  {
    title: '王苓華 ',
    url:'/course?teacher=王苓華 '
  },
  {
    title: '養生運動科學特論',
    url:'/course?course_name=養生運動科學特論'
  },
  
  {
    title: '葉晨聖 宋光生*許鏵芬 李介仁 ',
    url:'/course?teacher=葉晨聖 宋光生*許鏵芬 李介仁 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '陳淑慧 ',
    url:'/course?teacher=陳淑慧 '
  },
  {
    title: '蛋白質與蛋白質體學',
    url:'/course?course_name=蛋白質與蛋白質體學'
  },
  
  {
    title: '黃福永 黃守仁 林榮良 蔡惠蓮 邱顯泰 李介仁 ',
    url:'/course?teacher=黃福永 黃守仁 林榮良 蔡惠蓮 邱顯泰 李介仁 '
  },
  {
    title: '化學教學專題討論',
    url:'/course?course_name=化學教學專題討論'
  },
  
  {
    title: '葉晨聖 ',
    url:'/course?teacher=葉晨聖 '
  },
  {
    title: '物理化學特論',
    url:'/course?course_name=物理化學特論'
  },
  
  {
    title: '吳欣倫 ',
    url:'/course?teacher=吳欣倫 '
  },
  {
    title: '無機奈米材料合成技術',
    url:'/course?course_name=無機奈米材料合成技術'
  },
  
  {
    title: '鄭沐政 ',
    url:'/course?teacher=鄭沐政 '
  },
  {
    title: '材料與分子的模擬',
    url:'/course?course_name=材料與分子的模擬'
  },
  
  {
    title: '邱顯泰 ',
    url:'/course?teacher=邱顯泰 '
  },
  {
    title: '合成生物學特論',
    url:'/course?course_name=合成生物學特論'
  },
  
  {
    title: '許桂芳 ',
    url:'/course?teacher=許桂芳 '
  },
  {
    title: '結晶學（二）',
    url:'/course?course_name=結晶學（二）'
  },
  
  {
    title: '宋光生 ',
    url:'/course?teacher=宋光生 '
  },
  {
    title: '物理有機化學特論',
    url:'/course?course_name=物理有機化學特論'
  },
  
  {
    title: '孫亦文 ',
    url:'/course?teacher=孫亦文 '
  },
  {
    title: '電化學特論',
    url:'/course?course_name=電化學特論'
  },
  
  {
    title: '俞聖法 鄭偉杰 ',
    url:'/course?teacher=俞聖法 鄭偉杰 '
  },
  {
    title: '藥物開發與生物催化',
    url:'/course?course_name=藥物開發與生物催化'
  },
  
  {
    title: '許鏵芬 ',
    url:'/course?teacher=許鏵芬 '
  },
  {
    title: '高等無機化學',
    url:'/course?course_name=高等無機化學'
  },
  
  {
    title: '莊治平 ',
    url:'/course?teacher=莊治平 '
  },
  {
    title: '高等有機化學',
    url:'/course?course_name=高等有機化學'
  },
  
  {
    title: '莊治平 ',
    url:'/course?teacher=莊治平 '
  },
  {
    title: '有機合成特論',
    url:'/course?course_name=有機合成特論'
  },
  
  {
    title: '孫亦文 葉晨聖 宋光生*許鏵芬 ',
    url:'/course?teacher=孫亦文 葉晨聖 宋光生*許鏵芬 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '陳淑慧 ',
    url:'/course?teacher=陳淑慧 '
  },
  {
    title: '書報討論（二）',
    url:'/course?course_name=書報討論（二）'
  },
  
  {
    title: '吳欣倫 ',
    url:'/course?teacher=吳欣倫 '
  },
  {
    title: '書報討論（二）',
    url:'/course?course_name=書報討論（二）'
  },
  
  {
    title: '施權峰*黃正亮 ',
    url:'/course?teacher=施權峰*黃正亮 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '王水進 ',
    url:'/course?teacher=王水進 '
  },
  {
    title: '功率半導體元件概論',
    url:'/course?course_name=功率半導體元件概論'
  },
  
  {
    title: '王英郎 ',
    url:'/course?teacher=王英郎 '
  },
  {
    title: '半導體及先進奈米化製程技術概論（二）',
    url:'/course?course_name=半導體及先進奈米化製程技術概論（二）'
  },
  
  {
    title: '彭洞清 ',
    url:'/course?teacher=彭洞清 '
  },
  {
    title: '奈米世代半導體製程概論',
    url:'/course?course_name=奈米世代半導體製程概論'
  },
  
  {
    title: '陳進興 ',
    url:'/course?teacher=陳進興 '
  },
  {
    title: '矩陣理論與計算',
    url:'/course?course_name=矩陣理論與計算'
  },
  
  {
    title: '楊竹星 ',
    url:'/course?teacher=楊竹星 '
  },
  {
    title: '網路安全',
    url:'/course?course_name=網路安全'
  },
  
  {
    title: '郭文光 ',
    url:'/course?teacher=郭文光 '
  },
  {
    title: '無線網路與應用',
    url:'/course?course_name=無線網路與應用'
  },
  
  {
    title: '鄭光偉 ',
    url:'/course?teacher=鄭光偉 '
  },
  {
    title: 'PLL/DLL設計與應用',
    url:'/course?course_name=PLL/DLL設計與應用'
  },
  
  {
    title: '張名先 ',
    url:'/course?teacher=張名先 '
  },
  {
    title: '適應性信號處理',
    url:'/course?course_name=適應性信號處理'
  },
  
  {
    title: '李忠憲 ',
    url:'/course?teacher=李忠憲 '
  },
  {
    title: '排隊理論',
    url:'/course?course_name=排隊理論'
  },
  
  {
    title: '彭洞清 ',
    url:'/course?teacher=彭洞清 '
  },
  {
    title: '奈米世代半導體製程概論',
    url:'/course?course_name=奈米世代半導體製程概論'
  },
  
  {
    title: '李炳鈞 ',
    url:'/course?teacher=李炳鈞 '
  },
  {
    title: '固態熱力學',
    url:'/course?course_name=固態熱力學'
  },
  
  {
    title: '鄭光偉 ',
    url:'/course?teacher=鄭光偉 '
  },
  {
    title: 'PLL/DLL設計與應用',
    url:'/course?course_name=PLL/DLL設計與應用'
  },
  
  {
    title: '李偉賢 ',
    url:'/course?teacher=李偉賢 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '李偉賢 ',
    url:'/course?teacher=李偉賢 '
  },
  {
    title: '工程管理專題研討（四）',
    url:'/course?course_name=工程管理專題研討（四）'
  },
  
  {
    title: '李偉賢 ',
    url:'/course?teacher=李偉賢 '
  },
  {
    title: '工程管理專題研討（二）',
    url:'/course?course_name=工程管理專題研討（二）'
  },
  
  {
    title: '邵揮洲 ',
    url:'/course?teacher=邵揮洲 '
  },
  {
    title: '產業個案與實務',
    url:'/course?course_name=產業個案與實務'
  },
  
  {
    title: '陸喬克 ',
    url:'/course?teacher=陸喬克 '
  },
  {
    title: '科技寫作',
    url:'/course?course_name=科技寫作'
  },
  
  {
    title: '劉世南 ',
    url:'/course?teacher=劉世南 '
  },
  {
    title: '設計思考與創新管理',
    url:'/course?course_name=設計思考與創新管理'
  },
  
  {
    title: '鄭泗滄 ',
    url:'/course?teacher=鄭泗滄 '
  },
  {
    title: '系統工程與管理',
    url:'/course?course_name=系統工程與管理'
  },
  
  {
    title: '馮重偉 ',
    url:'/course?teacher=馮重偉 '
  },
  {
    title: '專案管理',
    url:'/course?course_name=專案管理'
  },
  
  {
    title: '陳家榮 ',
    url:'/course?teacher=陳家榮 '
  },
  {
    title: '工程經濟',
    url:'/course?course_name=工程經濟'
  },
  
  {
    title: '蔡明田 ',
    url:'/course?teacher=蔡明田 '
  },
  {
    title: '技術策略分析',
    url:'/course?course_name=技術策略分析'
  },
  
  {
    title: '邵揮洲 ',
    url:'/course?teacher=邵揮洲 '
  },
  {
    title: '社會企業',
    url:'/course?course_name=社會企業'
  },
  
  {
    title: '李家岩 ',
    url:'/course?teacher=李家岩 '
  },
  {
    title: '資料探勘',
    url:'/course?course_name=資料探勘'
  },
  
  {
    title: '施勵行 ',
    url:'/course?teacher=施勵行 '
  },
  {
    title: '生產管理',
    url:'/course?course_name=生產管理'
  },
  
  {
    title: '陳澤生 ',
    url:'/course?teacher=陳澤生 '
  },
  {
    title: '知識管理',
    url:'/course?course_name=知識管理'
  },
  
  {
    title: '呂宗學 胡淑貞 王亮懿 古鯉榕 莊佳蓉 簡玉雯*',
    url:'/course?teacher=呂宗學 胡淑貞 王亮懿 古鯉榕 莊佳蓉 簡玉雯*'
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '呂宗學 胡淑貞 王亮懿 古鯉榕 莊佳蓉 簡玉雯*',
    url:'/course?teacher=呂宗學 胡淑貞 王亮懿 古鯉榕 莊佳蓉 簡玉雯*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '呂宗學 胡淑貞 王亮懿 古鯉榕 莊佳蓉 簡玉雯*',
    url:'/course?teacher=呂宗學 胡淑貞 王亮懿 古鯉榕 莊佳蓉 簡玉雯*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '呂宗學 胡淑貞 王亮懿 古鯉榕 莊佳蓉 簡玉雯*',
    url:'/course?teacher=呂宗學 胡淑貞 王亮懿 古鯉榕 莊佳蓉 簡玉雯*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '呂宗學 胡淑貞 王亮懿 古鯉榕 莊佳蓉 簡玉雯*',
    url:'/course?teacher=呂宗學 胡淑貞 王亮懿 古鯉榕 莊佳蓉 簡玉雯*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '呂宗學 ',
    url:'/course?teacher=呂宗學 '
  },
  {
    title: '流行病學與健康照護研究',
    url:'/course?course_name=流行病學與健康照護研究'
  },
  
  {
    title: '古鯉榕 ',
    url:'/course?teacher=古鯉榕 '
  },
  {
    title: '衛生政策分析與評估',
    url:'/course?course_name=衛生政策分析與評估'
  },
  
  {
    title: '趙子元 胡淑貞*',
    url:'/course?teacher=趙子元 胡淑貞*'
  },
  {
    title: '健康城市與社區營造',
    url:'/course?course_name=健康城市與社區營造'
  },
  
  {
    title: '莊佳蓉 ',
    url:'/course?teacher=莊佳蓉 '
  },
  {
    title: '青少年健康問題概論',
    url:'/course?course_name=青少年健康問題概論'
  },
  
  {
    title: '王榮德 ',
    url:'/course?teacher=王榮德 '
  },
  {
    title: '醫藥衛生中的生活品質與成本效果評估',
    url:'/course?course_name=醫藥衛生中的生活品質與成本效果評估'
  },
  
  {
    title: '王榮德 ',
    url:'/course?teacher=王榮德 '
  },
  {
    title: '人群健康觀察研究文獻評論',
    url:'/course?course_name=人群健康觀察研究文獻評論'
  },
  
  {
    title: '陳美霞*',
    url:'/course?teacher=陳美霞*'
  },
  {
    title: '健康與醫療的政治經濟學',
    url:'/course?course_name=健康與醫療的政治經濟學'
  },
  
  {
    title: '林聖翔 王亮懿*',
    url:'/course?teacher=林聖翔 王亮懿*'
  },
  {
    title: '進階生物統計學',
    url:'/course?course_name=進階生物統計學'
  },
  
  {
    title: '羅丞巖 ',
    url:'/course?teacher=羅丞巖 '
  },
  {
    title: '全民國防教育軍事訓練－全民國防',
    url:'/course?course_name=全民國防教育軍事訓練－全民國防'
  },
  
  {
    title: '林承諭 ',
    url:'/course?teacher=林承諭 '
  },
  {
    title: '全民國防教育軍事訓練－全民國防',
    url:'/course?course_name=全民國防教育軍事訓練－全民國防'
  },
  
  {
    title: '林承諭 ',
    url:'/course?teacher=林承諭 '
  },
  {
    title: '全民國防教育軍事訓練－全民國防',
    url:'/course?course_name=全民國防教育軍事訓練－全民國防'
  },
  
  {
    title: '周士琦 ',
    url:'/course?teacher=周士琦 '
  },
  {
    title: '全民國防教育軍事訓練－全民國防',
    url:'/course?course_name=全民國防教育軍事訓練－全民國防'
  },
  
  {
    title: '周士琦 ',
    url:'/course?teacher=周士琦 '
  },
  {
    title: '全民國防教育軍事訓練－全民國防',
    url:'/course?course_name=全民國防教育軍事訓練－全民國防'
  },
  
  {
    title: '鄭智元 ',
    url:'/course?teacher=鄭智元 '
  },
  {
    title: '全民國防教育軍事訓練－國際情勢',
    url:'/course?course_name=全民國防教育軍事訓練－國際情勢'
  },
  
  {
    title: '鄭智元 ',
    url:'/course?teacher=鄭智元 '
  },
  {
    title: '全民國防教育軍事訓練－國際情勢',
    url:'/course?course_name=全民國防教育軍事訓練－國際情勢'
  },
  
  {
    title: '林朝良 ',
    url:'/course?teacher=林朝良 '
  },
  {
    title: '全民國防教育軍事訓練－國際情勢',
    url:'/course?course_name=全民國防教育軍事訓練－國際情勢'
  },
  
  {
    title: '林朝良 ',
    url:'/course?teacher=林朝良 '
  },
  {
    title: '全民國防教育軍事訓練－國際情勢',
    url:'/course?course_name=全民國防教育軍事訓練－國際情勢'
  },
  
  {
    title: '盧麗君 ',
    url:'/course?teacher=盧麗君 '
  },
  {
    title: '全民國防教育軍事訓練－防衛動員',
    url:'/course?course_name=全民國防教育軍事訓練－防衛動員'
  },
  
  {
    title: '盧麗君 ',
    url:'/course?teacher=盧麗君 '
  },
  {
    title: '全民國防教育軍事訓練－防衛動員',
    url:'/course?course_name=全民國防教育軍事訓練－防衛動員'
  },
  
  {
    title: '陳鈞宜 ',
    url:'/course?teacher=陳鈞宜 '
  },
  {
    title: '全民國防教育軍事訓練－國防科技',
    url:'/course?course_name=全民國防教育軍事訓練－國防科技'
  },
  
  {
    title: '陳鈞宜 ',
    url:'/course?teacher=陳鈞宜 '
  },
  {
    title: '全民國防教育軍事訓練－國防科技',
    url:'/course?course_name=全民國防教育軍事訓練－國防科技'
  },
  
  {
    title: '蔡慧珍 ',
    url:'/course?teacher=蔡慧珍 '
  },
  {
    title: '全民國防教育軍事訓練－國防科技',
    url:'/course?course_name=全民國防教育軍事訓練－國防科技'
  },
  
  {
    title: '蔡慧珍 ',
    url:'/course?teacher=蔡慧珍 '
  },
  {
    title: '全民國防教育軍事訓練－國防科技',
    url:'/course?course_name=全民國防教育軍事訓練－國防科技'
  },
  
  {
    title: '陳國彬 ',
    url:'/course?teacher=陳國彬 '
  },
  {
    title: '全民國防教育軍事訓練－國防政策',
    url:'/course?course_name=全民國防教育軍事訓練－國防政策'
  },
  
  {
    title: '陳國彬 ',
    url:'/course?teacher=陳國彬 '
  },
  {
    title: '全民國防教育軍事訓練－國防政策',
    url:'/course?course_name=全民國防教育軍事訓練－國防政策'
  },
  
  {
    title: '羅偉誠 ',
    url:'/course?teacher=羅偉誠 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '董東璟 ',
    url:'/course?teacher=董東璟 '
  },
  {
    title: '海岸保護',
    url:'/course?course_name=海岸保護'
  },
  
  {
    title: '黃良銘 ',
    url:'/course?teacher=黃良銘 '
  },
  {
    title: '水處理技術',
    url:'/course?course_name=水處理技術'
  },
  
  {
    title: '王曉中 謝正倫*',
    url:'/course?teacher=王曉中 謝正倫*'
  },
  {
    title: '地區防災計畫',
    url:'/course?course_name=地區防災計畫'
  },
  
  {
    title: '羅偉誠*吳嘉文 郭振民 ',
    url:'/course?teacher=羅偉誠*吳嘉文 郭振民 '
  },
  {
    title: '中等水文學',
    url:'/course?course_name=中等水文學'
  },
  
  {
    title: '朱宏杰 ',
    url:'/course?teacher=朱宏杰 '
  },
  {
    title: '空間環境資料分析與模式',
    url:'/course?course_name=空間環境資料分析與模式'
  },
  
  {
    title: '景國恩 ',
    url:'/course?teacher=景國恩 '
  },
  {
    title: '大地測量技術在地殼變形研究之應用',
    url:'/course?course_name=大地測量技術在地殼變形研究之應用'
  },
  
  {
    title: '王驥魁 ',
    url:'/course?teacher=王驥魁 '
  },
  {
    title: '雷射遙感探測',
    url:'/course?course_name=雷射遙感探測'
  },
  
  {
    title: '李維森*李欣輯 吳亭燁 ',
    url:'/course?teacher=李維森*李欣輯 吳亭燁 '
  },
  {
    title: '颱洪災害減災方法與技術',
    url:'/course?course_name=颱洪災害減災方法與技術'
  },
  
  {
    title: '林漢良 ',
    url:'/course?teacher=林漢良 '
  },
  {
    title: '防災資訊系統',
    url:'/course?course_name=防災資訊系統'
  },
  
  {
    title: '王曉中 尹孝元 謝正倫*',
    url:'/course?teacher=王曉中 尹孝元 謝正倫*'
  },
  {
    title: '防災實務',
    url:'/course?course_name=防災實務'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '陳佳琳 ',
    url:'/course?teacher=陳佳琳 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '獨立研究',
    url:'/course?course_name=獨立研究'
  },
  
  {
    title: '陳計堯 ',
    url:'/course?teacher=陳計堯 '
  },
  {
    title: '臺灣原住民史（17到20世紀）史料專題',
    url:'/course?course_name=臺灣原住民史（17到20世紀）史料專題'
  },
  
  {
    title: '王文霞 ',
    url:'/course?teacher=王文霞 '
  },
  {
    title: '英國勞工史專題',
    url:'/course?course_name=英國勞工史專題'
  },
  
  {
    title: '王健文 ',
    url:'/course?teacher=王健文 '
  },
  {
    title: '空間文化與歷史',
    url:'/course?course_name=空間文化與歷史'
  },
  
  {
    title: '李鑑慧 ',
    url:'/course?teacher=李鑑慧 '
  },
  {
    title: '人與動物關係史專題',
    url:'/course?course_name=人與動物關係史專題'
  },
  
  {
    title: '林長寬 ',
    url:'/course?teacher=林長寬 '
  },
  {
    title: '現代伊斯蘭運動史專題',
    url:'/course?course_name=現代伊斯蘭運動史專題'
  },
  
  {
    title: '江達智 ',
    url:'/course?teacher=江達智 '
  },
  {
    title: '喪葬史專題研究',
    url:'/course?course_name=喪葬史專題研究'
  },
  
  {
    title: '鄭　梓 ',
    url:'/course?teacher=鄭　梓 '
  },
  {
    title: '現代台海兩岸關係史專題研究（二）',
    url:'/course?course_name=現代台海兩岸關係史專題研究（二）'
  },
  
  {
    title: '陳文松 ',
    url:'/course?teacher=陳文松 '
  },
  {
    title: '台灣政治文化史專題',
    url:'/course?course_name=台灣政治文化史專題'
  },
  
  {
    title: '蕭瓊瑞 ',
    url:'/course?teacher=蕭瓊瑞 '
  },
  {
    title: '台灣美術史專題研究（二）',
    url:'/course?course_name=台灣美術史專題研究（二）'
  },
  
  {
    title: '陳玉女 ',
    url:'/course?teacher=陳玉女 '
  },
  {
    title: '史學與史學研究（二）',
    url:'/course?course_name=史學與史學研究（二）'
  },
  
  {
    title: '謝美娥 ',
    url:'/course?teacher=謝美娥 '
  },
  {
    title: '論文寫作與實習（二）',
    url:'/course?course_name=論文寫作與實習（二）'
  },
  
  {
    title: '張勝柏 ',
    url:'/course?teacher=張勝柏 '
  },
  {
    title: '高級史學英文（二）',
    url:'/course?course_name=高級史學英文（二）'
  },
  
  {
    title: '李啟彰 ',
    url:'/course?teacher=李啟彰 '
  },
  {
    title: '專業史學日文（二）',
    url:'/course?course_name=專業史學日文（二）'
  },
  
  {
    title: '謝孫源 ',
    url:'/course?teacher=謝孫源 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '莊坤達 ',
    url:'/course?teacher=莊坤達 '
  },
  {
    title: '巨量圖數據資料庫分析專論',
    url:'/course?course_name=巨量圖數據資料庫分析專論'
  },
  
  {
    title: '林英超 ',
    url:'/course?teacher=林英超 '
  },
  {
    title: 'VLSI設計自動化專論',
    url:'/course?course_name=VLSI設計自動化專論'
  },
  
  {
    title: '謝孫源 ',
    url:'/course?teacher=謝孫源 '
  },
  {
    title: '圖形理論',
    url:'/course?course_name=圖形理論'
  },
  
  {
    title: '郭耀煌 ',
    url:'/course?teacher=郭耀煌 '
  },
  {
    title: '智慧感知雲端系統與應用設計',
    url:'/course?course_name=智慧感知雲端系統與應用設計'
  },
  
  {
    title: '張大緯 ',
    url:'/course?teacher=張大緯 '
  },
  {
    title: '輸出入裝置與驅動程式設計',
    url:'/course?course_name=輸出入裝置與驅動程式設計'
  },
  
  {
    title: '梁勝富 ',
    url:'/course?teacher=梁勝富 '
  },
  {
    title: '神經運算與腦機介面專論',
    url:'/course?course_name=神經運算與腦機介面專論'
  },
  
  {
    title: '張大緯 ',
    url:'/course?teacher=張大緯 '
  },
  {
    title: '作業系統與虛擬機器專論',
    url:'/course?course_name=作業系統與虛擬機器專論'
  },
  
  {
    title: '蔣榮先 ',
    url:'/course?teacher=蔣榮先 '
  },
  {
    title: '資訊擷取專論',
    url:'/course?course_name=資訊擷取專論'
  },
  
  {
    title: '蘇銓清 ',
    url:'/course?teacher=蘇銓清 '
  },
  {
    title: '物聯網核心網路技術',
    url:'/course?course_name=物聯網核心網路技術'
  },
  
  {
    title: '陳培殷 ',
    url:'/course?teacher=陳培殷 '
  },
  {
    title: '進階數位電路設計專論',
    url:'/course?course_name=進階數位電路設計專論'
  },
  
  {
    title: '鄭憲宗 ',
    url:'/course?teacher=鄭憲宗 '
  },
  {
    title: '數位家庭與數位電視科技專論',
    url:'/course?course_name=數位家庭與數位電視科技專論'
  },
  
  {
    title: '鄭憲宗 ',
    url:'/course?teacher=鄭憲宗 '
  },
  {
    title: '智慧感測與行動計算',
    url:'/course?course_name=智慧感測與行動計算'
  },
  
  {
    title: '謝孫源 ',
    url:'/course?teacher=謝孫源 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '江凱偉 ',
    url:'/course?teacher=江凱偉 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '尤瑞哲 景國恩*',
    url:'/course?teacher=尤瑞哲 景國恩*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '洪榮宏 林昭宏*王驥魁 ',
    url:'/course?teacher=洪榮宏 林昭宏*王驥魁 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '王驥魁 ',
    url:'/course?teacher=王驥魁 '
  },
  {
    title: '遙感探測資料處理與實作',
    url:'/course?course_name=遙感探測資料處理與實作'
  },
  
  {
    title: '王驥魁 ',
    url:'/course?teacher=王驥魁 '
  },
  {
    title: '遙感探測資料處理與實作',
    url:'/course?course_name=遙感探測資料處理與實作'
  },
  
  {
    title: '張秀雯 ',
    url:'/course?teacher=張秀雯 '
  },
  {
    title: '導航估計理論',
    url:'/course?course_name=導航估計理論'
  },
  
  {
    title: '景國恩 ',
    url:'/course?teacher=景國恩 '
  },
  {
    title: '大地測量技術在地殼變形研究之應用',
    url:'/course?course_name=大地測量技術在地殼變形研究之應用'
  },
  
  {
    title: '王驥魁 ',
    url:'/course?teacher=王驥魁 '
  },
  {
    title: '雷射遙感探測',
    url:'/course?course_name=雷射遙感探測'
  },
  
  {
    title: '呂學展 ',
    url:'/course?teacher=呂學展 '
  },
  {
    title: '資料探勘',
    url:'/course?course_name=資料探勘'
  },
  
  {
    title: '朱宏杰 ',
    url:'/course?teacher=朱宏杰 '
  },
  {
    title: '空間環境資料分析與模式',
    url:'/course?course_name=空間環境資料分析與模式'
  },
  
  {
    title: '江凱偉 ',
    url:'/course?teacher=江凱偉 '
  },
  {
    title: '慣性測量與導航',
    url:'/course?course_name=慣性測量與導航'
  },
  
  {
    title: '尤瑞哲 ',
    url:'/course?teacher=尤瑞哲 '
  },
  {
    title: '測量專題討論（四）',
    url:'/course?course_name=測量專題討論（四）'
  },
  
  {
    title: '呂學展 ',
    url:'/course?teacher=呂學展 '
  },
  {
    title: '測量專題討論（二）',
    url:'/course?course_name=測量專題討論（二）'
  },
  
  {
    title: '劉乃慈 ',
    url:'/course?teacher=劉乃慈 '
  },
  {
    title: '當代華文文學與文化批評',
    url:'/course?course_name=當代華文文學與文化批評'
  },
  
  {
    title: '李承機 ',
    url:'/course?teacher=李承機 '
  },
  {
    title: '台灣社會文化史專題研究',
    url:'/course?course_name=台灣社會文化史專題研究'
  },
  
  {
    title: '簡義明 ',
    url:'/course?teacher=簡義明 '
  },
  {
    title: '研究方法與論文寫作',
    url:'/course?course_name=研究方法與論文寫作'
  },
  
  {
    title: '劉乃慈 ',
    url:'/course?teacher=劉乃慈 '
  },
  {
    title: '當代華文文學與文化批評',
    url:'/course?course_name=當代華文文學與文化批評'
  },
  
  {
    title: '游勝冠 ',
    url:'/course?teacher=游勝冠 '
  },
  {
    title: '鄉土文學專題研究',
    url:'/course?course_name=鄉土文學專題研究'
  },
  
  {
    title: '蔡明諺 ',
    url:'/course?teacher=蔡明諺 '
  },
  {
    title: '賴和文學專題研究',
    url:'/course?course_name=賴和文學專題研究'
  },
  
  {
    title: '鍾秀梅 ',
    url:'/course?teacher=鍾秀梅 '
  },
  {
    title: '族群與文化專題研究',
    url:'/course?course_name=族群與文化專題研究'
  },
  
  {
    title: '蔣為文 ',
    url:'/course?teacher=蔣為文 '
  },
  {
    title: '越語教材與教法',
    url:'/course?course_name=越語教材與教法'
  },
  
  {
    title: '吳玫瑛 ',
    url:'/course?teacher=吳玫瑛 '
  },
  {
    title: '臺灣文學與童年研究',
    url:'/course?course_name=臺灣文學與童年研究'
  },
  
  {
    title: '李承機 ',
    url:'/course?teacher=李承機 '
  },
  {
    title: '台灣社會文化史專題研究',
    url:'/course?course_name=台灣社會文化史專題研究'
  },
  
  {
    title: '游勝冠 ',
    url:'/course?teacher=游勝冠 '
  },
  {
    title: '馬克思主義與台灣文學專題研究',
    url:'/course?course_name=馬克思主義與台灣文學專題研究'
  },
  
  {
    title: '鍾秀梅 ',
    url:'/course?teacher=鍾秀梅 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '楊芳枝 ',
    url:'/course?teacher=楊芳枝 '
  },
  {
    title: '學術英文（二）',
    url:'/course?course_name=學術英文（二）'
  },
  
  {
    title: '楊芳枝 ',
    url:'/course?teacher=楊芳枝 '
  },
  {
    title: '學術英文（二）',
    url:'/course?course_name=學術英文（二）'
  },
  
  {
    title: '廖淑芳 ',
    url:'/course?teacher=廖淑芳 '
  },
  {
    title: '文學研究方法與論文寫作',
    url:'/course?course_name=文學研究方法與論文寫作'
  },
  
  {
    title: '簡義明 ',
    url:'/course?teacher=簡義明 '
  },
  {
    title: '台灣文學專題討論',
    url:'/course?course_name=台灣文學專題討論'
  },
  
  {
    title: '楊倍昌*凌　斌*',
    url:'/course?teacher=楊倍昌*凌　斌*'
  },
  {
    title: '腫瘤免疫學',
    url:'/course?course_name=腫瘤免疫學'
  },
  
  {
    title: '胥直利*林威辰*',
    url:'/course?teacher=胥直利*林威辰*'
  },
  {
    title: '分子寄生蟲學',
    url:'/course?course_name=分子寄生蟲學'
  },
  
  {
    title: '黃一修 彭貴春*吳尚蓉 ',
    url:'/course?teacher=黃一修 彭貴春*吳尚蓉 '
  },
  {
    title: '轉譯醫學導論',
    url:'/course?course_name=轉譯醫學導論'
  },
  
  {
    title: '辛致煒 林威辰 劉校生 陳舜華 蕭璦莉*林以行 凌　斌 王淑鶯 張志鵬 黃一修 彭貴春 ',
    url:'/course?teacher=辛致煒 林威辰 劉校生 陳舜華 蕭璦莉*林以行 凌　斌 王淑鶯 張志鵬 黃一修 彭貴春 '
  },
  {
    title: '實驗微生物及免疫學',
    url:'/course?course_name=實驗微生物及免疫學'
  },
  
  {
    title: '余俊強*',
    url:'/course?teacher=余俊強*'
  },
  {
    title: '動物實驗研究法',
    url:'/course?course_name=動物實驗研究法'
  },
  
  {
    title: '楊孔嘉 王貞仁 余佳益 張定宗 劉校生 陳舜華*凌　斌 張　堯 彭貴春 王憲威 ',
    url:'/course?teacher=楊孔嘉 王貞仁 余佳益 張定宗 劉校生 陳舜華*凌　斌 張　堯 彭貴春 王憲威 '
  },
  {
    title: '高等病毒學',
    url:'/course?course_name=高等病毒學'
  },
  
  {
    title: '林威辰*楊倍昌*',
    url:'/course?teacher=林威辰*楊倍昌*'
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '顏經洲 黃一修*陳振暐 鄧景浩 橋本昌征 ',
    url:'/course?teacher=顏經洲 黃一修*陳振暐 鄧景浩 橋本昌征 '
  },
  {
    title: '高等細菌學',
    url:'/course?course_name=高等細菌學'
  },
  
  {
    title: '郭保麟 王崇任 許耿福 吳昭良*謝嘉興 蕭璦莉*袁　國 ',
    url:'/course?teacher=郭保麟 王崇任 許耿福 吳昭良*謝嘉興 蕭璦莉*袁　國 '
  },
  {
    title: '基因治療特論',
    url:'/course?course_name=基因治療特論'
  },
  
  {
    title: '林威辰*楊倍昌*',
    url:'/course?teacher=林威辰*楊倍昌*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '林威辰*楊倍昌*',
    url:'/course?teacher=林威辰*楊倍昌*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '陳炯瑜 劉清泉 何宗憲 王世敏 陳柏齡 林子凱 楊倍昌 余俊強 陳舜華 蕭璦莉*王淑鶯 黃一修 陳振暐 ',
    url:'/course?teacher=陳炯瑜 劉清泉 何宗憲 王世敏 陳柏齡 林子凱 楊倍昌 余俊強 陳舜華 蕭璦莉*王淑鶯 黃一修 陳振暐 '
  },
  {
    title: '醫學微生物學',
    url:'/course?course_name=醫學微生物學'
  },
  
  {
    title: '邵揮洲 ',
    url:'/course?teacher=邵揮洲 '
  },
  {
    title: '服務學習（三）—校園淨塑活動',
    url:'/course?course_name=服務學習（三）—校園淨塑活動'
  },
  
  {
    title: '徐碧真 ',
    url:'/course?teacher=徐碧真 '
  },
  {
    title: '服務學習（三）─分享愛‧愛分享',
    url:'/course?course_name=服務學習（三）─分享愛‧愛分享'
  },
  
  {
    title: '陳靜敏 ',
    url:'/course?teacher=陳靜敏 '
  },
  {
    title: '服務學習（三）—國際義工',
    url:'/course?course_name=服務學習（三）—國際義工'
  },
  
  {
    title: '鄭淑惠 ',
    url:'/course?teacher=鄭淑惠 '
  },
  {
    title: '服務學習（三） ─校園無障礙',
    url:'/course?course_name=服務學習（三） ─校園無障礙'
  },
  
  {
    title: '張智仁 ',
    url:'/course?teacher=張智仁 '
  },
  {
    title: '服務學習（三）─醫院服務與體驗',
    url:'/course?course_name=服務學習（三）─醫院服務與體驗'
  },
  
  {
    title: '王健文 ',
    url:'/course?teacher=王健文 '
  },
  {
    title: '服務學習（三） ─圖書閱覽服務',
    url:'/course?course_name=服務學習（三） ─圖書閱覽服務'
  },
  
  {
    title: '吳光庭 ',
    url:'/course?teacher=吳光庭 '
  },
  {
    title: '服務學習（三）─藝術中心',
    url:'/course?course_name=服務學習（三）─藝術中心'
  },
  
  {
    title: '陳國彬 ',
    url:'/course?teacher=陳國彬 '
  },
  {
    title: '服務學習（三）府城平安居─賃居服務學習',
    url:'/course?course_name=服務學習（三）府城平安居─賃居服務學習'
  },
  
  {
    title: '王健文 ',
    url:'/course?teacher=王健文 '
  },
  {
    title: '服務學習（三）─圖書館館藏維護管理',
    url:'/course?course_name=服務學習（三）─圖書館館藏維護管理'
  },
  
  {
    title: '王筱雯 ',
    url:'/course?teacher=王筱雯 '
  },
  {
    title: '服務學習（三）—國際禮賓大使',
    url:'/course?course_name=服務學習（三）—國際禮賓大使'
  },
  
  {
    title: '陳鈞宜 ',
    url:'/course?teacher=陳鈞宜 '
  },
  {
    title: '服務學習（三）—愛，從我開始',
    url:'/course?course_name=服務學習（三）—愛，從我開始'
  },
  
  {
    title: '周士琦 ',
    url:'/course?teacher=周士琦 '
  },
  {
    title: '服務學習（三）－畢典服務與反思',
    url:'/course?course_name=服務學習（三）－畢典服務與反思'
  },
  
  {
    title: '周士琦 ',
    url:'/course?teacher=周士琦 '
  },
  {
    title: '服務學習（三）─慈幼與服務學習',
    url:'/course?course_name=服務學習（三）─慈幼與服務學習'
  },
  
  {
    title: '鄭匡佑 ',
    url:'/course?teacher=鄭匡佑 '
  },
  {
    title: '服務學習（三）－榕鳳形象大使服務',
    url:'/course?course_name=服務學習（三）－榕鳳形象大使服務'
  },
  
  {
    title: '盧達生 ',
    url:'/course?teacher=盧達生 '
  },
  {
    title: '半導體元件數值模擬',
    url:'/course?course_name=半導體元件數值模擬'
  },
  
  {
    title: '黃慶連 ',
    url:'/course?teacher=黃慶連 '
  },
  {
    title: '配電系統自動化',
    url:'/course?course_name=配電系統自動化'
  },
  
  {
    title: '黃慶連 ',
    url:'/course?teacher=黃慶連 '
  },
  {
    title: '高電壓工程特論',
    url:'/course?course_name=高電壓工程特論'
  },
  
  {
    title: '王水進 ',
    url:'/course?teacher=王水進 '
  },
  {
    title: '功率半導體元件概論',
    url:'/course?course_name=功率半導體元件概論'
  },
  
  {
    title: '王英郎 ',
    url:'/course?teacher=王英郎 '
  },
  {
    title: '半導體及先進奈米化製程技術概論（二）',
    url:'/course?course_name=半導體及先進奈米化製程技術概論（二）'
  },
  
  {
    title: '彭洞清 ',
    url:'/course?teacher=彭洞清 '
  },
  {
    title: '奈米世代半導體製程概論',
    url:'/course?course_name=奈米世代半導體製程概論'
  },
  
  {
    title: '陳一浸 ',
    url:'/course?teacher=陳一浸 '
  },
  {
    title: '半導體元件,應用,和可靠度',
    url:'/course?course_name=半導體元件,應用,和可靠度'
  },
  
  {
    title: '莊文魁 ',
    url:'/course?teacher=莊文魁 '
  },
  {
    title: '光學導論',
    url:'/course?course_name=光學導論'
  },
  
  {
    title: '陳建瑞 ',
    url:'/course?teacher=陳建瑞 '
  },
  {
    title: '表面技術分析',
    url:'/course?course_name=表面技術分析'
  },
  
  {
    title: '高國興 ',
    url:'/course?teacher=高國興 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '高國興 ',
    url:'/course?teacher=高國興 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '黃金鼎*',
    url:'/course?teacher=黃金鼎*'
  },
  {
    title: '藥物發展實習（二）',
    url:'/course?course_name=藥物發展實習（二）'
  },
  
  {
    title: '陳炳焜 張俊彥 呂增宏 簡偉明 許桂森 沈孟儒*簡伯武 王憶卿 張雋曦 陳韻雯 姜學誠 ',
    url:'/course?teacher=陳炳焜 張俊彥 呂增宏 簡偉明 許桂森 沈孟儒*簡伯武 王憶卿 張雋曦 陳韻雯 姜學誠 '
  },
  {
    title: '生命科學書報討論（二）',
    url:'/course?course_name=生命科學書報討論（二）'
  },
  
  {
    title: '許桂森*',
    url:'/course?teacher=許桂森*'
  },
  {
    title: '中樞神經電生理學',
    url:'/course?course_name=中樞神經電生理學'
  },
  
  {
    title: '張雋曦*陳韻雯 ',
    url:'/course?teacher=張雋曦*陳韻雯 '
  },
  {
    title: '生物醫學研究技術與科學報告技巧',
    url:'/course?course_name=生物醫學研究技術與科學報告技巧'
  },
  
  {
    title: '陳韻雯*姜學誠 ',
    url:'/course?teacher=陳韻雯*姜學誠 '
  },
  {
    title: '營養基因體學',
    url:'/course?course_name=營養基因體學'
  },
  
  {
    title: '呂增宏 簡偉明*許桂森 沈孟儒 張雋曦 陳韻雯 ',
    url:'/course?teacher=呂增宏 簡偉明*許桂森 沈孟儒 張雋曦 陳韻雯 '
  },
  {
    title: '藥理學特論',
    url:'/course?course_name=藥理學特論'
  },
  
  {
    title: '洪建中 王育民 陳炳焜 林鼎晏 洪良宜 呂增宏 簡偉明 許桂森 沈孟儒 簡伯武 王憶卿 張雋曦 陳韻雯*姜學誠 ',
    url:'/course?teacher=洪建中 王育民 陳炳焜 林鼎晏 洪良宜 呂增宏 簡偉明 許桂森 沈孟儒 簡伯武 王憶卿 張雋曦 陳韻雯*姜學誠 '
  },
  {
    title: '藥理學專題討論（四）',
    url:'/course?course_name=藥理學專題討論（四）'
  },
  
  {
    title: '簡伯武 蕭雅心*',
    url:'/course?teacher=簡伯武 蕭雅心*'
  },
  {
    title: '失智與老化研究',
    url:'/course?course_name=失智與老化研究'
  },
  
  {
    title: '王憶卿*',
    url:'/course?teacher=王憶卿*'
  },
  {
    title: '分子癌生物獨立研究',
    url:'/course?course_name=分子癌生物獨立研究'
  },
  
  {
    title: '簡伯武*蕭雅心 ',
    url:'/course?teacher=簡伯武*蕭雅心 '
  },
  {
    title: '行為神經藥理學',
    url:'/course?course_name=行為神經藥理學'
  },
  
  {
    title: '呂增宏 簡偉明 許桂森 沈孟儒*簡伯武 王憶卿 張雋曦 陳韻雯 姜學誠 黃金鼎 ',
    url:'/course?teacher=呂增宏 簡偉明 許桂森 沈孟儒*簡伯武 王憶卿 張雋曦 陳韻雯 姜學誠 黃金鼎 '
  },
  {
    title: '實驗藥理學',
    url:'/course?course_name=實驗藥理學'
  },
  
  {
    title: '洪建中 王育民 陳炳焜 林鼎晏 洪良宜 呂增宏 簡偉明 許桂森 沈孟儒 簡伯武 王憶卿 張雋曦 陳韻雯*姜學誠 ',
    url:'/course?teacher=洪建中 王育民 陳炳焜 林鼎晏 洪良宜 呂增宏 簡偉明 許桂森 沈孟儒 簡伯武 王憶卿 張雋曦 陳韻雯*姜學誠 '
  },
  {
    title: '藥理學專題討論（二）',
    url:'/course?course_name=藥理學專題討論（二）'
  },
  
  {
    title: '郭乃文 ',
    url:'/course?teacher=郭乃文 '
  },
  {
    title: '高等臨床心理治療--以神經心理學走向之治療',
    url:'/course?course_name=高等臨床心理治療--以神經心理學走向之治療'
  },
  
  {
    title: '楊政達*',
    url:'/course?teacher=楊政達*'
  },
  {
    title: '健身運動與認知神經科學專題研究',
    url:'/course?course_name=健身運動與認知神經科學專題研究'
  },
  
  {
    title: '張瑩如 徐畢卿 顏妙芬 黃美智 許玉雲 王靜枝 陳靜敏 成戎珠 黃英修 洪菁霞 張哲豪 馬慧英 郭立杰 郭乃文 黃惠玲 陳彰惠 ',
    url:'/course?teacher=張瑩如 徐畢卿 顏妙芬 黃美智 許玉雲 王靜枝 陳靜敏 成戎珠 黃英修 洪菁霞 張哲豪 馬慧英 郭立杰 郭乃文 黃惠玲 陳彰惠 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '馬慧英*',
    url:'/course?teacher=馬慧英*'
  },
  {
    title: '高齡健康與照護',
    url:'/course?course_name=高齡健康與照護'
  },
  
  {
    title: '陳彰惠*',
    url:'/course?teacher=陳彰惠*'
  },
  {
    title: '教學理論與方法特論',
    url:'/course?course_name=教學理論與方法特論'
  },
  
  {
    title: '徐畢卿 柯乃熒 馮瑞鶯*王靜枝 陳靜敏 黃英修 張哲豪 馬慧英 ',
    url:'/course?teacher=徐畢卿 柯乃熒 馮瑞鶯*王靜枝 陳靜敏 黃英修 張哲豪 馬慧英 '
  },
  {
    title: '健康照護專題討論（四）',
    url:'/course?course_name=健康照護專題討論（四）'
  },
  
  {
    title: '徐畢卿 柯乃熒 王靜枝 陳靜敏 張哲豪 馬慧英 陳彰惠 ',
    url:'/course?teacher=徐畢卿 柯乃熒 王靜枝 陳靜敏 張哲豪 馬慧英 陳彰惠 '
  },
  {
    title: '獨立研究（四）',
    url:'/course?course_name=獨立研究（四）'
  },
  
  {
    title: '黃美智*簡偉明 ',
    url:'/course?teacher=黃美智*簡偉明 '
  },
  {
    title: '健康照護的倫理探討與實踐',
    url:'/course?course_name=健康照護的倫理探討與實踐'
  },
  
  {
    title: '黃美智*簡偉明 ',
    url:'/course?teacher=黃美智*簡偉明 '
  },
  {
    title: '健康照護的倫理探討與實踐',
    url:'/course?course_name=健康照護的倫理探討與實踐'
  },
  
  {
    title: '楊政達 馮瑞鶯 王靜枝 黃英修 高雅慧 陳彰惠*陳麗光 ',
    url:'/course?teacher=楊政達 馮瑞鶯 王靜枝 黃英修 高雅慧 陳彰惠*陳麗光 '
  },
  {
    title: '臨床研究設計（二）',
    url:'/course?course_name=臨床研究設計（二）'
  },
  
  {
    title: '林梅鳳 徐畢卿 黃美智 柯乃熒 馮瑞鶯*黃英修 郭乃文 ',
    url:'/course?teacher=林梅鳳 徐畢卿 黃美智 柯乃熒 馮瑞鶯*黃英修 郭乃文 '
  },
  {
    title: '健康照護專題討論（二）',
    url:'/course?course_name=健康照護專題討論（二）'
  },
  
  {
    title: '林梅鳳 徐畢卿 黃美智 柯乃熒 馮瑞鶯 陳靜敏 黃英修 郭乃文 ',
    url:'/course?teacher=林梅鳳 徐畢卿 黃美智 柯乃熒 馮瑞鶯 陳靜敏 黃英修 郭乃文 '
  },
  {
    title: '獨立研究（二）',
    url:'/course?course_name=獨立研究（二）'
  },
  
  {
    title: '謝旻甫 ',
    url:'/course?teacher=謝旻甫 '
  },
  {
    title: '電動機設計',
    url:'/course?course_name=電動機設計'
  },
  
  {
    title: '王　醴 ',
    url:'/course?teacher=王　醴 '
  },
  {
    title: '電力系統控制與穩定度',
    url:'/course?course_name=電力系統控制與穩定度'
  },
  
  {
    title: '林瑞禮 ',
    url:'/course?teacher=林瑞禮 '
  },
  {
    title: '共振式電能轉換器設計',
    url:'/course?course_name=共振式電能轉換器設計'
  },
  
  {
    title: '黃慶連 ',
    url:'/course?teacher=黃慶連 '
  },
  {
    title: '配電系統自動化',
    url:'/course?course_name=配電系統自動化'
  },
  
  {
    title: '楊慶隆 ',
    url:'/course?teacher=楊慶隆 '
  },
  {
    title: '電子電路系統設計',
    url:'/course?course_name=電子電路系統設計'
  },
  
  {
    title: '林瑞禮 ',
    url:'/course?teacher=林瑞禮 '
  },
  {
    title: '電源轉換系統分析',
    url:'/course?course_name=電源轉換系統分析'
  },
  
  {
    title: '李嘉猷 ',
    url:'/course?teacher=李嘉猷 '
  },
  {
    title: '電磁相容學',
    url:'/course?course_name=電磁相容學'
  },
  
  {
    title: '李嘉猷 ',
    url:'/course?teacher=李嘉猷 '
  },
  {
    title: '論文研討（二）',
    url:'/course?course_name=論文研討（二）'
  },
  
  {
    title: '莊智清 ',
    url:'/course?teacher=莊智清 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '楊宏澤*陳建富 ',
    url:'/course?teacher=楊宏澤*陳建富 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '莊智清 ',
    url:'/course?teacher=莊智清 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '林瑞禮*張簡樂仁 ',
    url:'/course?teacher=林瑞禮*張簡樂仁 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '董東璟 ',
    url:'/course?teacher=董東璟 '
  },
  {
    title: '海岸保護',
    url:'/course?course_name=海岸保護'
  },
  
  {
    title: '王毓正 ',
    url:'/course?teacher=王毓正 '
  },
  {
    title: '海事行政法',
    url:'/course?course_name=海事行政法'
  },
  
  {
    title: '陳怡凱 ',
    url:'/course?teacher=陳怡凱 '
  },
  {
    title: '國際公法',
    url:'/course?course_name=國際公法'
  },
  
  {
    title: '蔡志方 ',
    url:'/course?teacher=蔡志方 '
  },
  {
    title: '魚類養殖與捕魚之法律問題研究',
    url:'/course?course_name=魚類養殖與捕魚之法律問題研究'
  },
  
  {
    title: '陳陽益 ',
    url:'/course?teacher=陳陽益 '
  },
  {
    title: '高等波浪理論（一）',
    url:'/course?course_name=高等波浪理論（一）'
  },
  
  {
    title: '李兆芳 ',
    url:'/course?teacher=李兆芳 '
  },
  {
    title: '海洋工程',
    url:'/course?course_name=海洋工程'
  },
  
  {
    title: '張　懿 ',
    url:'/course?teacher=張　懿 '
  },
  {
    title: '海洋環境監測與管理',
    url:'/course?course_name=海洋環境監測與管理'
  },
  
  {
    title: '陳璋玲 ',
    url:'/course?teacher=陳璋玲 '
  },
  {
    title: '國際海洋資源策略規劃',
    url:'/course?course_name=國際海洋資源策略規劃'
  },
  
  {
    title: '莊士賢 ',
    url:'/course?teacher=莊士賢 '
  },
  {
    title: '海洋資訊分析與管理應用',
    url:'/course?course_name=海洋資訊分析與管理應用'
  },
  
  {
    title: '劉大綱 ',
    url:'/course?teacher=劉大綱 '
  },
  {
    title: '海洋保護區',
    url:'/course?course_name=海洋保護區'
  },
  
  {
    title: '陳璋玲 ',
    url:'/course?teacher=陳璋玲 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '莊士賢 ',
    url:'/course?teacher=莊士賢 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '劉大綱 ',
    url:'/course?teacher=劉大綱 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '張文綺*李瑞花 郭瑋君 邱啟洲 ',
    url:'/course?teacher=張文綺*李瑞花 郭瑋君 邱啟洲 '
  },
  {
    title: '書報討論（四）',
    url:'/course?course_name=書報討論（四）'
  },
  
  {
    title: '張文綺*李瑞花 郭瑋君 邱啟洲 ',
    url:'/course?teacher=張文綺*李瑞花 郭瑋君 邱啟洲 '
  },
  {
    title: '書報討論（二）',
    url:'/course?course_name=書報討論（二）'
  },
  
  {
    title: '陳文輝 張松彬 ',
    url:'/course?teacher=陳文輝 張松彬 '
  },
  {
    title: '作物育種與生物技術',
    url:'/course?course_name=作物育種與生物技術'
  },
  
  {
    title: '王浩文 洪健睿 黃玲惠 張純純 洪建中 林鼎晏 洪良宜*李瑞花 ',
    url:'/course?teacher=王浩文 洪健睿 黃玲惠 張純純 洪建中 林鼎晏 洪良宜*李瑞花 '
  },
  {
    title: '高等細胞生物學',
    url:'/course?course_name=高等細胞生物學'
  },
  
  {
    title: '張松彬 郭瑋君*',
    url:'/course?teacher=張松彬 郭瑋君*'
  },
  {
    title: '植物逆境生物學',
    url:'/course?course_name=植物逆境生物學'
  },
  
  {
    title: '張文綺*蔡文杰 邱啟洲 ',
    url:'/course?teacher=張文綺*蔡文杰 邱啟洲 '
  },
  {
    title: '實驗資料分析與統計專論',
    url:'/course?course_name=實驗資料分析與統計專論'
  },
  
  {
    title: '張文綺*蔡文杰 邱啟洲 ',
    url:'/course?teacher=張文綺*蔡文杰 邱啟洲 '
  },
  {
    title: '植物分子與細胞生物學',
    url:'/course?course_name=植物分子與細胞生物學'
  },
  
  {
    title: '李瑞花 ',
    url:'/course?teacher=李瑞花 '
  },
  {
    title: '植物生物科技',
    url:'/course?course_name=植物生物科技'
  },
  
  {
    title: '張文綺*李瑞花 郭瑋君 邱啟洲 ',
    url:'/course?teacher=張文綺*李瑞花 郭瑋君 邱啟洲 '
  },
  {
    title: '植物科學講座(四)',
    url:'/course?course_name=植物科學講座(四)'
  },
  
  {
    title: '張文綺*李瑞花 郭瑋君 邱啟洲 ',
    url:'/course?teacher=張文綺*李瑞花 郭瑋君 邱啟洲 '
  },
  {
    title: '植物科學講座(二)',
    url:'/course?course_name=植物科學講座(二)'
  },
  
  {
    title: '張文綺*李瑞花 郭瑋君 邱啟洲 ',
    url:'/course?teacher=張文綺*李瑞花 郭瑋君 邱啟洲 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '向克強 張博宇*',
    url:'/course?teacher=向克強 張博宇*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '向克強 張博宇*',
    url:'/course?teacher=向克強 張博宇*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '西村泰太郎*',
    url:'/course?teacher=西村泰太郎*'
  },
  {
    title: '混沌與非平衡統計力學',
    url:'/course?course_name=混沌與非平衡統計力學'
  },
  
  {
    title: '張博宇*',
    url:'/course?teacher=張博宇*'
  },
  {
    title: '電漿現象之應用',
    url:'/course?course_name=電漿現象之應用'
  },
  
  {
    title: '向克強*',
    url:'/course?teacher=向克強*'
  },
  {
    title: '高等電漿物理',
    url:'/course?course_name=高等電漿物理'
  },
  
  {
    title: '西村泰太郎 ',
    url:'/course?teacher=西村泰太郎 '
  },
  {
    title: '電動力學與電漿物理之數值模擬',
    url:'/course?course_name=電動力學與電漿物理之數值模擬'
  },
  
  {
    title: '陳炳志 ',
    url:'/course?teacher=陳炳志 '
  },
  {
    title: '數據處理與資料分析',
    url:'/course?course_name=數據處理與資料分析'
  },
  
  {
    title: '河森榮一郎*',
    url:'/course?teacher=河森榮一郎*'
  },
  {
    title: '電漿物理專題',
    url:'/course?course_name=電漿物理專題'
  },
  
  {
    title: '向克強 張博宇*',
    url:'/course?teacher=向克強 張博宇*'
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '向克強 張博宇*',
    url:'/course?teacher=向克強 張博宇*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '向克強 張博宇*',
    url:'/course?teacher=向克強 張博宇*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '郭保麟 陳昌熙 莊季瑛 吳梨華 蔣輯武*張南山 郭余民 ',
    url:'/course?teacher=郭保麟 陳昌熙 莊季瑛 吳梨華 蔣輯武*張南山 郭余民 '
  },
  {
    title: '老化研究特論',
    url:'/course?course_name=老化研究特論'
  },
  
  {
    title: '鄭宏祺*',
    url:'/course?teacher=鄭宏祺*'
  },
  {
    title: '癌症研究中之科學辯證',
    url:'/course?course_name=癌症研究中之科學辯證'
  },
  
  {
    title: '吳昭良*陳玉玲 ',
    url:'/course?teacher=吳昭良*陳玉玲 '
  },
  {
    title: '分子技術研討',
    url:'/course?course_name=分子技術研討'
  },
  
  {
    title: '陳昌熙*',
    url:'/course?teacher=陳昌熙*'
  },
  {
    title: '現代遺傳學',
    url:'/course?course_name=現代遺傳學'
  },
  
  {
    title: '羅玉枝*陳俊榮 莊偉哲*王淑鶯 吳尚蓉 ',
    url:'/course?teacher=羅玉枝*陳俊榮 莊偉哲*王淑鶯 吳尚蓉 '
  },
  {
    title: '結構生物學',
    url:'/course?course_name=結構生物學'
  },
  
  {
    title: '莊偉哲 張文粲 張明熙*鄭宏祺 王憶卿 蔡瑞真 周辰熹 蔡曜聲 許育祥 郭余民 ',
    url:'/course?teacher=莊偉哲 張文粲 張明熙*鄭宏祺 王憶卿 蔡瑞真 周辰熹 蔡曜聲 許育祥 郭余民 '
  },
  {
    title: '新藥研發',
    url:'/course?course_name=新藥研發'
  },
  
  {
    title: '張純純 傅子芳 張文粲*陳昌熙 楊尚訓 ',
    url:'/course?teacher=張純純 傅子芳 張文粲*陳昌熙 楊尚訓 '
  },
  {
    title: '發育生物學',
    url:'/course?course_name=發育生物學'
  },
  
  {
    title: '賴明德*鄭宏祺 黃柏憲 張雋曦 張志鵬 吳梨華 ',
    url:'/course?teacher=賴明德*鄭宏祺 黃柏憲 張雋曦 張志鵬 吳梨華 '
  },
  {
    title: '腫瘤生物學',
    url:'/course?course_name=腫瘤生物學'
  },
  
  {
    title: '張權發 陳毓宏 張文粲 張明熙*陳昌熙 黃柏憲 王憶卿 張雋曦 王淑鶯 蔡曜聲 許育祥 ',
    url:'/course?teacher=張權發 陳毓宏 張文粲 張明熙*陳昌熙 黃柏憲 王憶卿 張雋曦 王淑鶯 蔡曜聲 許育祥 '
  },
  {
    title: '應用分子生物學',
    url:'/course?course_name=應用分子生物學'
  },
  
  {
    title: '陳毓宏 莊偉哲 張文粲*張明熙 吳華林 賴明德 鄭宏祺 陳昌熙 黃柏憲 ',
    url:'/course?teacher=陳毓宏 莊偉哲 張文粲*張明熙 吳華林 賴明德 鄭宏祺 陳昌熙 黃柏憲 '
  },
  {
    title: '生物技術特論',
    url:'/course?course_name=生物技術特論'
  },
  
  {
    title: '吳昭良*',
    url:'/course?teacher=吳昭良*'
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '吳昭良*',
    url:'/course?teacher=吳昭良*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '吳昭良*',
    url:'/course?teacher=吳昭良*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '翁明宏 ',
    url:'/course?teacher=翁明宏 '
  },
  {
    title: '神經經濟學',
    url:'/course?course_name=神經經濟學'
  },
  
  {
    title: '翁明宏 ',
    url:'/course?teacher=翁明宏 '
  },
  {
    title: '專題研究',
    url:'/course?course_name=專題研究'
  },
  
  {
    title: '謝文真 ',
    url:'/course?teacher=謝文真 '
  },
  {
    title: '經濟發展與幸福經濟',
    url:'/course?course_name=經濟發展與幸福經濟'
  },
  
  {
    title: '許永河 ',
    url:'/course?teacher=許永河 '
  },
  {
    title: '高齡經濟分析',
    url:'/course?course_name=高齡經濟分析'
  },
  
  {
    title: '陳奕奇 ',
    url:'/course?teacher=陳奕奇 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '田維華 ',
    url:'/course?teacher=田維華 '
  },
  {
    title: '勞動經濟學',
    url:'/course?course_name=勞動經濟學'
  },
  
  {
    title: '蔡群立 ',
    url:'/course?teacher=蔡群立 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '林常青 ',
    url:'/course?teacher=林常青 '
  },
  {
    title: '計量經濟學（二）',
    url:'/course?course_name=計量經濟學（二）'
  },
  
  {
    title: '王富美 ',
    url:'/course?teacher=王富美 '
  },
  {
    title: '總體經濟學（二）',
    url:'/course?course_name=總體經濟學（二）'
  },
  
  {
    title: '胡政成 ',
    url:'/course?teacher=胡政成 '
  },
  {
    title: '個體經濟學（二）',
    url:'/course?course_name=個體經濟學（二）'
  },
  
  {
    title: '張高碩 ',
    url:'/course?teacher=張高碩 '
  },
  {
    title: '微/奈米元件之半導體材料製程及分析',
    url:'/course?course_name=微/奈米元件之半導體材料製程及分析'
  },
  
  {
    title: '王穎裕 ',
    url:'/course?teacher=王穎裕 '
  },
  {
    title: '超導理論',
    url:'/course?course_name=超導理論'
  },
  
  {
    title: '謝馬利歐 ',
    url:'/course?teacher=謝馬利歐 '
  },
  {
    title: '高等固態物理（二）',
    url:'/course?course_name=高等固態物理（二）'
  },
  
  {
    title: '林士剛 ',
    url:'/course?teacher=林士剛 '
  },
  {
    title: '固態熱力學',
    url:'/course?course_name=固態熱力學'
  },
  
  {
    title: '謝馬利歐 ',
    url:'/course?teacher=謝馬利歐 '
  },
  {
    title: '材料科技英文寫作',
    url:'/course?course_name=材料科技英文寫作'
  },
  
  {
    title: '張高碩 ',
    url:'/course?teacher=張高碩 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '張高碩 ',
    url:'/course?teacher=張高碩 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '鍾賢龍 ',
    url:'/course?teacher=鍾賢龍 '
  },
  {
    title: '奈米材料與合成科技',
    url:'/course?course_name=奈米材料與合成科技'
  },
  
  {
    title: '陳昭宇 ',
    url:'/course?teacher=陳昭宇 '
  },
  {
    title: '太陽能光電化學',
    url:'/course?course_name=太陽能光電化學'
  },
  
  {
    title: '林達昌 ',
    url:'/course?teacher=林達昌 '
  },
  {
    title: '微量化學分析',
    url:'/course?course_name=微量化學分析'
  },
  
  {
    title: '侯文哲 ',
    url:'/course?teacher=侯文哲 '
  },
  {
    title: '環工化學原理',
    url:'/course?course_name=環工化學原理'
  },
  
  {
    title: '呂國彰 ',
    url:'/course?teacher=呂國彰 '
  },
  {
    title: '應用材料科學（二）',
    url:'/course?course_name=應用材料科學（二）'
  },
  
  {
    title: '鄒文莉 ',
    url:'/course?teacher=鄒文莉 '
  },
  {
    title: '英語教學精選主題',
    url:'/course?course_name=英語教學精選主題'
  },
  
  {
    title: '陳世威 ',
    url:'/course?teacher=陳世威 '
  },
  {
    title: '應用心理語言學專題：讀寫能力與字彙習得',
    url:'/course?course_name=應用心理語言學專題：讀寫能力與字彙習得'
  },
  
  {
    title: '謝菁玉 ',
    url:'/course?teacher=謝菁玉 '
  },
  {
    title: '認知語言學：主題式詞彙探索',
    url:'/course?course_name=認知語言學：主題式詞彙探索'
  },
  
  {
    title: '陳麗美 ',
    url:'/course?teacher=陳麗美 '
  },
  {
    title: '兒童早期語言學習專題',
    url:'/course?course_name=兒童早期語言學習專題'
  },
  
  {
    title: '羅勤正 ',
    url:'/course?teacher=羅勤正 '
  },
  {
    title: '音韻學專題：優選論',
    url:'/course?course_name=音韻學專題：優選論'
  },
  
  {
    title: '李惠琦 ',
    url:'/course?teacher=李惠琦 '
  },
  {
    title: '語法學專題：英漢語法比較',
    url:'/course?course_name=語法學專題：英漢語法比較'
  },
  
  {
    title: '王穎 ',
    url:'/course?teacher=王穎 '
  },
  {
    title: '當代英語文學與人權論述',
    url:'/course?course_name=當代英語文學與人權論述'
  },
  
  {
    title: '賴俊雄 ',
    url:'/course?teacher=賴俊雄 '
  },
  {
    title: '文學理論專題：傅柯',
    url:'/course?course_name=文學理論專題：傅柯'
  },
  
  {
    title: '游素玲 ',
    url:'/course?teacher=游素玲 '
  },
  {
    title: '第三波女性主義',
    url:'/course?course_name=第三波女性主義'
  },
  
  {
    title: '金傑夫 ',
    url:'/course?teacher=金傑夫 '
  },
  {
    title: '二十世紀前美國小說',
    url:'/course?course_name=二十世紀前美國小說'
  },
  
  {
    title: '石苓 ',
    url:'/course?teacher=石苓 '
  },
  {
    title: '中世紀末日想像專題：天堂與地獄的視界',
    url:'/course?course_name=中世紀末日想像專題：天堂與地獄的視界'
  },
  
  {
    title: '林明澤 ',
    url:'/course?teacher=林明澤 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '李宏志 劉裕宏 周庭楷 楊朝旭 顏盟峯 林軒竹 黃華瑋*',
    url:'/course?teacher=李宏志 劉裕宏 周庭楷 楊朝旭 顏盟峯 林軒竹 黃華瑋*'
  },
  {
    title: '財務與會計專題',
    url:'/course?course_name=財務與會計專題'
  },
  
  {
    title: '蔡惠婷 ',
    url:'/course?teacher=蔡惠婷 '
  },
  {
    title: '行銷策略規劃',
    url:'/course?course_name=行銷策略規劃'
  },
  
  {
    title: '吳萬益 ',
    url:'/course?teacher=吳萬益 '
  },
  {
    title: '企業研究方法',
    url:'/course?course_name=企業研究方法'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '中小企業經營與管理',
    url:'/course?course_name=中小企業經營與管理'
  },
  
  {
    title: '周信輝 ',
    url:'/course?teacher=周信輝 '
  },
  {
    title: '企業經營與診斷',
    url:'/course?course_name=企業經營與診斷'
  },
  
  {
    title: '林麗娟 ',
    url:'/course?teacher=林麗娟 '
  },
  {
    title: '運動減壓與健康體適能管理',
    url:'/course?course_name=運動減壓與健康體適能管理'
  },
  
  {
    title: '呂執中 ',
    url:'/course?teacher=呂執中 '
  },
  {
    title: '經營品質個案研討',
    url:'/course?course_name=經營品質個案研討'
  },
  
  {
    title: '周信輝 ',
    url:'/course?teacher=周信輝 '
  },
  {
    title: '質性研究方法',
    url:'/course?course_name=質性研究方法'
  },
  
  {
    title: '蔡東峻 ',
    url:'/course?teacher=蔡東峻 '
  },
  {
    title: '行銷管理',
    url:'/course?course_name=行銷管理'
  },
  
  {
    title: '史習安 ',
    url:'/course?teacher=史習安 '
  },
  {
    title: '人力資源管理',
    url:'/course?course_name=人力資源管理'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '孫孝芳 王憲威 張南山 朱俊憲*司君一 ',
    url:'/course?teacher=孫孝芳 王憲威 張南山 朱俊憲*司君一 '
  },
  {
    title: '神經免疫學',
    url:'/course?course_name=神經免疫學'
  },
  
  {
    title: '孫孝芳 ',
    url:'/course?teacher=孫孝芳 '
  },
  {
    title: '遺傳學特論（二）',
    url:'/course?course_name=遺傳學特論（二）'
  },
  
  {
    title: '郭保麟 陳昌熙 莊季瑛 吳梨華 蔣輯武*張南山 郭余民 ',
    url:'/course?teacher=郭保麟 陳昌熙 莊季瑛 吳梨華 蔣輯武*張南山 郭余民 '
  },
  {
    title: '老化研究特論',
    url:'/course?course_name=老化研究特論'
  },
  
  {
    title: '孫孝芳 王憲威*鄧景浩 橋本昌征 ',
    url:'/course?teacher=孫孝芳 王憲威*鄧景浩 橋本昌征 '
  },
  {
    title: '分子醫學特論（二）',
    url:'/course?course_name=分子醫學特論（二）'
  },
  
  {
    title: '賴吾為 陳彩雲 辛致煒 李政昌 陳海雯 蘇五洲 姚維仁 顏家瑞 廖寶琦 張南山*陳玉玲 ',
    url:'/course?teacher=賴吾為 陳彩雲 辛致煒 李政昌 陳海雯 蘇五洲 姚維仁 顏家瑞 廖寶琦 張南山*陳玉玲 '
  },
  {
    title: '癌症醫學',
    url:'/course?course_name=癌症醫學'
  },
  
  {
    title: '黃溫雅 呂政展 李政昌 何中良*蘇五洲 周楠華 賴明德 沈孟儒 謝達斌 ',
    url:'/course?teacher=黃溫雅 呂政展 李政昌 何中良*蘇五洲 周楠華 賴明德 沈孟儒 謝達斌 '
  },
  {
    title: '癌症分子病理學',
    url:'/course?course_name=癌症分子病理學'
  },
  
  {
    title: '鄧景浩*張南山 ',
    url:'/course?teacher=鄧景浩*張南山 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '周楠華 張俊彥 羅傳堯 鄭宏祺 張雅雯 沈延盛 吳梨華*吳佳慶 ',
    url:'/course?teacher=周楠華 張俊彥 羅傳堯 鄭宏祺 張雅雯 沈延盛 吳梨華*吳佳慶 '
  },
  {
    title: '血管新生學',
    url:'/course?course_name=血管新生學'
  },
  
  {
    title: '鄧景浩*張南山 ',
    url:'/course?teacher=鄧景浩*張南山 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '鄧景浩*張南山 ',
    url:'/course?teacher=鄧景浩*張南山 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '張玲慧*',
    url:'/course?teacher=張玲慧*'
  },
  {
    title: '長照與生活功能促進特論',
    url:'/course?course_name=長照與生活功能促進特論'
  },
  
  {
    title: '張雁晴*',
    url:'/course?teacher=張雁晴*'
  },
  {
    title: '教學實習（二）',
    url:'/course?course_name=教學實習（二）'
  },
  
  {
    title: '黃雅淑 陳官琳 黃百川*',
    url:'/course?teacher=黃雅淑 陳官琳 黃百川*'
  },
  {
    title: '健康照護實證特論',
    url:'/course?course_name=健康照護實證特論'
  },
  
  {
    title: '蔡佩倫 張哲豪 黃雅淑 林玲伊 張玲慧 陳官琳*',
    url:'/course?teacher=蔡佩倫 張哲豪 黃雅淑 林玲伊 張玲慧 陳官琳*'
  },
  {
    title: '獨立研究（二）',
    url:'/course?course_name=獨立研究（二）'
  },
  
  {
    title: '陳官琳*',
    url:'/course?teacher=陳官琳*'
  },
  {
    title: '復健科學學術寫作',
    url:'/course?course_name=復健科學學術寫作'
  },
  
  {
    title: '馬慧英*張玲慧 陳官琳 黃百川 ',
    url:'/course?teacher=馬慧英*張玲慧 陳官琳 黃百川 '
  },
  {
    title: '基礎研究方法學',
    url:'/course?course_name=基礎研究方法學'
  },
  
  {
    title: '蔡佩倫 張哲豪 黃雅淑 汪翠瀅 林玲伊*馬慧英 張玲慧 陳官琳 黃百川 張雁晴 ',
    url:'/course?teacher=蔡佩倫 張哲豪 黃雅淑 汪翠瀅 林玲伊*馬慧英 張玲慧 陳官琳 黃百川 張雁晴 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '蔡佩倫 張哲豪 黃雅淑 汪翠瀅 林玲伊*馬慧英 張玲慧 陳官琳 黃百川 張雁晴 ',
    url:'/course?teacher=蔡佩倫 張哲豪 黃雅淑 汪翠瀅 林玲伊*馬慧英 張玲慧 陳官琳 黃百川 張雁晴 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '李政德 ',
    url:'/course?teacher=李政德 '
  },
  {
    title: '社會與資訊網路分析',
    url:'/course?course_name=社會與資訊網路分析'
  },
  
  {
    title: '李國榮 ',
    url:'/course?teacher=李國榮 '
  },
  {
    title: '貝氏分析',
    url:'/course?course_name=貝氏分析'
  },
  
  {
    title: '林良靖 ',
    url:'/course?teacher=林良靖 '
  },
  {
    title: '高等統計推論（二）',
    url:'/course?course_name=高等統計推論（二）'
  },
  
  {
    title: '蘇佩芳 ',
    url:'/course?teacher=蘇佩芳 '
  },
  {
    title: '高等機率論',
    url:'/course?course_name=高等機率論'
  },
  
  {
    title: '鄭順林 ',
    url:'/course?teacher=鄭順林 '
  },
  {
    title: '可靠度分析',
    url:'/course?course_name=可靠度分析'
  },
  
  {
    title: '潘浙楠 ',
    url:'/course?teacher=潘浙楠 '
  },
  {
    title: '品質管理',
    url:'/course?course_name=品質管理'
  },
  
  {
    title: '李俊毅 ',
    url:'/course?teacher=李俊毅 '
  },
  {
    title: '線性模式',
    url:'/course?course_name=線性模式'
  },
  
  {
    title: '趙昌泰 ',
    url:'/course?teacher=趙昌泰 '
  },
  {
    title: '數理統計（二）',
    url:'/course?course_name=數理統計（二）'
  },
  
  {
    title: '馬瀰嘉 ',
    url:'/course?teacher=馬瀰嘉 '
  },
  {
    title: '統計諮詢',
    url:'/course?course_name=統計諮詢'
  },
  
  {
    title: '張欣民 ',
    url:'/course?teacher=張欣民 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '張欣民 ',
    url:'/course?teacher=張欣民 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '張欣民 ',
    url:'/course?teacher=張欣民 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '謝奇璋*',
    url:'/course?teacher=謝奇璋*'
  },
  {
    title: '神經影像技術',
    url:'/course?course_name=神經影像技術'
  },
  
  {
    title: '呂佩融 ',
    url:'/course?teacher=呂佩融 '
  },
  {
    title: '遺傳性與退化性神經疾病-從醫生角度出發',
    url:'/course?course_name=遺傳性與退化性神經疾病-從醫生角度出發'
  },
  
  {
    title: '蔡坤哲*',
    url:'/course?teacher=蔡坤哲*'
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '蔡坤哲*',
    url:'/course?teacher=蔡坤哲*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '謝奇璋*',
    url:'/course?teacher=謝奇璋*'
  },
  {
    title: '神經科學論文的寫作與表達',
    url:'/course?course_name=神經科學論文的寫作與表達'
  },
  
  {
    title: '蔡坤哲*',
    url:'/course?teacher=蔡坤哲*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '蔡坤哲*',
    url:'/course?teacher=蔡坤哲*'
  },
  {
    title: '實驗室輪習（一）',
    url:'/course?course_name=實驗室輪習（一）'
  },
  
  {
    title: '呂佩融*',
    url:'/course?teacher=呂佩融*'
  },
  {
    title: '跨領域神經科學講座（二）',
    url:'/course?course_name=跨領域神經科學講座（二）'
  },
  
  {
    title: '劉益昌 ',
    url:'/course?teacher=劉益昌 '
  },
  {
    title: '臺灣考古學專題討論',
    url:'/course?course_name=臺灣考古學專題討論'
  },
  
  {
    title: '鍾國風 劉益昌*趙金勇 ',
    url:'/course?teacher=鍾國風 劉益昌*趙金勇 '
  },
  {
    title: '論文研究計畫進階討論',
    url:'/course?course_name=論文研究計畫進階討論'
  },
  
  {
    title: '鍾國風*劉益昌 趙金勇 ',
    url:'/course?teacher=鍾國風*劉益昌 趙金勇 '
  },
  {
    title: '歷史考古學',
    url:'/course?course_name=歷史考古學'
  },
  
  {
    title: '鍾國風 ',
    url:'/course?teacher=鍾國風 '
  },
  {
    title: '考古學與文化資產',
    url:'/course?course_name=考古學與文化資產'
  },
  
  {
    title: '鍾國風 ',
    url:'/course?teacher=鍾國風 '
  },
  {
    title: '考古學田野方法與實習（二）',
    url:'/course?course_name=考古學田野方法與實習（二）'
  },
  
  {
    title: '鍾國風 ',
    url:'/course?teacher=鍾國風 '
  },
  {
    title: '考古學田野方法與實習（二）',
    url:'/course?course_name=考古學田野方法與實習（二）'
  },
  
  {
    title: '趙金勇 ',
    url:'/course?teacher=趙金勇 '
  },
  {
    title: '考古學理論方法專題',
    url:'/course?course_name=考古學理論方法專題'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '環境考古學',
    url:'/course?course_name=環境考古學'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '東南亞考古學',
    url:'/course?course_name=東南亞考古學'
  },
  
  {
    title: '卓瓊鈺 ',
    url:'/course?teacher=卓瓊鈺 '
  },
  {
    title: '老人物理治療評估學',
    url:'/course?course_name=老人物理治療評估學'
  },
  
  {
    title: '蔡一如 ',
    url:'/course?teacher=蔡一如 '
  },
  {
    title: '骨科物理治療臨床實習與研究（二）',
    url:'/course?course_name=骨科物理治療臨床實習與研究（二）'
  },
  
  {
    title: '蔡一如 ',
    url:'/course?teacher=蔡一如 '
  },
  {
    title: '骨科物理治療臨床實習與研究（二）',
    url:'/course?course_name=骨科物理治療臨床實習與研究（二）'
  },
  
  {
    title: '成戎珠 ',
    url:'/course?teacher=成戎珠 '
  },
  {
    title: '小兒物理治療專題',
    url:'/course?course_name=小兒物理治療專題'
  },
  
  {
    title: '卓瓊鈺 ',
    url:'/course?teacher=卓瓊鈺 '
  },
  {
    title: '神經物理治療專題研究',
    url:'/course?course_name=神經物理治療專題研究'
  },
  
  {
    title: '林桑伊*蔡一如 ',
    url:'/course?teacher=林桑伊*蔡一如 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '陳文玲 卓瓊鈺 林桑伊 成戎珠 楊政峰 黃英修 洪菁霞 徐碧真 蔡一如 李佩紜 蔡昆霖 ',
    url:'/course?teacher=陳文玲 卓瓊鈺 林桑伊 成戎珠 楊政峰 黃英修 洪菁霞 徐碧真 蔡一如 李佩紜 蔡昆霖 '
  },
  {
    title: '教學實習',
    url:'/course?course_name=教學實習'
  },
  
  {
    title: '林桑伊*林呈鳳 ',
    url:'/course?teacher=林桑伊*林呈鳳 '
  },
  {
    title: '物理治療專題討論（四）',
    url:'/course?course_name=物理治療專題討論（四）'
  },
  
  {
    title: '卓瓊鈺 林桑伊*成戎珠 黃英修 洪菁霞 林呈鳳 蔡一如 李佩紜 蔡昆霖 ',
    url:'/course?teacher=卓瓊鈺 林桑伊*成戎珠 黃英修 洪菁霞 林呈鳳 蔡一如 李佩紜 蔡昆霖 '
  },
  {
    title: '物理治療專題討論（二）',
    url:'/course?course_name=物理治療專題討論（二）'
  },
  
  {
    title: '蔡東峻 ',
    url:'/course?teacher=蔡東峻 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '林珮珺 戴佐敏 胡守任 廖俊雄*鄭永祥 陳勁甫 胡大瀛 張有恒 黃國平 張瀞之 黃光渠 林東盈 李威勳 孫雅彥 黃郁雯 沈宗緯 林佐鼎 蔡東峻 ',
    url:'/course?teacher=林珮珺 戴佐敏 胡守任 廖俊雄*鄭永祥 陳勁甫 胡大瀛 張有恒 黃國平 張瀞之 黃光渠 林東盈 李威勳 孫雅彥 黃郁雯 沈宗緯 林佐鼎 蔡東峻 '
  },
  {
    title: '教學實習',
    url:'/course?course_name=教學實習'
  },
  
  {
    title: '黃光渠 ',
    url:'/course?teacher=黃光渠 '
  },
  {
    title: '物聯網應用與安全',
    url:'/course?course_name=物聯網應用與安全'
  },
  
  {
    title: '蔡東峻 ',
    url:'/course?teacher=蔡東峻 '
  },
  {
    title: '服務業行銷策略',
    url:'/course?course_name=服務業行銷策略'
  },
  
  {
    title: '黃郁雯 ',
    url:'/course?teacher=黃郁雯 '
  },
  {
    title: '電信政策與法規',
    url:'/course?course_name=電信政策與法規'
  },
  
  {
    title: '蔡東峻 ',
    url:'/course?teacher=蔡東峻 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '黃郁雯 ',
    url:'/course?teacher=黃郁雯 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '王大中 ',
    url:'/course?teacher=王大中 '
  },
  {
    title: '多變量分析理論與應用',
    url:'/course?course_name=多變量分析理論與應用'
  },
  
  {
    title: '何慶生 ',
    url:'/course?teacher=何慶生 '
  },
  {
    title: '飛航安全管理',
    url:'/course?course_name=飛航安全管理'
  },
  
  {
    title: '李萬里 ',
    url:'/course?teacher=李萬里 '
  },
  {
    title: '航空器適航標準',
    url:'/course?course_name=航空器適航標準'
  },
  
  {
    title: '王　宏 ',
    url:'/course?teacher=王　宏 '
  },
  {
    title: '民航維修專題',
    url:'/course?course_name=民航維修專題'
  },
  
  {
    title: '王大中 ',
    url:'/course?teacher=王大中 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '王大中 ',
    url:'/course?teacher=王大中 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '王大中 ',
    url:'/course?teacher=王大中 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '詹劭勳 ',
    url:'/course?teacher=詹劭勳 '
  },
  {
    title: '教學實習',
    url:'/course?course_name=教學實習'
  },
  
  {
    title: '呂宗學 胡淑貞 王亮懿 王榮德 莊佳蓉 簡玉雯*',
    url:'/course?teacher=呂宗學 胡淑貞 王亮懿 王榮德 莊佳蓉 簡玉雯*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '呂宗學 胡淑貞 王亮懿 王榮德 莊佳蓉 簡玉雯*',
    url:'/course?teacher=呂宗學 胡淑貞 王亮懿 王榮德 莊佳蓉 簡玉雯*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '蔡朋枝 ',
    url:'/course?teacher=蔡朋枝 '
  },
  {
    title: '環境與職業衛生個案討論',
    url:'/course?course_name=環境與職業衛生個案討論'
  },
  
  {
    title: '古鯉榕 ',
    url:'/course?teacher=古鯉榕 '
  },
  {
    title: '衛生政策理論與實務',
    url:'/course?course_name=衛生政策理論與實務'
  },
  
  {
    title: '劉明毅 ',
    url:'/course?teacher=劉明毅 '
  },
  {
    title: '環境毒物學',
    url:'/course?course_name=環境毒物學'
  },
  
  {
    title: '郭浩然 ',
    url:'/course?teacher=郭浩然 '
  },
  {
    title: '環境與職業衛生',
    url:'/course?course_name=環境與職業衛生'
  },
  
  {
    title: '盧豐華 ',
    url:'/course?teacher=盧豐華 '
  },
  {
    title: '老年學概論',
    url:'/course?course_name=老年學概論'
  },
  
  {
    title: '簡玉雯 ',
    url:'/course?teacher=簡玉雯 '
  },
  {
    title: '傳染病流行病學',
    url:'/course?course_name=傳染病流行病學'
  },
  
  {
    title: '王榮德 ',
    url:'/course?teacher=王榮德 '
  },
  {
    title: '公共衛生倫理',
    url:'/course?course_name=公共衛生倫理'
  },
  
  {
    title: '陳佳彬*施德玉*',
    url:'/course?teacher=陳佳彬*施德玉*'
  },
  {
    title: '戲劇田野理論與實務專題研究',
    url:'/course?course_name=戲劇田野理論與實務專題研究'
  },
  
  {
    title: '吳奕芳*陳佳彬*施德玉*',
    url:'/course?teacher=吳奕芳*陳佳彬*施德玉*'
  },
  {
    title: '美學',
    url:'/course?course_name=美學'
  },
  
  {
    title: '吳奕芳*',
    url:'/course?teacher=吳奕芳*'
  },
  {
    title: '視覺藝術研究法',
    url:'/course?course_name=視覺藝術研究法'
  },
  
  {
    title: '吳奕芳*王雅倫*',
    url:'/course?teacher=吳奕芳*王雅倫*'
  },
  {
    title: '視覺展覽空間研究與實踐',
    url:'/course?course_name=視覺展覽空間研究與實踐'
  },
  
  {
    title: '朱芳慧*施德玉*',
    url:'/course?teacher=朱芳慧*施德玉*'
  },
  {
    title: '臺灣新編戲曲專題研究',
    url:'/course?course_name=臺灣新編戲曲專題研究'
  },
  
  {
    title: '施德玉*',
    url:'/course?teacher=施德玉*'
  },
  {
    title: '音樂學研究法',
    url:'/course?course_name=音樂學研究法'
  },
  
  {
    title: '王雅倫*',
    url:'/course?teacher=王雅倫*'
  },
  {
    title: '影像美學研究',
    url:'/course?course_name=影像美學研究'
  },
  
  {
    title: '廖淑芳*朱芳慧*李欣怡*',
    url:'/course?teacher=廖淑芳*朱芳慧*李欣怡*'
  },
  {
    title: '跨文化劇場評論',
    url:'/course?course_name=跨文化劇場評論'
  },
  
  {
    title: '曾瓊慧 ',
    url:'/course?teacher=曾瓊慧 '
  },
  {
    title: '策略聯盟',
    url:'/course?course_name=策略聯盟'
  },
  
  {
    title: '陳芃婷 ',
    url:'/course?teacher=陳芃婷 '
  },
  {
    title: '科技創業與投資管理',
    url:'/course?course_name=科技創業與投資管理'
  },
  
  {
    title: '曾瓊慧 ',
    url:'/course?teacher=曾瓊慧 '
  },
  {
    title: '國際企業理論',
    url:'/course?course_name=國際企業理論'
  },
  
  {
    title: '張紹基*',
    url:'/course?teacher=張紹基*'
  },
  {
    title: '企業管理個案探討',
    url:'/course?course_name=企業管理個案探討'
  },
  
  {
    title: '張紹基 ',
    url:'/course?teacher=張紹基 '
  },
  {
    title: '國際財務管理專題研討',
    url:'/course?course_name=國際財務管理專題研討'
  },
  
  {
    title: '江明憲 ',
    url:'/course?teacher=江明憲 '
  },
  {
    title: '國際投資理論',
    url:'/course?course_name=國際投資理論'
  },
  
  {
    title: '史習安 ',
    url:'/course?teacher=史習安 '
  },
  {
    title: '國際人力資源管理',
    url:'/course?course_name=國際人力資源管理'
  },
  
  {
    title: '張權發 ',
    url:'/course?teacher=張權發 '
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '黃溫雅 ',
    url:'/course?teacher=黃溫雅 '
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '蔡佩珍 ',
    url:'/course?teacher=蔡佩珍 '
  },
  {
    title: '實驗室教學實習（四）',
    url:'/course?course_name=實驗室教學實習（四）'
  },
  
  {
    title: '黃溫雅*',
    url:'/course?teacher=黃溫雅*'
  },
  {
    title: '核酸損害修復與疾病',
    url:'/course?course_name=核酸損害修復與疾病'
  },
  
  {
    title: '張權發 ',
    url:'/course?teacher=張權發 '
  },
  {
    title: '儀器分析',
    url:'/course?course_name=儀器分析'
  },
  
  {
    title: '蔡佩珍 ',
    url:'/course?teacher=蔡佩珍 '
  },
  {
    title: '實驗室教學實習（二）',
    url:'/course?course_name=實驗室教學實習（二）'
  },
  
  {
    title: '傅子芳 陳呈堯 ',
    url:'/course?teacher=傅子芳 陳呈堯 '
  },
  {
    title: '實驗診斷學',
    url:'/course?course_name=實驗診斷學'
  },
  
  {
    title: '陳呈堯 ',
    url:'/course?teacher=陳呈堯 '
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '陳明惠 ',
    url:'/course?teacher=陳明惠 '
  },
  {
    title: '當代展覽策劃：理論與實踐',
    url:'/course?course_name=當代展覽策劃：理論與實踐'
  },
  
  {
    title: '王仰高*',
    url:'/course?teacher=王仰高*'
  },
  {
    title: '專題討論',
    url:'/course?course_name=專題討論'
  },
  
  {
    title: '郭余民 黃步敏*吳佳慶 司君一 許鍾瑜 ',
    url:'/course?teacher=郭余民 黃步敏*吳佳慶 司君一 許鍾瑜 '
  },
  {
    title: '神經解剖學特論',
    url:'/course?course_name=神經解剖學特論'
  },
  
  {
    title: '郭余民 黃步敏 江美治 莫凡毅 吳佳慶 司君一 許鍾瑜 王家義 王仰高*',
    url:'/course?teacher=郭余民 黃步敏 江美治 莫凡毅 吳佳慶 司君一 許鍾瑜 王家義 王仰高*'
  },
  {
    title: '專題討論（四）',
    url:'/course?course_name=專題討論（四）'
  },
  
  {
    title: '郭余民 黃步敏 江美治 莫凡毅 吳佳慶 司君一 許鍾瑜 王家義 王仰高*',
    url:'/course?teacher=郭余民 黃步敏 江美治 莫凡毅 吳佳慶 司君一 許鍾瑜 王家義 王仰高*'
  },
  {
    title: '專題討論（二）',
    url:'/course?course_name=專題討論（二）'
  },
  
  {
    title: '郭余民 黃步敏 江美治 莫凡毅 吳佳慶*王家義 王仰高 ',
    url:'/course?teacher=郭余民 黃步敏 江美治 莫凡毅 吳佳慶*王家義 王仰高 '
  },
  {
    title: '細胞生物學',
    url:'/course?course_name=細胞生物學'
  },
  
  {
    title: '戴政祺 ',
    url:'/course?teacher=戴政祺 '
  },
  {
    title: '生物電子系統',
    url:'/course?course_name=生物電子系統'
  },
  
  {
    title: '黃慶連 ',
    url:'/course?teacher=黃慶連 '
  },
  {
    title: '配電系統自動化',
    url:'/course?course_name=配電系統自動化'
  },
  
  {
    title: '謝明得 ',
    url:'/course?teacher=謝明得 '
  },
  {
    title: '專題研討（四）',
    url:'/course?course_name=專題研討（四）'
  },
  
  {
    title: '賴明德 ',
    url:'/course?teacher=賴明德 '
  },
  {
    title: '服務學習（二）',
    url:'/course?course_name=服務學習（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '體育（二）',
    url:'/course?course_name=體育（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '英文（含口語訓練）（二）',
    url:'/course?course_name=英文（含口語訓練）（二）'
  },
  
  {
    title: '未定 ',
    url:'/course?teacher=未定 '
  },
  {
    title: '基礎國文（二）',
    url:'/course?course_name=基礎國文（二）'
  },
  
  {
    title: '梁永成 ',
    url:'/course?teacher=梁永成 '
  },
  {
    title: '普通物理學（二）',
    url:'/course?course_name=普通物理學（二）'
  },
  
  {
    title: '桂椿雄 ',
    url:'/course?teacher=桂椿雄 '
  },
  {
    title: '普通化學（二）',
    url:'/course?course_name=普通化學（二）'
  },
  
  {
    title: '陳嘉元*王明習 陳永裕 賴維祥 郭榮富 ',
    url:'/course?teacher=陳嘉元*王明習 陳永裕 賴維祥 郭榮富 '
  },
  {
    title: '機電創新實作（一）',
    url:'/course?course_name=機電創新實作（一）'
  },
  
  {
    title: '陳嘉元*王明習 陳永裕 賴維祥 郭榮富 ',
    url:'/course?teacher=陳嘉元*王明習 陳永裕 賴維祥 郭榮富 '
  },
  {
    title: '機電創新實作（一）',
    url:'/course?course_name=機電創新實作（一）'
  },
  
  {
    title: '陳明輝 ',
    url:'/course?teacher=陳明輝 '
  },
  {
    title: 'JAVA 程式設計（一）',
    url:'/course?course_name=JAVA 程式設計（一）'
  },
  
  {
    title: '陳明輝 ',
    url:'/course?teacher=陳明輝 '
  },
  {
    title: 'JAVA 程式設計（一）',
    url:'/course?course_name=JAVA 程式設計（一）'
  },
  
];