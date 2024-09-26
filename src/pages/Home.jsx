import React, { useEffect, useState } from "react";
import { Hero, Theme, Tabs, IdeasGrid } from "../components/Index";
import { useLocation, useOutletContext } from "react-router-dom";
import { db } from "../../Config/index";
import { ideas } from "../../Config/schema";
import { desc } from "drizzle-orm";
const Home = () => {
  const [allIdeas, setAllIdeas] = useState([]);
  const [setCurrentTheme] = useOutletContext();
  const location = useLocation();
  useEffect(() => {
    getAllIdeas();
  }, [location.pathname]);

  const getAllIdeas = async () => {
    // Determine which column to sort by based on the current route
    const orderByColumn =
      location.pathname === "/hot" ||
      location.pathname === "/top" ||
      location.pathname === "/"
        ? ideas.vote // If on "hot" or "top", order by votes
        : ideas.id; // Otherwise, order by ID

    try {
      // Fetch data from the database, order by the determined column in descending order
      const result = await db
        .select()
        .from(ideas)
        .orderBy(desc(orderByColumn)) // Pass the correct column to desc
        .limit(10);

      if (result) {
        setAllIdeas(result); // Log the result if data is fetched
      }
    } catch (error) {
      console.error("Error fetching ideas:", error); // Handle any errors
    }
  };

  return (
    <div>
      <Hero />
      <Theme setCurrentTheme={setCurrentTheme} />
      <Tabs />
      <IdeasGrid allIdeas={allIdeas} refreshData={getAllIdeas} />
    </div>
  );
};

export default Home;
