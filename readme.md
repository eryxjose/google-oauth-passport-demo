# Projeto demo google auth passport 




# Node modules install

Install git-scm
Install NodeJS
npm install --save passport passport-google-oauth20
npm install --save nodemon



# Refs

https://www.passportjs.org/docs/
https://www.passportjs.org/packages/passport-google-oauth20/
https://cloud.mongodb.com/



# Passo a passo configurações projeto no google cloud

Google Project Setup with new UI
In the upcoming lecture, we will be going through the steps to create a new Google Project. Since the UI has changed, we have provided screenshots with the steps needed to create the project and obtain the Client Id and Client Secret.

1. Go to the Google Project Dashboard:

https://console.cloud.google.com

2. Click the CREATE PROJECT button


3. Name the project and click the CREATE button


4. Click the menu button, select APIs & Services, then OAuth Consent Screen




5. Select External and click the CREATE button




6. Fill out the App Name field. Then, add your email address to the User support email field.




Scroll to the bottom under Developer contact information and add again your email address. Click the SAVE AND CONTINUE button. No other info should be filled out on the consent screen at this time.






7. Click Credentials in the sidebar and then click the CREATE CREDENTIALS button


9. Select OAuth client ID




10. Select Web Application and fill out the Authorized JavaScript origins, Authorized redirect URIs, and click the Create button.

Authorized JavaScript Origins:

http://localhost:5000

Authorized redirect URI

http://localhost:5000/auth/google/callback


Note! Google has made a number of changes to the OAuth credential's restrictions, and no longer allows wildcards in the redirect URI field. If you follow along with the upcoming video lecture you will get this error: Invalid Redirect: cannot contain a wildcard (*)

Since the main goal of using http://localhost:5000/* was to show the redirect error a few lectures later, we entered the correct redirect as shown above since this is what it will be changed to anyway.

11. Copy your Client ID and Client Secret in a safe place so you can use them in your application in a future lecture. (ID and Secret were redacted from the screenshot)



# Passo a passo para configuração MongoDB

MongoDB Atlas Setup and Configuration
mLab, which is the service we use for our remote Mongo database, was acquired by MongoDB. They have now since closed off all new mLab registrations. Instead, our students will be redirected to MongoDB's Atlas product, which has a free tier similar to mLab, albeit more powerful.

Here are the steps to set up a MongoDB account and Atlas cluster to use with the Emaily project:

1.  Go to https://www.mongodb.com/atlas/database and click the Try Free button (or Sign In if you already have an account)




2.  Create your MongoDB user account and click the Get started free button.




3.  After creating your account, you will be prompted to accept the privacy policy and ToS. Click the Submit button to continue.


4. You should see a brief questionnaire. Select Learn MongoDB, Application Modernization, and JavaScript.


5. You will then be prompted to create a cluster. Select the far right Shared Free tier cluster option and click the Create button.


6. Leave all free tier options selected - AWS, North America: N. Virginia, etc. Click the Create Cluster button.


7. You will then be prompted with a security configuration screen. Enter a Username and click the Autogenerate Secure Password button. Copy this password to a safe place as you will need it a few steps from now.


8. Scroll down to the Where would you like to connect from section. Select My Local Environment. Then, enter 0.0.0.0/0 in the IP Address field. This will be very important to avoid connection errors especially if your IP address changes frequently, or, you develop from multiple locations (home, work, a coffee shop, etc). Click the Finish button.


9. You should next see a Congratulations popup modal. Click the Go to Databases button.


10. The cluster will take a few minutes or more to generate. Eventually, you should see a green circle to the left of the cluster name. Once you see the circle, click the Connect button.


11. Select Connect Your Application




12. Copy the full connection string and click the Close button. Head back over to your local Emaily application.


13. In your config/keys.js file create the mongoURI key-value pair if you haven't already done so.

Remember the comma if adding in-between other key-value pairs:

  googleClientID: 'redacted',
  googleClientSecret: 'redacted',
  mongoURI: '',
  cookieKey: 'redacted',
Add the connection string by pasting the entire address string you copied from the screen before.

mongoURI: 'COPY_THE_SRV_ADDRESS_STRING_HERE'

Remember to replace <password> with the Atlas user's actual password.

Next, you must add an arbitrary database name to the connection string. In the example below we have added the name emailydb after the slash and before the question mark:

"mongodb+srv://test:6fAA6FD5kGirCRaE@cluster0.53pjbra.mongodb.net/emailydb?retryWrites=true&w=majority",

14. Restart your local Node server if you have not already done so.

15. In a few lectures from now, you will be testing adding users to your database cluster. You can navigate to the databases that were created by finding the Browse Collections tab.

