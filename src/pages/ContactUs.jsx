import React from 'react'
import { Featured } from '../components/Featured'
import { Button } from '../components/Button'

export const ContactUs = () => {
    return (
        <div>
            <Featured title="CONTACT" url="./assets/contact-us.png" />

            <section className='container mx-auto px-6 lg:px-24 py-16 bg-white'>
                <div className=" px-4 mx-auto pb-10 lg:pb-18 max-w-screen-md">
                    <h2 className=" text-4xl pb-6 tracking-tight font-extrabold text-center text-gray-900 ">CONTACTEAZA-NE</h2>
                    <p className=" font-light text-center text-gray-500 sm:text-xl">Pentru orice nelamurire ne poti scrie completand formularul de mai jos. Cu ce te putem ajuta azi?</p>
                </div>

                <form action="#" className="pt-8 lg:py-16 mt-6 mx-auto max-w-screen-md space-y-8">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="nume@cevisezi.ro" required />
                    </div>
                    <div>
                        <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Subiect</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Cu ce te putem ajuta?" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Mesaj</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Scrie un mesaj..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-900 hover:bg-purple-800 transition ease-in-out duration-500">Trimite</button>
                    
                    
                </form>

            </section>


        </div>
    )
}
