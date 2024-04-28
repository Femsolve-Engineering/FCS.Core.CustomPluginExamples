/**
 * Should be used initially to grab and save the session token 
 * in local storage, this token is used to validate all transactions.
 */
export function setAndGetViewerBearerTokenFromUrl(): string {
    let token = '';
    // Extracting the 'session' token from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const viewerBearerToken = urlParams.get('session');
    // Ensure that `viewerBearerToken` is not null or undefined
    if (!viewerBearerToken) {
        // throw new Error('No viewer bearer token found in URL parameters.');
        console.warn('No viewer bearer token found in URL parameters. 3D Viewer/Editor may not work.')
    } else {
        setBearerToken(viewerBearerToken);
        token = viewerBearerToken;
    }

    return token;
}

/**
 * Viewer bearer token getter.
 * @returns Currently stored bearer token.
 */
export function getViewerBearerToken(): string | null {

    let token = localStorage.getItem('bearerToken');
    if (!token) {
        token = setAndGetViewerBearerTokenFromUrl();
    }

    return token;
}

/**
 * Functions to save or overwrite the tokens in local storage
 * @param token Bearer token
 */
export function setBearerToken(token: string): void {
    localStorage.setItem('bearerToken', token);
}