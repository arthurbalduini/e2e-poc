const { fetchEmailData } = require("../service")


export const getEmailData = (setEmail) => fetchEmailData().then(res => {
    const [nheco] = res;
    setEmail(nheco.data.email)
})