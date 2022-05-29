import React, { useState } from 'react'
import './story.css'

const Story = () => {

    const [values,setValues] = useState({
        image:'',
        firstname:'',
        lastname:'',
        story:'',
        type:'',
        education:''
    })

    const [show, setShow] = useState([
    ])

    const onChanged = (e) => {        
        setValues({...values, [e.target.name]: e.target.value})
        
    }

    const handleFile = (e) =>{
        let file = e.target.files[0]
        setValues({...values, [e.target.name]: file.name})
    }


    const handlebtn = (value) =>{
        setValues({...values,type: value})

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
      }

    //   const onClick = () =>{
    //       setShow([...show, {
    //           image:values.image,
    //           firstname: values.firstname
    //       }])
    //   }



    //   console.log(show)
   
    //   console.log(values)

        
      
  return (
    <div className='container-story'>
        <h1>Share your amazing story!</h1>
        <form action="" onSubmit={handleSubmit}>

            <label htmlFor="">Upload your Picture</label>
            <input type='file' placeholder='Choose Image' name='image' onChange={handleFile}/>

            <div className='divider'>
                <div className="input">
                    <label htmlFor="" >First Name</label>
                    <input type='text' name='firstname'onChange={onChanged} />
                </div>
                <div className="input">
                    <label htmlFor="">Last Name</label>
                    <input type='text' name='lastname' onChange={onChanged} />
                </div>
            </div>

            <label htmlFor="">Share your story</label>
            <textarea name="story" id="" cols="30" rows="" onChange={onChanged}/>

            <div className="what">
                <label htmlFor="">What did you interact with Vasiti as?</label>
                <div className="button">
                    <input type="radio" checked={values.type === 'customer'} onChange={() => handlebtn('customer')} name="type" id=""  />
                    <label htmlFor="customer" className='lal'>Customer</label>
                    <input type="radio"  checked={values.type === 'vendor'} onChange={() => handlebtn('vendor')} name="type" id="" />
                    <label htmlFor="vendor" className='lal'>vendor</label>
                </div>
            </div>

            <label htmlFor="">City or Higher Institution(for Students)</label>
            <input type='text' placeholder='' />


            {/* <FormInput type='textarea' placeholder='' label='Share your story' /> */}

            <button className='share-btn'>Share your story!</button>
        </form>
    </div>
  )
}

export default Story