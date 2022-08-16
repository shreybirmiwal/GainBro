import pics from "./mock/pictures.mock.json"

export const picTransform = () => {
  const mappedResults = pics.results.map(function(item){
    return {
      username: item.username,
      start: item.start,
      day: item.day,
      image: item.image,
      comments: item.comments,
      likes: item.likes,
      friends: item.friends,
      buddies: item.buddies
    };
  });

  return mappedResults;

};