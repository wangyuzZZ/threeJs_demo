<template>
  <div class="home app-container">
    <div class="container" id="container">
      <i
        class="el-icon-video-camera-solid"
        :class="videoHide ? 'show' : ''"
        @click="videoHide = videoHide ? false : true"
      ></i>
      <div class="configuration-diagram">
        <!-- 一号管道 -->
        <div class="pie pie-1">
          <img src="../../assets/images/home/pie1.png" alt="" srcset="" />
          <img
            src="../../assets/images/home/famen (1).png"
            alt=""
            srcset=""
            class="famen"
            v-if="!famen1"
            @click="famenClick('famen1', true)"
          />
          <img
            src="../../assets/images/home/famen (2).png"
            alt=""
            srcset=""
            class="famen"
            v-else
            @click="famenClick('famen1', false)"
          />
          <div class=""></div>
          <img
            src="../../assets/images/home/yaobi (4).png"
            alt=""
            v-if="yaobi1"
            srcset=""
            class="yaobi yaobi1"
            title="摇臂"
            @click="yaobiClick('yaobi1', false)"
          />
          <img
            src="../../assets/images/home/yaobi (3).png"
            alt=""
            v-else
            srcset=""
            class="yaobi yaobi2"
            title="摇臂"
            @click="yaobiClick('yaobi1', true)"
          />
          <p class="guandao"></p>
          <span class="liuliang">{{ famen1 ? 0 : 8 }}</span>
        </div>
        <!-- 二号管道 -->
        <div class="pie pie-2">
          <img src="../../assets/images/home/pie1.png" alt="" srcset="" />
          <img
            src="../../assets/images/home/famen (1).png"
            alt=""
            srcset=""
            class="famen"
            v-if="!famen2"
            @click="famenClick('famen2', true)"
          />
          <img
            src="../../assets/images/home/famen (2).png"
            alt=""
            srcset=""
            class="famen"
            v-else
            @click="famenClick('famen2', false)"
          />
          <img
            src="../../assets/images/home/yaobi (4).png"
            alt=""
            v-if="yaobi2"
            srcset=""
            class="yaobi yaobi1"
            title="摇臂"
            @click="yaobiClick('yaobi2', false)"
          />
          <img
            src="../../assets/images/home/yaobi (3).png"
            alt=""
            v-else
            srcset=""
            class="yaobi yaobi2"
            title="摇臂"
            @click="yaobiClick('yaobi2', true)"
          />
          <p class="guandao"></p>
          <span class="liuliang">{{ famen2 ? 0 : 5 }}</span>
        </div>
        <!-- 三号管道 -->
        <div class="pie pie-3">
          <img src="../../assets/images/home/pie1.png" alt="" srcset="" />
          <img
            src="../../assets/images/home/famen (1).png"
            alt=""
            srcset=""
            class="famen"
            v-if="!famen3"
            @click="famenClick('famen3', true)"
          />
          <img
            src="../../assets/images/home/famen (2).png"
            alt=""
            srcset=""
            class="famen"
            v-else
            @click="famenClick('famen3', false)"
          />
          <img
            src="../../assets/images/home/yaobi (4).png"
            alt=""
            v-if="yaobi3"
            srcset=""
            class="yaobi yaobi1"
            title="摇臂"
            @click="yaobiClick('yaobi3', false)"
          />
          <img
            src="../../assets/images/home/yaobi (3).png"
            alt=""
            v-else
            srcset=""
            class="yaobi yaobi2"
            title="摇臂"
            @click="yaobiClick('yaobi3', true)"
          />
          <p class="guandao"></p>
          <span class="liuliang">{{ famen3 ? 0 : 6 }}</span>
        </div>

        <img
          src="../../assets/images/home/wok.png"
          alt=""
          srcset=""
          class="wok-img"
        />
      </div>
      <div class="aside-container">
        <div class="container">
          <h3 class="header">实时数据</h3>
          <div class="content scrollbar-overflow">
            <div class="title">
              <div>
                <p>设备状态</p>
                <p class="status">正常</p>
              </div>
              <div>
                <p>持续时间</p>
                <p>20小时50分</p>
              </div>
            </div>
            <div class="table-data">
              <h4>一号炒锅</h4>
              <div class="table-data-content">
                <p class="row-data" v-for="item in tableData" :key="item.key">
                  <span>{{ item.name }}</span>
                  <span>{{ item.data }}</span>
                </p>
              </div>
              <!-- <el-table :data="tableData" style="width: 100%">
                <el-table-column
                  prop="batteryVoltage"
                  label="电池电压"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="controlModel"
                  label="控制模式"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="controlModel"
                  label="控制模式"
                  align="center"
                >
                </el-table-column>
              </el-table> -->
            </div>
          </div>
        </div>
        <div class="video-container">
          <h3 class="text">实时影像</h3>
          <video
            v-show="videoHide"
            style="width: 100%"
            id="videoElement"
            muted
            autoplay
            controls
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module"; //帧数显示
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { DDSLoader } from "three/examples/jsm/loaders/DDSLoader";
import { CSS2DRender } from "three-css2drender";
import { Object3D } from "three";
import * as echarts from "echarts";
import { getData } from "@/api/home/index.js";
export default {
  name: "Home",
  data() {
    return {
      yaobi1: false,
      yaobi2: false,
      yaobi3: false,
      famen1: true,
      famen2: true,
      famen3: true,
      videoHide: true,
      //场景（工厂）
      plant: {
        scene: null, //场景
        camera: null, //相机
        renderer: null, //webGL 渲染
        stats: null, //帧数
        curve: null, //曲线
        mouse: null, //鼠标事件
        raycaster: null, //光线投射用于进行鼠标拾取
        clickArr: [], //添加点击事件的模型
        // 管道
        pipeline: [
          {
            id: 1, //管道ID
            name: "一号管道", //管道名称
            flowRate: 0, //流速
            type: "peipeline",
            controlBtn: [
              {
                id: 1, //控制器ID
                name: "一号阀门", //控制器名称
                status: false, //状态
                type: "control", //类型
              },
            ],
          },
        ],
        // 控制器
        control: [
          {
            id: 1, //控制器ID
            name: "一号控制器", //管道名称
            status: false, //流速
            type: "control",
            controlBtn: [
              {
                id: 1, //管道ID
                name: "一号管道", //管道名称
                type: "peipeline", //类型
              },
            ],
          },
        ],
      },
      tableData: [],
      //管道
      pipeline: {
        pot1Pipeline: null, //一号罐体管道
        pot2Pipeline: null, //二号罐体管道
        pot3Pipeline: null, //三号罐体管道
      },
      // 材质
      textures: {
        // 不锈钢
        texture1: null,
        // 水
        texture2: null,
      },
      //点击
      clickArr: [],
      // 罐体图表
      echarts: {
        chart1: null,
        chart2: null,
        chart3: null,
      },
    };
  },
  created() {
    getData().then((res) => {
      let data = res.data.data;
      console.log(data);
      for (const key in data) {
        let name = null;
        switch (key) {
          case "batteryVoltage":
            {
              name = "电池电压";
            }
            break;
          case "controlModel":
            {
              name = "控制模式";
            }
            break;
          case "error":
            {
              name = "报警";
            }
            break;
          case "freeSwitch":
            {
              name = "火焰指示";
            }
            break;
          case "frequencySpeed":
            {
              name = "变频速度";
            }
            break;
          case "materialTemperature":
            {
              name = "物料温度";
            }
            break;
          case "materialTemperatureCompensate":
            {
              name = "物料温度补偿";
            }
            break;
          case "pidGain":
            {
              name = "PID增益";
            }
            break;
          case "pidIntegralTime":
            {
              name = "PID积分时间";
            }
            break;
          case "repairsSwitch":
            {
              name = "检修开关";
            }
            break;
          case "setMaterialTemperature":
            {
              name = "设物料温度";
            }
            break;
          case "setWokTemperature":
            {
              name = "设锅体温度";
            }
            break;
          case "stirSpeed":
            {
              name = "搅拌速度";
            }
            break;
          case "stirSwitch":
            {
              name = "搅拌开关";
            }
            break;
          case "temperatureMax":
            {
              name = "温度上限";
            }
            break;
          case "temperatureMin":
            {
              name = "温度下限";
            }
            break;
          case "wokTemperature":
            {
              name = "锅体温度";
            }
            break;
          case "wokTemperatureCompensate":
            {
              name = "锅体温度补偿";
            }
            break;
          case "pidDifferentialTime":
            {
              name = "PID微分时间";
            }
            break;
          case "hitStirSwitch":
            {
              name = "点动搅拌按钮";
            }
            break;
          case "heatSwitch":
            {
              name = "加热开关";
            }
            break;
          case "gear":
            {
              name = "手动档位";
            }
            break;
          case "needGear":
            {
              name = "需求的档位";
            }
            break;
          default: {
            name = key;
          }
        }
        this.tableData.push({
          key: key,
          data: data[key],
          name: name,
        });
      }
    });
    // this.intoTheTexture(); //导入材质
  },
  mounted() {
    // this.init(); //初始化
    // this.animate(); //动画效果
    // this.listener();
    var flvPlayer = null;
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById("videoElement");
      flvPlayer = flvjs.createPlayer({
        type: "flv",
        // 8080 对应Nginx监听的端口
        // rtmpLive 对应Nginx的路径
        url:
          "http://47.108.155.61:8305/live?port=1935&app=myapp&stream=video19",
      });
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
    }
  },
  methods: {
    /** 阀门 */
    famenClick(name, status) {
      console.log(name, status);
      this[name] = status;
    },
    /** 摇臂 */
    yaobiClick(name, staus) {
      console.log(name, staus);
      this[name] = staus;
    },
    /** 导入材质 */
    intoTheTexture() {
      let textureLoader = new THREE.TextureLoader(); //导入贴纸
      // 不锈钢
      let img = require("@/assets/images/work.jpg");
      let texture = textureLoader.load(img);
      let texture2 = textureLoader.load(img);
      let texture3 = textureLoader.load(img);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture2.wrapS = THREE.RepeatWrapping;
      texture2.wrapT = THREE.RepeatWrapping;
      texture3.wrapS = THREE.RepeatWrapping;
      texture3.wrapT = THREE.RepeatWrapping;
      this.textures.texture1 = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: false,
        opacity: 0.5,
      });
      this.textures.texture2 = new THREE.MeshBasicMaterial({
        map: texture2,
        transparent: false,
        opacity: 0.5,
      });
      this.textures.texture3 = new THREE.MeshBasicMaterial({
        map: texture3,
        transparent: false,
        opacity: 0.5,
      });
    },
    /** 初始化 */
    init() {
      const container = document.getElementById("container");
      this.plant.scene = new THREE.Scene(); //创建场景
      // 创建相机
      this.plant.camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      this.plant.camera.position.set(-40, 10, 0); //设置相机位置
      //   this.plant.stats = new Stats(); //实例化帧数显示器
      this.plant.camera.lookAt(new THREE.Vector3(0, 0, 0)); //设置相机关注点
      let ambient = new THREE.AmbientLight(0xffffff); //添加全局光源
      // let ambient = new THREE.AmbientLight(16777215);
      this.plant.scene.add(ambient); //将光源添加到场景中
      // this.plant.scene.add(new THREE.AxesHelper(20)); //添加辅助函数
      // var gridHelper = new THREE.GridHelper(300, 10, "gray", "gray"); // 添加地面网格
      // gridHelper.position.y = -10; //设置地面网格Y轴位置
      // gridHelper.position.x = 0; //设置地面网格X轴位置
      // this.plant.scene.add(gridHelper); //将地面网格添加到场景中
      this.intoFloorModel(); //导入地板
      this.intoTheWokModel(); // 导入炒锅模型
      this.intoThePotModel1(); //导入罐体
      this.intoThePotModel2(); //导入罐体
      this.intoThePotModel3(); //导入罐体
      this.pot1Pipeline(); //一号罐体管道
      this.pot2Pipeline(); //二号罐体管道
      this.pot3Pipeline(); //三号罐体管道
      this.initEcharts(); //导入图表
      this.initEcharts2(); //导入图表
      this.initEcharts3(); //导入图表
      //创建渲染器
      this.plant.renderer = new THREE.WebGLRenderer({
        antialias: true,
        transparent: true, //是否透明
        alpha: true, //是否可以设置背景色透明。
      });
      this.plant.renderer.setSize(window.innerWidth, window.innerHeight); //设置渲染的尺寸
      this.plant.renderer.setPixelRatio(window.devicePixelRatio);
      let controls = new OrbitControls(
        this.plant.camera,
        this.plant.renderer.domElement
      ); //调用控制器
      controls.damping = 0.2; //惯性滑动
      controls.enabled = true;
      controls.enableKeys = true;
      // controls.addEventListener("change", render); //添加事件监听
      // controls.maxPolarAngle = Math.PI / 2; //最大仰视角和俯视角
      // controls.minPolarAngle = 0; //最小仰视角和俯视角
      // controls.target = new THREE.Vector3(0, 50, 0); //Vector3 3维向量
      //挂载
      //   document
      //     .getElementById("container")
      //     .appendChild(this.plant.stats.domElement);
      document
        .getElementById("container")
        .appendChild(this.plant.renderer.domElement);
      window.addEventListener("resize", this.onSize, false); //添加监听事件
    },
    /** 监听放大/缩小 */
    onSize() {
      const container = document.getElementById("container");
      this.plant.camera.aspect = window.innerWidth / window.innerHeight;
      this.plant.renderer.setSize(window.innerWidth, window.innerHeight);
      this.plant.camera.updateProjectionMatrix();
    },
    /** 运动 */
    animate() {
      this.requestAnimationFrame = requestAnimationFrame(this.animate);
      // 旋转臂动画
      if (this.rotatingArm) {
        if (this.rotatingArm.userData.open == true) {
          this.rotatingArm.rotation.z += 0.05;
        } else {
          this.rotatingArm.rotation.z += 0;
        }
      }
      this.pipelineAnimation1(); //管道动画
      this.pipelineAnimation2(); //管道动画
      this.pipelineAnimation3(); //管道动画
      this.plant.renderer.render(this.plant.scene, this.plant.camera);
      //   this.plant.stats.update();
    },
    /** 管道动画 */
    pipelineAnimation1() {
      if (this.pipeline.pot1Pipeline.userData.open) {
        let pipeline = this.pipeline.pot1Pipeline;
        let image = new Image();
        image.src = require("../../assets/images/blue.jpg");
        image.onload = function () {
          pipeline.material.map.image = image;
          pipeline.material.map.repeat.x = 100;
          pipeline.material.map.repeat.y = 8;
          pipeline.material.map.offset.y = 0.5;
          pipeline.material.map.offset.x += 0.05;
          pipeline.material.map.needsUpdate = true;
        };
      } else {
        let pipeline = this.pipeline.pot1Pipeline;
        let image = new Image();
        image.src = require("../../assets/images/work.jpg");
        image.onload = function () {
          pipeline.material.map.image = image;
          pipeline.material.map.repeat.x = 1;
          pipeline.material.map.repeat.y = 100;
          pipeline.material.map.offset.x -= 0;
          pipeline.material.map.needsUpdate = true;
        };
      }
    },
    /** 管道动画 */
    pipelineAnimation2() {
      if (this.pipeline.pot2Pipeline.userData.open) {
        let pipeline = this.pipeline.pot2Pipeline;
        let image = new Image();
        image.src = require("../../assets/images/blue.jpg");
        image.onload = function () {
          pipeline.material.map.image = image;
          pipeline.material.map.repeat.x = 100;
          pipeline.material.map.repeat.y = 8;
          pipeline.material.map.offset.y = 0.5;
          pipeline.material.map.offset.x += 0.05;
          pipeline.material.map.needsUpdate = true;
        };
      } else {
        let pipeline = this.pipeline.pot2Pipeline;
        let image = new Image();
        image.src = require("../../assets/images/work.jpg");
        image.onload = function () {
          pipeline.material.map.image = image;
          pipeline.material.map.repeat.x = 1;
          pipeline.material.map.repeat.y = 100;
          pipeline.material.map.offset.x -= 0;
          pipeline.material.map.needsUpdate = true;
        };
      }
    },
    /** 管道动画 */
    pipelineAnimation3() {
      let pipeline = this.pipeline.pot3Pipeline;
      if (pipeline.userData.open) {
        let image = new Image();
        image.src = require("../../assets/images/blue.jpg");
        image.onload = function () {
          pipeline.material.map.image = image;
          pipeline.material.map.repeat.x = 100;
          pipeline.material.map.repeat.y = 8;
          pipeline.material.map.offset.y = 0.5;
          pipeline.material.map.offset.x += 0.05;
          pipeline.material.map.needsUpdate = true;
        };
      } else {
        let image = new Image();
        image.src = require("../../assets/images/work.jpg");
        image.onload = function () {
          pipeline.material.map.image = image;
          pipeline.material.map.repeat.x = 1;
          pipeline.material.map.repeat.y = 100;
          pipeline.material.map.offset.x -= 0;
          pipeline.material.map.needsUpdate = true;
        };
      }
    },
    /** 导入地板 */
    intoFloorModel() {
      var geometry = new THREE.CircleBufferGeometry(80, 32);
      let texture = new THREE.TextureLoader();
      let i = require("../../assets/images/floor.jpg");
      let floor = texture.load(i);
      floor.wrapS = THREE.RepeatWrapping;
      floor.wrapT = THREE.RepeatWrapping;
      // floor.repeat.x = 10;
      // floor.repeat.y = 8;
      // floor.offset.y = 0.5;
      var material = new THREE.MeshBasicMaterial({
        map: floor,
        transparent: true,
        opacity: 0.5,
      });
      var circle = new THREE.Mesh(geometry, material);
      // circle.position.set(0,-1,0)
      circle.rotation.x = Math.PI / -2;
      this.plant.scene.add(circle);
    },
    /** 导入炒锅模型 */
    intoTheWokModel() {
      let _this = this;
      this.clickArr = [];
      let obj3D = new Object3D();
      // 炒锅模型
      const manager = new THREE.LoadingManager();
      manager.addHandler(/\.dds$/i, new DDSLoader());
      let mtlLoader = new MTLLoader(manager);
      mtlLoader.setPath("/model/obj/wok/");
      mtlLoader.load("123456.mtl", function (materials) {
        materials.preload();
        let objLoader = new OBJLoader(manager);
        objLoader.setMaterials(materials);
        objLoader.setPath("/model/obj/wok/");
        objLoader.load("123456.obj", function (object) {
          object.children.forEach((mesh) => {
            if (mesh.id === 739) {
              console.log(mesh);
              _this.wokContorl = mesh;
            }
            _this.clickArr.push(mesh);
          });
          object.scale.set(0.1, 0.1, 0.1);
          obj3D.add(object);
          obj3D.position.set(0, 1, 0);
          _this.intoTheAniModel(obj3D);
          // _this.initContorl(); //炒锅控制面板
        });
      });
    },
    /** 导入旋转臂 */
    intoTheAniModel(obj3D) {
      let _this = this;
      const manager = new THREE.LoadingManager();
      manager.addHandler(/\.dds$/i, new DDSLoader());
      let mtlLoader = new MTLLoader(manager);
      mtlLoader.setPath("/model/obj/ani/");
      mtlLoader.load("ani.mtl", function (materials) {
        materials.preload();
        let objLoader = new OBJLoader(manager);
        objLoader.setMaterials(materials);
        objLoader.setPath("/model/obj/ani/");
        objLoader.load("ani.obj", function (object) {
          object.scale.set(0.1, 0.1, 0.1);
          obj3D.add(object);
          _this.rotatingArm = object;
          obj3D.rotation.x = Math.PI / 2;
          _this.plant.scene.add(obj3D);
        });
      });
    },
    /** 导入罐体1 */
    intoThePotModel1() {
      let _this = this;
      let mtlLoader = new MTLLoader();
      let objLoader = new OBJLoader();
      mtlLoader.setPath("/model/obj/pot/"); //导入材质（MTL文件）
      mtlLoader.load("321.mtl", function (materials) {
        materials.preload();
        objLoader.setMaterials(materials); //设置材质
        objLoader.setPath("/model/obj/pot/"); //设置文件路径
        objLoader.load("321.obj", function (object) {
          object.scale.set(0.1, 0.1, 0.1);
          object.rotation.x = Math.PI / 2;
          object.position.x = 30;
          object.children.forEach((mesh) => {
            _this.clickArr.push(mesh);
          });
          _this.plant.scene.add(object);
        });
      });
    },
    /** 导入罐体2 */
    intoThePotModel2() {
      let _this = this;
      const manager = new THREE.LoadingManager();
      manager.addHandler(/\.dds$/i, new DDSLoader());
      let mtlLoader = new MTLLoader(manager);
      mtlLoader.setPath("/model/obj/pot/");
      mtlLoader.load("321.mtl", function (materials) {
        materials.preload();
        let objLoader = new OBJLoader(manager);
        objLoader.setMaterials(materials);
        objLoader.setPath("/model/obj/pot/");
        objLoader.load("321.obj", function (object) {
          object.scale.set(0.1, 0.1, 0.1);
          object.rotation.x = Math.PI / 2;
          object.position.z = -20;
          object.position.x = 30;
          object.children.forEach((mesh) => {
            _this.clickArr.push(mesh);
          });
          _this.plant.scene.add(object);
        });
      });
    },
    /** 导入罐体3 */
    intoThePotModel3() {
      let _this = this;
      const manager = new THREE.LoadingManager();
      manager.addHandler(/\.dds$/i, new DDSLoader());
      let mtlLoader = new MTLLoader(manager);
      mtlLoader.setPath("/model/obj/pot/");
      mtlLoader.load("321.mtl", function (materials) {
        materials.preload();
        let objLoader = new OBJLoader(manager);
        objLoader.setMaterials(materials);
        objLoader.setPath("/model/obj/pot/");
        objLoader.load("321.obj", function (object) {
          object.scale.set(0.1, 0.1, 0.1);
          object.rotation.x = Math.PI / 2;
          object.position.z = -40;
          object.position.x = 30;
          object.children.forEach((mesh) => {
            _this.clickArr.push(mesh);
          });
          _this.plant.scene.add(object);
        });
      });
    },
    /** 罐体管道 */
    pot1Pipeline() {
      let arr = [
        new THREE.Vector3(2, 4, -1),
        new THREE.Vector3(2, 7, -1),
        new THREE.Vector3(42.45, 7, -1),
        new THREE.Vector3(42.45, 0.5, -1),
        new THREE.Vector3(42.45, 0.5, -11.5),
        new THREE.Vector3(42.45, 3.5, -11.5),
      ];
      let id = "pot1Pipeline";
      let curve = new THREE.CatmullRomCurve3(arr, false, "catmullrom", 0.01);
      let tubeGeometry = new THREE.TubeGeometry(curve, 100, 0.1, 100, false);
      this.pipeline[id] = new THREE.Mesh(tubeGeometry, this.textures.texture1);
      this.pipeline[id].userData.id = id;
      this.plant.scene.add(this.pipeline[id]);
    },
    /** 罐体管道 */
    pot2Pipeline() {
      let arr = [
        new THREE.Vector3(2, 4, 0),
        new THREE.Vector3(2, 7, 0),
        new THREE.Vector3(43.45, 7, 0),
        new THREE.Vector3(43.45, 0.5, 0),
        new THREE.Vector3(43.45, 0.5, -31.5),
        new THREE.Vector3(42.45, 0.5, -31.5),
        new THREE.Vector3(42.45, 3.5, -31.5),
      ];
      let id = "pot2Pipeline";
      let curve = new THREE.CatmullRomCurve3(arr, false, "catmullrom", 0.01);
      let tubeGeometry = new THREE.TubeGeometry(curve, 100, 0.1, 100, false);
      this.pipeline[id] = new THREE.Mesh(tubeGeometry, this.textures.texture2);
      this.pipeline[id].userData.id = id;
      this.plant.scene.add(this.pipeline[id]);
    },
    /** 罐体管道 */
    pot3Pipeline() {
      let arr = [
        new THREE.Vector3(2, 4, 1),
        new THREE.Vector3(2, 7, 1),
        new THREE.Vector3(44.45, 7, 1),
        new THREE.Vector3(44.45, 0.5, 1),
        new THREE.Vector3(44.45, 0.5, -51.5),
        new THREE.Vector3(42.45, 0.5, -51.5),
        new THREE.Vector3(42.45, 3.5, -51.5),
      ];
      let id = "pot3Pipeline";
      let curve = new THREE.CatmullRomCurve3(arr, false, "catmullrom", 0.01);
      let tubeGeometry = new THREE.TubeGeometry(curve, 100, 0.1, 100, false);
      this.pipeline[id] = new THREE.Mesh(tubeGeometry, this.textures.texture3);
      this.pipeline[id].userData.id = id;
      this.plant.scene.add(this.pipeline[id]);
    },
    /** 鼠标监听(点击) */
    listener() {
      let raycaster = new THREE.Raycaster();
      this.plant.mouse = new THREE.Vector2();
      let _this = this;
      document.addEventListener(
        "click",
        function () {
          event.preventDefault();
          _this.plant.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          _this.plant.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
          raycaster.setFromCamera(_this.plant.mouse, _this.plant.camera);
          //通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
          // 获取raycaster直线和所有模型相交的数组集合
          var intersects = raycaster.intersectObjects(_this.clickArr);
          //将所有的相交的模型的颜色设置为红色，如果只需要将第一个触发事件，那就数组的第一个模型改变颜色即可
          if (intersects.length > 0) {
            let obj = intersects[0].object;
            _this.dispatchingEvents(obj); //事件分发
          }
        },
        false
      );
    },
    /** 事件分发（点击） */
    dispatchingEvents(mesh) {
      console.log(mesh, mesh.id, mesh.name);
      switch (mesh.id) {
        // 一号阀门
        case 30:
          {
            if (mesh.userData.open) {
              mesh.userData.open = false;
              mesh.material.color.set(16777215);
              this.pipeline.pot1Pipeline.userData.open = false;
            } else {
              mesh.userData.open = true;
              mesh.material.color.set(65280);
              this.pipeline.pot1Pipeline.userData.open = true;
            }
          }
          break;
        // 二号阀门
        case 96:
          {
            if (mesh.userData.open) {
              mesh.userData.open = false;
              mesh.material.color.set(16777215);
              this.pipeline.pot2Pipeline.userData.open = false;
            } else {
              mesh.userData.open = true;
              mesh.material.color.set(65280);
              this.pipeline.pot2Pipeline.userData.open = true;
            }
          }
          break;
        // 三号阀门
        case 162:
          {
            if (mesh.userData.open) {
              mesh.userData.open = false;
              mesh.material.color.set(16777215);
              this.pipeline.pot3Pipeline.userData.open = false;
            } else {
              mesh.userData.open = true;
              mesh.material.color.set(65280);
              this.pipeline.pot3Pipeline.userData.open = true;
            }
          }
          break;
        // 一号罐体
        case 80:
          {
            this.echarts.chart1.visible = this.echarts.chart1.visible
              ? false
              : true;
          }
          break;
        // 二号罐体
        case 146:
          {
            this.echarts.chart2.visible = this.echarts.chart2.visible
              ? false
              : true;
          }
          break;
        // 三号罐体
        case 212:
          {
            this.echarts.chart3.visible = this.echarts.chart3.visible
              ? false
              : true;
          }
          break;
      }
    },
    /** 清除内存 */
    clearCache(item) {
      item.geometry.dispose();
      item.material.dispose();
    },
    /** 清除内存 */
    clearScene() {
      this.removeObj(this.plant.scene);
    },
    /** 删除 */
    removeObj(obj) {
      let arr = obj.children.filter((x) => x);
      arr.forEach((item) => {
        if (item.children.length) {
          this.removeObj(item);
        } else {
          this.clearCache(item);
          item.clear();
        }
      });
      obj.clear();
      arr = null;
    },
    /** 引入echarts图表 */
    initEcharts() {
      let _this = this;
      let canvas = document.createElement("canvas");
      canvas.width = 500;
      canvas.height = 500;
      let pieChart2 = echarts.init(canvas);
      let option2 = {
        title: {
          text: "1#室外储油罐",
          left: "center",
          textStyle: { color: "#fff", fontWeight: "bolder", fontSize: 48 },
        },
        grid: {
          show: true,
          backgroundColor: "rgba(128, 128, 128, 0.1)",
          borderColor: "#fff",
          borderWidth: 2,
        },
        textStyle: {
          color: "#fff",
          fontWeight: "bolder",
          fontSize: 48,
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          nameTextStyle: {
            fontWeight: "bolder",
            fontSize: 48,
          },
          axisLine: {
            lineStyle: { color: "#ffffff", width: 5 },
          },
        },
        yAxis: {
          type: "value",
          nameTextStyle: {
            fontWeight: "bolder",
            fontSize: 48,
          },
          axisLine: {
            lineStyle: { color: "#ffffff", width: 5 },
          },
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      };
      pieChart2.setOption(option2);

      pieChart2.on("finished", function () {
        var spriteMap = new THREE.TextureLoader().load(pieChart2.getDataURL());

        var spriteMaterial = new THREE.SpriteMaterial({
          transparent: true,
          map: spriteMap,
          side: THREE.DoubleSide,
        });

        var sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(20, 20, 20);
        _this.echarts.chart1 = sprite;
        sprite.position.set(40, 28, -11);
        _this.plant.scene.add(sprite);
      });
    },
    /** 引入echarts图表 */
    initEcharts2() {
      let _this = this;
      let canvas = document.createElement("canvas");
      canvas.width = 500;
      canvas.height = 500;
      let pieChart2 = echarts.init(canvas);
      let option2 = {
        title: {
          text: "2#室外储油罐",
          left: "center",
          textStyle: { color: "#fff", fontWeight: "bolder", fontSize: 48 },
        },
        grid: {
          show: true,
          backgroundColor: "rgba(128, 128, 128, 0.1)",
          borderColor: "#fff",
          borderWidth: 2,
        },
        textStyle: {
          color: "#fff",
          fontWeight: "bolder",
          fontSize: 48,
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          nameTextStyle: {
            fontWeight: "bolder",
            fontSize: 48,
          },
          axisLine: {
            lineStyle: { color: "#ffffff", width: 5 },
          },
        },
        yAxis: {
          type: "value",
          nameTextStyle: {
            fontWeight: "bolder",
            fontSize: 48,
          },
          axisLine: {
            lineStyle: { color: "#ffffff", width: 5 },
          },
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      };
      pieChart2.setOption(option2);

      pieChart2.on("finished", function () {
        var spriteMap = new THREE.TextureLoader().load(pieChart2.getDataURL());

        var spriteMaterial = new THREE.SpriteMaterial({
          transparent: true,
          map: spriteMap,
          side: THREE.DoubleSide,
        });

        var sprite = new THREE.Sprite(spriteMaterial);
        _this.echarts.chart2 = sprite;
        sprite.scale.set(20, 20, 20);
        sprite.position.set(40, 28, -31);
        _this.plant.scene.add(sprite);
      });
    },
    /** 引入echarts图表 */
    initEcharts3() {
      let _this = this;
      let canvas = document.createElement("canvas");
      canvas.width = 500;
      canvas.height = 500;
      let pieChart2 = echarts.init(canvas);
      let option2 = {
        title: {
          text: "3#室外储油罐",
          left: "center",
          textStyle: { color: "#fff", fontWeight: "bolder", fontSize: 48 },
        },
        grid: {
          show: true,
          backgroundColor: "rgba(128, 128, 128, 0.1)",
          borderColor: "#fff",
          borderWidth: 2,
        },
        textStyle: {
          color: "#fff",
          fontWeight: "bolder",
          fontSize: 48,
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          nameTextStyle: {
            fontWeight: "bolder",
            fontSize: 48,
          },
          axisLine: {
            lineStyle: { color: "#ffffff", width: 5 },
          },
        },
        yAxis: {
          type: "value",
          nameTextStyle: {
            fontWeight: "bolder",
            fontSize: 48,
          },
          axisLine: {
            lineStyle: { color: "#ffffff", width: 5 },
          },
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      };
      pieChart2.setOption(option2);

      pieChart2.on("finished", function () {
        var spriteMap = new THREE.TextureLoader().load(pieChart2.getDataURL());

        var spriteMaterial = new THREE.SpriteMaterial({
          transparent: true,
          map: spriteMap,
          side: THREE.DoubleSide,
        });

        var sprite = new THREE.Sprite(spriteMaterial);
        _this.echarts.chart3 = sprite;
        sprite.scale.set(20, 20, 20);
        sprite.position.set(40, 28, -51);
        _this.plant.scene.add(sprite);
      });
    },
    /** 炒锅操作面板 */
    initContorl() {
      console.log(this.wokContorl);
      var position = new THREE.Vector3(20, 30, 50);
      var windowPosition = this.transPosition(position);
      var left = windowPosition.x;
      var top = windowPosition.y;
      //设置div屏幕位置
      let div = document.getElementById("switch");
      div.style.left = left + "px";
      div.style.top = top + "px";
    },
    transPosition(position) {
      let world_vector = new THREE.Vector3(position.x, position.y, position.z);
      let vector = world_vector.project(this.plant.camera);
      let halfWidth = window.innerWidth / 2,
        halfHeight = window.innerHeight / 2;
      return {
        x: Math.round(vector.x * halfWidth + halfWidth),
        y: Math.round(-vector.y * halfHeight + halfHeight),
      };
    },
    /** openClick */
    openClick() {
      console.log("kai");
    },
    /** closeClick */
    closeClick() {
      console.log("guan");
    },
  },
  destroyed() {
    this.plant.renderer.renderLists.dispose();
    this.plant.renderer.dispose();
    this.plant.renderer.forceContextLoss();
    this.plant.renderer.domElement = null;
    this.plant.renderer.content = null;
    this.plant.renderer = null;
    cancelAnimationFrame(this.requestAnimationFrame);
    THREE.Cache.clear();
  },
};
</script>
<style lang="scss" scoped>
.home {
  min-width: 1280px;
  padding: 0;
  display: flex;
  justify-content: space-between;
  .container {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: relative;
    .configuration-diagram {
      width: 1100px;
      height: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      .pie {
        position: absolute;
        left: -90px;
        top: 200px;
        .famen {
          position: absolute;
          left: 50px;
          top: -10px;
          width: 30px;
          cursor: pointer;
        }
        .liuliang {
          border: 2px solid rgb(177, 202, 237);
          border-radius: 10px;
          padding: 5px 40px;
          position: absolute;
          top: -40px;
          left: 300px;
        }
        .yaobi {
          position: absolute;
          bottom: -22px;
          width: 100px;
          cursor: pointer;
        }
        .yaobi1 {
          right: -70px;
          bottom: -50px;
          transform: rotateX(180deg);
        }
        .yaobi2 {
          right: -70px;
          // transform: rotateY(180deg);
        }
        .guandao {
          width: 40px;
          height: 20px;
          background: #a7caed;
          position: absolute;
          right: -4px;
          bottom: -12px;
          z-index: 5;
        }
      }
      .pie-1 {
        z-index: 3;
        top: 290px;
      }
      .pie-2 {
        left: 0px;
        top: 180px;
        z-index: 2;
      }
      .pie-3 {
        left: 90px;
        top: 100px;
      }
      .wok-img {
        position: absolute;
        top: 450px;
        left: 460px;
        transform: scale(1.8);
      }
      @media screen and(max-width: 1780px) {
        .pie-1 {
          left: -50px;
        }
        .pie-2 {
          left: 40px;
        }
        .pie-3 {
          left: 110px;
        }
        .wok-img {
          left: 500px;
        }
      }
      @media screen and(max-width: 1700px) {
        .pie {
          position: absolute;
          left: 0px;
          top: 200px;
          transform: scale(0.7);
        }
        .pie-1 {
          z-index: 3;
          top: 280px;
        }
        .pie-2 {
          left: 90px;
          top: 180px;
          z-index: 2;
        }
        .pie-3 {
          left: 180px;
          top: 100px;
        }
        .wok-img {
          position: absolute;
          top: 400px;
          left: 420px;
          transform: scale(1.5);
        }
      }
      @media screen and(max-width: 1460px) {
        .pie {
          position: absolute;
          left: 0px;
          top: 200px;
          transform: scale(0.5);
        }
        .pie-1 {
          z-index: 3;
          top: 190px;
        }
        .pie-2 {
          left: 90px;
          top: 140px;
          z-index: 2;
        }
        .pie-3 {
          left: 180px;
          top: 90px;
        }
        .wok-img {
          position: absolute;
          top: 270px;
          left: 370px;
          transform: scale(1.3);
        }
      }
    }
    .el-icon-video-camera-solid {
      z-index: 2;
      font-size: 10rem;
      position: absolute;
      right: 380px;
      top: 20px;
      cursor: pointer;
      // color: rgba($color: #fff, $alpha: 0.5);
      color: rgba($color: #000, $alpha: 0.5);
    }
    .el-icon-video-camera-solid:hover {
      // color: rgba($color: #fff, $alpha: 0.8);
      color: rgba($color: #000, $alpha: 0.8);
    }
    .show {
      // color: rgba($color: #fff, $alpha: 0.8);
      color: rgba($color: #000, $alpha: 0.8);
    }

    .aside-container {
      z-index: 1;
      box-sizing: border-box;
      width: 350px;
      position: absolute;
      border-left: 2px solid rgba($color: rgb(190, 184, 184), $alpha: 0.1);
      right: 0;
      top: 0;
      height: 100%;
      // background: rgba($color: #000, $alpha: 0.1);
      .container {
        width: 100%;
        height: calc(100% - 250px);
        .header {
          box-sizing: border-box;
          height: 50px;
          margin: 0;
          line-height: 50px;
          padding-left: 10px;
          // color: rgba($color: #fff, $alpha: 0.8);
        }
        .content {
          height: calc(100% - 50px);
          .title {
            display: flex;
            justify-content: space-between;
            div {
              width: 50%;
              .status {
                color: rgb(10, 233, 10);
              }
              p {
                text-align: center;
                // color: rgba($color: #fff, $alpha: 0.8);
              }
              p:last-child {
                font-size: 1.1rem;
                font-weight: bold;
              }
            }
          }
          .table-data {
            h4 {
              text-align: center;
              // color: rgba($color: #fff, $alpha: 0.8);
            }
            .table-data-content {
              .row-data {
                span {
                  box-sizing: border-box;
                  padding: 0 10px;
                  display: inline-block;
                  width: 50%;
                  text-align: left;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
            /deep/.el-table {
              background: transparent;
              .el-table__header-wrapper {
                .el-table__header {
                  .has-gutter {
                    tr {
                      background: transparent;
                      th {
                        background: transparent;
                        border: none;
                        // color: white;
                        font-size: 1rem;
                      }
                    }
                  }
                }
              }
              .el-table__body-wrapper {
                background: transparent;
                .el-table__body {
                  background: transparent;
                  .el-table__row {
                    background: transparent;
                    cursor: pointer;
                    td {
                      //   border-top: 1px solid white;
                      border: none;
                      // color: white;
                    }
                  }
                  .el-table__row:hover {
                    background: transparent;
                    td {
                      background: transparent;
                    }
                  }
                }
              }
              .el-table__body-wrapper::-webkit-scrollbar {
                display: none;
              }
            }
          }
        }
      }
      .video-container {
        box-sizing: border-box;
        width: 100%;
        border-top: 1px solid rgba($color: #000000, $alpha: 0.2);
        border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        min-height: 250px;
        position: relative;
        .text {
          color: rgba($color: #000, $alpha: 0.2);
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 35px;
        }
      }
    }
  }
  #switch {
    position: absolute;
    z-index: 2;
    .el-button {
      cursor: pointer;
    }
  }
}
</style>