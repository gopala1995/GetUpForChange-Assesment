import React from 'react'
import "./SignUpPage.css"
export const LoginPage = () => {
  return (
    <div>
        <form action="">
            <input type="text" placeholder='Enter your userName...' />
            <input type="password" placeholder='Enter your password...' />
            <input type="submit" placeholder='Login' className='submitButton'/>
        </form>
    </div>
  )
}
