<template>
  <div>
    <p class="header">mescroll + vue 案例</p>
    <div class="v-test">
      <div class="v-test-item">Item 1</div>
      <div class="v-test-item">Item 2</div>
      <div class="v-test-item">Item 3</div>
      <div class="v-test-item">Item 4</div>
      <div class="v-test-item">Item 5</div>
      <div class="v-test-item">Item 6</div>
      <div class="v-test-item">Item 7</div>
      <div class="v-test-item">Item 8</div>
      <div class="v-test-item">Item 9</div>
      <div class="v-test-item">Item 10</div>
      <div class="v-test-item">Item 11</div>
      <div class="v-test-item">Item 12</div>
      <div class="v-test-item">Item 13</div>
      <div class="v-test-item">Item 14</div>
      <div class="v-test-item">Item 15</div>
      <div class="v-test-item">Item 16</div>
      <div class="v-test-item">Item 17</div>
      <div class="v-test-item">Item 18</div>
      <div class="v-test-item">Item 19</div>
      <div class="v-test-item">Item 20</div>
      <div class="v-test-item">Item 21</div>
      <div class="v-test-item">Item 22</div>
      <div class="v-test-item">Item 23</div>
      <div class="v-test-item">Item 24</div>
      <div class="v-test-item">Item 25</div>
      <div class="v-test-item">Item 26</div>
      <div class="v-test-item">Item 27</div>
      <div class="v-test-item">Item 28</div>
      <div class="v-test-item">Item 29</div>
      <div class="v-test-item">Item 30</div>
      <div class="v-test-item">Item 31</div>
      <div class="v-test-item">Item 32</div>
      <div class="v-test-item">Item 33</div>
      <div class="v-test-item">Item 34</div>
      <div class="v-test-item">Item 35</div>
      <div class="v-test-item">Item 36</div>
      <div class="v-test-item">Item 37</div>
      <div class="v-test-item">Item 38</div>
      <div class="v-test-item">Item 39</div>
      <div class="v-test-item">Item 40</div>
      <div class="v-test-item">Item 41</div>
      <div class="v-test-item">Item 42</div>
      <div class="v-test-item">Item 43</div>
      <div class="v-test-item">Item 44</div>
      <div class="v-test-item">Item 45</div>
      <div class="v-test-item">Item 46</div>
      <div class="v-test-item">Item 47</div>
      <div class="v-test-item">Item 48</div>
      <div class="v-test-item">Item 49</div>
      <div class="v-test-item">Item 50</div>
    </div>
    <div class="content">
      <router-link :to="{ name: 'mescroll-list-news' }">
        list-news 新闻列表
        <span class="tip">下拉刷新添加数据到列表顶部</span>
      </router-link>
      <router-link :to="{ name: 'mescroll-list-products' }">
        list-products 商品列表
        <span class="tip">下拉刷新重置列表数据</span>
      </router-link>
      <router-link :to="{ name: 'mescroll-mescroll-component' }">
        mescroll-vue 组件
        <span class="tip" style="color:red">强烈推荐以组件的方式使用</span>
      </router-link>
      <router-link :to="{ name: 'mescroll-mescroll-options' }">
        mescroll-options 所有配置项
        <span class="tip">快速熟悉mescroll</span>
      </router-link>
      <router-link :to="{ name: 'mescroll-mescroll-more' }">
        mescroll-more 多mescroll
        <span class="tip">列表仅初始化一次,缓存数据</span>
      </router-link>
      <router-link :to="{ name: 'mescroll-mescroll-swiper-nav' }">
        mescroll-swiper-nav
        <span class="tip">轮播菜单</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  head: {
    meta: [
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'XXX'
      }
    ]
  },
  mounted() {
    console.log('[11-:mounted]->')
    this.$nextTick(() => {
      this.__main()
    })
  },
  methods: {
    __main() {}
  }
}
</script>

<style scoped>
.header {
  z-index: 9990;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  border-bottom: 1px solid #eee;
  background-color: white;
}

.content {
  padding-top: 44px;
}

.content a {
  display: block;
  padding: 15px 12px;
  border-bottom: 1px solid #eee;
}

.content .tip {
  float: right;
  margin-top: 2px;
  font-size: 12px;
  color: gray;
}
</style>
