// Amit wanted to wish everyone a Happy Holidays!!!
(() => {
    let nArr = new Array(30);
    let oArr = ["🔴", "🔵", "🟠", "🟡", "🟢", "🟣"];
    nArr.fill("").forEach((v, idx) => {
      let tArr,
        spArr1,
        spArr2 = [];
      if (idx % 2) {
        spArr1 = Array(nArr.length - idx + 25).fill("*");
        spArr2 = Array(nArr.length - idx + 25).fill(".");
      } else {
        spArr1 = Array(nArr.length - idx + 25).fill(".");
        spArr2 = Array(nArr.length - idx + 25).fill("*");
      }
      if (idx === 1) tArr = new Array(idx).fill("⭐");
      else if (idx === nArr.length - 2) {
        tArr = Array(8).fill("🟫");
        spArr1 = Array(nArr.length + idx - 10).fill(".");
        spArr2 = Array(nArr.length + idx - 10).fill("*");
      } else if (idx === nArr.length - 1) {
        tArr = Array(8).fill("🟫");
        spArr1 = Array(nArr.length + idx - 12).fill("*");
        spArr2 = Array(nArr.length + idx - 12).fill(".");
        spArr1[(spArr1.length - 1) / 2] = "🎁";
        spArr2[(spArr2.length - 1) / 2] = "🎁";
      } else {
        tArr = Array(idx).fill("🌲");
        if (idx !== 0)
          tArr[Math.floor(Math.random() * tArr.length)] =
            oArr[Math.floor(Math.random() * oArr.length)];
      }
      console.log([...spArr2, ...tArr, ...spArr1].join(""));
    });
  })();