import React, { useEffect, useState } from "react";

import styles from "./Calalog.module.css";
import FilterForm from "../../components/FilterForm/FilterForm";
import CarsList from "../../components/CarsList/CarsList";
import { fetchCars } from "../../services/apiCars";
import Loader from "../../components/Loader/Loader";

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const maxNumberCars = 32;

  const fetchData = async () => {
    try {
      const fetchedCars = await fetchCars(currentPage);

      setCars((prevCars) => [...prevCars, ...fetchedCars]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching cars:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <main className={`${styles.catalog} container`}>
      <FilterForm />
      {isLoading ? <Loader /> : <CarsList cars={cars} />}

      {cars.length < maxNumberCars && !isLoading && (
        <button className={styles.loadMoreBtn} onClick={loadMore}>
          Load more
        </button>
      )}
    </main>
  );
};

export default Catalog;
