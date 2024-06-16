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

/***/ "./Viewer.ts":
/*!*******************!*\
  !*** ./Viewer.ts ***!
  \*******************/
/***/ (function(__unused_webpack_module, exports) {


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
// Viewer loading setup
const loadViewer = (viewerSessionToken, viewerContainerAddressNumber) => __awaiter(void 0, void 0, void 0, function* () {
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
    // Set style
    const viewerStyle = new Femsolve.Settings.StyleSettings.ViewerStyleSettings();
    viewerStyle.setPresetStyle(Femsolve.Settings.StyleSettings.PresetStyles.CLOUD_CAE);
    const allSettings = new Femsolve.CloudViewer.ViewerSettings();
    allSettings.viewerStyleSettings = viewerStyle;
    if (viewerContainerAddressNumber)
        allSettings.ViewerServerBaseUrl = `/${viewerContainerAddressNumber}`;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Viewer.ts"](0, __webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZVZpZXdlci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7QUNWQSxvQkFBb0I7Ozs7Ozs7Ozs7OztBQUtwQix1QkFBdUI7QUFDaEIsTUFBTSxVQUFVLEdBQUcsQ0FBTyxrQkFBMkIsRUFBRSw0QkFBcUMsRUFBRSxFQUFFO0lBRW5HLE1BQU0sY0FBZSxTQUFRLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYTtRQUUzRCxzRkFBc0Y7UUFDdEY7OEZBQ3NGO1FBRS9FLGFBQWE7WUFDaEIsT0FBTyxlQUFlLENBQUM7UUFDM0IsQ0FBQztRQUNNLGtCQUFrQjtZQUNyQixPQUFPLHVCQUF1QixDQUFDO1FBQ25DLENBQUM7UUFFRCxzRkFBc0Y7UUFDdEY7OEZBQ3NGO1FBQ2hGLHVCQUF1QjtpRUFBQyxXQUFpQixDQUFDO2dCQUM1QyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQ3RDLGlCQUFpQixFQUNyQjtvQkFDSSxXQUFXLEVBQUUsUUFBUTtpQkFDeEIsQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixRQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUMvRSxDQUFDO1NBQUE7S0FFSjtJQUVELFlBQVk7SUFDWixNQUFNLFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDOUUsV0FBVyxDQUFDLGNBQWMsQ0FDdEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FDekQsQ0FBQztJQUVGLE1BQU0sV0FBVyxHQUFHLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUM5RCxXQUFXLENBQUMsbUJBQW1CLEdBQUcsV0FBVyxDQUFDO0lBQzlDLElBQUksNEJBQTRCO1FBQzVCLFdBQVcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLDRCQUE0QixFQUFFLENBQUM7SUFFekUsK0RBQStEO0lBQy9ELHlDQUF5QztJQUN6QyxNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQzVDLFlBQVksQ0FDRyxDQUFDO0lBRXBCLE1BQU0sTUFBTSxHQUFHLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQ25ELGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsa0JBQWtCLEVBQUUsZ0JBQWdCO0lBQ3BDLEtBQUssQ0FBQyw0QkFBNEI7S0FDckMsQ0FBQztJQUVGLG1CQUFtQjtJQUNuQixNQUFNLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUUzQixzQkFBc0I7SUFDdEIsTUFBTSxhQUFhLEdBQUcsSUFBSSxjQUFjLEVBQUU7SUFDMUMsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRXZDLHVCQUF1QjtJQUN2QixhQUFhLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztBQUNwQyxDQUFDO0FBaEVZLGtCQUFVLGNBZ0V0Qjs7Ozs7Ozs7VUV0RUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci8uL1ZpZXdlci50cyIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVmlld2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlZpZXdlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5cclxuLy8gRmVtc29sdmUgQXBpIERlY2xhcmF0aW9ucyAod2hlbiB1c2VkIGZyb20gcnVudGltZSBjaGFuZ2VzKVxyXG5kZWNsYXJlIGNvbnN0IEZlbXNvbHZlOiB0eXBlb2YgaW1wb3J0KFwiZmNzLWNvcmUtdmlld2VyL2Zjcy1jb3JlLXZpZXdlckB0eXBlcy9BcGlcIik7XHJcblxyXG4vLyBWaWV3ZXIgbG9hZGluZyBzZXR1cFxyXG5leHBvcnQgY29uc3QgbG9hZFZpZXdlciA9IGFzeW5jICh2aWV3ZXJTZXNzaW9uVG9rZW4/OiBzdHJpbmcsIHZpZXdlckNvbnRhaW5lckFkZHJlc3NOdW1iZXI/OiBudW1iZXIpID0+IHtcclxuXHJcbiAgICBjbGFzcyBFeGFtcGxlU2VydmljZSBleHRlbmRzIEZlbXNvbHZlLkNsb3VkVmlld2VyLlBsdWdpblNlcnZpY2Uge1xyXG5cclxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgICAgIC8qICEhISEhIENPTVBVTFNPUlkgSU5URVJGQUNFIE1FVEhPRFMgISEhISFcclxuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0UGx1Z2luTmFtZSgpIDogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuICdFeGFtcGxlUGx1Z2luJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGdldFBsdWdpbkNsYXNzTmFtZSgpIDogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuICdFeGFtcGxlQmFja2VuZFNlcnZpY2UnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgICAgICAvKiBDb21tYW5kc1xyXG4gICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAgICAgYXN5bmMgcnVuQ3JlYXRlUmVkQ3ViZUNvbW1hbmQoY3ViZVNpZGU6IG51bWJlcj01KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mb3J3YXJkQ29tbWFuZChcclxuICAgICAgICAgICAgICAgICdjcmVhdGVfcmVkX2N1YmUnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzaWRlX2xlbmd0aDogY3ViZVNpZGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYENyZWF0ZWQgcmVkIGN1YmUgZmluaXNoZWQ6ICR7cmVzcG9uc2Uub25fZmluaXNoZWRfYXJndW1lbnRzfWApXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IHN0eWxlXHJcbiAgICBjb25zdCB2aWV3ZXJTdHlsZSA9IG5ldyBGZW1zb2x2ZS5TZXR0aW5ncy5TdHlsZVNldHRpbmdzLlZpZXdlclN0eWxlU2V0dGluZ3MoKTtcclxuICAgIHZpZXdlclN0eWxlLnNldFByZXNldFN0eWxlKFxyXG4gICAgICAgIEZlbXNvbHZlLlNldHRpbmdzLlN0eWxlU2V0dGluZ3MuUHJlc2V0U3R5bGVzLkNMT1VEX0NBRVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBhbGxTZXR0aW5ncyA9IG5ldyBGZW1zb2x2ZS5DbG91ZFZpZXdlci5WaWV3ZXJTZXR0aW5ncygpO1xyXG4gICAgYWxsU2V0dGluZ3Mudmlld2VyU3R5bGVTZXR0aW5ncyA9IHZpZXdlclN0eWxlO1xyXG4gICAgaWYgKHZpZXdlckNvbnRhaW5lckFkZHJlc3NOdW1iZXIpXHJcbiAgICAgICAgYWxsU2V0dGluZ3MuVmlld2VyU2VydmVyQmFzZVVybCA9IGAvJHt2aWV3ZXJDb250YWluZXJBZGRyZXNzTnVtYmVyfWA7XHJcblxyXG4gICAgLy8gVmlld2VyIGluc3RhbnRpYXRpb24gYW5kIGFkZGl0aW9uIG9mIGN1c3RvbSBiYWNrZW5kIHNlcnZpY2UsXHJcbiAgICAvLyBpZiB0aGlzIHBhcnQgZmFpbHMsIG5vdGhpbmcgaXMgbG9hZGVkLlxyXG4gICAgY29uc3QgZmNzVmlld2VyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgIFwiZmNzLXZpZXdlclwiXHJcbiAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0IHZpZXdlciA9IG5ldyBGZW1zb2x2ZS5DbG91ZFZpZXdlci5HZW5lcmljM0RWaWV3ZXIoXHJcbiAgICAgICAgZmNzVmlld2VyRWxlbWVudCxcclxuICAgICAgICBhbGxTZXR0aW5ncyxcclxuICAgICAgICB2aWV3ZXJTZXNzaW9uVG9rZW4sIC8vIGxpY2Vuc2UgdG9rZW5cclxuICAgICAgICBmYWxzZSAvLyBkaXNhbGxvdyBzb2NrZXQgY2FsbGJhY2tzXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFN0YXJ0IHRoZSB2aWV3ZXJcclxuICAgIGF3YWl0IHZpZXdlci5zdGFydFZpZXdlcigpO1xyXG4gICAgXHJcbiAgICAvLyBSZWdpc3RlciB0aGUgcGx1Z2luXHJcbiAgICBjb25zdCBwbHVnaW5TZXJ2aWNlID0gbmV3IEV4YW1wbGVTZXJ2aWNlKClcclxuICAgIGF3YWl0IHZpZXdlci5sb2FkUGx1Z2luKHBsdWdpblNlcnZpY2UpO1xyXG5cclxuICAgIC8vIFJ1biBhIGN1c3RvbSBjb21tYW5kXHJcbiAgICBwbHVnaW5TZXJ2aWNlLnJ1bkNyZWF0ZVJlZEN1YmVDb21tYW5kKDEwKTtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coYE9wZW5pbmcgdmlld2VyLi4uYClcclxufVxyXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vVmlld2VyLnRzXCJdKDAsIF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9