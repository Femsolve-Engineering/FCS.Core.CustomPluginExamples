# Custom Plugin Examples
This repository contains examples of how custom plugins can be developed for the FCS platform.

## Architecture
- /docs - Documentation 
- /client - Frontend side client application's definition of the graphical user-interface
- /service - Backend side service code

## Development
### Building `client` Application
Navigate with PowerShell inside the `client` folder and simply run `npm install` if it was not run before, and then `npm run build`. This will output the bundled app script under `client\dist`.

Note, the frontend application is reliant on the `fcs-core-viewer` NPM package for which always the latest version shall be used, as this is what is supported runtime from the `FcsViewerBundle.js` script.

### Building `service` Application
The supported programming language is `Python 3.11` and it references the `fcs-core-model-engine` PIP package to build service functionalities. 
#### Python Environment Setup
Before creating the environment make sure you _have Python 3.11 installed_ and you run the following commands _using cmd_!

1. Create environment:
`%USERPROFILE%\AppData\Local\Programs\Python\Python311\python.exe -m venv env`

2. Activate the environment:
`.\env\Scripts\activate`

3. Install packages (only first time)
`pip install -r requirements.txt`

### Custom Plugin Configuration
The `fcs.json` file is to be placed inside the root directory. 