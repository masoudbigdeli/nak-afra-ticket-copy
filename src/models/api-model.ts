interface ApiModel {
    permissions: Array<string>
    uri: (...args: Array<string>) => string
}

export default ApiModel