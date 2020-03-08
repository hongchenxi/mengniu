<template>
    <div class="coupon_container" ref="wrapper">
        <section v-if="type === 1">
            <ul class="coupon_list" v-if="mycoupons.length">
                <li class="coupon_li" v-for="(coupon, index) in mycoupons" :key="index">
                    <a>
                        <div class="left">
                            <img :src="coupon.logourl">
                        </div>
                        <div class="middle ellipsis">
                            <span class="title ellipsis">{{coupon.title}}</span>
                            <span class="subtitle ellipsis" v-if="type === 1" :class="extraSubTitle">{{coupon.subtitle}}</span>
                        </div>
                        <div class="right">
                            <button v-if="coupon.status === 1" :class="extraClasses[0]">已使用</button>
                            <button v-if="coupon.status === 2" :class="extraClasses[1]">待使用</button>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
        <section v-else>
            <ul class="coupon_list" v-if="nearcoupons.length">
                <li class="coupon_li" v-for="(coupon, index) in nearcoupons" :key="index">
                    <a>
                        <div class="left">
                            <img :src="coupon.logourl">
                        </div>
                        <div class="middle ellipsis">
                            <span class="title ellipsis">{{coupon.title}}</span>
                            <span class="subtitle ellipsis">{{coupon.subtitle}}}</span>
                        </div>
                        <div class="right">
                            <button>立即领取</button>
                        </div>
                    </a>
                </li>
            </ul>
        </section>

    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        props: {
            type: Number
        },
        data() {
            return {
              extraClasses: ['used', 'no_used'],
              extraSubTitle: 'extraSubTitle'
            }
        },

        mounted() {

            if (this.type === 1) {
                this.getMycoupons()
            } else {
                this.getNearCoupons()
            }
        },

        computed: {
            ...mapState(['nearcoupons', 'mycoupons'])
        },

        methods: {
            ...mapActions(['getNearCoupons', 'getMycoupons'])
        },
    }
</script>

<style lang="stylus">
    .coupon_container
        width 100%
        position relative
        bottom 0
        overflow hidden

        .coupon_list
            .coupon_li
                margin 10px
                background-image: url(./images/coupon_bg.png);
                background-size: 100% 100%;
                background-repeat: no-repeat;

                > a
                    clearFix()
                    display flex
                    box-sizing border-box
                    align-items center
                    padding 10px
                    width 100%;

                    span
                        display block

                    .left
                        flex 1

                        > img
                            width 70px
                            height 70px
                            background #f1f1f1

                    .middle
                        flex 2

                        .title
                            font-size 14px
                            color #000000
                            line-height 18px

                        .subtitle
                            font-size 16px
                            color #FF9B10
                            font-weight 700
                            line-height 24px
                            &.extraSubTitle
                              color #000000

                    .right
                        flex 1

                        button
                            border none
                            font-size 12px
                            color #ffffff
                            text-align center
                            background #139E4C
                            width 72px
                            height 28px
                            line-height 28px
                            border-radius 14px
                            position relative
                            left 50%
                            transform translateX(-50%)

                            &.no_used
                                background rgba(19, 158, 76, .15)
                                color #139E4C

                            &.used
                                background #C8C8C8
                                color #ffffff


</style>