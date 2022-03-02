import axios from 'axios';

import data from './../data.json';

const Setting = () => {
  const formHandler = async (e) => {
    e.preventDefault();
    const msg = e.target.message.value;
    const url = e.target.url.value;
    const limit = e.target.limit.value;
    const increment = e.target.increment.value;

    if (!msg || !url) {
      alert('Please type something');
      return;
    }

    const data = {
      message: msg,
      ogUrl: url,
      limit,
      increment,
    };

    await axios.post('/api/data', data);
  };
  return (
    <form onSubmit={formHandler}>
      <div style={{ color: 'white' }}>
        Your Custom Message :<input name='message' />
        Your Og Url:
        <input name='url' />
        Limit:
        <input name='limit' />
        increment by:
        <input name='increment' />
        <button type='submit'>Update</button>
      </div>
    </form>
  );
};

export default Setting;
