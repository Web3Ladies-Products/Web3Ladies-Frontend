import React from 'react'
import Button from '../buttons/Button'
import BaseInput from '../UI/BaseInput'

const WaitingListForm = ({
    handleFormInputChange,
    formData,
    submitWaitingList,
    errors,
    showLoader
}) => {
  return (
    <form onSubmit={submitWaitingList}>
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
    <div className="input">
      <BaseInput
        placeholder="oluchi@web3ladies.com"
        label="Email *"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleFormInputChange}
        errors={[errors.email]}
        required={true}
      />
    </div>
    
    
  
    <div className="w-full mt-10">
      <Button
        buttonText={showLoader ? "Loading..." : "Submit"}
        variant={"primary"}
        disabled={showLoader}
        type="submit"
      />
    </div>
  </form>
  )
}

export default WaitingListForm