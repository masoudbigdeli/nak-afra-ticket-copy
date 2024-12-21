export const createOrUpdateTicketFormC2SMiddleware = (form: { images: number[], subject: string, text: string }) => {
    return {
        subject: form.subject,
        description: form.text,
        picture_ids: [...form.images]
    }
}


export const sendTicketFollowingupMessageFormC2SMiddleware = (form: { text: string }) => {
    return {
        description: form.text,
    }
}