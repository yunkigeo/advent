// import logo from './logo.svg';
import './App.css';
function Case({num}) {
  return (
    <div className='w-[90%] h-[90%] min-h-[100px] border border-1 border-white flex text-white rounded m-1'>
      <h1 className='font-bold ml-3 mt-3 text-xl'>{num}</h1>
    </div>
  )
}
function App() {
  const caseNumbers = Array.from({ length: 24 }, (_, index) => index + 1);
  return (
    <div className="bg-main grid md:grid-cols-2 lg:grid-cols-3 min-h-[100vh] p-[50px]">
      <div className=''>
        <h1 className='text-2xl font-bold text-white'>Calendrier de l'avent</h1>
        
      </div>
      <div className='lg:col-span-2 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5'>

      {caseNumbers.map((num) => (
        <Case key={num} num={num} />
      ))}


      </div>
      
    </div>
  );
}

export default App;
