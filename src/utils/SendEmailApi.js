// export const send = (formData) => fetch(`${BASE_URL}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//   })
//     .then((res) => {
//       if (!res.ok) {
//         return res.json()
//           .then((err) => {
//             if (err.error) {
//               throw new Error(err.error);
//             } else {
//               throw new Error(err.message);
//             }
//           });
//       }
//       return res.json();
//     })
//     .catch((err) => { 
//       throw new Error(err.message);
//     });

// export const send = (formData) => fetch('../sendmail.php', {
//     method: 'POST',
//     body: formData,
// })
// .then((res) => {
//     if (!res.ok) {
//         return res.json()
//         .then((err) => {
//             if (err.error) {
//                 throw new Error(err.error);
//             } else {
//                 throw new Error(err.message);
//             }
//         });
//     }
//     return res.json();
// })
// .catch((err) => { 
//     throw new Error(err.message);
// });