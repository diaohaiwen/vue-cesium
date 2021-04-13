(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-polyline-volume.md?vue&type=template&id=e5727afc

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"xian-zhu-ti\"><a class=\"header-anchor\" href=\"#xian-zhu-ti\">¶</a> 线柱体</h2><p><code>vc-graphics-polyline-volume</code> 组件用于加载线柱体，相当于初始化一个 <code>Cesium.PolylineVolumeGraphics</code> 实例。需要作为 <code>vc-entity</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>线柱体组件的基础用法。</p>", 4);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-graphics-polyline-volume"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加线柱体对象。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity>\n      <vc-graphics-polyline-volume\n        ref=\"polylineVolume1\"\n        :positions=\"[[-85,32],[-85,36],[-89,36]]\"\n        :shape=\"shape1\"\n        material=\"red\"\n      ></vc-graphics-polyline-volume>\n    </vc-entity>\n    <vc-entity>\n      <vc-graphics-polyline-volume\n        :positions=\"[-90,32,0,-90,36,100000,-94,36,0]\"\n        :shape=\"[{ x: -50000, y: -50000 }, { x: 50000, y: -50000 }, { x: -50000, y: 50000 }, { x: -50000, y: 50000 }]\"\n        :material=\"[0,255,0,125]\"\n        :outline=\"true\"\n        outlineColor=\"black\"\n        :cornerType=\"2\"\n        ref=\"polylineVolume2\"\n      ></vc-graphics-polyline-volume>\n    </vc-entity>\n    <vc-entity>\n      <vc-graphics-polyline-volume\n        :positions=\"[{ lng: -95.0, lat: 32.0, height: 0.0 }, { lng: -95.0, lat: 36.0, height: 100000.0 }, { lng: -99.0, lat: 36.0, height: 200000.0 }]\"\n        :shape=\"shape3\"\n        material=\"blue\"\n        :cornerType=\"0\"\n        ref=\"polylineVolume3\"\n      ></vc-graphics-polyline-volume>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const polylineVolume1 = ref(null)\n      const polylineVolume2 = ref(null)\n      const polylineVolume3 = ref(null)\n      const shape1 = ref(null)\n      const shape3 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n        shape1.value = computeCircle(60000)\n        shape3.value = computeStar(7, 70000, 50000)\n      }\n      const computeCircle = radius => {\n        let positions = []\n        for (let i = 0; i < 360; i++) {\n          let radians = Cesium.Math.toRadians(i)\n          positions.push({ x: radius * Math.cos(radians), y: radius * Math.sin(radians) })\n        }\n        return positions\n      }\n      const computeStar = (arms, rOuter, rInner) => {\n        let angle = Math.PI / arms\n        let length = 2 * arms\n        let positions = new Array(length)\n        for (let i = 0; i < length; i++) {\n          let r = i % 2 === 0 ? rOuter : rInner\n          positions[i] = { x: Math.cos(i * angle) * r, y: Math.sin(i * angle) * r }\n        }\n        return positions\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([polylineVolume1.value.createPromise, polylineVolume2.value.createPromise, polylineVolume3.value.createPromise]).then(\n          instances => {\n            instances[0].viewer.zoomTo(instances[0].viewer.entities)\n          }\n        )\n      })\n\n      return {\n        onEntityEvt,\n        polylineVolume1,\n        polylineVolume2,\n        polylineVolume3,\n        onViewerReady,\n        shape1,\n        shape3\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 volume 是否显示。</td></tr><tr><td>positions</td><td>Array</td><td></td><td><code>optional</code> 指定 volume 位置信息数组。</td></tr><tr><td>shape</td><td>Array</td><td></td><td><code>optional</code> 指定表达 volume 拉伸的形状参数。</td></tr><tr><td>cornerType</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 volume 转角类型。</td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> 指定每个经度和纬度之间的角距离。</td></tr><tr><td>fill</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 volume 是否填充材质。</td></tr><tr><td>material</td><td>Object|String|Array</td><td></td><td><code>optional</code> 指定 volume 材质。</td></tr><tr><td>outline</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定 volume 是否绘制轮廓线。</td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td></td><td><code>optional</code> 指定 volume 轮廓线颜色。</td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定 volume 轮廓线宽度。</td></tr><tr><td>shadows</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 volume 是否投射或接受每个光源的阴影。</td></tr><tr><td>distanceDisplayCondition</td><td>Object</td><td></td><td><code>optional</code> 指定 volume 随相机距离改变是否显示参数。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeGraphics.html\">PolylineVolumeGraphics</a></strong></li></ul>", 6);

function vc_graphics_polyline_volumevue_type_template_id_e5727afc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polyline-volume.md?vue&type=template&id=e5727afc

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-polyline-volume.md?vue&type=script&lang=ts


/* harmony default export */ var vc_graphics_polyline_volumevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_vc_graphics_polyline_volume = _resolveComponent("vc-graphics-polyline-volume");

        var _component_vc_entity = _resolveComponent("vc-entity");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, {
              onReady: _ctx.onViewerReady
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_entity, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_polyline_volume, {
                      ref: "polylineVolume1",
                      positions: [[-85, 32], [-85, 36], [-89, 36]],
                      shape: _ctx.shape1,
                      material: "red"
                    }, null, 8, ["shape"])];
                  }),
                  _: 1
                }), _createVNode(_component_vc_entity, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_polyline_volume, {
                      positions: [-90, 32, 0, -90, 36, 100000, -94, 36, 0],
                      shape: [{
                        x: -50000,
                        y: -50000
                      }, {
                        x: 50000,
                        y: -50000
                      }, {
                        x: -50000,
                        y: 50000
                      }, {
                        x: -50000,
                        y: 50000
                      }],
                      material: [0, 255, 0, 125],
                      outline: true,
                      outlineColor: "black",
                      cornerType: 2,
                      ref: "polylineVolume2"
                    }, null, 512)];
                  }),
                  _: 1
                }), _createVNode(_component_vc_entity, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_polyline_volume, {
                      positions: [{
                        lng: -95.0,
                        lat: 32.0,
                        height: 0.0
                      }, {
                        lng: -95.0,
                        lat: 36.0,
                        height: 100000.0
                      }, {
                        lng: -99.0,
                        lat: 36.0,
                        height: 200000.0
                      }],
                      shape: _ctx.shape3,
                      material: "blue",
                      cornerType: 0,
                      ref: "polylineVolume3"
                    }, null, 8, ["positions", "shape"])];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }, 8, ["onReady"])];
          }),
          _: 1
        }, 512)]);
      }

      var ref = vue_esm_browser["K" /* ref */],
          getCurrentInstance = vue_esm_browser["q" /* getCurrentInstance */],
          onMounted = vue_esm_browser["C" /* onMounted */];
      var democomponentExport = {
        setup: function setup() {
          // state
          var polylineVolume1 = ref(null);
          var polylineVolume2 = ref(null);
          var polylineVolume3 = ref(null);
          var shape1 = ref(null);
          var shape3 = ref(null); // methods

          var onEntityEvt = function onEntityEvt(e) {
            console.log(e);
          };

          var onViewerReady = function onViewerReady(cesiumInstance) {
            console.log('viewer ready');
            shape1.value = computeCircle(60000);
            shape3.value = computeStar(7, 70000, 50000);
          };

          var computeCircle = function computeCircle(radius) {
            var positions = [];

            for (var i = 0; i < 360; i++) {
              var radians = Cesium.Math.toRadians(i);
              positions.push({
                x: radius * Math.cos(radians),
                y: radius * Math.sin(radians)
              });
            }

            return positions;
          };

          var computeStar = function computeStar(arms, rOuter, rInner) {
            var angle = Math.PI / arms;
            var length = 2 * arms;
            var positions = new Array(length);

            for (var i = 0; i < length; i++) {
              var r = i % 2 === 0 ? rOuter : rInner;
              positions[i] = {
                x: Math.cos(i * angle) * r,
                y: Math.sin(i * angle) * r
              };
            }

            return positions;
          }; // life cycle


          onMounted(function () {
            Promise.all([polylineVolume1.value.createPromise, polylineVolume2.value.createPromise, polylineVolume3.value.createPromise]).then(function (instances) {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt: onEntityEvt,
            polylineVolume1: polylineVolume1,
            polylineVolume2: polylineVolume2,
            polylineVolume3: polylineVolume3,
            onViewerReady: onViewerReady,
            shape1: shape1,
            shape3: shape3
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polyline-volume.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polyline-volume.md



vc_graphics_polyline_volumevue_type_script_lang_ts.render = vc_graphics_polyline_volumevue_type_template_id_e5727afc_render

/* harmony default export */ var vc_graphics_polyline_volume = __webpack_exports__["default"] = (vc_graphics_polyline_volumevue_type_script_lang_ts);

/***/ })

}]);