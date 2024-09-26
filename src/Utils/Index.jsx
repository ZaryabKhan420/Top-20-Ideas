export const upVote = (id) => {
  const votes = JSON.parse(localStorage.getItem("votes"))
    ? JSON.parse(localStorage.getItem("votes"))
    : {
        upVotes: [],
        downVotes: [],
      };
  if (votes.upVotes.indexOf(id) !== -1) {
    return false;
  }

  votes.upVotes.push(id);
  const updateDownVotes = votes.downVotes.filter((newId) => newId != id);
  votes.downVotes = updateDownVotes;

  localStorage.setItem("votes", JSON.stringify(votes));
  return true;
};

export const downVote = (id) => {
  const votes = JSON.parse(localStorage.getItem("votes"))
    ? JSON.parse(localStorage.getItem("votes"))
    : {
        upVotes: [],
        downVotes: [],
      };
  if (votes.downVotes.indexOf(id) !== -1) {
    return false;
  }

  votes.downVotes.push(id);
  const updateUpVotes = votes.upVotes.filter((newId) => newId != id);
  votes.upVotes = updateUpVotes;

  localStorage.setItem("votes", JSON.stringify(votes));
  return true;
};
