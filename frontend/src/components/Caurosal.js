/** @format */

// /** @format */

// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// export default function Caurosal() {
//   return (
//     <Carousel>
//       <div style={{ width: "100%" }}>
//         <img src='https://img.freepik.com/free-photo/e-commerce-shop-online-homepage-sale-concept_53876-120965.jpg?w=740&t=st=1670879133~exp=1670879733~hmac=3a8ec83b1e9883b108ffecb9dfdf45c38a5b097c6f5e49527233ef59837750fe' />
//         <p className='legend'>Shop online shop from us</p>
//       </div>
//       <div>
//         <img src='https://img.freepik.com/free-photo/cropped-image-woman-inputting-card-information-key-phone-laptop-while-shopping-online_1423-68.jpg?w=740&t=st=1670879284~exp=1670879884~hmac=1c580fff1915c873adb5931ad34a00ae702cb8d96dca50f72f21a143ab037fdd' />
//         <p className='legend'>Get the best prices</p>
//       </div>
//       <div>
//         <img src='https://img.freepik.com/free-photo/double-exposure-businessman-using-tablet-with-cityscape-financial-graph-blurred-building-background-business-trading-concept_1258-84130.jpg?w=826&t=st=1670879335~exp=1670879935~hmac=234c399ee2c4bc68919f608736647fe6df2459cd3ada95e865d8fb10e58a0602' />
//         <p className='legend'>Sell with us and get marginal profits</p>
//       </div>
//     </Carousel>
//   );
// }

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "3d-react-carousal";
export default function Caurosal() {
  var slides = [
    <img height={"400px"} src='./slides/slide1.png' alt='1' />,
    <img height={"400px"} src='./slides/slide2.png' alt='1' />,
    <img height={"400px"} src='./slides/slide3.png' alt='1' />,
    <img height={"400px"} src='./slides/slide4.png' alt='1' />,
    <img height={"400px"} src='./slides/slide5.png' alt='1' />,
    <img height={"400px"} src='./slides/slide6.png' alt='1' />,
    <img height={"400px"} src='./slides/slide7.png' alt='1' />,
    <img height={"400px"} src='./slides/slide8.png' alt='1' />,
    <img height={"400px"} src='./slides/slide9.png' alt='1' />,
  ];
  return <Carousel slides={slides} autoplay={true} interval={4000} />;
}
