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
    class ExampleService {
        getPluginName() {
            return 'ExamplePlugin';
        }
        getPluginClassName() {
            return 'ExampleBackendService';
        }
    }
    // Store bearer token
    const viewerSessionToken = (0, AuthTools_1.setAndGetViewerBearerTokenFromUrl)();
    // Set style
    const viewerStyle = new Femsolve.Settings.StyleSettings.ViewerStyleSettings();
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
    // Register the plugin
    const pluginService = new ExampleService();
    yield viewer.loadPlugin(pluginService);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUNZLGtCQUFVLGNBNEN0Qjs7Ozs7OztVQ3BERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS12aWV3ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyLy4vQXV0aFRvb2xzLnRzIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyLy4vVmlld2VyLnRzIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhhbXBsZS12aWV3ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJWaWV3ZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVmlld2VyXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsIi8qKlxuICogU2hvdWxkIGJlIHVzZWQgaW5pdGlhbGx5IHRvIGdyYWIgYW5kIHNhdmUgdGhlIHNlc3Npb24gdG9rZW4gXG4gKiBpbiBsb2NhbCBzdG9yYWdlLCB0aGlzIHRva2VuIGlzIHVzZWQgdG8gdmFsaWRhdGUgYWxsIHRyYW5zYWN0aW9ucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEFuZEdldFZpZXdlckJlYXJlclRva2VuRnJvbVVybCgpOiBzdHJpbmcge1xuICAgIGxldCB0b2tlbiA9ICcnO1xuICAgIC8vIEV4dHJhY3RpbmcgdGhlICdzZXNzaW9uJyB0b2tlbiBmcm9tIHRoZSBVUkwgcXVlcnkgcGFyYW1ldGVyc1xuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgY29uc3Qgdmlld2VyQmVhcmVyVG9rZW4gPSB1cmxQYXJhbXMuZ2V0KCdzZXNzaW9uJyk7XG4gICAgLy8gRW5zdXJlIHRoYXQgYHZpZXdlckJlYXJlclRva2VuYCBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICBpZiAoIXZpZXdlckJlYXJlclRva2VuKSB7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcignTm8gdmlld2VyIGJlYXJlciB0b2tlbiBmb3VuZCBpbiBVUkwgcGFyYW1ldGVycy4nKTtcbiAgICAgICAgY29uc29sZS53YXJuKCdObyB2aWV3ZXIgYmVhcmVyIHRva2VuIGZvdW5kIGluIFVSTCBwYXJhbWV0ZXJzLiAzRCBWaWV3ZXIvRWRpdG9yIG1heSBub3Qgd29yay4nKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEJlYXJlclRva2VuKHZpZXdlckJlYXJlclRva2VuKTtcbiAgICAgICAgdG9rZW4gPSB2aWV3ZXJCZWFyZXJUb2tlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG59XG5cbi8qKlxuICogVmlld2VyIGJlYXJlciB0b2tlbiBnZXR0ZXIuXG4gKiBAcmV0dXJucyBDdXJyZW50bHkgc3RvcmVkIGJlYXJlciB0b2tlbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdlckJlYXJlclRva2VuKCk6IHN0cmluZyB8IG51bGwge1xuXG4gICAgbGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JlYXJlclRva2VuJyk7XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgICB0b2tlbiA9IHNldEFuZEdldFZpZXdlckJlYXJlclRva2VuRnJvbVVybCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbnMgdG8gc2F2ZSBvciBvdmVyd3JpdGUgdGhlIHRva2VucyBpbiBsb2NhbCBzdG9yYWdlXG4gKiBAcGFyYW0gdG9rZW4gQmVhcmVyIHRva2VuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRCZWFyZXJUb2tlbih0b2tlbjogc3RyaW5nKTogdm9pZCB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JlYXJlclRva2VuJywgdG9rZW4pO1xufSIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IGdldFZpZXdlckJlYXJlclRva2VuLCBzZXRBbmRHZXRWaWV3ZXJCZWFyZXJUb2tlbkZyb21VcmwgfSBmcm9tIFwiLi9BdXRoVG9vbHNcIjtcblxuLy8gRmVtc29sdmUgQXBpIERlY2xhcmF0aW9ucyAod2hlbiB1c2VkIGZyb20gcnVudGltZSBjaGFuZ2VzKVxuZGVjbGFyZSBjb25zdCBGZW1zb2x2ZTogdHlwZW9mIGltcG9ydChcImZjcy1jb3JlLXZpZXdlci9mY3MtY29yZS12aWV3ZXJAdHlwZXMvQXBpXCIpO1xuXG4vLyBWaWV3ZXIgbG9hZGluZyBzZXR1cFxuZXhwb3J0IGNvbnN0IGxvYWRWaWV3ZXIgPSBhc3luYyAoKSA9PiB7XG5cbiAgICBjbGFzcyBFeGFtcGxlU2VydmljZSBpbXBsZW1lbnRzIEZlbXNvbHZlLkNsb3VkVmlld2VyLlBsdWdpblNlcnZpY2Uge1xuICAgICAgICBwdWJsaWMgZ2V0UGx1Z2luTmFtZSgpIDogc3RyaW5nIHtcbiAgICAgICAgICAgIHJldHVybiAnRXhhbXBsZVBsdWdpbic7XG4gICAgICAgIH1cbiAgICAgICAgcHVibGljIGdldFBsdWdpbkNsYXNzTmFtZSgpIDogc3RyaW5nIHtcbiAgICAgICAgICAgIHJldHVybiAnRXhhbXBsZUJhY2tlbmRTZXJ2aWNlJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0b3JlIGJlYXJlciB0b2tlblxuICAgIGNvbnN0IHZpZXdlclNlc3Npb25Ub2tlbiA9IHNldEFuZEdldFZpZXdlckJlYXJlclRva2VuRnJvbVVybCgpO1xuXG4gICAgLy8gU2V0IHN0eWxlXG4gICAgY29uc3Qgdmlld2VyU3R5bGUgPSBuZXcgRmVtc29sdmUuU2V0dGluZ3MuU3R5bGVTZXR0aW5ncy5WaWV3ZXJTdHlsZVNldHRpbmdzKCk7XG4gICAgdmlld2VyU3R5bGUuc2V0UHJlc2V0U3R5bGUoXG4gICAgICAgIEZlbXNvbHZlLlNldHRpbmdzLlN0eWxlU2V0dGluZ3MuUHJlc2V0U3R5bGVzLkNMT1VEX0NBRVxuICAgICk7XG5cbiAgICBjb25zdCBhbGxTZXR0aW5ncyA9IG5ldyBGZW1zb2x2ZS5DbG91ZFZpZXdlci5WaWV3ZXJTZXR0aW5ncygpO1xuICAgIGFsbFNldHRpbmdzLnZpZXdlclN0eWxlU2V0dGluZ3MgPSB2aWV3ZXJTdHlsZTtcblxuICAgIC8vIFZpZXdlciBpbnN0YW50aWF0aW9uIGFuZCBhZGRpdGlvbiBvZiBjdXN0b20gYmFja2VuZCBzZXJ2aWNlLFxuICAgIC8vIGlmIHRoaXMgcGFydCBmYWlscywgbm90aGluZyBpcyBsb2FkZWQuXG4gICAgY29uc3QgZmNzVmlld2VyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBcImZjcy12aWV3ZXJcIlxuICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBjb25zdCB2aWV3ZXIgPSBuZXcgRmVtc29sdmUuQ2xvdWRWaWV3ZXIuR2VuZXJpYzNEVmlld2VyKFxuICAgICAgICBmY3NWaWV3ZXJFbGVtZW50LFxuICAgICAgICBhbGxTZXR0aW5ncyxcbiAgICAgICAgdmlld2VyU2Vzc2lvblRva2VuLCAvLyBsaWNlbnNlIHRva2VuXG4gICAgICAgIGZhbHNlIC8vIGRpc2FsbG93IHNvY2tldCBjYWxsYmFja3NcbiAgICApO1xuXG4gICAgLy8gU3RhcnQgdGhlIHZpZXdlclxuICAgIGF3YWl0IHZpZXdlci5zdGFydFZpZXdlcigpO1xuICAgIFxuICAgIC8vIFJlZ2lzdGVyIHRoZSBwbHVnaW5cbiAgICBjb25zdCBwbHVnaW5TZXJ2aWNlID0gbmV3IEV4YW1wbGVTZXJ2aWNlKClcbiAgICBhd2FpdCB2aWV3ZXIubG9hZFBsdWdpbihwbHVnaW5TZXJ2aWNlKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhgT3BlbmluZyB2aWV3ZXIuLi5gKVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vVmlld2VyLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9