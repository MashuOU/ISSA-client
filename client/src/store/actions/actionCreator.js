import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate()

import { LOADING, COUNTER_INCREMENTER, WRITE_PRODUCTS, WRITE_PRODUCT, WRITE_PRODUCT_FAILED, WRITE_PRODUCTS_BY_TYPE, WRITE_PRODUCTS_BY_TYPE_FAILED, WRITE_CATEGORIES, WRITE_CATEGORIES_FAILED, WRITE_LESSON } from './actionTypes';

import { FETCH_SCHEDULE, FETCH_CLASSMATE, FETCH_STUDENT_DETAIL, FETCH_CLASS_SCHEDULE, FETCH_ACTIVIY, FETCH_SPP, FETCH_STATISTIC } from './actionTypes';
import axios from 'axios';

// DEVELOPING PURPOSES'
// localStorage.setItem('access_token', 'eyJhbGciOiJIUzI1NiJ9.MDIwMzIwMjMwMQ.W74YwqIO02NKtjBYp9CKZbnkgNMcwQDip2t7QAWPNKk');

// export const conterIncremented = (payload) => {
//   return { type: COUNTER_INCREMENTER, payload }
// }

export function loading() {
  return { type: LOADING };
}

export function writeProduct(payload) {
  return { type: WRITE_PRODUCTS, payload };
}

export function writeProductById(payload) {
  return { type: WRITE_PRODUCT, payload };
}
export function writeProductsByType(payload) {
  return { type: WRITE_PRODUCTS_BY_TYPE, payload };
}

export function writeProductFailed(payload) {
  return { type: WRITE_PRODUCT_FAILED, payload };
}

export function writeTodayLesson(payload) {
  return { type: WRITE_LESSON, payload };
}

const baseUrl = 'http://localhost:3000';
// const baseUrl = "https://react-server.macnesa.com"

// FUNCTIONS /////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////

export function act_login(data) {
  return async (dispatch) => {
    try {
      const request = await fetch(baseUrl + `/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      let respon = await request.json();

      if (!request.ok) throw respon;

      localStorage.setItem('access_token', respon.access_token);
      localStorage.setItem('userId', respon.id);
      localStorage.setItem('teacherId', respon.teacherId);

      console.log(respon.access_token);

      return true;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

// export function getProducts() {
//   return async (dispatch) => {
//     try {
//       const request = await
//         fetch(baseUrl + `/customer/products`,
//           {
//             method: "GET",
//             // headers: {
//             //   access_token: localStorage.getItem("myToken")
//             //   // access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc2NzAwOTY4fQ.2QIA-QzLozcnavVkPd933C1Mu1ayKtNKfMp9nGFE7ZA"
//             // },
//           }
//         )
//       let respon = await request.json()

//       if (!request.ok) throw respon

//       dispatch(writeProduct(respon))

//       return true
//     } catch (error) {
//       throw error
//       // console.log(error);
//     }
//   }
// }

// export function getProductById() {
//   return async (dispatch) => {
//     try {
//       dispatch(loading())
//       const request = await
//         fetch(baseUrl + `/users/userChild`,
//           {
//             method: "GET",
//             headers: {
//               // access_token: localStorage.getItem("myToken")
//               access_token: "eyJhbGciOiJIUzI1NiJ9.MDIwMzIwMjMwMQ.W74YwqIO02NKtjBYp9CKZbnkgNMcwQDip2t7QAWPNKk"
//             },
//           }
//         )
//       let respon = await request.json()
//       if (!request.ok) throw respon.error
//       // console.log(respon, "yesh");
//       dispatch(writeProductById(respon))
//     } catch (error) {
//       dispatch(writeProductFailed(error))
//     }
//   }
// }

// export function getCategories() {
//   return async (dispatch) => {
//     try {
//       // dispatch(loading())
//       const request = await
//         fetch(baseUrl + `/lessons`,
//           {
//             method: "GET",
//             headers: {
//               // access_token: localStorage.getItem("myToken")
//               access_token: "eyJhbGciOiJIUzI1NiJ9.MDIwMzIwMjMwMQ.W74YwqIO02NKtjBYp9CKZbnkgNMcwQDip2t7QAWPNKk"

//             },
//           }
//         )
//       let respon = await request.json()

//       if (!request.ok) throw respon.error
//       dispatch({ type: WRITE_CATEGORIES, payload: respon })

//     } catch (error) {
//       dispatch({ type: WRITE_CATEGORIES_FAILED, payload: error })
//     }
//   }
// }

// export function getByType(type) {
//   return async (dispatch) => {
//     try {
//       dispatch(loading())

//       const request = await
//         fetch(baseUrl + `/customer/types`,
//           {
//             method: "GET",
//           }
//         )

//       let respon = await request.json()
//       if (!request.ok) throw respon.error
//       const foundObj = respon.find(obj => obj.name === type);

//       if (foundObj) {

//         const request = await
//           fetch(baseUrl + `/customer/products/?type=` + foundObj.id,
//             {
//               method: "GET",
//             }
//           )

//         let respon = await request.json()
//         if (!request.ok) throw respon.error
//         dispatch(writeProductsByType(respon))

//         // console.log(respon);
//         // console.log(foundObj);
//       }

//     } catch (error) {
//       dispatch(writeProductFailed(error))
//     }
//   }
// }

// ////////////////////////

//! redux
export const insert_Schedule_redux = (payload) => {
  return {
    type: FETCH_SCHEDULE,
    payload: payload,
  };
};

export const insert_Classmate_redux = (payload) => {
  return {
    type: FETCH_CLASSMATE,
    payload: payload,
  };
};

export const insert_StudentDetail_redux = (payload) => {
  return {
    type: FETCH_STUDENT_DETAIL,
    payload: payload,
  };
};

export const insert_ClassSchedule_redux = (payload) => {
  return {
    type: FETCH_CLASS_SCHEDULE,
    payload: payload,
  };
};

export const insert_Activity_redux = (payload) => {
  return {
    type: FETCH_ACTIVIY,
    payload: payload,
  };
};

export const insert_SPP_redux = (payload) => {
  return {
    type: FETCH_SPP,
    payload: payload,
  };
};

export const insert_Statistic_redux = (payload) => {
  return {
    type: FETCH_STATISTIC,
    payload: payload,
  };
};

// handle login | logout
export const handleLogin = (dataLogin) => {
  return async (dispatch, getState) => {
    try {
      // let query = `?`
      let { data } = await axios({
        url: baseUrl + `/users/login`,
        method: `POST`,
        data: {
          NIM: dataLogin.NIM,
          password: dataLogin.password,
        },
      });
      localStorage.access_token = data.access_token;
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };
};

//! fetching API

// jadwal pelajaran kelas per hari nya
export const fetchScheduleLesson = (day) => {
  return async (dispatch, getState) => {
    try {
      let query = `?day=${day}`;
      let { data } = await axios({
        url: baseUrl + `/public/lesson` + query,
        headers: { access_token: localStorage.access_token },
      });
      dispatch(insert_Schedule_redux(data));
    } catch (error) {
      console.log(error);
    }
  };
};

// teman2 satu kelas
export const fetchClassmate = (day) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios({
        url: baseUrl + `/public/classmate`,
        headers: { access_token: localStorage.access_token },
      });
      dispatch(insert_Classmate_redux(data));
    } catch (error) {
      console.log(error);
    }
  };
};

// detail siswa (nama, nilai, kelas dll)
export const fetchStudentDetail = (day) => {
  return async (dispatch, getState) => {
    try {
      dispatch(loading());
      let { data } = await axios({
        url: baseUrl + `/public/detail`,
        headers: { access_token: localStorage.access_token },
      });
      dispatch(insert_StudentDetail_redux(data));
    } catch (error) {
      console.log(error);
    }
  };
};

// jadwal 1 minggu per kelas
export const fetchClassSchedule = (day) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios({
        url: baseUrl + `/public/schedule`,
        headers: { access_token: localStorage.access_token },
      });
      console.log(data, 'melech');
      dispatch(insert_ClassSchedule_redux(data));
    } catch (error) {
      console.log(error);
    }
  };
};

// aktifitas satu sekolah
export const fetchActivity = (day) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios({
        url: baseUrl + `/public/activity`,
        headers: { access_token: localStorage.access_token },
      });
      dispatch(insert_Activity_redux(data));
    } catch (error) {
      console.log(error);
    }
  };
};

// history table pembayaran SPP
export const fetchSPP = (day) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios({
        url: baseUrl + `/public/transaction`,
        headers: { access_token: localStorage.access_token },
      });
      dispatch(insert_SPP_redux(data));
    } catch (error) {
      console.log(error);
    }
  };
};

// history table pembayaran SPP
export const fetchStatistic = (day) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await axios({
        url: baseUrl + `/public/statistic`,
        headers: { access_token: localStorage.access_token },
      });
      dispatch(insert_Statistic_redux(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export function snap() {
  return async (dispatch, getState) => {
    try {
      // /generate-midtrans/:id

      let { data: payment_token } = await axios({
        method: 'post',
        url: baseUrl + `/users/generate-midtrans/1`,
        headers: { access_token: localStorage.access_token },
      });

      // const { payment_token } = await this.getPaymentToken()
      // const  payment_token  = '78218382163721312836'
      // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
      // const flagging = this.subscribed
      window.snap.pay(payment_token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          // flagging(payment_token)
          console.log(result);
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          console.log('wating your payment!', result);
        },
        onError: function (result) {
          /* You may add your own implementation here */
          console.log('payment failed!', result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          console.log('you closed the popup without finishing the payment');
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
}
