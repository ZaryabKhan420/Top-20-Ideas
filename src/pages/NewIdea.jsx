import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { db } from "../../Config/index";
import { ideas } from "../../Config/schema";
import moment from "moment";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const NewIdea = () => {
  const [ideaData, setIdeaData] = useState({
    idea: "",
    createdBy: "",
  });
  const navigate = useNavigate();

  const insertData = async () => {
    const result = await db.insert(ideas).values({
      ...ideaData,
      postedOn: moment().format("DD/MM/YYYY"),
      vote: 0,
    });
    if (result) {
      toast.success("Idea Inserted", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    insertData();
  };

  return (
    <div className="my-3">
      <div className="my-12">
        <h2 className="text-2xl font-bold text-center m-auto w-[100%] md:w-[50%]">
          From Concept to Create: Empowering Your Startup Journey.
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full mx-auto md:w-[50%] flex flex-col justify-center items-start gap-8 my-16"
        >
          <label htmlFor="idea" className="font-bold w-full">
            Idea:
          </label>
          <textarea
            className="textarea textarea-bordered textarea-lg w-full text-sm"
            placeholder="Write your idea here."
            id="idea"
            onChange={(e) =>
              setIdeaData((prevData) => {
                return {
                  ...prevData,
                  idea: e.target.value,
                };
              })
            }
          ></textarea>

          <label htmlFor="username" className="font-bold">
            UserName:
          </label>
          <input
            type="text"
            className="input input-bordered w-full text-sm"
            placeholder="Enter Your Name"
            onChange={(e) =>
              setIdeaData((prevData) => {
                return {
                  ...prevData,
                  createdBy: e.target.value,
                };
              })
            }
          />
          <button className="btn btn-warning w-full" type="submit">
            {" "}
            Send <FaLocationArrow />
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewIdea;
