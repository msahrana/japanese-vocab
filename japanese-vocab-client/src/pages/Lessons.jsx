import {useEffect, useState} from "react";
import axios from "axios";
import LessonCard from "./LessonCard";

const Lessons = () => {
  const [lessons, setLessons] = useState();

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const {data} = await axios.get("http://localhost:5000/lessons");
        setLessons(data); // Access the data property here
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };

    fetchLessons();
  }, []);

  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-center my-6">
        Our <span className="text-[#D74037]">Lessons</span> Page
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {lessons?.map((les) => (
          <LessonCard key={les.id} les={les} />
        ))}
      </div>
    </div>
  );
};

export default Lessons;
