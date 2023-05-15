import {useContext} from "react"
import {UserContext} from "../UserContext";
import {Link, Navigate, useParams} from "react-router-dom";
 
export default function AccountPage() {
    const {ready, user} = useContext(UserContext);

    if(!ready) {
        return 'Loading...';
    }
    if(ready && !user) {
        return <navigate to={'/login'} />
    }

    let {subpage} = useParams();
    if(!subpage) subpage = 'profile'

    function linkClasses (type=null) {
        let classes = 'py-2 px-6';

        if(type === subpage){
            classes += ' bg-primary rounded-full text-white'
        }
        return classes
    }

    return (
        <div>
            <nav className="m-full flex justify-center mt-8 gap-2">
                <Link className={linkClasses('profile')} to={'/account/'}>My Profile</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My Bookings</Link>
                <Link className={linkClasses('places')} to={'/account/places'}>My Places</Link>
            </nav>
            {subpage === 'profile' && (
                <div className="text-center">
                    <h1 className="mt-3">Logged in as {user.name} ({user.email})</h1>
                    <br/>
                    <button className="primary">Logout</button>
                </div>
            )}

        </div>
    )
}