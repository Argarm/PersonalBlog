export function formatSlug(text) {
    return text.toLowerCase().replace(/\s+/g, '-');
}

export function sanitizeId(id) {
    return id.replace(/-/g, "");
}