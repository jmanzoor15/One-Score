<template>
    <div>
        <Header />
        <div class="w100 view border-box">
            <!-- <Breadcrumb /> -->
            <div class="page-content-box max-w-full mx-auto ">
                <div class="mt-10">
                    <HotMatches :data="data" />
                </div>

                <div class="flex mt-[60px] ">
                    <Sidebar />
                    <MatchList :data="data" />
                    <div class="flex flex-col items-center">
                        <Calender />
                        <NewsUpdate />
                    </div>

                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
const { data } = useFetch('/api/matches')


</script>

<style lang="scss" scoped>
.view {
    width: 1200px;
    margin: 0 auto 16px;
    min-height: calc(100vh - 517px);
}
</style>