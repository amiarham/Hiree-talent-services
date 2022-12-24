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
    <img
      height={"400px"}
      src='https://img.freepik.com/free-vector/banner-online-offline-system_107791-2042.jpg?w=900&t=st=1670925959~exp=1670926559~hmac=d20a700f4292540523f1cf253cf6d387160f46dc3fb177ec5b82b479d827dd3c'
      alt='1'
    />,
    <img
      height={"400px"}
      src='https://img.freepik.com/free-vector/customers-tools-store-illustration_1441-3969.jpg?t=st=1670925803~exp=1670926403~hmac=eaeaea5f3b8a6e8b215dd59eac27c9c6fb8126bd8abb9f120f3c6a49d372a26c'
      alt='2'
    />,
    <img
      height={"400px"}
      src='https://img.freepik.com/free-vector/supermarket-with-food-shelves-illustration_1262-16618.jpg?w=900&t=st=1670926002~exp=1670926602~hmac=361bad120c7be35b7f2f4efed1231eb44d66d137adeda136e96fd44f5e53ca4f'
      alt='3'
    />,
    <img
      height={"400px"}
      src='https://img.freepik.com/free-vector/japanese-konbini-shop-with-seller-give-products-consumer_107791-5147.jpg?w=996&t=st=1670926167~exp=1670926767~hmac=f65c5ee7133542a0fb70fa8ca262c9c057ca17716c1004486e9f0f678e9a7b9f'
      alt='4'
    />,
  ];
  return <Carousel slides={slides} autoplay={true} interval={4000} />;
}
