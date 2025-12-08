(function () {
  const canvas = document.getElementById("logoCanvas");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");

  const w = canvas.width;
  const h = canvas.height;

  let angle = 0;
  const orbitRadius = 30;
  const orbitRadius2 = 42;

  // โหลดรูปโลโก้ มข.
  const logoImg = new Image();
  logoImg.src = "img/LogoKKUthai_150px.png"; // เปลี่ยน path ได้ถ้าใช้ชื่อไฟล์อื่น

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // พื้นหลังแบบ glass / gradient
    const bgGrad = ctx.createLinearGradient(0, 0, w, h);
    bgGrad.addColorStop(0, "rgba(18,6,48,0.95)");
    bgGrad.addColorStop(1, "rgba(49,18,90,0.95)");
    ctx.fillStyle = bgGrad;
    roundRect(ctx, 4, 4, w - 8, h - 8, 18, true, false);

    // วงแหวนรอบโลโก้
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.strokeStyle = "rgba(255,214,160,0.7)";
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(0, 0, orbitRadius2, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // วาดรูปโลโก้ มข. ตรงกลาง canvas
    if (logoImg.complete) {
      // คำนวณ scale ให้รูปพอดีกับกรอบ
      const padding = 12; // เว้นขอบนิดหน่อย
      const maxW = w - padding * 2;
      const maxH = h - padding * 2;

      const scale = Math.min(maxW / logoImg.width, maxH / logoImg.height);
      const imgW = logoImg.width * scale;
      const imgH = logoImg.height * scale;

      const x = (w - imgW) / 2;
      const y = (h - imgH) / 2;

      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(logoImg, x, y, imgW, imgH);
    }

    // ดวงไฟหมุนรอบโลโก้
    const x1 = w / 2 + Math.cos(angle) * orbitRadius;
    const y1 = h / 2 + Math.sin(angle) * orbitRadius;

    const x2 = w / 2 + Math.cos(-angle * 1.3) * orbitRadius2;
    const y2 = h / 2 + Math.sin(-angle * 1.3) * orbitRadius2;

    ctx.beginPath();
    ctx.arc(x1, y1, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = "#ffe29f";
    ctx.shadowColor = "#ffe29f";
    ctx.shadowBlur = 12;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x2, y2, 3.2, 0, Math.PI * 2);
    ctx.fillStyle = "#ff6a00";
    ctx.shadowColor = "#ff6a00";
    ctx.shadowBlur = 10;
    ctx.fill();

    angle += 0.06;
    requestAnimationFrame(draw);
  }

  function roundRect(ctx, x, y, w, h, r, fill, stroke) {
    if (typeof r === "number") {
      r = { tl: r, tr: r, br: r, bl: r };
    }
    ctx.beginPath();
    ctx.moveTo(x + r.tl, y);
    ctx.lineTo(x + w - r.tr, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r.tr);
    ctx.lineTo(x + w, y + h - r.br);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r.br, y + h);
    ctx.lineTo(x + r.bl, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r.bl);
    ctx.lineTo(x, y + r.tl);
    ctx.quadraticCurveTo(x, y, x + r.tl, y);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
  }

  draw();
})();
