const form = document.querySelector('form.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldResolve
        ? resolve({ position, delay })
        : reject({ position, delay });
    }, delay);
  });
}

function logPromises({ delay, step, count }) {
  for (let i = 0; i < count; i++) {
    createPromise(i + 1, delay + step * i)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function onSubmit(e) {
  e.preventDefault();
  const data = {
    delay: Number(e.target.elements.delay.value),
    step: Number(e.target.elements.step.value),
    count: Number(e.target.elements.amount.value),
  };

  logPromises(data);
  form.reset();
}

form.addEventListener('submit', onSubmit);
