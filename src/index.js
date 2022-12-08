import './js/firebase';
// import '@splidejs/splide/css';
import './sass/main.scss'; // draft file
import { init } from './js/controller'; // movies

document.addEventListener('DOMContentLoaded', init);

//================================= test field =======================================

import { DataStorage } from './js/data';
const data = new DataStorage();

// const temporaryWatchedList = [
//   299536, 383498, 500664, 466282, 455980, 62286, 631843, 294793, 22949, 547016,
//   11635, 785663, 22660, 9547, 6977, 14912, 6957, 11520, 752505, 498743, 9627,
//   26518, 212, 156981, 13280, 15602, 282296, 498301, 72640, 69778, 488818, 11331,
//   43345, 543580, 429203, 31592, 40719, 83989, 297462, 74654, 59973, 44919,
//   28124, 915659, 78734, 9629, 913867, 40685, 79775, 44675, 40369, 351281, 25796,
//   55086, 248688, 967540, 121163, 620897, 67149, 85706, 59906, 88769, 983101,
//   309049, 75864, 29400, 299536, 383498, 500664, 466282, 455980, 62286, 631843,
//   507086, 299536,
// ];
// const temporaryQueueList = [
//   489931, 454283, 421792, 429300, 857, 470918, 379686, 340102, 529203, 11688,
//   755812, 18239, 11596, 62838, 597316, 820446, 13417, 11699, 10985, 975278,
//   13931, 3131, 772, 11025, 1103, 12637, 14011, 4960, 3681, 214597, 10952, 13761,
//   928, 15363, 277432, 9686, 14536, 9262, 10641, 11400, 553903, 37534, 183443,
//   567220, 79723, 382272, 9731, 95608, 10473, 497864, 5227, 21430, 30874, 9558,
//   46523, 496274, 10281, 299513, 18222, 197696, 19616, 4728, 12572, 396398,
//   11308, 36850, 648579,
// ];

// for (let i = 0; i < temporaryWatchedList.length; i += 1) {
//   data.addToWatched(temporaryWatchedList[i]);
// }
// for (let i = 0; i < temporaryQueueList.length; i += 1) {
//   data.addToQueue(temporaryQueueList[i]);
// }

// console.log(data.getWatched());
// console.log(data.getQueue());

//=====================================================================================