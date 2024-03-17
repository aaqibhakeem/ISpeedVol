import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { UseSignUp } from '../hooks/useSignup'

const SignUp = () => {
    
        const myStyle = {
            height: '100vh',
            backgroundColor: '#52b788',
        }
        const [name,setName] = useState('')
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const {signup,isLoading,error} = UseSignUp()

        const loginLink = <NavLink to={'/login'} style={{fontFamily: 'Poppins'}}>Login</NavLink>;

        const handleSubmit = async (e) => {
            e.preventDefault()
            console.log(email+"     "+password)
            await signup(name,email,password)
        }

        const handleClick = () => {
            <Link to='/'/>
        }

        return(<b>
            <div style={myStyle}>
                <div className='signUpLayout'> 
                    <form onSubmit={handleSubmit}>
                        <h1 className='signUpHeading'>Sign Up</h1>
                        <div className='signUpDiv'>
                            <div className='signUpColumn1'>
                                <div className='signUpName'>
                                    <label>Name*</label><br/>
                                    <input
                                        type='text'
                                        onChange={(e) => {setName(e.target.value)}}
                                        value={name}
                                    />
                                </div>
                                <div className='signUpEmail'>
                                    <label>Email*</label><br/>
                                    <input
                                        type='email'
                                        onChange={(e) => {setEmail(e.target.value)}}
                                        value={email}
                                    />
                                </div>
                                <div className='signUpPassword'>
                                    <label>Password*</label><br/>
                                    <input
                                        type='password'
                                        onChange={(e) => {setPassword(e.target.value)}}
                                        value={password}
                                    />
                                </div>
                            </div>
                        </div>
                        <button className='signUpButton' disabled={isLoading} onClick={handleClick}>Submit</button>
                        <h5 style={{fontFamily: 'Poppins'}}>Have an account? {loginLink}.</h5>
                        {error && <div className="error" style={{marginTop:'40px'}}>{error}</div>}
                    </form>
                </div>
                <div className='signUpUnderLayDiv'></div>
            </div>
        </b>
        )
    }


export default SignUp