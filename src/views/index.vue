<template>
    <div id="index">
        <div class="swiper-container" >
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="../assets/images/banner2.png" alt="" srcset=""></div>
              <div class="swiper-slide"><img src="../assets/images/banner3.png" alt="" srcset=""></div>
              <div class="swiper-slide"><img src="../assets/images/banner4.png" alt="" srcset=""></div>
              <div class="swiper-slide"><img src="../assets/images/banner5.png" alt="" srcset=""></div>
            </div>
            <div class="swiper-button-next myswiper-button-next myswiper-button"></div>
            <div class="swiper-button-prev myswiper-button-prev myswiper-button" ></div>
          </div>
          <div class="main">
                <div class="main-warp">
                    <div class="main-list">
                        <img src="../assets/images/index1.png" alt="" width="567px" height="470px">
                        <div class="synopsis-warp synopsis-warp_right">
                            <p class="synopsis-title pb30">桌面音响</p>
                            <div class="synopsis-describe pb30">小巧的音箱,可放在书架或桌面使用,像離刻插花那为生活空间装点色彩</div>
                            <div class="synopsis-commodity pb30">
                                <p>F-613</p>
                                <p>Little Bel</p>
                                <p>Light Standing</p>
                            </div>
                            <a href="http://##">购买 ></a>
                        </div>
                    </div>
                    <div class="main-list">
                        <div class="synopsis-warp synopsis-warp_left">
                            <p class="synopsis-title pb30">环境音响</p>
                            <div class="synopsis-describe pb30">独特的造型，声音清晰又不影响人的交谈，被众多商业场所和时尚设计空间广泛使用</div>
                            <div class="synopsis-commodity pb30">
                                <p>Rex-060</p>
                                <p>Light Hanging</p>
                                <p>BMA RX-80</p>
                            </div>
                            <a href="http://##">购买 ></a>
                        </div>
                        <img src="../assets/images/index1.png" alt="" width="567px" height="470px">
                    </div>
                    <div class="main-list">
                        <div class="main-list_column">
                            <img src="../assets/images/index1.png" alt="" width="567px" height="470px" >
                            <div class="synopsis-warp">
                                <p class="synopsis-title pb30">家庭影院</p>
                                <div class="synopsis-describe pb30">采用专业影剧院的 Arched Array Flat Speaker System技术,带来更高水平的视听享受,让人完全沉漫在戏中</div>
                                <div class="synopsis-commodity pb30">
                                    <p>F-803</p>
                                    <p>CAMS0609</p>
                                    <p>F-804</p>
                                </div>
                                <a href="http://##">购买 ></a>
                            </div>
                        </div>
                        <div class="main-list_column">
                            <img src="../assets/images/index1.png" alt="" width="567px" height="470px" >
                            <div class="synopsis-warp">
                                <p class="synopsis-title pb30">家庭娱乐</p>
                                <div class="synopsis-describe pb30">除了 H-END 级别的音乐欣赏以外,也非常适用于卡拉 OK 演唱、家庭影院、小型演奏会等等</div>
                                <div class="synopsis-commodity pb30">
                                    <p>AR1304</p>
                                    <p>F613</p>
                                    <p>BEL</p>
                                </div>
                                <a href="http://##">购买 ></a>
                            </div>
                        </div>
                    </div>
                    <div class="main-list">
                        <img src="../assets/images/index1.png" alt="" width="567px" height="470px">
                        <div class="synopsis-warp synopsis-warp_right">
                            <p class="synopsis-title pb30">专业定制</p>
                            <div class="synopsis-describe pb30">Taguchi-一直专注于专业音响领域,尤其擅长为客户不同需求定制各类大小型音响系统</div>
                            <div class="synopsis-commodity pb30">
                                <p>F-613</p>
                                <p>Little Bel</p>
                                <p>Light Standing</p>
                            </div>
                            <a href="http://##">购买 ></a>
                        </div>
                    </div>
                    <div class="main-case">
                        <h3>经典案例</h3>
                        <div class="main-case_list">
                            <div class="case-content"><div class="case-content_tilte">会议厅</div></div>
                            <div class="case-content"><div class="case-content_tilte">音乐厅&剧场</div></div>
                            <div class="case-content"><div class="case-content_tilte">音乐俱乐部</div></div>
                            <div class="case-content"><div class="case-content_tilte">咖啡厅&餐吧</div></div>
                            <div class="case-content reset-mr"><div class="case-content_tilte">音乐空间&建筑</div></div>
                            <div class="case-content"><div class="case-content_tilte">电影院</div></div>
                            <div class="case-content"><div class="case-content_tilte">时尚品牌店</div></div>
                            <div class="case-content"><div class="case-content_tilte">美术馆&博物馆</div></div>
                            <div class="case-content"><div class="case-content_tilte">寺院&禅意空间</div></div>
                            <div class="case-content reset-mr"><div class="case-content_tilte">体育场&公共设施</div></div>
                            <div class="case-content"><div class="case-content_tilte">艺术展&演出活动</div></div>
                            <div class="case-content"><div class="case-content_tilte">科研装置</div></div>
                            <div class="case-content"><div class="case-content_tilte">酒店&商厦</div></div>
                            <a href="http://##" class="case-link">进一步了解更多 ></a>
                        </div>
                    </div>
                </div>
          </div>
    </div>
</template>

<script>
import Swiper from 'swiper';

export default {
    data() {
        return {
            content: ''
          
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
        window.scrollTo(0,0);
    },
    methods: {
        getDetail(id){
            console.log(id)
            window.scrollTo(0,0);
        },
    },
    mounted(){
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay:2500,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            autoplayDisableOnInteraction:false,
            preventLinksPropagation:true
        })
        
    }
}
</script>