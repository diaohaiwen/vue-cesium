(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-navigation.md?vue&type=template&id=9c58d5fa

var vc_navigationvue_type_template_id_9c58d5fa_hoisted_1 = {
  class: "content element-doc"
};

var vc_navigationvue_type_template_id_9c58d5fa_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"dao-hang\"><a class=\"header-anchor\" href=\"#dao-hang\">¶</a> 导航</h2><p><code>vc-navigation</code> 导航组件，主要包括 2 个部分，（1）罗盘、缩放、其他悬浮按钮；（2）位置和距离比例尺工具栏。<strong>注意：</strong> 该需要引入样式文件: <code>import &#39;vue-cesium/lib/theme-default/index.css&#39;;</code></p><div class=\"tip\"><p>提示：3.0 版本对导航组件进行了重构，现在是一个集合组件，现在支持自定义风格，包括图标、大小、颜色位置等。如需高度定制，可分别参考各子组件的例子。自带的图标用的是 Unicode 方式，不支持多色，需要支持多色请参考阿里云 iconfont 介绍的使用 Symbol 的方法：<a href=\"https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&amp;helptype=code\">传送门</a>。</p></div><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>导航组件的基础用法。</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("将 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-navigation"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签作为 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 的子组件挂载即可。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-navigation ref=\"navigation\"></vc-navigation>\n    <!-- 自定义风格 -->\n    <vc-navigation\n      :position=\"position\"\n      :offset=\"offset\"\n      :compassOpts=\"compassOpts\"\n      :zoomOpts=\"zoomOpts\"\n      :locationOpts=\"locationOpts\"\n      :otherOpts=\"otherOpts\"\n      @compassEvt=\"onNavigationEvt\"\n      @zoomEvt=\"onNavigationEvt\"\n      @printEvt=\"onNavigationEvt\"\n      @locationEvt=\"onNavigationEvt\"\n      @locationBarEvt=\"onNavigationEvt\"\n      @distanceLegendEvt=\"onNavigationEvt\"\n    >\n    </vc-navigation>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n<script>\n  export default {\n    data() {\n      return {\n        position: 'top-left',\n        offset: [10, 80],\n        compassOpts: {\n          enableCompassOuterRing: true,\n          outerOptions: {\n            name: 'svguse:#vc-icons-compass-outer', // svg 加载方式\n            size: '120px'\n          },\n          innerOptions: {\n            name: 'fa fa-compass',\n            size: '24px',\n            color: '#3f4854',\n            background: '#fff'\n          },\n          markerOptions: {\n            size: '120px',\n            color: 'yellow'\n          }\n        },\n        zoomOpts: {\n          background: '#1976D2',\n          direction: 'horizontal'\n        },\n        locationOpts: {\n          color: 'red',\n          // 使用高德api定位\n          amap: {\n            key: '42d22e6ed83f077bc28b7864718726de',\n            version: '2.0',\n            options: {\n              timeout: 5000,\n              noGeoLocation: 3,\n              needAddress: true,\n              extensions: 'all'\n            },\n            transformToWGS84: true\n          }\n        },\n        otherOpts: false\n        // otherOpts: {\n        //   position: 'bottom-right',\n        //   offset: [2, 3],\n        //   locationbarOpts:  // 与 vc-location-bar 保持一致\n        //   distancelegendOpts: // 与 vc-distance-legend 保持一致\n        // }\n      }\n    },\n    mounted() {\n      // 仅调试使用 打开浏览器控制台 用 vm 获取data中的属性修改。\n      // 如 vm.offset = [0, 0]  或 vm.offset[0] = 100\n      // 甚至加一个初始化未给的属性都可以\n      // vm.zoomOpts.zoomOutOptions = {size: '40px'}\n      window.vm = this\n    },\n    methods: {\n      load() {\n        this.$refs.navigation.load()\n      },\n      reload() {\n        this.$refs.navigation.reload()\n      },\n      unload() {\n        this.$refs.navigation.unload()\n      },\n      onNavigationEvt(e) {\n        console.log(e)\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"kuo-zhan-yong-fa\"><a class=\"header-anchor\" href=\"#kuo-zhan-yong-fa\">¶</a> 扩展用法</h3><p>按需定制导航组件。可用的组件有: <code>vc-compass</code>、<code>vc-zoom-control</code>、<code>vc-print</code>、<code>vc-mylocation</code>、<code>vc-location-bar</code>、<code>vc-distance-legend</code>。</p>", 2);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "按需自定义各导航组件")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-compass\n      position=\"left\"\n      :outerOptions=\"{name: 'svguse:#vc-icons-compass-outer', size: '250px'}\"\n      :innerOptions=\"{name: 'fa fa-compass', size: '60px', background: 'transparent', color: '#009688'}\"\n    ></vc-compass>\n    <vc-compass position=\"top\" :outerOptions=\"{name: 'svguse:#vc-icons-qq'}\"></vc-compass>\n    <vc-compass\n      position=\"top-right\"\n      :outerOptions=\"{name: 'fa fa-circle-o-notch'}\"\n      :innerOptions=\"{name: 'fa fa-circle', background: 'transparent'}\"\n    ></vc-compass>\n    <vc-compass position=\"right\" :enableCompassOuterRing=\"false\"></vc-compass>\n    <vc-zoom-control\n      position=\"bottom\"\n      direction=\"horizontal\"\n      :offset=\"[0, 30]\"\n      :zoomResetOptions=\"{size: '48px', color: '#21BA45'}\"\n    ></vc-zoom-control>\n    <vc-zoom-control position=\"bottom\" :enableResetButton=\"false\" borderRadius=\"0\" :offset=\"[0, 120]\"></vc-zoom-control>\n    <vc-print position=\"bottom-right\" downloadAutomatically></vc-print>\n    <vc-print\n      position=\"bottom-right\"\n      :offset=\"[40, 20]\"\n      :showPrintView=\"false\"\n      printAutomatically\n      size=\"28px\"\n      :round=\"false\"\n      label=\"打印分享\"\n      background=\"#31CCEC\"\n      name=\"fa fa-print\"\n    ></vc-print>\n    <!-- 浏览器定位 -->\n    <vc-my-location position=\"top-left\" color=\"#C10015\"></vc-my-location>\n    <!-- 高德 API 定位 -->\n    <vc-my-location\n      color=\"#9C27B0\"\n      :amap=\"{key: '42d22e6ed83f077bc28b7864718726de',version: '2.0',options: {timeout: 5000,noGeoLocation: 3,needAddress: true,extensions: 'all'},transformToWGS84: true}\"\n      position=\"top-left\"\n      :offset=\"[0, 60]\"\n      label=\"定位\"\n      stack\n      :round=\"false\"\n      background=\"#F2C037\"\n    ></vc-my-location>\n    <!-- 自定义 API 定位 -->\n    <vc-my-location position=\"top-left\" :offset=\"[60, 0]\" :customAPI=\"() => ({lng: 108, lat: 32})\"></vc-my-location>\n    <vc-location-bar position=\"bottom\"></vc-location-bar>\n    <vc-location-bar position=\"bottom\" :offset=\"[300, 35]\" :showCameraInfo=\"false\" :showPerformanceInfo=\"false\"></vc-location-bar>\n    <vc-location-bar position=\"bottom\" :offset=\"[-300, 35]\" :showCameraInfo=\"false\" :showMouseInfo=\"false\"></vc-location-bar>\n    <vc-location-bar position=\"top-left\" :offset=\"[120, 3]\" :showMouseInfo=\"false\" :showPerformanceInfo=\"false\"></vc-location-bar>\n    <vc-distance-legend position=\"bottom-left\" :offset=\"[5, 70]\" background=\"#26A69A\" barBackground=\"#F2C037\" :width=\"80\"></vc-distance-legend>\n    <vc-distance-legend position=\"bottom-left\" :offset=\"[5, 35]\"></vc-distance-legend>\n  </vc-viewer>\n</el-row>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"vcnavigation-shu-xing\"><a class=\"header-anchor\" href=\"#vcnavigation-shu-xing\">¶</a> VcNavigation 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> 指定导航组件位置。</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定导航组件基于位置的偏移量。</td></tr><tr><td>compassOpts</td><td>Object|false</td><td>与 <code>VcCompass</code> 保持一致</td><td><code>optional</code> 指定罗盘控件参数，false 即不显示。</td></tr><tr><td>zoomOpts</td><td>Object|false</td><td>与 <code>VcZoomControl</code> 保持一致</td><td><code>optional</code> 指定缩放控件参数，false 即不显示。</td></tr><tr><td>printOpts</td><td>Object|false</td><td>与 <code>VcPrint</code> 保持一致</td><td><code>optional</code> 指定打印控件参数，false 即不显示。</td></tr><tr><td>locationOpts</td><td>Object|false</td><td>与 <code>VcMyLocation</code> 保持一致</td><td><code>optional</code> 指定定位控件参数，false 即不显示。</td></tr><tr><td>otherOpts</td><td>Object|false</td><td></td><td><code>optional</code> 指定其他控件（位置栏和距离比例尺栏，视为一个整体）参数，false 即不显示。</td></tr></tbody></table><div class=\"tip\"><p>提示：其他控件（位置栏和距离比例尺栏，视为一个整体），位置没受 VcNavigation 控制。默认参数：</p><pre><code class=\"hljs\">otherOpts: {\n  position: &#39;botttom-right&#39;,\n  offset:[2, 3],\n  locationbarOpts: {}, // 与 VcLocationBar 保持一致\n  distancelegendOpts: {} // 与 VcDistanceLegend 保持一致\n}\n</code></pre></div><h3 id=\"vcnavigation-shi-jian\"><a class=\"header-anchor\" href=\"#vcnavigation-shi-jian\">¶</a> VcNavigation 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>zoomEvt</td><td></td><td>操作缩放控件时触发。</td></tr><tr><td>compassEvt</td><td></td><td>操作罗盘控件时触发。</td></tr><tr><td>locationEvt</td><td></td><td>操作定位控件时触发。</td></tr><tr><td>printEvt</td><td></td><td>操作打印控件时触发。</td></tr><tr><td>locationBarEvt</td><td></td><td>位置控件相关参数改变时触发。</td></tr><tr><td>distanceLegendEvt</td><td></td><td>距离比例尺改变时触发。</td></tr></tbody></table><h3 id=\"vccompass-shu-xing\"><a class=\"header-anchor\" href=\"#vccompass-shu-xing\">¶</a> VcCompass 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> 指定罗盘位置。（单独使用时有效）</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定罗盘基于位置的偏移量。 （单独使用时有效）</td></tr><tr><td>enableCompassOuterRing</td><td>String</td><td><code>true</code></td><td><code>optional</code> 指定罗盘外环是否可以操作。</td></tr><tr><td>duration</td><td>Number</td><td><code>1.5</code></td><td><code>optional</code> 指定双击罗盘恢复俯仰角飞行时间，单位秒。</td></tr><tr><td>outerOptions</td><td>Object</td><td></td><td><code>optional</code> 指定罗盘外环参数。</td></tr><tr><td>innerOptions</td><td>Object</td><td></td><td><code>optional</code> 指定罗盘内环参数。</td></tr><tr><td>markerOptions</td><td>Object</td><td></td><td><code>optional</code> 指定罗盘旋转时圆块参数。</td></tr></tbody></table><div class=\"tip\"><p>提示 <code>outerOptions</code>、<code>innerOptions</code>、<code>markerOptions</code> 默认参数：</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// outerOptions</span>\n{\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;vc-icons-compass-outer&#39;</span>, <span class=\"hljs-comment\">// 图标名称</span>\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;96px&#39;</span>,                   <span class=\"hljs-comment\">// 外环尺寸</span>\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#3f4854&#39;</span>,               <span class=\"hljs-comment\">// 外环颜色</span>\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,      <span class=\"hljs-comment\">// 外环背景</span>\n  <span class=\"hljs-attr\">tooltip</span>: {                      <span class=\"hljs-comment\">// false 即为不显示</span>\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,                  <span class=\"hljs-comment\">// 鼠标悬浮多久显示提示信息</span>\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,      <span class=\"hljs-comment\">// 提示信息锚点</span>\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]               <span class=\"hljs-comment\">// 提示信息位置偏移</span>\n  }\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// innerOptions</span>\n{\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;vc-icons-compass-outer&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;96px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#3f4854&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// markerOptions</span>\n{\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;vc-icons-compass-rotation-marker&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;96px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1976D2&#39;</span>\n}\n</code></pre></div><h3 id=\"vccompass-shi-jian\"><a class=\"header-anchor\" href=\"#vccompass-shi-jian\">¶</a> VcCompass 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>compassEvt</td><td></td><td>操作罗盘控件时触发。</td></tr></tbody></table><h3 id=\"vczoomcontrol-shu-xing\"><a class=\"header-anchor\" href=\"#vczoomcontrol-shu-xing\">¶</a> VcZoomControl 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> 指定缩放控件位置。（单独使用时有效）</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定缩放控件基于位置的偏移量。 （单独使用时有效）</td></tr><tr><td>enableResetButton</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否启用重置按钮。</td></tr><tr><td>zoomAmount</td><td>Number</td><td><code>2</code></td><td><code>optional</code> 指定放大缩小的数量级。</td></tr><tr><td>duration</td><td>String</td><td><code>0.5</code></td><td><code>optional</code> 指定放大缩小过程时间，单位秒。</td></tr><tr><td>durationReset</td><td>Number</td><td><code>1.5</code></td><td><code>optional</code> 指定重置到默认相机位置的时间，单位秒。</td></tr><tr><td>defaultResetView</td><td>Object</td><td></td><td><code>optional</code> 指定重置相机的位置。</td></tr><tr><td>overrideViewerCamera</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定初始化时是否覆盖<code>vc-viewer</code>上的<code>camera</code>属性。</td></tr><tr><td>background</td><td>String</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> 指定缩放控件背景。</td></tr><tr><td>border</td><td>String</td><td><code>&#39;solid 1px rgba(255, 255, 255, 0.2)&#39;</code></td><td><code>optional</code> 指定缩放控件边框。</td></tr><tr><td>borderRadius</td><td>String</td><td><code>&#39;100px&#39;</code></td><td><code>optional</code> 指定缩放控件边框圆角。</td></tr><tr><td>direction</td><td>String</td><td><code>&#39;vertical&#39;</code></td><td><code>optional</code> 指定缩放控件方向。可选<code>&#39;vertical&#39;, &#39;horizontal&#39;</code></td></tr><tr><td>zoomInOptions</td><td>Object</td><td></td><td><code>optional</code> 指定放大按钮参数。</td></tr><tr><td>zoomOutOptions</td><td>Object</td><td></td><td><code>optional</code> 指定缩小按钮参数。</td></tr><tr><td>zoomResetOptions</td><td>Object</td><td></td><td><code>optional</code> 指定重置按钮参数。</td></tr></tbody></table><div class=\"tip\"><p>提示：<code>durationReset</code>, <code>zoomInOptions</code>, <code>zoomOutOptions</code>, <code>zoomResetOptions</code> 默认参数：</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// defaultResetView</span>\n{\n  <span class=\"hljs-attr\">position</span>: {\n    <span class=\"hljs-attr\">lng</span>: <span class=\"hljs-number\">105</span>,\n    <span class=\"hljs-attr\">lat</span>: <span class=\"hljs-number\">30</span>,\n    <span class=\"hljs-attr\">height</span>: <span class=\"hljs-number\">19059568.5</span>\n  }\n}\n<span class=\"hljs-comment\">// 结构</span>\n{\n  position?: {\n    <span class=\"hljs-attr\">lng</span>: number,\n    <span class=\"hljs-attr\">lat</span>: number,\n    <span class=\"hljs-attr\">height</span>: number\n  } | [lng, lat, height]\n  rectange?: [west,south,east,north] | {west,south,east,north}\n  <span class=\"hljs-attr\">heading</span>: number\n  <span class=\"hljs-attr\">pitch</span>: number\n  <span class=\"hljs-attr\">roll</span>: number\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// zoomInOptions</span>\n{\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;vc-icons-zoom-in&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-literal\">undefined</span>,\n  <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// zoomResetOptions</span>\n{\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;vc-icons-reset&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-literal\">undefined</span>,\n  <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code></pre></div><h3 id=\"vczoomcontrol-shi-jian\"><a class=\"header-anchor\" href=\"#vczoomcontrol-shi-jian\">¶</a> VcZoomControl 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>zoomEvt</td><td></td><td>操作缩放控件时触发。</td></tr></tbody></table><h3 id=\"vcprint-shu-xing\"><a class=\"header-anchor\" href=\"#vcprint-shu-xing\">¶</a> VcPrint 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> 指定打印控件位置。（单独使用时有效）</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定打印控件基于位置的偏移量。 （单独使用时有效）</td></tr><tr><td>showCredit</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定打印图片时是否显示加载数据版权信息。</td></tr><tr><td>showPrintView</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否显示打印预览。</td></tr><tr><td>printAutomatically</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否自动打印。需要 showPrintView 设置为 false</td></tr><tr><td>downloadAutomatically</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否下载打印的图片。</td></tr><tr><td>name</td><td>String</td><td><code>&#39;vc-icons-capture&#39;</code></td><td><code>optional</code> 指定打印按钮图标。</td></tr><tr><td>size</td><td>String</td><td><code>&#39;24px&#39;</code></td><td><code>optional</code> 指定打印按钮尺寸。</td></tr><tr><td>color</td><td>String</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> 指定打印按钮颜色。</td></tr><tr><td>background</td><td>String</td><td><code>&#39;#fff&#39;</code></td><td><code>optional</code> 指定打印按钮背景。</td></tr><tr><td>round</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定打印按钮是否圆形展示。</td></tr><tr><td>flat</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定打印按钮是否是普通风格，不带背景、点击效果。</td></tr><tr><td>label</td><td>String</td><td></td><td><code>optional</code> 指定打印按钮文字。</td></tr><tr><td>stack</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定打印按钮是否堆叠显示。</td></tr><tr><td>tooltip</td><td>Object</td><td></td><td><code>optional</code> 指定打印按钮提示信息参数。</td></tr></tbody></table><h3 id=\"vcprint-shi-jian\"><a class=\"header-anchor\" href=\"#vcprint-shi-jian\">¶</a> VcPrint 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>printEvt</td><td></td><td>操作打印控件时触发。</td></tr></tbody></table><h3 id=\"vcmylocation-shu-xing\"><a class=\"header-anchor\" href=\"#vcmylocation-shu-xing\">¶</a> VcMyLocation 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> 指定定位按钮位置。（单独使用时有效）</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定定位按钮基于位置的偏移量。 （单独使用时有效）</td></tr><tr><td>geolocation</td><td>Object</td><td></td><td><code>optional</code> 指定浏览器定位参数。</td></tr><tr><td>amap</td><td>Object</td><td></td><td><code>optional</code> 指定高德定位参数。如果设置则优先使用高德定位。</td></tr><tr><td>id</td><td>String</td><td></td><td><code>optional</code> 指定定位成功后加载点的 id。</td></tr><tr><td>pointColor</td><td>Array|Object|String</td><td></td><td><code>optional</code> 指定定位成功后加载点的颜色。</td></tr><tr><td>pixelSize</td><td>Number</td><td><code>12.5</code></td><td><code>optional</code> 指定定位成功后加载点的大小。</td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>3</code></td><td><code>optional</code> 指定定位成功后加载点的外边框宽度。</td></tr><tr><td>outlineColor</td><td>Array|Object|String</td><td><code>&#39;#ffffff&#39;</code></td><td><code>optional</code> 指定定位成功后加载点的外边框颜色。</td></tr><tr><td>level</td><td>Number</td><td><code>6</code></td><td><code>optional</code> 指定定位成功后基于地形自动识别高度时的采样层级。</td></tr><tr><td>duration</td><td>Number</td><td><code>3</code></td><td><code>optional</code> 指定定位成功后飞行时间，单位秒。</td></tr><tr><td>customAPI</td><td>Function</td><td></td><td><code>optional</code> 指定自定义定位 API。</td></tr><tr><td>description</td><td>Function</td><td><code>0.01</code></td><td><code>optional</code> 指定自定义定位成功后该点的描述文字。</td></tr><tr><td>name</td><td>String</td><td><code>vc-icons-geolocation</code></td><td><code>optional</code> 指定定位按钮图标。</td></tr><tr><td>size</td><td>String</td><td><code>&#39;24px&#39;</code></td><td><code>optional</code> 指定定位按钮尺寸。</td></tr><tr><td>color</td><td>String</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> 指定定位按钮颜色。</td></tr><tr><td>background</td><td>String</td><td><code>&#39;#fff&#39;</code></td><td><code>optional</code> 指定定位按钮背景。</td></tr><tr><td>round</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定定位按钮是否圆形展示。</td></tr><tr><td>flat</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定定位按钮是否是普通风格，不带背景、点击效果。</td></tr><tr><td>label</td><td>String</td><td></td><td><code>optional</code> 指定定位按钮文字。</td></tr><tr><td>stack</td><td>Boolean</td><td></td><td><code>optional</code> 指定定位按钮是否堆叠显示。</td></tr><tr><td>tooltip</td><td>Object</td><td></td><td><code>optional</code> 指定定位按钮提示信息参数。</td></tr></tbody></table><h3 id=\"vcmylocation-shi-jian\"><a class=\"header-anchor\" href=\"#vcmylocation-shi-jian\">¶</a> VcMyLocation 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>locationEvt</td><td></td><td>操作定位按钮时触发。</td></tr></tbody></table><h3 id=\"vclocationbar-shu-xing\"><a class=\"header-anchor\" href=\"#vclocationbar-shu-xing\">¶</a> VcLocationBar 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>&#39;bottom-right&#39;</code></td><td><code>optional</code> 指定信息栏控件位置。（单独使用时有效）</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定信息栏控件基于位置的偏移量。 （单独使用时有效）</td></tr><tr><td>gridFileUrl</td><td>String</td><td><code>https://zouyaoji.top/vue-cesium/statics/SampleData/WW15MGH.DAC</code></td><td><code>optional</code> 指定鼠标拾取高度模型，用这个能提高获取的高度精度。</td></tr><tr><td>color</td><td>String</td><td><code>&#39;#fff&#39;</code></td><td><code>optional</code> 指定信息栏颜色。</td></tr><tr><td>background</td><td>String</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> 指定信息栏背景。</td></tr><tr><td>showCameraInfo</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定信息栏是否显示相机信息。</td></tr><tr><td>showMouseInfo</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定信息栏是否显示鼠标所指位置信息。</td></tr><tr><td>showPerformanceInfo</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定信息栏是否显示帧率信息。</td></tr><tr><td>tooltip</td><td>Object</td><td></td><td><code>optional</code> 指定信息栏提示信息参数。</td></tr></tbody></table><h3 id=\"vcmylocation-shi-jian-2\"><a class=\"header-anchor\" href=\"#vcmylocation-shi-jian-2\">¶</a> VcMyLocation 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>locationBarEvt</td><td></td><td>信息栏相关参数改变时触发。</td></tr></tbody></table><h3 id=\"vcdistancelegend-shu-xing\"><a class=\"header-anchor\" href=\"#vcdistancelegend-shu-xing\">¶</a> VcDistanceLegend 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>&#39;bottom-right&#39;</code></td><td><code>optional</code> 指定距离比例尺控件位置。（单独使用时有效）</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定距离比例尺控件基于位置的偏移量。 （单独使用时有效）</td></tr><tr><td>color</td><td>String</td><td><code>&#39;#fff&#39;</code></td><td><code>optional</code> 指定距离比例尺控件颜色。</td></tr><tr><td>background</td><td>String</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> 指定距离比例尺背景。</td></tr><tr><td>width</td><td>Number</td><td><code>100</code></td><td><code>optional</code> 指定距离比例尺宽度。</td></tr><tr><td>barBackground</td><td>String</td><td><code>&#39;#ffffff&#39;</code></td><td><code>optional</code> 指定距离比例尺上横线颜色。</td></tr></tbody></table><h3 id=\"vcdistancelegend-shi-jian\"><a class=\"header-anchor\" href=\"#vcdistancelegend-shi-jian\">¶</a> VcDistanceLegend 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>distanceLegendEvt</td><td></td><td>距离比例尺改变时触发。</td></tr></tbody></table>", 33);

function vc_navigationvue_type_template_id_9c58d5fa_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_vue_cesium_demo1 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo1");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_navigationvue_type_template_id_9c58d5fa_hoisted_1, [vc_navigationvue_type_template_id_9c58d5fa_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-navigation.md?vue&type=template&id=9c58d5fa

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-navigation.md?vue&type=script&lang=ts


/* harmony default export */ var vc_navigationvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        var _component_vc_navigation = _resolveComponent("vc-navigation");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_navigation, {
                  ref: "navigation"
                }, null, 512), _createVNode(_component_vc_navigation, {
                  position: _ctx.position,
                  offset: _ctx.offset,
                  compassOpts: _ctx.compassOpts,
                  zoomOpts: _ctx.zoomOpts,
                  locationOpts: _ctx.locationOpts,
                  otherOpts: _ctx.otherOpts,
                  onCompassEvt: _ctx.onNavigationEvt,
                  onZoomEvt: _ctx.onNavigationEvt,
                  onPrintEvt: _ctx.onNavigationEvt,
                  onLocationEvt: _ctx.onNavigationEvt,
                  onLocationBarEvt: _ctx.onNavigationEvt,
                  onDistanceLegendEvt: _ctx.onNavigationEvt
                }, null, 8, ["position", "offset", "compassOpts", "zoomOpts", "locationOpts", "otherOpts", "onCompassEvt", "onZoomEvt", "onPrintEvt", "onLocationEvt", "onLocationBarEvt", "onDistanceLegendEvt"])];
              }),
              _: 1
            }), _createVNode(_component_el_row, {
              class: "demo-toolbar"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.unload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.load
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.reload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }, 8, ["onClick"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 512)]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            position: 'top-left',
            offset: [10, 80],
            compassOpts: {
              enableCompassOuterRing: true,
              outerOptions: {
                name: 'svguse:#vc-icons-compass-outer',
                // svg 加载方式
                size: '120px'
              },
              innerOptions: {
                name: 'fa fa-compass',
                size: '24px',
                color: '#3f4854',
                background: '#fff'
              },
              markerOptions: {
                size: '120px',
                color: 'yellow'
              }
            },
            zoomOpts: {
              background: '#1976D2',
              direction: 'horizontal'
            },
            locationOpts: {
              color: 'red',
              // 使用高德api定位
              amap: {
                key: '42d22e6ed83f077bc28b7864718726de',
                version: '2.0',
                options: {
                  timeout: 5000,
                  noGeoLocation: 3,
                  needAddress: true,
                  extensions: 'all'
                },
                transformToWGS84: true
              }
            },
            otherOpts: false // otherOpts: {
            //   position: 'bottom-right',
            //   offset: [2, 3],
            //   locationbarOpts:  // 与 vc-location-bar 保持一致
            //   distancelegendOpts: // 与 vc-distance-legend 保持一致
            // }

          };
        },
        mounted: function mounted() {
          // 仅调试使用 打开浏览器控制台 用 vm 获取data中的属性修改。
          // 如 vm.offset = [0, 0]  或 vm.offset[0] = 100
          // 甚至加一个初始化未给的属性都可以
          // vm.zoomOpts.zoomOutOptions = {size: '40px'}
          window.vm = this;
        },
        methods: {
          load: function load() {
            this.$refs.navigation.load();
          },
          reload: function reload() {
            this.$refs.navigation.reload();
          },
          unload: function unload() {
            this.$refs.navigation.unload();
          },
          onNavigationEvt: function onNavigationEvt(e) {
            console.log(e);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "vue-cesium-demo1": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_vc_compass = _resolveComponent("vc-compass");

        var _component_vc_zoom_control = _resolveComponent("vc-zoom-control");

        var _component_vc_print = _resolveComponent("vc-print");

        var _component_vc_my_location = _resolveComponent("vc-my-location");

        var _component_vc_location_bar = _resolveComponent("vc-location-bar");

        var _component_vc_distance_legend = _resolveComponent("vc-distance-legend");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_compass, {
                  position: "left",
                  outerOptions: {
                    name: 'svguse:#vc-icons-compass-outer',
                    size: '250px'
                  },
                  innerOptions: {
                    name: 'fa fa-compass',
                    size: '60px',
                    background: 'transparent',
                    color: '#009688'
                  }
                }), _createVNode(_component_vc_compass, {
                  position: "top",
                  outerOptions: {
                    name: 'svguse:#vc-icons-qq'
                  }
                }), _createVNode(_component_vc_compass, {
                  position: "top-right",
                  outerOptions: {
                    name: 'fa fa-circle-o-notch'
                  },
                  innerOptions: {
                    name: 'fa fa-circle',
                    background: 'transparent'
                  }
                }), _createVNode(_component_vc_compass, {
                  position: "right",
                  enableCompassOuterRing: false
                }), _createVNode(_component_vc_zoom_control, {
                  position: "bottom",
                  direction: "horizontal",
                  offset: [0, 30],
                  zoomResetOptions: {
                    size: '48px',
                    color: '#21BA45'
                  }
                }), _createVNode(_component_vc_zoom_control, {
                  position: "bottom",
                  enableResetButton: false,
                  borderRadius: "0",
                  offset: [0, 120]
                }), _createVNode(_component_vc_print, {
                  position: "bottom-right",
                  downloadAutomatically: ""
                }), _createVNode(_component_vc_print, {
                  position: "bottom-right",
                  offset: [40, 20],
                  showPrintView: false,
                  printAutomatically: "",
                  size: "28px",
                  round: false,
                  label: "打印分享",
                  background: "#31CCEC",
                  name: "fa fa-print"
                }), _createVNode(_component_vc_my_location, {
                  position: "top-left",
                  color: "#C10015"
                }), _createVNode(_component_vc_my_location, {
                  color: "#9C27B0",
                  amap: {
                    key: '42d22e6ed83f077bc28b7864718726de',
                    version: '2.0',
                    options: {
                      timeout: 5000,
                      noGeoLocation: 3,
                      needAddress: true,
                      extensions: 'all'
                    },
                    transformToWGS84: true
                  },
                  position: "top-left",
                  offset: [0, 60],
                  label: "定位",
                  stack: "",
                  round: false,
                  background: "#F2C037"
                }, null, 8, ["amap"]), _createVNode(_component_vc_my_location, {
                  position: "top-left",
                  offset: [60, 0],
                  customAPI: function customAPI() {
                    return {
                      lng: 108,
                      lat: 32
                    };
                  }
                }, null, 8, ["customAPI"]), _createVNode(_component_vc_location_bar, {
                  position: "bottom"
                }), _createVNode(_component_vc_location_bar, {
                  position: "bottom",
                  offset: [300, 35],
                  showCameraInfo: false,
                  showPerformanceInfo: false
                }), _createVNode(_component_vc_location_bar, {
                  position: "bottom",
                  offset: [-300, 35],
                  showCameraInfo: false,
                  showMouseInfo: false
                }), _createVNode(_component_vc_location_bar, {
                  position: "top-left",
                  offset: [120, 3],
                  showMouseInfo: false,
                  showPerformanceInfo: false
                }), _createVNode(_component_vc_distance_legend, {
                  position: "bottom-left",
                  offset: [5, 70],
                  background: "#26A69A",
                  barBackground: "#F2C037",
                  width: 80
                }), _createVNode(_component_vc_distance_legend, {
                  position: "bottom-left",
                  offset: [5, 35]
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 512)]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-navigation.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-navigation.md



vc_navigationvue_type_script_lang_ts.render = vc_navigationvue_type_template_id_9c58d5fa_render

/* harmony default export */ var vc_navigation = __webpack_exports__["default"] = (vc_navigationvue_type_script_lang_ts);

/***/ })

}]);