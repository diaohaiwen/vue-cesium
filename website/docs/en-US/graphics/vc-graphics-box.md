## 立方盒

`vc-graphics-box` 组件用于加载立方盒实体，相当于初始化一个 `Cesium.BoxGraphics` 实例。需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

立方盒组件的基础用法。

:::demo 使用 `vc-graphics-box` 标签在三维球上添加实体立方盒。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- 通过属性加载 和 子组件分别加载 -->
    <vc-entity
      ref="entity1"
      :position="options.position1"
      :description="options.description"
      @click="onEntityEvt"
      @mouseover="onEntityEvt"
      @mouseout="onEntityEvt"
    >
      <vc-graphics-box :dimensions="options.dimensions1" :material="options.material1"></vc-graphics-box>
    </vc-entity>
    <vc-entity ref="entity2" :position="options.position2" :description="options.description">
      <vc-graphics-box
        :dimensions="options.dimensions2"
        :material="options.material2"
        :outlineColor="options.outlineColor2"
        :outline="true"
      ></vc-graphics-box>
    </vc-entity>
    <vc-entity ref="entity3" :position="options.position3" :description="options.description">
      <vc-graphics-box :dimensions="options.dimensions3" :outlineColor="options.outlineColor3" :fill="false" :outline="true"></vc-graphics-box>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // state
      const options = {
        description: 'Hello Vue Cesium',

        position1: { lng: 105.0, lat: 40.0, height: 300000.0 },
        dimensions1: { x: 400000.0, y: 300000.0, z: 500000.0 },
        material1: 'BLUE',

        position2: { lng: 110.0, lat: 40.0, height: 300000.0 },
        dimensions2: { x: 400000.0, y: 300000.0, z: 500000.0 },
        material2: 'RED',
        outlineColor2: 'BLACK',

        position3: { lng: 100.0, lat: 40.0, height: 300000.0 },
        dimensions3: { x: 400000.0, y: 300000.0, z: 500000.0 },
        outlineColor3: 'YELLOW'
      }
      const entity1 = ref(null)
      const entity2 = ref(null)
      const entity3 = ref(null)
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      // life cycle
      onMounted(() => {
        Promise.all([entity1.value.createPromise, entity2.value.createPromise, entity3.value.createPromise]).then(instances => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      })

      return {
        onEntityEvt,
        entity1,
        entity2,
        entity3,
        options
      }
    }
  }
</script>
```

:::

### 属性

| 属性名                   | 类型                     | 默认值    | 描述                                                  |
| ------------------------ | ------------------------ | --------- | ----------------------------------------------------- |
| show                     | Boolean                  | `true`    | `optional` 指定 box 是否可见。                        |
| dimensions               | Cartesian3               |           | `optional` 指定 box 的长宽高。                        |
| heightReference          | HeightReference          |           | `optional` 指定 box 高度模式。                        |
| fill                     | Boolean                  | `true`    | `optional` 指定 box 是否按提供的材质填充。            |
| material                 | MaterialProperty         | `'WHITE'` | `optional` 指定 box 材质。                            |
| outline                  | Boolean                  | `false`   | `optional` 指定是否绘制 box 轮廓线。                  |
| outlineColor             | Color                    | `'BLACK'` | `optional` 指定是否绘制 box 轮廓线的颜色。            |
| outlineWidth             | Number                   | `1.0`     | `optional` 指定绘制 box 轮廓线的宽度。                |
| shadows                  | ShadowMode               | `0`       | `optional` 指定这些是否投射或接收来自每个光源的阴影。 |
| distanceDisplayCondition | DistanceDisplayCondition |           | `optional` 指定 box 显示条件。                        |

### 事件

| 事件名            | 参数 | 描述                                     |
| ----------------- | ---- | ---------------------------------------- |
| definitionChanged |      | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[BoxGraphics](https://cesium.com/docs/cesiumjs-ref-doc/BoxGraphics.html)**