import React, { useState } from 'react';
import { useFormik} from 'formik'

const validate = values => {
    const errors = {};
    
    if (!values.name) {
    errors.name = 'Name is Required'
    }
    if (!values.message) {
        errors.message = 'Message is Required'
    }
    if (!values.betreff) {
        errors.betreff = 'Regarding is Required'
    }
    if (!values.email) {
        errors.email = 'Email is Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors;
};

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const [emailSend, setEmailSend] = useState(false)

    const formik = useFormik({
        initialValues:{ name: '', email: '', message:'', betreff: '' },
        validate,
        onSubmit: values => {
            setSubmitted(true)
            setEmailSend(false)
            let data = {
                name:values.name,
                email:values.email,
                message:values.message,
                regarding:values.betreff
            }
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => {
                if (res.status === 200) {
                    setSubmitted(false)
                    setEmailSend(true)
                    formik.resetForm()
                }
            })
        },
    });
  
    return (
        <>
            <div className="mx-auto max-w-screen-md pt-10 pb-20" id="contact">
                <h2 className="font40 text-center">KONTAKT</h2>
                <div class="mt-10 sm:mx-auto sm:w-full">
                    {emailSend?(<div className="formMsg">
                        <p>Thank you! Your form has been successfully submitted.</p>
                    </div>):null}
                    
                    <form class="space-y-6" onSubmit={formik.handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div class="mt-2">
                                <input id="name" name="name" type="text" placeholder="Name" class="ppearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                                value={formik.values.name}/>
                                {formik.errors.name ? <div className="text-sm text-red-600">{formik.errors.name}</div> : null}
                            </div>
                            <div class="mt-2">
                                <input id="email" name="email" type="email" placeholder="E-Mail-Adresse" class="ppearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                                value={formik.values.email} />
                                {formik.errors.email ? <div className="text-sm text-red-600">{formik.errors.email}</div> : null}
                            </div>
                        </div>
                        <div>
                            <div class="mt-2">
                                <input id="betreff" name="betreff" type="text" placeholder="Betreff" class="ppearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                                value={formik.values.betreff}/>
                                {formik.errors.betreff ? <div className="text-sm text-red-600">{formik.errors.betreff}</div> : null}
                            </div>
                        </div>
                        <div>
                            <div class="mt-2">
                                <textarea id="message" name="message" type="text" placeholder="Type your message here..." class="ppearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                                value={formik.values.message} />
                                {formik.errors.message ? <div className="text-sm text-red-600">{formik.errors.message}</div> : null}
                            </div>
                        </div>
                        <div>
                            {submitted?(
                                <button class="flex w-full justify-center rounded-md bg-black px-10 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                                    <div
                                        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                        role="status">
                                    <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                                    </div>
                                </button>
                            ):(<button type="submit" class="flex w-full justify-center rounded-md bg-black px-10 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Sign in</button>)}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}