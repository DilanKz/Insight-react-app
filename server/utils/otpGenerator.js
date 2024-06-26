const otpGenerator={
    getOtp:function generateOTP() {
        const digits = '0123456789';
        let otp = '';

        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * digits.length);
            otp += digits.charAt(randomIndex);
        }

        return otp;
    }
}

module.exports=otpGenerator;