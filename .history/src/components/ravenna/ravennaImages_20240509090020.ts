const images: Promise<string>[] = [];

for (let i = 14; i <= 29; i++) {
  const imageName = `ravenna${i}`;
  const imagePromise = import(`../../media/ravenna/${imageName}.png`)
    .then(module => module.default); // Extract the default export from the module
  images.push(imagePromise);
}

export default images;
