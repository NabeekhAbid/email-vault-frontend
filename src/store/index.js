    import { defineStore } from 'pinia';
    import axios from 'axios';
    export const useSignupStore = defineStore('signup', {
        state: () => ({
        user: null,
        error: null,    
        verificationStatus: null,
        }),
        actions: {
        async signup(firstName, lastName, companyName, email, password) {
            try {
            const response = await axios.post(`${process.env.VUE_APP_API_URL}/register`, {
                firstName,
                lastName,   
                companyName,
                email,
                password,
            });
            this.user = response.data; // Assuming your API returns the user data
            this.error = null; // Clear any previous errors
            } catch (error) {
            this.error = error.response.data; // Capture the error response from the API
            }
        },
        async verifyEmail(token) {
            try {
            const response = await axios.post(`${process.env.VUE_APP_API_URL}/verify-email`, {
                token,
            });
            this.verificationStatus = response.data.message;
            this.error = null;
            } catch (error) {
            this.verificationStatus = null;
            this.error = error.response.data.detail;
            }
        },
        async login(email, password) {
            try {
              const response = await axios.post(`${process.env.VUE_APP_API_URL}/login`, {
                email,
                password,
              });
              this.user = response.data.user; // Store user data on successful login
              this.error = null;               // Clear any previous errors
            } catch (error) {
              this.user = null;                // Clear user data on error
              this.error = error.response?.data.detail || 'Login failed. Please try again.'; // Capture error response
            }
          },
          async resetPassword(email) { // New action for password reset
            try {
                const response = await axios.post(`${process.env.VUE_APP_API_URL}/reset-password`, {
                    email,
                });
                this.resetPasswordStatus = response.data.message; // Capture success message
                this.error = null; // Clear any previous errors
            } catch (error) {
                this.resetPasswordStatus = null; // Clear status on error
                this.error = error.response?.data.detail || 'Password reset request failed. Please try again.'; // Capture error response
            }
        }, 
        async confirmResetPassword(token, email, newPassword) {
            try {
              const response = await axios.post(`${process.env.VUE_APP_API_URL}/confirm-reset-password`, {
                token,
                email, // Include the email in the request body
                new_password: newPassword // Ensure this matches the expected key in the backend
              });
              this.resetPasswordStatus = response.data.message; // Capture success message
              this.error = null; // Clear any previous errors
            } catch (error) {
              this.resetPasswordStatus = null; // Clear status on error
              this.error = error.response?.data.detail || 'Password reset confirmation failed. Please try again.'; // Capture error response
            }
          },
          
          
        },
    });