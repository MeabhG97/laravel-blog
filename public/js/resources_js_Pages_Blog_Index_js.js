(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Blog_Index_js"],{

/***/ "./resources/js/Pages/Blog/Index.js":
/*!******************************************!*\
  !*** ./resources/js/Pages/Blog/Index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout/Layout */ "./resources/js/Pages/Layout/Layout.js");
/* harmony import */ var _Layout_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Layout/Footer */ "./resources/js/Pages/Layout/Footer.js");






function index() {
  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props,
      posts = _usePage$props.posts,
      auth = _usePage$props.auth,
      flash = _usePage$props.flash,
      users = _usePage$props.users;

  function handleDelete(post) {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.delete("/blog/".concat(post.slug));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-4/5 m-auto text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-15 border-b border-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-6xl"
  }, "Blog Posts"))), flash.message !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-4/5 m-auto mt-10 pl-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "w-2/6 mb-4 text-gray-50 bg-green-500 rounded-2xl py-4"
  }, flash.message)) : null, auth.user !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-15 w-4/5 m-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    href: "/blog/create",
    className: "bg-blue-500 uppercase bg-transparent text-gray-100 text-xs font-extrabold py-3 px-5 rounded-3xl"
  }, "Create post")) : null, posts.map(function (post) {
    var date = new Date(post.updated_at);
    var user = users.find(function (user) {
      return user.id === post.user_id;
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "sm:grid grid-cols-2 gap-20 w-4/5 mx-auto py-15 border-b border-gray-200",
      key: post.slug
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "../images/".concat(post.image_path),
      alt: ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      className: "text-gray-700 font-bold text-5xl pb-4"
    }, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-gray-500"
    }, "By ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-bold italic text-gray-800"
    }, user.name), ", Created on ", "".concat(date.getDate(), "/").concat(date.getMonth(), "/").concat(date.getFullYear())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-xl text-gray-700 pt-8 pb-10 leading-8 font-light"
    }, post.description.length > 250 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, post.description.substring(0, 250) + "...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, post.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
      href: "/blog/".concat(post.slug),
      className: "uppercase bg-blue-500 text-gray-100 text-lg font-extrabold py-4 px-8 rounded-3xl"
    }, "Keep Reading"), auth.user !== null && auth.user.id === post.user_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "float-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
      href: "/blog/".concat(post.slug, "/edit"),
      className: "text-gray-700 italic hover:text-gray-900 pb-1 border-b-2"
    }, "Edit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "float-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      onClick: function onClick() {
        return handleDelete(post);
      },
      className: "text-red-500 pr-3"
    }, "Delete"))) : null));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_Footer__WEBPACK_IMPORTED_MODULE_4__.default, null));
}

/***/ }),

/***/ "./resources/js/Pages/Layout/Footer.js":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Layout/Footer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "bg-gray-800 py-20 mt-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sm:grid grid-cols-3 w-4/5 pb-10 m-auto border-b-2 border-gray-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-l sm:font-bold text-gray-100"
  }, "Pages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "py-4 sm:text-s pt-4 text-gray-400"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "pb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "pb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/blog"
  }, "Blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "pb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/login"
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "pb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/register"
  }, "Register")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-l sm:font-bold text-gray-100"
  }, "Find Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "py-4 sm:text-s pt-4 text-gray-400"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "pb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/"
  }, "What we do")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "pb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/"
  }, "Address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "pb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/"
  }, "Phone")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "pb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/"
  }, "Contact")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-l sm:font-bold text-gray-100"
  }, "Latest posts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "py-4 sm:text-s pt-4 text-gray-400"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "pb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/"
  }, "Why we love tech")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "pb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/"
  }, "Why we love design")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "pb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/"
  }, "Why to use Laravel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "pb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/"
  }, "Why PHP is the best"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "w-25 w-4/5 pb-3 m-auto text-xs text-gray-100 pt-6"
  }, "Copyright 2017-2021 Code With Dary. All Rights Reserved"));
}

/***/ }),

/***/ "./resources/js/Pages/Layout/Layout.js":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Layout/Layout.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");




function Layout() {
  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props,
      auth = _usePage$props.auth,
      request = _usePage$props.request;

  function handleLogout(e) {
    e.preventDefault();
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.post('/logout');
  }

  function toggleHidden() {
    var menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  } //<!--Navbar sample code retrieved from https://codepen.io/chris__sev/pen/QWGjQKe?editors=1010-->


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    "class": "bg-gray-800"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "max-w-6xl mx-auto px-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "flex justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "flex space-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hidden md:flex items-center space-x-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "py-5 px-3 text-white hover:text-gray-500 ".concat(request === "/" ? "text-blue-500" : ""),
    href: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "py-5 px-3 text-white hover:text-gray-500 ".concat(request.startsWith("blog") ? "text-blue-500" : ""),
    href: "/blog"
  }, "Blog"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hidden md:flex items-center space-x-1"
  }, auth.user === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "py-5 px-3 text-white hover:text-gray-500 ".concat(request === "login" ? "text-blue-500" : ""),
    href: "/login"
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-white hover:text-gray-500 rounded transition duration-300 ".concat(request === "register" ? "text-blue-500" : ""),
    href: "/register"
  }, "Register")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block py-2 px-4 text-yellow-400"
  }, auth.user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "py-5 px-3 text-white hover:text-gray-500 ".concat(request === "logout" ? "text-blue-500" : ""),
    onClick: handleLogout
  }, "Logout"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "md:hidden flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "mobile-menu-button",
    type: "button",
    onClick: toggleHidden
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-6 h-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 6h16M4 12h16M4 18h16"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mobile-menu hidden md:hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "block py-5 px-3 text-white hover:text-gray-500 ".concat(request === "/" ? "text-blue-500" : ""),
    href: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "block py-5 px-3 text-white hover:text-gray-500 ".concat(request.startsWith("blog") ? "text-blue-500" : ""),
    href: "/blog"
  }, "Blog"), auth.user === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "block py-5 px-3 text-white hover:text-gray-500 ".concat(request === "login" ? "text-blue-500" : ""),
    href: "/login"
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "block py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-white hover:text-gray-500 rounded transition duration-300 ".concat(request === "register" ? "text-blue-500" : ""),
    href: "/register"
  }, "Register")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block py-2 px-4 text-yellow-400"
  }, auth.user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "block py-5 px-3 text-white hover:text-gray-500 ".concat(request === "logout" ? "text-blue-500" : ""),
    onClick: handleLogout
  }, "Logout")))));
}

/***/ })

}]);