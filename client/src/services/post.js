export async function getAllPosts() {
    const response = await  fetch(`/posts`)
    const responseJson = await response.json()
    return responseJson
}

export async function deletePost(id) {
    const response = await fetch(`/deletePost/${id}`, { method: "DELETE", });
    const responseJson = await response.json()
    return responseJson
}

