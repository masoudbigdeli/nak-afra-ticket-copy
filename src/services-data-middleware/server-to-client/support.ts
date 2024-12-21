import ServerSupportData from "../../models/api-reponse/support";
import { SupportEntityDetailModel } from "../../models/pages/support";

export const supportDataS2CMiddleware = (support?: ServerSupportData): SupportEntityDetailModel => {
    return {
        phoneNumber: support?.contact || '',
        address: support?.address || '',
        email: support?.email || '',
    }
}

