// Generate Random String in Javasctipt

function RandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result = result + characters[randomIndex];
    }
    return result;
  }
  
  console.log(RandomString(25));

