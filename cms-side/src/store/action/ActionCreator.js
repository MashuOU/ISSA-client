import { FETCH_CLASS, FETCH_STUDENT, FETCH_STUDENT_BYID, FETCH_CLASS_BYID, FETCH_SCHEDULE, FETCH_TEACHER, FETCH_LESSON, FETCH_LESSON_BYID, FETCH_HISTORY } from './ActionTypes';

// import Swal from "sweetalert2";

let baseUrl = 'http://localhost:3000';

// STUDENT ONLY //

export const studentsFetch = (query, pageIndex) => {
  console.log(query, 'masuk ni');
  let url = `http://localhost:3000/students?`;

  if (pageIndex && query.ClassId !== '' && query.ClassId !== 'All') {
    url += `ClassId=${localStorage.ClassId}&pageIndex=${pageIndex}`;
  } else if (pageIndex) {
    url += `pageIndex=${pageIndex}`;
  } else if (!query) {
    url += `ClassId=${localStorage.ClassId}`;
  } else if (query.ClassId !== '' && query.ClassId !== 'All' && query.name) {
    url += `ClassId=${localStorage.ClassId}&name=${query.name}`;
  } else if (query.ClassId === 'All' && query.name) {
    url += `name=${query.name}`;
  } else if (query.ClassId !== '' && query.ClassId !== 'All' && !pageIndex) {
    const temp = (localStorage.ClassId = query.ClassId);
    url += `ClassId=${temp}`;
  } else if (query.ClassId === 'All' || query.ClassId == '') {
    console.log('masuk');
    url += `${url}`;
  }

  return (dispatch, getState) => {
    fetch(`${url}`, {
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Network was not ok');
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
      method: 'GET',
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
        console.error('Error:', error);
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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
        console.log('masuk nih');
      })
      .catch((error) => {
        console.error('Error:', error);
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
      method: 'PUT',
      headers: {
        access_token: localStorage.access_token,
        'Content-Type': 'application/json',
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
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
};

export const studentDelete = (id) => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/students/${id}`, {
      method: 'DELETE',
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
        console.error('Error:', error);
      });
  };
};

//  TEACHER ONLY //
export const teachersFetch = (payload) => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/teachers`, {
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Network was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data, '>>>>>>>>');
        dispatch(teachersFetchSuccess(data));
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const teachersFetchSuccess = (payload) => {
  return {
    type: FETCH_TEACHER,
    payload: payload,
  };
};

export const teacherAdd = (payload) => {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/teachers/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
        dispatch(teachersFetch());
      })
      .catch((error) => {
        console.error('Error:', error);
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: error.message,
        // });
      });
  };
};

// CLASS ONLY //

export const classesFetch = (payload) => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/classes`, {
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Network was not ok');
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

export const classesById = (id) => {
  console.log(id);
  return (dispatch, getState) => {
    fetch(`${baseUrl}/class/${id}`, {
      method: 'GET',
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
        console.error('Error:', error);
      });
  };
};

export const classFetchSuccessById = (payload) => {
  return {
    type: FETCH_CLASS_BYID,
    payload: payload,
  };
};

export const classesAdd = (payload) => {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/classes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
        dispatch(classesFetch());
      })
      .catch((error) => {
        console.error('Error:', error);
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: error.message,
        // });
      });
  };
};

export const editClass = (payload) => {
  console.log(payload, 'ini action');
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/class/${payload.StudentId}`, {
      method: 'PUT',
      headers: {
        access_token: localStorage.access_token,
        'Content-Type': 'application/json',
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
        dispatch(classesFetch());
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
};

export const classDelete = (id) => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/class/${id}`, {
      method: 'DELETE',
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
        dispatch(classesFetch());
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
};

// LESSON ONLY //

export const lessonsFetch = (payload) => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/lessons`, {
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Network was not ok');
        }
        return response.json();
      })
      .then((data) => {
        dispatch(lessonsFetchSuccess(data));
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const lessonsFetchSuccess = (payload) => {
  return {
    type: FETCH_LESSON,
    payload: payload,
  };
};

export const lessonsById = (id) => {
  console.log(id);
  return (dispatch, getState) => {
    fetch(`${baseUrl}/lessons/${id}`, {
      method: 'GET',
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
        dispatch(lessonFetchSuccessById(data));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
};

export const lessonFetchSuccessById = (payload) => {
  return {
    type: FETCH_LESSON_BYID,
    payload: payload,
  };
};

// ONLY SCORES //

export const editScores = (id, payload) => {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/scores`, {
      method: 'PUT',
      headers: {
        access_token: localStorage.access_token,
        'Content-Type': 'application/json',
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
        dispatch(studentById(id));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
};

// ATTENDANCE ONLY //

export const addAttendances = (payload) => {
  console.log(payload);
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/attendances`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
        // console.log("masuk nih");
      })
      .catch((error) => {
        console.error('Error:', error);
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: error.message,
        // });
      });
  };
};

export const editAttendance = (payload) => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/attendances`, {
      method: 'PUT',
      headers: {
        access_token: localStorage.access_token,
        'Content-Type': 'application/json',
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
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
  };
};

// SCHEDULE ONLY //

export const scheduleFetch = (payload) => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/schedules`, {
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Network was not ok');
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

// HISTORY ONLY //

export const historiesFetch = (payload) => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/histories`, {
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Network was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data, ">>>>>>>>");
        dispatch(historiesFetchSuccess(data));
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const historiesFetchSuccess = (payload) => {
  return {
    type: FETCH_HISTORY,
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
