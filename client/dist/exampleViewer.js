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
    class ExampleService extends Femsolve.CloudViewer.PluginService {
        /************************************************************************************/
        /* !!!!! COMPULSORY INTERFACE METHODS !!!!!
         ************************************************************************************/
        getPluginName() {
            return 'ExamplePlugin';
        }
        getPluginClassName() {
            return 'ExampleBackendService';
        }
        /************************************************************************************/
        /* Commands
         ************************************************************************************/
        runCreateRedCubeCommand() {
            return __awaiter(this, arguments, void 0, function* (cubeSide = 5) {
                const response = yield this.forwardCommand('create_red_cube', {
                    side_length: cubeSide
                });
                console.log(`Created red cube finished: ${response.on_finished_arguments}`);
            });
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
    // Run a custom command
    pluginService.runCreateRedCubeCommand(10);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBQWUsQ0FDbkQsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxrQkFBa0IsRUFBRSxnQkFBZ0I7SUFDcEMsS0FBSyxDQUFDLDRCQUE0QjtLQUNyQyxDQUFDO0lBRUYsbUJBQW1CO0lBQ25CLE1BQU0sTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRTNCLHNCQUFzQjtJQUN0QixNQUFNLGFBQWEsR0FBRyxJQUFJLGNBQWMsRUFBRTtJQUMxQyxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFdkMsdUJBQXVCO0lBQ3ZCLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUUxQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0FBQ3BDLENBQUM7QUFqRVksa0JBQVUsY0FpRXRCOzs7Ozs7O1VDekVEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZXhhbXBsZS12aWV3ZXIvLi9BdXRoVG9vbHMudHMiLCJ3ZWJwYWNrOi8vZXhhbXBsZS12aWV3ZXIvLi9WaWV3ZXIudHMiLCJ3ZWJwYWNrOi8vZXhhbXBsZS12aWV3ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhhbXBsZS12aWV3ZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhhbXBsZS12aWV3ZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlZpZXdlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJWaWV3ZXJcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiLyoqXG4gKiBTaG91bGQgYmUgdXNlZCBpbml0aWFsbHkgdG8gZ3JhYiBhbmQgc2F2ZSB0aGUgc2Vzc2lvbiB0b2tlbiBcbiAqIGluIGxvY2FsIHN0b3JhZ2UsIHRoaXMgdG9rZW4gaXMgdXNlZCB0byB2YWxpZGF0ZSBhbGwgdHJhbnNhY3Rpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0QW5kR2V0Vmlld2VyQmVhcmVyVG9rZW5Gcm9tVXJsKCk6IHN0cmluZyB7XG4gICAgbGV0IHRva2VuID0gJyc7XG4gICAgLy8gRXh0cmFjdGluZyB0aGUgJ3Nlc3Npb24nIHRva2VuIGZyb20gdGhlIFVSTCBxdWVyeSBwYXJhbWV0ZXJzXG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICBjb25zdCB2aWV3ZXJCZWFyZXJUb2tlbiA9IHVybFBhcmFtcy5nZXQoJ3Nlc3Npb24nKTtcbiAgICAvLyBFbnN1cmUgdGhhdCBgdmlld2VyQmVhcmVyVG9rZW5gIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgIGlmICghdmlld2VyQmVhcmVyVG9rZW4pIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdObyB2aWV3ZXIgYmVhcmVyIHRva2VuIGZvdW5kIGluIFVSTCBwYXJhbWV0ZXJzLicpO1xuICAgICAgICBjb25zb2xlLndhcm4oJ05vIHZpZXdlciBiZWFyZXIgdG9rZW4gZm91bmQgaW4gVVJMIHBhcmFtZXRlcnMuIDNEIFZpZXdlci9FZGl0b3IgbWF5IG5vdCB3b3JrLicpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0QmVhcmVyVG9rZW4odmlld2VyQmVhcmVyVG9rZW4pO1xuICAgICAgICB0b2tlbiA9IHZpZXdlckJlYXJlclRva2VuO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbjtcbn1cblxuLyoqXG4gKiBWaWV3ZXIgYmVhcmVyIHRva2VuIGdldHRlci5cbiAqIEByZXR1cm5zIEN1cnJlbnRseSBzdG9yZWQgYmVhcmVyIHRva2VuLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vmlld2VyQmVhcmVyVG9rZW4oKTogc3RyaW5nIHwgbnVsbCB7XG5cbiAgICBsZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmVhcmVyVG9rZW4nKTtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgIHRva2VuID0gc2V0QW5kR2V0Vmlld2VyQmVhcmVyVG9rZW5Gcm9tVXJsKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xufVxuXG4vKipcbiAqIEZ1bmN0aW9ucyB0byBzYXZlIG9yIG92ZXJ3cml0ZSB0aGUgdG9rZW5zIGluIGxvY2FsIHN0b3JhZ2VcbiAqIEBwYXJhbSB0b2tlbiBCZWFyZXIgdG9rZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEJlYXJlclRva2VuKHRva2VuOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmVhcmVyVG9rZW4nLCB0b2tlbik7XG59IiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IHsgZ2V0Vmlld2VyQmVhcmVyVG9rZW4sIHNldEFuZEdldFZpZXdlckJlYXJlclRva2VuRnJvbVVybCB9IGZyb20gXCIuL0F1dGhUb29sc1wiO1xuXG4vLyBGZW1zb2x2ZSBBcGkgRGVjbGFyYXRpb25zICh3aGVuIHVzZWQgZnJvbSBydW50aW1lIGNoYW5nZXMpXG5kZWNsYXJlIGNvbnN0IEZlbXNvbHZlOiB0eXBlb2YgaW1wb3J0KFwiZmNzLWNvcmUtdmlld2VyL2Zjcy1jb3JlLXZpZXdlckB0eXBlcy9BcGlcIik7XG5cbi8vIFZpZXdlciBsb2FkaW5nIHNldHVwXG5leHBvcnQgY29uc3QgbG9hZFZpZXdlciA9IGFzeW5jICgpID0+IHtcblxuICAgIGNsYXNzIEV4YW1wbGVTZXJ2aWNlIGV4dGVuZHMgRmVtc29sdmUuQ2xvdWRWaWV3ZXIuUGx1Z2luU2VydmljZSB7XG5cbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgLyogISEhISEgQ09NUFVMU09SWSBJTlRFUkZBQ0UgTUVUSE9EUyAhISEhIVxuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAgIHB1YmxpYyBnZXRQbHVnaW5OYW1lKCkgOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuICdFeGFtcGxlUGx1Z2luJztcbiAgICAgICAgfVxuICAgICAgICBwdWJsaWMgZ2V0UGx1Z2luQ2xhc3NOYW1lKCkgOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuICdFeGFtcGxlQmFja2VuZFNlcnZpY2UnO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgLyogQ29tbWFuZHNcbiAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgYXN5bmMgcnVuQ3JlYXRlUmVkQ3ViZUNvbW1hbmQoY3ViZVNpZGU6IG51bWJlcj01KSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZm9yd2FyZENvbW1hbmQoXG4gICAgICAgICAgICAgICAgJ2NyZWF0ZV9yZWRfY3ViZScsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2lkZV9sZW5ndGg6IGN1YmVTaWRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2coYENyZWF0ZWQgcmVkIGN1YmUgZmluaXNoZWQ6ICR7cmVzcG9uc2Uub25fZmluaXNoZWRfYXJndW1lbnRzfWApXG4gICAgICAgIH1cbiAgICBcbiAgICB9XG5cbiAgICAvLyBTdG9yZSBiZWFyZXIgdG9rZW5cbiAgICBjb25zdCB2aWV3ZXJTZXNzaW9uVG9rZW4gPSBzZXRBbmRHZXRWaWV3ZXJCZWFyZXJUb2tlbkZyb21VcmwoKTtcblxuICAgIC8vIFNldCBzdHlsZVxuICAgIGNvbnN0IHZpZXdlclN0eWxlID0gbmV3IEZlbXNvbHZlLlNldHRpbmdzLlN0eWxlU2V0dGluZ3MuVmlld2VyU3R5bGVTZXR0aW5ncygpO1xuICAgIHZpZXdlclN0eWxlLnNldFByZXNldFN0eWxlKFxuICAgICAgICBGZW1zb2x2ZS5TZXR0aW5ncy5TdHlsZVNldHRpbmdzLlByZXNldFN0eWxlcy5DTE9VRF9DQUVcbiAgICApO1xuXG4gICAgY29uc3QgYWxsU2V0dGluZ3MgPSBuZXcgRmVtc29sdmUuQ2xvdWRWaWV3ZXIuVmlld2VyU2V0dGluZ3MoKTtcbiAgICBhbGxTZXR0aW5ncy52aWV3ZXJTdHlsZVNldHRpbmdzID0gdmlld2VyU3R5bGU7XG5cbiAgICAvLyBWaWV3ZXIgaW5zdGFudGlhdGlvbiBhbmQgYWRkaXRpb24gb2YgY3VzdG9tIGJhY2tlbmQgc2VydmljZSxcbiAgICAvLyBpZiB0aGlzIHBhcnQgZmFpbHMsIG5vdGhpbmcgaXMgbG9hZGVkLlxuICAgIGNvbnN0IGZjc1ZpZXdlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgXCJmY3Mtdmlld2VyXCJcbiAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgY29uc3Qgdmlld2VyID0gbmV3IEZlbXNvbHZlLkNsb3VkVmlld2VyLkdlbmVyaWMzRFZpZXdlcihcbiAgICAgICAgZmNzVmlld2VyRWxlbWVudCxcbiAgICAgICAgYWxsU2V0dGluZ3MsXG4gICAgICAgIHZpZXdlclNlc3Npb25Ub2tlbiwgLy8gbGljZW5zZSB0b2tlblxuICAgICAgICBmYWxzZSAvLyBkaXNhbGxvdyBzb2NrZXQgY2FsbGJhY2tzXG4gICAgKTtcblxuICAgIC8vIFN0YXJ0IHRoZSB2aWV3ZXJcbiAgICBhd2FpdCB2aWV3ZXIuc3RhcnRWaWV3ZXIoKTtcbiAgICBcbiAgICAvLyBSZWdpc3RlciB0aGUgcGx1Z2luXG4gICAgY29uc3QgcGx1Z2luU2VydmljZSA9IG5ldyBFeGFtcGxlU2VydmljZSgpXG4gICAgYXdhaXQgdmlld2VyLmxvYWRQbHVnaW4ocGx1Z2luU2VydmljZSk7XG5cbiAgICAvLyBSdW4gYSBjdXN0b20gY29tbWFuZFxuICAgIHBsdWdpblNlcnZpY2UucnVuQ3JlYXRlUmVkQ3ViZUNvbW1hbmQoMTApO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGBPcGVuaW5nIHZpZXdlci4uLmApXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9WaWV3ZXIudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=