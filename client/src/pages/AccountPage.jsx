import {useContext, useState} from "react"
import {UserContext} from "../UserContext";
import {Link, Navigate, useParams} from "react-router-dom";
import axios from 'axios';
import PlacesPage from './PlacesPage';

export default function AccountPage() {
    const [redirect, setRedirect] = useState(null)
    const {ready, user, setUser} = useContext(UserContext);

    if(!ready) {
        return 'Loading...';
    }
    if(ready && !user && !redirect) {
        return <navigate to={'/login'} />
    }

    let {subpage} = useParams();
    if(!subpage) subpage = 'profile'

    async function logout() {
        await axios.post('/logout');
        setUser(null);
        setRedirect('/');
    }

    function linkClasses (type=null) {
        let classes = 'inline-flex gap-3 py-2 px-6 rounded-full '
        
        if(type === subpage) classes += 'bg-primary text-white ' 
        
        if (type != subpage) classes += 'bg-gray-200 ';

        if(type === subpage){
            classes += ' bg-primary'
        }
        return classes
    }

    if(redirect) {
        return <Navigate to={redirect} />
    }
    return (
        <div>
            <nav className="m-full flex justify-center mt-8 gap-2 mb-8">
                <Link className={linkClasses('profile')} to={'/account/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                    </svg>
                    My Profile
                </Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clip-rule="evenodd" />
                    </svg>
                    My Bookings
                </Link>
                <Link className={linkClasses('places')} to={'/account/places'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
                    <path fill-rule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clip-rule="evenodd" />
                    </svg>
                    My Places
                </Link>
            </nav>
            {subpage === 'profile' && (
                <div className="text-center">
                    <h1 className="mt-3">Logged in as {user.name} ({user.email})</h1>
                    <br/>
                    <button 
                        className="primary max-w-xs mx-auto"
                        onClick={logout}
                    >Logout</button>
                </div>
            )}
            {subpage === 'places' && (
                <PlacesPage />
            )}

        </div>
    )
}