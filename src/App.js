// import logo from './logo.svg';
import './App.css';
import Snowfall from './components/SnowFall';
function Case({num}) {
  return (
    <div className='w-[90%] h-[90%] min-h-[100px] border border-1 border-white flex text-white bg-main rounded m-1 bg-main z-5'>
      <h1 className='font-bold ml-3 mt-3 text-xl'>{num}</h1>
    </div>
  )
}
function App() {
  const caseNumbers = Array.from({ length: 24 }, (_, index) => index + 1);
  return (
    <div>
              <Snowfall/>
    <div className="bg-main grid md:grid-cols-1 lg:grid-cols-3 min-h-[100vh] p-[30px]">
      <div className='lg:my-2 lg:p-4'>
        <h1 className='text-4xl font-bold text-white font-fredoka mb-2'>Calendrier de l'avent</h1>
        <p className='text-white max-w-[400px] py-3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </p>
      </div>
      <div className='lg:col-span-2 grid sm:grid-cols-3 md:grid-cols-5'>

      {caseNumbers.map((num) => (
        <Case key={num} num={num} />
      ))}


      </div>
      
    </div>
    </div>
  );
}

export default App;
