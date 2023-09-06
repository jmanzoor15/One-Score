<template>
    <div>
        <div class="index-left">
            <div class="hot-comps p-0 pr-12 pb-12 mb-15">
                <div class="title border-b border-gray-300 mb-12 h-10 leading-10 font-medium text-black">
                    Popular
                </div>

                <a href="#" class="comps-item block box-border items-center rounded cursor-pointer flex h-8 text-gray-700">
                    Premier League
                </a>
                <a href="#" class="comps-item block box-border items-center rounded cursor-pointer flex h-8 text-gray-700">
                    La Liga
                </a>
                <a href="#" class="comps-item block box-border items-center rounded cursor-pointer flex h-8 text-gray-700">
                    Serie A
                </a>
                <a href="#" class="comps-item block box-border items-center rounded cursor-pointer flex h-8 text-gray-700">
                    Bundesliga
                </a>
                <a href="#" class="comps-item block box-border items-center rounded cursor-pointer flex h-8 text-gray-700">
                    Ligue 1
                </a>


            </div>
            <div class="all-comps p-0 pr-12  p-0 pr-12 pb-12 mb-15">
                <div class="border-b border-gray-300 mb-3 h-10 flex items-center font-medium text-black">
                    Other Leagues [A-Z]
                </div>
                <div class="searchBox">
                    <input placeholder="Filter…" type="text" class="searchInput">
                    <span class="searchIcon">
                        <Icon name="material-symbols:search-rounded"
                            style="font-size: 1.60rem; color:#cbd3dc;  margin-left: 5px; " />
                    </span>
                </div>
                <div class="data-box">
                    <div class="comps-item flex justify-between">
                        <div class="flex align-center">
                            <div class="country-logo">
                                <img src="https://img1.aiscore.com/country/212d0fff3a73d391f2ab.png!w30" alt="International"
                                    title="International">
                            </div>
                            <span class="ml-xs">International</span>
                        </div>
                    </div>
                    <div class="comps-box color-666" style="display: none;">
                    </div>
                </div>

                <div class="data-box">
                    <div class="comps-item flex justify-between">
                        <div class="flex align-center">
                            <div class="country-logo">
                                <img src="https://img1.aiscore.com/country/212d0fff3a73d391f2ab.png!w30" alt="International"
                                    title="International">
                            </div>
                            <span class="ml-xs">International</span>
                        </div>
                    </div>
                    <div class="comps-box color-666" style="display: none;">
                    </div>
                </div>
                <div class="data-box">
                    <div class="comps-item flex justify-between">
                        <div class="flex align-center">
                            <div class="country-logo">
                                <img src="https://img1.aiscore.com/country/212d0fff3a73d391f2ab.png!w30" alt="International"
                                    title="International">
                            </div>
                            <span class="ml-xs">International</span>
                        </div>
                    </div>
                    <div class="comps-box color-666" style="display: none;">
                    </div>
                </div>
                <div class="data-box">
                    <div class="comps-item flex justify-between">
                        <div class="flex align-center">
                            <div class="country-logo">
                                <img src="https://img1.aiscore.com/country/212d0fff3a73d391f2ab.png!w30" alt="International"
                                    title="International">
                            </div>
                            <span class="ml-xs">International</span>
                        </div>
                    </div>
                    <div class="comps-box color-666" style="display: none;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.index-left {
    margin-right: 8px;
    width: 200px;
}

.searchBox {
    display: inline-block;
    width: 100%;
    height: 32px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #e0e1e2;
    position: relative;
    margin-bottom: 12px;
}

.searchBox .searchInput {
    display: inline-block;
    width: 135px;
    height: 32px;
    border: 1px;
    text-indent: 12px;
    font-size: 14px;
    color: #000;
    background-color: hsla(0, 0%, 100%, 0);
    outline: none;
    padding: 0;
}

.searchBox .searchIcon {
    display: inline-flex;
    width: 32px;
    height: 32px;
    position: absolute;
    right: 0;
    align-items: center;
    justify-content: center;
    cursor: pointer;

}

.index-left .comps-item {
    box-sizing: border-box;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    height: 32px;
    color: #333;
}

.index-left .comps-item {
    align-items: center;
    display: flex;
    flex: 1;
}

/* .index-left .country-logo {
    transition: all .3s ease;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -o-transition: all .3s ease;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    border: 1px solid #eee;
    -o-object-fit: contain;
    object-fit: contain;
    overflow: hidden;
    height: 20px;
    width: 20px;
} */
.index-left .country-logo img[data-v-143d32ee] {
    -o-object-fit: contain;
    object-fit: contain;
    height: 100%;
    width: 100%;
}

.ml-xs {
    margin-left: 8px;
}</style>