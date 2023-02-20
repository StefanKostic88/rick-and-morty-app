const API__URL = "https://rickandmortyapi.com/api/character/";
export const state = {
  pages: {
    prevFourPages: -3,
    prevThreePages: -2,
    prevTwoPages: -1,
    prevPage: 0,
    curPage: 1,
    nextPage: 2,
    nextTwoPages: 3,
    nextThreePages: 4,
    nextFourPages: 5,
  },
  currentCharPage: [],
  likedCards: [],
  curId: 0,
};

const initLikes = function () {
  let storage = [];
  if (localStorage.getItem("liked") === null) {
    state.likedCards = [];
  } else {
    storage = [...JSON.parse(localStorage.getItem("liked"))];
    state.likedCards = [...storage];
  }
};

initLikes();

const getCardData = ({ name, id, image }) => {
  return {
    name,
    id,
    img: image,
    isLiked: false,
  };
};

export const getCharData = async (curPage = 1) => {
  try {
    const res = await fetch(`${API__URL}?page=${curPage}`);
    const data = await res.json();
    if (!res.ok) throw new Error();
    console.log(data);
    return data.results.map((obj) => getCardData(obj));
  } catch (err) {}
};

//helpers

////Adding, updating and removing liked status

export const checkAndUpdateBookmarkedStatus = (arr, bookArr) => {
  const data = [...arr];
  if (bookArr.length === 0) return data;
  data.forEach((el, index) => {
    bookArr.forEach((el1, index1) => {
      if (el1.id === el.id) {
        data[index] = bookArr[index1];
      }
    });
  });

  return data;
};

const updateBookmark = (arr, newCard, id) => {
  const data = [...arr];
  const findCard = data.find((el) => el.id === id);
  const findCardIndex = data.indexOf(findCard);
  if (newCard.isLiked) {
    //ADD TO BOOKMARK
    data.push(newCard);
  } else {
    //REMOVE FFROM BOOKMARK
    data.splice(findCardIndex, 1);
  }

  return data;
};

export const addAndRemoveBookMarkStatus = (arr, id) => {
  console.log(arr, id);
  const data = [...arr];
  const findCard = data.find((el) => el.id === id);
  const newCard = {
    ...findCard,
    isLiked: findCard.isLiked ? false : true,
  };

  const newCardIndex = data.indexOf(findCard);
  data[newCardIndex] = newCard;

  state.likedCards = updateBookmark(state.likedCards, newCard, id);

  // // //ADD TO LOCAL STORAGE
  localStorage.setItem("liked", JSON.stringify(state.likedCards));
  console.log(data);
  return data;
};

export const generateCurentPaginationState = (curentPage) => {
  return {
    prevFourPages: curentPage - 4,
    prevThreePages: curentPage - 3,
    prevTwoPages: curentPage - 2,
    prevPage: curentPage - 1,
    curPage: curentPage,
    nextPage: curentPage + 1,
    nextTwoPages: curentPage + 2,
    nextThreePages: curentPage + 3,
    nextFourPages: curentPage + 4,
  };
};

export const generatePaginationData = ({
  curPage,
  prevPage,
  prevTwoPages,
  prevThreePages,
  prevFourPages,
  nextPage,
  nextTwoPages,
  nextThreePages,
  nextFourPages,
}) => {
  return {
    prevFourPages: prevFourPages < 38 ? null : curPage - 4,
    prevThreePages: prevThreePages < 38 ? null : curPage - 3,
    prevTwoPages: prevTwoPages <= -1 ? null : curPage - 2,
    prevPage: prevPage <= 0 ? null : curPage - 1,
    curPage: curPage,
    nextPage: nextPage > 42 ? null : curPage + 1,
    nextTwoPages: nextTwoPages > 42 ? null : curPage + 2,
    nextThreePages: nextThreePages >= 6 ? null : curPage + 3,
    nextFourPages: nextFourPages >= 6 ? null : curPage + 4,
  };
};

const generateCharacterInfo = ({
  name,
  species,
  gender,
  status,
  image,
  location,
  origin,
}) => {
  const arr = [];
  arr.push(
    { name: name },
    { species: species },
    { gender: gender },
    { status: status },
    { location: location.name },
    { origin: origin.name }
  );
  return {
    img: image,
    charData: [...arr],
  };
};

export const getCharacterInfo = async (id) => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();
    if (!res.ok) throw new Error();
    return generateCharacterInfo(data);
  } catch (err) {
    console.log(err);
  }
};
