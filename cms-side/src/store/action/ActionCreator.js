import { FETCH_CLASS, FETCH_STUDENT, FETCH_STUDENT_BYID, FETCH_CLASS_BYID, FETCH_SCHEDULE } from "./ActionTypes";
import axios from "axios";
import { redirect } from "react-router-dom";

// import Swal from "sweetalert2";

const baseUrl = "http://localhost:3001";

export const studentsFetch = (payload) => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/students?ClassId=${localStorage.ClassId}`, {
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network was not ok");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(studentsFetchSuccess(data));
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const studentsFetchSuccess = (payload) => {
  return {
    type: FETCH_STUDENT,
    payload: payload,
  };
};

export const studentById = (id) => {
  console.log(id);
  return (dispatch, getState) => {
    fetch(`${baseUrl}/students/${id}`, {
      method: "GET",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response);
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Success:", data);
        dispatch(studentFetchSuccessById(data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

export const studentFetchSuccessById = (payload) => {
  return {
    type: FETCH_STUDENT_BYID,
    payload: payload,
  };
};

export const studentAdd = (payload) => {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        if (!response.ok) {
          const error = await response.json();
          console.log(error);
          throw new Error(error.message);
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Success:", data);
        // Swal.fire({
        //   position: "top-end",
        //   icon: "success",
        //   title: "Add Product Success",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
        dispatch(studentsFetch());
        console.log("masuk nih");
      })
      .catch((error) => {
        console.error("Error:", error);
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: error.message,
        // });
      });
  };
};

export const editStudent = (id, payload) => {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/students/${id}`, {
      method: "PUT",
      headers: {
        access_token: localStorage.access_token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response);
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Success:", data);
        dispatch(studentsFetch());
        redirect("/student");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

export const studentDelete = (id) => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/students/${id}`, {
      method: "DELETE",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response);
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Success:", data);
        dispatch(studentsFetch());
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

export const classesFetch = (payload) => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/class`, {
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network was not ok");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(classesFetchSuccess(data));
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const classesFetchSuccess = (payload) => {
  return {
    type: FETCH_CLASS,
    payload: payload,
  };
};

export const classById = (id) => {
  console.log(id);
  return (dispatch, getState) => {
    fetch(`${baseUrl}/class/${id}`, {
      method: "GET",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response);
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Success:", data);
        dispatch(classFetchSuccessById(data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

export const classFetchSuccessById = (payload) => {
  return {
    type: FETCH_CLASS_BYID,
    payload: payload,
  };
};

export const addAttendances = (payload) => {
  console.log(payload);
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/attendances`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        if (!response.ok) {
          const error = await response.json();
          console.log(error);
          throw new Error(error.message);
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Success:", data);
        // Swal.fire({
        //   position: "top-end",
        //   icon: "success",
        //   title: "Add Product Success",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
        dispatch(studentsFetch());
        console.log("masuk nih");
      })
      .catch((error) => {
        console.error("Error:", error);
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: error.message,
        // });
      });
  };
};

export const scheduleFetch = (payload) => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/schedules`, {
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network was not ok");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(schedulesFetchSuccess(data));
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const schedulesFetchSuccess = (payload) => {
  return {
    type: FETCH_SCHEDULE,
    payload: payload,
  };
};

// export const productDelete = (id) => {
//   return (dispatch, getState) => {
//     fetch(`${baseUrl}/product/${id}`, {
//       method: "DELETE",
//       headers: {
//         access_token: localStorage.access_token,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(response);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // console.log("Success:", data);
//         dispatch(productFetch());
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };
// };

// export const productById = (id) => {
//   return (dispatch, getState) => {
//     fetch(`${baseUrl}/product/${id}`, {
//       method: "GET",
//       headers: {
//         access_token: localStorage.access_token,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(response);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // console.log("Success:", data);
//         dispatch(productFetchSuccessById(data));
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };
// };

// export const productFetchSuccessById = (payload) => {
//   return {
//     type: FETCH_PRODUCT_BYID,
//     payload: payload,
//   };
// };

// export const categoryFetch = (payload) => {
//   return (dispatch, getState) => {
//     fetch(`${baseUrl}/categories`, {
//       headers: {
//         access_token: localStorage.access_token,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not OK");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         dispatch(categoryFetchSuccess(data));
//         // console.log(data);
//       });
//   };
// };

// export const categoryFetchSuccess = (payload) => {
//   return {
//     type: FETCH_CATEGORY,
//     payload: payload,
//   };
// };

// export const categoryAdd = (payload) => {
//   return (dispatch, getState) => {
//     fetch(`${baseUrl}/categories`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         access_token: localStorage.access_token,
//       },
//       body: JSON.stringify(payload),
//     })
//       .then(async (response) => {
//         if (!response.ok) {
//           const error = await response.json();

//           throw new Error(error.message);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // console.log("Success:", data);
//         dispatch(categoryFetch());
//         redirect("/category");
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: error.message,
//         });
//       });
//   };
// };

// export const categoryDelete = (id) => {
//   return (dispatch, getState) => {
//     fetch(`${baseUrl}/categories/${id}`, {
//       method: "DELETE",
//       headers: {
//         access_token: localStorage.access_token,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(response);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Success:", data);
//         dispatch(categoryFetch());
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };
// };

// export const editProduct = (id, payload) => {
//   return (dispatch, getState) => {
//     fetch(`${baseUrl}/product/${id}`, {
//       method: "PUT",
//       headers: {
//         access_token: localStorage.access_token,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(response);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // console.log("Success:", data);
//         dispatch(productFetch());
//         redirect("/product");
//       })
//       .catch((error) => {
//         // console.error("Error:", error);
//       });
//   };
// };
