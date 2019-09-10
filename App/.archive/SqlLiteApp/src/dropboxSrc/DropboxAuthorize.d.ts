import { Authorize } from "../Authorize";
export declare class DropboxAuthorize implements Authorize {
    constructor();
    authorize(): Promise<void>;
    hasUserAuthorized(): Promise<boolean>;
    revokeAuthorization(): Promise<void>;
    private _handleOpenURL;
}
