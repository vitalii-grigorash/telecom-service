export const sendEmail = (email, password, name) => fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then((res) => {
      if (!res.ok) {
        return res.json()
          .then((err) => {
            if (err.error) {
              throw new Error(err.error);
            } else {
              throw new Error(err.message);
            }
          });
      }
      return res.json();
    })
    .catch((err) => { 
      throw new Error(err.message);
    });