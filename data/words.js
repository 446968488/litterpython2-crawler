// 打字练习词库（由课程术语自动汇总）。
window.WORD_LIST = [
 {
  "zh": "爬虫",
  "en": "crawler"
 },
 {
  "en": "REQUEST",
  "zh": "请求：爬虫发给服务器的\"我要这个页面\"的消息",
  "pron": "rɪˈkwest"
 },
 {
  "en": "PARSE",
  "zh": "解析：从原始文本里把想要的结构化信息抠出来",
  "pron": "pɑːrs"
 },
 {
  "en": "API",
  "zh": "接口：网站用来返回结构化数据（常是 JSON）的网址"
 },
 {
  "en": "DASHBOARD",
  "zh": "看板：把多个数据集中展示的页面/面板"
 },
 {
  "en": "BATCH",
  "zh": "批量：一次性对一堆目标做同样操作"
 },
 {
  "en": "ROBOTS",
  "zh": "robots.txt：站点根的爬取规则告示"
 },
 {
  "en": "PRIVACY",
  "zh": "隐私：个人身份相关数据，抓取它法律风险极高"
 },
 {
  "zh": "合规",
  "en": "compliance"
 },
 {
  "en": "STRING",
  "zh": "字符串：用引号括起来的一串文字，如 \"hello\""
 },
 {
  "en": "LIST",
  "zh": "列表：用方括号装的一排数据，可随时增减"
 },
 {
  "en": "SLICE",
  "zh": "切片：从序列切出一段，如 s[0:6] 左闭右开"
 },
 {
  "en": "DICT",
  "zh": "字典：用 键:值 成对存储，按名字快速取，如 {\"name\":\"小明\"}"
 },
 {
  "en": "KEY",
  "zh": "键：字典里用来找值的名字"
 },
 {
  "en": "VALUE",
  "zh": "值：键对应的内容"
 },
 {
  "en": "FILE",
  "zh": "文件：把数据存到磁盘的载体，如 data.txt"
 },
 {
  "en": "UTF8",
  "zh": "UTF-8：最常用字符编码，写中文务必指定它防乱码"
 },
 {
  "en": "EXCEPT",
  "zh": "异常捕获：用 try/except 接住可能出错的地方"
 },
 {
  "en": "FUNCTION",
  "zh": "函数：用 def 定义、可重复调用的代码块"
 },
 {
  "en": "MODULE",
  "zh": "模块：一个 .py 工具箱，import 后使用"
 },
 {
  "en": "PIP",
  "zh": "pip：装第三方库的工具，如 pip install requests",
  "pron": "pɪp"
 },
 {
  "en": "COMPREHENSION",
  "zh": "推导式：一行生成/加工列表的语法糖，如 [x*2 for x in a]"
 },
 {
  "en": "LAMBDA",
  "zh": "lambda：匿名小函数，常用于排序/筛选的 key"
 },
 {
  "en": "READABLE",
  "zh": "可读性：代码让人看懂比炫技更重要"
 },
 {
  "en": "HTML",
  "zh": "HTML：网页的标记语言，用标签描述结构与内容"
 },
 {
  "en": "TAG",
  "zh": "标签：如 <p> 段落、<a> 链接，成对或自闭合"
 },
 {
  "en": "ATTRIBUTE",
  "zh": ".get(\"src\")：取标签属性（如图片/链接地址）"
 },
 {
  "en": "DEVTOOLS",
  "zh": "开发者工具：浏览器内置审查面板，按 F12 打开"
 },
 {
  "en": "NETWORK",
  "zh": "Network 面板：记录所有网络请求，找接口和数据的入口"
 },
 {
  "en": "CONSOLE",
  "zh": "Console 控制台：看报错、试小段代码的地方"
 },
 {
  "en": "URL",
  "zh": "URL：统一资源定位符，即网址"
 },
 {
  "en": "QUERY",
  "zh": "查询参数：URL 里 ? 后面的 k=v，多个用 & 连接"
 },
 {
  "en": "RESPONSE",
  "zh": "响应对象：requests 拿到的结果，含状态码和正文"
 },
 {
  "en": "STATUS",
  "zh": "状态码：响应里三位数，表明请求结果"
 },
 {
  "en": "ENCODING",
  "zh": "编码：字符如何变成字节，中文常用 utf-8/gbk"
 },
 {
  "en": "REDIRECT",
  "zh": "重定向：3xx，requests 默认自动跟随"
 },
 {
  "en": "GET",
  "zh": "GET：最常用的请求方法，用来\"取\"资源"
 },
 {
  "en": "TEXT",
  "zh": "r.text：响应正文，HTML 或 JSON 的字符串"
 },
 {
  "en": "HEADER",
  "zh": "请求头：请求里附带的自述信息，如 User-Agent"
 },
 {
  "en": "USERAGENT",
  "zh": "User-Agent：表明\"我是谁/什么客户端\"的字段"
 },
 {
  "en": "REFERER",
  "zh": "Referer：表明\"从哪个页面过来\"，部分接口会校验"
 },
 {
  "en": "PARAMS",
  "zh": "params：GET 请求的查询参数，requests 会自动拼到 URL"
 },
 {
  "en": "POST",
  "zh": "POST：把数据放请求体提交的请求方法"
 },
 {
  "en": "FORM",
  "zh": "表单：网页里收集用户输入再提交的结构，常走 POST"
 },
 {
  "en": "TIMEOUT",
  "zh": "超时：requests 等响应的秒数，防卡死"
 },
 {
  "en": "RETRY",
  "zh": "重试：失败后隔会儿再试一次，应对网络抖动"
 },
 {
  "en": "SESSION",
  "zh": "会话：用 Session() 复用 Cookie 与连接，保持登录态"
 },
 {
  "en": "THROTTLE",
  "zh": "限流：429/503 表示被限速，需降速退避"
 },
 {
  "en": "BEAUTIFULSOUP",
  "zh": "BeautifulSoup(bs4)：把 HTML 解析成对象树、方便提取的库"
 },
 {
  "en": "SOUP",
  "zh": "soup：BeautifulSoup 解析后的文档对象，用来导航查找"
 },
 {
  "en": "PARSER",
  "zh": "解析器：把文本变成结构的东西，如 html.parser / lxml"
 },
 {
  "en": "FIND",
  "zh": "find：返回第一个匹配的标签"
 },
 {
  "en": "FINDALL",
  "zh": "re.findall：找出所有匹配，返回列表"
 },
 {
  "en": "GETTEXT",
  "zh": ".get_text(strip=True)：取文字并去掉首尾空白"
 },
 {
  "en": "SELECT",
  "zh": "select：按 CSS 选择器批量找元素"
 },
 {
  "en": "SELECTOR",
  "zh": "选择器：告诉程序去哪抠元素的规则",
  "pron": "sɪˈlɛktər"
 },
 {
  "en": "SELECTONE",
  "zh": "select_one：用选择器取第一个匹配"
 },
 {
  "en": "TRAVERSE",
  "zh": "遍历：parent 父 / children 子 / sibling 兄弟"
 },
 {
  "en": "REGEX",
  "zh": "正则(re)：用模式串匹配/提取文本的工具"
 },
 {
  "en": "PATTERN",
  "zh": "模式：正则里描述\"要匹配啥\"的表达式"
 },
 {
  "en": "GROUP",
  "zh": "分组：正则里 () 圈出要单独提取的片段"
 },
 {
  "en": "SUB",
  "zh": "re.sub：按正则替换文本，如压空格"
 },
 {
  "en": "SEARCH",
  "zh": "re.search：找第一个匹配，返回可取分组的对象"
 },
 {
  "en": "JSON",
  "zh": "JSON：可表达嵌套（对象/数组）的数据格式"
 },
 {
  "en": "RJASON",
  "zh": "r.json()：把响应 JSON 文本解析成 Python 对象"
 },
 {
  "en": "CSV",
  "zh": "CSV：逗号分隔的表格文本，Excel/数据库通用"
 },
 {
  "en": "DICTWRITER",
  "zh": "DictWriter：把字典列表写成 CSV 的列"
 },
 {
  "en": "BOM",
  "zh": "utf-8-sig：带 BOM 的 utf-8，Excel 打开中文不乱码"
 },
 {
  "en": "DUMP",
  "zh": "json.dump：把 Python 对象写入 JSON 文件"
 },
 {
  "en": "ENSUREASCII",
  "zh": "ensure_ascii=False：让中文正常写入而非转义"
 },
 {
  "en": "OPENPYXL",
  "zh": "openpyxl：读写 .xlsx Excel 文件的库"
 },
 {
  "en": "WORKBOOK",
  "zh": "Workbook：一个 Excel 工作簿对象"
 },
 {
  "en": "XLSX",
  "zh": "xlsx：Excel 的现代文件格式，程序可直接生成"
 },
 {
  "en": "PAGINATION",
  "zh": "分页：数据分成多页，逐页抓取"
 },
 {
  "en": "OFFSET",
  "zh": "offset：接口里的\"从第几条开始取\"参数"
 },
 {
  "en": "CURSOR",
  "zh": "游标：接口返回\"下一页指针\"，用它接着翻"
 },
 {
  "en": "COOKIE",
  "zh": "Cookie：服务器发的\"身份凭证\"，带着它算登录态"
 },
 {
  "en": "LOGIN",
  "zh": "登录：拿到并维持 Cookie 的过程"
 },
 {
  "en": "CAPTCHA",
  "zh": "验证码：防止自动登录的防护，requests 常过不了"
 },
 {
  "en": "PROXY",
  "zh": "代理：中转服务器，让你换 IP 发起请求"
 },
 {
  "en": "DELAY",
  "zh": "延迟：请求间隔，降低频率避免被封"
 },
 {
  "en": "RATE",
  "zh": "汇率：一种货币换另一种货币的比值",
  "pron": "reɪt"
 },
 {
  "en": "SELENIUM",
  "zh": "Selenium：驱动真实浏览器，爬 JS 动态页"
 },
 {
  "en": "DYNAMIC",
  "zh": "动态加载：数据由 JS 现拉，HTML 里没有，要去接口拿"
 },
 {
  "en": "DRIVER",
  "zh": "驱动：如 ChromeDriver，让 Selenium 控制浏览器"
 },
 {
  "en": "DISALLOW",
  "zh": "Disallow：声明禁止爬取的路径"
 },
 {
  "en": "ALLOW",
  "zh": "Allow：在禁止大前提下放开某些路径"
 },
 {
  "en": "POLITE",
  "zh": "礼貌爬虫：控频、亮身份、只取所需、守规则"
 },
 {
  "en": "CACHE",
  "zh": "缓存：已抓的存本地，避免重复请求"
 },
 {
  "en": "CONCURRENCY",
  "zh": "并发：同时进行的请求数，过高像攻击"
 },
 {
  "en": "PIPL",
  "zh": "个人信息保护法：严管个人数据的收集与使用"
 },
 {
  "en": "COPYRIGHT",
  "zh": "版权：抓来的内容别擅自商用转发"
 },
 {
  "en": "RED LINE",
  "zh": "红线：违法/侵权/破防行为，碰了后果严重"
 },
 {
  "en": "ENDPOINT",
  "zh": "接口地址：API 的 URL，发请求拿数据的地方"
 },
 {
  "en": "JSON DUMP",
  "zh": "json.dump：把 Python 数据写成 JSON 文件"
 },
 {
  "en": "CONTENT",
  "zh": "r.content：响应的二进制正文，用于图片/文件"
 },
 {
  "en": "WB MODE",
  "zh": "wb：以写二进制方式开文件，存图片必须用"
 },
 {
  "en": "Makedirs",
  "zh": "os.makedirs：递归建目录，exist_ok 防报错"
 },
 {
  "en": "PIPELINE",
  "zh": "管道：清洗与存储数据的环节",
  "pron": "ˈpaɪplaɪn"
 },
 {
  "en": "README",
  "zh": "说明文档：写清脚本用途、运行方式、数据用途"
 },
 {
  "en": "ROBUST",
  "zh": "健壮性：try/except + 默认值，脏数据不崩"
 },
 {
  "en": "DEBUG",
  "zh": "调试：逐层打印、缩小范围定位问题"
 },
 {
  "en": "FALLBACK",
  "zh": "兜底：try/except 或默认值，脏数据不崩"
 },
 {
  "en": "SCRAPY",
  "zh": "Scrapy：专业爬虫框架，自带调度与管道"
 },
 {
  "en": "ASYNC",
  "zh": "异步：asyncio+aiohttp，并发量级提升"
 },
 {
  "en": "APPEND",
  "zh": "追加：在文件末尾加内容，不覆盖原有",
  "pron": "əˈpɛnd"
 },
 {
  "en": "TREND",
  "zh": "走势：数据随时间变化的动向",
  "pron": "trɛnd"
 },
 {
  "en": "ARTICLE",
  "zh": "正文：网页里真正的内容区，常包在 <article>",
  "pron": "ˈɑːrtɪkəl"
 },
 {
  "en": "MARKDOWN",
  "zh": "Markdown：轻量文本格式，.md 文件易读易存",
  "pron": "ˈmɑːrkdaʊn"
 },
 {
  "en": "LOCAL",
  "zh": "本地：在你自己电脑上的运行环境",
  "pron": "ˈloʊkəl"
 },
 {
  "en": "SPIDER",
  "zh": "蜘蛛：你写的抓取与解析逻辑",
  "pron": "ˈspaɪdər"
 },
 {
  "en": "YIELD",
  "zh": "产出：逐个交出一个结果",
  "pron": "jiːld"
 },
 {
  "en": "DATAFRAME",
  "zh": "pandas 的二维表，像 Excel 表",
  "pron": "ˈdeɪtəfreɪm"
 },
 {
  "en": "VISUALIZE",
  "zh": "可视化：把数据画成图",
  "pron": "ˈvɪʒuəlaɪz"
 },
 {
  "en": "MATPLOTLIB",
  "zh": "matplotlib：Python 画图库",
  "pron": "mætˈplɒtliːb"
 },
 {
  "zh": "公开数据",
  "en": "public data"
 },
 {
  "zh": "家长园地",
  "en": "parent zone"
 },
 {
  "zh": "备份",
  "en": "backup"
 },
 {
  "zh": "阶段考",
  "en": "stage exam"
 }
];
