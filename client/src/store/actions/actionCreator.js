import { useNavigate } from "react-router-dom"
// const navigate = useNavigate()


import {
  LOADING,
  COUNTER_INCREMENTER,
  WRITE_PRODUCTS,
  WRITE_PRODUCT,
  WRITE_PRODUCT_FAILED,

  WRITE_PRODUCTS_BY_TYPE,
  WRITE_PRODUCTS_BY_TYPE_FAILED,

  WRITE_CATEGORIES,
  WRITE_CATEGORIES_FAILED,

  WRITE_LESSON

} from "./actionTypes"

// export const conterIncremented = (payload) => {
//   return { type: COUNTER_INCREMENTER, payload }
// }


export function loading() {
  return { type: LOADING }
}


export function writeProduct(payload) {
  return { type: WRITE_PRODUCTS, payload }
}

export function writeProductById(payload) {
  return { type: WRITE_PRODUCT, payload }
}
export function writeProductsByType(payload) {
  return { type: WRITE_PRODUCTS_BY_TYPE, payload }
}



export function writeProductFailed(payload) {
  return { type: WRITE_PRODUCT_FAILED, payload }
}

export function writeTodayLesson(payload) {
  return { type: WRITE_LESSON, payload }
}

const baseUrl = "http://localhost:3000"
// const baseUrl = "https://react-server.macnesa.com"








// FUNCTIONS /////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////


export function act_login(data) {
  return async (dispatch) => {
    try {
      const request = await
        fetch(baseUrl + `/users/login`,
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }
        )
      let respon = await request.json()

      if (!request.ok) throw respon

      // localStorage.setItem("myToken", respon.access_token)

      console.log(respon.access_token);

      return true
    } catch (error) {
      console.log(error);
      throw error
    }
  }
}



export function getProducts() {
  return async (dispatch) => {
    try {
      const request = await
        fetch(baseUrl + `/customer/products`,
          {
            method: "GET",
            // headers: {
            //   access_token: localStorage.getItem("myToken")
            //   // access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc2NzAwOTY4fQ.2QIA-QzLozcnavVkPd933C1Mu1ayKtNKfMp9nGFE7ZA"
            // },
          }
        )
      let respon = await request.json()

      if (!request.ok) throw respon

      dispatch(writeProduct(respon))

      return true
    } catch (error) {
      throw error
      // console.log(error);
    }
  }
}




export function getProductById() {
  return async (dispatch) => {
    try {
      dispatch(loading())
      const request = await
        fetch(baseUrl + `/users/userChild`,
          {
            method: "GET",
            headers: {
              // access_token: localStorage.getItem("myToken")
              access_token: "eyJhbGciOiJIUzI1NiJ9.MDIwMzIwMjMwMQ.W74YwqIO02NKtjBYp9CKZbnkgNMcwQDip2t7QAWPNKk"
            },
          }
        )
      let respon = await request.json()
      if (!request.ok) throw respon.error
      console.log(respon, "yesh");
      dispatch(writeProductById(respon))
    } catch (error) {
      dispatch(writeProductFailed(error))
    }
  }
}



export function getCategories() {
  return async (dispatch) => {
    try {
      // dispatch(loading())
      const request = await
        fetch(baseUrl + `/lessons`,
          {
            method: "GET",
            headers: {
              // access_token: localStorage.getItem("myToken")
              access_token: "eyJhbGciOiJIUzI1NiJ9.MDIwMzIwMjMwMQ.W74YwqIO02NKtjBYp9CKZbnkgNMcwQDip2t7QAWPNKk"
              
            },
          }
        )
      let respon = await request.json()

      if (!request.ok) throw respon.error
      dispatch({ type: WRITE_CATEGORIES, payload: respon })

    } catch (error) {
      dispatch({ type: WRITE_CATEGORIES_FAILED, payload: error })
    }
  }
}





export function getByType(type) {
  return async (dispatch) => {
    try {
      dispatch(loading())


      const request = await
        fetch(baseUrl + `/customer/types`,
          {
            method: "GET",
          }
        )

      let respon = await request.json()
      if (!request.ok) throw respon.error
      const foundObj = respon.find(obj => obj.name === type);

      if (foundObj) {

        const request = await
          fetch(baseUrl + `/customer/products/?type=` + foundObj.id,
            {
              method: "GET",
            }
          )

        let respon = await request.json()
        if (!request.ok) throw respon.error
        dispatch(writeProductsByType(respon))

        // console.log(respon);
        // console.log(foundObj);
      }


    } catch (error) {
      dispatch(writeProductFailed(error))
    }
  }
}