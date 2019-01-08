import { getBeforeText, getMusicText } from './data/say';
import { getTextColor } from './data/color';

const beforeText = getBeforeText();
const musicText = getMusicText();

function createBeforeText(item) {
  return paintings => {
    const color = getTextColor();
    paintings.time.changeTextOption({
      color: color[0]
    });
    paintings.text.changeTextOption({
      array: item.text,
      color: color
    });
  };
}

function createMusicText(item) {
  return paintings => {
    const color = getTextColor();
    paintings.text.changeParticleInfo({ size: 4 });
    paintings.text.resetParticlePositon();
    paintings.text.changeTextOption({
      array: item.text,
      color,
      textSize: 70,
      gutter: 3
    });
  };
}

export default [
  paintings => {
    paintings.time.changeParticleInfo({ size: 6 });
    paintings.time.changeTextOption({
      textSize: 170,
      center: true
    });
    paintings.text.changeTextOption({
      array: [],
      color: [],
      textSize: 100
    });
  },
  paintings => {
    paintings.time.changeParticleInfo({ size: 4 });
    paintings.time.changeTextOption({
      textSize: 70,
      color: 'rgb(157,210,231)',
      center: false
    });
    let color = getTextColor();
    paintings.text.changeTextOption({
      array: ['想跟你说', '最甜的情话', '--by ACO'],
      color: color,
      textSize: 100
    });
  }
  // ...beforeText.map(item => createBeforeText(item)),
  // ...musicText.map(item => createMusicText(item))
];