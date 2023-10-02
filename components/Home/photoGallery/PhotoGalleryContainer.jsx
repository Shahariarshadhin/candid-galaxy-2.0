import Image from "next/image";
import { useEffect, useState } from "react";
import { PhotoView } from "react-photo-view";

const PhotoGalleryContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://64e360ccbac46e480e78b1c3.mockapi.io/api/food-management-systems/food-management-systems"
        );
        const fetchedData = await response.json(); // Store the fetched data
        setData(fetchedData); // Set the state variable with the fetched data
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data.map((item, idx) => (
            <div key={idx} className="rounded-xl shadow-xl">
              <PhotoView  src={item.image}>
                {item.image && (
                  <Image
                    className="rounded-t-xl w-[400px] h-[250px] cursor-pointer"
                    src={item.image}
                    width={300}
                    height={300}
                    alt=""
                  />
                )}
              </PhotoView>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PhotoGalleryContainer;
