import calculateTimeDifferenceSimple from "../../utils/calculate-time-difference-simple";

export const logintDataS2CMiddleware = (otpSendResponse?: { expires_at: string }): { ttl: number } => {
    return {
        ttl: calculateTimeDifferenceSimple(otpSendResponse?.expires_at || '', new Date().toUTCString(), 1000)
    }
}

