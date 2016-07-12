webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _ProfileBox = __webpack_require__(2);

	var _ProfileBox2 = _interopRequireDefault(_ProfileBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Setup a global app scope
	var app = window.app = global.app = {};

	// Expose components to global scope
	// ES6 imports
	app.ProfileBox = _ProfileBox2.default;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*
	 * A Profile box to show the users's profile information like:
	 * image, amount of posts, amount of users following and amount of users followed.
	 */

	var ProfileBox = function (_React$Component) {
	  _inherits(ProfileBox, _React$Component);

	  function ProfileBox(props) {
	    _classCallCheck(this, ProfileBox);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProfileBox).call(this, props));

	    _this.state = _this.initialState();
	    return _this;
	  }

	  _createClass(ProfileBox, [{
	    key: 'initialState',
	    value: function initialState() {
	      return {
	        profileImage: '',
	        postsCount: 0,
	        followingCount: 0,
	        followedCount: 0
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setProfileImage(this.props.profileImage);
	      this.setPostsCount(this.props.postsCount);
	      this.setFollowingsCount(this.props.followingsCount);
	      this.setFollowedsCount(this.props.followedsCount);
	    }
	  }, {
	    key: 'setProfileImage',
	    value: function setProfileImage(profileImage) {
	      this.setState({ profileImage: profileImage });
	    }
	  }, {
	    key: 'setPostsCount',
	    value: function setPostsCount(postsCount) {
	      this.setState({ postsCount: postsCount });
	    }
	  }, {
	    key: 'setFollowingsCount',
	    value: function setFollowingsCount(followingsCount) {
	      this.setState({ followingsCount: followingsCount });
	    }
	  }, {
	    key: 'setFollowedsCount',
	    value: function setFollowedsCount(followedsCount) {
	      this.setState({ followedsCount: followedsCount });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'col-lg-3 m-b' },
	        _react2.default.createElement(
	          'div',
	          { className: 'widget-head-color-box navy-bg p-lg text-center' },
	          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.state.profileImage } }),
	          _react2.default.createElement(
	            'div',
	            { className: 'm-b-md' },
	            _react2.default.createElement(
	              'h2',
	              { className: 'font-bold no-margins' },
	              this.props.userName
	            ),
	            _react2.default.createElement(
	              'small',
	              null,
	              '@',
	              this.props.username
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-4' },
	              'Postagens'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-4' },
	              'Seguindo'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-4' },
	              'Seguidores'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-4' },
	              this.state.postsCount
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-4' },
	              this.state.followingsCount
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-4' },
	              this.state.followedsCount
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ProfileBox;
	}(_react2.default.Component);

	module.exports = ProfileBox;

/***/ }
]);