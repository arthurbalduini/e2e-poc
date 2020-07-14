import { httpClientWeb } from './conn-utils'

const url = "http://localhost:3007/email"

export const fetchEmailData = () => {
    try {
        return httpClientWeb.get(url).then(res => res.data);
    } catch (e) {
      if (e) {
        console.log(e.message)
      }
    }
};

export const postEmailData = data => {

    const postData = {
      data: [{
        "id": 1,
        "data": data
      }]
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