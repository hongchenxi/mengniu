<template>
    <section class="story_cell">
        <div class="cell_container">
            <img :src="story.imageurl">
            <span>{{story.title}}</span>
        </div>
    </section>
</template>

<script>
    export default {
        name: "StoryCell",
        props: {
            story: Object
        }
    }

</script>

<style lang="stylus" scoped>
    .story_cell
        padding 10px 10px 0 10px
        background-color: #ffffff;

        .cell_container
            height 150px
            position relative

            > img
                width 100%
                height 100%
                background-color #f1f1f1
                border-radius 4px

            > span
                position absolute
                right 10px
                bottom 10px
                width 72px
                height: 28px
                font-size 12px
                color #ffffff
                background-color rgba(0, 0, 0, .5)
                border-radius 14px
                text-align center
                line-height 28px


</style>