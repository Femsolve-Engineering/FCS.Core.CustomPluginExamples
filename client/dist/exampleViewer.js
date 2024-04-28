(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Viewer"] = factory();
	else
		root["Viewer"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./AuthTools.ts":
/*!**********************!*\
  !*** ./AuthTools.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setBearerToken = exports.getViewerBearerToken = exports.setAndGetViewerBearerTokenFromUrl = void 0;
/**
 * Should be used initially to grab and save the session token
 * in local storage, this token is used to validate all transactions.
 */
function setAndGetViewerBearerTokenFromUrl() {
    let token = '';
    // Extracting the 'session' token from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const viewerBearerToken = urlParams.get('session');
    // Ensure that `viewerBearerToken` is not null or undefined
    if (!viewerBearerToken) {
        // throw new Error('No viewer bearer token found in URL parameters.');
        console.warn('No viewer bearer token found in URL parameters. 3D Viewer/Editor may not work.');
    }
    else {
        setBearerToken(viewerBearerToken);
        token = viewerBearerToken;
    }
    return token;
}
exports.setAndGetViewerBearerTokenFromUrl = setAndGetViewerBearerTokenFromUrl;
/**
 * Viewer bearer token getter.
 * @returns Currently stored bearer token.
 */
function getViewerBearerToken() {
    let token = localStorage.getItem('bearerToken');
    if (!token) {
        token = setAndGetViewerBearerTokenFromUrl();
    }
    return token;
}
exports.getViewerBearerToken = getViewerBearerToken;
/**
 * Functions to save or overwrite the tokens in local storage
 * @param token Bearer token
 */
function setBearerToken(token) {
    localStorage.setItem('bearerToken', token);
}
exports.setBearerToken = setBearerToken;


/***/ }),

/***/ "./Viewer.ts":
/*!*******************!*\
  !*** ./Viewer.ts ***!
  \*******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* eslint-disable */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadViewer = void 0;
const AuthTools_1 = __webpack_require__(/*! ./AuthTools */ "./AuthTools.ts");
// Viewer loading setup
const loadViewer = () => __awaiter(void 0, void 0, void 0, function* () {
    // Store bearer token
    const viewerSessionToken = (0, AuthTools_1.setAndGetViewerBearerTokenFromUrl)();
    // Set style
    const viewerStyle = new Femsolve.Setting.StyleSettings.ViewerStyleSettings();
    viewerStyle.setPresetStyle(Femsolve.Settings.StyleSettings.PresetStyles.CLOUD_CAE);
    const allSettings = new Femsolve.CloudViewer.ViewerSettings();
    allSettings.viewerStyleSettings = viewerStyle;
    // Viewer instantiation and addition of custom backend service,
    // if this part fails, nothing is loaded.
    const fcsViewerElement = document.getElementById("fcs-viewer");
    const viewer = new Femsolve.CloudViewer.Generic3DViewer(fcsViewerElement, allSettings, viewerSessionToken, // license token
    false // disallow socket callbacks
    );
    // Start the viewer
    yield viewer.startViewer();
    console.log(`Opening viewer...`);
});
exports.loadViewer = loadViewer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./Viewer.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci8uL0F1dGhUb29scy50cyIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci8uL1ZpZXdlci50cyIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVmlld2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlZpZXdlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCIvKipcclxuICogU2hvdWxkIGJlIHVzZWQgaW5pdGlhbGx5IHRvIGdyYWIgYW5kIHNhdmUgdGhlIHNlc3Npb24gdG9rZW4gXHJcbiAqIGluIGxvY2FsIHN0b3JhZ2UsIHRoaXMgdG9rZW4gaXMgdXNlZCB0byB2YWxpZGF0ZSBhbGwgdHJhbnNhY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEFuZEdldFZpZXdlckJlYXJlclRva2VuRnJvbVVybCgpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRva2VuID0gJyc7XHJcbiAgICAvLyBFeHRyYWN0aW5nIHRoZSAnc2Vzc2lvbicgdG9rZW4gZnJvbSB0aGUgVVJMIHF1ZXJ5IHBhcmFtZXRlcnNcclxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICBjb25zdCB2aWV3ZXJCZWFyZXJUb2tlbiA9IHVybFBhcmFtcy5nZXQoJ3Nlc3Npb24nKTtcclxuICAgIC8vIEVuc3VyZSB0aGF0IGB2aWV3ZXJCZWFyZXJUb2tlbmAgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICBpZiAoIXZpZXdlckJlYXJlclRva2VuKSB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdObyB2aWV3ZXIgYmVhcmVyIHRva2VuIGZvdW5kIGluIFVSTCBwYXJhbWV0ZXJzLicpO1xyXG4gICAgICAgIGNvbnNvbGUud2FybignTm8gdmlld2VyIGJlYXJlciB0b2tlbiBmb3VuZCBpbiBVUkwgcGFyYW1ldGVycy4gM0QgVmlld2VyL0VkaXRvciBtYXkgbm90IHdvcmsuJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0QmVhcmVyVG9rZW4odmlld2VyQmVhcmVyVG9rZW4pO1xyXG4gICAgICAgIHRva2VuID0gdmlld2VyQmVhcmVyVG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRva2VuO1xyXG59XHJcblxyXG4vKipcclxuICogVmlld2VyIGJlYXJlciB0b2tlbiBnZXR0ZXIuXHJcbiAqIEByZXR1cm5zIEN1cnJlbnRseSBzdG9yZWQgYmVhcmVyIHRva2VuLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdlckJlYXJlclRva2VuKCk6IHN0cmluZyB8IG51bGwge1xyXG5cclxuICAgIGxldCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZWFyZXJUb2tlbicpO1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIHRva2VuID0gc2V0QW5kR2V0Vmlld2VyQmVhcmVyVG9rZW5Gcm9tVXJsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRva2VuO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb25zIHRvIHNhdmUgb3Igb3ZlcndyaXRlIHRoZSB0b2tlbnMgaW4gbG9jYWwgc3RvcmFnZVxyXG4gKiBAcGFyYW0gdG9rZW4gQmVhcmVyIHRva2VuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0QmVhcmVyVG9rZW4odG9rZW46IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JlYXJlclRva2VuJywgdG9rZW4pO1xyXG59IiwiLyogZXNsaW50LWRpc2FibGUgKi9cclxuXHJcbmltcG9ydCB7IGdldFZpZXdlckJlYXJlclRva2VuLCBzZXRBbmRHZXRWaWV3ZXJCZWFyZXJUb2tlbkZyb21VcmwgfSBmcm9tIFwiLi9BdXRoVG9vbHNcIjtcclxuXHJcbi8vIEZlbXNvbHZlIEFwaSBEZWNsYXJhdGlvbnMgKHdoZW4gdXNlZCBmcm9tIHJ1bnRpbWUgY2hhbmdlcylcclxuZGVjbGFyZSBjb25zdCBGZW1zb2x2ZTogdHlwZW9mIGltcG9ydChcImZjcy1jb3JlLXZpZXdlci9mY3MtY29yZS12aWV3ZXJAdHlwZXMvQXBpXCIpO1xyXG5cclxuLy8gVmlld2VyIGxvYWRpbmcgc2V0dXBcclxuZXhwb3J0IGNvbnN0IGxvYWRWaWV3ZXIgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgLy8gU3RvcmUgYmVhcmVyIHRva2VuXHJcbiAgICBjb25zdCB2aWV3ZXJTZXNzaW9uVG9rZW4gPSBzZXRBbmRHZXRWaWV3ZXJCZWFyZXJUb2tlbkZyb21VcmwoKTtcclxuXHJcbiAgICAvLyBTZXQgc3R5bGVcclxuICAgIGNvbnN0IHZpZXdlclN0eWxlID0gbmV3IEZlbXNvbHZlLlNldHRpbmcuU3R5bGVTZXR0aW5ncy5WaWV3ZXJTdHlsZVNldHRpbmdzKCk7XHJcbiAgICB2aWV3ZXJTdHlsZS5zZXRQcmVzZXRTdHlsZShcclxuICAgICAgICBGZW1zb2x2ZS5TZXR0aW5ncy5TdHlsZVNldHRpbmdzLlByZXNldFN0eWxlcy5DTE9VRF9DQUVcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYWxsU2V0dGluZ3MgPSBuZXcgRmVtc29sdmUuQ2xvdWRWaWV3ZXIuVmlld2VyU2V0dGluZ3MoKTtcclxuICAgIGFsbFNldHRpbmdzLnZpZXdlclN0eWxlU2V0dGluZ3MgPSB2aWV3ZXJTdHlsZTtcclxuXHJcbiAgICAvLyBWaWV3ZXIgaW5zdGFudGlhdGlvbiBhbmQgYWRkaXRpb24gb2YgY3VzdG9tIGJhY2tlbmQgc2VydmljZSxcclxuICAgIC8vIGlmIHRoaXMgcGFydCBmYWlscywgbm90aGluZyBpcyBsb2FkZWQuXHJcbiAgICBjb25zdCBmY3NWaWV3ZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgXCJmY3Mtdmlld2VyXCJcclxuICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3Qgdmlld2VyID0gbmV3IEZlbXNvbHZlLkNsb3VkVmlld2VyLkdlbmVyaWMzRFZpZXdlcihcclxuICAgICAgICBmY3NWaWV3ZXJFbGVtZW50LFxyXG4gICAgICAgIGFsbFNldHRpbmdzLFxyXG4gICAgICAgIHZpZXdlclNlc3Npb25Ub2tlbiwgLy8gbGljZW5zZSB0b2tlblxyXG4gICAgICAgIGZhbHNlIC8vIGRpc2FsbG93IHNvY2tldCBjYWxsYmFja3NcclxuICAgICk7XHJcblxyXG4gICAgLy8gU3RhcnQgdGhlIHZpZXdlclxyXG4gICAgYXdhaXQgdmlld2VyLnN0YXJ0Vmlld2VyKCk7XHJcbiAgICBjb25zb2xlLmxvZyhgT3BlbmluZyB2aWV3ZXIuLi5gKVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL1ZpZXdlci50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==