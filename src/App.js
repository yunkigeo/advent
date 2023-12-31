import {React, useState} from 'react';
import './App.css';
import Snowfall from './components/SnowFall';

function Case({num, open}) {
  const listGreen = [3,7,14,16, 24]
  return (
    <div className={`${num === 24? 'max-sm-[90%] md:w-[190%]' : 'sm:w-[90%]'} ${listGreen.includes(num)? 'bg-green':'bg-main'} h-[90%] min-h-[150px] border border-1 border-white flex text-white rounded m-1 cursor-pointer hover:brightness-110`} onClick={open}>
      <h1 className='font-bold ml-3 mt-3 text-3xl font-fredoka'>{num}</h1>
    </div>
  )
}

function App() {
  const caseNumbers = Array.from({ length: 24 }, (_, index) => index + 1);
  const [currentNum, setCurrentNum] = useState(1);
  const [open, setOpen] = useState(false)
  return (
    <div className='relative'>
    <Snowfall/>
    {open && 
      <div className='fixed top-0 left-0 right-0 bottom-0 bg-white bg-opacity-50 flex items-center justify-center z-50' onClick={()=> setOpen(false)}>
        <div className='w-[400px] font-fredoka h-min-[400px]  bg-white p-5 relative rounded shadow-lg'>
          <button onClick={()=>{setOpen(false)}} className='bg-main text-white p-3 absolute right-3 rounded hover:brightness-110'>Close</button>
          <div>
           <h1 className='text-2xl font-bold mt-2'>Jour {currentNum}</h1>
           <div className='flex items-center justify-center mt-4 flex-col'>
            <img src={`../images/gifts/${currentNum}.svg`} alt="gifts" className='w-[150px]'/>
            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>
            </div>

            
           
          </div>

        </div>
      </div>
      
    }
    <div className="bg-base grid md:grid-cols-1 lg:grid-cols-3 min-h-[100vh] p-[30px]">
      <div className='lg:my-2 lg:p-4 max-md:px-2'>
        <h1 className='text-4xl font-bold font-fredoka mb-2'>Calendrier de l'avent 2024</h1>
        <p className='max-w-[400px] py-3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {/* <img src='../images/tree.svg' className='max-lg:hidden mt-9 max-w-[400px]' alt="deco" /> */}
        
      </div>
      <div className='lg:col-span-2 grid max-md:grid-cols-3 md:grid-cols-5'>
      {caseNumbers.map((num) => (
        <Case key={num} num={num} open={()=> {setOpen(true);setCurrentNum(num)}} />
      ))}
      </div>
    
    </div>
    <div className='bg-base p-11 text-right text-xs'>Calendrier de l'avent | 2024 | Image credit : svgrepo</div>
    </div>
  );
}

export default App;
