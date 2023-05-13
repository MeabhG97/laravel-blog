(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Blog_Show_js"],{

/***/ "./resources/js/Pages/Blog/Show.js":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Blog/Show.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Show)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout/Layout */ "./resources/js/Pages/Layout/Layout.js");
/* harmony import */ var _Layout_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Layout/Footer */ "./resources/js/Pages/Layout/Footer.js");





function Show() {
  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props,
      posts = _usePage$props.posts,
      users = _usePage$props.users,
      comments = _usePage$props.comments,
      auth = _usePage$props.auth;
  var date = new Date(posts.updated_at);
  var user = users.find(function (user) {
    return user.id === posts.user_id;
  });

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.useForm)({
    message: "",
    post_id: posts.id
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post;

  function submit(e) {
    e.preventDefault();
    post('/comment');
  }

  function handleDelete(comment) {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.delete("/comment/".concat(comment.id));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, console.log(comments), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-4/5 m-auto text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-15"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-6xl"
  }, posts.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../images/".concat(posts.image_path),
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-4/5 m-auto pt-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-gray-500"
  }, "By ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-bold italic text-gray-800"
  }, user.name), ", Created on ", "".concat(date.getDate(), "/").concat(date.getMonth(), "/").concat(date.getFullYear())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl text-gray-700 pt-8 pb-10 leading-8 font-light"
  }, posts.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Comments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    value: data.message,
    onChange: function onChange(e) {
      return setData('message', e.target.value);
    },
    placeholder: "Message...",
    className: "py-10 bg-transparent block border-b-2 w-full h-30 text-xl outline-none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "uppercase mt-15 bg-blue-500 text-gray-100 text-lg font-extrabold py-4 px-8 rounded-3xl"
  }, "Submit Comment")), comments.map(function (comment) {
    var date = new Date(comment.updated_at);
    console.log(comment);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "commentBox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "commentInfo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "".concat(date.getDate(), "/").concat(date.getMonth(), "/").concat(date.getFullYear()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "commentMessage"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, comment.message))), auth.user !== null && auth.user.id == comment.user_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "text-red-500 pr-3",
      type: "button",
      onClick: function onClick() {
        return handleDelete(comment);
      }
    }, "Delete") : null);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_Footer__WEBPACK_IMPORTED_MODULE_4__.default, null));
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
  var auth = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.auth;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.useForm)(),
      post = _useForm.post;

  function handleLogout(e) {
    e.preventDefault();
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.post('/logout');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "bg-gray-800 py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mx-auto flex justify-between items-center px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/",
    className: "text-lg font-semibold text-gray-100 no-underline"
  }, "Laravel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "space-x-4 text-gray-300 text-sm sm:text-base"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "no-underline hover:underline",
    href: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "no-underline hover:underline",
    href: "/blog"
  }, "Blog"), auth.user === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "no-underline hover:underline",
    href: "/login"
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "no-underline hover:underline",
    href: "/register"
  }, "Register")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, auth.user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    onClick: handleLogout
  }, "Logout")))));
}

/***/ })

}]);