<template>
    <div>
        <div class="nav-background">
            <img class="nav-background_img" v-if="pageid == 1" src="../assets/images/F-806/banner.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 2" src="../assets/images/CAMS0609/banner.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 3" src="../assets/images/F-804/banner.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 4" src="../assets/images/F-802/banner.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 5" src="../assets/images/LFT-2501/banner.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 6" src="../assets/images/CGB-602-F/banner.png" alt="" srcset="">
        </div>
        <div class="main">
            <div class="main-title">
                <img class="main-title_icon" src="../assets/images/mainTitle.png" alt="" srcset="" width="197px" height="28px">
                <div class="main-title_line"></div> 
            </div>
            <div class="f806" v-if="pageid == 1">
                <div class="main-warp main-column">
                    <img class="mb101" src="../assets/images/F-806/1.png" alt="" srcset="" width="423px" height="582px">
                    <div class="main-column main-content1">
                        <img class="mb57" src="../assets/images/F-806/2.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">F-804T是专业演唱会和剧院广泛使用的明星产品F812和F824的缩减版，主要适用于家庭影院。Taguchi结合多年以来在专业影剧院音箱制造的技术和经验，将Arched Array Flat Speaker System技术运用于该产品，尽大限度地保证了产品的专业水准。由于采用的技术和部件完全和专业剧场一样，你会惊喜地发现家中的家庭影院的声音表现竟会如此出色。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/F-806/3.png" alt="" srcset="" width="1080px" height="540px">
                        <p class="content-text">厚度仅为7.5厘米的超薄箱体，采用壁挂式设计，使得空间的利用和置放更加灵活和随意，即便是您已经装修好的房子，不会由于家庭影院的导入而破坏美感，让您尽享科技和艺术的精彩。</p>
                    </div>
                    <div class="main-column main-content1">
                        <img class="mb57" src="../assets/images/F-806/4.png" alt="" srcset="" width="1080px" height="500px">
                        <p class="content-text mb35" style="width: 100%;">该产品可以按客户装修设计的风格，挑选合适的颜色，也可以添加不同色彩的网罩，将扬声器隐藏起来</p>
                        <p class="content-text mb35" style="width: 100%;">建议与采用平板扬声器单元的Taguchi超低音音箱配合使用。</p>
                        <p class="content-text" style="width: 100%;">适用场所：私人影院、客厅、音乐空间</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/F-806/5.png" alt="" srcset="" width="905px" height="537px">
                        <img class="mb57" src="../assets/images/F-806/6.png" alt="" srcset="" width="911px" height="540px">
                        <p class="content-text" style="width: 100%;"><span class="sign"></span>Taguchi专利产品, 采用北欧高品质木材, 全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <img class="mt120 mb120" src="../assets/images/F-806/main.png" alt="" srcset="" width="1200px" height="466px">
                </div>
            </div>
            <div class="cams0609" v-if="pageid == 2">
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
            <div class="f804" v-if="pageid == 3">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <img class="mb57" src="../assets/images/F-804/1.png" alt="" srcset="" width="1080px" height="540px">
                        <p class="content-text">F-804T是专业演唱会和剧院广泛使用的明星产品F812和F824的缩减版，主要适用于家庭影院。Taguchi结合多年以来在专业影剧院音箱制造的技术和经验，将Arched Array Flat Speaker System技术运用于该产品，尽大限度地保证了产品的专业水准。由于采用的技术和部件完全和专业剧场一样，你会惊喜地发现家中的家庭影院的声音表现竟会如此出色。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/F-804/2.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">厚度仅为7.5厘米的超薄箱体，采用壁挂式设计，使得空间的利用和置放更加灵活和随意，即便是您已经装修好的房子，不会由于家庭影院的导入而破坏美感，让您尽享科技和艺术的精彩。</p>
                        <p class="content-text" style="width: 100%;">该产品可以按客户装修设计的风格，挑选合适的颜色，也可以添加不同色彩的网罩，将扬声器隐藏起来。</p>
                        <p class="content-text mb35" style="width: 100%;">建议与采用平板扬声器单元的Taguchi超低音音箱配合使用。</p>
                        <p class="content-text" style="width: 100%;">适用场所：私人影院、客厅、音乐空间</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;width: 1080px;">
                        <img class="mb57" src="../assets/images/F-804/3.png" alt="" srcset="" width="414px" height="537px">
                        <p class="content-text" style="width: 100%;"><span class="sign"></span>Taguchi专利产品, 采用北欧高品质木材, 全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <img class="mt120 mb120" src="../assets/images/F-804/main.png" alt="" srcset="" width="1200px" height="466px">
                </div>
            </div>
            <div class="f802" v-if="pageid == 4">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <img class="mb57" src="../assets/images/F-802/1.png" alt="" srcset="" width="1080px" height="450px">
                        <p class="content-text" style="width: 100%;">--F-802T作为中置声道音箱或环绕声道音箱，与F-806T等其他主声道音箱组成家庭影院系统。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/F-802/2.png" alt="" srcset="" width="1080px" height="613px">
                        <p class="content-text mb57" style="width: 100%;">厚度仅为7.5厘米的超薄箱体，采用壁挂式设计，使得空间的利用和置放更加灵活和随意，即便是您已经装修好的房子，不会由于家庭影院的导入而破坏美感，让您尽享科技和艺术的精彩。</p>
                        <img class="mb57" src="../assets/images/F-802/4.png" alt="" srcset="" width="1080px" height="650px">
                        <img src="../assets/images/F-802/3.png" alt="" srcset="" width="1080px" height="650px">
                    </div>
                    <div class="main-column main-content1">
                        <div class="main-row mb70">
                            <img class="mr24" src="../assets/images/F-802/5.png" alt="" srcset="" width="344px" height="266px">
                            <img class="mr24" src="../assets/images/F-802/6.png" alt="" srcset="" width="344px" height="266px">
                            <img  src="../assets/images/F-802/7.png" alt="" srcset="" width="344px" height="266px">
                        </div>
                        <p class="content-text" style="width: 100%;">--F-802T作为中置声道音箱或环绕声道音箱，与F-806T等其他主声道音箱组成家庭影院系统。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/F-802/8.png" alt="" srcset="" width="1080px" height="687px">
                        <p class="content-text" style="width: 100%;">适用场所：私人影院、音乐空间<br/><span class="sign"></span>Taguchi专利产品, 采用北欧高品质木材, 全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <img class="mt120 mb120" src="../assets/images/F-802/main.png" alt="" srcset="" width="1200px" height="466px">
                </div>
            </div>
            <div class="lft2501" v-if="pageid == 5">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <img class="mb57" src="../assets/images/LFT-2501/1.png" alt="" srcset="" width="1086px" height="506px">
                        <p class="content-text" style="width: 100%;">--LFT-2501是Taguchi开发的小型平板超低音音箱，体积虽小，却有着澎湃的动力和优异的音质。<br/> 平面单元在超低音域方面的优异表现, 深沉迅速、鲜明的超低音域超出人们的预期, 与从前相比, 由于有效驱动面积增大, 使得单元的尺寸大大缩小，并且，实现了快速响应，较小的相位差和时间差，更加清晰的呈现低音域。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/LFT-2501/2.png" alt="" srcset="" width="1086px" height="500px">
                        <p class="content-text mb57" style="width: 100%;">--厚度仅为18.5公分的超薄箱体，可以立式摆放在地面上，也可壁挂在墙上，使得空间的利用和置放更加灵活和随意，即便是您已经装修好的房子，不会由于家庭影院的导入而破坏美感，让您尽享科技和艺术的精彩。<br/>--该产品可以按客户装修设计的风格，挑选合适的颜色，也可以添加不同色彩的网罩，将扬声器隐藏起来。</p>
                        <img src="../assets/images/LFT-2501/3.png" alt="" srcset="" width="1080px" height="644px">
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/LFT-2501/4.png" alt="" srcset="" width="1080px" height="672px">
                        <p class="content-text" style="width: 100%;"><span class="sign"></span>Taguchi专利产品, 采用北欧高品质木材, 全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <img class="mt120 mb120" src="../assets/images/LFT-2501/main.png" alt="" srcset="" width="1200px" height="466px">
                </div>
            </div>
            <div class="cgb602f" v-if="pageid == 6">
                <div class="main-warp main-column">
                    <div class="main-column main-content1">
                        <img class="mb57" src="../assets/images/CGB-602-F/1.png" alt="" srcset="" width="1080px" height="460px">
                        <p class="content-text mb35" style="width: 100%;">--CGB-602-F是Taguchi为家庭影院而开发设计的平板反射音箱，用于环绕声道的使用。</p>
                        <p class="content-text" >--设置方式为天花吊顶侧边处，扬声器单元的朝向为天花的顶棚，利用顶棚的反射，来取得环绕声场。由于音箱的侧面为不规则的五边形，可以调整与天花的角度为40°、50°两种选择。</p>
                    </div>
                    <div class="main-column main-content1" style="padding-top: 0;">
                        <img class="mb57" src="../assets/images/CGB-602-F/2.png" alt="" srcset="" width="1080px" height="700px">
                        <p class="content-text mb35" style="width: 100%;">--由于音箱小巧可以完全隐藏至天花灯槽内，所以，可以保持空间外观设计的整洁效果。</p>
                    </div>
                    <div class="main-column main-content1" style="padding-top: 0;">
                        <img class="mb57" src="../assets/images/CGB-602-F/3.png" alt="" srcset="" width="1080px" height="731px">
                        <p class="content-text mb35" style="width: 100%;">适用场所：家庭影院环绕声、客厅背景音乐。<br/><span class="sign"></span>Taguchi专利产品, 采用北欧高品质木材, 全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <img class="mt120 mb120" src="../assets/images/CGB-602-F/main.png" alt="" srcset="" width="1200px" height="466px">
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
                if(id == 'F-806'){
                    this.pageid = 1
                }if (id == 'CAMS0609') {
                    this.pageid = 2
                } if (id == 'F-804'){
                    this.pageid = 3
                }if (id == 'F-802'){
                    this.pageid = 4
                }if (id == 'LFT-2501'){
                    this.pageid = 5
                }if (id == 'CGB-602-F'){
                    this.pageid = 6
                }
                window.scrollTo(0,0);
            }
        }
    }
</script>