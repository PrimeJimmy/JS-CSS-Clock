    const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    const allHands = document.querySelectorAll('.hand');

    function setDate() {
      const now = new Date();
      //seconds
      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds/60)*360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      //minutes
      const mins = now.getMinutes();
      const minsDegrees = ((mins/60)*360) + 90;
      minsHand.style.transform = `rotate(${minsDegrees}deg)`;
      //Hours
      const hours = now.getHours();
      const hoursDegrees = ((hours/12)*360) + 90;
      hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    if(secondsDegrees === 90) {
      allHands.forEach(hand => hand.style.transition = 'none')
      } else {
      allHands.forEach(hand => hand.style.transition = '')
      }
    }

    setInterval(setDate, 1000);