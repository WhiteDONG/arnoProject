<template>
    <div>
        <div class="nav-background">
            <img class="nav-background_img" v-if="pageid == 1" src="../assets/images/banner3.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 2" src="../assets/images/banner4.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 3" src="../assets/images/banner5.png" alt="" srcset="">
        </div>
        <div class="main">
            <div class="main-title">
                <img class="main-title_icon" src="../assets/images/mainTitle.png" alt="" srcset="" width="197px" height="28px">
                <div class="main-title_line"></div> 
            </div>
            <div class="f613" v-if="pageid == 1">
                <div class="main-warp main-column">
                    <div class="main-column main-content1 mb80">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-title"><span class="english-span">Taguchi</span>科技的杰出代表</p>
                        <p class="content-text">2015年推出的F-613，是至今为止Taguchi唯一的一款面向音乐爱好者的民用级音箱，承载着Taguchi多年专业音箱的技术和智慧，延续Taguchi的“像乐器一样”的音箱的制作理念、以及对音质毫不妥协的执着精神，是一款充满魔力的产品。音箱采用Taguchi核心技术，独自研制的铝蜂窝振动膜片平板扬声器，保证了能够忠实地再现高音质的音乐。</p>
                    </div>
                    <img class="main-img1" src="../assets/images/banner4.png" alt="" srcset="" width="1080px" height="600px">
                    <div class="main-column main-content1 nobackgroud">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-title">小身材大能量</p>
                        <p class="content-text">F-613音箱的一大特点就是低音强劲有力，能营造出大舞台的临场效果，能提供超越于同级别体积的巨大能量，身材虽小，却有着大箱体才有的震撼力，完全打破对小型音箱的传统的认识，可以从容驾驭大型音乐。体积小的优势，更方便居家摆放。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <img src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-title">乐赏析之佳品</p>
                        <p class="content-text">音质纯净透彻，音乐细节丰富、音色雅致、层次清楚，可以应付大动态的音乐。清晰准确的解像力、鲜活的音场、细致入微的音乐刻画表现，带给您身临其境的超凡感受。听觉体验不受距离远近所限制，小音量时也能清晰表现音乐的每个细节。即使是用手机、iPad等做音源来播放，也会取得意想不到的惊人效果。无论是古典、爵士乐，还是电子、流行乐，都会取得上佳的聆听体验，适合多种风格的音乐，是忠实表现全频段的音箱。</p>
                    </div>
                    <img class="mb70" src="../assets/images/banner5.png" alt="" srcset="" width="1080px" height="666px">
                    <img src="../assets/images/banner4.png" alt="" srcset="" width="1080px" height="450px">
                    <div class="main-column main-content2">
                        <img class="mb85"  src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="520px">
                        <p class="content2-text">适用场所：客厅、书房、录音棚、音乐工作室、音乐空间、 时尚会所。</p>
                        <p class="content2-text mb35">主要案例：BACKYARD，Brooklyn-Parlor。</p>
                        <p class="content2-text"><span class="sign"></span>Taguchi专利产品，采用北欧高品质木材，全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <div class="main-footer mt120 mb120">
                        <div class="main-footer_warp">
                            <p class="main-footer_title">主要规格：</p>
                            <ul class="main-footer_list">
                                <li>阻 抗: <span class="main-footer_txtcolor">8Ω</span></li>
                                <li>输出音压水平感度): <span class="main-footer_txtcolor">80db(w/m)</span></li>
                                <li>额定输入功率: <span class="main-footer_txtcolor">30W</span></li>
                                <li>最大输入(EA): <span class="main-footer_txtcolor">60W</span></li>
                                <li>频率响应: <span class="main-footer_txtcolor">40Hz-20kHz</span></li>
                                <li>尺 寸: <span class="main-footer_txtcolor">H292mm X W180mm X D266mm</span></li>
                                <li>重 量: <span class="main-footer_txtcolor">5Kg</span></li>
                            </ul>
                        </div>
                        <img class="main-footer_icon pr207" src="../assets/images/banner5.png" alt="" srcset="" width="200px" height="292px">
                    </div>
                </div>
            </div>
            <div class="little_bel"  v-if="pageid == 2">
                <div class="main-warp main-column">
                    <img class="mb85" src="../assets/images/banner4.png" alt="" srcset="" width="1080px" height="666px">
                    <div class="main-content3 main-column mb70 pb85">
                        <p class="content-title content3-title">犹如音乐家在眼前演奏一样</p>
                        <div class="main-row">
                            <img src="../assets/images/banner2.png" alt="" srcset="" width="600px" height="570px">
                            <p class="content3-text pl49">--Taguchi作为专业音箱生产厂家，运用其在专业音乐现场培育积累的技术和经验，开发出更加贴近生活空间的Little Bel。与传统的音箱相比，作为Bel的迷你版本--Little Bel完全是一个另类的音箱。它能再现极具空间感的优质声音，实现犹如音乐家在眼前演奏一样临场效果。比起用耳朵聆听来说，通过身体感受的声音，更让空间得以延伸、放松。</p>
                        </div>
                    </div>
                    <div class="main-content3 main-column mb85 nobackgroud">
                        <p class="content-title content3-title">水晶音质再现音乐</p>
                        <img class="mb57" src="../assets/images/banner5.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">--声音清晰且柔和，中高频的音色更为优美。小音量时也能清晰听见，可再现音乐的每一个细节。即使长时间聆听，耳朵也不会疲劳，也不会对人的交谈造成影响。箱体小巧，自然融入任何空间设计，适用于所有生活场景。</p>
                    </div>
                    <div class="main-content3 main-column mb70 pb85">
                        <p class="content-title content3-title">让音乐自由自在,随心所欲</p>
                        <img class="mb57" src="../assets/images/banner5.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">--传统的音箱通常有方向性，并而只有在两个音箱的中心点聆听，才能得到上佳的立体声效果。Little Bel由于是无向扬声器，两只箱体可以设置在任意的场所，而且，你可以不受聆听位置所限，随意摆放。你会感觉声音不像是从箱体里发出的一样，整个空间都被声音包围。</p>
                    </div>
                    <div class="main-column main-content2 mb70">
                        <img class="mb70"  src="../assets/images/banner3.png" alt="" srcset="" width="1080px" height="881px">
                        <p class="content2-text">适用场所: 书房、茶室、客厅、起居室、育儿室、禅意空间、时尚会所</p>
                        <p class="content2-text">生要案例:中国杯会所、宋院南禅、紫云香舍、【东西】会所</p>
                        <p class="content2-text"><span class="sign"></span> TAGUCH专利产品,采用北欧高品质木材,全部在日本手工制作的艺术佳品</p>
                    </div>
                    <img src="../assets/images/banner2.png" alt="" srcset="" width="1080px" height="860px">
                    <div class="main-footer mt120 mb120">
                        <div class="main-footer_warp">
                            <p class="main-footer_title">主要规格：</p>
                            <ul class="main-footer_list">
                                <li>阻 抗: <span class="main-footer_txtcolor">8Ω</span></li>
                                <li>输出音压水平感度): <span class="main-footer_txtcolor">80db(w/m)</span></li>
                                <li>额定输入功率: <span class="main-footer_txtcolor">30W</span></li>
                                <li>最大输入(EA): <span class="main-footer_txtcolor">60W</span></li>
                                <li>频率响应: <span class="main-footer_txtcolor">40Hz~20kHz</span></li>
                                <li>尺 寸: <span class="main-footer_txtcolor">H292mm X W180mm X D266mm</span></li>
                                <li>重 量: <span class="main-footer_txtcolor">5Kg</span></li>
                            </ul>
                        </div>
                        <img class="main-footer_icon pr207" src="../assets/images/banner5.png" alt="" srcset="" width="200px" height="292px">
                    </div>
                </div>
            </div>
            <div class="light_place" v-if="pageid == 3">
                <div class="main-warp main-column">
                    <div class="main-content3 main-column pb60 mb70">
                        <img class="mb57" src="../assets/images/banner5.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">六面体全向音箱，玲珑别致。声音从上下、前后、左右，呈3维放射扩散，使得整体空间产生共鸣。由于六个面都装有扬声器单元，即使音量较小，也能欣赏到清晰纯净的声音。</p>
                    </div>
                    <img class="mb85" src="../assets/images/banner2.png" alt="" srcset="" width="1080px" height="560px">
                    <div class="main-content3 main-column pb60 nobackgroud">
                        <img class="mb57" src="../assets/images/banner5.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">此款音箱能够得到 “像雕刻一样的声音”，如同演奏者近在咫尺，颇有现场感。可以非常完满地再现女声，适合演绎乐器不多的音乐和人声。不适合演绎交响乐这样的大型音乐和表达低音较多的音乐。</p>
                    </div>
                    <div class="main-content2 main-column mt100 pb60 nobackgroud">
                        <img class="mb57" src="../assets/images/banner5.png" alt="" srcset="" width="1080px" height="600px">
                        <p class="content-text">本款音箱可以选用单只立体声型，也可选用多只单声道型。</p>
                    </div>
                    <div class="main-content3 main-row  pb85 pt85">
                        <img src="../assets/images/banner2.png" alt="" srcset="" width="460px" height="700px">
                        <div class="main-column pl56">
                            <ul class="main-content_ul mb101">
                                <li class="mb35 pt74"><div class="sign-title">适用场所：</div><div style="width: 320px;">书房、茶室、设计工作室、艺术空间、花艺及 时尚店铺。</div></li>
                                <li><div class="sign" style="vertical-align: 22px;"></div><div style="width: 387px;">Taguchi专利产品，采用北欧高品质木材，全部在日本 手工制作的艺术佳品。</div></li>
                            </ul>
                            <img src="../assets/images/banner2.png" alt="" srcset="" width="564px" height="406px">
                        </div>
                    </div>
                    <div class="main-footer mt120 mb120">
                        <div class="main-footer_warp">
                            <p class="main-footer_title">主要规格：</p>
                            <ul class="main-footer_list">
                                <li>单声道型: <span class="main-footer_txtcolor">单声道型8Ω, 立体声型4Ω</span></li>
                                <li>颜定功率: <span class="main-footer_txtcolor">单声道型40W, 立体声型20W</span></li>
                                <li>最大输入: <span class="main-footer_txtcolor">单声道型80W, 立体声型40W</span></li>
                                <li>频率响应: <span class="main-footer_txtcolor">130Hz~20kHz</span></li>
                                <li>尺 寸: <span class="main-footer_txtcolor">H260 X W175 X D190mm</span></li>
                                <li>重 量: <span class="main-footer_txtcolor">1.6Kq</span></li>
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
            if(id == 'F-613'){
                this.pageid = 1
            }if (id == 'Little Bel') {
                this.pageid = 2
            } if (id == 'Light Standing'){
                this.pageid = 3
            }
            window.scrollTo(0,0);
        }
    }
}
</script>