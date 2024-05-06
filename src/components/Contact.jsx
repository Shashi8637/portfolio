import React from 'react'

function Contact() {

  const checkInput=(event)=>{
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    if(name.trim()=='' || email.trim()=='' || message.trim()==''){
        alert("please fill all required fields");
    }
    else{
      event.target.submit();
    }

  }



  return (
    <div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/eapdpxma" className='flex flex-col max-w-[600px] w-full'onSubmit={checkInput} >
        <div className='pb-8 py-8 '>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-3'>
           Submit the form below or shoot me an email - shashi863788@gmail.com
          </p>
        </div>
        
          <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
          <input className='my-2 bg-[#ccd6f6] p-2' type='email' placeholder='Email' name='email'/>
          <textarea className='bg-[#ccd6f6] p-2' name='message' placeholder='Message' rows="10"></textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' >Let's Collaborate</button>
      </form>
      
    </div>
  )
}

export default Contact
