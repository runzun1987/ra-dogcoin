import { API, graphqlOperation } from 'aws-amplify';

import { updateSettings } from './../src/graphql/mutations';

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

    try {
      await API.graphql(
        graphqlOperation(updateSettings, {
          input: {
            id: '3e7bebed-33c2-4a39-885d-27b9f319787d',
            message: msg,
            ogUrl: url,
            limit,
            increment,
          },
        })
      );
      alert('Succussfully Updated');
    } catch (err) {
      console.log(err);
      alert('There was an error');
    }
  };
  return (
    <form onSubmit={formHandler}>
      <div style={{ color: 'white' }}>
        Your Custom Message :<input name='message' />
        <br></br>
        Your Og Url:
        <input name='url' />
        <br></br>
        Limit:
        <input name='limit' />
        <br></br>
        increment by:
        <input name='increment' />
        <br></br>
        <button type='submit'>Update</button>
      </div>
    </form>
  );
};

export default Setting;
