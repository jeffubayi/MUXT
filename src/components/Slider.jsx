import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase.config";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Spinner from "./Spinner";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Slider() {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, "listings");
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);

      let listings = [];

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListings(listings);
      setLoading(false);
    };

    fetchListings();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (listings.length === 0) {
    return <></>;
  }

  const listing = [
    {
      id: 1,
      name: "Book early for January 2023 ",
      discountedPrice: "Book Now",
      type: "sale",
      imgUrls: "https://qwetu.co.ke/img/main-carousel/main-carousel-0.webp",
    },
    {
      id: 2,
      name: "Join our vibrant student community",
      regularPrice: "#Proudly Qwetu",
      type: "sale",
      imgUrls: "https://qwetu.co.ke/img/main-carousel/main-carousel-2.webp",
    },
    {
      id: 3,
      name: "Connect, collaborate, inspire ",
      discountedPrice:" Ksh 15,000",
      type: "rent",
      imgUrls: "https://qwetu.co.ke/img/main-carousel/main-carousel-1.webp",
    },
    
    
  ];

  return (
    listing && (
      <>
        <p className="exploreHeading">
          Most preferred accommodation in Nairobi.
        </p>

        <Swiper slidesPerView={2} pagination={{ clickable: true }}>
          {listing.map(( data ) => (
            <SwiperSlide
              key={data.id}
              onClick={() => navigate(`/category/${data.type}/${data.id}`)}
            >
              <div
                style={{
                  background: `url(${data.imgUrls}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="swiperSlideDiv"
              >
                <p className="swiperSlideText">{data.name}</p>
                <p className="swiperSlidePrice">
                 {data.discountedPrice ?? data.regularPrice}{" "}
                  {data.type === "rent" && "/ month"}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  );
}
export default Slider;
