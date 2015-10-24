webpackHotUpdate(0,{

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(3), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
  
  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ContactPageCss = __webpack_require__(416);
  
  var _ContactPageCss2 = _interopRequireDefault(_ContactPageCss);
  
  //import withStyles from '../../decorators/withStyles';
  
  var _reactBootstrapLibButton = __webpack_require__(480);
  
  var _reactBootstrapLibButton2 = _interopRequireDefault(_reactBootstrapLibButton);
  
  //@withStyles(styles)
  
  var ContactPage = (function (_Component) {
    _inherits(ContactPage, _Component);
  
    function ContactPage() {
      _classCallCheck(this, ContactPage);
  
      _get(Object.getPrototypeOf(ContactPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(ContactPage, [{
      key: 'render',
      value: function render() {
        var title = 'Contact Us';
        var buttonsInstance = _react2['default'].createElement(
          ButtonToolbar,
          null,
          _react2['default'].createElement(
            _reactBootstrapLibButton2['default'],
            null,
            'Default'
          ),
          _react2['default'].createElement(
            _reactBootstrapLibButton2['default'],
            { bsStyle: 'primary' },
            'Primary'
          ),
          _react2['default'].createElement(
            _reactBootstrapLibButton2['default'],
            { bsStyle: 'success' },
            'Success'
          ),
          _react2['default'].createElement(
            _reactBootstrapLibButton2['default'],
            { bsStyle: 'info' },
            'Info'
          ),
          _react2['default'].createElement(
            _reactBootstrapLibButton2['default'],
            { bsStyle: 'warning' },
            'Warning'
          ),
          _react2['default'].createElement(
            _reactBootstrapLibButton2['default'],
            { bsStyle: 'danger' },
            'Danger'
          ),
          _react2['default'].createElement(
            _reactBootstrapLibButton2['default'],
            { bsStyle: 'link' },
            'Link'
          )
        );
        this.context.onSetTitle(title);
        ReactDOM.render(buttonsInstance);
        return _react2['default'].createElement(
          'div',
          { className: 'ContactPage' },
          _react2['default'].createElement(
            'div',
            { className: 'ContactPage-container' },
            _react2['default'].createElement(
              'h1',
              null,
              title
            ),
            _react2['default'].createElement(
              'p',
              null,
              'Hello Justin'
            ),
            _react2['default'].createElement(
              'div',
              null,
              ' ',
              buttonsInstance,
              ' '
            )
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    return ContactPage;
  })(_react.Component);
  
  exports['default'] = ContactPage;
  module.exports = exports['default'];
  /* Standard button */ /* Provides extra visual weight and identifies the primary action in a set of buttons */ /* Indicates a successful or positive action */ /* Contextual button for informational alert messages */ /* Indicates caution should be taken with this action */ /* Indicates a dangerous or potentially negative action */ /* Deemphasize a button by making it look like a link while maintaining button behavior */

  /* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ContactPage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }

})
//# sourceMappingURL=0.e76a687114ac69f37eb1.hot-update.js.map