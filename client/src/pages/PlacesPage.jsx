import {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Perks} from '../Perks';

export default function PlacesPage() {
    const {action} = useParams();
    const [title, setTitle] = useState('')
    const [country, setCountry] = useState('');
    const [subregion, setSubregion] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('')
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLinks, setPhotoLinks] = useState([]);
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);

    function inputHeader(text){
        return(
            <h2 className="text-2xl mt-4">{text}</h2>
        )
    }

    function inputDescription(text){
        return(
            <p className="text-gray-500 text-sm">{text}</p>                        
        )
    }

    function preInput(header, description){
        <>
            {inputHeader(header)}
            {inputDescription(description)}
        </>
    }

    return (
        <div>
            {action !== 'new' && (
                <div className="text-center">
                    <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                        </svg>
                        Add New Place
                    </Link>    
                </div>
            )}
            {action === 'new' && (
                <div>
                    <form>
                        {preInput('Title', 'Title for your place, make it appealing!')}
                        <input 
                            type="text" 
                            value={title} 
                            onChange={(ev) => setTitle(ev.target.value)} 
                            placeholder="title, for example: 'Lovely apt steps from Central Park'" 
                        />   
                        {preInput('Country', 'Which country?')}
                        <input 
                            type="text" 
                            value={country} 
                            onChange={(ev) => setCountry(ev.target.value)} 
                            placeholder="USA" 
                        />   
                        {preInput('State/Province', 'Which State/Province?')}
                        <input 
                            type="text" 
                            value={subregion} 
                            onChange={(ev) => setSubregion(ev.target.value)} 
                            placeholder="Alabama" 
                        />   
                        {preInput('City', 'Which City/Neighborhood?')}
                        <input 
                            type="text" 
                            value={city} 
                            onChange={(ev) => setCity(ev.target.value)} 
                            placeholder="New York City" 
                        />   
                        {preInput('Address', 'Full Street Address (and apt. number if applicable)')}
                        <input 
                            type="text" 
                            value={address} 
                            onChange={(ev) => setAddress(ev.target.value)} 
                            placeholder="123 Main St." 
                        />
                        {preInput('Photos', 'Show off the place with hi-res pics')}
                        <div className='flex gap-2'>
                            <input type="text" 
                                value={photoLinks} 
                                onChange={(ev) => setPhotoLinks(ev.target.value)} 
                                placeholder={'Add using one or more links separated by commas. ex: /bit.ly/mypic1.jpg, bit.ly/mypic2.jpg'} 
                            />
                            <button className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;photo(s)</button>
                        </div>
                        <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                            <button className="flex justify-center gap-2 border bg-transparent rounded-2xl p-8 text-lg text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>
                                Upload   
                            </button>    
                        </div>   
                        {preInput('Description', 'This is where you can describe the place in detail.')}
                        <textarea 
                            value={description} 
                            onChange={(ev) => setDescription(ev.target.value)} 
                            placeholder="Fourth-floor studio apartment centrally located steps from amazing restaurants and Central Park..."
                        />
                        <Perks 
                            selected={perks} 
                            onChange={(ev) => setPerks(ev.target.value)}
                        />
                        
                        {preInput('Extra Info', 'Things guests should know: house rules, quirks, secret rooms, etc.')}
                        <textarea value={extraInfo} onChange={ev => setExtraInfo((ev).target.value)} placeholder="Please don't make noise after 11pm,etc."/>
                        {preInput('Check In/Out Times', 'When can guests arrive, and when do they need to leave by? Please leave enough time for cleaning between bookings.')}
                        <div className="grid gap-20 sm:grid-cols-3">
                            <div>
                                <h3 className='mt-2 -mb-1'>Check-In Time</h3>
                                <input type="text" value={checkIn} onChange={(ev) => setCheckIn(ev.target.value)} placeholder="Earliest time guests can arrive, ex: 1:00pm or 13:00"/>
                            </div>
                            <div>
                                <h3 className='mt-2 -mb-1'>Check-Out Time</h3>
                                <input type="text" value={checkOut} onChange={(ev) => setCheckOut(ev.target.value)} placeholder="Time guests must leave by, ex: 1:00pm or 13:00" /> 
                            </div> 
                            <div>
                                <h3 className='mt-2 -mb-1'>Max. # of Guests</h3>
                                <input type="number" value={maxGuests} onChange={(ev) => setMaxGuests(ev.target.value)} placeholder="ex: 4"/>
                            </div>
                        </div>
                        <button className="primary my-20">Save</button>
                    </form>
                </div>
            )}
        </div>
    )
} 