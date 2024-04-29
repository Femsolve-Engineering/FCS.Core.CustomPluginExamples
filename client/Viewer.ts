/* eslint-disable */

import { getViewerBearerToken, setAndGetViewerBearerTokenFromUrl } from "./AuthTools";

// Femsolve Api Declarations (when used from runtime changes)
declare const Femsolve: typeof import("fcs-core-viewer/fcs-core-viewer@types/Api");

// Viewer loading setup
export const loadViewer = async () => {

    class ExampleService extends Femsolve.CloudViewer.PluginService {

        /************************************************************************************/
        /* !!!!! COMPULSORY INTERFACE METHODS !!!!!
         ************************************************************************************/

        public getPluginName() : string {
            return 'ExamplePlugin';
        }
        public getPluginClassName() : string {
            return 'ExampleBackendService';
        }

        /************************************************************************************/
        /* Commands
         ************************************************************************************/
        async runCreateRedCubeCommand(cubeSide: number=5) {
            const response = await this.forwardCommand(
                'create_red_cube',
            {
                side_length: cubeSide
            })
            console.log(`Created red cube finished: ${response.on_finished_arguments}`)
        }
    
    }

    // Store bearer token
    const viewerSessionToken = setAndGetViewerBearerTokenFromUrl();

    // Set style
    const viewerStyle = new Femsolve.Settings.StyleSettings.ViewerStyleSettings();
    viewerStyle.setPresetStyle(
        Femsolve.Settings.StyleSettings.PresetStyles.CLOUD_CAE
    );

    const allSettings = new Femsolve.CloudViewer.ViewerSettings();
    allSettings.viewerStyleSettings = viewerStyle;

    // Viewer instantiation and addition of custom backend service,
    // if this part fails, nothing is loaded.
    const fcsViewerElement = document.getElementById(
        "fcs-viewer"
    ) as HTMLDivElement;

    const viewer = new Femsolve.CloudViewer.Generic3DViewer(
        fcsViewerElement,
        allSettings,
        viewerSessionToken, // license token
        false // disallow socket callbacks
    );

    // Start the viewer
    await viewer.startViewer();
    
    // Register the plugin
    const pluginService = new ExampleService()
    await viewer.loadPlugin(pluginService);

    // Run a custom command
    pluginService.runCreateRedCubeCommand(10);
    
    console.log(`Opening viewer...`)
}
