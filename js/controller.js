"use strict";

const state = {
  pages: {
    prevPage: 2,
    curPage: 1,
    nextPage: null,
  },
};

const API__URL = "https://rickandmortyapi.com/api/character/";

const getData = async (curPage) => {
  try {
    const res = await fetch(`${API__URL}?page=${curPage}`);
    const data = await res.json();

    if (!res.ok) throw new Error();

    console.log(data);
  } catch (err) {}
};

getData();

const pagination = (obj) => {
  console.log(obj.curPage - 1 === 0);
  return {
    prevPage: obj.curPage - 1 === 0 ? null : obj.curPage - 1,
    curPage: obj.curPage,
    nextPage: obj.curPage + 1,
  };
};
