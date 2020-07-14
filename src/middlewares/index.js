const { fetchEmailData } = require("../service")


export const getEmailData = (setEmail) => fetchEmailData().then(res => {
    //console.log(res);
    const [nheco] = res.data;
    const [blabla] = nheco.data;
    console.log(blabla.data);
    setEmail(blabla.data.email)
})