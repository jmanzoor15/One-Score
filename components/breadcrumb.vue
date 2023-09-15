<template>
    <div>
        <div aria-label="Breadcrumb" role="navigation" class="el-breadcrumb breadBox" style="color:#7a7d8a;padding-left:0;">
            <span class="el-breadcrumb__item float-left">
                <span role="link" class="el-breadcrumb__inner">
                    <a href="https://www.aiscore.com" target="_blank" class="liveScoreh1"
                        style="cursor:pointer;">AiScore</a>
                </span>
                <Icon name="ic:outline-arrow-forward-ios" class="arrowColor " />
            </span>
            <span class="el-breadcrumb__item" aria-current="page">
                <span role="link" class="el-breadcrumb__inner">
                    <a href="https://www.aiscore.com/basketball" target="_blank" style="cursor:pointer;">
                        <h1 class="liveScoreh1">
                            Basketball Live Score
                        </h1>
                    </a></span><i class="el-breadcrumb__separator el-icon-arrow-right arrowColor"></i></span>
        </div>

    </div>
</template>

<script setup>
const jack = "mack";
</script>

<style lang="scss" scoped>
.breadBox {
    width: 1200px;
    margin: 0 auto;
    padding-left: 12px;
    height: 33px;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
}

.el-breadcrumb {
    font-size: 14px;
    line-height: 1;
}

div {
    display: block;
}

.el-breadcrumb__item {
    float: left;
}

.el-breadcrumb__inner {
    color: #606266;
}

.el-breadcrumb__inner a {
    font-size: 12px !important;
}

.el-breadcrumb__inner.is-link,
.el-breadcrumb__inner a {
    font-weight: 700;
    text-decoration: none;
    transition: color .2s cubic-bezier(.645, .045, .355, 1);
    color: #303133;
}

.el-breadcrumb__separator[class*=icon] {
    margin: 0 6px;
    font-weight: 400;
}

.arrowColor {
    color: #7a7d8a !important;
}

.arrowColor {
    font-size: 12px;
}

.liveScoreh1 {
    color: grey;
    display: inline;
    font-size: 12px;
}

h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}</style>