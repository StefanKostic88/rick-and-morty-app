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
  } catch (err) {
    console.log(err);
  }
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

export const xxx = async (curPage = 1) => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/1`);
    const data = await res.json();
    if (!res.ok) throw new Error();
    console.log(data);
    // return data.results.map((obj) => getCardData(obj));
  } catch (err) {
    console.log(err);
  }
};

xxx();
// ?page=${curPage}

const x = {
  created: "2017-11-04T18:48:46.250Z",
  episode: (51)[
    ("https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    "https://rickandmortyapi.com/api/episode/3",
    "https://rickandmortyapi.com/api/episode/4",
    "https://rickandmortyapi.com/api/episode/5",
    "https://rickandmortyapi.com/api/episode/6",
    "https://rickandmortyapi.com/api/episode/7",
    "https://rickandmortyapi.com/api/episode/8",
    "https://rickandmortyapi.com/api/episode/9",
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/11",
    "https://rickandmortyapi.com/api/episode/12",
    "https://rickandmortyapi.com/api/episode/13",
    "https://rickandmortyapi.com/api/episode/14",
    "https://rickandmortyapi.com/api/episode/15",
    "https://rickandmortyapi.com/api/episode/16",
    "https://rickandmortyapi.com/api/episode/17",
    "https://rickandmortyapi.com/api/episode/18",
    "https://rickandmortyapi.com/api/episode/19",
    "https://rickandmortyapi.com/api/episode/20",
    "https://rickandmortyapi.com/api/episode/21",
    "https://rickandmortyapi.com/api/episode/22",
    "https://rickandmortyapi.com/api/episode/23",
    "https://rickandmortyapi.com/api/episode/24",
    "https://rickandmortyapi.com/api/episode/25",
    "https://rickandmortyapi.com/api/episode/26",
    "https://rickandmortyapi.com/api/episode/27",
    "https://rickandmortyapi.com/api/episode/28",
    "https://rickandmortyapi.com/api/episode/29",
    "https://rickandmortyapi.com/api/episode/30",
    "https://rickandmortyapi.com/api/episode/31",
    "https://rickandmortyapi.com/api/episode/32",
    "https://rickandmortyapi.com/api/episode/33",
    "https://rickandmortyapi.com/api/episode/34",
    "https://rickandmortyapi.com/api/episode/35",
    "https://rickandmortyapi.com/api/episode/36",
    "https://rickandmortyapi.com/api/episode/37",
    "https://rickandmortyapi.com/api/episode/38",
    "https://rickandmortyapi.com/api/episode/39",
    "https://rickandmortyapi.com/api/episode/40",
    "https://rickandmortyapi.com/api/episode/41",
    "https://rickandmortyapi.com/api/episode/42",
    "https://rickandmortyapi.com/api/episode/43",
    "https://rickandmortyapi.com/api/episode/44",
    "https://rickandmortyapi.com/api/episode/45",
    "https://rickandmortyapi.com/api/episode/46",
    "https://rickandmortyapi.com/api/episode/47",
    "https://rickandmortyapi.com/api/episode/48",
    "https://rickandmortyapi.com/api/episode/49",
    "https://rickandmortyapi.com/api/episode/50",
    "https://rickandmortyapi.com/api/episode/51")
  ],
  gender: "Male",
  id: 1,
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3",
  },
  name: "Rick Sanchez",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  species: "Human",
  status: "Alive",
  type: "",
  url: "https://rickandmortyapi.com/api/character/1",
};
