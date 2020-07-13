
const url = "http://localhost:3007/email"

export const getEmailData = setEmail => {
    try {
        fetch(url)
            .then(response => response.json())
            .then(response => setEmail(JSON.stringify(response)));        
    } catch (e) {
      if (e) {
        console.log(e.message)
      }
    }
};

export const postEmailData = data => {

    const postData = {
        "id": 1,
        "data": data
    }

    const putURL = `${url}/1`;

    try {
        fetch(putURL, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json",
            },
            "body": JSON.stringify(postData),
        })
        .then(response => response.json())
    } catch (e) {
      if (e) {
        console.log(e.message)
      }
    }
}