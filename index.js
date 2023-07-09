const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.get('/', (req, res) => {
    res.send("HELLO WORLD")
})


app.post('/api/form', (req, res) => {
    console.log(req.body);

    let data = req.body

    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'jephthahndukwe@gmail.com',
            pass: 'bmragnxerhrmuotp',
        }
    });

    let mailOptions = {
        from: data.Email,
        to: 'jephthahndukwe@gmail.com',
        subject: `New Registration from Soair Africa`,
        html: `
         
         <h1>New Registration From Soair Africa</h1>
            <h3>User Information</h3>
          <ul>
            <li>Name: ${data.Name}</li>
            <li>Email: ${data.Email}</li>
            <li>Number: ${data.Number}</li>
          </ul>

          <h3>Desired Course</h3>
            <ul>
               <li>Course: ${data.course}</li>
            </ul>

           <h3>Preferred Payment</h3>
              <ul>
                <li>Payment: ${data.payment}</li>
              </ul>
        `
    };


    smtpTransport.sendMail(mailOptions, (error, res) => {
        if(error) {
            res.send(error);
        }
        else {
            res.send('success')
        }
    })

    smtpTransport.close();
})

    app.post('/api/contact', (req, res) => {
        console.log(req.body);

        let data2 = req.body

        let smtp = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth: {
                user: 'jephthahndukwe@gmail.com',
                pass: 'bmragnxerhrmuotp',
            }
        });

        let mail = {
            from: data2.email,
            to: 'jephthahndukwe@gmail.com',
            subject: 'New Message from Soair Africa',
            html: `
              <h1>New Message from Soair Africa</h1>
                <ul>
                  <li>User Full Name: ${data2.firstName} ${data2.secondName}</li>
                  <li>User Email: ${data2.email}</li> 
                </ul>
                <h3>User Message</h3>
                  <p>${data2.message}</p>
            `
        };

        smtp.sendMail(mail, (error, response) => {
            if(error) {
                res.send(error);
            }
            else {
                res.send('success')
            }
        })
        
        smtp.close();

})




const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server running at port http://localhost:${PORT}`);
})