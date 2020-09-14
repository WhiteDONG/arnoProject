<template>
    <div>
        <div class="nav-background">
            <img class="nav-background_img" v-if="pageid == 1" src="../assets/images/banner5.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 2" src="../assets/images/banner4.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 3" src="../assets/images/banner5.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 4" src="../assets/images/banner2.png" alt="" srcset="">
        </div>
        <div class="main">
           
            <div class="brand1" v-if="pageid == 1">
                <div class="main-warp main-column">
                    <div class="main-title">
                        <img class="main-title_icon" src="../assets/images/mainTitle.png" alt="" srcset="" width="197px" height="28px">
                        <div class="main-title_line"></div> 
                    </div> 
                    <div class="main-row main-content1 nobackgroud">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="550px" height="350px">
                        <div class="pl82">
                            <p class="brand-txtwarp_title mb35">塔古奇传奇</p>
                            <p class="content-text mb35">日本神奈川,在这块神奇的土地上孕育了金嗓子、天龙等众多世界闻名的音响品牌。1981年, Taguchi音响制作所在此诞生了。 Taguchi从大型舞演专用音响系统起家,为SONY、JVC等大品牌厂商服务,历经几十年的努力,在专业音响制造界确立了其先进地位。</p>
                            <p class="content-text">追求“究极的声音"和制作上“毫不妥协"的态度,是塔古奇的制造理念,多年以来,塔古奇不断创新,很多技术都是在世界上首先运用的。</p>
                        </div>
                    </div>
                    <div class="main-title">
                        <img class="main-title_icon" src="../assets/images/mainTitle.png" alt="" srcset="" width="197px" height="28px">
                        <div class="main-title_line"></div> 
                    </div> 
                    <div class="main-row main-content1 nobackgroud">
                        <div class="pr82">
                            <p class="brand-txtwarp_title mb35">专业典范</p>
                            <p class="content-text">Taguchi业绩遍布日本的国家电视台、国立剧场、国立公共设施、日本国会众议院会议厅、众多的明星演唱会、国际机场贵宾厅、教堂神社等等,不胜枚举。在时尚界,MIUMIU,STUSSY,The North Face等店铺全部采用Taguchi产品，D&G、GUCCI、Dior等时尚品牌的新品发布会，都是指定使用Taguchi音箱。如今大热的美国著名咖啡连锁Blue Bottle（蓝瓶子咖啡）全部采用Taguchi音箱，Taguchi品牌成为业界典范，代表着日本专业音响界国家队水准，特别是受到音乐人和艺术家的广泛认可和喜爱。</p>
                        </div>
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="550px" height="350px">
                    </div>
                    <div class="main-title">
                        <img class="main-title_icon" src="../assets/images/mainTitle.png" alt="" srcset="" width="197px" height="28px">
                        <div class="main-title_line"></div> 
                    </div> 
                    <div class="main-row main-content1 nobackgroud">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="550px" height="350px">
                        <div class="pl82">
                            <p class="brand-txtwarp_title mb35">核心科技</p>
                            <p class="content-text mb35">Taguchi摆脱了长时间作为常规使用的传统锥形单元，实现了性能更加优异的平面单元。 </p>
                            <p class="content-text">1981年由日本专业音箱教父级人物Mr.Taguchi创立了Taguchi公司，成为日本首先生产大型专业音箱的厂商，打破了欧美厂商在日本的长期垄断。尤其是独自研发的平面扬声器单元，具有高保真、低衰减、指向性好、不占空间的优点确立其特有的技术优势和业界地位。</p>
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb35">Taguchi的Dual horizon rex系列和DUAL ARCHED ARRAY系列，是世界上首先采用广音域/高耐输入的平面振动发声单元，可以同时表现超低音到超高音，能够感受到音声细微的变化。</p>
                        <p class="content-text mb35">Taguchi的拱形矩阵式音箱(Arched Array Flat Speaker System)采用多只独自开发制造的φ80強力小型平面扬声器单元, 远距离声音送达非常优异，即使小音量也不会随着距离衰减。同时具有清晰度高、穿透力强的特点。此外，由于体积小可以不受设计空间的限制。</p>
                        <p class="content-text">Taguchi（塔古奇）还将专业音箱的经验应用于民用，成为世界上首先开发出360°无向音箱的厂商，使音乐表现更加柔和舒适，音乐享受不受聆听位置的限制，更加随心所欲。 声音清晰、干净通透、细节丰富、设计灵活是Taguchi塔古奇音箱的显著特点。</p>
                    </div>
                    <div class="main-title">
                        <img class="main-title_icon" src="../assets/images/mainTitle.png" alt="" srcset="" width="197px" height="28px">
                        <div class="main-title_line"></div> 
                    </div> 
                    <div class="main-row main-content1 nobackgroud">
                        <div class="pr82">
                            <p class="brand-txtwarp_title mb35">声景学奇迹</p>
                            <p class="content-text mb35">Taguchi塔古奇是世界上首先倡导以声景学的概念来打造音箱，让人们用耳朵聆听四级，环游世界，体验精彩的声音景致。为视觉空间融入灵动之气，辅助视觉空间展现多姿多彩的想象画面，为观者增添愉悦的情景感受。</p>
                            <p class="content-text mb35">2001年，创造出演绎“和之声”音箱，忠实地还原了乐器所能表现出的回响和静寂，广受音乐界的盛赞。</p>
                            <p>2006年，制造出世界上首先用64声道音乐系统“交响乐园/音乐的森林”。每⼀声道为每⼀种乐器的声音，与正式的交响乐队同样配置，忠实再现了交响乐队的⾳乐演绎。从此，在⽇本和欧洲进行不定期的巡展。</p>
                        </div>
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="550px" height="350px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text">Taguchi还创立ON-COO⾳响空间研究会，成为世界上首先导入声景概念制造音箱的厂商。作品有东京羽田机场国际贵宾厅、15/16米兰设计周CITIZEN馆Panasonic馆等。</p>
                    </div>
                    <div class="main-title">
                        <img class="main-title_icon" src="../assets/images/mainTitle.png" alt="" srcset="" width="197px" height="28px">
                        <div class="main-title_line"></div> 
                    </div> 
                    <div class="main-row main-content1 nobackgroud">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="550px" height="450px">
                        <div class="pl82">
                            <p class="brand-txtwarp_title mb35">日本匠人精心打造</p>
                            <p class="content-text mb20">从扬声器单元到音箱箱体，在日本专业音箱教父级人物Mr.Taguchi的统帅下全部在日本本土研发生产，并且全过程由娴熟技艺的工程师全程手工制作。严谨的工艺和究极的制作精神，成就了不妥协的音质和被称作日本国家代表队的品质。</p>
                            <p class="content-text mb20">而新锐设计师的加盟更赋予Taguchi音箱外观的艺术化，成为了日本国家艺术场馆的常客。由于设计风格时尚以及与场地风格的协调，得到了众多设计师艺术家的推崇，与安藤忠雄、桢文彦等设计大师的都有合作，广受好评。</p>
                            <p class="content-text mb20">Taguchi（塔古奇）还致力于户外演出的太阳能发电事业，成立RA -energy design集团，专门为户外演出研发太阳能发电系统。像每年举办的富士音乐节就采用RA -energy design的发电系统供电。 </p>
                            <p class="content-text">Taguch（塔古奇）打造了以优异的音质而享誉世界的音乐俱乐部、电影院、别墅，以及与时尚品牌共同研发产品，成为媒体关注的焦点。</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="brand2" v-if="pageid == 2">
                <div class="main-warp main-column">
                    <div class="main-title">
                        <img class="main-title_icon" src="../assets/images/mainTitle.png" alt="" srcset="" width="197px" height="28px">
                        <div class="main-title_line"></div> 
                    </div> 
                    <div class="main-column main-content1 mb35 nobackgroud" style="padding-top: 0;padding-bottom: 0;">
                        <p class="content-text">Taguchi塔古奇的创始人田口和典先生,是一位制作音箱的工程师更是一位艺术家。是日本音响界的天才,被称作日本专业音响界的传奇领袖。他出生在神奈川县镰仓市,儿时的理想是制造飞机,后来考入日本大学学习机械工学。受披头士和 The ventures.乐队的影响,他拿起电吉他组乐队开展音乐活动。田口先生具有喜欢钻硏的天性和超强的动手能力,在大学期间便开始制作音箱,渐渐发现对音箱的制作比对玩音乐更加感兴。</p>
                    </div>
                    <div class="main-row main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="pr82">
                            <p class="content-text mb35">早在70年代,便开始对户外演出音箱进行研究,同时与日本大型音响供应商HBNO、东京音响通信研究所等公司和机构开始合作。在1979年的日本『 HOT JAM 79』音乐节上,首次使用了田口先生制作的音箱,成为日本大型演出音箱的先驱。1981年田口先生成立了公司,正式创立 Taguchi塔古奇品牌。</p>
                            <p class="content-text">在多年的坚持和不懈的努力下, Taguch打破了欧美厂商在日本的长期垄断,尤其是独自研发的平面扬声器单元具有高保真、低衰减、指向性好、不占空间的优点,而且声音清晰华丽、穿透力强、低音干净有弹性、特点鲜明,确立其特有的技术优势和业界地位。</p>
                        </div>
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="550px" height="350px">
                    </div>
                    <div class="main-title">
                        <img class="main-title_icon" src="../assets/images/mainTitle.png" alt="" srcset="" width="197px" height="28px">
                        <div class="main-title_line"></div> 
                    </div> 
                    <div class="main-column main-content1 mb35 nobackgroud brand-txtwarp_tip__title" style="width:1080px;">
                        <p class="content-text mb70">以下为田口先生对媒体亲口讲述的 Taguchi音箱哲学。</p>
                        <p class="content-text " style="background: #e5e5e5;padding: 0 10px;">-----声音重放不是简单地把声音扩大,要保持声音原有的风貌, Taguch做到了这一点。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb20">田口先生说:音箱是模拟的回放装置,通过话简扩大的声音必须要能原原本本地放大传递,就像一个歌手在远方歌唱,他的音色特质不会因距离而改变。使用Taguchi的音箱,无论音量大小,同样会保留声音原来的样貌。声音是有趣的,无论你是一个有身体残疾的老年人还是一个年幼的孩子,都能分辨出好的声音听起来很悦耳,就像美味的食物会激发味蕾触觉一样。</p>
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">全部采用塔古奇音箱的演出现场( Studio Cost)</p>
                    </div>
                    <div class="main-column main-content1 mb35 nobackgroud brand-txtwarp_tip__title" style="width:1080px;">
                        <p class="content-text" style="background: #e5e5e5;padding: 0 10px;">-----Taguch的使命是不断地进化、蜕变升级,创造出令人感动的声音。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb20">田口先生说你必须要做出你最喜欢、并一生珍爱的东西,人类应该变得更加纯粹,这就是我不断追求的方向。比如,一些发烧友喜欢购买国外著名的设备,这可以理解。但是有些人认为最好是买已经不再生产的像古重那样的老物件,这就叫人费解了。我们应该不断地脱胎换骨、蜕变升级,去拥抱崭新的光明世界。现在,我认为 MADE IN JAPAN"创造了令全世界感到自豪的东西,但是,还是要更加进化,要创造出令人感动的声音。</p>
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">塔古奇独特的多面体音箱</p>
                    </div>
                    <div class="main-column main-content1 mb35 nobackgroud brand-txtwarp_tip__title" style="width:1080px;">
                        <p class="content-text" style="background: #e5e5e5;padding: 0 10px;">-----Taguchi源于专业,真正做到以客户为本,追求极致,把“日本制造”发扬光大。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb20">田口先生说:我们 Taguchi的音箱产品是根据使用的空间来设计制造并充分考量装饰风格。既不像通常的专业音箱那样只有黑白两色的塑料音箱,也不像其他品牌那样将生产制造放在生产成本较低的海外,而是每一个工艺步骤、每一个元器件都是由 Taguchi公司在日本制造。而且,我要做的不仅是定制的工作,还要做到能够看到每一个人,因为制造是靠每一个人的力量,我的公司必须重视这点。现在大家都处在同一个大领域时代,应该考虑如何连结,我们今后还会不断地推出新的东西。</p>
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="960px" height="600px">
                        <p class="content-text">田口先生指导产品制造</p>
                    </div>
                    <div class="main-column main-content1 mb35 nobackgroud brand-txtwarp_tip__title" style="width:1080px;">
                        <p class="content-text" style="background: #e5e5e5;padding: 0 10px;">-----请您介绍一下 Taguchi的 “乐器一样的音i箱”</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb20">田口先生说:一般的音箱会使用大量的吸音材料,这样做的话,使用电子仪器一测,指标相当不错,但是听的话会有很多无聊的声音。我认为音箱也是乐器,所以, Taguchi几乎不怎么用吸音材料,我们会下很多功夫让箱体很好地发出声音。在一些音箱中,我会加入我的签名和日期,代表我会对此负有责任。</p>
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="1000px" height="600px">
                        <p class="content-text">塔古奇产品采用优质木材,打造有温度的自然之声</p>
                    </div>
                    <div class="main-column main-content1 mb35 nobackgroud brand-txtwarp_tip__title" style="width:1080px;">
                        <p class="content-text" style="background: #e5e5e5;padding: 0 10px;">-----玩音乐用的音箱会有什么不同吗?</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb20">田口先生说:比如做排练室的音箱,我会考虑乐手们需要响起来,要有现场演出的感觉,还要考虑到凸现细节,这个的确要下一番功夫。所以,这不是一般录音棚的监听音箱能达到的效果,排练室用的音箱必须得让乐手兴奋起来。我的观点是排练室的空间要有让人想跳舞的声音,像是声音的沐浴一样,而且人声一定要在前面。</p>
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">塔古奇的库房时常有乐队光顾、“调音”</p>
                    </div>
                    <div class="main-column main-content1 mb35 nobackgroud brand-txtwarp_tip__title" style="width:1080px;">
                        <p class="content-text" style="background: #e5e5e5;padding: 0 10px;">-----Taguchi的音箱呈现的就是最真实、最自然的声音。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb20">田口先生说: Taguchi音箱发出的声音十分悦耳、让人舒适,耳朵也不会感到疲劳,并以最真实的方式再现无形的声音,当一个声音真的很美的时候,你会感觉到好像它不仅在耳朵后面,而且在助骨深处回响。 Taguchi设计的音箱看起来没有太多惊喜,却尽量接近大自然的规律。</p>
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">塔古奇的研发工程师介绍研制中的产品</p>
                    </div>
                    <div class="main-column main-content1 mb35 nobackgroud brand-txtwarp_tip__title" style="width:1080px;">
                        <p class="content-text" style="background: #e5e5e5;padding: 0 10px;">-----演唱会使用的音箱在设计上最重要的是什么?</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb20">田口先生说:高功率。远距离到达性能,即能把声音传递到多远。指向性,即声音能到达的范围。另外还有户外舞台适应性方面,如承重和耐用性。70年代后期开始,正是日本各地进入兴建音乐厅和文化会馆的时代,SONY\先锋\三菱这些企业还有剧团四季也来下单,美国奥特蓝星日本总代理也来订购音箱,那个时期来自竹中工务店这样的建筑公司的订单非常多。</p>
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="750px" height="600px">
                        <p class="content-text">塔古奇是日本大型音箱制造的先驱企业</p>
                    </div>
                    <div class="main-column main-content1 mb35 nobackgroud brand-txtwarp_tip__title" style="width:1080px;">
                        <p class="content-text" style="background: #e5e5e5;padding: 0 10px;">-----寺院的音箱有什么特殊的要求吗?</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb20">田口先生说:我们制作了西本愿寺、筑地本愿寺的音箱。寺院使用的音箱非常关键,寺院主持说法的时候必须要清晰准确的传达。这就是音箱的品质问题,必须具有音乐用的音箱一样的高忠实度,如果性能不好的话,坐在远处的大爷大妈就要交头接耳了。<br/>我经常与总承包商一起工作,他们经常会说“这个教堂必须要用这个颜色”“这个寺院必须和柱子的颜色一致”,“必须和经历了800年的颜色一致”等等:如果要是问这是谁建的,人家告诉你是丰臣秀吉。所以,音箱的设计必须与寺庙的摆设和谐,不能有违和感。</p>
                        <div class="main-row">
                            <div class="main-column mr56">
                                <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="512px" height="400px">
                                <p class="content-text">塔古奇的音箱充分考量建筑装饰风格,与环境和谐,杜绝违和感</p>
                            </div>
                            <div class="main-column">
                                <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="512px" height="400px">
                                <p class="content-text">这是为本愿寺特制的音箱</p>
                            </div>
                        </div>
                    </div>
                    <div class="main-column main-content1 mb35 nobackgroud brand-txtwarp_tip__title" style="width:1080px;">
                        <p class="content-text" style="background: #e5e5e5;padding: 0 10px;">-----在欧美公司称霸音响界的情况下, Taguchi是如何做出自己特色的?</p>
                    </div>   
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb20">田口先生说70年代以后,日本的专业音响公司开始承接外国明星来日演出工作。那时,日本的演出业务还比较落后,每次外国明星来演出的时候会空运几十吨的音响设备,比如滚石乐队的世界巡演由两队人马同时进行,其中一队在公演现场,另一队到下一个现场去准备。所以,在日本举行外国明星演唱会的时候,往往由在日本合作的音响公司采购他们在欧美用习惯的器材,这样明星的团队一到日本就很容易上手。因此,在日本制造演出用音箱的公司就没有了,演出用的音箱基本上都是欧美制造的了。在这种情况下,我就开始考虑我的音箱如何才能做出特色。我想到了平面扬声器这在30年前曾经火了一段时间,因为波形真的非常漂亮,一听就会知道声音好。但那时振膜的重量是平板扬声器的关键,找不到好的材料。于是又和我的团队一起研发世界顶级的扬声器单元,成立了专门的硏发制造为一体的公司就像日剧《下町火箭》那样,如今已经形成具有完整生产体系的集团公司。</p>
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="750px" height="600px">
                        <p class="content-text">田口先生讲解平面扬声器与传统扬声器的区别</p>
                    </div>
                    <div class="main-column main-content1 mb35 nobackgroud brand-txtwarp_tip__title" style="width:1080px;">
                        <p class="content-text" style="background: #e5e5e5;padding: 0 10px;">-----平面扬声器单元的音箱的声音真实,音乐人和音响专业人员一听就明。</p>
                    </div>  
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb20">田口先生说:比如像虫鸣鸟叫这些自然的声音非常逼真,好像真的有乌在那里叫,完全没有违和感,所以,狗和猫会有反应的。对一般音箱声音没什么反应,用平面音箱播放猛兽的声音的话,他们会吓得瑟瑟发抖。<br/>平面音箱的好坏,音乐家和剧场的工作人员一听就知道。欧洲爵士唱片公司的贝斯手非常喜欢我们的音箱,在演唱会结束后直接就带回国了。<br/>新生代的音乐人也非常喜欢使用 Taguchi音箱,永積崇的代代木体育馆的演唱会、还有踢踏舞舞蹈家熊谷和德的演出都用过我们的音箱,像踢踏舞演出,关键是要能清楚准确地听到咔嗒的声音。像关8的东京巨蛋演唱会,不是采用大型的主音箱,而是在观众席中放置细长的平面音箱,杰尼斯艺人的演唱会里面的说唱是非常重要的,要分清每个演唱者的发音,不能听清的话,现场气氛就上不来。<br/>我现在的目标是要在演唱会上要消除观众对音箱的存在感,虽然有音压上的需要,我认为能听到音乐家的演唱和演奏的声音就可以了,毕竟观众不是来听爆音的虽然我也觉得堆积如山的运动场级别的音箱显得很酷。</p>
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="1000px" height="600px">
                        <p class="content-text">塔古奇用平面扬声器单元制造的移动音箱系统</p>
                    </div>
                    <div class="main-column main-content1 mb35 nobackgroud brand-txtwarp_tip__title" style="width:1080px;">
                        <p class="content-text" style="background: #e5e5e5;padding: 0 10px;">-----除了演唱会外, Taguchi的平面扬声器也出现在影院了。</p>
                    </div>  
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb20">田中先生说:我们一直在致力于对电影院音箱的开发,已经有一些影院使用我们的音箱,还有大学的观影厅,很多的电影节上也使用我们的音箱。<br/>我们的平面音箱得到了著名的SONY录音师藤田贵史及原日比野公司的首席音响师宫本宰等众多专家的好评。2018年落成的PLNK影院,导入了 Taguchi平面音箱系统是世界上最好的影院音箱,采用了我们最新研发的20CM的扬声器单元,这也是该单元首次亮相。<br/>我想现在应该由日本提出用很好还原声音这个标准来作为电影院音箱的世界标准,而不是用杜比、THX普及率的高低来衡量。我们必须让世界大吃一惊,我认为世界上关于影院用的音箱将会有所改变。<br/>即使衣服摩擦的声音也会让人大吃一惊、像起鸡皮疙瘩一样,我就是要达到这样的声音。我想制造盲人在电影院靠声音也能感动的系统。电影是一门综合性的艺术,让人一坐到电影院的椅子上,就能感到现场、感觉到电影的气息,这是非常重要的。<br/>我想让观众在 Taguchi的电影院系统上,从声音上就能感受到看电影的乐趣。在家使用耳机也可以听,但是要想能感受到氛围的话,就得先要有现场的感觉。</p>
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="450px">
                        <p class="content-text">为 Uplink影院 (CNN评选出的世界十佳影院)开发的影院用平面音箱</p>
                    </div>
                    <div class="main-column main-content1 mb35 nobackgroud brand-txtwarp_tip__title" style="width:1080px;">
                        <p class="content-text" style="background: #e5e5e5;padding: 0 10px;">-----直以专业高级定制为主业的 Taguchi,开发了面向终端消费者的系列产品“ SEREND|PTY",伴随着该系列产品的上市,Taguchi音箱</p>
                        <p class="content-text" style="background: #e5e5e5;padding: 0 10px;">开始被消费者所了解。</p>
                    </div>  
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb20">田中先生说: SERENDIPITY系列产品将 Taguchi的理论和哲学与都市生活方式相适应,创作出的一种新型的家用音箱,我们一直在努力创新。所以,我总觉得现在做出来的东西都不够完美,每一个新想法做出的产品,都会令人感到振奋、有趣。如果再过10年、20年、100年,我们制作的Taguchi音箱还能留在世上,我就满足了。这些年来,我研发了很多寺院宗教类、气象观测、噪音抑制系统等特殊用途的音箱,对家用音箱的开发也希望具有 Taguchi特色,所以,我想到了全向音箱运用点声源的理论,比如使用多面体或装置锥形反射盘,让声音反射充满整个空间。<br/>材料是来自北欧地区的桦木夹板,让夹板可以保持均匀的密度,这一点非常重要。<br/>音箱不仅仅是单纯地播放声音的机器,更是从精神层面上给人更多的帮助。音乐本身就会根据听者自身的环境和心情而变化,不是像椅桌椅那样可以实际触摸和使用的东西,而是有生生相惜的感觉,像伙伴一样的存在。</p>
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="750px" height="450px">
                        <p class="content-text">塔古奇的 SERENDIPITY系列产品</p>
                    </div>
                    <div class="main-column main-content1 mb35 nobackgroud brand-txtwarp_tip__title" style="width:1080px;">
                        <p class="content-text" style="background: #e5e5e5;padding: 0 10px;">-----田口先生继续作为声音的领跑者,不断地挑战新的声音可能性。他和音响师宫本宰先生共同开发一种装置系统,该系统使用64个多声道音源和64个音箱,这是一个名为“音乐森林”的主题项目,它使用多声道声源和多个扬声器,用声音表塑造空间系统的关键是扬声器技</p>
                        <p class="content-text" style="background: #e5e5e5;padding: 0 10px;">术。</p>
                    </div> 
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb20">田中先生说:一般说来用两个声道就够了,我们是用64个声道,希望创作出更有趣的世界来,也可以是声音的博物馆,但不仅仅是听音乐,最好能像瑜伽那样给精神上的放松,如果能治病的话,就更有意思了。深入地研究就会创造一个更好的世界来。</p>
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">塔古奇的传奇制作---64声道的音乐森林</p>
                    </div>
                    <div class="main-column main-content1 mb35 nobackgroud brand-txtwarp_tip__title" style="width:1080px;">
                        <p class="content-text">今后为空间制作音乐的新型作曲家会越来越多,但是,如果没有良好的环境是很难培养出这样的音乐家,所以,创造良好的硬件环境,是我们这些制作音箱的人的使命。</p>
                    </div> 
                </div>
            </div>
            <div class="brand3" v-if="pageid == 3">
                <div class="main-warp main-column">
                    <div class="main-title">
                        <img class="main-title_icon" src="../assets/images/mainTitle.png" alt="" srcset="" width="197px" height="28px">
                        <div class="main-title_line"></div> 
                    </div> 
                    <div class="main-row main-content1 nobackgroud">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="491px" height="400px">
                        <div class="pl82">
                            <p class="brand-txtwarp_title mb35">Taguchi核心技术----平面扬声器</p>
                            <p class="content-text mb35">Taguchi成立于1983年,以其严谨、毫不妥协的制造精神,发展成为专业音响集团。 </p>
                            <p class="content-text mb35">Taguchi汇集了日本国内高水平的电气专家、建筑家、艺术家,在被称作是日本音响教父的 M r. Taguchi的率领下,研究开发代表日本国家音响水准的专业音箱。</p>
                            <p class="content-text">Taguchi毫不妥协的制造精神体现在产品制造的各个环节。音响播放系统中最重要的元件-扬声器单元组件以及系统整体,全部都是在日本研发和制造,以保证世界高水准的音质。并且,充分考量与环境和空间的协调融合及美学的表现。</p>
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb35">Taguchi摆脱了长时间作为常规使用的传统锥形单元,实现了性能更加卓越的平面单元。它是世界上首先用平面单元作为SR扬声器(SR扬声器是SoundReinforcement Speaker的简称,是指演唱会使用的大型音箱。)系统的厂商,这项新技术为每个热爱音乐的人重塑了音乐体验。并在几乎所有 Taguchi产品上大量应用,成为 Taguchi技术之根。</p>
                        <p class="content-text mb35">平面单元的应用,完满地证实了理论上的优越性,给人们带来惊喜。平面单元带来的相位差和时差较小以及动听的音波,成功地再现了高分辨率和对耳朵友好的自然之声,这是传统SR音箱无法实现的。</p>
                        <p class="content-text">平面单元在超低音域方面的优异表现,超出人们的预期。实现了深沉、迅速、鲜明的超低音域。与从前相比,由于有效驱动面积增大,使得单元的尺寸大大缩小了,并且,实现了快速响应,较小的相位差和时间差,更加清晰地呈现低音域。</p>
                    </div>
                    <div class="main-title">
                        <img class="main-title_icon" src="../assets/images/mainTitle.png" alt="" srcset="" width="197px" height="28px">
                        <div class="main-title_line"></div> 
                    </div> 
                    <img class="mb101" src="../assets/images/banner2.png" alt="" srcset="" width="1080px" height="600px">
                    <img src="../assets/images/banner2.png" alt="" srcset="" width="1080px" height="850px">
                    <div class="main-title">
                        <img class="main-title_icon" src="../assets/images/mainTitle.png" alt="" srcset="" width="197px" height="28px">
                        <div class="main-title_line"></div> 
                    </div> 
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;padding-bottom: 0;">
                        <p class="content-text mb35">平面单元在理论上的优越性使得很早就受到各大厂商的关注,并竞相研发,但是由于在平面上能够承受驱动的轻质高刚性材料的选择极其困难,所以,平面单元的研发往往都成了纸上谈兵。因此,最后多数的厂商放弃研发,现在只有极少数家用音响尺寸的高级扬声器厂商继续坚持,运用得也十分稀少。</p>
                    </div>
                    <div class="main-row main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="pr82">
                            <p class="content-text mb35">但是,具有对音质毫不妥协的日本音响厂商 Taguchi,一直坚持不懈地研发平面单元经过长年累月的努力和无数次失败后,发现了铝蜂窝材料。这种材料97%以上由空气层构成,具有超轻量、高刚性的特点,近年来在宇宙飞船、航天飞机上使用。铝蜂窝材质的特性,不仅解决了平面单元所需的一切必要条件,而且,远远超越原来的想像将家用尺寸都极其困难的平面单元研究讯速加快，终于成功地完成了世界上首个在演唱会上也可以使用的平面单元SR音箱。</p>
                            <p class="content-text">Taguchi的平面单元,不仅在构造上取得成功,而且,使一直以来理论上存在的音质优越性,在现实中得以完满地验证。取得了高解析度和令耳朵愉快的自然之声。</p>
                        </div>
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="491px" height="330px">
                    </div>
                    <div class="main-title">
                        <img class="main-title_icon" src="../assets/images/mainTitle.png" alt="" srcset="" width="197px" height="28px">
                        <div class="main-title_line"></div> 
                    </div> 
                    <div class="main-row main-content1 nobackgroud">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="292px" height="404px">
                        <div class="pl82">
                            <p class="brand-txtwarp_title mb35">技艺纯熟的匠人亲手打造的高品质扬声器单元</p>
                            <p class="content-text mb35">粘接<br/>使用注射器的粘接方法杜绝了误差,并将多余的粘接剂将至最小的使用量,保证了高音质的实现。纸盆和边缘的界面不采用粘合剂,而是采用插入式成出了由粘接剂产生的异物的可能性。</p>
                            <p class="content-text mb35">线材<br/>一般的发声线圈采用的线材的形状是圆形线,而我们的扬声器单元采用的是方形线,使得线材间的空间系数增加,增强了散热性,也杜绝了由于发热引起的剥离,提高了耐久。</p>
                            <p class="content-text">追求高音质及耐久性,通过这些细节反映出来。</p>
                        </div>
                    </div>
                    <div class="main-row ">
                        <img class="mr35" src="../assets/images/banner3.png" alt="" srcset="" width="244px" height="347px">
                        <img class="mr35" src="../assets/images/banner3.png" alt="" srcset="" width="244px" height="347px">
                        <img class="mr35" src="../assets/images/banner3.png" alt="" srcset="" width="244px" height="347px">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="245px" height="347px">
                    </div>
                </div>
            </div>
            <div class="brand4" v-if="pageid == 4">
                <div class="main-warp main-column">
                    联系我们
                </div>
            </div>
          
          
           
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                content: '',
                pageid:1
            }
        },
        watch: {
            $route: {
                handler() {
                    this.id = this.$route.params.id;
                    this.getDetail(this.id);
                    //深度监听，同时也可监听到param参数变化
                },
                deep: true,
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.getDetail(this.id);
            window.scrollTo(0,0);
            
        },
        methods: {
            getDetail(id){
                if(id == 'brand1'){
                    this.pageid = 1
                }if (id == 'brand2') {
                    this.pageid = 2
                }if (id == 'brand3'){
                    this.pageid = 3
                }if (id == 'brand4'){
                    this.pageid = 4
                }
                window.scrollTo(0,0);
            }
        }
    }
</script>