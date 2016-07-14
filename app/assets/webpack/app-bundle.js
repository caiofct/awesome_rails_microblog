webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _ProfileBox = __webpack_require__(2);

	var _ProfileBox2 = _interopRequireDefault(_ProfileBox);

	var _PostList = __webpack_require__(37);

	var _PostList2 = _interopRequireDefault(_PostList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Setup a global app scope
	// ES6 imports
	var app = window.app = global.app = {};

	// Expose components to global scope
	app.ProfileBox = _ProfileBox2.default;
	app.PostList = _PostList2.default;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 2:
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

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _PostItem = __webpack_require__(38);

	var _PostItem2 = _interopRequireDefault(_PostItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var createFragment = __webpack_require__(39);


	/*
	 * The list of posts in a user timeline
	 */

	var PostList = function (_React$Component) {
	  _inherits(PostList, _React$Component);

	  function PostList(props) {
	    _classCallCheck(this, PostList);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PostList).call(this, props));

	    _this.posts_array = JSON.parse(props.posts);
	    return _this;
	  }

	  _createClass(PostList, [{
	    key: 'renderPosts',
	    value: function renderPosts() {
	      var items = this.posts_array.map(function (post_item) {
	        var parsed_item = JSON.parse(post_item);
	        return _react2.default.createElement(_PostItem2.default, { key: JSON.parse(parsed_item.id), post: parsed_item });
	      });

	      if (items.length == 0) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'text-center empty' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Você ainda não fez nenhuma Postagem :('
	          )
	        );
	      } else {
	        return items;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'ibox float-e-margins' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ibox-content' },
	          _react2.default.createElement(
	            'div',
	            { className: 'chat-activity-list posts' },
	            this.renderPosts()
	          )
	        )
	      );
	    }
	  }]);

	  return PostList;
	}(_react2.default.Component);

	module.exports = PostList;

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*
	 * Represents a post item that contains a profile image of the user, it's name
	 * and username and the post content
	 */

	var PostItem = function (_React$Component) {
	  _inherits(PostItem, _React$Component);

	  function PostItem() {
	    _classCallCheck(this, PostItem);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PostItem).apply(this, arguments));
	  }

	  _createClass(PostItem, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "chat-element post" },
	        _react2.default.createElement(
	          "a",
	          { className: "pull-left", href: "#" },
	          _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.post.user.profileImage } })
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "media-body" },
	          _react2.default.createElement(
	            "small",
	            { className: "pull-right" },
	            this.props.post.timeAgoInWords
	          ),
	          _react2.default.createElement(
	            "strong",
	            { className: "name" },
	            this.props.post.user.name
	          ),
	          " ",
	          _react2.default.createElement(
	            "span",
	            { className: "username" },
	            "@",
	            this.props.post.user.username
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "outer-content" },
	            _react2.default.createElement(
	              "div",
	              { className: "content m-b-xs m-t-xs" },
	              _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.post.content } })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return PostItem;
	}(_react2.default.Component);

	module.exports = PostItem;

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(40).create;

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactFragment
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(11);

	var ReactChildren = __webpack_require__(9);
	var ReactElement = __webpack_require__(13);

	var emptyFunction = __webpack_require__(16);
	var invariant = __webpack_require__(12);
	var warning = __webpack_require__(15);

	/**
	 * We used to allow keyed objects to serve as a collection of ReactElements,
	 * or nested sets. This allowed us a way to explicitly key a set or fragment of
	 * components. This is now being replaced with an opaque data structure.
	 * The upgrade path is to call React.addons.createFragment({ key: value }) to
	 * create a keyed fragment. The resulting data structure is an array.
	 */

	var numericPropertyRegex = /^\d+$/;

	var warnedAboutNumeric = false;

	var ReactFragment = {
	  /**
	   * Wrap a keyed object in an opaque proxy that warns you if you access any
	   * of its properties.
	   * See https://facebook.github.io/react/docs/create-fragment.html
	   */
	  create: function (object) {
	    if (typeof object !== 'object' || !object || Array.isArray(object)) {
	       true ? warning(false, 'React.addons.createFragment only accepts a single object. Got: %s', object) : void 0;
	      return object;
	    }
	    if (ReactElement.isValidElement(object)) {
	       true ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : void 0;
	      return object;
	    }

	    !(object.nodeType !== 1) ?  true ? invariant(false, 'React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.') : _prodInvariant('0') : void 0;

	    var result = [];

	    for (var key in object) {
	      if (true) {
	        if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
	           true ? warning(false, 'React.addons.createFragment(...): Child objects should have ' + 'non-numeric keys so ordering is preserved.') : void 0;
	          warnedAboutNumeric = true;
	        }
	      }
	      ReactChildren.mapIntoWithKeyPrefixInternal(object[key], result, key, emptyFunction.thatReturnsArgument);
	    }

	    return result;
	  }
	};

	module.exports = ReactFragment;

/***/ }

});