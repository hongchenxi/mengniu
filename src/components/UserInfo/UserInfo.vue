<template>
    <section class="userinfo">
        <div class="userinfo_container">
            <span class="left">
                <img src="./images/avatar.png">
                <span ellipsis>赵丽丽Rwd</span>
            </span>
            <span class="right">
                <span class="edit">
                    <i class="iconfont icon-edit"></i>
                </span>

                <span>问题反馈</span>
            </span>
        </div>
    </section>
</template>

<script>
    export default {
        name: "UserInfo"
    }
</script>

<style lang="stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .userinfo_container
        background-color #ffffff
        padding 25px 10px
        display flex
        align-items center
        justify-content space-between
        .left
            display flex
            align-items center
            img
                width 60px
                height 60px
                border-radius 50%
                background-color #f1f1f1
            >span
                margin-left 10px
                font-size 18px
                color #000000
                font-weight 700
        .right
            display flex
            align-items center
            justify-content center
            width 92px
            height 28px
            border-radius 30px
            border 1px solid #cccccc
            .edit
                .icon-edit
                    font-size 20px
            span
                font-size 13px
                color #333333
                font-weight 700

</style>