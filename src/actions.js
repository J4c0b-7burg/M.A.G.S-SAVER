import { redirect } from "react-router-dom"

const URL = "https://m-a-g-s-saver.onrender.com"

export const createAction = async ({request}) => {
    const formData = await request.formData()

    const newMag = {
        title: formData.get("title"),
        rating: formData.get("rating")
    }

    await fetch(URL + "/mags/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMag)
    })

    return redirect("/")
}

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()

    const id = params.id

    const updatedMag = {
        title: formData.get("title"),
        rating: formData.get("rating")
    }

    await fetch(URL + `/mags/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedMag)
    })

    return redirect(`/post/${id}`)
}

export const deleteAction = async ({params}) => {
    const id = params.id

    await fetch(URL + `/mags/${id}/`, {
        method: "delete",
    })

    return redirect("/")
}