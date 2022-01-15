export const dateParser = (num) => {
    let options = {weekday: "long", year: "numeric", month: "long", day:"numeric"}

    let timestamp = Date.parse(num)

    let date = new Date(timestamp).toLocaleDateString('fr-FR', options)

    return date.toString()
}