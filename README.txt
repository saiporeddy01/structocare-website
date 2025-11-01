
StructoCare Website Package
===========================

Files included:
- index.html
- styles.css
- script.js
- assets/ (placeholders: logo.png, favicon.png, hero.jpg, project images)
- apps-script.txt (Google Apps Script backend code to save leads to Google Sheets)
- README.txt (this file)

----

QUICK START (local)
1. Unzip the package.
2. Edit index.html: replace all placeholders:
   - phone number: +91XXXXXXXXXX
   - WhatsApp links
   - info@yourdomain.com -> your email
   - JSON-LD url & logo paths
3. Replace assets/logo.png and hero/project images in assets/.
4. Open index.html in a browser to preview.

APPS SCRIPT (serverless contact form -> Google Sheets)
1. Create a new Google Sheet in your Google account.
2. Rename the first sheet tab to 'Leads' (or change SHEET_NAME in apps-script.txt).
3. In the spreadsheet, go to Extensions → Apps Script.
4. Paste the content of apps-script.txt (this file in the package) and save.
5. (Optional) Run setupHeaders() from the Apps Script editor to create headers.
6. Deploy: Click 'Deploy' → 'New deployment' → Select 'Web app'.
   - Execute as: Me (your account)
   - Who has access: Anyone (or Anyone with the link)
7. Copy the Web App URL.
8. Edit script.js in this package and set APPS_SCRIPT_ENDPOINT to that URL.
9. Upload the site to any static host (Netlify, GitHub Pages, Vercel) or serve locally.

SECURITY NOTE
- If you select "Anyone" access, the endpoint can receive anonymous posts — this is expected for a contact form. You can add simple secret-key checks if needed.
- For production, consider validating incoming requests in Apps Script against a secret token.

If you want, I can:
- Deploy the static site to Netlify for you (you'd need to provide a ZIP and a Netlify account or give me repo access), OR
- Walk you through Apps Script deployment step-by-step and update your script.js with the final endpoint.
