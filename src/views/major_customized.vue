<template>
    <div>
        <div class="nav-background">
            <img class="nav-background_img" v-if="pageid == 1" src="../assets/images/banner2.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 2" src="../assets/images/banner4.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 3" src="../assets/images/banner5.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 4" src="../assets/images/banner3.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 5" src="../assets/images/banner4.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 6" src="../assets/images/banner5.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 7" src="../assets/images/banner3.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 8" src="../assets/images/banner2.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 9" src="../assets/images/banner3.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 10" src="../assets/images/banner5.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 11" src="../assets/images/banner3.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 12" src="../assets/images/banner4.png" alt="" srcset="">
        </div>
        <div class="main">
            <div class="main-title">
                <img class="main-title_icon" src="../assets/images/mainTitle.png" alt="" srcset="" width="197px" height="28px">
                <div class="main-title_line"></div> 
            </div>
            <div class="F612T4" v-if="pageid == 1">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="506px">
                        <p class="content-text">--F612-T4是F-616的升级版。F-616音箱是Taguchi专业定制中，好评最多的产品。音场开阔、相位准确。人声通透饱满，钢琴的颗粒晶莹成形，中频的能量丰富，配合同是采用平板扬声器单元的超低音音箱，大型古典音乐表现优异，可以满足您对音质的苛刻要求。以音质而闻名的东京VENT音乐俱乐部就是采用了同款产品。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">--F612-T4对原来F-616音箱进行了革新，体积减小了一半，造型更加优美秀丽。改用4只气动式高音外加12只3吋全频单元，大大增强了超高频的延伸，高音更具穿透力，空气感十足。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="530px">
                        <p class="content-text mb35" style="width: 100%;">适用场所：本产品适合较大的空间，如音乐俱乐部、私人影院、音乐空间、咖啡厅、餐吧、艺术馆、时尚会所、别墅。</p>
                        <p class="content-text mb35" style="width: 100%;">主要案例：东京VENT电音俱乐部（以高品质的音质而闻名于世）。</p>
                        <p class="content-text" style="width: 100%;"><span class="sign"></span>Taguchi专利产品, 采用北欧高品质木材, 全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <div class="main-footer mt120 mb120">
                        <div class="main-footer_warp">
                            <p class="main-footer_title">主要规格：</p>
                            <ul class="main-footer_list">
                                <li>阻 抗: <span class="main-footer_txtcolor">6Ω</span></li>
                                <li>输出音压水平(感度): <span class="main-footer_txtcolor">93db(w/m)</span></li>
                                <li>额定输入功率: <span class="main-footer_txtcolor">240W</span></li>
                                <li>频率响应: <span class="main-footer_txtcolor">95Hz~25kHz</span></li>
                                <li>尺 寸: <span class="main-footer_txtcolor">H1145mm X W85mm X D100mm</span></li>
                                <li>重 量: <span class="main-footer_txtcolor">6.3Kg</span></li>
                            </ul>
                        </div>
                        <img class="main-footer_icon pr207" src="../assets/images/banner5.png" alt="" srcset="" width="200px" height="292px">
                    </div>
                </div>
            </div>
            <div class="MA1603TW" v-if="pageid == 2">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="506px">
                        <p class="content-text" style="width: 100%;">Taguchi针对小型商业空间和艺术场地，开发出MA1603-TW微系统，由四组音箱和低音部分组成，采用平面扬声器单元，延续Taguchi音箱一贯的高保真音质。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="750px">
                        <p class="content-text mb57" style="width: 100%;">非常适合Party、艺术活动、酒会等等。可以固定在墙壁的四周，也可以在空旷的场地，用支架临时固定，使用灵活方便。</p>
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="707px">
                        <p class="content-text" style="width: 100%;"><span class="sign"></span>Taguchi专利产品, 采用北欧高品质木材, 全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <div class="main-column main-content1 mb35">
                        <div class="main-row">
                            <img class="mr56" src="../assets/images/banner3.png" alt="" srcset="" width="510px" height="662px">
                            <img src="../assets/images/banner3.png" alt="" srcset="" width="510px" height="662px">
                        </div>
                    </div>
                </div>
            </div>
            <div class="F80123001" v-if="pageid == 3">
                <div class="main-warp main-column">
                    <div class="main-column main-content1 mb35">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="643px">
                        <p class="content-text" style="width: 100%;">--这是Taguchi非常成功的音箱系列，有着极其出色的声音品质，而且使用灵活方便，不用的时候，可以收纳起来，并可以更具用户的需求来设计，颜色可以定制。</p>
                    </div>
                    <img class="mb80" src="../assets/images/banner4.png" alt="" srcset="" width="1080px" height="734px">
                    <div class="main-warp main-column">
                        <div class="main-column main-content1 mb35 nobackgroud" style="padding-top: 0;">
                            <div class="main-row">
                                <img class="mr75" src="../assets/images/banner4.png" alt="" srcset="" width="506px" height="656px">
                                <img src="../assets/images/banner4.png" alt="" srcset="" width="506px" height="656px">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="CAMS0609" v-if="pageid == 4">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="540px">
                        <p class="content-text">--CAMS0609是Taguchi结合多年以来在专业音响领域经验，运用Arched Array Flat Speaker System技术研制而成的。外观纤美秀丽，声音饱满圆润，有着丰富的音乐细节和令人惊异的临场感，是Taguchi定制产品中，深受好评的产品。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="650px">
                        <p class="content-text mb57">--外形秀丽修长，减少占用的空间面积，也比传统音箱更有优势。音场开阔、相位准确。人声通透饱满，钢琴的颗粒晶莹成形，配合同是采用平板扬声器单元的超低音音箱，大型古典音乐表现优异。可以满足资深音乐爱好者对音质的苛刻要求。</p>
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="650px">
                    </div>
                    <img class="mb20" src="../assets/images/banner4.png" alt="" srcset="" width="1200px" height="680px">
                    <div class="main-column main-content1 mb80">
                        <img class="mb20" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="516px">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="638px">
                        <p class="content-text">--单一箱体采用9只Taguchi独自研制的铝蜂窝振动膜片平板扬声器单元，保证了能够忠实地再现高音质的音乐。即使很小的声音，也能被清晰地传递出来。平面单元的应用，完满地证实了理论上的优越性，给人们带来惊喜。由于平面扬声器单元的运用，声音衰减低，声场会更加开阔。尤其适合较大的空间，如敞开式客厅、咖啡厅、餐吧、艺术馆等。</p>
                    </div>
                    <div class="main-column">
                        <div class="main-row mb57">
                            <img class="mr26" src="../assets/images/banner4.png" alt="" srcset="" width="524px" height="648px">
                            <img src="../assets/images/banner4.png" alt="" srcset="" width="524px" height="648px">
                        </div>
                        <p class="content-text" style="width: 100%;">适用场所: 私人影院、客厅、音乐空间、咖啡厅、艺术馆、时尚会所<br/>主要案例: BLUE BOTTLE COFFEE蓝瓶子咖啡<br/><span class="sign"></span>TAGUCHI专利产品,采用北欧高品质木材,全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <div class="main-footer mt120 mb120">
                        <div class="main-footer_warp">
                            <p class="main-footer_title">主要规格：</p>
                            <ul class="main-footer_list">
                                <li>阻 抗: <span class="main-footer_txtcolor">8Ω</span></li>
                                <li>输出音压水平（感度）: <span class="main-footer_txtcolor">87db (w/m)</span></li>
                                <li>额定输入功率: <span class="main-footer_txtcolor">135W</span></li>
                                <li>频率响应: <span class="main-footer_txtcolor">88Hz~20kHz</span></li>
                                <li>尺 寸: <span class="main-footer_txtcolor">H872mm X W84mm X D113mm</span></li>
                                <li>重 量: <span class="main-footer_txtcolor">5.2Kg</span></li>
                            </ul>
                        </div>
                        <img class="main-footer_icon pr207" src="../assets/images/banner5.png" alt="" srcset="" width="200px" height="292px">
                    </div>
                </div>
            </div>
            <div class="LFT2501" v-if="pageid == 5">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1086px" height="506px">
                        <p class="content-text" style="width: 100%;">--LFT-2501是Taguchi开发的小型平板超低音音箱，体积虽小，却有着澎湃的动力和优异的音质。<br/> 平面单元在超低音域方面的优异表现, 深沉迅速、鲜明的超低音域超出人们的预期, 与从前相比, 由于有效驱动面积增大, 使得单元的尺寸大大缩小，并且，实现了快速响应，较小的相位差和时间差，更加清晰的呈现低音域。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1086px" height="500px">
                        <p class="content-text mb57" style="width: 100%;">--厚度仅为18.5公分的超薄箱体，可以立式摆放在地面上，也可壁挂在墙上，使得空间的利用和置放更加灵活和随意，即便是您已经装修好的房子，不会由于家庭影院的导入而破坏美感，让您尽享科技和艺术的精彩。<br/>--该产品可以按客户装修设计的风格，挑选合适的颜色，也可以添加不同色彩的网罩，将扬声器隐藏起来。</p>
                        <img src="../assets/images/banner5.png" alt="" srcset="" width="1080px" height="644px">
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="672px">
                        <p class="content-text" style="width: 100%;"><span class="sign"></span>Taguchi专利产品, 采用北欧高品质木材, 全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <div class="main-footer mt120 mb120">
                        <div class="main-footer_warp">
                            <p class="main-footer_title">主要规格：</p>
                            <ul class="main-footer_list">
                                <li>阻 抗: <span class="main-footer_txtcolor">8Ω</span></li>
                                <li>输入功率: <span class="main-footer_txtcolor">500W (RMS) 1000W(MUS)</span></li>
                                <li>频率特征: <span class="main-footer_txtcolor">25Hz~600kHz</span></li>
                                <li>尺 寸: <span class="main-footer_txtcolor">H600mm X W300mm X D185mm</span></li>
                                <li>重 量: <span class="main-footer_txtcolor">17Kg</span></li>
                            </ul>
                        </div>
                        <img class="main-footer_icon pr207" src="../assets/images/banner5.png" alt="" srcset="" width="200px" height="292px">
                    </div> 
                </div>
            </div>
            <div class="AR1304" v-if="pageid == 6">
                <div class="main-warp main-column">
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="520px">
                        <p class="content-text">AR-1304是Taguchi为中小型空间的娱乐活动而研发设计。Taguchi将Arched Array 专业技术运用于该系列产品，单体搭载4只T 130mm低频单元和16只高频单元，输入功率达到320W，完全不用担心过激的大动态音乐，使得1304有着更多的应用场景。除了HI-END级别的音乐欣赏以外，也非常适用于卡拉OK演唱、家庭影院、小型演奏会等等。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1005px" height="595px">
                        <p class="content-text">AR-1304无论是纯音乐的乐器演奏还是轻柔曼妙的人声歌唱，亦或是振奋激昂的交响乐，各种音乐的表现都同样出色，创作者的作品可以让聆听者以更好的方式欣赏，更深刻地体会到作品的艺术魅力。配合AR-3801的15寸低音音箱,让AR系列究极的音乐表现力得到更为充分的发挥。向每一个不妥协于音质的人，提供一个真实、纯粹、专业级的舒适空间。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="993px" height="562px">
                        <p class="content-text">TAGUCHI一贯坚持“像制作乐器一样制作音响”，绝不妥协音质的制造理念，在AR-1304身上得到充分地展现。无论是纯音乐的乐器演奏还是人声歌唱，各种音乐的表现都同样悦耳动听，可以让人更贴切自由地体会到音乐家的艺术魅力。从容大气的声音、更多的音乐细节、更加丰富的层次和更为宽阔的音场。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="669px">
                        <p class="content-text" style="width: 100%;">适用场所：AR-1304是Taguchi为中小型空间的娱乐活动而研发设计，用于卡拉OK、家庭影院、小型演唱会和高水准音乐空间、时尚会所。<br/><span class="sign"></span>Taguchi专利产品, 采用北欧高品质木材, 全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <div class="main-footer mt120 mb120">
                        <div class="main-footer_warp">
                            <p class="main-footer_title">主要规格：</p>
                            <ul class="main-footer_list">
                                <li>阻 抗: <span class="main-footer_txtcolor">8Ω</span></li>
                                <li>输入功率: <span class="main-footer_txtcolor">320W</span></li>
                                <li>频率特征: <span class="main-footer_txtcolor">85Hz~45kHz</span></li>
                                <li>效 率: <span class="main-footer_txtcolor">92db 1W/1m</span></li>
                                <li>尺 寸: <span class="main-footer_txtcolor">H264mm X W575mm X D220mm</span></li>
                                <li>重 量: <span class="main-footer_txtcolor">10.6Kg</span></li>
                            </ul>
                        </div>
                        <img class="main-footer_icon pr207" src="../assets/images/banner5.png" alt="" srcset="" width="200px" height="292px">
                    </div>
                </div>
            </div>
            <div class="AR1302" v-if="pageid == 7">
                <div class="main-warp main-column">
                    <div class="main-column main-content1 nobackgroud" >
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1200px" height="709px">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1200px" height="709px">
                        <p class="content-text mb35">--作为AR-1304的简缩版，AR-1302同样出色，由于体积小，更适合家庭娱乐使用。可以作为卡拉OK、家庭影院、音乐鉴赏使用。需要配合同系列AR-3801的15寸低音音箱，让音乐更加悦耳动听。</p>
                        <p class="content-text"> 适用场所：家庭客厅、私人影院、时尚会所</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <img class="mb35" src="../assets/images/banner3.png" alt="" srcset="" width="1200px" height="709px">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1200px" height="709px">
                        <p class="content-text" style="width: 100%;"><span class="sign"></span>Taguchi专利产品, 采用北欧高品质木材, 全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <div class="main-footer mt120 mb120">
                        <div class="main-footer_warp">
                            <p class="main-footer_title">主要规格：</p>
                            <ul class="main-footer_list">
                                <li>阻 抗: <span class="main-footer_txtcolor">4Ω</span></li>
                                <li>输入功率: <span class="main-footer_txtcolor">160W</span></li>
                                <li>频率特征: <span class="main-footer_txtcolor">85Hz~45kHz</span></li>
                                <li>效 率: <span class="main-footer_txtcolor">89db 1W/1m</span></li>
                                <li>尺 寸: <span class="main-footer_txtcolor">H264mm X W404mm X D210mm</span></li>
                                <li>重 量: <span class="main-footer_txtcolor">6.3Kg</span></li>
                            </ul>
                        </div>
                        <img class="main-footer_icon pr207" src="../assets/images/banner5.png" alt="" srcset="" width="200px" height="292px">
                    </div>
                </div>
            </div>
            <div class="AR3801" v-if="pageid == 8">
                <div class="main-warp main-column">
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1200px" height="521px">
                        <p class="content-text">--作为配合AR-1304和AR-1302一起使用的低音音箱，AR-3801的表现同样出色，它的声音深沉、自然，均匀地布满整个空间。体积更小，放置更加灵活，适合小一些的空间使用，是家庭娱乐的首选。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1200px" height="452px">
                        <p class="content-text" style="width: 100%;"><span class="sign"></span>Taguchi专利产品, 采用北欧高品质木材, 全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <div class="main-footer mt120 mb120">
                        <div class="main-footer_warp">
                            <p class="main-footer_title">主要规格：</p>
                            <ul class="main-footer_list">
                                <li>阻 抗: <span class="main-footer_txtcolor">8Ω</span></li>
                                <li>输入功率: <span class="main-footer_txtcolor">600W</span></li>
                                <li>频率特征: <span class="main-footer_txtcolor">38Hz~1800Hz</span></li>
                                <li>效 率: <span class="main-footer_txtcolor">97db 1W/1m</span></li>
                                <li>尺 寸: <span class="main-footer_txtcolor">H570mm X W404mm X D488mm</span></li>
                                <li>重 量: <span class="main-footer_txtcolor">24.5Kg</span></li>
                            </ul>
                        </div>
                        <img class="main-footer_icon pr207" src="../assets/images/banner5.png" alt="" srcset="" width="200px" height="292px">
                    </div>
                </div>
            </div>
            <div class="CGB602" v-if="pageid == 9">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="460px">
                        <p class="content-text mb35" style="width: 100%;">--CGB-602-F是Taguchi为家庭影院而开发设计的平板反射音箱，用于环绕声道的使用。</p>
                        <p class="content-text" >--设置方式为天花吊顶侧边处，扬声器单元的朝向为天花的顶棚，利用顶棚的反射，来取得环绕声场。由于音箱的侧面为不规则的五边形，可以调整与天花的角度为40°、50°两种选择。</p>
                    </div>
                    <div class="main-column main-content1" style="padding-top: 0;">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="700px">
                        <p class="content-text mb35" style="width: 100%;">--由于音箱小巧可以完全隐藏至天花灯槽内，所以，可以保持空间外观设计的整洁效果。</p>
                    </div>
                    <div class="main-column main-content1" style="padding-top: 0;">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="731px">
                        <p class="content-text mb35" style="width: 100%;">适用场所：家庭影院环绕声、客厅背景音乐。<br/><span class="sign"></span>Taguchi专利产品, 采用北欧高品质木材, 全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <div class="main-footer mt120 mb120">
                        <div class="main-footer_warp">
                            <p class="main-footer_title">主要规格：</p>
                            <ul class="main-footer_list">
                                <li>阻 抗: <span class="main-footer_txtcolor">4Ω</span></li>
                                <li>输入功率: <span class="main-footer_txtcolor">40W (RMS) 80W(MUS)</span></li>
                                <li>频率特征: <span class="main-footer_txtcolor">90Hz~20kHz</span></li>
                                <li>效 率: <span class="main-footer_txtcolor">84db 1W/1m</span></li>
                                <li>尺 寸: <span class="main-footer_txtcolor">H200mm X W90mm X D109mm</span></li>
                                <li>重 量: <span class="main-footer_txtcolor">0.8Kg</span></li>
                            </ul>
                        </div>
                        <img class="main-footer_icon pr207" src="../assets/images/banner5.png" alt="" srcset="" width="200px" height="292px">
                    </div>
                </div>
            </div>
            <div class="BMARX80" v-if="pageid == 10">
                <div class="main-warp main-column">
                    <div class="main-column main-content1 mb70">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">出色地呈现真实的声音，而又完全杜绝共鸣引起的各种噪声，被称之为安静、干净的音箱。<br> 其特点为：精美的外观，可挂可吊，360度无向发音，音域广阔，传递均匀，且温和自然，是时尚商业空间、艺术场馆、时尚会所的常客，更是Taguchi专业声景系列里应用广泛的产品之一。</p>
                    </div>
                    <div class="main-column pb85">
                        <div class="main-row mb57">
                            <img src="../assets/images/banner2.png" alt="" srcset="" width="342px" height="325px">
                            <img class="mr26" src="../assets/images/banner2.png" alt="" srcset="" width="342px" height="325px">
                            <img class="mr26" src="../assets/images/banner2.png" alt="" srcset="" width="342px" height="325px">
                        </div>
                        <p>安装方式：有吊挂型、壁挂型、吸顶型三种款式，用户可根据需要进行选择。</p>
                    </div>
                    <div class="main-column main-content1 mb70">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text" style="width: 100%;">适用场所:背景音乐、音乐空间、艺术馆、时尚店铺<br> 主要案例: BLUE BOOKS CAFE、 BLUE NOTE爵士俱乐部、 BROOKLYN-PARLOR、 KATAOKA、 GALAXY</p>
                    </div>
                    <div class="main-column">
                        <img class="mb35" src="../assets/images/banner2.png" alt="" srcset="" width="1080px" height="500px">
                        <p class="mb35" style="width: 100%;"><span class="sign"></span>TAGUCH专利产品,采用北欧高品质木材,全部在日本手工制作的艺术佳品</p>
                        <img class="mb35" src="../assets/images/banner2.png" alt="" srcset="" width="1080px" height="621px">
                    </div>
                    <div class="main-footer mt120 mb120">
                        <div class="main-footer_warp">
                            <p class="main-footer_title">主要规格：</p>
                            <ul class="main-footer_list">
                                <li>阻 抗: <span class="main-footer_txtcolor">8Ω</span></li>
                                <li>额定功率: <span class="main-footer_txtcolor">15W</span></li>
                                <li>尺 寸:  <div class="main-footer_li main-footer_txtcolor" style="width: 440px;">吊挂型φ200(最大) X H383(不含金属配件)，<br/>壁挂型φ200(主机最大)，W237mm(含安装配件) X H383<br/>吸顶型φ200(最大) X H335</div></li>
                                <li>重 量: <span class="main-footer_txtcolor">吊挂型0.8(不含金属配件)，壁挂型0.94kq，吸顶型0.75kg</span></li>
                            </ul>
                        </div>
                        <img class="main-footer_icon pr207" src="../assets/images/banner5.png" alt="" srcset="" width="200px" height="292px">
                    </div>
                </div>
            </div>
            <div class="Rex060" v-if="pageid == 11">
                <div class="main-warp main-column">
                    <div class="main-content3 main-column  pb49">
                        <p class="content-title content3-title">温和自然 均匀发声</p>
                        <img class="mb57" src="../assets/images/banner2.png" alt="" srcset="" width="940px" height="680px">
                        <p class="content-text">Rex-060 是Taguchi专业声景系列的主力产品之一，能细致地呈现真实的声音，而又完全杜绝共鸣引起的各种噪声，被称之为安静、干净的音箱。</p>
                    </div>
                    <div class="main-content3 main-column mb101 nobackgroud">
                        <p class="content-title content3-title">无形的优雅存在</p>
                        <img class="mb57" src="../assets/images/banner2.png" alt="" srcset="" width="920px" height="560px">
                        <p class="content-text">简约别致的艺术外观，安装采用天花嵌入式设计，360度无向发音，音域广阔且传递均匀，温和自然。是时尚商业空间、艺术场馆、时尚会所的常客。</p>
                    </div>
                    <div class="main-content3 main-column  pb60">
                        <p class="content-title content3-title">安装要求</p>
                        <img class="pb37" src="../assets/images/banner2.png" alt="" srcset="" width="920px" height="450px">
                        <p  class="content-text pb37">天花开孔直径为108--120mm，深度需要150mm(最小)</p>
                        <img class="pb37" src="../assets/images/banner2.png" alt="" srcset="" width="950px" height="550px">
                        <p class="content-text"><span class="sign"></span>TAGCHI专利产品，采用北欧高品质木材,全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <div class="main-footer mt120 mb120">
                        <div class="main-footer_warp">
                            <p class="main-footer_title">主要规格：</p>
                            <ul class="main-footer_list">
                                <li>阻 抗: <span class="main-footer_txtcolor">8Ω</span></li>
                                <li>额定功率: <span class="main-footer_txtcolor">15W</span></li>
                                <li>尺 寸: <span class="main-footer_txtcolor">φ160(最大) X H208mm</span></li>
                                <li>重 量: <span class="main-footer_txtcolor">0.65Kg</span></li>
                            </ul>
                        </div>
                        <img class="main-footer_icon pr207" src="../assets/images/banner5.png" alt="" srcset="" width="200px" height="292px">
                    </div>
                </div>
            </div>
            <div class="BMA816" v-if="pageid == 12">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <img class="mb70" src="../assets/images/banner3.png" alt="" srcset="" width="1086px" height="420px">
                        <p class="content-text">从吊在天花板上的音箱发出的声音使让空间充满色彩，就像是一滴水落在宁静的湖面上，涟漪扩散开来。”搭载世界首先运用专利技术的宽频带，高输入平面振膜扬声器单元，音域广阔音质优异，极其出色的再现真实的声音，深受音乐家及音乐圈内人士的喜爱，是专业演出现场广泛应用的产品。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-bottom: 0;">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="530px">
                        <p  class="content-text mb57" style="width: 100%;">独有的艺术造型，日本匠人精湛的制作工艺。 360度无向发音，音域广阔，传递均匀。</p>
                    </div>
                    <div class="main-column main-content1 mb57">
                        <img class="mb57" src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="536px">
                        <p class="content-text" style="width: 100%;">适用场所:高端音乐空间、艺术场馆、时尚会所<br/>主要案例:东京 BLUE NOTE爵士俱乐部、104.5 CAFE<br/><span class="sign"></span>Taguchi专利产品,采用北欧高品质木材，全部在日本手工制作的艺术佳品</p>
                    </div>
                    <img  src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="600px">
                    <div class="main-footer mt120 mb120">
                        <div class="main-footer_warp">
                            <p class="main-footer_title">主要规格：</p>
                            <ul class="main-footer_list">
                                <li>阻 抗: <span class="main-footer_txtcolor">8Ω</span></li>
                                <li>额定功率: <span class="main-footer_txtcolor">80W</span></li>
                                <li>最大输入(MUS): <span class="main-footer_txtcolor">120W</span></li>
                                <li>尺 寸: <span class="main-footer_txtcolor">φ332(最大) X 575mm</span></li>
                                <li>重 量: <span class="main-footer_txtcolor">8Kg</span></li>
                            </ul>
                        </div>
                        <img class="main-footer_icon pr207" src="../assets/images/banner5.png" alt="" srcset="" width="200px" height="292px">
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
                if(id == 'F612-T4'){
                    this.pageid = 1
                }if (id == 'MA1603-TW') {
                    this.pageid = 2
                } if (id == 'F8012-3001'){
                    this.pageid = 3
                }if (id == 'CAMS0609'){
                    this.pageid = 4
                }if (id == 'LFT2501'){
                    this.pageid = 5
                }if (id == 'AR1304'){
                    this.pageid = 6
                }if (id == 'AR1302'){
                    this.pageid = 7
                }if (id == 'AR3801'){
                    this.pageid = 8
                }if (id == 'CGB602'){
                    this.pageid = 9
                }if (id == 'BMA RX-80'){
                    this.pageid = 10
                }if (id == 'Rex-060'){
                    this.pageid = 11
                }if (id == 'BMA-816'){
                    this.pageid = 12
                }
                window.scrollTo(0,0);
            }
        }
    }
</script>