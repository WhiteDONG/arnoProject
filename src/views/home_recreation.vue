<template>
    <div>
        <div class="nav-background">
            <img class="nav-background_img" v-if="pageid == 1" src="../assets/images/AR1304/banner.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 2" src="../assets/images/AR1302/banner.png" alt="" srcset="">
            <img class="nav-background_img" v-if="pageid == 3" src="../assets/images/AR3801/banner.png" alt="" srcset="">
        </div>
        <div class="main">
            <div class="main-title">
                <img class="main-title_icon" src="../assets/images/mainTitle.png" alt="" srcset="" width="197px" height="28px">
                <div class="main-title_line"></div> 
            </div>
            <div class="AR1304" v-if="pageid == 1">
                <div class="main-warp main-column">
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/AR1304/1.png" alt="" srcset="" width="1080px" height="520px">
                        <p class="content-text">AR-1304是Taguchi为中小型空间的娱乐活动而研发设计。Taguchi将Arched Array 专业技术运用于该系列产品，单体搭载4只T 130mm低频单元和16只高频单元，输入功率达到320W，完全不用担心过激的大动态音乐，使得1304有着更多的应用场景。除了HI-END级别的音乐欣赏以外，也非常适用于卡拉OK演唱、家庭影院、小型演奏会等等。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <img class="mb57" src="../assets/images/AR1304/2.png" alt="" srcset="" width="1005px" height="595px">
                        <p class="content-text">AR-1304无论是纯音乐的乐器演奏还是轻柔曼妙的人声歌唱，亦或是振奋激昂的交响乐，各种音乐的表现都同样出色，创作者的作品可以让聆听者以更好的方式欣赏，更深刻地体会到作品的艺术魅力。配合AR-3801的15寸低音音箱,让AR系列究极的音乐表现力得到更为充分的发挥。向每一个不妥协于音质的人，提供一个真实、纯粹、专业级的舒适空间。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <img class="mb57" src="../assets/images/AR1304/3.png" alt="" srcset="" width="993px" height="562px">
                        <p class="content-text">TAGUCHI一贯坚持“像制作乐器一样制作音响”，绝不妥协音质的制造理念，在AR-1304身上得到充分地展现。无论是纯音乐的乐器演奏还是人声歌唱，各种音乐的表现都同样悦耳动听，可以让人更贴切自由地体会到音乐家的艺术魅力。从容大气的声音、更多的音乐细节、更加丰富的层次和更为宽阔的音场。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <img class="mb57" src="../assets/images/AR1304/4.png" alt="" srcset="" width="1080px" height="669px">
                        <p class="content-text" style="width: 100%;">适用场所：AR-1304是Taguchi为中小型空间的娱乐活动而研发设计，用于卡拉OK、家庭影院、小型演唱会和高水准音乐空间、时尚会所。<br/><span class="sign"></span>Taguchi专利产品, 采用北欧高品质木材, 全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <img class="mt120 mb120" src="../assets/images/AR1304/main.png" alt="" srcset="" width="1200px" height="466px">
                </div>
            </div>
            <div class="AR1302" v-if="pageid == 2">
                <div class="main-warp main-column">
                    <div class="main-column main-content1 nobackgroud" >
                        <img class="mb35" src="../assets/images/AR1302/1.jpg" alt="" srcset="" width="1200px" height="709px">
                        <img class="mb57" src="../assets/images/AR1302/2.jpg" alt="" srcset="" width="1200px" height="709px">
                        <p class="content-text mb35">--作为AR-1304的简缩版，AR-1302同样出色，由于体积小，更适合家庭娱乐使用。可以作为卡拉OK、家庭影院、音乐鉴赏使用。需要配合同系列AR-3801的15寸低音音箱，让音乐更加悦耳动听。</p>
                        <p class="content-text"> 适用场所：家庭客厅、私人影院、时尚会所</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud" style="padding-top: 0;">
                        <img class="mb35" src="../assets/images/AR1302/3.jpg" alt="" srcset="" width="1200px" height="709px">
                        <img class="mb57" src="../assets/images/AR1302/4.jpg" alt="" srcset="" width="1200px" height="709px">
                        <p class="content-text" style="width: 100%;"><span class="sign"></span>Taguchi专利产品, 采用北欧高品质木材, 全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <img class="mt120 mb120" src="../assets/images/AR1302/main.png" alt="" srcset="" width="1200px" height="466px">
                </div>
            </div>
            <div class="AR3801" v-if="pageid == 3">
                <div class="main-warp main-column">
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/AR3801/1.png" alt="" srcset="" width="1200px" height="521px">
                        <p class="content-text">--作为配合AR-1304和AR-1302一起使用的低音音箱，AR-3801的表现同样出色，它的声音深沉、自然，均匀地布满整个空间。体积更小，放置更加灵活，适合小一些的空间使用，是家庭娱乐的首选。</p>
                    </div>
                    <div class="main-column main-content1 nobackgroud">
                        <img class="mb57" src="../assets/images/AR3801/2.png" alt="" srcset="" >
                        <p class="content-text" style="width: 100%;"><span class="sign"></span>Taguchi专利产品, 采用北欧高品质木材, 全部在日本手工制作的艺术佳品。</p>
                    </div>
                    <img class="mt120 mb120" src="../assets/images/AR3801/main.png" alt="" srcset="" width="1200px" height="466px">
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
                if(id == 'AR1304'){
                    this.pageid = 1
                }if (id == 'AR1302') {
                    this.pageid = 2
                } if (id == 'AR3801'){
                    this.pageid = 3
                }
                window.scrollTo(0,0);
            }
        }
    }
</script>