import React from "react";
import { db } from "../../Config/index";
import { ideas } from "../../Config/schema";
import { eq } from "drizzle-orm";
import { upVote, downVote } from "../Utils/Index";
const IdeasGrid = ({ allIdeas, refreshData }) => {
  const handleUpVote = async (ideaDetails) => {
    var add = 1;
    if (Number(ideaDetails.vote) === -1) {
      add = 2;
    }
    if (upVote(ideaDetails.id)) {
      const result = await db
        .update(ideas)
        .set({
          vote: Number(ideaDetails.vote) + add,
        })
        .where(eq(ideaDetails.id, ideas.id));
      if (result) {
        refreshData();
      }
    }
  };
  const handleDownVote = async (ideaDetails) => {
    var subs = 1;
    if (Number(ideaDetails.vote) === 1) {
      subs = 2;
    }
    if (downVote(ideaDetails.id)) {
      const result = await db
        .update(ideas)
        .set({
          vote: Number(ideaDetails.vote) - subs,
        })
        .where(eq(ideaDetails.id, ideas.id));
      if (result) {
        refreshData();
      }
    }
  };

  return (
    <div className="pb-3">
      {allIdeas.map((ideaDetails, idx) => {
        return (
          <div
            className="w-full md:w-[50%] p-5 m-auto  border border-slate-500 shadow-md rounded-lg mb-5"
            key={idx}
          >
            <div className="flex justify-between items-start gap-3">
              <p>{idx + 1}</p>
              <p>{ideaDetails.idea}</p>
              <div className="flex flex-col justify-start items-center gap-3">
                <button onClick={() => handleUpVote(ideaDetails)}>🔥</button>
                <button className="font-bold text-lg">
                  {ideaDetails.vote}
                </button>
                <button onClick={() => handleDownVote(ideaDetails)}>👎</button>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              By {ideaDetails.createdBy} On {ideaDetails.postedOn}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default IdeasGrid;
