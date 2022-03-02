import { useRouter } from 'next/router';

const Congratulation = ({ message, ogUrl }) => {
  const router = useRouter();
  const ogHandler = () => {
    router.push(ogUrl);
  };
  return (
    <div className='wrapper'>
      <div className='modal modal--congratulations'>
        <div className='modal-top'>
          <img
            className='modal-icon u-imgResponsive'
            src='https://dl.dropboxusercontent.com/s/e1t2hhowjcrs7f5/100daysui_100icon.png'
            alt='Trophy'
          />
          <div className='modal-header'>Congratulations</div>
          <div className='modal-subheader'>{message}</div>
        </div>
        <div className='modal-bottom'>
          {/* <button className='modal-btn u-btn u-btn--share'>Share</button> */}
          <button
            className='modal-btn u-btn u-btn--success'
            onClick={ogHandler}
          >
            Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default Congratulation;
