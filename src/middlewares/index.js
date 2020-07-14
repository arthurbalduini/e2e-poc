const { fetchEmailData } = require("../service")


export const getEmailData = (setEmail) => fetchEmailData().then(data => {
    const [nheco] = data;
    const [blabla] = nheco.data;
    //console.log(blabla.data.email);
    setEmail(blabla.data.email)
})