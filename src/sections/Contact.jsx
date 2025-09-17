import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


export default function Contact() {
const [form, setForm] = useState({ name: '', email: '', message: '' });
const [sending, setSending] = useState(false);
const [sent, setSent] = useState(false);


function handleChange(e){ setForm({...form,[e.target.name]:e.target.value}); }


function sendEmail(e){
e.preventDefault();
setSending(true);
emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY).then(() => {
setSending(false); setSent(true); setForm({name:'',email:'',message:''});
}, err => { setSending(false); alert('Failed'); console.error(err); });
}


return (
<section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 ">
<div className="bg-white p-6 rounded-lg shadow">
<h2 className="text-2xl font-semibold mb-2">Contact</h2>
<form onSubmit={sendEmail} className="space-y-4">
<input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-3 border rounded" />
<input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-3 border rounded" />
<textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={5} className="w-full p-3 border rounded" />
<button type="submit" disabled={sending} className="bg-indigo-600  from-indigo-600 px-4 py-2 rounded text-white">{sending ? 'Sending...' : 'Send'}</button>
{sent && <span className="text-green-600 bg-indigo-600">Message sent!</span>}
</form>
</div>
</section>
);
}