import { useSelector, useDispatch } from "react-redux"
import { useRef , useState} from "react"
import { userUpdateStart, userUpdateSuccess, userUpdateFailure } from "../redux/user/userSlice";


export default function Profile() {
  const fileRef = useRef();
  const {currentUser, loading, error} = useSelector((state) => state.user)
  const [formData, setformData] = useState({})
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e)=> {
    setformData({...formData, [e.target.id]: e.target.value})
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      dispatch(userUpdateStart());

      const res = await fetch(`/api/user/update/${currentUser._id}`, {
          method : 'POST',
          headers :{
            'Content-Type' : 'application/json',
          },
          body : JSON.stringify(formData),
        });
        const data = await res.json();
            if(data.success === false){
              dispatch(userUpdateFailure(data.message))
              return;
            }
            dispatch(userUpdateSuccess(data));
            setUpdateSuccess(true)
        
    } catch (error) {
      dispatch(userUpdateFailure(error.message))
    }

  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center'>Profile</h1>
      <form onSubmit= {handleSubmit} className='flex flex-col gap-4'>
        <input type="file" ref={fileRef} hidden accept='image/*'/>
        <img onClick={()=> fileRef.current.click()} src={currentUser.avatar} alt="profile"
        className="rounded-full h-24 w-24 object-cover
        cursor-pointer self-center mt-2"/>
        <input type="text" placeholder="username" id="username"
        defaultValue={currentUser.username}
        className="border p-3 rounded-lg"onChange={handleChange}/>
        <input type="email" placeholder="email" id="email"
        defaultValue={currentUser.email}
        className="border p-3 rounded-lg"onChange={handleChange}/>
        <input type="password" placeholder="password" id="password"
        className="border p-3 rounded-lg"onChange={handleChange}/>
        <button disabled= {loading} className="bg-slate-700 text-white rounded-lg p-3 uppercase
         hover:opacity-95 disabled:opacity-80">{loading ? 'Loading...' : 'Update'}</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>

      <p className="text-red-700 mt-5">{error ? error : '' }</p>
      <p className="text-green-700 mt-5">{updateSuccess ? 'User updated successfully': ''}</p>
    </div>
  )
}
