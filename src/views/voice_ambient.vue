<template>
    <div>
        <div class="nav-background">
            <img class="nav-background_img" v-if="pageid == 1" src="../assets/images/BEL/banner.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 2" src="../assets/images/Light2/banner.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 3" src="../assets/images/BMA-RX80/banner.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 4" src="../assets/images/Rex-060/banner.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 5" src="../assets/images/BMA-816R/banner.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 6" src="../assets/images/CAMS0609/banner.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 7" src="../assets/images/Light-Hanging/banner.jpg" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 8" src="../assets/images/Light1/banner.png" alt="" srcset="">
        </div>
        <div class="main">
            <div class="main-title">
                <img class="main-title_icon" src="../assets/images/mainTitle.png" alt="" srcset="" width="197px" height="28px">
                <div class="main-title_line"></div> 
            </div>
            <div class="bel" v-if="pageid == 1">
                <div class="main-warp main-column">
                    <img class="mb35" src="../assets/images/BEL/1.png" alt="" srcset="" width="1080px" height="620px">
                    <div class="main-content3 main-column pb60 mb57">
                        <p class="content-title content3-title">像乐器一样发声的音箱</p>
                        <img class="mb57" src="../assets/images/BEL/2.png" alt="" srcset="" width="1080px" height="706px">
                        <p class="content-text align-self mb35">--在专业音响领域耕耘多年的Taguchi，于2014年首次推出民用级产品----Serendipity系列，其中最受人瞩目的是旗舰产品----Bel。</p>
                        <p class="content-text">--采用铝蜂窝振动板的平板扬声器单元是Taguchi科技的核心产品，独自研发和制造，在诸多大型音乐现场的专业音箱上广泛地使用，即使很小的声音也能远距离传播，保证了Bel的高品质的音乐再现。由于有9立升容积的箱体，仍然会取得足够的低音量感，可以表现更为广阔的音场，并实现稳定的回响和有深度的声音再现。音域广阔，音质柔美深邃。是Taguchi打造要让音箱像乐器一样发声的真实体现。</p>
                    </div>
                    <div class="main-content3 main-column pb60 nobackgroud">
                        <p class="content-title content3-title">音乐自由自往随心所欲</p>
                        <img class="mb57" src="../assets/images/BEL/3.png" alt="" srcset="" width="1080px" height="696px">
                        <p class="content-text">--Bel由于是无向扬声器，两只箱体可设置在任意的场所，相位极其准确。而且，你可以不受聆听位置所限，随意摆放，不论在哪个位置聆听，都是上佳立体声效果。你会感觉到声音不像是从箱体里发出的一样，整个空间都被声音包围。</p>
                    </div>
                    <div class="main-content3 main-column pb60 mb57">
                        <p class="content-title content3-title">典雅音乐空间的艺术佳品</p>
                        <img class="mb57" src="../assets/images/BEL/4.png" alt="" srcset="" width="1080px" height="660px">
                        <p class="content-text">--声音清晰安静，音色优美高雅，无论是演唱和演奏，都能让人感到就在现场的气息，这是Taguchi多年以来孜孜不倦地追求的忠实音质。美学设计的箱体，自然大方,可以融入任何空间设计，适用于所有生活场景。</p>
                    </div>
                    <div class="main-column main-content2 mb70">
                        <img class="mb70"  src="../assets/images/BEL/5.png" alt="" srcset="" width="1080px" height="638px">
                        <p class="content2-text">适用场所:客厅、起居室、书房、茶室、设计工作室、禅意空间、时尚会所。</p>
                        <p class="content2-text">主要案例:东京 SUZU CAFE、宋院南禅、紫云香舍</p>
                        <p class="content2-text"><span class="sign"></span> Taguch专利产品,采用北欧高品质木材,全部在日本手工制作的艺术佳品</p>
                    </div>
                    <div class="main-content3 main-column mb70 pb85">
                        <p class="content-title content3-title">用户感受</p>
                        <div class="main-row">
                            <img src="../assets/images/BEL/6.png" alt="" srcset="">
                            <ul class="content3-text pl35" style="width: 325px;">
                                <li>----<div class="content3-text_li">有像在眼前演奏那样的临场感。</div></li>
                                <li>----<div class="content3-text_li">每一个声音的细节都能听到。</div></li>
                                <li>----<div class="content3-text_li">音质优越，修身养心。</div></li>
                                <li>----<div class="content3-text_li">能够感觉到原来没有听到的声音，所以， 用各种CD来试。</div></li>
                                <li>----<div class="content3-text_li">想象不到这样小的音箱居然能从低音到高 音丰富地表现。</div></li>
                                <li>----<div class="content3-text_li">之前拥有的CD好像没听过一样。</div></li>
                                <li>----<div class="content3-text_li">在聆听中缓解了每天的压力。</div></li>
                                <li>----<div class="content3-text_li">整个空间像都被音乐包围了一样，不影响 和客人的交谈，可以很放松地服务顾客。</div></li>
                                <li>----<div class="content3-text_li">这款音箱缓解了外面刺耳的噪音。</div></li>
                                <li>----<div class="content3-text_li">一下子就让店里变得高大上了。</div></li>
                                <li>----<div class="content3-text_li">播放河流等环境的声音时，竟然和实际置 身与大自然之中是一样的。</div></li>
                            </ul>
                        </div>
                    </div>
                    <img class="mt120 mb120" src="../assets/images/BEL/main.png" alt="" srcset="" width="1200px" height="466px">
                </div>
            </div>
            <div class="little_bel"  v-if="pageid == 2">
                <div class="main-warp main-column">
                    <img class="mb85" src="../assets/images/Light2/1.png" alt="" srcset="" width="1080px" height="666px">
                    <div class="main-content3 main-column mb70 pb85">
                        <p class="content-title content3-title">犹如音乐家在眼前演奏一样</p>
                        <div class="main-row">
                            <img src="../assets/images/Light2/2.png" alt="" srcset="" width="600px" height="570px">
                            <p class="content3-text pl49">--Taguchi作为专业音箱生产厂家，运用其在专业音乐现场培育积累的技术和经验，开发出更加贴近生活空间的Little Bel。与传统的音箱相比，作为Bel的迷你版本--Little Bel完全是一个另类的音箱。它能再现极具空间感的优质声音，实现犹如音乐家在眼前演奏一样临场效果。比起用耳朵聆听来说，通过身体感受的声音，更让空间得以延伸、放松。</p>
                        </div>
                    </div>
                    <div class="main-content3 main-column mb85 nobackgroud">
                        <p class="content-title content3-title">水晶音质再现音乐</p>
                        <img class="mb57" src="../assets/images/Light2/3.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">--声音清晰且柔和，中高频的音色更为优美。小音量时也能清晰听见，可再现音乐的每一个细节。即使长时间聆听，耳朵也不会疲劳，也不会对人的交谈造成影响。箱体小巧，自然融入任何空间设计，适用于所有生活场景。</p>
                    </div>
                    <div class="main-content3 main-column mb70 pb85">
                        <p class="content-title content3-title">让音乐自由自在,随心所欲</p>
                        <img class="mb57" src="../assets/images/Light2/4.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">--传统的音箱通常有方向性，并而只有在两个音箱的中心点聆听，才能得到上佳的立体声效果。Little Bel由于是无向扬声器，两只箱体可以设置在任意的场所，而且，你可以不受聆听位置所限，随意摆放。你会感觉声音不像是从箱体里发出的一样，整个空间都被声音包围。</p>
                    </div>
                    <div class="main-column main-content2 mb70">
                        <img class="mb70"  src="../assets/images/Light2/5.png" alt="" srcset="" width="1080px" height="881px">
                        <p class="content2-text">适用场所: 书房、茶室、客厅、起居室、育儿室、禅意空间、时尚会所</p>
                        <p class="content2-text">生要案例:中国杯会所、宋院南禅、紫云香舍、【东西】会所</p>
                        <p class="content2-text"><span class="sign"></span> TAGUCH专利产品,采用北欧高品质木材,全部在日本手工制作的艺术佳品</p>
                    </div>
                    <img src="../assets/images/Light2/6.png" alt="" srcset="" width="1080px" height="860px">
                    <img class="mt120 mb120" src="../assets/images/Light2/main.png" alt="" srcset="" width="1200px" height="466px">
                </div>
            </div>
            <div class="bma-rx-80" v-if="pageid == 3">
                <div class="main-warp main-column">
                    <div class="main-column main-content1 mb70">
                        <img class="mb57" src="../assets/images/BMA-RX80/1.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">出色地呈现真实的声音，而又完全杜绝共鸣引起的各种噪声，被称之为安静、干净的音箱。<br> 其特点为：精美的外观，可挂可吊，360度无向发音，音域广阔，传递均匀，且温和自然，是时尚商业空间、艺术场馆、时尚会所的常客，更是Taguchi专业声景系列里应用广泛的产品之一。</p>
                    </div>
                    <div class="main-column pb85">
                        <div class="main-row mb57">
                            <img class="mr26" src="../assets/images/BMA-RX80/2.png" alt="" srcset="" width="342px" height="325px">
                            <img class="mr26" src="../assets/images/BMA-RX80/3.png" alt="" srcset="" width="342px" height="325px">
                            <img src="../assets/images/BMA-RX80/4.png" alt="" srcset="" width="342px" height="325px">
                        </div>
                        <p class="content-text" style="width: 100%;">安装方式：有吊挂型、壁挂型、吸顶型三种款式，用户可根据需要进行选择。</p>
                    </div>
                    <div class="main-column main-content1 mb70">
                        <img class="mb57" src="../assets/images/BMA-RX80/5.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text" style="width: 100%;">适用场所:背景音乐、音乐空间、艺术馆、时尚店铺<br> 主要案例: BLUE BOOKS CAFE、 BLUE NOTE爵士俱乐部、 BROOKLYN-PARLOR、 KATAOKA、 GALAXY</p>
                    </div>
                    <div class="main-column">
                        <img class="mb35" src="../assets/images/BMA-RX80/6.png" alt="" srcset="" width="1080px" height="500px">
                        <p class="mb35" style="width: 100%;"><span class="sign"></span>TAGUCH专利产品,采用北欧高品质木材,全部在日本手工制作的艺术佳品</p>
                        <img class="mb35" src="../assets/images/BMA-RX80/7.png" alt="" srcset="" width="1080px" height="621px">
                    </div>
                    <img class="mt120 mb120" src="../assets/images/BMA-RX80/main.png" alt="" srcset="" width="1200px" height="466px">
                </div>
            </div>
            <div class="rex-060" v-if="pageid == 4">
                <div class="main-warp main-column">
                    <div class="main-content3 main-column  pb49">
                        <p class="content-title content3-title">温和自然 均匀发声</p>
                        <img class="mb57" src="../assets/images/Rex-060/1.png" alt="" srcset="" width="940px" height="680px">
                        <p class="content-text">Rex-060 是Taguchi专业声景系列的主力产品之一，能细致地呈现真实的声音，而又完全杜绝共鸣引起的各种噪声，被称之为安静、干净的音箱。</p>
                    </div>
                    <div class="main-content3 main-column mb101 nobackgroud">
                        <p class="content-title content3-title">无形的优雅存在</p>
                        <img class="mb57" src="../assets/images/Rex-060/2.png" alt="" srcset="" width="920px" height="560px">
                        <p class="content-text">简约别致的艺术外观，安装采用天花嵌入式设计，360度无向发音，音域广阔且传递均匀，温和自然。是时尚商业空间、艺术场馆、时尚会所的常客。</p>
                    </div>
                    <div class="main-content3 main-column  pb60">
                        <p class="content-title content3-title">安装要求</p>
                        <img class="pb37" src="../assets/images/Rex-060/3.png" alt="" srcset="" width="920px" height="450px">
                        <p  class="content-text pb37" style="width: 100%;">天花开孔直径为108--120mm，深度需要150mm(最小)</p>
                        <img class="pb37" src="../assets/images/Rex-060/4.png" alt="" srcset="" width="950px" height="550px">
                        <p class="content-text" style="width: 100%;"><span class="sign"></span>TAGCHI专利产品，采用北欧高品质木材,全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <img class="mt120 mb120" src="../assets/images/Rex-060/main.png" alt="" srcset="" width="1200px" height="466px">
                </div>
            </div>
            <div class="bma-816r" v-if="pageid == 5">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <img class="mb70" src="../assets/images/BMA-816R/1.png" alt="" srcset="" width="1086px" height="420px">
                        <p class="content-text">从吊在天花板上的音箱发出的声音使让空间充满色彩，就像是一滴水落在宁静的湖面上，涟漪扩散开来。”搭载世界首先运用专利技术的宽频带，高输入平面振膜扬声器单元，音域广阔音质优异，极其出色的再现真实的声音，深受音乐家及音乐圈内人士的喜爱，是专业演出现场广泛应用的产品。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-bottom: 0;">
                        <img class="mb57" src="../assets/images/BMA-816R/2.png" alt="" srcset="" width="1080px" height="530px">
                        <p  class="content-text mb57" style="width: 100%;">独有的艺术造型，日本匠人精湛的制作工艺。 360度无向发音，音域广阔，传递均匀。</p>
                    </div>
                    <div class="main-column main-content1 mb57">
                        <img class="mb57" src="../assets/images/BMA-816R/3.png" alt="" srcset="" width="1080px" height="536px">
                        <p class="content-text" style="width: 100%;">适用场所:高端音乐空间、艺术场馆、时尚会所<br/>主要案例:东京 BLUE NOTE爵士俱乐部、104.5 CAFE<br/><span class="sign"></span>Taguchi专利产品,采用北欧高品质木材，全部在日本手工制作的艺术佳品</p>
                    </div>
                    <img  src="../assets/images/BMA-816R/4.png" alt="" srcset="" width="1080px" height="600px">
                    <img class="mt120 mb120" src="../assets/images/BMA-816R/main.png" alt="" srcset="" width="1200px" height="466px">
                </div>
            </div>
            <div class="cams0609" v-if="pageid == 6">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <img class="mb57" src="../assets/images/CAMS0609/1.png" alt="" srcset="" width="1080px" height="540px">
                        <p class="content-text">--CAMS0609是Taguchi结合多年以来在专业音响领域经验，运用Arched Array Flat Speaker System技术研制而成的。外观纤美秀丽，声音饱满圆润，有着丰富的音乐细节和令人惊异的临场感，是Taguchi定制产品中，深受好评的产品。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/CAMS0609/2.png" alt="" srcset="" width="1080px" height="650px">
                        <p class="content-text mb57">--外形秀丽修长，减少占用的空间面积，也比传统音箱更有优势。音场开阔、相位准确。人声通透饱满，钢琴的颗粒晶莹成形，配合同是采用平板扬声器单元的超低音音箱，大型古典音乐表现优异。可以满足资深音乐爱好者对音质的苛刻要求。</p>
                        <img class="mb35" src="../assets/images/CAMS0609/3.png" alt="" srcset="" width="1080px" height="650px">
                    </div>
                    <img class="mb20" src="../assets/images/CAMS0609/4.jpg" alt="" srcset="" width="1200px" height="680px">
                    <div class="main-column main-content1 mb80">
                        <img class="mb20" src="../assets/images/CAMS0609/5.png" alt="" srcset="" width="1080px" height="516px">
                        <img class="mb57" src="../assets/images/CAMS0609/6.png" alt="" srcset="" width="1080px" height="638px">
                        <p class="content-text">--单一箱体采用9只Taguchi独自研制的铝蜂窝振动膜片平板扬声器单元，保证了能够忠实地再现高音质的音乐。即使很小的声音，也能被清晰地传递出来。平面单元的应用，完满地证实了理论上的优越性，给人们带来惊喜。由于平面扬声器单元的运用，声音衰减低，声场会更加开阔。尤其适合较大的空间，如敞开式客厅、咖啡厅、餐吧、艺术馆等。</p>
                    </div>
                    <div class="main-column">
                        <div class="main-row mb57">
                            <img class="mr26" src="../assets/images/CAMS0609/7.png" alt="" srcset="" width="524px" height="648px">
                            <img src="../assets/images/CAMS0609/8.png" alt="" srcset="" width="524px" height="648px">
                        </div>
                        <p class="content-text" style="width: 100%;">适用场所: 私人影院、客厅、音乐空间、咖啡厅、艺术馆、时尚会所<br/>主要案例: BLUE BOTTLE COFFEE蓝瓶子咖啡<br/><span class="sign"></span>TAGUCHI专利产品,采用北欧高品质木材,全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <img class="mt120 mb120" src="../assets/images/CAMS0609/main.png" alt="" srcset="" width="1200px" height="466px">
                </div>
            </div>
            <div class="light-hanging" v-if="pageid == 7">
                <div class="main-warp main-column">
                    <img class="mb35" src="../assets/images/Light-Hanging/1.jpg" alt="" srcset="" width="1080px" height="420px">
                    <div class="main-content3 main-column mb35 pb49">
                        <p class="content-title content3-title">时尚的音箱 优雅存在</p>
                        <img class="mb57" src="../assets/images/Light-Hanging/2.jpg" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">背景音乐正如香氛的气息，是一种看不见的存在，给一成不变的日常带来新的生机和灵感。好的背景音乐是一个空间主题与观点的表达。Light系列的音箱设计充分考虑到了空间内人的自由移动，你不需要刻意坐下来，不论你在走动，还是与人交谈，不受方位的约束，都可以自由的聆听高品质的音乐。音乐的气息，像阳光一样扑面而来，自然而清澈。</p>
                    </div>
                    <div class="main-content3 main-column mb35 pb49 nobackgroud">
                        <p class="content-title content3-title">六面体发声设计 独有的艺术造型</p>
                        <img class="mb57" src="../assets/images/Light-Hanging/3.jpg" alt="" srcset="" width="1080px" height="700px">
                        <p class="content-text">六面体悬挂设计，让你感觉到新奇有趣。声音从上下、前后、左右，呈3维放射扩散，营造立体声音空间，演绎和谐舒适之音，使得整体空间产生共鸣。由于六个面都装有扬声器单元，Taguchi采用独有的扬声技术，在调低音量的时候，依然能保证您欣赏到清晰、纯净的高品质声音。</p>
                    </div>
                    <div class="main-content3 main-column mb85 pb49">
                        <p class="content-title content3-title">科技与时尚的融合</p>
                        <img class="mb57" src="../assets/images/Light-Hanging/4.jpg" alt="" srcset="" width="1080px" height="460px">
                        <p class="content-text mb57">Light 音箱系列作为Taguchi经典之作，小巧别致的造型，是时尚空间环境的重要元素。被众多商业场所和时尚设计空间广泛采用，适合咖啡馆、餐吧及商业店铺作为背景音乐来使用。<br/> 此款音箱设计悬挂型放置，声音会像阳光一样充满整个空间。您能够得到如同演奏者在面前演奏般的真实现场感，音箱能够非常忠实地再现女声，适合演绎乐器不多的音乐和人声，不适合演绎交响乐这样的大型音乐和表达低音较多的音乐。</p>
                        <img class="mb57" src="../assets/images/Light-Hanging/5.jpg" alt="" srcset="" width="1080px" height="560px">
                        <p class="content-text" style="width: 100%;">本款音箱可以选用单只立体声型，也可选用多只单声道型。</p>
                    </div>
                    <div class="main-content3 main-row  nobackgroud">
                        <img src="../assets/images/Light-Hanging/6.jpg" alt="" srcset="" width="460px" height="700px">
                        <div class="main-column pl56">
                            <ul class="main-content_ul mb101">
                                <li class="mb35 pt74"><div class="sign-title">适用场所：</div><div style="width: 320px;">书房、茶室、设计工作室、艺术空间、花艺及 时尚店铺。</div></li>
                                <li><div class="sign" style="vertical-align: 22px;"></div><div style="width: 387px;">Taguchi专利产品，采用北欧高品质木材，全部在日本 手工制作的艺术佳品。</div></li>
                            </ul>
                            <img src="../assets/images/Light-Hanging/7.jpg" alt="" srcset="" width="564px" height="406px">
                        </div>
                    </div>
                    <img class="mt120 mb120" src="../assets/images/Light-Hanging/main.jpg" alt="" srcset="" width="1200px" height="466px">
                </div>
            </div>
            <div class="light_place" v-if="pageid == 8">
                <div class="main-warp main-column">
                    <div class="main-content3 main-column pb60 mb70">
                        <img class="mb57" src="../assets/images/Light1/Light1_03.jpg" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">六面体全向音箱，玲珑别致。声音从上下、前后、左右，呈3维放射扩散，使得整体空间产生共鸣。由于六个面都装有扬声器单元，即使音量较小，也能欣赏到清晰纯净的声音。</p>
                    </div>
                    <img class="mb85" src="../assets/images/Light1/Light1_06.jpg" alt="" srcset="" width="1080px" height="560px">
                    <div class="main-content3 main-column pb60 nobackgroud">
                        <img class="mb57" src="../assets/images//Light1/Light1_08.jpg" alt="" srcset="" width="1080px" height="459px">
                        <p class="content-text">此款音箱能够得到 “像雕刻一样的声音”，如同演奏者近在咫尺，颇有现场感。可以非常完满地再现女声，适合演绎乐器不多的音乐和人声。不适合演绎交响乐这样的大型音乐和表达低音较多的音乐。</p>
                    </div>
                    <div class="main-content2 main-column mt100 pb60 nobackgroud">
                        <img class="mb57" src="../assets/images/Light1/Light1_10.jpg" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">本款音箱可以选用单只立体声型，也可选用多只单声道型。</p>
                    </div>
                    <div class="main-content3 main-row  pb85 pt85">
                        <img src="../assets/images/Light1/Light1_12.jpg" alt="" srcset="" width="460px" height="700px">
                        <div class="main-column pl56">
                            <ul class="main-content_ul mb101">
                                <li class="mb35 pt74"><div class="sign-title">适用场所：</div><div style="width: 320px;">书房、茶室、设计工作室、艺术空间、花艺及 时尚店铺。</div></li>
                                <li><div class="sign" style="vertical-align: 22px;"></div><div style="width: 387px;">Taguchi专利产品，采用北欧高品质木材，全部在日本 手工制作的艺术佳品。</div></li>
                            </ul>
                            <img src="../assets/images/Light1/Light1_15.jpg" alt="" srcset="" width="564px" height="406px">
                        </div>
                    </div>
                    <img class="mt120 mb120" src="../assets/images/Light1/Light1_main.png" alt="" srcset="" width="1200px" height="466px">
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
                if(id == 'Bel'){
                    this.pageid = 1
                }if (id == 'Little Bel') {
                    this.pageid = 2
                } if (id == 'BMA RX-80'){
                    this.pageid = 3
                }if (id == 'Rex-060'){
                    this.pageid = 4
                }if (id == 'BMA-816'){
                    this.pageid = 5
                }if (id == 'CAMS0609'){
                    this.pageid = 6
                }if (id == 'Light Hanging'){
                    this.pageid = 7
                }if (id == 'Light Standing'){
                    this.pageid = 8
                }
                window.scrollTo(0,0);
                console.log('111111====',id,this.pageid)
            }
        }
    }
</script>