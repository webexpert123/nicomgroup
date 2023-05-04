import React, { useState } from 'react';



export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [regarding, setRegarding] = useState('');
    const [submitted, setSubmitted] = useState(false)
    const [emailSend, setEmailSend] = useState(false)
    
    const handleSubmit = (e) => { 
        e.preventDefault()
        
      let data = {
          name,
          email,
          message,
          regarding
        }
      fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
            setEmailSend(true)
            console.log('Response succeeded!')
            setSubmitted(true)
            setName('')
            setEmail('')
          }
        })
    }
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    // });

    // const handleChange = (event) => {
    //     setFormData({ ...formData, [event.target.name]: event.target.value });
    // }

    // const handleSubmit = {

    // }
  


    return (
        <>
            <div className="mx-auto max-w-screen-md pt-10 pb-20" id="contact">
                <h2 className="font40 text-center">KONTAKT</h2>
                <div class="mt-10 sm:mx-auto sm:w-full">
                    {emailSend?(<div className="formMsg">
                        <p>Email successfully sent</p>
                    </div>):null}
                    <form class="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div class="mt-2">
                                <input id="name" name="name" type="text" placeholder="Name" required class="ppearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" onChange={(e)=>{setName(e.target.value)}} />
                            </div>
                            <div class="mt-2">
                                <input id="email" name="email" type="email" placeholder="E-Mail-Adresse" required class="ppearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" onChange={(e)=>{setEmail(e.target.value)}} />
                            </div>
                        </div>
                        <div>
                            <div class="mt-2">
                                <input id="betreff" name="betreff" type="text" placeholder="Betreff" required class="ppearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" onChange={(e)=>{setRegarding(e.target.value)}} />
                            </div>
                        </div>
                        <div>
                            <div class="mt-2">
                                <textarea id="message" name="message" type="text" placeholder="Type your message here..." required class="ppearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" onChange={(e)=>{setMessage(e.target.value)}} />
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="flex w-full justify-center rounded-md bg-black px-10 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}