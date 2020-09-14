<template>
    <div>
        <div class="nav-background">
            <img class="nav-background_img" v-if="pageid == 1" src="../assets/images/banner5.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 2" src="../assets/images/banner4.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 3" src="../assets/images/banner2.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 4" src="../assets/images/banner4.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 5" src="../assets/images/banner3.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 6" src="../assets/images/banner4.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 7" src="../assets/images/banner3.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 8" src="../assets/images/banner2.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 9" src="../assets/images/banner3.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 10" src="../assets/images/banner5.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 11" src="../assets/images/banner4.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 12" src="../assets/images/banner3.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 13" src="../assets/images/banner2.png" alt="" srcset="">
        </div>
        <div class="main">
            <div class="main-title">
                <img class="main-title_icon" src="../assets/images/mainTitle.png" alt="" srcset="" width="197px" height="28px">
                <div class="main-title_line"></div> 
            </div>
            <div class="major1" v-if="pageid == 1">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <p class="content-title content3-title" style="padding-top: 0;">会议厅</p>
                        <p class="content-text" style="width: 1057px;">--Taguchi独自开发的平面扬声器音箱系统，具有高精确的还原度，同时还具有小音量远距离传递的特点，且声音清晰，逼真，不吵不噪，非常适合高级会议厅使用。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>日本国会众议院</p>
                            <img src="../assets/images/banner2.png" alt="" srcset="" width="293px" height="66px">
                        </div>
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="672px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb20" style="width: 100%;">2002年1月制作，2016年改造。主会议厅中心音箱及外壳雕刻造型</p>
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="635px">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="646px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb20" style="width: 100%;">2016年国会主会议厅改造工程时的施工现场。</p>
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="760px">
                    </div>
                    <div class="main-column main-content1">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>时事通讯社</p>
                            <img src="../assets/images/banner2.png" alt="" srcset="" width="362px" height="66px">
                        </div>
                        <div class="main-row mb35">
                            <img class="mr51" src="../assets/images/banner3.png" alt="" srcset="" width="466px" height="600px">
                            <img src="../assets/images/banner3.png" alt="" srcset="" width="466px" height="600px">
                        </div>
                        <p class="content-text" style="width: 100%;">(2011年2月)总部多功能厅</p>
                    </div>
                </div>
            </div>
            <div class="major2" v-if="pageid == 2">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <p class="content-title content3-title" style="padding-top: 0;">音乐厅&剧院</p>
                        <p class="content-text" style="width: 1057px;">--音乐厅、剧院的扩声既要保证语言清晰可变，又要让音乐能悦耳动听，特别是要保证原来的声音风貌，需要对声音高度的忠实表现。Taguchi音箱在音乐还原上具有很强的优势，被日本多家音乐厅和剧场采用。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>SUNTORY 音乐厅 (2007)</p>
                        </div>
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="605px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>东京歌剧城武满纪念音乐厅(世界音乐厅TOP10 2007)</p>
                        </div>
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="679px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>东京新国立剧场(2014) CMX1312系统</p>
                        </div>
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="517px">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="517px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>剧团四季旗下的“自由”剧场、“春”剧场、“秋”剧场、“海”剧场</p>
                        </div>
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="824px">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="688px">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="703px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>国立文乐剧场 (2008年12月)</p>
                        </div>
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="592px">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="568px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>国立剧场OKINAWA (2009年10月)</p>
                        </div>
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="661px">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="603px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>东京艺术大学奏乐堂 (2007年6月)</p>
                        </div>
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="702px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>大阪艺术大学 (2009年9月)</p>
                        </div>
                        <div class="main-row">
                            <img class="mr30" src="../assets/images/banner3.png" alt="" srcset="" width="525px" height="419px">
                            <img src="../assets/images/banner3.png" alt="" srcset="" width="525px" height="419px">
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>Garaman Hall (2016年6月)</p>
                        </div>
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="648px">
                    </div>
                </div>
            </div>
            <div class="major3" v-if="pageid == 3">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <p class="content-title content3-title" style="padding-top: 0;">音乐俱乐部</p>
                        <p class="content-text" style="width: 1057px;">Taguchi塔古奇革命性的音响效果，在2016年落成的VENT TOKYO电音俱乐部达到前所未有的高度，重新定义了音乐体验。塔古奇研发出世界上第一个创新型扬声器，具有巧妙的细节和适度的混响，是具有室内声学效果的音响系统。它的高分辨率和让耳朵愉悦的自然声音，能直接传递艺术家的表现。而通常使用的传统的声音系统是难以展现的，这引起世界的瞩目。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>东京Blue Note 爵士俱乐部 (2013年6月)</p>
                        </div>
                        <div class="main-column" style="padding: 0 ;">
                            <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="720px">
                            <div class="main-row">
                                <img class="mr30" src="../assets/images/banner3.png" alt="" srcset="" width="355px" height="494px">
                                <img src="../assets/images/banner3.png" alt="" srcset="" width="696px" height="494px">
                            </div>
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>VENT TOKYO电音俱乐部 (高品质音质世界瞩目2016年9月)</p>
                        </div>
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="503px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="613px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="720px">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="718px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>STUDIO COAST 音乐俱乐部 (2010)</p>
                        </div>
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="657px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="722px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="720px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="631px">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="719px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>Kamakura Jazz Club DAPHNE爵士俱乐部 (2014年5月)</p>
                        </div>
                        <div class="main-row business">
                            <img src="../assets/images/banner3.png" alt="" srcset="" width="469px" height="469px">
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>西班牙Ibiza岛电音俱乐部 (2013年4月) 通过日本先锋公司提供</p>
                        </div>
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="620px">
                    </div>
                </div>
            </div>
            <div class="major4" v-if="pageid == 4">
                <div class="main-warp main-column">
                    咖啡厅&餐吧
                </div>
            </div>
            <div class="major5" v-if="pageid == 5">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <p class="content-title content3-title" style="padding-top: 0;">音乐空间&音乐建筑</p>
                        <p class="content-text" style="width: 1057px;">Taguchi塔古奇音箱以其极其出色的音乐表现，深受音乐家和音乐爱好者的喜爱。闻名亚洲的音响杂志《HIVI》对音乐建筑KATAOKA GALAXY进行了专访报道</p>
                    </div> 
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>KATAOKA GALAXY (2014年11月)</p>
                        </div>
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="720px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="720px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="720px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="720px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="1095px">
                        <div class="main-row">
                            <img class="mr35" src="../assets/images/banner3.png" alt="" srcset="" width="485px" height="794px">
                            <img src="../assets/images/banner3.png" alt="" srcset="" width="563px" height="794px">
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>Venus Records维纳斯唱R片公司</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">2007年12月，采用Taguchi塔古奇G828-SOC音箱系统</p>
                        <img class="mb70" src="../assets/images/banner3.png" alt="" srcset="" width="878px" height="487px">
                        <img  src="../assets/images/banner3.png" alt="" srcset="" width="580px" height="580px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>SOUND STUDIO NOAH音乐工作室 (2014年4月、6月)</p>
                        </div>
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="960px" height="960px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>ODEN STUDIO音乐工作室 (2013年3月)</p>
                        </div>
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1003px" height="94px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>Music Inn Yamanakako山中湖录音棚 (2003年4月)</p>
                        </div>
                        <div class="main-row business">
                            <img class="pl13" src="../assets/images/banner3.png" alt="" srcset="" width="389px" height="541px">
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>KOZA MUSIC TOWN音乐小镇 (2008年2月)</p>
                        </div>
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="720px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="808px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="810px">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="820px">
                    </div>
                </div>
            </div>
            <div class="major6" v-if="pageid == 6">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <p class="content-title content3-title" style="padding-top: 0;">电影院</p>
                        <p class="content-text" style="width: 1057px;">Taguchi塔古奇认为电影院要让人一坐到电椅子上，就能感到现场、感觉到电影的气息，即使衣服摩擦的声音也会让人像起鸡皮疙瘩一样，大吃一惊。2018年新建成的UP LINK电影院全部采用Taguchi塔古奇专为影院研制的音箱，是世界上首先采用平面扬声器的影院，以其极为出色的音质而享誉世界。</p>
                    </div> 
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>UP LINK 电影院 (2018年12月)</p>
                        </div>
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="722px">
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="984px">
                        <p class="content-text">《ProAVLAsia》杂志的专题报道</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="810px">
                        <p class="content-text">Taguchi塔古奇开发的影院重低音音箱</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="810px">
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="734px">
                        <p class="content-text">强大无比的平面扬声器</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="1654px">
                        <p class="content-text">媒体热烈评价</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="878px">
                        <p class="content-text">Taguchi塔古奇Light音箱</p>
                    </div>
                    <div class="main-column main-content1 mb70" style="padding-top: 50px;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>YOKOHAMA电影节2009</p>
                        </div>
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="520px" height="694px">
                    </div>
                    <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="811px">
                </div>
            </div>
            <div class="major7" v-if="pageid == 7">
                <div class="main-warp main-column">
                    时尚品牌店
                </div>
            </div>
            <div class="major8" v-if="pageid == 8">
                <div class="main-warp main-column">
                    美术馆&博物馆
                </div>
            </div>
            <div class="major9" v-if="pageid == 9">
                <div class="main-warp main-column">
                    寺院&禅意空间 
                </div>
            </div>
            <div class="major10" v-if="pageid == 10">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <p class="content-title content3-title" style="padding-top: 0;">体育场馆&公共设施</p>
                        <p class="content-text" style="width: 1057px;">以下为采用Taguchi塔古奇音箱的部分公共设施</p>
                    </div> 
                    <div class="main-column main-content1 nobackgroud" style="width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>新泻足球场 (2000年2月)</p>
                        </div>
                        <div class="main-row business mb35">
                            <img src="../assets/images/banner3.png" alt="" srcset="" width="474px" height="308px">
                        </div>
                        <div class="main-row business">
                            <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="693px">
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>长野奥林匹克运动场 (1998年4月)</p>
                        </div>
                        <div class="main-row business mb35">
                            <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="810px">
                        </div>
                        <div class="main-row business">
                            <img src="../assets/images/banner3.png" alt="" srcset="" width="734px" height="510px">
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>出云巨蛋体育场 (2005年2月)</p>
                        </div>
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="780px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>日本环球影城 (2012年5月)</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">园内及部分游乐设施使用的特制音箱</p>
                        <div class="main-row business">
                            <img src="../assets/images/banner3.png" alt="" srcset="" width="736px" height="550px">
                        </div>
                    </div>
                </div>
            </div>
            <div class="major11" v-if="pageid == 11">
                <div class="main-warp main-column">
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>SOUND FESTA 2016 日本专业音响展 (2016年6月)</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">Taguchi塔古奇作为日本唯一参加的大型音箱制造商,展示发布最新产品。</p>
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="714px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="715px">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="715px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>米兰设计周Citizen馆 (2015&2016)</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">Taguchi塔古奇为 Citizen西铁城公司提供全套音箱系统。</p>
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="629px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="721px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="720px">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="720px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>米兰设计周Panasonic馆 (2015&2016)</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">Taguchi塔古奇为松下公司提供全套音箱系统。</p>
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="607px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="745px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="1436px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="1329px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="1424px">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="567px">
                    </div>
                </div>
            </div>
            <div class="major12" v-if="pageid == 12">
                <div class="main-warp main-column">
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>日本未来科学馆</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">2004年7月，导入CMX1309音箱系统；2006年9月，导入KIRAI 無指向性音箱系统</p>
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="866px">
                        <div class="main-row business">
                            <img src="../assets/images/banner3.png" alt="" srcset="" width="756px" height="1002px">
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>京都大学工学部生存圈研究所</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">2006年10月，Taguchi塔古奇制作的高层大气监测RSS雷达用狭向声音系统</p>
                        <div class="main-row business mb35">
                            <img src="../assets/images/banner3.png" alt="" srcset="" width="546px" height="792px">
                        </div>
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="669px">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="1040px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>红牛公司</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">2013年8月，为RED BULL JAPAN声音学院特制的平面扬声器系统</p>
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="788px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="810px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="810px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="810px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="810px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="810px">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="810px">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="810px">
                    </div>
                </div>
            </div>
            <div class="major13" v-if="pageid == 13">
                <div class="main-warp main-column">
                    酒店&商厦
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
                if(id == 'major1'){
                    this.pageid = 1
                }if (id == 'major2') {
                    this.pageid = 2
                } if (id == 'major3'){
                    this.pageid = 3
                }if (id == 'major4'){
                    this.pageid = 4
                }if (id == 'major5'){
                    this.pageid = 5
                }if (id == 'major6'){
                    this.pageid = 6
                }if (id == 'major7'){
                    this.pageid = 7
                }if (id == 'major8'){
                    this.pageid = 8
                }if (id == 'major9'){
                    this.pageid = 9
                }if (id == 'major10'){
                    this.pageid = 10
                }if (id == 'major11'){
                    this.pageid = 11
                }if (id == 'major12'){
                    this.pageid = 12
                }if (id == 'major13'){
                    this.pageid = 13
                }
                window.scrollTo(0,0);
            }
        }
    }
</script>