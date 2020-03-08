<template>
    <section class="activity_cell">
        <div class="cell_container">
            <img :src="activity.imageurl">
            <div class="bottom">
                <span class="title ellipsis">{{activity.title}}}</span>
                <span class="join">立即参与</span>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ActivityCell",
        props: {
            activity: Object
        }

    }
</script>

<style lang="stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .activity_cell
        margin 10px 10px 0 10px
        background-color: #ffffff
        .cell_container
            padding 10px
            clearFix()
            position: relative
            border-radius 4px
            img
                width: 100%
                height 150px
                border-radius 4px
                background-color #f1f1f1
                border-radius 4px
            .bottom
                margin-top 10px
                display flex
                justify-content space-between
                align-items center
                .title
                    font-siz 16px
                    font-weight 700
                    text-align center
                .join
                    width 72px
                    height 28px
                    background-color #139E4C
                    color #ffffff
                    font-size 12px
                    line-height 28px
                    text-align center
                    border-radius 14px


</style>