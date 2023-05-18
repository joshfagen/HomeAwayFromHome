import {useState} from 'react';
import {Link, useParams} from 'react-router-dom';

export default function PlacesPage() {
    const {action} = useParams();
    // const [title, setTitle] = useState('')

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
                        <h2 className="text-2xl mt-4">Title</h2>
                        <p className="text-gray-500 text-sm">Title for your place, make it appealing!</p>
                        <input type="text" placeholder="title, for example: 'Lovely apt steps from Central Park'" />   
                        <h2 className="text-2xl mt-4">Country</h2>
                        <p className="text-gray-500 text-sm">Which country is the place in?</p>
                        <input type="text" placeholder="USA" />   
                        <h2 className="text-2xl mt-4">Sub-Region</h2>
                        <p className="text-gray-500 text-sm">Located in which State or Province?</p>
                        <input type="text" placeholder="Alabama" />   
                        <h2 className="text-2xl mt-4">City</h2>
                        <p className="text-gray-500 text-sm">Which city?</p>
                        <input type="text" placeholder="New York City" />   
                        <h2 className="text-2xl mt-4">Address</h2>
                        <p className="text-gray-500 text-sm">Street Address</p>
                        <input type="text" placeholder="123 Main St." />
                        <h2 className="text-2xl mt-4">Photos</h2>
                        <p className="text-gray-500 text-sm">Show off the place with hi-res pics</p>
                        <div className='flex gap-2'>
                            <input type="text" placeholder={'Add using one or more links separated by links. ex: /bit.ly/mypic1.jpg, bit.ly/mypic2.jpg'} />
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
                        <h2 className="text-2xl mt-4">Description</h2>
                        <p className="text-gray-500 text-sm">This is where you can describe the place in detail.</p>
                        <textarea />
                        <h2 className="text-2xl mt-4">Perks</h2>
                        <p className="text-gray-500 text-sm">Select all amenities offered</p>
                        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                                <span>Free Parking</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                                </svg>
                                <span>TV</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                                </svg>
                                <span>Wifi</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                </svg>
                                <span>Pets Ok</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                </svg>
                                <span>Elevator</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <span>Views</span>
                            </label>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
} 