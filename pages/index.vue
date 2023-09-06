<template>
<div>
    <Header />
    <div class="w100 view border-box">
        <!-- <Breadcrumb /> -->
        <div class="page-content-box max-w-full mx-auto ">
    <div class="flex ">
     <!-- <Sidebar /> -->
     <!-- <MatchList :data="data" /> -->
</div>
 </div>
    </div>
    <Footer />
    </div>
</template>

<script setup>
import axios from 'axios';

const { data} = useFetch('/api/matches')
</script>

<style lang="scss" scoped>
.view {
    width: 1200px;
    margin: 0 auto 16px;
    min-height: calc(100vh - 517px);
}
</style>