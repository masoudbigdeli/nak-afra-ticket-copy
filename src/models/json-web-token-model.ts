interface JsonWebTokenModel {
    username: string
    iat: number
    exp: number
    jti: string
    user_id: number
    orig_iat: number
}

export default JsonWebTokenModel