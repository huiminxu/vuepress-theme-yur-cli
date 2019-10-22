<template>
    <p>
        <img :src="src" :alt="alt"/>
    </p>
</template>
<script>
    // 图片居中，可以直接在 MarkDown 中使用
    // 用法：
    // <YurImg src="图片地址" alt="失败文字" />
    export default {
        props: {
            src: {
                type: String,
                required: true,
            },
            alt: {
                type: String,
                required: false,
                default: '凉风有信',
            },
        },
        data() {
            return {};
        },
    };
</script>
<style lang="less" scoped>
    p {
        margin: 16px auto;
        text-align: center;
    }
</style>