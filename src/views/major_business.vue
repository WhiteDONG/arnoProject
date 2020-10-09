<template>
    <div>
        <div class="nav-background">
            <img class="nav-background_img" v-if="pageid == 1" src="../assets/images/major-huiyi/huiyi_01.jpg" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 2" src="../assets/images/major-juyuan/juyuan_01.jpg" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 3" src="../assets/images/major-julebu/julebu_01.jpg" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 4" src="../assets/images/major-kafei/kafei_01.jpg" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 5" src="../assets/images/major-jianzhu/jianzhu_01.jpg" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 6" src="../assets/images/major-dianyy/dianyy_01.jpg" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 7" src="../assets/images/major-shishang/shishang_01.jpg" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 8" src="../assets/images/major-bowuguan/bowuguan_01.jpg" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 9" src="../assets/images/major-simiao/banner.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 10" src="../assets/images/major-sheshi/sheshi_01.jpg" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 11" src="../assets/images/major-yishu/yishu_01.jpg" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 12" src="../assets/images/major-keyan/keyan_01.jpg" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 13" src="../assets/images/major-shangsha/shangsha_01.jpg" alt="" srcset="">
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
                            <img src="../assets/images/major-huiyi/Baidu IME_2015-1-27_11-34-13.png" alt="" srcset="" width="293px" height="66px">
                        </div>
                        <img src="../assets/images/major-huiyi/huiyi_04.jpg" alt="" srcset="" width="1080px" height="672px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb20" style="width: 100%;">2002年1月制作，2016年改造。主会议厅中心音箱及外壳雕刻造型</p>
                        <img class="mb35" src="../assets/images/major-huiyi/huiyi_07.jpg" alt="" srcset="" width="1080px" height="635px">
                        <img src="../assets/images/major-huiyi/huiyi_09.jpg" alt="" srcset="" width="1080px" height="646px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <p class="content-text mb20" style="width: 100%;">2016年国会主会议厅改造工程时的施工现场。</p>
                        <img src="../assets/images/major-huiyi/huiyi_11.jpg" alt="" srcset="" width="1080px" height="760px">
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>时事通讯社</p>
                            <img src="../assets/images/major-huiyi/225px-Jiji_Press_logo.svg.png" alt="" srcset="" width="362px" height="64px">
                        </div>
                        <img class="mb35" src="../assets/images/major-huiyi/huiyi_13.jpg" alt="" srcset="" width="1080px" height="600px">
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
                        <img src="../assets/images/major-juyuan/juyuan_02.jpg" alt="" srcset="" width="1080px" height="605px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>东京歌剧城武满纪念音乐厅(世界音乐厅TOP10 2007)</p>
                        </div>
                        <img src="../assets/images/major-juyuan/juyuan_03.jpg" alt="" srcset="" width="1080px" height="679px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>东京新国立剧场(2014) CMX1312系统</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-juyuan/juyuan_04.jpg" alt="" srcset="" width="1080px" height="517px">
                        <img src="../assets/images/major-juyuan/juyuan_05.jpg" alt="" srcset="" width="1080px" height="517px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>剧团四季旗下的“自由”剧场、“春”剧场、“秋”剧场、“海”剧场</p>
                        </div>
                        <img class="mb57" src="../assets/images/major-juyuan/juyuan_06.jpg" alt="" srcset="" width="1080px" height="824px">
                        <img class="mb57" src="../assets/images/major-juyuan/juyuan_07.jpg" alt="" srcset="" width="1080px" height="688px">
                        <img src="../assets/images/major-juyuan/juyuan_08.jpg" alt="" srcset="" width="1080px" height="703px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>国立文乐剧场 (2008年12月)</p>
                        </div>
                        <img class="mb57" src="../assets/images/major-juyuan/juyuan_09.jpg" alt="" srcset="" width="1080px" height="592px">
                        <img src="../assets/images/major-juyuan/juyuan_10.jpg" alt="" srcset="" width="1080px" height="568px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>国立剧场OKINAWA (2009年10月)</p>
                        </div>
                        <img class="mb57" src="../assets/images/major-juyuan/juyuan_11.jpg" alt="" srcset="" width="1080px" height="661px">
                        <img src="../assets/images/major-juyuan/juyuan_12.jpg" alt="" srcset="" width="1080px" height="603px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>东京艺术大学奏乐堂 (2007年6月)</p>
                        </div>
                        <img src="../assets/images/major-juyuan/juyuan_13.jpg" alt="" srcset="" width="1080px" height="702px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>大阪艺术大学 (2009年9月)</p>
                        </div>
                        <img src="../assets/images/major-juyuan/juyuan_14.jpg" alt="" srcset="" width="1080px" height="419px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>Garaman Hall (2016年6月)</p>
                        </div>
                        <img src="../assets/images/major-juyuan/juyuan_15.jpg" alt="" srcset="" width="1080px" height="648px">
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
                            <img class="mb35" src="../assets/images/major-julebu/julebu_06.jpg" alt="" srcset="" width="1080px" height="720px">
                            <img class="mb35" src="../assets/images/major-julebu/julebu_15.jpg" alt="" srcset="" width="1080px" height="494px">
                           
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>VENT TOKYO电音俱乐部 (高品质音质世界瞩目2016年9月)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-julebu/julebu_21.jpg" alt="" srcset="" width="1080px" height="503px">
                        <img class="mb35" src="../assets/images/major-julebu/julebu_27.jpg" alt="" srcset="" width="1080px" height="613px">
                        <img class="mb35" src="../assets/images/major-julebu/julebu_33.jpg" alt="" srcset="" width="1080px" height="720px">
                        <img src="../assets/images/major-julebu/julebu_39.jpg" alt="" srcset="" width="1080px" height="718px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>STUDIO COAST 音乐俱乐部 (2010)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-julebu/julebu_45.jpg" alt="" srcset="" width="1080px" height="657px">
                        <img class="mb35" src="../assets/images/major-julebu/julebu_51.jpg" alt="" srcset="" width="1080px" height="722px">
                        <img class="mb35" src="../assets/images/major-julebu/julebu_57.jpg" alt="" srcset="" width="1080px" height="720px">
                        <img class="mb35" src="../assets/images/major-julebu/julebu_63.jpg" alt="" srcset="" width="1080px" height="631px">
                        <img src="../assets/images/major-julebu/julebu_69.jpg" alt="" srcset="" width="1080px" height="719px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>Kamakura Jazz Club DAPHNE爵士俱乐部 (2014年5月)</p>
                        </div>
                        <div class="main-row business">
                            <img src="../assets/images/major-julebu/julebu_75.jpg" alt="" srcset="" width="1080px" height="469px">
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>西班牙Ibiza岛电音俱乐部 (2013年4月) 通过日本先锋公司提供</p>
                        </div>
                        <img src="../assets/images/major-julebu/julebu_81.jpg" alt="" srcset="" width="1080px" height="620px">
                    </div>
                </div>
            </div>
            <div class="major4" v-if="pageid == 4">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <p class="content-title content3-title" style="padding-top: 0;">咖啡厅&餐吧</p>
                        <p class="content-text" style="width: 1057px;">咖啡、餐厅、酒吧,一直就是和音乐紧密联系在一起的,没有音乐的咖啡不可想象。 Taguchi一直以来助力咖啡厅和餐吧,研发专门适合这类场所的产品。 Taguchi的音箱不噪不吵,声音清晰舒适,不会影响人的交谈,更不会让耳朵产生疲劳。而时尚的造型更能提升空间的格调和品味。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>Blue Bottle Coffee 蓝瓶子咖啡 (2015-2016)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-kafei/kafei_04.jpg" alt="" srcset="" width="1080px" height="801px">
                        <img class="mb20" src="../assets/images/major-kafei/kafei_10.jpg" alt="" srcset="" width="1080px" height="720px">
                        <p class="content-text mb57">Taguchi塔古奇CAMS0609音箱</p>
                        <img class="mb35" src="../assets/images/major-kafei/kafei_16.jpg" alt="" srcset="" width="1080px" height="720px">
                        <img class="mb20" src="../assets/images/major-kafei/kafei_22.jpg" alt="" srcset="" width="1080px" height="722px">
                        <p class="content-text mb57">Taguchi塔古奇Light音箱</p>
                        <img class="mb20" src="../assets/images/major-kafei/kafei_28.jpg" alt="" srcset="" width="1080px" height="722px">
                        <p class="content-text mb57">Taguchi塔古奇BMA-805D音箱</p>
                        <img class="mb20" src="../assets/images/major-kafei/kafei_34.jpg" alt="" srcset="" width="1080px" height="719px">
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>Brooklyn parlor 大阪、札幌 (2015年1月)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-kafei/kafei_40.jpg" alt="" srcset="" width="1080px" height="721px">
                        <img class="mb35" src="../assets/images/major-kafei/kafei_46.jpg" alt="" srcset="" width="1080px" height="721px">
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>104.5 Café(2013年1月)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-kafei/kafei_52.jpg" alt="" srcset="" width="1080px" height="507px">
                        <img class="mb20" src="../assets/images/major-kafei/kafei_58.jpg" alt="" srcset="" width="1080px" height="541px">
                        <p class="content-text">Taguchi塔古奇BMA-816音箱</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>BACKYARD(2013年8月)</p>
                        </div>
                        <img class="mb20" src="../assets/images/major-kafei/kafei_64.jpg" alt="" srcset="" width="1080px" height="720px">
                        <p class="content-text mb57">Taguchi塔古奇RX-80音箱</p>
                        <img class="mb20" src="../assets/images/major-kafei/kafei_70.jpg" alt="" srcset="" width="1080px" height="808px">
                        <p class="content-text">Taguchi塔古奇BMA 802音箱</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>BLUE BOOKS Café(2013年6月,2014年9月)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-kafei/kafei_76.jpg" alt="" srcset="" width="1080px" height="517px">
                        <img class="mb20" src="../assets/images/major-kafei/kafei_82.jpg" alt="" srcset="" width="1080px" height="873px">
                        <p class="content-text mb57">Taguchi塔古奇RX 80音箱</p>
                        <img class="mb20" src="../assets/images/major-kafei/kafei_88.jpg" alt="" srcset="" width="1080px" height="749px">
                        <p class="content-text">Taguchi塔古奇Light音箱</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>SUZU CAFÉ(2011年9月)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-kafei/kafei_94.jpg" alt="" srcset="" width="1080px" height="840px">
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>广州科学家咖啡馆(2017年8月)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-kafei/kafei_100.jpg" alt="" srcset="" width="1080px" height="822px">
                        <img class="mb20" src="../assets/images/major-kafei/kafei_106.jpg" alt="" srcset="" width="1080px" height="998px">
                        <p class="content-text">Taguchi塔古奇Light音箱</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>The Great Jorney(2016年9月)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-kafei/kafei_112.jpg" alt="" srcset="" width="1080px" height="721px">
                        <img class="mb35" src="../assets/images/major-kafei/kafei_118.jpg" alt="" srcset="" width="1080px" height="705px">
                        <img class="mb20" src="../assets/images/major-kafei/kafei_124.jpg" alt="" srcset="" width="1080px" height="721px">
                        <p class="content-text">Taguchi塔古奇Light音箱</p>
                    </div>

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
                        <img class="mb35" src="../assets/images/major-jianzhu/jianzhu_04.jpg" alt="" srcset="" width="1080px" height="720px">
                        <img class="mb35" src="../assets/images/major-jianzhu/jianzhu_10.jpg" alt="" srcset="" width="1080px" height="720px">
                        <img class="mb35" src="../assets/images/major-jianzhu/jianzhu_16.jpg" alt="" srcset="" width="1080px" height="720px">
                        <img class="mb35" src="../assets/images/major-jianzhu/jianzhu_22.jpg" alt="" srcset="" width="1080px" height="720px">
                        <img class="mb35" src="../assets/images/major-jianzhu/jianzhu_28.jpg" alt="" srcset="" width="1080px" height="1095px">
                        <img src="../assets/images/major-jianzhu/jianzhu_34.jpg" alt="" srcset="" width="1080px" height="794px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>Venus Records维纳斯唱R片公司</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">2007年12月，采用Taguchi塔古奇G828-SOC音箱系统</p>
                        <img class="mb70" src="../assets/images/major-jianzhu/jianzhu_40.jpg" alt="" srcset="" width="1080px" height="487px">
                        <img  src="../assets/images/major-jianzhu/jianzhu_46.jpg" alt="" srcset="" width="1080px" height="580px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>SOUND STUDIO NOAH音乐工作室 (2014年4月、6月)</p>
                        </div>
                        <img src="../assets/images/major-jianzhu/jianzhu_52.jpg" alt="" srcset="" width="1080px" height="960px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>ODEN STUDIO音乐工作室 (2013年3月)</p>
                        </div>
                        <img src="../assets/images/major-jianzhu/jianzhu_58.jpg" alt="" srcset="" width="1080px" height="94px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>Music Inn Yamanakako山中湖录音棚 (2003年4月)</p>
                        </div>
                        <div class="main-row business">
                            <img class="pl13" src="../assets/images/major-jianzhu/jianzhu_64.jpg" alt="" srcset="" width="1080px" height="541px">
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>KOZA MUSIC TOWN音乐小镇 (2008年2月)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-jianzhu/jianzhu_70.jpg" alt="" srcset="" width="1080px" height="720px">
                        <img class="mb35" src="../assets/images/major-jianzhu/jianzhu_76.jpg" alt="" srcset="" width="1080px" height="808px">
                        <img class="mb35" src="../assets/images/major-jianzhu/jianzhu_82.jpg" alt="" srcset="" width="1080px" height="810px">
                        <img src="../assets/images/major-jianzhu/jianzhu_88.jpg" alt="" srcset="" width="1080px" height="820px">
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
                        <img class="mb35" src="../assets/images/major-dianyy/dianyy_04.jpg" alt="" srcset="" width="1080px" height="722px">
                        <img class="mb20" src="../assets/images/major-dianyy/dianyy_08.jpg" alt="" srcset="" width="1080px" height="984px">
                        <p class="content-text">《ProAVLAsia》杂志的专题报道</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <img class="mb20" src="../assets/images/major-dianyy/dianyy_12.jpg" alt="" srcset="" width="1080px" height="810px">
                        <p class="content-text">Taguchi塔古奇开发的影院重低音音箱</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <img class="mb20" src="../assets/images/major-dianyy/dianyy_15.jpg" alt="" srcset="" width="1080px" height="810px">
                        <img class="mb20" src="../assets/images/major-dianyy/dianyy_18.jpg" alt="" srcset="" width="1080px" height="734px">
                        <p class="content-text">强大无比的平面扬声器</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <img class="mb20" src="../assets/images/major-dianyy/dianyy_21.jpg" alt="" srcset="" width="1080px" height="1654px">
                        <p class="content-text">媒体热烈评价</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <img class="mb20" src="../assets/images/major-dianyy/dianyy_24.jpg" alt="" srcset="" width="1080px" height="878px">
                        <p class="content-text">Taguchi塔古奇Light音箱</p>
                    </div>
                    <div class="main-column main-content1 mb70" style="padding-top: 50px;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>YOKOHAMA电影节2009</p>
                        </div>
                        <img src="../assets/images/major-dianyy/dianyy_26.jpg" alt="" srcset="" width="1080px" height="684px">
                    </div>
                    <img src="../assets/images/major-dianyy/dianyy_29.jpg" alt="" srcset="" width="1080px" height="811px">
                </div>
            </div>
            <div class="major7" v-if="pageid == 7">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <p class="content-title content3-title" style="padding-top: 0;">时尚品牌店</p>
                        <p class="content-text" style="width: 1057px;">Taguchi塔古奇一直以来都和众多国际时尚品牌保持合作, MIUMIU,STÜSSY, THE NORTH FACE等店铺全部采用塔古奇 TAGUCHI的产品,D&G、GUCCI、Dior等时尚品牌的新品发布会,都是指定使用 TAGUCHI塔古奇的音箱。2015年还与STUSSY联名推岀特制音箱。</p>
                    </div> 
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>THE NORTH FACE (2009年4月)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-shishang/shishang_04.jpg" alt="" srcset="" width="1080px" height="360px">
                        <img class="mb35" src="../assets/images/major-shishang/shishang_10.jpg" alt="" srcset="" width="1080px" height="684px">
                        <img class="mb35" src="../assets/images/major-shishang/shishang_16.jpg" alt="" srcset="" width="1080px" height="720px">
                        <img class="mb35" src="../assets/images/major-shishang/shishang_22.jpg" alt="" srcset="" width="1080px" height="1159px">
                        <p class="content-text">Taguchi塔古奇 Light音箱</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>STÜSSY (2011年7月/2015年11月)</p>
                        </div>
                        <img class="mb70" src="../assets/images/major-shishang/shishang_28.jpg" alt="" srcset="" width="1080px" height="624px">
                        <p class="content-text mb20" style="width: 100%;">2015年Taguchi塔古奇与STÜSSY联名推出特制音箱。</p>
                        <img class="mb35" src="../assets/images/major-shishang/shishang_34.jpg" alt="" srcset="" width="1080px" height="719px">
                        <img class="mb35" src="../assets/images/major-shishang/shishang_40.jpg" alt="" srcset="" width="1080px" height="703px">
                        <img class="mb35" src="../assets/images/major-shishang/shishang_46.jpg" alt="" srcset="" width="1080px" height="717px">
                        <img class="mb35" src="../assets/images/major-shishang/shishang_52.jpg" alt="" srcset="" width="1080px" height="721px">
                        <img class="mb35" src="../assets/images/major-shishang/shishang_58.jpg" alt="" srcset="" width="1080px" height="810px">
                        <p class="content-text">Taguchi塔古奇 Light音箱</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>MIUMIU (2009年8月)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-shishang/shishang_64.jpg" alt="" srcset="" width="1080px" height="810px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>NUBIAN 原宿</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">Taguchi塔古奇为 NUBIAN公司制作的音箱</p>
                        <img class="mb35" src="../assets/images/major-shishang/shishang_70.jpg" alt="" srcset="" width="1080px" height="811px">
                        <img class="mb35" src="../assets/images/major-shishang/shishang_76.jpg" alt="" srcset="" width="1080px" height="820px">
                        <img class="mb35" src="../assets/images/major-shishang/shishang_82.jpg" alt="" srcset="" width="1080px" height="1322px">
                        <img class="mb35" src="../assets/images/major-shishang/shishang_88.jpg" alt="" srcset="" width="1080px" height="1165px">
                        <img class="mb35" src="../assets/images/major-shishang/shishang_94.jpg" alt="" srcset="" width="1080px" height="1440px">
                        <img class="mb35" src="../assets/images/major-shishang/shishang_100.jpg" alt="" srcset="" width="1080px" height="1307px">
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>其他与 Taguchi塔古奇合作的时尚品牌</p>
                        </div>
                        <img class="mb20" src="../assets/images/major-shishang/shishang_106.jpg" alt="" srcset="" width="1080px" height="735px">
                        <p class="content-text mb35" style="width: 42%;">D&G</p>
                        <img class="mb20" src="../assets/images/major-shishang/shishang_112.jpg" alt="" srcset="" width="1080px" height="416px">
                        <p class="content-text mb35" style="width: 42%;">Dior</p>
                        <img class="mb20" src="../assets/images/major-shishang/shishang_118.jpg" alt="" srcset="" width="1080px" height="509px">
                        <p class="content-text" style="width: 42%;">GUCCI</p>
                    </div>

                </div>
            </div>
            <div class="major8" v-if="pageid == 8">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <p class="content-title content3-title" style="padding-top: 0;">美术馆&博物馆</p>
                        <p class="content-text" style="width: 1057px;">Taguchi塔古奇音箱清晰、干净、非常适合美术馆、博物馆。</p>
                    </div> 
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>国立西洋美术馆 (2008)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-bowuguan/bowuguan_04.jpg" alt="" srcset="" width="1080px" height="810px">
                        <img class="mb35" src="../assets/images/major-bowuguan/bowuguan_10.jpg" alt="" srcset="" width="1080px" height="856px">
                        <img class="mb35" src="../assets/images/major-bowuguan/bowuguan_16.jpg" alt="" srcset="" width="1080px" height="790px">
                        <img class="mb35" src="../assets/images/major-bowuguan/bowuguan_22.jpg" alt="" srcset="" width="1080px" height="662px">
                        <img class="mb35" src="../assets/images/major-bowuguan/bowuguan_28.jpg" alt="" srcset="" width="1080px" height="1621px">
                        <img class="mb35" src="../assets/images/major-bowuguan/bowuguan_34.jpg" alt="" srcset="" width="1080px" height="1072px">
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>東京現代美術館 (2009)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-bowuguan/bowuguan_40.jpg" alt="" srcset="" width="1080px" height="716px">
                        <img class="mb20" src="../assets/images/major-bowuguan/bowuguan_46.jpg" alt="" srcset="" width="1080px" height="717px">
                        <img class="mb20" src="../assets/images/major-bowuguan/bowuguan_52.jpg" alt="" srcset="" width="1080px" height="717px">
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>美秀美术馆 (2009年4月)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-bowuguan/bowuguan_58.jpg" alt="" srcset="" width="1080px" height="540px">
                        <img class="mb20" src="../assets/images/major-bowuguan/bowuguan_64.jpg" alt="" srcset="" width="1080px" height="721px">
                        <img class="mb20" src="../assets/images/major-bowuguan/bowuguan_70.jpg" alt="" srcset="" width="1080px" height="1384px">
                        <img class="mb20" src="../assets/images/major-bowuguan/bowuguan_76.jpg" alt="" srcset="" width="1080px" height="718px">
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>感觉博物馆 (2010年8月)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-bowuguan/bowuguan_82.jpg" alt="" srcset="" width="1080px" height="385px">
                        <img class="mb20" src="../assets/images/major-bowuguan/bowuguan_88.jpg" alt="" srcset="" width="1080px" height="720px">
                        <img class="mb20" src="../assets/images/major-bowuguan/bowuguan_94.jpg" alt="" srcset="" width="1080px" height="706px">
                        <img class="mb20" src="../assets/images/major-bowuguan/bowuguan_100.jpg" alt="" srcset="" width="1080px" height="707px">
                        <img class="mb20" src="../assets/images/major-bowuguan/bowuguan_106.jpg" alt="" srcset="" width="1080px" height="565px">
                    </div>
                </div>
            </div>
            <div class="major9" v-if="pageid == 9">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <p class="content-title content3-title" style="padding-top: 0;">寺院&禅意空间</p>
                        <p class="content-text" style="width: 1057px;">寺院和禅意空间这样的场所安静,肃穆,要求声音清晰、不吵不噪,更要保持相当高的忠实性,不能影响声音原有的风貌。同时,外观要和环境融为一体,不能有半点违和感。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text">Taguchi塔古奇定制音箱</p>
                        </div>
                        <div style="width: 100%;">
                            <img class="mb35" src="../assets/images/major-simiao/1.png" alt="" srcset="" width="240px" height="278px">
                        </div>
                        <div style="width: 100%;">
                            <img class="mb35" src="../assets/images/major-simiao/2.png" alt="" srcset="" width="600px" height="450px">
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>西本愿寺 御影堂 (2009)、阿弥陀堂 (2012)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-simiao/3.png" alt="" srcset="" width="1080px" height="720px">
                        <img class="mb35" src="../assets/images/major-simiao/4.png" alt="" srcset="" width="1080px" height="682px">
                        <img class="mb70" src="../assets/images/major-simiao/5.png" alt="" srcset="" width="1080px" height="720px">
                        <p class="content-text mb20" style="width: 100%;">Taguchi塔古奇定制音箱。</p>
                        <img class="mb35" src="../assets/images/major-simiao/6.png" alt="" srcset="" width="1080px" height="743px">
                        <img class="mb35" src="../assets/images/major-simiao/7.png" alt="" srcset="" width="1080px" height="729px">
                        <img class="mb35" src="../assets/images/major-simiao/8.png" alt="" srcset="" width="1080px" height="733px">
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>筑地本愿寺 本堂 (2004)</p>
                        </div>
                        <div class="mb35" style="width: 100%;">
                            <img src="../assets/images/major-simiao/9.png" alt="" srcset="" width="621px" height="466px">
                        </div>
                        <p class="content-text mb20" style="width: 100%;">Taguchi塔古奇定制音箱。</p>
                        <div class="main-row mb35">
                            <img style="margin-right: 33px;" src="../assets/images/major-simiao/10.png" alt="" srcset="" width="507px" height="665px">
                            <img src="../assets/images/major-simiao/11.png" alt="" srcset="" width="540px" height="665px">
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>宋院南禅 (2017年2019年)</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">Taguchi塔古奇Bel音箱</p>
                        <img class="mb70" src="../assets/images/major-simiao/13.png" alt="" srcset="" width="1080px" height="1080px">
                        <p class="content-text mb20" style="width: 100%;">Taguchi塔古奇Littel Bel音箱</p>
                        <img class="mb35" src="../assets/images/major-simiao/14.png" alt="" srcset="" width="1080px" height="1080px">
                        <img class="mb70" src="../assets/images/major-simiao/15.png" alt="" srcset="" width="1080px" height="1486px">
                        <p class="content-text mb20" style="width: 100%;">Taguchi塔古奇Littel音箱</p>
                        <img class="mb70" src="../assets/images/major-simiao/16.png" alt="" srcset="" width="1080px" height="1616px">
                        <p class="content-text mb20" style="width: 100%;">Taguchi塔古奇RX-80音箱</p>
                        <img class="mb35" src="../assets/images/major-simiao/17.png" alt="" srcset="" width="1080px" height="821px">
                        <img class="mb70" src="../assets/images/major-simiao/18.png" alt="" srcset="" width="1080px" height="721px">
                        <p class="content-text mb20" style="width: 100%;">Taguchi塔古奇BMA-816音箱</p>
                        <img class="mb35" src="../assets/images/major-simiao/19.png" alt="" srcset="" width="1080px" height="1807px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>紫云香舍 (2016年2月)</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">Taguchi塔古奇Littel Bel音箱</p>
                        <div class="mb35"  style="width: 100%;">
                            <img src="../assets/images/major-simiao/20.png" alt="" srcset="" width="892px" height="945px">
                        </div>
                        <img class="mb35" src="../assets/images/major-simiao/21.png" alt="" srcset="" width="1080px" height="810px">
                        <div class="main-row mb35">
                            <img style="margin-right: 41px;" src="../assets/images/major-simiao/22.png" alt="" srcset="" width="513px" height="773px">
                            <img src="../assets/images/major-simiao/23.png" alt="" srcset="" width="526px" height="773px">
                        </div>
                        <img class="mb35" src="../assets/images/major-simiao/24.png" alt="" srcset="" width="1080px" height="1441px">
                        <img class="mb35" src="../assets/images/major-simiao/25.png" alt="" srcset="" width="1080px" height="810px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>【东西】 会所 (2018年4月)</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">Taguchi塔古奇Littel Bel音箱</p>
                        <img class="mb35" src="../assets/images/major-simiao/26.png" alt="" srcset="" width="1080px" height="1089px">
                        <img class="mb70" src="../assets/images/major-simiao/27.png" alt="" srcset="" width="1080px" height="905px">
                        <p class="content-text mb20" style="width: 100%;">Taguchi塔古奇Littel Bel音箱</p>
                        <img class="mb35" src="../assets/images/major-simiao/28.png" alt="" srcset="" width="1080px" height="982px">
                        <img class="mb35" src="../assets/images/major-simiao/29.png" alt="" srcset="" width="1080px" height="1244px">
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>【今古今】 日日食堂 (2014年10月)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-simiao/30.png" alt="" srcset="" width="1080px" height="722px">
                        <img class="mb35" src="../assets/images/major-simiao/31.png" alt="" srcset="" width="1080px" height="718px">
                        <img class="mb35" src="../assets/images/major-simiao/32.png" alt="" srcset="" width="1080px" height="716px">
                        <img class="mb35" src="../assets/images/major-simiao/33.png" alt="" srcset="" width="1080px" height="722px">
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>【素梦子】 古茶屋 (2005年7月)</p>
                        </div>
                        <div class="main-row mb35">
                            <img style="margin-right: 24px;" src="../assets/images/major-simiao/34.png" alt="" srcset="" width="649px" height="490px">
                            <img  src="../assets/images/major-simiao/35.png" alt="" srcset="" width="407px" height="490px">
                        </div>
                        <div class="main-row mb35">
                            <img style="margin-right: 27px;" src="../assets/images/major-simiao/36.png" alt="" srcset="" width="536px" height="389px">
                            <img  src="../assets/images/major-simiao/37.png" alt="" srcset="" width="517px" height="389px">
                        </div>
                        <img class="mb35" src="../assets/images/major-simiao/38.png" alt="" srcset="" width="1080px" height="637px">
                        <img class="mb35" src="../assets/images/major-simiao/39.png" alt="" srcset="" width="1080px" height="810px">
                        <img class="mb35" src="../assets/images/major-simiao/40.png" alt="" srcset="" width="1080px" height="810px">
                        <img class="mb35" src="../assets/images/major-simiao/41.png" alt="" srcset="" width="1080px" height="720px">
                    </div>
                    
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
                            <img src="../assets/images/major-sheshi/sheshi_04.jpg" alt="" srcset="" width="1080px" height="308px">
                        </div>
                        <div class="main-row business">
                            <img src="../assets/images/major-sheshi/sheshi_10.jpg" alt="" srcset="" width="1080px" height="693px">
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>长野奥林匹克运动场 (1998年4月)</p>
                        </div>
                        <div class="main-row business mb35">
                            <img src="../assets/images/major-sheshi/sheshi_16.jpg" alt="" srcset="" width="1080px" height="810px">
                        </div>
                        <div class="main-row business">
                            <img src="../assets/images/major-sheshi/sheshi_22.jpg" alt="" srcset="" width="1080px" height="510px">
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>出云巨蛋体育场 (2005年2月)</p>
                        </div>
                        <img src="../assets/images/major-sheshi/sheshi_28.jpg" alt="" srcset="" width="1080px" height="780px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>日本环球影城 (2012年5月)</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">园内及部分游乐设施使用的特制音箱</p>
                        <div class="main-row business">
                            <img src="../assets/images/major-sheshi/sheshi_34.jpg" alt="" srcset="" width="1080px" height="550px">
                        </div>
                    </div>
                </div>
            </div>
            <div class="major11" v-if="pageid == 11">
                <div class="main-warp main-column">
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>SOUND FESTA 2016 日本专业音响展 (2016年6月)</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">Taguchi塔古奇作为日本唯一参加的大型音箱制造商,展示发布最新产品。</p>
                        <img class="mb35" src="../assets/images/major-yishu/yishu_04.jpg" alt="" srcset="" width="1080px" height="714px">
                        <img class="mb35" src="../assets/images/major-yishu/yishu_10.jpg" alt="" srcset="" width="1080px" height="715px">
                        <img src="../assets/images/major-yishu/yishu_16.jpg" alt="" srcset="" width="1080px" height="715px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>米兰设计周Citizen馆 (2015&2016)</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">Taguchi塔古奇为 Citizen西铁城公司提供全套音箱系统。</p>
                        <img class="mb35" src="../assets/images/major-yishu/yishu_22.jpg" alt="" srcset="" width="1080px" height="629px">
                        <img class="mb35" src="../assets/images/major-yishu/yishu_28.jpg" alt="" srcset="" width="1080px" height="721px">
                        <img class="mb35" src="../assets/images/major-yishu/yishu_34.jpg" alt="" srcset="" width="1080px" height="720px">
                        <img src="../assets/images/major-yishu/yishu_40.jpg" alt="" srcset="" width="1080px" height="720px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>米兰设计周Panasonic馆 (2015&2016)</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">Taguchi塔古奇为松下公司提供全套音箱系统。</p>
                        <img class="mb35" src="../assets/images/major-yishu/yishu_46.jpg" alt="" srcset="" width="1080px" height="607px">
                        <img class="mb35" src="../assets/images/major-yishu/yishu_52.jpg" alt="" srcset="" width="1080px" height="745px">
                        <img class="mb35" src="../assets/images/major-yishu/yishu_58.jpg" alt="" srcset="" width="1080px" height="1436px">
                        <img class="mb35" src="../assets/images/major-yishu/yishu_64.jpg" alt="" srcset="" width="1080px" height="1329px">
                        <img class="mb35" src="../assets/images/major-yishu/yishu_70.jpg" alt="" srcset="" width="1080px" height="1424px">
                        <img src="../assets/images/major-yishu/yishu_76.jpg" alt="" srcset="" width="1080px" height="567px">
                    </div>
                </div>
            </div>
            <div class="major12" v-if="pageid == 12">
                <div class="main-warp main-column">
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>日本未来科学馆</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">2004年7月，导入CMX1309音箱系统；2006年9月，导入KIRAI 無指向性音箱系统</p>
                        <img class="mb35" src="../assets/images/major-keyan/keyan_04.jpg" alt="" srcset="" width="1080px" height="866px">
                        <div class="main-row business">
                            <img src="../assets/images/major-keyan/keyan_10.jpg" alt="" srcset="" width="756px" >
                        </div>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>京都大学工学部生存圈研究所</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">2006年10月，Taguchi塔古奇制作的高层大气监测RSS雷达用狭向声音系统</p>
                        <div class="main-row business mb35">
                            <img src="../assets/images/major-keyan//keyan_16.jpg" alt="" srcset="" width="1080px" height="792px">
                        </div>
                        <img class="mb35" src="../assets/images/major-keyan/keyan_22.jpg" alt="" srcset="" width="1080px" height="669px">
                        <img src="../assets/images/major-keyan/keyan_28.jpg" alt="" srcset="" width="1080px" height="1040px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>红牛公司</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">2013年8月，为RED BULL JAPAN声音学院特制的平面扬声器系统</p>
                        <img class="mb35" src="../assets/images/major-keyan/keyan_34.jpg" alt="" srcset="" width="1080px" height="788px">
                        <img class="mb35" src="../assets/images/major-keyan/keyan_40.jpg" alt="" srcset="" width="1080px" height="810px">
                        <img class="mb35" src="../assets/images/major-keyan/keyan_46.jpg" alt="" srcset="" width="1080px" height="810px">
                        <img class="mb35" src="../assets/images/major-keyan/keyan_52.jpg" alt="" srcset="" width="1080px" height="810px">
                        <img class="mb35" src="../assets/images/major-keyan/keyan_58.jpg" alt="" srcset="" width="1080px" height="810px">
                        <img class="mb35" src="../assets/images/major-keyan/keyan_64.jpg" alt="" srcset="" width="1080px" height="810px">
                        <img class="mb35" src="../assets/images/major-keyan/keyan_70.jpg" alt="" srcset="" width="1080px" height="810px">
                        <img src="../assets/images/major-keyan/keyan_76.jpg" alt="" srcset="" width="1080px" height="810px">
                    </div>
                </div>
            </div>
            <div class="major13" v-if="pageid == 13">
                <div class="main-warp main-column">
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>表参道之丘 (安藤忠雄作品)</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">2006年2月, Taguchi塔古奇设计制作中央阶梯不锈钢特制音箱</p>
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_04.jpg" alt="" srcset="" width="1080px" height="656px">
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_07.jpg" alt="" srcset="" width="1080px" height="693px">
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_10.jpg" alt="" srcset="" width="1080px" height="1260px">
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_16.jpg" alt="" srcset="" width="1080px" height="810px">
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_22.jpg" alt="" srcset="" width="1080px" height="909px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>Hotel Koe Tokyo</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">日本Stripe时尚集团邀请衣、食、住三个行业的创意人士, 围绕"Stay&Art", "Fashion" 和 "Music" 三大主题, 共同打造的时尚设计酒店,采用Taguchi塔古奇特制音箱。</p>
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_28.jpg" alt="" srcset="" width="1080px" height="808px">
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_34.jpg" alt="" srcset="" width="1080px" height="1080px">
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_40.jpg" alt="" srcset="" width="1080px" height="812px">
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_46.jpg" alt="" srcset="" width="1080px" height="721px">
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_52.jpg" alt="" srcset="" width="1080px" height="810px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>里兹卡尔顿东京酒店宴会厅</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">2007年1月, 导入Taguchi塔古奇CX1309音箱系统</p>
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_58.jpg" alt="" srcset="" width="1080px" height="1236px">
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_64.jpg" alt="" srcset="" width="1080px" height="608px">
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_70.jpg" alt="" srcset="" width="1080px" height="674px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>CLASKA 设计酒店 (2008)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_76.jpg" alt="" srcset="" width="1080px" height="811px">
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_82.jpg" alt="" srcset="" width="1080px" height="649px">
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_88.jpg" alt="" srcset="" width="1080px" height="720px">
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_94.jpg" alt="" srcset="" width="1080px" height="720px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <div class="main-row mb20 business">
                            <p class="content-text"><span class="sign"></span>东京格兰贝尔设计酒店 (2013)</p>
                        </div>
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_100.jpg" alt="" srcset="" width="1080px" height="743px">
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_106.jpg" alt="" srcset="" width="1080px" height="540px">
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_112.jpg" alt="" srcset="" width="1080px" height="810px">
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <p class="content-text business mb10"><span class="sign"></span>丸井新宿本馆</p>
                        <p class="content-text pl13 mb20" style="width: 100%;">2009年5月, 与东京艺术大学合作完成</p>
                        <img class="mb35" src="../assets/images/major-shangsha/shangsha_118.jpg" alt="" srcset="" width="1080px" height="819px">
                    </div>
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