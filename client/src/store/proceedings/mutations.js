/*
export function someMutation (state) {
}
*/

export function toggleExpandedMode(state, payload) {
    Object.assign(payload.number, payload.expandedMode)
}