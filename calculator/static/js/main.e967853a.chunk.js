(window.webpackJsonpcalculator=window.webpackJsonpcalculator||[]).push([[0],[,function(_,t,e){"use strict";var a=e(0),u=e.n(a);t.a=function(_){return u.a.createElement("button",{className:"panel-button",style:_.style||null,onClick:function(){return _.onToggleClick(_.value)},id:_.id},_.children)}},,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return App});var F_Projects_test_projects_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),F_Projects_test_projects_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),F_Projects_test_projects_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),F_Projects_test_projects_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),F_Projects_test_projects_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_app_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(17),_app_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_6__),_button_button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1),App=function(_Component){function App(props){var _this;return Object(F_Projects_test_projects_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=Object(F_Projects_test_projects_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(F_Projects_test_projects_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this,props)),_this.addNumbers=function(_){"0"===_this.state.output?_this.setState({formula:_this.state.formula+_,output:_,currentValue:_this.state.currentValue+_}):_this.state.output.length>15?(_this.setState({output:"too much numbers"}),setTimeout(function(){_this.setState({output:_this.state.currentValue})},500)):_this.setState({formula:_this.state.formula+_,output:_this.state.output+_,currentValue:_this.state.currentValue+_})},_this.addAction=function(_){var t=_this.state.formula.slice(-1);if(/[+-\/*]/.test(t)){var e=_this.state.formula.replace(/.$/,_);_this.setState({formula:e,output:"0",currentValue:""})}else _this.setState({formula:_this.state.formula+_,output:"0",currentValue:""})},_this.reset=function(){_this.setState({formula:"",output:"0",currentValue:""})},_this.delete=function(){var _=_this.state.formula.slice(0,-1),t="0"===_this.state.output?"0":_this.state.output.slice(0,-1);_this.setState({formula:_,output:t})},_this.equals=function(){try{var equalsNumber=eval(_this.state.formula);_this.setState({formula:String(equalsNumber),output:"0",currentValue:""})}catch(_unused){_this.setState({formula:"wrong number",output:"0",currentValue:""})}},_this.addDecimal=function(_){if(_this.state.currentValue.includes(_))return!1;_this.setState({formula:_this.state.formula+_,output:_this.state.output+_,currentValue:_this.state.currentValue+_})},_this.state={formula:"",output:"0",currentValue:""},_this}return Object(F_Projects_test_projects_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(F_Projects_test_projects_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"app-wrap"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"formula-screen"},this.state.formula),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"output-screen"},this.state.output),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"panel"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"one",value:"1",onToggleClick:this.addNumbers},"1"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"two",value:"2",onToggleClick:this.addNumbers},"2"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"three",value:"3",onToggleClick:this.addNumbers},"3"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"four",value:"4",onToggleClick:this.addNumbers},"4"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"five",value:"5",onToggleClick:this.addNumbers},"5"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"six",value:"6",onToggleClick:this.addNumbers},"6"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"seven",value:"7",onToggleClick:this.addNumbers},"7"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"eight",value:"8",onToggleClick:this.addNumbers},"8"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"nine",value:"9",onToggleClick:this.addNumbers},"9"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"zero",value:"0",onToggleClick:this.addNumbers},"0"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"reset",value:"AC",onToggleClick:this.reset,style:{background:"#a71d1d"}},"AC"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"delete",value:"C",onToggleClick:this.delete,style:{background:"#a71d1d"}},"C"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"divide",value:"/",onToggleClick:this.addAction,style:{background:"#9fa2a6"}},"/"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"multiply",value:"*",onToggleClick:this.addAction,style:{background:"#9fa2a6"}},"x"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"minus",value:"-",onToggleClick:this.addAction,style:{background:"#9fa2a6"}},"-"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"plus",value:"+",onToggleClick:this.addAction,style:{background:"#9fa2a6"}},"+"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"decimal",value:".",onToggleClick:this.addDecimal},"."),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_button__WEBPACK_IMPORTED_MODULE_7__.a,{id:"equals",value:"=",onToggleClick:this.equals,style:{background:"#140d56"}},"="))))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component)},,,,,,function(_,t,e){_.exports=e(11)},function(_,t,e){"use strict";e.r(t);var a=e(0),u=e.n(a),r=e(3),l=e.n(r),s=(e(16),e(4));l.a.render(u.a.createElement(s.a,null),document.getElementById("root"))},,,,,function(_,t,e){},function(_,t,e){}],[[10,1,2]]]);
//# sourceMappingURL=main.e967853a.chunk.js.map