let passwordInput;
let submitButton;
let correctPassword = "733951137CM99"; // 원하는 비밀번호로 설정하세요(일련번호: 733951137CM99)
let accessGranted = false;
let stage = 1;
let showError = false;
let errorTimer;

let video;
let replayButton;
let backButton;
let videoPlaying = false;
let canvasWidth = 1080;
let canvasHeight = 720;
let buttonRadius = 6; // 0.3cm in pixels
let enlargedRadius = 15; // 마우스오버 시 원의 반지름 (0.6cm in pixels)
let replayButtonSize = 21.6; // 0.6cm in pixels
let videos = ['videos/1.mp4', 'videos/2.mp4', 'videos/3.mp4', 'videos/4.mp4', 'videos/5.mp4', 'videos/6.mp4', 'videos/7.mp4', 'videos/8.mp4', 'videos/9.mp4', 'videos/10.mp4', 'videos/11.mp4', 'videos/12.mp4', 'videos/13.mp4', 'videos.14.mp4', 'videos/15.mp4', 'videos/16.mp4', 'videos/17.mp4', 'videos/18.mp4', 'videos/19.mp4', 'videos/20.mp4', 'videos2/22.mp4', 'videos/23.mp4', 'videos/24.mp4', 'videos/25.mp4', 'videos/27.mp4', 'videos/29.mp4', 'videos/30.mp4', 'videos/31.mp4', 'videos/32.mp4', 'videos/33.mp4', 'videos/34.mp4', 'videos/35.mp4', 'videos/36.mp4', 'videos/37.mp4', 'videos/38.mp4', 'videos/39.mp4']; // 비디오 파일 배열
let currentVideoIndex = 0;
let num = 20;
let mx = [];
let my = [];
let clickableNodes = [
  { x: 500, y: 430, videoIndex: 0, color: 'yellow' },
  { x: 270, y: 300, videoIndex: 1, color: 'yellow' },
  { x: 230, y: 300, videoIndex: 2, color: 'yellow' },
  { x: 230, y: 170, color: 'white' },
  { x: 140, y: 170, color: 'white' },
  { x: 140, y: 200, color: 'white' },
  { x: 180, y: 250, color: 'white' },
  { x: 80, y: 310, color: 'white' },
  { x: 170, y: 310, videoIndex: 3, color: 'yellow' },
  { x: 110, y: 200, videoIndex: 4, color: 'yellow' },
  { x: 330, y: 60, color: 'white' },
  { x: 220, y: 500, color: 'white' },
  { x: 270, y: 500, videoIndex: 5, color: 'yellow' },
  { x: 400, y: 420, videoIndex: 6, color: 'yellow' },
  { x: 450, y: 500, color: 'white' },
  { x: 220, y: 590, color: 'white' },
  { x: 340, y: 300, color: 'white' },
  { x: 400, y: 200, videoIndex: 7, color: 'yellow' },
  { x: 360, y: 200, color: 'white' },
  { x: 480, y: 200, color: 'white' },
  { x: 400, y: 120, color: 'white' },
  { x: 380, y: 150, videoIndex: 8, color: 'yellow' },
  { x: 440, y: 160, videoIndex: 9, color: 'yellow' },
  { x: 530, y: 160, videoIndex: 10, color: 'yellow' },
  { x: 530, y: 130, color: 'white' },
  { x: 500, y: 560, videoIndex: 11, color: 'yellow' },
  { x: 540, y: 350, color: 'white' },
  { x: 650, y: 300, videoIndex: 12, color: 'yellow' },
  { x: 630, y: 550, color: 'white' },
  { x: 800, y: 300, color: 'white' },
  { x: 900, y: 300, videoIndex: 13, color: 'white' },
  { x: 970, y: 230, color: 'white' },
  { x: 880, y: 280, color: 'white' },
  { x: 900, y: 260, videoIndex: 14, color: 'yellow' },
  { x: 950, y: 300, color: 'white' },
  { x: 730, y: 550, videoIndex: 15, color: 'yellow' },
  { x: 760, y: 520, color: 'white' },
  { x: 780, y: 570, videoIndex: 16, color: 'yellow' },
  { x: 730, y: 610, color: 'white' },
  { x: 647, y: 330, color: 'white' },
  { x: 680, y: 320, videoIndex: 17, color: 'yellow' },
  { x: 740, y: 240, color: 'white' },
  { x: 750, y: 170, color: 'white' },
  { x: 780, y: 240, videoIndex: 18, color: 'yellow' },
  { x: 540, y: 430, color: 'white' },
  { x: 247, y: 446, videoIndex: 19, color: 'yellow' },
  { x: 230, y: 170, color: 'white' },
  { x: 540, y: 604, color: 'white' },
  { x: 323, y: 553, videoIndex: 20, color: 'yellow' },
  { x: 151, y: 541, videoIndex: 21, color: 'yellow' },
  { x: 948, y: 411, videoIndex: 22, color: 'yellow' },
  { x: 887, y: 411, videoIndex: 23, color: 'yellow' },
  { x: 980, y: 411, color: 'white' },
  { x: 990, y: 557, color: 'white' },
  { x: 980, y: 378, color: 'white' },
  { x: 458, y: 604, color: 'white' },
  { x: 109, y: 475, videoIndex: 24, color: 'yellow' },
  { x: 165, y: 429, color: 'white' },
  { x: 639, y: 123, videoIndex: 25, color: 'yellow' },
  { x: 505, y: 292, color: 'white' },
  { x: 623, y: 241, videoIndex: 26, color: 'yellow' },
  { x: 854, y: 543, videoIndex: 27, color: 'yellow' },
  { x: 813, y: 607, color: 'white' },
  { x: 838, y: 450, videoIndex: 28, color: 'yellow' },
  { x: 940, y: 163, color: 'white' },
  { x: 962, y: 117, videoIndex: 29, color: 'yellow' },
  { x: 885, y: 92, videoIndex: 30, color: 'yellow' },
  { x: 819, y: 116, color: 'white' },
  { x: 792, y: 202, videoIndex: 31, color: 'yellow' },
  { x: 177, y: 89, videoIndex: 32, color: 'yellow' },
  { x: 688, y: 69, videoIndex: 33, color: 'yellow' },
  { x: 640, y: 86, videoIndex: 34, color: 'yellow' },
  { x: 623, y: 179, vieodIndex: 35, color: 'white' },
  { x: 135, y: 625, videoIndex: 36, color: 'yellow' },
  { x: 135, y: 626, videoIndex: 37, color: 'white' },
  { x: 177, y: 603, videoIndex: 38, color: 'white' }
];

class Particle {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(1, 8);
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-0.75, 0.75);
  }

  createParticle() {
    noStroke();
    fill('rgba(255,255,255,0.51)');
    circle(this.x, this.y, this.r);
  }

  moveParticle() {
    if (this.x < 0 || this.x > width)
      this.xSpeed *= -1;
    if (this.y < 0 || this.y > height)
      this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  joinParticles(particles) {
    particles.forEach(element => {
      let dis = dist(this.x, this.y, element.x, element.y);
      if (dis < 85) {
        stroke('rgba(255,255,255,0.16)');
        line(this.x, this.y, element.x, element.y);
      }
    });
  }
}

let particles = [];

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  for (let i = 0; i < width / 10; i++) {
    particles.push(new Particle());
  }

  for (let i = 0; i < num; i++) {
    mx.push(i);
    my.push(i);
  }

  video = createVideo('');
  video.size(960, 540);
  video.position((width - 960) / 2, (height - 540) / 2);
  video.hide();

  replayButton = createButton('');
  replayButton.style('background-color', 'white');
  replayButton.style('width', `${replayButtonSize}px`);
  replayButton.style('height', `${replayButtonSize}px`);
  replayButton.mousePressed(replayVideo);
  replayButton.hide();

  backButton = createButton('');
  backButton.style('background-color', 'gray');
  backButton.style('width', `${replayButtonSize}px`);
  backButton.style('height', `${replayButtonSize}px`);
  backButton.mousePressed(backToFirstCanvas);
  backButton.hide();

  passwordInput = createInput();
  passwordInput.position(width / 2 - 100, height / 2 - 20);
  passwordInput.size(200);

  submitButton = createButton('Submit');
  submitButton.position(width / 2 - 30, height / 2 + 20);
  submitButton.mousePressed(checkPassword);
}

function draw() {
  if (stage === 1) {
    background(0);
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text('Enter The Serial Number:', width / 2, height / 2 - 60);

    if (showError) {
      fill(255, 0, 0);
      textSize(16);
      textAlign(CENTER, CENTER);
      text('Incorrect password, try again.', width / 2, height / 2 + 60);
      if (millis() - errorTimer > 3000) {
        showError = false;
      }
    }
  } else if (stage === 2) {
    background(15);

    for (let i = 0; i < particles.length; i++) {
      particles[i].createParticle();
      particles[i].moveParticle();
      particles[i].joinParticles(particles.slice(i));
    }

    let which = frameCount % num;
    mx[which] = mouseX;
    my[which] = mouseY;

    for (let i = 0; i < num; i++) {
      let index = (which + 1 + i) % num;
      ellipse(mx[index], my[index], i, i);
    }

    fill(255);
    textAlign(CENTER);
    textSize(16);
    text(`x: ${mouseX} y: ${mouseY}`, width / 2, height - 20);

    if (videoPlaying) {
      drawSecondCanvas();
    } else {
      drawFirstCanvas();
      drawReturnButton();
    }
  }
}

function checkPassword() {
  if (passwordInput.value() === correctPassword) {
    stage = 2;
    passwordInput.hide();
    submitButton.hide();
  } else {
    showError = true;
    errorTimer = millis();
  }
}

function mousePressed() {
  if (stage === 2 && !videoPlaying) {
    for (let i = 0; i < clickableNodes.length; i++) {
      let d = dist(mouseX, mouseY, clickableNodes[i].x, clickableNodes[i].y);
      if (d < buttonRadius && clickableNodes[i].color === 'yellow') {
        currentVideoIndex = clickableNodes[i].videoIndex;
        setTimeout(() => {
          console.log(`Loading video: ${videos[currentVideoIndex]}`);
          video.src = videos[currentVideoIndex];
          showSecondCanvas();
        }, 1000);
        return;
      }
    }
    if (mouseX >= 985 && mouseX <= 1065 && mouseY >= 660 && mouseY <= 690) {
      returnToStageOne();
    }
  }
}

function showSecondCanvas() {
  background(0);
  videoPlaying = true;
  video.show();
  video.play();
  replayButton.show();
  backButton.show();
}

function replayVideo() {
  video.time(0);
  video.play();
}

function backToFirstCanvas() {
  videoPlaying = false;
  video.hide();
  replayButton.hide();
  backButton.hide();
  video.stop();
}

function drawFirstCanvas() {
  stroke(255);
  strokeWeight(1);

  let lines = [
    { x1: 540, y1: 430, x2: 500, y2: 430 },
    { x1: 500, y1: 430, x2: 270, y2: 300 },
    { x1: 270, y1: 300, x2: 230, y2: 300 },
    { x1: 230, y1: 300, x2: 230, y2: 170 },
    { x1: 230, y1: 170, x2: 140, y2: 170 },
    { x1: 140, y1: 170, x2: 140, y2: 200 },
    { x1: 140, y1: 200, x2: 180, y2: 250 },
    { x1: 180, y1: 250, x2: 80, y2: 310 },
    { x1: 80, y1: 310, x2: 170, y2: 310 },
    { x1: 140, y1: 170, x2: 110, y2: 200 },
    { x1: 230, y1: 170, x2: 330, y2: 60 },
    { x1: 230, y1: 300, x2: 220, y2: 500 },
    { x1: 220, y1: 500, x2: 270, y2: 500 },
    { x1: 270, y1: 500, x2: 400, y2: 420 },
    { x1: 270, y1: 500, x2: 450, y2: 500 },
    { x1: 220, y1: 500, x2: 220, y2: 590 },
    { x1: 270, y1: 300, x2: 340, y2: 300 },
    { x1: 340, y1: 300, x2: 400, y2: 200 },
    { x1: 400, y1: 200, x2: 360, y2: 200 },
    { x1: 400, y1: 200, x2: 480, y2: 200 },
    { x1: 400, y1: 200, x2: 400, y2: 120 },
    { x1: 400, y1: 200, x2: 380, y2: 150 },
    { x1: 400, y1: 200, x2: 440, y2: 160 },
    { x1: 440, y1: 160, x2: 530, y2: 160 },
    { x1: 530, y1: 160, x2: 530, y2: 130 },
    { x1: 500, y1: 430, x2: 500, y2: 560 },
    { x1: 540, y1: 430, x2: 540, y2: 350 },
    { x1: 540, y1: 350, x2: 650, y2: 300 },
    { x1: 540, y1: 350, x2: 630, y2: 550 },
    { x1: 630, y1: 550, x2: 800, y2: 300 },
    { x1: 800, y1: 300, x2: 900, y2: 300 },
    { x1: 900, y1: 300, x2: 970, y2: 230 },
    { x1: 900, y1: 300, x2: 880, y2: 280 },
    { x1: 900, y1: 300, x2: 900, y2: 260 },
    { x1: 900, y1: 300, x2: 950, y2: 300 },
    { x1: 630, y1: 550, x2: 730, y2: 550 },
    { x1: 730, y1: 550, x2: 760, y2: 520 },
    { x1: 730, y1: 550, x2: 780, y2: 570 },
    { x1: 730, y1: 550, x2: 730, y2: 610 },
    { x1: 650, y1: 300, x2: 647, y2: 330 },
    { x1: 650, y1: 300, x2: 680, y2: 320 },
    { x1: 650, y1: 300, x2: 740, y2: 240 },
    { x1: 740, y1: 240, x2: 750, y2: 170 },
    { x1: 740, y1: 240, x2: 780, y2: 240 },
    { x1: 270, y1: 500, x2: 323, y2: 553 },
    { x1: 220, y1: 500, x2: 151, y2: 541 },
    { x1: 900, y1: 300, x2: 948, y2: 411 },
    { x1: 948, y1: 411, x2: 887, y2: 411 },
    { x1: 887, y1: 411, x2: 980, y2: 411 },
    { x1: 887, y1: 411, x2: 990, y2: 557 },
    { x1: 980, y1: 411, x2: 980, y2: 378 },
    { x1: 500, y1: 560, x2: 458, y2: 604 },
    { x1: 458, y1: 604, x2: 540, y2: 604 },
    { x1: 151, y1: 541, x2: 109, y2: 475 },
    { x1: 109, y1: 475, x2: 165, y2: 429 },
    { x1: 750, y1: 170, x2: 639, y2: 123 },
    { x1: 650, y1: 300, x2: 505, y2: 292 },
    { x1: 650, y1: 300, x2: 623, y2: 241 },
    { x1: 780, y1: 570, x2: 854, y2: 543 },
    { x1: 780, y1: 570, x2: 813, y2: 607 },
    { x1: 780, y1: 570, x2: 838, y2: 450 },
    { x1: 970, y1: 230, x2: 940, y2: 163 },
    { x1: 940, y1: 163, x2: 962, y2: 117 },
    { x1: 940, y1: 163, x2: 885, y2: 92 },
    { x1: 940, y1: 163, x2: 819, y2: 116 },
    { x1: 940, y1: 163, x2: 792, y2: 202 },
    { x1: 270, y1: 300, x2: 247, y2: 446 },
    { x1: 230, y1: 170, x2: 177, y2: 89 },
    { x1: 639, y1: 123, x2: 688, y2: 69 },
    { x1: 639, y1: 123, x2: 640, y2: 86 },
    { x1: 639, y1: 123, x2: 623, y2: 179 },
    { x1: 151, y1: 541, x2: 135, y2: 625 },
    { x1: 151, y1: 541, x2: 135, y2: 625 },
    { x1: 151, y1: 541, x2: 177, y2: 603 },
    { x1: 1054, y1: 26, x2: 26, y2: 26 }, // 추가된 선
    { x1: 26, y1: 698, x2: 26, y2: 26 }, // 추가된 선
    { x1: 26, y1: 698, x2: 479, y2: 698 }, // 추가된 선
    { x1: 600, y1: 698, x2: 1054, y2: 698 }, // 추가된 선
    { x1: 1054, y1: 698, x2: 1054, y2: 26 }, // 추가된 선
    { x1: 58, y1: 685, x2: 58, y2: 710, transparent: true },
    { x1: 88, y1: 685, x2: 88, y2: 710, transparent: true },
    { x1: 118, y1: 685, x2: 118, y2: 710, transparent: true },
    { x1: 148, y1: 685, x2: 148, y2: 710, transparent: true },
    { x1: 178, y1: 685, x2: 178, y2: 710, transparent: true },
    { x1: 208, y1: 685, x2: 208, y2: 710, transparent: true },
    { x1: 238, y1: 685, x2: 238, y2: 710, transparent: true },
    { x1: 268, y1: 685, x2: 268, y2: 710, transparent: true },
    { x1: 298, y1: 685, x2: 298, y2: 710, transparent: true },
    { x1: 328, y1: 685, x2: 328, y2: 710, transparent: true },
    { x1: 358, y1: 685, x2: 358, y2: 710, transparent: true },
    { x1: 388, y1: 685, x2: 388, y2: 710, transparent: true },
    { x1: 418, y1: 685, x2: 418, y2: 710, transparent: true },
    { x1: 448, y1: 685, x2: 448, y2: 710, transparent: true },
    { x1: 479, y1: 685, x2: 479, y2: 710, transparent: true },
    { x1: 599, y1: 685, x2: 599, y2: 710, transparent: true },
    { x1: 628, y1: 685, x2: 628, y2: 710, transparent: true },
    { x1: 658, y1: 685, x2: 658, y2: 710, transparent: true },
    { x1: 688, y1: 685, x2: 688, y2: 710, transparent: true },
    { x1: 718, y1: 685, x2: 718, y2: 710, transparent: true },
    { x1: 748, y1: 685, x2: 748, y2: 710, transparent: true },
    { x1: 778, y1: 685, x2: 778, y2: 710, transparent: true },
    { x1: 808, y1: 685, x2: 808, y2: 710, transparent: true },
    { x1: 838, y1: 685, x2: 838, y2: 710, transparent: true },
    { x1: 868, y1: 685, x2: 868, y2: 710, transparent: true },
    { x1: 898, y1: 685, x2: 898, y2: 710, transparent: true },
    { x1: 928, y1: 685, x2: 928, y2: 710, transparent: true },
    { x1: 958, y1: 685, x2: 958, y2: 710, transparent: true },
    { x1: 988, y1: 685, x2: 988, y2: 710, transparent: true },
    { x1: 1018, y1: 685, x2: 1018, y2: 710, transparent: true },
    { x1: 58, y1: 14, x2: 58, y2: 39, transparent: true },
    { x1: 88, y1: 14, x2: 88, y2: 39, transparent: true },
    { x1: 118, y1: 14, x2: 118, y2: 39, transparent: true },
    { x1: 148, y1: 14, x2: 148, y2: 39, transparent: true },
    { x1: 178, y1: 14, x2: 178, y2: 39, transparent: true },
    { x1: 208, y1: 14, x2: 208, y2: 39, transparent: true },
    { x1: 238, y1: 14, x2: 238, y2: 39, transparent: true },
    { x1: 268, y1: 14, x2: 268, y2: 39, transparent: true },
    { x1: 298, y1: 14, x2: 298, y2: 39, transparent: true },
    { x1: 328, y1: 14, x2: 328, y2: 39, transparent: true },
    { x1: 358, y1: 14, x2: 358, y2: 39, transparent: true },
    { x1: 388, y1: 14, x2: 388, y2: 39, transparent: true },
    { x1: 418, y1: 14, x2: 418, y2: 39, transparent: true },
    { x1: 448, y1: 14, x2: 448, y2: 39, transparent: true },
    { x1: 479, y1: 14, x2: 479, y2: 39, transparent: true },
    { x1: 508, y1: 14, x2: 508, y2: 39, transparent: true },
    { x1: 538, y1: 14, x2: 538, y2: 39, transparent: true },
    { x1: 568, y1: 14, x2: 568, y2: 39, transparent: true },
    { x1: 599, y1: 14, x2: 599, y2: 39, transparent: true },
    { x1: 628, y1: 14, x2: 628, y2: 39, transparent: true },
    { x1: 658, y1: 14, x2: 658, y2: 39, transparent: true },
    { x1: 688, y1: 14, x2: 688, y2: 39, transparent: true },
    { x1: 718, y1: 14, x2: 718, y2: 39, transparent: true },
    { x1: 748, y1: 14, x2: 748, y2: 39, transparent: true },
    { x1: 778, y1: 14, x2: 778, y2: 39, transparent: true },
    { x1: 808, y1: 14, x2: 808, y2: 39, transparent: true },
    { x1: 838, y1: 14, x2: 838, y2: 39, transparent: true },
    { x1: 868, y1: 14, x2: 868, y2: 39, transparent: true },
    { x1: 898, y1: 14, x2: 898, y2: 39, transparent: true },
    { x1: 928, y1: 14, x2: 928, y2: 39, transparent: true },
    { x1: 958, y1: 14, x2: 958, y2: 39, transparent: true },
    { x1: 988, y1: 14, x2: 988, y2: 39, transparent: true },
    { x1: 1018, y1: 14, x2: 1018, y2: 39, transparent: true },
    { x1: 39, y1: 660, x2: 14, y2: 660, transparent: true },
    { x1: 39, y1: 625, x2: 14, y2: 625, transparent: true },
    { x1: 39, y1: 590, x2: 14, y2: 590, transparent: true },
    { x1: 39, y1: 555, x2: 14, y2: 555, transparent: true },
    { x1: 39, y1: 520, x2: 14, y2: 520, transparent: true },
    { x1: 39, y1: 485, x2: 14, y2: 485, transparent: true },
    { x1: 39, y1: 450, x2: 14, y2: 450, transparent: true },
    { x1: 39, y1: 415, x2: 14, y2: 415, transparent: true },
    { x1: 39, y1: 380, x2: 14, y2: 380, transparent: true },
    { x1: 39, y1: 345, x2: 14, y2: 345, transparent: true },
    { x1: 39, y1: 310, x2: 14, y2: 310, transparent: true },
    { x1: 39, y1: 275, x2: 14, y2: 275, transparent: true },
    { x1: 39, y1: 240, x2: 14, y2: 240, transparent: true },
    { x1: 39, y1: 205, x2: 14, y2: 205, transparent: true },
    { x1: 39, y1: 170, x2: 14, y2: 170, transparent: true },
    { x1: 39, y1: 135, x2: 14, y2: 135, transparent: true },
    { x1: 39, y1: 100, x2: 14, y2: 100, transparent: true },
    { x1: 39, y1: 65, x2: 14, y2: 65, transparent: true },
    { x1: 1066, y1: 65, x2: 1041, y2: 65, transparent: true },
    { x1: 1066, y1: 100, x2: 1041, y2: 100, transparent: true },
    { x1: 1066, y1: 135, x2: 1041, y2: 135, transparent: true },
    { x1: 1066, y1: 170, x2: 1041, y2: 170, transparent: true },
    { x1: 1066, y1: 205, x2: 1041, y2: 205, transparent: true },
    { x1: 1066, y1: 240, x2: 1041, y2: 240, transparent: true },
    { x1: 1066, y1: 275, x2: 1041, y2: 275, transparent: true },
    { x1: 1066, y1: 310, x2: 1041, y2: 310, transparent: true },
    { x1: 1066, y1: 345, x2: 1041, y2: 345, transparent: true },
    { x1: 1066, y1: 380, x2: 1041, y2: 380, transparent: true },
    { x1: 1066, y1: 415, x2: 1041, y2: 415, transparent: true },
    { x1: 1066, y1: 450, x2: 1041, y2: 450, transparent: true },
    { x1: 1066, y1: 485, x2: 1041, y2: 485, transparent: true },
    { x1: 1066, y1: 520, x2: 1041, y2: 520, transparent: true },
    { x1: 1066, y1: 555, x2: 1041, y2: 555, transparent: true },
    { x1: 1066, y1: 590, x2: 1041, y2: 590, transparent: true },
    { x1: 1066, y1: 625, x2: 1041, y2: 625, transparent: true },
    { x1: 1066, y1: 660, x2: 1041, y2: 660, transparent: true }
  ];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].transparent) {
      stroke('rgba(255, 255, 255, 0.5)');
    } else {
      stroke(255);
    }
    line(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2);
  }

  for (let i = 0; i < clickableNodes.length; i++) {
    let node = clickableNodes[i];
    let d = dist(mouseX, mouseY, node.x, node.y);
    let radius = buttonRadius;
    if (d < buttonRadius) {
      radius = enlargedRadius;
    }
    fill(node.color === 'yellow' ? 'rgba(255, 255, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)');
    noStroke();
    ellipse(node.x, node.y, radius * 2, radius * 2);
  }
}

function drawSecondCanvas() {
  background(15);

  for (let i = 0; i < particles.length; i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }

  let buttonY = (height + 540) / 2 + 20;
  replayButton.position(width / 2 - 30, buttonY);
  backButton.position(width / 2 + 30, buttonY);
}

function drawReturnButton() {
  fill(200);
  rect(945, 640, 80, 30);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text('Back', 985, 656);
}

function returnToStageOne() {
  stage = 1;
  passwordInput.show();
  submitButton.show();
}
