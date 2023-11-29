import {React, useState} from 'react';
import './App.css';
import Snowfall from './components/SnowFall';

function Case({num, open}) {
  return (
    <div className='w-[90%] h-[90%] min-h-[150px] border border-1 border-white flex text-white bg-main rounded m-1 bg-main cursor-pointer hover:brightness-110' onClick={open}>
      <h1 className='font-bold ml-3 mt-3 text-3xl font-fredoka'>{num}</h1>
    </div>
  )
}


// function Popup({num}) {

// }
function App() {
  const caseNumbers = Array.from({ length: 24 }, (_, index) => index + 1);
  // const [currentNum, setCurrentNum] = useState(1);
  const [open, setOpen] = useState(false)
  return (
    <div className='relative'>
    <Snowfall/>
    {open && 
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-50 flex items-center justify-center z-50'>

        <div className='w-[500px] h-[400px] bg-white p-5 relative'>
          <button onClick={()=>{setOpen(false)}} className='bg-main text-white p-3 absolute right-3'>Close</button>
          <div>
          Content here
          </div>

        </div>

      </div>
      
    }
    <div className="bg-base grid md:grid-cols-1 lg:grid-cols-3 min-h-[100vh] p-[30px]">
      <div className='lg:my-2 lg:p-4'>
        <h1 className='text-4xl font-bold font-fredoka mb-2'>Calendrier de l'avent</h1>
        <p className='max-w-[400px] py-3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className='lg:col-span-2 grid sm:grid-cols-3 md:grid-cols-5'>
      {caseNumbers.map((num) => (
        <Case key={num} num={num} open={()=> {setOpen(true)}} />
      ))}
      </div>
    
    </div>
    </div>
  );
}

export default App;
