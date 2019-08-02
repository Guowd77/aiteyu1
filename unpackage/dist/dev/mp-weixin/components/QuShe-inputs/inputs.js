(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/QuShe-inputs/inputs"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\inputs.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Documents/WeChat Files/guoweiduo2333/FileStorage/File/2019-05/aiteyu-master/components/QuShe-inputs/inputs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





























































































































































































































































var _app2 = _interopRequireDefault(__webpack_require__(/*! ./app.js */ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\app.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var uniIcon = function uniIcon() {return __webpack_require__.e(/*! import() | components/QuShe-inputs/uni-icon */ "components/QuShe-inputs/uni-icon").then(__webpack_require__.bind(null, /*! ./uni-icon.vue */ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\uni-icon.vue"));};var pickersDate = function pickersDate() {return __webpack_require__.e(/*! import() | components/QuShe-inputs/pickers-date */ "components/QuShe-inputs/pickers-date").then(__webpack_require__.bind(null, /*! ./pickers-date.vue */ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\pickers-date.vue"));};var pickersCity = function pickersCity() {return __webpack_require__.e(/*! import() | components/QuShe-inputs/mpvue-citypicker/picker-city */ "components/QuShe-inputs/mpvue-citypicker/picker-city").then(__webpack_require__.bind(null, /*! ./mpvue-citypicker/picker-city.vue */ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\mpvue-citypicker\\picker-city.vue"));};var pickerCustom = function pickerCustom() {return __webpack_require__.e(/*! import() | components/QuShe-inputs/picker-custom */ "components/QuShe-inputs/picker-custom").then(__webpack_require__.bind(null, /*! ./picker-custom.vue */ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\picker-custom.vue"));};var pickerCustom2 = function pickerCustom2() {return __webpack_require__.e(/*! import() | components/QuShe-inputs/picker-custom2 */ "components/QuShe-inputs/picker-custom2").then(__webpack_require__.bind(null, /*! ./picker-custom2.vue */ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\picker-custom2.vue"));};var pickerProvincialStreet = function pickerProvincialStreet() {return __webpack_require__.e(/*! import() | components/QuShe-inputs/mpvue-citypicker/picker-provincialStreet */ "components/QuShe-inputs/mpvue-citypicker/picker-provincialStreet").then(__webpack_require__.bind(null, /*! ./mpvue-citypicker/picker-provincialStreet.vue */ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\mpvue-citypicker\\picker-provincialStreet.vue"));};var debounceName = 'inputdebounce_';var inputDebounce = {};var _default2 = { name: 'inputs', props: { activitype: String, inputsArray: { //用户自定义的输入类型
      type: Array, default: function _default() {return [];} }, titleSet: { type: Object, default: function _default() {return { size: 14, color: '#666666', layout: 'left' };} }, contentSet: { type: Object, default: function _default() {return { size: 13, width: 90, layout: 'right' };} }, ruleSet: { //需用户同意的规则或协议
      type: Object, default: function _default() {return { color: '#007aff', checkbox_color: '#007aff', itemArray: [] };} }, ruleArray: { type: Array, default: function _default() {return [];} }, activeName: { type: String, default: '' }, //发送按钮的名字
    ifCode: { //是否需要验证码
      type: Boolean, default: false }, ifRule: { // 是否需要规则
      type: Boolean, default: false }, onLoadData: { // 数据变量名（+index）
      type: String, default: 'data_' }, cssMode: { //拥有子数组序列类型的布局方式
      type: String, default: 'wrap' }, submitReSet: { //提交后重置
      type: Boolean, default: false }, animationType: { //动画类型
      type: String, default: '' }, animationDuration: { //动画时长系数
      type: Number, default: .2 }, buttonStyle: { type: Object, default: function _default() {return { activeButton: '', changeButton: '', selectButton: '', confirmButton: '', getcodeButton: '' };} }, titleHide: { type: Boolean, default: false }, inputDebounceSet: { type: Object, default: function _default() {return { openInputDebounce: false, delay: 500 };} } }, data: function data() {// 获取系统信息并记录屏幕宽高来确定布局样式
    var systemData = uni.getSystemInfoSync();var wH = systemData.windowHeight;var wW = systemData.windowWidth;var scale_one = .021; //title(左边)字体大小系数
    var scale_two = .018; //content(右边)字体大小系数
    return { btnnums: 5, btnWith: null, code: '', //本地验证码
      userCode: '', //用户输入的验证码
      Igree: false, //用户是否同意规则或协议
      codeCount: 90, //获取验证码后倒计时时间
      startCode: false, //获取验证码状态
      picsObj: {}, //pics类型存储值
      scale_one: scale_one, //title(左边)字体大小系数
      scale_two: scale_two, //content(右边)字体大小系数
      wH: wH, //屏幕高度
      wW: wW, //屏幕宽度
      maskShow: false, //遮罩层是否显示
      pickerDateShow: false, //picker-date组件是否显示
      pickerCityShow: false, //picker-city组件是否显示
      pickerCustomShow: false, //picker-custom组件是否显示
      pickerCustom2Show: false, //picker-custom2组件是否显示
      pickerProvincialStreetShow: false, //picker-provincialStreetShow组件是否显示
      P_data: {}, //picker类型显示对象暂存
      pickerObj: {}, //picker类型视图对象暂存
      inputsObj: {}, //inputsArray除特有暂存对象外的各类型视图暂存对象
      classObj: { segmentationTitle: 'font-size:' + wH * .024 + 'px;padding:' + wH * .015 + 'px ' + wW * .03 + 'px;', titleFs: 'font-size:' + (this.titleSet.size || wH * scale_one) + 'px;', titleColor: 'color:' + (this.titleSet.color || '#666666') + ';', content: 'font-size:' + (this.contentSet.size || wH * scale_two) + 'px;', contentWidth: 'width:' + (this.titleHide ? this.contentSet.width : '100') + '%;', //class非style
        contentsLayout: this.titleHide ? this.contentSet.layout == 'left' ? 'flex_row_none_c' : this.contentSet.layout == 'center' ? 'flex_row_c_c' : 'flex_row_e_c' : 'flex_row_e_c', contentLayout: this.contentSet.layout == 'left' ? 'flex_row_none_c' : this.contentSet.layout == 'center' ? 'flex_row_c_c' : 'flex_row_e_c', titleLayout: this.titleSet.layout == 'left' ? 'flex_row_none_c' : this.titleSet.layout == 'center' ? 'flex_row_c_c' : 'flex_row_e_c', contentsWidth: this.titleHide ? 'width100' : 'width75', contentSize: this.contentSet.size || wH * scale_two, //number
        iconSize: (this.contentSet.size || wH * scale_two) + 8, //number
        padding1_0: 'padding:' + wH * .01 + 'px 0;', padding1: 'padding:' + wH * .01 + 'px;', padding0_3: 'padding:' + '0 ' + wW * .013 + 'px;', padding2_3: 'padding:' + wH * .02 + 'px ' + wW * .03 + 'px;', padding1_3: 'padding:' + wH * .01 + 'px ' + wW * .03 + 'px;', margin2_3: 'margin:' + wH * .02 + 'px ' + wH * .03 + 'px;', margin0_15: 'margin: 0 ' + wH * .015 + 'px;', margin0_1: 'margin: 0 ' + wH * .01 + 'px;', margin0_11: 'margin:' + wH * .01 + 'px ' + wH * .01 + 'px;', margin0: 'margin: 0;', picsBox: 'height:' + wH * .07 + 'px;width:' + wW * .2 + 'px;', picsClear_position: 'top:' + (0 - wH * .03) + 'px;right:' + (0 - wH * .025) + 'px;padding:' + wH * .01 + 'px;', picsTitle: 'width:' + wW * .2 + 'px;margin-top:' + wH * .01 + 'px;', marginRight2: 'margin-right:' + wW * .02 + 'px;', marginLeft3: 'margin-left:' + 'px;', btnWith: "width:" + wH * .08 + 'px;', animationDuration1: 'animation-duration:' + (this.inputsArray.length + 1) * (this.animationDuration || .2) + 's;', animationDuration2: 'animation-duration:' + (this.ifRule || this.ifCode ? this.inputsArray.length + 2 : this.inputsArray.length + 1) * (this.animationDuration || .2) + 's;', activeButton: this.buttonStyle.activeButton || '', changeButton: this.buttonStyle.changeButton || '', selectButton: this.buttonStyle.selectButton || '', confirmButton: this.buttonStyle.confirmButton || '', getcodeButton: this.buttonStyle.getcodeButton || '' } };}, watch: { 'inputsArray': function inputsArray(n, o) {//父级传入的inputsArray改变时自动初始化默认数据
      if (n) this.init();} }, created: function created() {this.init();}, methods: { btnGroupClick: function btnGroupClick(event) {//console.log(event)
      var id = event.target.dataset.id;var diolg = event.target.dataset.diolg;console.log(id);if (id != undefined && diolg == false) this.$emit('changeBackground', id);if (diolg == true) this.$emit('tanchuang');}, init: function init() {var _this2 = this; // 初始化默认数据
      var _this = this; //console.log('初始化inputs');
      var data = _this.inputsArray;for (var i = 0; i < data.length; i++) {var item = data[i];var itemVariableName = _this.onLoadData + i;switch (item.type) {case 'radio':var _data = void 0;for (var j = 0; j < item.itemArray.length; j++) {if (item.itemArray[j].defaultValue) {_data = item.itemArray[j].value;break;}}if (_data) {_this[itemVariableName] = _data;_this.$set(_this.inputsObj, itemVariableName, _data);} else {_this[itemVariableName] = '';_this.$set(_this.inputsObj, itemVariableName, '');}break;case 'checkbox':var value = [];var status = [];for (var _j = 0; _j < item.itemArray.length; _j++) {if (item.itemArray[_j].defaultValue) {var d = item.itemArray[_j].value;status.push(d);value.push(d);} else {status.push('');}}_this[itemVariableName] = { value: value, status: _app2.default.checkbox_status(status) };_this.$set(_this.inputsObj, itemVariableName, _app2.default.checkbox_status(status));break;case 'pics':for (var _j2 = 0; _j2 < item.itemArray.length; _j2++) {if (item.itemArray[_j2].defaultValue) {_this.$set(_this.picsObj, itemVariableName + _this.onLoadData + _j2, item.itemArray[_j2].defaultValue);} else {_this.$set(_this.picsObj, itemVariableName + _this.onLoadData + _j2, '');}}break;case 'picker-date':if (item.onceShowDefaultValue) {var defaultDate = void 0;if (item.defaultValue) defaultDate = new Date(item.defaultValue);else defaultDate = new Date();var _data2 = '',Y = void 0,M = void 0,D = void 0,defaultEndY = new Date().getFullYear() + 5;if (defaultDate.getFullYear() > (item.endYear || defaultEndY)) {Y = item.endYear || defaultEndY;M = 12;D = _app2.default.countDays(Y, M - 1).days.pop();} else {Y = defaultDate.getFullYear();M = defaultDate.getMonth() + 1;D = defaultDate.getDate();}switch (item.mode) {case 'picker-date':_data2 = "".concat(Y, "/").concat(M, "/").concat(D);break;case 'picker-time':_data2 = "".concat(defaultDate.getHours(), ":").concat(defaultDate.getMinutes(), ":").concat(defaultDate.getSeconds());break;default:_data2 = "".concat(Y, "/").concat(M, "/").concat(D, " ").concat(defaultDate.getHours(), ":").concat(defaultDate.getMinutes(), ":").concat(defaultDate.getSeconds());break;}_this[itemVariableName] = _data2;_this.$set(_this.pickerObj, itemVariableName, _data2);this[_app2.default.pickerChoosedType.pickerChoosedType_date.value + i] = ''; //初始化时清空记忆数据
            } else {_this[itemVariableName] = '';_this.$set(_this.pickerObj, itemVariableName, '');this[_app2.default.pickerChoosedType.pickerChoosedType_date.value + i] = ''; //初始化时清空记忆数据
            }break;case 'picker-city':if (item.onceShowDefaultValue) {var defaultValue = item.defaultValue || [0, 0, 0];var provinceDataList = __webpack_require__(/*! ./mpvue-citypicker/city-data/province.js */ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\mpvue-citypicker\\city-data\\province.js").default;var cityDataList = __webpack_require__(/*! ./mpvue-citypicker/city-data/city.js */ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\mpvue-citypicker\\city-data\\city.js").default[defaultValue[0]];var areaDataList = __webpack_require__(/*! ./mpvue-citypicker/city-data/area.js */ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\mpvue-citypicker\\city-data\\area.js").default[defaultValue[0]][defaultValue[1]];var pcikerLabel = provinceDataList[defaultValue[0]].label + '-' + cityDataList[defaultValue[1]].label + '-' + areaDataList[defaultValue[2]].label;var _data3 = { label: pcikerLabel, value: defaultValue, cityCode: areaDataList[defaultValue[2]].value };_this[itemVariableName] = _data3;_this.$set(_this.pickerObj, itemVariableName, _data3);this[_app2.default.pickerChoosedType.pickerChoosedType_city.value + i] = null; //初始化时清空记忆数据
            } else {_this[itemVariableName] = null;_this.$set(_this.pickerObj, itemVariableName, null);this[_app2.default.pickerChoosedType.pickerChoosedType_city.value + i] = null; //初始化时清空记忆数据
            }
            break;
          case 'picker-custom':
            if (item.onceShowDefaultValue) {var _ret = function () {
                var datas = item.itemArray;
                var v = [];
                if (item.defaultValue)
                v = item.defaultValue;else
                {
                  if (item.linkage)
                  for (var _i = 0; _i < item.linkageNum; _i++) {
                    v.push(0);
                  } else

                  item.itemArray.forEach(function (item) {
                    v.push(0);
                  });
                }
                var data = { result: {}, value: v };
                var steps = item.steps;
                if (item.linkage && !steps) {
                  _app2.default.showToast('未设置steps');
                  return { v: void 0 };
                }
                if (item.linkage) {
                  if (item.linkageNum == 2) {
                    data.result.steps1 = datas[v[0]];
                    if (!data.result.steps1)
                    _app2.default.showToast('第一列中不存在第' + v[0] + '项');
                    data.result.steps2 = datas[v[0]][steps.steps_2_item][v[1]];
                    if (!data.result.steps2)
                    _app2.default.showToast('第二列中不存在第' + v[1] + '项');
                  } else if (item.linkageNum == 3) {
                    data.result.steps1 = datas[v[0]];
                    if (!data.result.steps1)
                    _app2.default.showToast('第一列中不存在第' + v[0] + '项');
                    data.result.steps2 = data.result.steps1[steps.steps_2_item][v[1]];
                    if (!data.result.steps2)
                    _app2.default.showToast('第二列中不存在第' + v[1] + '项');
                    data.result.steps3 = data.result.steps2[steps.steps_3_item][v[2]];
                    if (!data.result.steps3)
                    _app2.default.showToast('第三列中不存在第' + v[2] + '项');
                  } else {
                    _app2.default.showToast('不在指定范围中');
                  }
                } else {
                  data.result = [];
                  for (var _i2 = 0; _i2 < datas.length; _i2++) {
                    var _d = datas[_i2];
                    data.result.push(_d[v[_i2]]);
                  }
                }
                _this[itemVariableName] = data;
                _this.$set(_this.pickerObj, itemVariableName, data);
                _this2[_app2.default.pickerChoosedType.pickerChoosedType_custom.value + i] = null;}();if (typeof _ret === "object") return _ret.v;
            } else {
              _this[itemVariableName] = '';
              _this.$set(_this.pickerObj, itemVariableName, '');
              this[_app2.default.pickerChoosedType.pickerChoosedType_custom.value + i] = null;
            }
            break;
          case 'picker-custom2':
            if (item.onceShowDefaultValue) {var _ret2 = function () {
                var datas = item.linkage ? item.itemObject : item.itemArray;
                var v = [];
                if (item.defaultValue)
                v = item.defaultValue;else
                {
                  if (item.linkage)
                  for (var _i3 = 0; _i3 < item.linkageNum; _i3++) {
                    v.push(0);
                  } else

                  item.itemArray.forEach(function (item) {
                    v.push(0);
                  });
                }
                var data = { result: {}, value: v };
                var steps = item.steps;
                if (item.linkage && !steps) {
                  _app2.default.showToast('未设置steps');
                  return { v: void 0 };
                }
                if (item.linkage) {
                  if (item.linkageNum == 2) {
                    data.result.steps1 = datas.step_1[v[0]];
                    if (!data.result.steps1)
                    _app2.default.showToast('第一列中不存在第' + v[0] + '项');
                    data.result.steps2 = datas.step_2[v[0]][v[1]];
                    if (!data.result.steps2)
                    _app2.default.showToast('第二列中不存在第' + v[1] + '项');
                  } else if (item.linkageNum == 3) {
                    data.result.steps1 = datas.step_1[v[0]];
                    if (!data.result.steps1)
                    _app2.default.showToast('第一列中不存在第' + v[0] + '项');
                    data.result.steps2 = datas.step_2[v[0]][v[1]];
                    if (!data.result.steps2)
                    _app2.default.showToast('第二列中不存在第' + v[1] + '项');
                    data.result.steps3 = datas.step_3[v[0]][v[1]][v[2]];
                    if (!data.result.steps3)
                    _app2.default.showToast('第三列中不存在第' + v[2] + '项');
                  } else {
                    _app2.default.showToast('不在指定范围中');
                  }
                } else {
                  data.result = [];
                  for (var _i4 = 0; _i4 < datas.length; _i4++) {
                    var _d2 = datas[_i4];
                    data.result.push(_d2[v[_i4]]);
                  }
                }
                _this[itemVariableName] = data;
                _this.$set(_this.pickerObj, itemVariableName, data);
                _this2[_app2.default.pickerChoosedType.pickerChoosedType_custom2.value + i] = null;}();if (typeof _ret2 === "object") return _ret2.v;
            } else {
              _this[itemVariableName] = '';
              _this.$set(_this.pickerObj, itemVariableName, '');
              this[_app2.default.pickerChoosedType.pickerChoosedType_custom2.value + i] = null;
            }
            break;
          case 'switch':
            _this[itemVariableName] = item.defaultValue || false;
            _this.$set(_this.inputsObj, itemVariableName, item.defaultValue || false);
            break;
          case 'slider':
            _this[itemVariableName] = item.defaultValue || item.min || 0;
            _this.$set(_this.inputsObj, itemVariableName, item.defaultValue || item.min || 0);
            break;
          case 'picker-provincialStreet':
            if (item.onceShowDefaultValue) {
              var _defaultValue = item.defaultValue || [0, 0, 0, 0];
              var _provinceDataList = __webpack_require__(/*! ./mpvue-citypicker/city-data/province.js */ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\mpvue-citypicker\\city-data\\province.js").default;
              var _cityDataList = __webpack_require__(/*! ./mpvue-citypicker/city-data/city.js */ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\mpvue-citypicker\\city-data\\city.js").default[_defaultValue[0]];
              var _areaDataList = __webpack_require__(/*! ./mpvue-citypicker/city-data/area.js */ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\mpvue-citypicker\\city-data\\area.js").default[_defaultValue[0]][_defaultValue[1]];
              var streetDataList = __webpack_require__(/*! ./mpvue-citypicker/city-data/streets.js */ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\mpvue-citypicker\\city-data\\streets.js").default[_defaultValue[0]][_defaultValue[1]][_defaultValue[2]];
              var _pcikerLabel =
              _provinceDataList[_defaultValue[0]].label +
              '-' +
              _cityDataList[_defaultValue[1]].label +
              '-' +
              _areaDataList[_defaultValue[2]].label +
              '-' +
              streetDataList[_defaultValue[3]];
              var _data4 = {
                label: _pcikerLabel,
                value: _defaultValue,
                cityCode: _areaDataList[_defaultValue[2]].value };

              _this[itemVariableName] = _data4;
              _this.$set(_this.pickerObj, itemVariableName, _data4);
              this[_app2.default.pickerChoosedType.pickerChoosedType_city.value + i] = null; //初始化时清空记忆数据
            } else {
              _this[itemVariableName] = null;
              _this.$set(_this.pickerObj, itemVariableName, null);
              this[_app2.default.pickerChoosedType.pickerChoosedType_city.value + i] = null; //初始化时清空记忆数据
            }
            break;
          case 'text':
            break;
          default:
            if (item.defaultValue) {
              _this[itemVariableName] = item.defaultValue;
              _this.$set(_this.inputsObj, itemVariableName, item.defaultValue);
            } else {
              _this[itemVariableName] = '';
              _this.$set(_this.inputsObj, itemVariableName, '');
            }
            if (item.password) {
              _this.$set(_this.inputsObj, itemVariableName + 'password', item.password);
            }
            break;}

      }
    },
    showPicker: function showPicker(obj, index) {//显示相对应的picker
      //console.log(JSON.stringify(obj));
      var _this = this;
      obj.index = index;
      _this.maskShow = true;
      if (obj && obj.type)
      switch (obj.type) {
        case 'picker-date':
          //记忆数据优先
          if (this[_app2.default.pickerChoosedType.pickerChoosedType_date.value + index]) obj.defaultValue = this[_app2.default.pickerChoosedType.pickerChoosedType_date.value + index];
          _this.P_data = obj;
          _this.pickerDateShow = true;
          break;
        case 'picker-city':
          //记忆数据优先
          if (this[_app2.default.pickerChoosedType.pickerChoosedType_city.value + index]) obj.defaultValue = this[_app2.default.pickerChoosedType.pickerChoosedType_city.value + index];
          _this.P_data = obj;
          _this.pickerCityShow = true;
          break;
        case 'picker-custom':
          //记忆数据优先
          if (this[_app2.default.pickerChoosedType.pickerChoosedType_custom.value + index]) obj.defaultValue = this[_app2.default.pickerChoosedType.pickerChoosedType_custom.value + index];
          _this.P_data = obj;
          _this.pickerCustomShow = true;
          break;
        case 'picker-custom2':
          //记忆数据优先
          if (this[_app2.default.pickerChoosedType.pickerChoosedType_custom2.value + index]) obj.defaultValue = this[_app2.default.pickerChoosedType.pickerChoosedType_custom2.value + index];
          console.log(JSON.stringify(obj));
          _this.P_data = obj;
          _this.pickerCustom2Show = true;
          break;
        case 'picker-provincialStreet':
          //记忆数据优先
          if (this[_app2.default.pickerChoosedType.pickerChoosedType_provincialStreet.value + index]) obj.defaultValue = this[_app2.default.pickerChoosedType.pickerChoosedType_provincialStreet.value + index];
          _this.P_data = obj;
          _this.pickerProvincialStreetShow = true;
          break;
        default:
          _app2.default.showToast('缺少必要参数-type');
          break;} else


      _app2.default.showToast('picker参数错误');
    },
    IgreeFc: function IgreeFc(e) {// 用户是否同意规则
      this.Igree = e.detail.value;
    },
    openRuleFc: function openRuleFc(value) {// 打开规则页面的父级方法
      this.$emit('chaildOpenEvent', value);
    },
    checkbox_change: function checkbox_change(e, index) {//checkbox赋值方法
      var _this = this;
      var data = e.detail.value;
      var checkboxArray = _this.inputsArray[index].itemArray;
      var newArray = [];
      var oldArray = [];
      if (checkboxArray.length > 0 && data.length > 0) {
        checkboxArray.forEach(function (item) {
          newArray.push('');
          oldArray.push(item.value);
        });
        data.forEach(function (item) {
          var num = oldArray.indexOf(item);
          if (num >= 0)
          newArray[num] = item;
        });
        _this.inputsObj[_this.onLoadData + index] = newArray; //视图暂存
      }
      _this[_this.onLoadData + index] = { value: e.detail.value, status: _app2.default.checkbox_status(newArray) };
    },
    inputs_change: function inputs_change(e, index, filterFc) {// 用户输入时，根据index赋值
      //console.log(e.detail.value);
      var _this = this;
      if (_this.inputDebounceSet.openInputDebounce) {
        if (inputDebounce[debounceName + index]) clearTimeout(inputDebounce[debounceName + index]);
        inputDebounce[debounceName + index] = setTimeout(function () {
          var val = e.detail.value;
          if (filterFc && typeof filterFc == 'function') {//有filterFc则过滤
            val = filterFc(val);
            if (val !== e.detail.value) {
              var deletePromise = new Promise(function (reslove, reject) {
                _this.$delete(_this.inputsObj, _this.onLoadData + index);
                reslove();
              });
              deletePromise.then(function () {
                _this.$set(_this.inputsObj, _this.onLoadData + index, val);
                _this[_this.onLoadData + index] = val;
              });
            } else {
              _this.$set(_this.inputsObj, _this.onLoadData + index, val);
              _this[_this.onLoadData + index] = val;
            }
          } else {
            _this.$set(_this.inputsObj, _this.onLoadData + index, val);
            _this[_this.onLoadData + index] = val;
          }
        }, _this.inputDebounceSet.delay || 500);
      } else {
        var val = e.detail.value;
        if (filterFc && typeof filterFc == 'function') {//有filterFc则过滤
          val = filterFc(val);
          if (val !== e.detail.value) {
            var deletePromise = new Promise(function (reslove, reject) {
              _this.$delete(_this.inputsObj, _this.onLoadData + index);
              reslove();
            });
            deletePromise.then(function () {
              _this.$set(_this.inputsObj, _this.onLoadData + index, val);
              _this[_this.onLoadData + index] = val;
            });
          } else {
            _this.$set(_this.inputsObj, _this.onLoadData + index, val);
            _this[_this.onLoadData + index] = val;
          }
        } else {
          _this.$set(_this.inputsObj, _this.onLoadData + index, val);
          _this[_this.onLoadData + index] = val;
        }
      }

      // if(!inputDebounce[debounceName+index])
      // inputDebounce[debounceName+index] = d;
    },
    picker_change: function picker_change(res) {//picker类型选择后赋值 
      console.log('pickerValue：' + JSON.stringify(res));
      this.pickerObj[this.onLoadData + res.index] = res.data;
      this[this.onLoadData + res.index] = res.data;
      switch (res.type) {// 该项picker的value记忆
        case _app2.default.pickerChoosedType.pickerChoosedType_date.name:
          this[_app2.default.pickerChoosedType.pickerChoosedType_date.value + res.index] = res.data;
          break;
        case _app2.default.pickerChoosedType.pickerChoosedType_city.name:
          this[_app2.default.pickerChoosedType.pickerChoosedType_city.value + res.index] = res.data.value;
          break;
        case _app2.default.pickerChoosedType.pickerChoosedType_custom.name:
          this[_app2.default.pickerChoosedType.pickerChoosedType_custom.value + res.index] = res.data.value;
          break;
        case _app2.default.pickerChoosedType.pickerChoosedType_custom2.name:
          this[_app2.default.pickerChoosedType.pickerChoosedType_custom2.value + res.index] = res.data.value;
          break;
        case _app2.default.pickerChoosedType.pickerChoosedType_provincialStreet.name:
          this[_app2.default.pickerChoosedType.pickerChoosedType_provincialStreet.value + res.index] = res.data.value;
          break;
        default:
          break;}

      this.picker_hideFc();
      this.$emit('changeInputArray', res);
    },
    inputTap: function inputTap(type, index) {//input点击事件
      switch (type) {
        case 'passwordSwitch': //密码显隐
          this.$set(this.inputsObj, this.onLoadData + index + 'password', !this.inputsObj[this.onLoadData + index + 'password']);
          break;
        case 'clear': //一键清除
          this.$set(this.inputsObj, this.onLoadData + index, '');
          this[this.onLoadData + index] = '';
          break;
        default:
          _app2.default.showToast('inputTap类型错误');
          break;}

    },
    getCode: function getCode() {// 判断是否正确输入手机号后发送验证码并倒计时
      var _this = this;
      var phone = '';
      var d = _this.inputsArray;
      for (var i = 0; i < d.length; i++) {
        if (d[i].phone) {
          phone = _this[_this.onLoadData + i];
          console.log('手机号: ' + phone);
        }
      }
      if (/^[1][3,4,5,7,8][0-9]{9}$/.test(phone))
      _this.sendSMS(phone);else
      {
        _app2.default.showToast('请正确输入11位手机号');
        return;
      }

      _this.setInterValFunc = setInterval(function () {
        if (_this.codeCount > 0)
        --_this.codeCount;else
        {
          _this.startCode = false;
          clearInterval(_this.setInterValFunc);
          _this.code = '';
          _this.codeCount = 90;
        }
      }, 1000);
      _this.startCode = true;
    },
    sendSMS: function sendSMS(phone) {// 生成验证码并发送给手机的方法
      //生成验证码
      this.code = '123456';
      //发送验证码
      _app2.default.showToast('发送验证码成功');
    },
    activeFc: function activeFc() {// 主功能按钮方法
      var _this = this;
      var d = _this.inputsArray;
      var inputsDataObj = {};
      // 先判断 inputs 的值是否为空, 后判断该值是否忽略
      for (var i = 0; i < d.length - 1; i++) {
        var onLoadData = _this.onLoadData + i;
        var variableName = d[i].variableName || onLoadData;
        switch (d[i].type) {
          case 'pics':
            for (var j = 0; j < d[i].itemArray.length; j++) {
              var pic = _this.picsObj[onLoadData + _this.onLoadData + j];
              if (pic) {
                if (!inputsDataObj[onLoadData] && !inputsDataObj[variableName])
                inputsDataObj[variableName] = [];
                inputsDataObj[variableName].push(pic);
              } else {
                if (d[i].itemArray[j].ignore) {
                  if (!inputsDataObj[onLoadData] && !inputsDataObj[variableName])
                  inputsDataObj[variableName] = [];
                  inputsDataObj[variableName].push('');
                } else {
                  _app2.default.showToast(d[i].itemArray[j].nullErr || d[i].itemArray[j].title + '不能为空');
                  return;
                }
              }
            }
            break;
          case 'switch':
            inputsDataObj[variableName] = _this[onLoadData] ? true : false;
            break;
          case 'slider':
            inputsDataObj[variableName] = _this[onLoadData];
            break;
          case 'text':
            break;
          default:
            if (!_this[onLoadData]) {
              if (d[i].ignore) {
                inputsDataObj[variableName] = '';
              } else {
                _app2.default.showToast(d[i].nullErr || d[i].title + '不能为空');
                return;
              }
            } else {
              var verifyFc = d[i].verifyFc;
              if (verifyFc) {
                if (!verifyFc(_this[onLoadData])) {
                  _app2.default.showToast(d[i].verifyErr || d[i].title + '校验错误');
                  return;
                }
              }
              inputsDataObj[variableName] = _this[onLoadData];
            }
            break;}

      }
      // 如果用了图片类型， 则上传并返回数据
      var pic_promise = [];var _loop = function _loop(
      _i5) {
        var onLoadData = _this.onLoadData + _i5;
        var variableName = d[_i5].variableName || onLoadData;
        if (d[_i5].type && d[_i5].type == 'pics') {var _loop2 = function _loop2(
          _j3) {
            if (inputsDataObj[variableName][_j3]) {
              pic_promise.push(new Promise(function (reslove, reject) {
                // push Promise 上传图片到服务器并返回图片在服务器的地址并拼接的方法
                _app2.default.UpLoadFile(_app2.default.interface.upLoadImg, {}, 'name', inputsDataObj[variableName][_j3], function (res) {
                  reslove({
                    index1: _i5,
                    index2: _j3,
                    data: res.data });
                  // index2 基本无用， 若无需求可删
                });
              }));
            } else {
              pic_promise.push(new Promise(function (reslove, reject) {// 若用户未填此数据并忽略此数据时传空以记录此次数据
                reslove({
                  index1: _i5,
                  index2: _j3,
                  data: '' });
                // index2 基本无用， 若无需求可删
              }));
            }};for (var _j3 = 0; _j3 < d[_i5].itemArray.length; _j3++) {_loop2(_j3);
          }
        }};for (var _i5 = 0; _i5 < d.length; _i5++) {_loop(_i5);
      }
      Promise.all(pic_promise).then(function (res) {// Promise返回一个图片的数组, 根据res.index1 给 inputsDataObj[_this.onLoadData + res[i].index1] 赋值
        if (res.length > 0)
        for (var _i6 = 0; _i6 < res.length; _i6++) {// 注: 此处根据自己的需求拼接数据   (在下返回数据后的拼接是以 ‘|’ 分隔)
          var _onLoadData = _this.onLoadData + res[_i6].index1;
          var _variableName = d[res[_i6].index1].variableName || _onLoadData; // 自定义变量名或默认变量名
          if (typeof inputsDataObj[_variableName] != 'string')
          inputsDataObj[_variableName] = res[_i6].data || '|';else

          inputsDataObj[_variableName] += res[_i6].data ? '|' + res[_i6].data : '|';
        }
        _this.$emit('activeFc', inputsDataObj); // 把用户输入数据封装成对象输出给父级
        _this.inputs_reSet(); //提交后重置
      });
    },
    inputs_reSet: function inputs_reSet() {
      //提交后重置验证码
      this.code = '';
      this.userCode = '';
      this.Igree = false;
      //若submit为true，重置表单为初始化
      if (this.submitReSet) this.init();
    },
    chooseImg: function chooseImg(index, picsIndex) {//选择图片
      var _this = this;
      uni.chooseImage({
        success: function success(res) {
          // console.log(res.tempFilePaths[0]);
          _this.$set(_this.picsObj, _this.onLoadData + index + _this.onLoadData + picsIndex, res.tempFilePaths[0]);
        } });

    },
    clearPic: function clearPic(index, picsIndex) {//清除图片
      this.picsObj[this.onLoadData + index + this.onLoadData + picsIndex] = '';
    },
    showImg: function showImg(imgPath) {//大图预览选中的图片
      _app2.default.previewImage(imgPath);
    },
    picker_hideFc: function picker_hideFc() {//picker类型全部隐藏
      this.pickerDateShow = false;
      this.pickerCityShow = false;
      this.pickerCustomShow = false;
      this.pickerCustom2Show = false;
      this.pickerProvincialStreetShow = false;
      this.maskShow = false;
      this.P_data = {};
    } },

  components: {
    uniIcon: uniIcon,
    pickersDate: pickersDate,
    pickersCity: pickersCity,
    pickerCustom: pickerCustom,
    pickerCustom2: pickerCustom2,
    pickerProvincialStreet: pickerProvincialStreet } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\inputs.vue?vue&type=style&index=0&id=0849a206&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!D:/Documents/WeChat Files/guoweiduo2333/FileStorage/File/2019-05/aiteyu-master/components/QuShe-inputs/inputs.vue?vue&type=style&index=0&id=0849a206&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\inputs.vue?vue&type=template&id=0849a206&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Documents/WeChat Files/guoweiduo2333/FileStorage/File/2019-05/aiteyu-master/components/QuShe-inputs/inputs.vue?vue&type=template&id=0849a206&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      !_vm.picsObj[_vm.onLoadData + _vm.index + _vm.onLoadData + _vm.picsIndex]
        ? _vm.chooseImg(_vm.index, _vm.picsIndex)
        : ""
    }
  }
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\inputs.vue":
/*!*************************************************************************************************************************!*\
  !*** D:/Documents/WeChat Files/guoweiduo2333/FileStorage/File/2019-05/aiteyu-master/components/QuShe-inputs/inputs.vue ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inputs_vue_vue_type_template_id_0849a206_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputs.vue?vue&type=template&id=0849a206&scoped=true& */ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\inputs.vue?vue&type=template&id=0849a206&scoped=true&");
/* harmony import */ var _inputs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs.vue?vue&type=script&lang=js& */ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\inputs.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _inputs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _inputs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _inputs_vue_vue_type_style_index_0_id_0849a206_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputs.vue?vue&type=style&index=0&id=0849a206&scoped=true&lang=css& */ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\inputs.vue?vue&type=style&index=0&id=0849a206&scoped=true&lang=css&");
/* harmony import */ var _G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _inputs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _inputs_vue_vue_type_template_id_0849a206_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _inputs_vue_vue_type_template_id_0849a206_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0849a206",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "D:/Documents/WeChat Files/guoweiduo2333/FileStorage/File/2019-05/aiteyu-master/components/QuShe-inputs/inputs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\inputs.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** D:/Documents/WeChat Files/guoweiduo2333/FileStorage/File/2019-05/aiteyu-master/components/QuShe-inputs/inputs.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_inputs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./inputs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\inputs.vue?vue&type=script&lang=js&");
/* harmony import */ var _G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_inputs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_inputs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_inputs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_inputs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_inputs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\inputs.vue?vue&type=style&index=0&id=0849a206&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** D:/Documents/WeChat Files/guoweiduo2333/FileStorage/File/2019-05/aiteyu-master/components/QuShe-inputs/inputs.vue?vue&type=style&index=0&id=0849a206&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_inputs_vue_vue_type_style_index_0_id_0849a206_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./inputs.vue?vue&type=style&index=0&id=0849a206&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\inputs.vue?vue&type=style&index=0&id=0849a206&scoped=true&lang=css&");
/* harmony import */ var _G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_inputs_vue_vue_type_style_index_0_id_0849a206_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_inputs_vue_vue_type_style_index_0_id_0849a206_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_inputs_vue_vue_type_style_index_0_id_0849a206_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_inputs_vue_vue_type_style_index_0_id_0849a206_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_inputs_vue_vue_type_style_index_0_id_0849a206_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\inputs.vue?vue&type=template&id=0849a206&scoped=true&":
/*!********************************************************************************************************************************************************************!*\
  !*** D:/Documents/WeChat Files/guoweiduo2333/FileStorage/File/2019-05/aiteyu-master/components/QuShe-inputs/inputs.vue?vue&type=template&id=0849a206&scoped=true& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_inputs_vue_vue_type_template_id_0849a206_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./inputs.vue?vue&type=template&id=0849a206&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\inputs.vue?vue&type=template&id=0849a206&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_inputs_vue_vue_type_template_id_0849a206_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_HBuilderX_1_9_0_20190412_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_inputs_vue_vue_type_template_id_0849a206_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/QuShe-inputs/inputs.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/QuShe-inputs/inputs-create-component',
    {
        'components/QuShe-inputs/inputs-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('./node_modules/@dcloudio/uni-mp-weixin/dist/index.js')['createComponent'](__webpack_require__("D:\\Documents\\WeChat Files\\guoweiduo2333\\FileStorage\\File\\2019-05\\aiteyu-master\\components\\QuShe-inputs\\inputs.vue"))
        })
    },
    [['components/QuShe-inputs/inputs-create-component']]
]);                
