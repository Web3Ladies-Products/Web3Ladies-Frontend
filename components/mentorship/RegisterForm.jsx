import React from 'react'
import BaseInput from '../UI/BaseInput'

const RegisterForm = ({
    handleFormInputChange,
    formData,
    submitRegisterForm,
    errors,
    showLoader
}) => {
    
  return (
    <form >
        <div className='d-flex register-joinedfield'>

        <div className="input">
      <BaseInput
        placeholder="example@web3ladies.com"
        label="Email *"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleFormInputChange}
        errors={[errors.email]}
        autoFocus={true}
        required={true}
      />
      </div>
      <div className="input">
      <BaseInput
        placeholder="Jen Eche"
        label="Full name"
        name="full_name"
        value={formData.full_name}
        onChange={handleFormInputChange}
        errors={[errors.full_name]}
        autoFocus={true}
        required={true}
      />
      </div>
        </div>
    </form>
  )
}

export default RegisterForm