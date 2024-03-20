grape

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const deepClone = obj => JSON.parse(JSON.stringify(obj));
orange

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
