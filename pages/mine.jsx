import styles from '../styles/Home.module.css';

import { useEffect, useState } from 'react';

import Modal from '@mui/material/Modal';

import CountUp from 'react-countup';

import ReactTouchEvents from 'react-touch-events';
import Congratulation from '../components/congratulation';

import data from './../data.json';
import { settings } from '../utils';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

let startBitcoin = 0.0;
let incrementBitCoin = parseFloat(data.increment);
const Mine = () => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const data1 = await settings();
      setData(data1);
    })();
  }, []);

  const [bitCoin, setBitCoin] = useState(startBitcoin);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let x = bitCoin;
  const handleScroll = () => {
    if (parseFloat(x) >= data.limit) {
      setTimeout(() => {
        handleOpen();
      }, 2880);
    } else {
      x = parseFloat(x) + incrementBitCoin;
      setBitCoin(x.toFixed(5));
    }
  };
  useEffect(() => {
    if (data) {
      window.addEventListener('wheel', handleScroll);
    }

    // $(document).on('touchmove', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data]);


  return (
    <>
      {data && (
        <div className={styles.container}>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Congratulation message={data.message} ogUrl={data.ogUrl} />
          </Modal>
          <main className={styles.main}>
            <div className='App'>
              <header className='App-header'>
                <h4>Your Balance </h4>
                <h1>
                  <CountUp
                    className='account-balance'
                    start={bitCoin / 0.9}
                    end={bitCoin}
                    decimals={5}
                    duration={3}
                    useEasing={true}
                    separator=','
                  />
                </h1>

                <p>DogeCoin</p>
                <ReactTouchEvents onSwipe={handleScroll}>
                  <div>
                    <div className='scroll-downs'>
                      <div className='mousey'>
                        <div className='scroller'></div>
                      </div>
                    </div>
                    <div>
                      <p>Scroll to mine Dogecoin</p>
                      <img src='/images/mouse.png' />
                    </div>
                  </div>
                </ReactTouchEvents>
              </header>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Mine;
