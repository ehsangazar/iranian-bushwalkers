import React, { useState, useEffect, useContext } from 'react'
import { useQueryParam, StringParam } from 'use-query-params'
import fetchHandler from '../../utils/fetchHandler'
import LoginModal from '../LoginModal/LoginModal'
import ForgotModal from '../ForgotModal/ForgotModal'
import RegisterModal from '../RegisterModal/RegisterModal'
import ResetModal from '../ResetModal/ResetModal'
import RegisterConfirmModal from '../RegisterConfirmModal/RegisterConfirmModal'
import MyApp from '../../contexts/MyApp'

const Modals = () => {
  const app = useContext(MyApp)
  const [formRegisterValues, setFormRegisterValues] = useState({})
  const [formLoginValues, setFormLoginValues] = useState({})
  const [formForgotValues, setFormForgotValues] = useState({})
  const [formResetValues, setFormResetValues] = useState({})

  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showForgotModal, setShowForgotModal] = useState(false)
  const [showResetModal, setShowResetModal] = useState(false)
  const [showConfirmEmailModal, setShowConfirmEmailModal] = useState(false)

  const [isLoadingRegisterForm, setIsLoadingRegisterForm] = useState(false)
  const [isLoadingLoginForm, setIsLoadingLoginForm] = useState(false)
  const [isLoadingForgotForm, setIsLoadingForgotForm] = useState(false)
  const [isLoadingResetForm, setIsLoadingResetForm] = useState(false)
  const [
    isLoadingRegisterConfirmModal,
    setIsLoadingRegisterConfirmModal,
  ] = useState(false)
  const [isLoadingProfile, setIsLoadingProfile] = useState(false)

  const [responseOfApiRegister, setResponseOfApiRegister] = useState(null)
  const [responseOfApiLogin, setResponseOfApiLogin] = useState(null)
  const [responseOfApiForgot, setResponseOfApiForgot] = useState(null)
  const [responseOfApiReset, setResponseOfApiReset] = useState(null)

  const [forgotEmailToken, setForgotEmailToken] = useQueryParam(
    'forgotEmailToken',
    StringParam
  )
  const [registerEmailToken, setRegisterEmailToken] = useQueryParam(
    'registerEmailToken',
    StringParam
  )

  const handleCloseRegisterModal = () => {
    app.modal.setModalToShow('')
    setShowRegisterModal(false)
  }
  const handleCloseLoginModal = () => {
    app.modal.setModalToShow('')
    setShowLoginModal(false)
  }
  const handleCloseForgotModal = () => {
    app.modal.setModalToShow('')
    setShowForgotModal(false)
  }
  const handleCloseResetModal = () => {
    app.modal.setModalToShow('')
    setShowResetModal(false)
  }
  const handleCloseConfirmEmailModal = () => {
    app.modal.setModalToShow('')
    setShowConfirmEmailModal(false)
  }

  const handleOpenLoginModal = () => {
    setShowLoginModal(true)
  }
  const handleOpenRegisterModal = () => {
    setShowRegisterModal(true)
  }
  const handleOpenForgotModal = () => {
    setShowForgotModal(true)
  }
  const handleOpenResetModal = () => {
    setShowResetModal(true)
  }
  const handleOpenConfirmEmailModal = () => {
    setShowConfirmEmailModal(true)
  }

  const handleChangeRegisterForm = (name, event, type = 'input') => {
    if (type === 'checkbox') {
      setFormRegisterValues({
        ...formRegisterValues,
        [name]: formRegisterValues[name] ? 0 : 1,
      })
      return
    }
    if (event) event.preventDefault()
    setFormRegisterValues({
      ...formRegisterValues,
      [name]: event.target.value,
    })
  }
  const handleChangeLoginForm = (name, event) => {
    if (event) event.preventDefault()
    setFormLoginValues({
      ...formLoginValues,
      [name]: event.target.value,
    })
  }
  const handleChangeForgotForm = (name, event) => {
    if (event) event.preventDefault()
    setFormForgotValues({
      ...formForgotValues,
      [name]: event.target.value,
    })
  }
  const handleChangeResetForm = (name, event) => {
    if (event) event.preventDefault()
    setFormResetValues({
      ...formResetValues,
      [name]: event.target.value,
    })
  }

  const handleSubmitRegister = async (event) => {
    if (event) event.preventDefault()
    const error = []
    if (!formRegisterValues.email) {
      error.push('email')
    }
    if (!formRegisterValues.first_name) {
      error.push('first_name')
    }
    if (!formRegisterValues.last_name) {
      error.push('last_name')
    }
    if (!formRegisterValues.mobile) {
      error.push('mobile')
    }
    if (!formRegisterValues.address) {
      error.push('address')
    }
    if (!formRegisterValues['emergency-name']) {
      error.push('emergency-name')
    }
    if (!formRegisterValues['emergency-number']) {
      error.push('emergency-number')
    }
    if (!formRegisterValues.postcode) {
      error.push('postcode')
    }
    if (!formRegisterValues.password) {
      error.push('password')
    }
    if (!formRegisterValues['checkbox-risk']) {
      error.push('checkbox-risk')
    }
    if (!formRegisterValues['checkbox-conduct']) {
      error.push('checkbox-conduct')
    }
    if (error.length > 0) {
      setResponseOfApiRegister({
        type: 'danger',
        message: 'Please check the form again',
      })
      return
    }

    setIsLoadingRegisterForm(true)
    try {
      const result = await fetchHandler({
        method: 'POST',
        url: '/api/v1/user/register',
        body: {
          email: formRegisterValues.email,
          first_name: formRegisterValues.first_name,
          last_name: formRegisterValues.last_name,
          password: formRegisterValues.password,
          mobile: formRegisterValues.mobile,
          address: formRegisterValues.address,
          postcode: formRegisterValues.postcode,
          emergency_name: formRegisterValues['emergency-name'],
          emergency_number: formRegisterValues['emergency-number'],
          acknowledgement: formRegisterValues['checkbox-risk'],
          code_conduct: formRegisterValues['checkbox-conduct'],
        },
      })
      if (result.data.success) {
        localStorage.setItem('token', result.data.jwt.token)
        setResponseOfApiRegister({
          type: 'success',
          message:
            'Thank you, An email has been sent to you, please open it and click to confirm your email',
        })
        updateUser()
        setTimeout(() => {
          handleCloseRegisterModal()
        }, 2000)
      } else {
        setResponseOfApiRegister({
          type: 'danger',
          message: result.data.message,
        })
      }
    } catch (e) {
      console.error(e)
    }
    setIsLoadingRegisterForm(false)
  }

  const handleSubmitLogin = async (event) => {
    if (event) event.preventDefault()
    setIsLoadingLoginForm(true)
    try {
      const result = await fetchHandler({
        method: 'POST',
        url: '/api/v1/user/login',
        body: {
          email: formLoginValues.email,
          password: formLoginValues.password,
        },
      })
      if (result.data.success) {
        localStorage.setItem('token', result.data.jwt.token)
        setResponseOfApiLogin({
          type: 'success',
          message: 'You have successfully logged in',
        })
        updateUser()
        setTimeout(() => {
          handleCloseLoginModal()
        }, 1000)
      } else {
        setResponseOfApiLogin({
          type: 'danger',
          message: result.data.message,
        })
      }
    } catch (e) {
      console.error(e)
    }
    setIsLoadingLoginForm(false)
  }

  const handleSubmitForgot = async (event) => {
    if (event) event.preventDefault()
    setIsLoadingForgotForm(true)

    try {
      const response = await fetchHandler({
        method: 'POST',
        url: '/api/v1/user/forgot',
        body: {
          email: formForgotValues.email,
        },
      })
      setResponseOfApiForgot({
        type: 'success',
        message: 'The reset password instruction has been sent to your email',
      })
      updateUser()
      setTimeout(() => {
        handleCloseForgotModal()
      }, 10000)
    } catch (e) {
      console.error(e)
    }
    setIsLoadingForgotForm(false)
  }

  const handleSubmitReset = async (event) => {
    if (event) event.preventDefault()
    if (formResetValues.password !== formResetValues['password-confirmation']) {
      setResponseOfApiReset({
        type: 'danger',
        message:
          'Password and Confirm Password do not match, please check them again',
      })
      return
    }

    setIsLoadingResetForm(true)
    try {
      const result = await fetchHandler({
        method: 'POST',
        url: '/api/v1/user/reset',
        body: {
          password: formResetValues.password,
          security_hash: forgotEmailToken,
        },
      })
      if (result.data.success) {
        setResponseOfApiReset({
          type: 'success',
          message: 'Thank you, you have reset your password successfully',
        })
        updateUser()
        setTimeout(() => {
          handleCloseResetModal()
        }, 10000)
      } else {
        setResponseOfApiReset({
          type: 'danger',
          message: result.data.message,
        })
      }
    } catch (e) {
      console.error(e)
    }
    setIsLoadingResetForm(false)
  }

  const handleSubmitConfirmEmail = async () => {
    setIsLoadingRegisterConfirmModal(true)
    try {
      await fetchHandler({
        method: 'POST',
        url: '/api/v1/user/confirm',
        body: {
          security_hash: registerEmailToken,
        },
      })
      updateUser()
    } catch (e) {
      console.error(e)
    }
    setIsLoadingRegisterConfirmModal(false)
  }

  const handleClickOnLogOut = () => {
    localStorage.setItem('token', '')
    updateUser()
  }

  const logout = () => {
    app.user.setUserData({})
  }

  useEffect(() => {
    if (forgotEmailToken) {
      handleOpenResetModal()
      resetUrl()
    }
  }, [])

  useEffect(() => {
    if (registerEmailToken) {
      handleOpenConfirmEmailModal()
      handleSubmitConfirmEmail()
      resetUrl()
    }
  }, [])

  useEffect(() => {
    updateUser()
  }, [])

  useEffect(() => {
    if (app.modal.modalToShow === 'register') {
      handleOpenRegisterModal()
    }
    if (app.modal.modalToShow === 'login') {
      handleOpenLoginModal()
    }
  }, [app.modal.modalToShow])

  const updateUser = async () => {
    if (!localStorage.getItem('token')) {
      logout()
      return
    }

    if (app.user.userData.id) return
    setIsLoadingProfile(true)
    try {
      const result = await fetchHandler({
        method: 'GET',
        url: '/api/v1/user/profile',
        auth: true,
      })
      app.user.setUserData(result.data.user)
    } catch (e) {
      console.error(e)
      logout()
    }
    setIsLoadingProfile(false)
  }

  const resetUrl = () => {
    setTimeout(() => {
      window.history.pushState({}, null, '/')
    }, 2000)
  }
  return (
    <div>
      <RegisterModal
        showRegisterModal={showRegisterModal}
        formRegisterValues={formRegisterValues}
        handleCloseRegisterModal={handleCloseRegisterModal}
        isLoadingRegisterForm={isLoadingRegisterForm}
        handleSubmitRegister={handleSubmitRegister}
        handleChangeRegisterForm={handleChangeRegisterForm}
        responseOfApiRegister={responseOfApiRegister}
      />
      <LoginModal
        showLoginModal={showLoginModal}
        formLoginValues={formLoginValues}
        handleCloseLoginModal={handleCloseLoginModal}
        isLoadingLoginForm={isLoadingLoginForm}
        handleSubmitLogin={handleSubmitLogin}
        handleChangeLoginForm={handleChangeLoginForm}
        responseOfApiLogin={responseOfApiLogin}
        handleOpenForgotModal={handleOpenForgotModal}
      />
      <ForgotModal
        showForgotModal={showForgotModal}
        formForgotValues={formForgotValues}
        handleCloseForgotModal={handleCloseForgotModal}
        isLoadingForgotForm={isLoadingForgotForm}
        handleSubmitForgot={handleSubmitForgot}
        handleChangeForgotForm={handleChangeForgotForm}
        responseOfApiForgot={responseOfApiForgot}
      />
      <ResetModal
        showResetModal={showResetModal}
        formResetValues={formResetValues}
        handleCloseResetModal={handleCloseResetModal}
        isLoadingResetForm={isLoadingResetForm}
        handleSubmitReset={handleSubmitReset}
        handleChangeResetForm={handleChangeResetForm}
        responseOfApiReset={responseOfApiReset}
      />
      <RegisterConfirmModal
        showConfirmEmailModal={showConfirmEmailModal}
        handleCloseConfirmEmailModal={handleCloseConfirmEmailModal}
        isLoadingRegisterConfirmModal={isLoadingRegisterConfirmModal}
      />
    </div>
  )
}

export default Modals
