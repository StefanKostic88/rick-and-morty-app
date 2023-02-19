const API__URL = "https://rickandmortyapi.com/api/character/";
export const state = {
  pages: {
    prevPage: 2,
    curPage: 1,
    nextPage: null,
  },
  currentCharPage: [],
  likedCards: [],
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

// {name: 'Rick Sanchez', id: 1, img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', isLiked: true}
initLikes();
console.log(state.likedCards);

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
    return data.results.map((obj) => getCardData(obj));
  } catch (err) {
    console.log(err);
  }
};

//helpers

const pagination = (obj) => {
  console.log(obj.curPage - 1 === 0);
  return {
    prevPage: obj.curPage - 1 === 0 ? null : obj.curPage - 1,
    curPage: obj.curPage,
    nextPage: obj.curPage + 1,
  };
};

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
