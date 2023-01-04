(function () {
  async function makeRequest(url = '', data) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
    return response.json();
  }

  function handleChange(event) {
    const dataset = event.target.dataset;

    var data = {};
    data.action = 'write';
    data.gpio = dataset.gpio;
    data.status = this.checked;

    console.log(data);

    makeRequest('/relays', data).then((response) => console.log(response));
  }

  function handleClick(event) {
    event.preventDefault();

    const dataset = event.target.dataset;
    console.log('href: ', event.target.href);
    var data = {};
    data.filename = dataset.filename;

    makeRequest('/audio', data).then((response) => console.log(response));
  }

  const checkboxes = document.querySelectorAll('.on');
  const links = document.querySelectorAll('.audio-links');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', handleChange);
  });

  links.forEach((link) => {
    link.addEventListener('click', handleClick);
  });
})();
