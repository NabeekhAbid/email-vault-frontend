// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import UserSignup from '../components/UserSignup.vue'
import UserVerify from '../components/UserVerify.vue'
import EmailVerify from '../components/EmailVerify.vue'
import VerifyEmail from '../components/VerifyEmail.vue'
import CreateAccount from '../components/CreateAccount.vue'
import PasswordReset from '../components/PasswordReset.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import ConfirmPassword from '../components/ConfirmPassword.vue'



const routes = [
  {
    path: '/',
    name: 'UserSignup',
    component: UserSignup
  },
  {
    path: '/user-verify',
    name: 'UserVerify',
    component: UserVerify
  },
  {
    path: '/email-verify',
    name: 'EmailVerify',
    component: EmailVerify
  },
  {
    path: '/verify-token',
    name: 'VerifyEmail',
    component: VerifyEmail
  },
  {
    path: '/create-account',
    name: 'CreateAccount',
    component: CreateAccount
  },
 
  
  {
    path: '/password-reset',
    name: 'PasswordReset',
    component: PasswordReset
  },
  {
    path: '/Forgot-Password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/reset-password',
    name: 'ConfirmPassword',
    component: ConfirmPassword
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
