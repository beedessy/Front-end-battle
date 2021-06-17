const cars = [], leaderboard = []

for (let i = 1; i <= 10; i++) {

  cars.push({

    car: document.getElementById(`racecar-${i}`),
    speed: Math.floor((Math.random() * 10) + 5),
    currentPos: 0

  });

}

function startGame() {

  document.getElementById('start-button').style.display = 'none';

  setInterval(() => {

    for (let i = 0; i < cars.length; i++) {
  
      const { car, speed } = cars[i];
  
      if (car.getBoundingClientRect().left + speed < 960) {
  
        cars[i].currentPos += speed;
        car.style.marginLeft = `${cars[i].currentPos}px`;
  
      } else {

        car.style.marginLeft = '900px';

        const removedCar = cars.splice(i, 1);
        leaderboard.push(removedCar[0].car.dataset.carid);
  
      }
  
    }

    if (leaderboard.length == 10) {

      document.getElementById('leaderboard').style.opacity = 1;

      document.getElementById('firstCar').innerHTML = leaderboard[0];
      document.getElementById('secondCar').innerHTML = leaderboard[1];
      document.getElementById('thirdCar').innerHTML = leaderboard[2];

      clearInterval();

    }
    
  }, 50);

}

