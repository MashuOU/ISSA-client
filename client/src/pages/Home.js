import { useEffect, useState, useRef } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux"
import { getProducts } from '../store/actions/actionCreator';

import ScrollReveal from 'scrollreveal';
import { Button } from "flowbite-react"

import Card from '../components/Card';
import Carousel from '../components/Carousel';
import CtaButton from '../components/buttons/cta-button'
import Footer from '../components/Footer';
import Top from '../components/Top';
import HeatMap from '../components/HeatmapChart';
import HeatmapDua from '../components/HeatmapChartDua';
import LineChart from '../components/LineChart';
import BubbleChart from '../components/BubbleChart';
import TableDetail from '../components/TableDetailNilai';
import LessonsList from './LessonsList';
import BubbleChartDua from '../components/BubbleChartDua';
import ChatPage from './Chat'; 
import Chat from './Chat-client';
 


// import "../../style/custom.css"

















export default function Home() {

  const { product: { allProduct, productById }, category } = useSelector((state) => state)


  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log(allProduct);

  //   const [products, setProducts] = useState([]);
  //   const [categories, setCategories] = useState([]);

  ScrollReveal().reveal('.reveal_top',
    {
      distance: '20px',
      origin: 'top',
      duration: 2000
    }

  )
  ScrollReveal().reveal('.reveal_bottom',
    {
      distance: '20px',
      origin: 'bottom',
      duration: 2000
    }

  )


  useEffect(() => {
    dispatch(getProducts())
    ScrollReveal().reveal('.reveal',
      {
        distance: '20px',
        origin: 'bottom',
        opacity: 0,
        delay: 1000,
        duration: 2000
      }
    );
  }, []);


  const [arrColor, setArrColor] = useState({})

  const [productData, setproductData] = useState(
    [
      {
        id: 9,
        Top: "Upright Collar Line Cotton Linen Shirt",
        slug: "upright-collar-line-cotton-linen-shirt",
        description: "Men's Shirt with updated material. It is soft cool, and comfortable to wear. Koko clothes with contemporary fashionable designs",
        price: 499000,
        mainImg: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/457429/item/idgoods_66_457429.jpg?width=750",
        CategoryId: 6,
        TypeId: 1,
        AuthorId: 1,
        createdAt: "2023-02-20T23:07:21.959Z",
        updatedAt: "2023-02-20T23:07:21.959Z",
        User: {
          email: "macnesa@gmail.com"
        },
        Category: {
          name: "Casual Shirt (Long Sleeves)"
        },
        Type: {
          name: "Men"
        }
      }, {
        "id": 10,
        "name": "Upright Collar Cotton Linen Shirt",
        "slug": "upright-collar-cotton-linen-shirt",
        "description": "Men's shirt with renewed material so that it feels soft, cool, and comfortable to wear. Koko clothes with contemporary fashionable designs",
        "price": 499000,
        "mainImg": "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/455966/item/idgoods_56_455966.jpg?width=750",
        "CategoryId": 6,
        "TypeId": 1,
        "AuthorId": 1,
        "createdAt": "2023-02-20T23:07:21.959Z",
        "updatedAt": "2023-02-20T23:07:21.959Z",
        "User": {
          "email": "macnesa@gmail.com"
        },
        "Category": {
          "name": "Casual Shirt (Long Sleeves)"
        },
        "Type": {
          "name": "Men"
        }
      },
      {
        "id": 7,
        "name": "Uniqlo U 3/4 Sleeve Round Collar T-Shirt",
        "slug": "uniqlo-u-3/4-sleeve-round-collar-t-shirt",
        "description": "Men's T-shirt of 100% soft cotton material. Wide cut with pocket accents on the chest.",
        "price": 299000,
        "mainImg": "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/456972/sub/goods_456972_sub11.jpg?width=750",
        "CategoryId": 5,
        "TypeId": 1,
        "AuthorId": 1,
        "createdAt": "2023-02-20T23:07:21.959Z",
        "updatedAt": "2023-02-20T23:07:21.959Z",
        "User": {
          "email": "macnesa@gmail.com"
        },
        "Category": {
          "name": "T-Shirt"
        },
        "Type": {
          "name": "Men"
        }
      },
      {
        "id": 8,
        "name": "Long Sleeve Line T-Shirt",
        "slug": "long-sleeve-line-t-shirt",
        "description": "T-shirt line made of 100% cotton. With a unique retro style",
        "price": 299000,
        "mainImg": "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/455406/item/idgoods_69_455406.jpg?width=750",
        "CategoryId": 5,
        "TypeId": 1,
        "AuthorId": 1,
        "createdAt": "2023-02-20T23:07:21.959Z",
        "updatedAt": "2023-02-20T23:07:21.959Z",
        "User": {
          "email": "macnesa@gmail.com"
        },
        "Category": {
          "name": "T-Shirt"
        },
        "Type": {
          "name": "Men"
        }
      },
      {
        "id": 6,
        "name": "Round Collar Washable Cotton Sweater",
        "slug": "round-collar-washable-cotton-sweater",
        "description": "Men's Sweater with elegant texture and color, with stylish cut and sleek fit.",
        "price": 399000,
        "mainImg": "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/453760/item/idgoods_43_453760.jpg?width=750",
        "CategoryId": 4,
        "TypeId": 1,
        "AuthorId": 1,
        "createdAt": "2023-02-20T23:07:21.959Z",
        "updatedAt": "2023-02-20T23:07:21.959Z",
        "User": {
          "email": "macnesa@gmail.com"
        },
        "Category": {
          "name": "Sweaters & Cardigans"
        },
        "Type": {
          "name": "Men"
        }
      },
      {
        "id": 5,
        "name": "U Single Breasted Oversize Coat",
        "slug": "u-single-breasted-oversize-coat",
        "description": "An oversize coat that goes well with any top. Perfect for cold weather.",
        "price": 690000,
        "mainImg": "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/457988/sub/idgoods_457988_sub1.jpg?width=750",
        "CategoryId": 3,
        "TypeId": 1,
        "AuthorId": 1,
        "createdAt": "2023-02-20T23:07:21.959Z",
        "updatedAt": "2023-02-20T23:07:21.959Z",
        "User": {
          "email": "macnesa@gmail.com"
        },
        "Category": {
          "name": "Coat"
        },
        "Type": {
          "name": "Men"
        }
      },
    ]
  )




  return (
    <> 

     {/* <ChatPage/> */}

      <Top />

      <Chat/>

      {/* <HeatMap /> */}

      <HeatmapDua />

      <LineChart />

      {/* <BubbleChart /> */}

      <BubbleChartDua />

      <TableDetail />

      <LessonsList />

     
      
      <Carousel/>

      
      
      
    </>

  );
}








































// // export default App;
// // import { useEffect, useState } from 'react';

// // import logo from './logo.svg';
// // import './App.css';
// // import Header from "./components/Header"

// // export default function App() {

// //   const [formValue, setformValue] = useState(
// //     {
// //       name: 'chaimGreen',
// //       password: 'i am ',
// //       username: 'twin'
// //     }
// //   )

// //   function updateForm(event) {
// //     const { name, value } = event.target;
// //     setformValue({ ...formValue, [name]: value });
// //     // const { name, value } = event.target

// //     // let plain = {
// //     //   ...formValue,
// //     // }
// //     // plain[name] = value
// //     // setformValue(plain)
// //   }

// //   useEffect(() => {
// //     console.log('tagidi');
// //   })

// //   return (
// //     <div className="App">
// //       <Header innerHTML="i love chaim green" />
// //       <header className="App-header" style={{ border: "1px solid white", boxSizing: "border-box" }} >
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and done
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //         <form>
// //           {/* <input type="text" value={formValue.name} onChange={function () { }} /> */}
// //           <input name="name" type="text" value={formValue.name} onChange={updateForm} />
// //           <input name="password" type="text" value={formValue.password} onChange={updateForm} />
// //           <input name="username" value={formValue.username} onChange={updateForm} />
// //         </form>
// //       </header>
// //     </div >
// //   );
// // }

// // export default App;
