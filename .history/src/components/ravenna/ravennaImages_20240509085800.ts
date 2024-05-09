const images = [];

for (let i = 14; i <= 29; i++) {
  const imageName = `ravenna${i}`;
  const image = import(`../../media/ravenna/${imageName}.png`);
  images.push(image);
}

export default images;
