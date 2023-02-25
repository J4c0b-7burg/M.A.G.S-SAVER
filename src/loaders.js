const URL = "https://m-a-g-s-saver.onrender.com"

export const indexLoader = async () => {
    const response = await fetch(URL + "/Videog/")
    const mags = await response.json()
    return mags
}

export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/Videog/${params.id}/`)
    const mag = await response.json()
    return mag
}