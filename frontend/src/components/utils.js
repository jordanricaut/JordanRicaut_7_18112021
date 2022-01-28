import dayjs from 'dayjs';

require('dayjs/locale/fr')

dayjs.locale('fr')

var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)



export const dateParser = (num) => {

  const datePost = dayjs().from(dayjs(num), true)
  

  return datePost.toString()
  

}

export const userDateParser = (num) => {

    let options = {weekday: "long", year: "numeric", month: "short", day:"numeric"}

    let timestamp = Date.parse(num)

    let date = new Date(timestamp).toLocaleDateString('fr-FR', options)

    return date.toString()
}

export const isEmpty = (value) => {
    return (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
  };